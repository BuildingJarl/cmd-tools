'use strict';

var fs = require('fs');

var regOne = /<[^/].+?(?=>)./g;

var args = process.argv.slice(2);
var htmlFileName = args[0];

if(!htmlFileName) {
	console.log('enter html file name');
	process.exit();
}

// 1) load ID file
console.log('loading IDs');
var ids = readFile('./ids.txt').split('/n');

// 2) load HTML
console.log('loading HTML');
var html = readFile( './input/' + htmlFileName + '.html' ).split('/n');

for( var i = 0; i < html.length; i ++ ) {

  // 3) clean each line
  //if opening tag delete all attributes and add id = randomId
  var line = html[i];

  //line.replace( reg, func or substring )

  line.replace( regOne , function( match, offset, string ) {
    
    var first = line.slice( 0, offset);
    var last = line.slice( match.length );

    html[i] = [ first, '<hello>', last].join('');
  });
}

// 4) Save
console.log("saving file");
writeFile( './output/' + htmlFileName + '.html', html.join('/n') );

/* --------------------------------- */


function readFile( path ) {
  return fs.readFileSync( path, 'utf8');
}

function writeFile( path, data ) {
  fs.writeFile( path, data, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was successfully saved!");
      }
  });
}