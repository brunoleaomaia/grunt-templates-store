/*
 * grunt-templates-store
 * https://github.com/brunoleaomaia/templates-store
 *
 * Copyright (c) 2014 Bruno Maia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('templates_store', 'Generates a Templates Store', function() {

		var options = this.options();
		var base = [
			'TStore = TStore || {};',
			'TStore.add = function(key, template) {',
			'	this.templates = this.templates || [];',
			'	this.templates[key] = template;',
			'};',
			'TStore.get = function(key) {',
			'	return this.templates[key] || false;',
			'};'
		].join('\n');

		grunt.util.addSlashes = function(str) {
			return str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029').replace(/'/g, "\\\'");
		};

		this.files.forEach(function(f) {
			for (var i = 0; i < f.src.length; i++) {
				var filepath = f.src[i],
					filename = filepath.substring(filepath.lastIndexOf('/') + 1),
					template = filename.substring(0, filename.indexOf('.')),
					src = '';
				if (grunt.file.exists(filepath)) {
					src = grunt.util.addSlashes(grunt.file.read(filepath));
					base += '\n' + 'TStore.add(\'' + template + '\', \'' + src + '\');';
				} else {
					grunt.log.warn('Source file "' + filepath + '" not found.');
				}
			}
			grunt.file.write(f.dest, base);
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};