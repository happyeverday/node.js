/**
 * Created by happy on 16/6/4.
 */
 var http = require('http');
var bufferHelper = require('bufferhelper');
http.createServer(function (req,res) {
   var bufferhelper = new bufferHelper();
    req.on('data',function(chunk){
        bufferhelper.concat(chunk);
    });
    req.on('end',function(){
        var html = bufferhelper.toBuffer().toString();
        console.log(html);
        res.write("Hello World");
        res.write(html);
        res.end(html);
    });
}).listen(8001);
console.log('server running on 8001');
