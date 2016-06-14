/**
 * Created by happy on 16/6/14.
 * 让我们用pipe()把一个文件流和另一个文件流串起来
 * 这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序
 */
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('input.txt');
console.log("读取文件成功");
var ws = fs.createWriteStream('input1.txt');
console.log("pipe写入文件结束");

rs.pipe(ws);
