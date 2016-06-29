/**
 * Created by JNC on 2016/6/27.
 */
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello\n');
});

server.listen(12010);

server.on('upgrade',function(req,socket,upgradeHead){
    var head = new Buffer(upgradeHead.length);
    upgradeHead.copy(head);
    var key = req.headers['sec-websocket-key'];
    var shasum = crypto.createHash('sha1');
    key = shasum.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
    var headers = [
        'HTTP/1.1'
    ]
})