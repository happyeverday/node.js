/**
 * Created by JNC on 2016/6/8.
 */
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
    var post = '';
    req.on('data',function(chunk){
        post += chunk;
    });
    req.on('end',function(){
        post = querystring.parse(post);
        console.log(post);
        console.log(util.inspect(post));
        res.end(util.inspect(post));
        console.log('one request');
    });
}).listen(8000);
