var fs = require('fs');

const testFolder = '.';
var content = '';
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    content += file + '\n';
  });
  fs.writeFile('mynewfile.txt', content, function (err) {
    if (err) throw err;
  });
});








