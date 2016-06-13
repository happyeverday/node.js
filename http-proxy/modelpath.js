/**
 * Created by happy on 16/6/4.
 */
console.log(module.paths);
require('eventproxy');
var proxy = new EventProxy();
var status = "ready";
var select = function(callback){
    proxy.once("selected", callback);//所有请求的回调押入事件队列
    if (status === "ready") {
        status = "pending";
        db.select("SQL", function (results) {
            proxy.emit("selected", results);
            status = "ready"; });
    }
};

