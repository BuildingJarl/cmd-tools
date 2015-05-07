'use strict';

var paths = '/en-US/docs/Web/CSS/align-content, /en-US/docs/Web/CSS/align-items, /en-US/docs/Web/CSS/align-self, /en-US/docs/Web/CSS/all, /en-US/docs/Web/CSS/angle, /en-US/docs/Web/CSS/animation, /en-US/docs/Web/CSS/animation-delay, /en-US/docs/Web/CSS/animation-direction, /en-US/docs/Web/CSS/animation-duration, /en-US/docs/Web/CSS/animation-fill-mode, /en-US/docs/Web/CSS/animation-iteration-count, /en-US/docs/Web/CSS/animation-name, /en-US/docs/Web/CSS/animation-play-state, /en-US/docs/Web/CSS/animation-timing-function, /en-US/docs/Web/CSS/attr, /en-US/docs/Web/CSS/::backdrop, /en-US/docs/Web/CSS/backface-visibility, /en-US/docs/Web/CSS/background, /en-US/docs/Web/CSS/background-attachment, /en-US/docs/Web/CSS/background-blend-mode, /en-US/docs/Web/CSS/background-clip, /en-US/docs/Web/CSS/background-color, /en-US/docs/Web/CSS/background-image, /en-US/docs/Web/CSS/background-origin, /en-US/docs/Web/CSS/background-position, /en-US/docs/Web/CSS/background-repeat, /en-US/docs/Web/CSS/background-size, /en-US/docs/Web/CSS/basic-shape, /en-US/docs/Web/CSS/::before, /en-US/docs/Web/CSS/blend-mode, /en-US/docs/Web/CSS/block-size, /en-US/docs/Web/CSS/border, /en-US/docs/Web/CSS/border-block-end, /en-US/docs/Web/CSS/border-block-end-color, /en-US/docs/Web/CSS/border-block-end-style, /en-US/docs/Web/CSS/border-block-end-width, /en-US/docs/Web/CSS/border-block-start, /en-US/docs/Web/CSS/border-block-start-color, /en-US/docs/Web/CSS/border-block-start-style, /en-US/docs/Web/CSS/border-block-start-width, /en-US/docs/Web/CSS/border-bottom, /en-US/docs/Web/CSS/border-bottom-color, /en-US/docs/Web/CSS/border-bottom-left-radius, /en-US/docs/Web/CSS/border-bottom-right-radius, /en-US/docs/Web/CSS/border-bottom-style, /en-US/docs/Web/CSS/border-bottom-width, /en-US/docs/Web/CSS/border-collapse, /en-US/docs/Web/CSS/border-color, /en-US/docs/Web/CSS/border-image, /en-US/docs/Web/CSS/border-image-outset, /en-US/docs/Web/CSS/border-image-repeat, /en-US/docs/Web/CSS/border-image-slice, /en-US/docs/Web/CSS/border-image-source, /en-US/docs/Web/CSS/border-image-width, /en-US/docs/Web/CSS/border-inline-end, /en-US/docs/Web/CSS/border-inline-end-color, /en-US/docs/Web/CSS/border-inline-end-style, /en-US/docs/Web/CSS/border-inline-end-width, /en-US/docs/Web/CSS/border-inline-start, /en-US/docs/Web/CSS/border-inline-start-color, /en-US/docs/Web/CSS/border-inline-start-style, /en-US/docs/Web/CSS/border-inline-start-width, /en-US/docs/Web/CSS/border-left, /en-US/docs/Web/CSS/border-left-color, /en-US/docs/Web/CSS/border-left-style, /en-US/docs/Web/CSS/border-left-width, /en-US/docs/Web/CSS/border-radius, /en-US/docs/Web/CSS/border-right, /en-US/docs/Web/CSS/border-right-color, /en-US/docs/Web/CSS/border-right-style, /en-US/docs/Web/CSS/border-right-width, /en-US/docs/Web/CSS/border-spacing, /en-US/docs/Web/CSS/border-style, /en-US/docs/Web/CSS/border-top, /en-US/docs/Web/CSS/border-top-color, /en-US/docs/Web/CSS/border-top-left-radius, /en-US/docs/Web/CSS/border-top-right-radius, /en-US/docs/Web/CSS/border-top-style, /en-US/docs/Web/CSS/border-top-width, /en-US/docs/Web/CSS/border-width, /en-US/docs/Web/CSS/bottom, /en-US/docs/Web/CSS/box-decoration-break, /en-US/docs/Web/CSS/box-shadow, /en-US/docs/Web/CSS/box-sizing, /en-US/docs/Web/CSS/break-after, /en-US/docs/Web/CSS/break-before, /en-US/docs/Web/CSS/break-inside, /en-US/docs/Web/CSS/calc, /en-US/docs/Web/CSS/caption-side, /en-US/docs/Web/CSS/@charset, /en-US/docs/Web/CSS/:checked, /en-US/docs/Web/CSS/clear, /en-US/docs/Web/CSS/clip, /en-US/docs/Web/CSS/clip-path, /en-US/docs/Web/CSS/length#cm, /en-US/docs/Web/CSS/color, /en-US/docs/Web/CSS/color_value, /en-US/docs/Web/CSS/columns, /en-US/docs/Web/CSS/column-count, /en-US/docs/Web/CSS/column-fill, /en-US/docs/Web/CSS/column-gap, /en-US/docs/Web/CSS/column-rule, /en-US/docs/Web/CSS/column-rule-color, /en-US/docs/Web/CSS/column-rule-style, /en-US/docs/Web/CSS/column-rule-width, /en-US/docs/Web/CSS/column-span, /en-US/docs/Web/CSS/column-width, /en-US/docs/Web/CSS/content, /en-US/docs/Web/CSS/counter, /en-US/docs/Web/CSS/counter-increment, /en-US/docs/Web/CSS/counter-reset, /en-US/docs/Web/CSS/@counter-style, /en-US/docs/Web/CSS/cursor, /en-US/docs/Web/CSS/custom-ident, /en-US/docs/Web/CSS/:default, /en-US/docs/Web/CSS/:dir, /en-US/docs/Web/CSS/direction, /en-US/docs/Web/CSS/:disabled, /en-US/docs/Web/CSS/display, /en-US/docs/Web/CSS/@document, /en-US/docs/Web/CSS/element, /en-US/docs/Web/CSS/:empty, /en-US/docs/Web/CSS/empty-cells, /en-US/docs/Web/CSS/:enabled, /en-US/docs/Web/CSS/filter, /en-US/docs/Web/CSS/:first, /en-US/docs/Web/CSS/:first-child, /en-US/docs/Web/CSS/::first-letter, /en-US/docs/Web/CSS/::first-line, /en-US/docs/Web/CSS/:first-of-type, /en-US/docs/Web/CSS/flex, /en-US/docs/Web/CSS/flex-basis, /en-US/docs/Web/CSS/flex-direction, /en-US/docs/Web/CSS/flex-flow, /en-US/docs/Web/CSS/flex-grow, /en-US/docs/Web/CSS/flex-shrink, /en-US/docs/Web/CSS/flex-wrap, /en-US/docs/Web/CSS/float, /en-US/docs/Web/CSS/:focus, /en-US/docs/Web/CSS/font, /en-US/docs/Web/CSS/@font-face, /en-US/docs/Web/CSS/font-family, /en-US/docs/Web/CSS/font-feature-settings, /en-US/docs/Web/CSS/@font-feature-values, /en-US/docs/Web/CSS/font-kerning, /en-US/docs/Web/CSS/font-language-override, /en-US/docs/Web/CSS/font-size, /en-US/docs/Web/CSS/font-size-adjust, /en-US/docs/Web/CSS/font-stretch, /en-US/docs/Web/CSS/font-style, /en-US/docs/Web/CSS/font-synthesis, /en-US/docs/Web/CSS/font-variant, /en-US/docs/Web/CSS/font-variant-alternates, /en-US/docs/Web/CSS/font-variant-caps, /en-US/docs/Web/CSS/font-variant-east-asian, /en-US/docs/Web/CSS/font-variant-ligatures, /en-US/docs/Web/CSS/font-variant-numeric, /en-US/docs/Web/CSS/font-variant-position, /en-US/docs/Web/CSS/font-weight, /en-US/docs/Web/CSS/frequency, /en-US/docs/Web/CSS/:fullscreen, /en-US/docs/Web/CSS/gradient, /en-US/docs/Web/CSS/grid, /en-US/docs/Web/CSS/grid-area, /en-US/docs/Web/CSS/grid-auto-columns, /en-US/docs/Web/CSS/grid-auto-flow, /en-US/docs/Web/CSS/grid-auto-position, /en-US/docs/Web/CSS/grid-auto-rows, /en-US/docs/Web/CSS/grid-column, /en-US/docs/Web/CSS/grid-column-start, /en-US/docs/Web/CSS/grid-column-end, /en-US/docs/Web/CSS/grid-row, /en-US/docs/Web/CSS/grid-row-start, /en-US/docs/Web/CSS/grid-row-end, /en-US/docs/Web/CSS/grid-template, /en-US/docs/Web/CSS/grid-template-areas, /en-US/docs/Web/CSS/grid-template-rows, /en-US/docs/Web/CSS/grid-template-columns, /en-US/docs/Web/CSS/height, /en-US/docs/Web/CSS/:hover, /en-US/docs/Web/CSS/hyphens, /en-US/docs/Web/CSS/image, /en-US/docs/Web/CSS/image, /en-US/docs/Web/CSS/image-rendering, /en-US/docs/Web/CSS/image-resolution, /en-US/docs/Web/CSS/image-orientation, /en-US/docs/Web/CSS/ime-mode, /en-US/docs/Web/CSS/@import, /en-US/docs/Web/CSS/:indeterminate, /en-US/docs/Web/CSS/inherit, /en-US/docs/Web/CSS/initial, /en-US/docs/Web/CSS/inline-size, /en-US/docs/Web/CSS/:in-range, /en-US/docs/Web/CSS/integer, /en-US/docs/Web/CSS/:invalid, /en-US/docs/Web/CSS/isolation, /en-US/docs/Web/CSS/justify-content, /en-US/docs/Web/CSS/@keyframes, /en-US/docs/Web/CSS/:lang, /en-US/docs/Web/CSS/:last-child, /en-US/docs/Web/CSS/:last-of-type, /en-US/docs/Web/CSS/left, /en-US/docs/Web/CSS/:left, /en-US/docs/Web/CSS/length, /en-US/docs/Web/CSS/letter-spacing, /en-US/docs/Web/CSS/linear-gradient, /en-US/docs/Web/CSS/line-break, /en-US/docs/Web/CSS/line-height, /en-US/docs/Web/CSS/:link, /en-US/docs/Web/CSS/list-style, /en-US/docs/Web/CSS/list-style-image, /en-US/docs/Web/CSS/list-style-position, /en-US/docs/Web/CSS/list-style-type, /en-US/docs/Web/CSS/margin, /en-US/docs/Web/CSS/margin-block-end, /en-US/docs/Web/CSS/margin-block-start, /en-US/docs/Web/CSS/margin-bottom, /en-US/docs/Web/CSS/margin-inline-end, /en-US/docs/Web/CSS/margin-inline-start, /en-US/docs/Web/CSS/margin-left, /en-US/docs/Web/CSS/margin-right, /en-US/docs/Web/CSS/margin-top, /en-US/docs/Web/CSS/marks, /en-US/docs/Web/CSS/mask, /en-US/docs/Web/CSS/mask-type, /en-US/docs/Web/CSS/max-block-size, /en-US/docs/Web/CSS/max-height, /en-US/docs/Web/CSS/max-inline-size, /en-US/docs/Web/CSS/max-width, /en-US/docs/Web/CSS/@media, /en-US/docs/Web/CSS/min-block-size, /en-US/docs/Web/CSS/min-height, /en-US/docs/Web/CSS/min-inline-size, /en-US/docs/Web/CSS/minmax, /en-US/docs/Web/CSS/min-width, /en-US/docs/Web/CSS/mix-blend-mode, /en-US/docs/Web/CSS/@namespace, /en-US/docs/Web/CSS/:not, /en-US/docs/Web/CSS/:nth-child, /en-US/docs/Web/CSS/:nth-last-child, /en-US/docs/Web/CSS/:nth-last-of-type, /en-US/docs/Web/CSS/:nth-of-type, /en-US/docs/Web/CSS/number, /en-US/docs/Web/CSS/object-fit, /en-US/docs/Web/CSS/object-position, /en-US/docs/Web/CSS/offset-block-end, /en-US/docs/Web/CSS/offset-block-start, /en-US/docs/Web/CSS/offset-inline-end, /en-US/docs/Web/CSS/offset-inline-start, /en-US/docs/Web/CSS/:only-child, /en-US/docs/Web/CSS/:only-of-type, /en-US/docs/Web/CSS/opacity, /en-US/docs/Web/CSS/:optional, /en-US/docs/Web/CSS/order, /en-US/docs/Web/CSS/orphans, /en-US/docs/Web/CSS/outline, /en-US/docs/Web/CSS/outline-color, /en-US/docs/Web/CSS/outline-offset, /en-US/docs/Web/CSS/outline-style, /en-US/docs/Web/CSS/outline-width, /en-US/docs/Web/CSS/:out-of-range, /en-US/docs/Web/CSS/overflow, /en-US/docs/Web/CSS/overflow-wrap, /en-US/docs/Web/CSS/overflow-x, /en-US/docs/Web/CSS/overflow-y, /en-US/docs/Web/CSS/padding, /en-US/docs/Web/CSS/padding-block-end, /en-US/docs/Web/CSS/padding-block-start, /en-US/docs/Web/CSS/padding-bottom, /en-US/docs/Web/CSS/padding-inline-end, /en-US/docs/Web/CSS/padding-inline-start, /en-US/docs/Web/CSS/padding-left, /en-US/docs/Web/CSS/padding-right, /en-US/docs/Web/CSS/padding-top, /en-US/docs/Web/CSS/@page, /en-US/docs/Web/CSS/page-break-after, /en-US/docs/Web/CSS/page-break-before, /en-US/docs/Web/CSS/page-break-inside, /en-US/docs/Web/CSS/percentage, /en-US/docs/Web/CSS/perspective, /en-US/docs/Web/CSS/perspective-origin, /en-US/docs/Web/CSS/pointer-events, /en-US/docs/Web/CSS/position, /en-US/docs/Web/CSS/position_value, /en-US/docs/Web/CSS/quotes, /en-US/docs/Web/CSS/radial-gradient, /en-US/docs/Web/CSS/ratio, /en-US/docs/Web/CSS/:read-only, /en-US/docs/Web/CSS/:read-write, /en-US/docs/Web/CSS/repeat, /en-US/docs/Web/CSS/::repeat-index, /en-US/docs/Web/CSS/::repeat-item, /en-US/docs/Web/CSS/repeating-linear-gradient, /en-US/docs/Web/CSS/repeating-radial-gradient, /en-US/docs/Web/CSS/:required, /en-US/docs/Web/CSS/resize, /en-US/docs/Web/CSS/resolution, /en-US/docs/Web/CSS/right, /en-US/docs/Web/CSS/:right, /en-US/docs/Web/CSS/:root, /en-US/docs/Web/CSS/ruby-align, /en-US/docs/Web/CSS/ruby-merge, /en-US/docs/Web/CSS/ruby-position, /en-US/docs/Web/CSS/:scope, /en-US/docs/Web/CSS/scroll-behavior, /en-US/docs/Web/CSS/scroll-snap-coordinate, /en-US/docs/Web/CSS/scroll-snap-destination, /en-US/docs/Web/CSS/scroll-snap-points-x, /en-US/docs/Web/CSS/scroll-snap-points-y, /en-US/docs/Web/CSS/scroll-snap-type, /en-US/docs/Web/CSS/::selection, /en-US/docs/Web/CSS/shape, /en-US/docs/Web/CSS/shape-image-threshold, /en-US/docs/Web/CSS/shape-margin, /en-US/docs/Web/CSS/shape-outside, /en-US/docs/Web/CSS/string, /en-US/docs/Web/CSS/@supports, /en-US/docs/Web/CSS/symbols, /en-US/docs/Web/CSS/table-layout, /en-US/docs/Web/CSS/tab-size, /en-US/docs/Web/CSS/:target, /en-US/docs/Web/CSS/text-align, /en-US/docs/Web/CSS/text-align-last, /en-US/docs/Web/CSS/text-combine-upright, /en-US/docs/Web/CSS/text-decoration, /en-US/docs/Web/CSS/text-decoration-color, /en-US/docs/Web/CSS/text-decoration-line, /en-US/docs/Web/CSS/text-decoration-style, /en-US/docs/Web/CSS/text-indent, /en-US/docs/Web/CSS/text-orientation, /en-US/docs/Web/CSS/text-overflow, /en-US/docs/Web/CSS/text-rendering, /en-US/docs/Web/CSS/text-shadow, /en-US/docs/Web/CSS/text-transform, /en-US/docs/Web/CSS/text-underline-position, /en-US/docs/Web/CSS/time, /en-US/docs/Web/CSS/timing-function, /en-US/docs/Web/CSS/top, /en-US/docs/Web/CSS/touch-action, /en-US/docs/Web/CSS/transform, /en-US/docs/Web/CSS/transform-origin, /en-US/docs/Web/CSS/transform-style, /en-US/docs/Web/CSS/transition, /en-US/docs/Web/CSS/transition-delay, /en-US/docs/Web/CSS/transition-duration, /en-US/docs/Web/CSS/transition-property, /en-US/docs/Web/CSS/transition-timing-function, /en-US/docs/Web/CSS/unicode-bidi, /en-US/docs/Web/CSS/unicode-range, /en-US/docs/Web/CSS/:unresolved, /en-US/docs/Web/CSS/unset, /en-US/docs/Web/CSS/uri, /en-US/docs/Web/CSS/:valid, /en-US/docs/Web/CSS/var, /en-US/docs/Web/CSS/vertical-align, /en-US/docs/Web/CSS/@viewport, /en-US/docs/Web/CSS/visibility, /en-US/docs/Web/CSS/:visited, /en-US/docs/Web/CSS/white-space, /en-US/docs/Web/CSS/widows, /en-US/docs/Web/CSS/width, /en-US/docs/Web/CSS/will-change, /en-US/docs/Web/CSS/word-break, /en-US/docs/Web/CSS/word-spacing, /en-US/docs/Web/CSS/word-wrap, /en-US/docs/Web/CSS/writing-mode, /en-US/docs/Web/CSS/z-index,';


