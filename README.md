# @open-node/errors
make the error object with custom defines

[![Build status](https://travis-ci.com/open-node/errors.svg?branch=master)](https://travis-ci.org/open-node/errors)
[![codecov](https://codecov.io/gh/open-node/errors/branch/master/graph/badge.svg)](https://codecov.io/gh/open-node/errors)

# Installation
<pre>npm i @open-node/errors--save</pre>

# Usage
* your node.js process code
<pre>
const Errors = require('@open-node/errors');

const defines = [
  ['yourErrorCode', 'Your error message, allow add variable, eg: %s']
  ['yourErrorCode2', 'Your error message, allow add variable, eg: %s, %d']
];
const errors = Errors(defines);

// usage in your code
try {
  ...
  ...
} catch (e) {
  const error = errors.yourErrorCode(e.message); // returns error be instanceOf Error
  writeErrorLog(error);
}

</pre>
