# compiler_process *uniform compiler process creation*

## INSTALLATION

```sh
$ npm install compiler_process
```

## USAGE

```js
var compiler = require('compiler_process');

var args = compiler.options('webpack', {
  watch: true,
  outfile: 'output.js'
}).concat('input.js');

compiler.spawn('webpack', args, function(error, childprocess) {
  console.log('Watching input.js');
});
```

## DOCUMENTATION

See the [manuals](man/readme.md)

## SUPPORT

* If you need help, ask in the [chat](http://gitter.im/caspervonb/node-compiler_process).
* If you found a bug, submit an [issue](https://github.com/caspervonb/node-compiler_process/issues).
* If you have an idea, submit an [issue](https://github.com/caspervonb/node-compiler_process/issues).
* If you’d like to ask a general question, [issue](https://github.com/caspervonb/node-compiler_process/issues).
* If you want to contribute, submit a [pull request](https://github.com/caspervonb/node-compiler_process/pulls).

## RELEASES

All notable changes are recorded in the [changelog](changelog.md)

## LICENSE

Copyright (c) 2015 Casper Beyer under the [MIT License](license.md)
