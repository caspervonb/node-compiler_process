const child = require('child_process');
const path = require('path');
const util = require('util');
const which = require('which');

const debug = util.debuglog('compiler_process');

var compilers = {
  babel: {
    options: {
      outfile: '--out-file',
      watch: '--watch',
    },
  },

  coffee: {
    options: {
      watch: '--watch',
      outfile: ['--compile', '--join'],
    },
  },

  tsc: {
    options: {
      outfile: '--out',
      watch: '--watch',
    }
  },

  watchify: {
    options: {
      outfile: '--outfile',
    }
  },

  webpack: {
    options: {
      outfile: '--output-file',
      watch: '--watch',
    }
  }
};

function find(command, callback) {
  which(command, callback);
}

module.exports.find = find;

function options(command, options) {
  command = path.basename(command);

  var compiler = compilers[command];
  if (!compiler) {
    throw new TypeError('Bad compiler command');
  }

  var args = [];

  var keys = Object.keys(options);
  keys.forEach(function(key) {
    var value = options[key];

    if (value !== undefined) {
      var option = compiler.options[key];

      if (option === undefined) {
        return;
      }

      if (value === true) {
        args.unshift(option);
      } else if (util.isArray(option)) {
        args.unshift.apply(args, option.concat(value));
      } else {
        args.unshift(option, value);
      }
    }
  });

  return args;
}

module.exports.options = options;

function spawn(command, args, options, callback) {
  if (typeof args === 'function') {
    callback = args;
    args = undefined;
  } else if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }

  if (typeof args === 'undefined') {
    args = [];
  }

  if (typeof options === 'undefined') {
    options = { };
  }

  debug('spawn %s %s', command, args.join(' '));
  find(command, function(error, command) {
    if (error) {
      return callback(error);
    }

    var exe = child.spawn(command, args, options);
    exe.once('error', function(error) {
      callback(error);
    });

    process.nextTick(function() {
      if (exe.pid) {
        callback(null, exe);
      }
    });
  });
}

module.exports.spawn = spawn;
