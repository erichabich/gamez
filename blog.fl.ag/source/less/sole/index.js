'use strict';

var exec = require('child_process').exec;

var write = function (data) {
  process.stdout.write(data);
};
var listen = function (childProcess) {
  childProcess.stdout.on('data', write);
  childProcess.stderr.on('data', write);
};

listen(exec('grunt watch'));
listen(exec('grunt connect'));