/**
 * Created by happy on 16/6/7.
 */

console.log('读入流开始');
var fs = require('fs');
var zlib = require('zlib');

var data = '';

var readStream = fs.createReadStream('log.txt');
readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
    data += chunk;
});

readStream.on('end',function(){
    console.log(data);
    console.log("读入流end");
});

readStream.on('error',function(e){
    console.log('sorry' + e.stack);
});

fs.createReadStream("log.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("output.txt.gz"));

console.log('pipe finish');

console.log('running finish');
