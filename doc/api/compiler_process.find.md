# compiler_process.find -- search for the executable of a compiler

## SYNOPSIS

```js
function find(command, callback);
```

## PARAMETERS

`command` *String*
:   The command or compiler type to use.

`callback` *function(error, string)*
:   The callback function to invoke on failure or success.

## DESCRIPTION

Searches `process.env['PATH']` for the given `command`.

When an executable is found, callback will be invoked with the command as the
second parameter, if an error occurs callback will be invoked with the error as
the first parameter.

## RETURN VALUE

`undefined`

## SEE ALSO

[compiler_process.type](compiler_process.type.md),
[compiler_process.options](compiler_process.options.md),
[compiler_process.spawn](compiler_process.spawn.md)
