'use strict';

var fs = require('fs');

var regOne = /<[^/].+?(?=>)./g;
var idIndex = 0;

var args = process.argv.slice(2);
var htmlFileName = args[0];

if(!htmlFileName) {
	console.log('enter html file name');
	process.exit();
}

// 1) load ID file
console.log('loading IDs');
var ids = readFile('./ids.txt');
ids = ids.split('\n');

// 2) load HTML
console.log('loading HTML');
var html = readFile( './input/' + htmlFileName + '.html' );

html = html.replace( regOne, function( match ) {

  var index = match.indexOf(' ');

  if(index === -1 ) {

    match = match.slice( 0, match.indexOf('<') -1 );
    match += ' ';
    match += 'id="' + getNextId() + '"';
    match += '>';
  } else {
    match = match.slice(0, index);
    match += ' ';
    match += 'id="' + getNextId() + '"';
    match += '>';
  }

  return match;
});

// 4) Save
console.log("saving file");
writeFile( './output/' + htmlFileName + '.html', html );

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

function getNextId() {

  var temp = ids[idIndex];
  idIndex++;
  return temp;
}