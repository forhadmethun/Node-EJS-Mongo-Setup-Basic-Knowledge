var fs = require('fs');
fs.writeFileSync('corn.txt','corn is good and corn is life');
console.log(fs.readFileSync('corn.txt').toString());

var path = require('path');

var websiteHome = '/home/var/lib/index.html';
var websiteAbout = '/home/var/lib/about.html';

console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

// setInterval(function(){console.log("i will go forever")},200);

console.log(__dirname);
console.log(__filename);