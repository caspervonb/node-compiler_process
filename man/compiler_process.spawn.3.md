## NAME
`compiler_process.spawn` -- spawn a compiler process

## SYNOPSIS
```js
spawn(command, [args], [options], callback);
```

## PARAMETERS
`command` *String*
:   The compiler command or name to use.

`args` *Array*
:   The command line arguments to use.

`options` *Object*
:   `cwd` *String*
    Working directory of the child process

:   `env` *Object*
    Key-value pairs of environment variables

:   `stdio` *Array* | *String*
    Standard input/output configuration

:   `detatched` *Boolean*
    Make the child process a process leader

:   `uid` *Number*
    Process user identify

:   `gid` *Number*
    Process group identity

`callback` *function(error, child_process)*
:   The callback function to use.

## DESCRIPTION

Launches a new compiler process with the given `command`, with command line arguments in `args`.

## SEE ALSO

- [`compiler_process.find`](compiler_process.find.3.md)
- [`compiler_process.spawn`](compiler_process.spawn.3.md)
