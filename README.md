# Mocks For Harlowe

## Purpose

The aim of this package id to provide 'empty', or more accurately
NOOP functions and classes for the various Harlowe  modules.

This means the module can be imported intoi new modules without
harlowe, which is of it self not a lot of help, except but it
does mean modules dependent on Harlwowe's macro module can be
loaded and exercised for unittests outside of the Harlowe
Environment.

This mostly intended for use with typescript extensions
where having typing and mock objects is important to compile
and sanely exercise the new code.


## Installation

Because of name conflict issues, I'm not submitted this to NPM, so
the easiest way to use this will be to include in you project as
a git submodule in your project and build it before you run your 
tests.

## Use

Since this is a set of Mocks,  you shouldn't NPM
install or build this seperate from your unittests. Although

To do so you will need to compile your unitttests with
the following tssconfig options.

```
    "compilerOptions": {
        "baseUrl": ".",
        "paths":{
            "<harlowe-module>":["./PATH/TO/<harlowe-module>.js", ]
        },
    },
```
Where `harlowe-module` is the name of the Harlows module you need the
mocks for. Currently mocks only exists for `passages` and `macros`.


## Tests

This module doesn't provide any significant tracking of the state it
is mocking. It is considered at the moment that this wuold either be 
outside the scope of unittests, or a standard Javacript spy library
could be used to check any such behavoiur your module needs.
