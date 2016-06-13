/**
 * Created by happy on 16/6/4.
 */
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mime = require('./mime').types;
var config = require('./config');

//创建静态的文件系统
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = "assets" + pathname;
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';//获取文件类型
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    response.end(err);
                } else {
                    if (ext.match(config.Expires.fileMatch)) {
                        var expires = new Date();
                        expires.setTime(expires.getTime() + config.Expires.maxAge * 1000);
                        response.setHeader("Expires", expires.toUTCString());
                        response.setHeader("Cache-Control", "max-age=" + config.Expires.maxAge);
                    }
                    var contentType = mime[ext] || "text/plain";
                    response.writeHead(200, {'Content-Type': contentType});
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
}).listen(8000);
