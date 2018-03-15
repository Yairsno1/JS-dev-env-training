//This file isn't transpiled, so must use CommonJS and ES5

//Register Babel to traspile before our tests run
require('babel-register')();

//Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
