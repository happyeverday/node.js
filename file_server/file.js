/**
 * Created by JNC on 2016/6/8.
 * 文件读写模块fs
 */
var fs = require('fs');

fs.stat('file_server.js',function(err,stats){
   if(err){
       console.error(err);
   }
    else{
       console.log(stats);
       console.log("是否为文件(isFile) ? " + stats.isFile());
       console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
   }
});

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});
