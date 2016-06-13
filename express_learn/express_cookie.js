/**
 * Created by JNC on 2016/6/8.
 */
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
    res.end("hello world");
});

app.listen(8001);