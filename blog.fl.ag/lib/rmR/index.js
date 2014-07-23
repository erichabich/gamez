'use strict';

/* global require, module */

// Source: https://gist.github.com/tkihira/2367067

var fs = require('fs');
var path = require('path');

var rmR = function (dir) {
  if (fs.existsSync(dir)) {
    var list = fs.readdirSync(dir);
    for(var i = 0; i < list.length; i++) {
      var filename = path.join(dir, list[i]);
      var stat = fs.statSync(filename);
      if(filename == '.' || filename == '..') {
        // pass over these files
      } else if(stat.isDirectory()) {
        // rmdir recursively
        rmR(filename);
      } else {
        // rm fiilename
        fs.unlinkSync(filename);
      }
    }
    fs.rmdirSync(dir);
  } else {
    console.log(dir + ' does not exist.');
  }
};

module.exports = rmR;