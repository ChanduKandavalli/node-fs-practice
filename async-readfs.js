var fs = require('fs');
fs.readFile('README.md', 'utf-8',function(_err, data){
    console.log(data);
});

console.log('Hi');
