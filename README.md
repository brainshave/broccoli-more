# broccoli-more

LESS integration for Broccoli.

Main difference from other LESS integration plugins is that it tracks
dependencies and recompiles the file when a dependency changes
too. (Uses [broccoli-dep-filter] [broccoli-dep-filter])

[broccoli-dep-filter]: https://github.com/szywon/broccoli-dep-filter

## Usage

`less(input_tree, less_options)`, where `less_options` are passed
directly to the LESS compiler.

    var less = require("broccoli-more");

    module.exports = less("test", {
      paths: ["test/imports"]
    });

## Copying

MIT License.