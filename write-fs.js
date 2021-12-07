var fs= require('fs');
var readMe = fs.readFileSync('README.md', 'utf-8');

fs.writeFileSync('writeMe.txt', readMe); 