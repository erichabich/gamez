'use strict';

/* global require, __dirname, module */

var fs = require('fs');
var path = require('path');
var rmR = require('./lib/rmR');

var target = path.resolve(__dirname, '../themes/blog.fl.ag');

module.exports = function (grunt) {
  grunt.registerTask('prebuild', function () {
    var pkgSrc = grunt.file.readJSON('package.json');
    var pkgDest = {};
  
    rmR(target);

    grunt.file.mkdir('./temp');
    grunt.file.mkdir(target + '/assets/css/');
    grunt.file.mkdir(target + '/assets/fonts/');
    grunt.file.mkdir(target + '/assets/img/');
    grunt.file.mkdir(target + '/assets/js/');

    pkgDest.name = pkgSrc.name;
    pkgDest.version = pkgSrc.version;
    pkgDest.authors = pkgSrc.authors;
    pkgDest.private = true;
    pkgDest = JSON.stringify(pkgDest, null, 4);
    fs.writeFileSync(target + '/package.json', pkgDest);
  });

  grunt.initConfig({
    concat: {
      css: {
        src: ['source/css/fonts.css', 'temp/blog.fl.ag.css'],
        dest: target + '/assets/css/blog.fl.ag.css'
      }
    },

    copy: {
      fonts: {
        expand: true,
        flatten: true,
        src: 'source/fonts/*',
        dest: target + '/assets/fonts/'
      },
      hbs: {
        expand: true,
        flatten: true,
        src: 'source/hbs/*',
        dest: target + '/'
      },
      img: {
        expand: true,
        flatten: true,
        src: 'source/img/*',
        dest: target + '/assets/img/'
      },
      md: {
        expand: true,
        flatten: true,
        src: 'source/md/*',
        dest: target + '/'
      }
    },

    less: {
      build: {
        src: 'source/less/sole/source/less/sole.less',
        dest: 'temp/blog.fl.ag.css'
      }
    },

    watch: {
      files: ['source/**/*.less','source/**/*.hbs'],
      tasks: ['development'] 
    }
  });

  grunt.registerTask('postbuild', function () {
    rmR('./temp');
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('development', [
    'prebuild',
    'copy:md',
    'copy:hbs',
    'copy:fonts',
    'copy:img',
    'less:build',
    'concat:css',
    'postbuild'
  ]);
};