var fs = require("fs");
var request = require('request');
var Q = require("q");
var cheerio = require('cheerio');

var urls = trimWhite(paths.split(','));

var fileSave = "";

start(urls).then(function() {
	writeFile(fileSave);
});

function start(urls) {
	var defer = Q.defer();
	var x = 0;
	
	var loopUrls = function(arr) {
		custom(arr[x]).then( function() {
			x++;

			if(x < arr.length) {
				loopUrls(arr);
			} else {
				defer.resolve();
			}
		});
	}

	function custom( url ) {
		var defer = Q.defer();

		makeGetRequest('https://developer.mozilla.org' + url).then(function(res) {
			//console.log("boa " + res.url)
			parsePage(res);
			defer.resolve();
		}, function(err){
			console.log(err)
			defer.reqect();
		})

		return defer.promise;
	}

	loopUrls(urls);

	return defer.promise;
}



function trimWhite(arr) {
	var res = []

	for(var i = 0; i < arr.length-1; i++) {
		res.push(arr[i].trim());
	}

	return res;
}

function makeGetRequest( url ) {
	
	var defer = Q.defer();
	var options = { 
		url: url, 
		timeout: 5000
    };

    request( options, function( err, response, body ) {

    	if(err) {
    		defer.reject(err);
    	} else {
    		defer.resolve({body:body, url:url});
    	}
    });

    return defer.promise;
}

