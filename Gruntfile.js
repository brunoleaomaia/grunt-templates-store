/*
 * grunt-templates-store
 * https://github.com/brunoleaomaia/templates-store
 *
 * Copyright (c) 2014 Bruno Maia
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    clean: {
      tests: ['tmp'],
    },
    templates_store: {
      default_options: {
        options: {
          name: 'window.TemplatesStore'
        },
        files: {
          'tmp/TStoreGenerated.js': ['test/fixtures/*.hbs'],
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('generate', ['clean', 'templates_store']);
  grunt.registerTask('test', ['generate', 'nodeunit']);  
  grunt.registerTask('default', ['jshint', 'test']);
};