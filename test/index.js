var compiler = require('..');
var path = require('path');
var test = require('tape');

var commands = [
  'babel',
  'coffee',
  'tsc',
  'watchify',
  'webpack'
];

commands.forEach(function(command) {
  test('find ' + command, function(test) {
    test.plan(2);

    compiler.find(command, function(error, command) {
      test.error(error);
      test.ok(command);
    });
  });
});

commands.forEach(function(command) {
  test('spawn ' + command, function(test) {
    test.plan(2);

    compiler.spawn(command, function(error, exe) {
      test.error(error);
      test.ok(exe.pid);
      exe.kill();
    });
  });
});

commands.forEach(function(command) {
  test('options for ' + command, function(t) {
    t.plan(1);

    var values = {
      babel: ['--out-file', 'out.js'],
      coffee: ['--compile', '--join', 'out.js'],
      tsc: ['--out', 'out.js'],
      webpack: ['--output-file', 'out.js'],
      watchify: ['--outfile', 'out.js'],
    }[command];

    t.deepEqual(compiler.options(command, { outfile: 'out.js' }), values);
  });
});
