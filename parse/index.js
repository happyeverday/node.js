/**
 * Created by JNC on 2016/5/30.
 */
var Parser = require('./parse');//自定义模块
var fs = require('fs');//node内置模块

fs.readFile('example_log.txt', function (err, logData) {

    // If an error occurred, throwing it will
    // display the exception and kill our app.
    if (err) throw err;

    // logData is a Buffer, convert to string.
    var text = logData.toString();

    // Create an instance of the Parser object.
    var parser = new Parser();

    // Call the parse function.
    console.log(parser.parse(text));
    // { A: 2, B: 14, C: 6 }
});