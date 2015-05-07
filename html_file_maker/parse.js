var fs = require('fs');


var args = process.argv.slice(2);
var htmlFileName = args[0];

if(!htmlFileName) {
	console.log('enter html file name');
	process.exit();
}

/*
 1) load html file
 2) load id file
 3) for each tag delete all of its attributes and add id=nextIDInArrary
*/

fs.readFile( htmlFileName + '.html', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(data.toString());
  //do parsing in here
  //find all opening tags
  // remove everything until >
  // add id="valuefromfile"
  //write new file
});
