/**
 * Created by JNC on 2016/6/8.
 */
var express = require('express');

//利用static实现目录public下静态服务器的作用
var app =  express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});