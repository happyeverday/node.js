/**
 * Created by happy on 16/6/14.
 * 学习node.js事件处理process进程
 */
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
