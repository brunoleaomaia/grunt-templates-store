'use strict';

var grunt = require('grunt');

exports.generate = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/TStoreGenerated.js');
    var expected = grunt.file.read('test/expected/TStoreGenerated.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.done();
  }
};
