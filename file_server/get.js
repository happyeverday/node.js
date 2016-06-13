/**
 * Created by JNC on 2016/6/8.
 */
var http = require('http');
var util = require('util');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(util.inspect(url.parse(req.url)));
    console.log('one request');
}).listen(3000);