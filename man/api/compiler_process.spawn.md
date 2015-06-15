# compiler_process.spawn -- spawns a new compiler process

## SYNOPSIS

```js
function spawn(command, [args], [options], callback);
```

## PARAMETERS

`command` *String*
:   The command to use

`args` *Array*

`options` *Object*

`callback` *function(error, string)*
:   The callback function to invoke on failure or success.

## DESCRIPTION

Generates an array command line options for the compiler defined by given `command` based on the given `options`.

## RETURN VALUE

`Array`

## SEE ALSO

[compiler_process.find](compiler_process.find.md),
[compiler_process.spawn](compiler_process.spawn.md)
