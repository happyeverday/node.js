exports.done = false;

var module1 = require('./node-import1.js');

console.log('module1.done', module1.done);

exports.done = true;