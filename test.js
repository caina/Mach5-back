var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

var mocha = new Mocha();

var testDir = './test'

fs.readdirSync(testDir).filter(function(file){
    return file.substr(-3) === '.js';
}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});

mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
});