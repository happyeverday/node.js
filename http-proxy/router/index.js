/**
 * Created by happy on 16/6/7.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);
