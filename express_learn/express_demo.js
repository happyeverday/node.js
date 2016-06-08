/**
 * Created by JNC on 2016/6/8.
 */
var express = require('express');

var app = express();

app.get('/',function(req,res){
   res.send('Hello Node.js');
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})