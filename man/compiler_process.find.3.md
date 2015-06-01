## NAME
`compiler_process.find` -- search for the executable of a compiler

## SYNOPSIS

```js
function find(name, callback);
```

## PARAMETERS

`name` *String*
:   The name of the compiler to find.

`callback` *function(error, command)*
:   The callback function to use.

## DESCRIPTION

Searches `env.PATH` for a compiler executable with given `name`.

## SEE ALSO

- [`compiler_process.type`](compiler_process.type.3.md)
- [`compiler_process.options`](compiler_process.options.3.md)
- [`compiler_process.spawn`](compiler_process.spawn.3.md)
