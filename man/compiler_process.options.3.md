## NAME
`compiler_process.options` -- generate command line arguments for a compiler

## SYNOPSIS
```js
options(command, values);
```

## PARAMETERS

`command` *String*
:   The compiler command or compiler name to use.

`values` *Object*
:   `watch` *Boolean*
     Watch input files and enable incremental building

:   `outfile` *String*
     Compile to the given `outfile`

## DESCRIPTION
Generates an array command line arguments for the browser defined by given `command` based on the given `values`.

## RETURN VALUE
An `Array` of command line argument strings

## SEE ALSO

- [`browser_process.find`](browser_process.find.3.md)
- [`browser_process.type`](browser_process.type.3.md)
- [`browser_process.spawn`](browser_process.spawn.3.md)
