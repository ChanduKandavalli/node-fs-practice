var fs = require('fs');
 var readMe = fs.readFileSync('README.md', 'utf-8');
 console.log(readMe);