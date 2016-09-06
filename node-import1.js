exports.done = false;

var module2 = require('./node-import2.js');

console.log('module2.done', module2.done);

exports.done = true;