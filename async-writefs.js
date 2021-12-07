var fs= require('fs');
fs.readFile('README.md','utf-8',function(err, data){
  fs.writeFile('writeMe.txt',data, function(err, data){});
});