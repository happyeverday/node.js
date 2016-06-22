/**
 * Created by happy on 16/6/14.
 * 学习node.js事件处理process进程
 */
var fs = require('fs');
process.nextTick(function () {
    console.log('nextTick callback!');
});
process.nextTick(function () {
    console.log('nextTick callback!');
});
setImmediate(function(){
    console.log('immediate running');
    process.nextTick(function(){
        console.log("_________________插入");
    })
});
setImmediate(function(){
    console.log('immediate2 running');
});
setTimeout(function(){
    console.log('time out');
},0);
console.log('finish');
//process.on('exit', function (code) {
//    console.log('about to exit with code: ' + code);
//});
//fs.readFile('a.txt', function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//    //console.log("异步读取文件数据: " + data.toString());
//    process.nextTick(function(){
//        console.log("_________________插入");
//    })
//});
//
//fs.readFile('a.txt', function (err, data) {
//    if (err) {
//        console.error(err);
//    }
//});