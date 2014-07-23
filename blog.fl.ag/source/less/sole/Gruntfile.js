'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 7653,
          base: ['build'],
          keepalive: true,
          livereload: true
        }
      }
    },
    jade: {
      build: {
        options: {
          pretty: true
        },
        src: "source/jade/sole.jade",
        dest: "build/index.html"
      }
    },
    less: {
      build: {
        src: 'source/less/sole.less',
        dest: 'build/sole.css'
      }
    },
    watch: {
      buildHTML: {
        files: ['**/*.jade'],
        tasks: ['buildHTML']
      },
      buildCSS: {
        files: ['**/*.less'],
        tasks: ['buildCSS']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['build/*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('buildHTML', [
    'jade:build'
  ]);

  grunt.registerTask('buildCSS', [
    'less:build'
  ]);

  grunt.registerTask('build', [
    'buildHTML',
    'buildCSS'
  ]);
};