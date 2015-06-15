# compiler_process -- cross platform compiler process creation

## SYNOPSIS

```js
function type(command);
function find(command, callback)
function options(command, options);
function spawn(command, [args], [options], callback);
```

# DESCRIPTION

The `compiler_process` module provides uniform compiler process
spawning and command line option creation for `babel`, `coffee`, `tsc`,
`watchify`, and `webpack`.

Use `require('compiler_process')` to access this module.

## SEE ALSO

[compiler_process.find](compiler_process.find.md),
[compiler_process.options](compiler_process.options.md),
[compiler_process.spawn](compiler_process.spawn.md)
