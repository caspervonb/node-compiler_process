# node-compiler_process
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

compiler.spawn('webpack', args, function(error, ps) {
  console.log('watching for file changes...');
});
```

## DOCUMENTATION

[See the manuals](man/readme.md).

## SUPPORT

* If you need help, ask in the [chat](http://gitter.im/caspervonb/node-compiler_process).
* If you found a bug, submit an [issue](https://github.com/caspervonb/node-compiler_process/issues).
* If you have an idea, submit an [issue](https://github.com/caspervonb/node-compiler_process/issues).
* If you’d like to ask a general question, [issue](https://github.com/caspervonb/node-compiler_process/issues).
* If you want to contribute, submit a [pull request](https://github.com/caspervonb/node-compiler_process/pulls).

## RELEASES

[See the changelog](changelog.md).

## LICENSE

The project is licensed under the [MIT License](license.md).
