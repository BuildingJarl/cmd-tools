'use strict';

var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

var cheerioOptions = {
    normalizeWhitespace: false,
    xmlMode: false,
    decodeEntities: true
}

process.send({ event: 'getNext'});

process.on('message', function(msg) {

	if(msg.event === 'next') {
		
		if(msg.anyLeft === false) {
			process.send( {event: 'killMe'} )
		} else {
			
			getDOM(msg.data.url).then( function(body) {

				var data = msg.data;

				
				if(body) {
					
					var $ = cheerio.load(body,cheerioOptions);
					
					if($) {

						console.log( msg.pid + ' Got DOM for: ' + msg.data.url );

						var totalNodes = getTotalNodesInPage($);
						var deepestLevel = getDeepestLevel($);
						var leafNodes = getLeafNodeCount($);
						
						data.stats.totalNodes = totalNodes;
						data.stats.deepestLevel = deepestLevel;
						data.stats.leafNodes = leafNodes;

						process.send( { event: 'stats', data: data });
						process.send( { event: 'getNext' } );
					} else {
						console.log( msg.pid + ' Error parsing DOM for: ' + msg.data.url );
						process.send( { event: 'getNext'} );
					}
					
				} else {
					console.log( msg.pid + ' Error getting DOM for: ' + msg.data.url );
					process.send( { event: 'getNext'} );
				}
				
			}, function(err){
				console.log( msg.pid + ' Error getting DOM for: ' + msg.data.url );
				process.send( { event: 'getNext'} );
			});
		}

		
	}
});

function getDOM(url) {
	
	var defer = Q.defer();

	var options = { 
		url: 'http://' + url, 
		timeout: 5000,
		headers: {
			'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36',
			"accept-charset" : "ISO-8859-1,utf-8;q=0.7,*;q=0.3",
			"accept-language" : "en-US,en;q=0.8",
			"accept" : "text/html,application/xhtml+xml"
    	}
    };


	request(options, function(error, response, body) {

		//console.log(response.statusCode);

		if(error) {
			defer.reject(error);
		} else {
			
			if(response.statusCode !== 200) {
				defer.reject(error)
			} else {
				defer.resolve(body);
			}
		}
	});


	return defer.promise;
}

function getTotalNodesInPage($) {
	//incomming object is a cheerio object
	return $('*').length;
}

function getDeepestLevel($){

	var maxLevleCount = 0;
	var maxLevel = 0;

	var html = $('html').get(0);

	if(html) {
		traverse(html);	
	}
	

	function traverse(node){

			/*
			//For testing
			console.log(node.name);
			*/

			if(node.children) {
				node.children.forEach( function(child) {
					
					//no comments or text nodes
					if(child.type !== 'text' && child.type !== 'comment') {

						maxLevleCount ++;

						if(maxLevleCount > maxLevel){
							maxLevel = maxLevleCount;
						}
						traverse(child);
						maxLevleCount --;
					}
				});
			}
	};

	return maxLevel;
}

function getLeafNodeCount($) {
	
	var html = $('html').get(0);
	var count = 0;

	if(html) {
		traverse(html.children);
	}

	function traverse(children) {
		children.forEach( function(child) {

			if(child.children) {
				if(child.children.length === 0) {
					count += 1;
				}
				traverse(child.children);
			}
		});
	}

	return count;
}