proximity-search
================

A small library providing a boolean search result for two words occuring within a certain distance of each other.

## Installation

  npm install proximity-search --save

## Usage

  ```
    var search = require('proximity-search'); 
    console.log(search('A string with some words where we want to know the distance between certain keywords.', 'string', 'words'));
  ```

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