function parsePage(resu) {

	var $ = cheerio.load(resu.body);

	var ul = $('.cssprop').children('li').each( function( i , el) {
		
		var bla = $(el).find('a').first().text().trim();

		if(bla === 'Inherited') {

			var res = $(el).text();
			res = res.split(' ')[1];

			if(res === 'no') {

				console.log(resu.url + ' NO' )
				fileSave+= resu.url + ' NO\n' 
			} else {

				console.log(resu.url + ' YES' )
				fileSave+= resu.url + ' YES\n' 
			}
		}
		//console.log($(el).find('a').first().text())
	});


/*
	.find('li').each(function(i,e){
		console.log("h3ll")
	});
	
	$(ul).children().each( function(i, e) {
		console.log( "sd" );
		console.log( $(e).html());
	})

	
	if(typeof(ul) === 'string') {
		var res = ul.substr( ul.indexOf('Inherited'), ul.indexOf('Inherited') + 23)

		if(res.indexOf('yes') !== -1) {

			console.log(resu.url + ' YES' )
			fileSave+= resu.url + ' YES\n' 
		} else if(res.indexOf('no') !== -1) {
			console.log(resu.url + ' NO' )
			fileSave+= resu.url + ' NO\n' 
		}
		
	}	
	*/
}



function writeFile(text) {
	
	fs.writeFile("results.txt", text, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	});
}
