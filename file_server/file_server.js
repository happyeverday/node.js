/**
 * Created by JNC on 16-5-30.
 */

//静态文件服务器,使用express模块
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
console.log('server running on localhost:8080');
app.listen(8080);