/**
 * Created by happy on 16/6/6.
 * some_event事件处理程序，按照注册顺序触发，会重复进行注册
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
var a = function(){
    console.log("running");
};
event.on('some_event', a);
event.on('some_event', a);
event.addListener('some_event',function(){
    console.log('add Event listener');
})
event.addListener('some_event',a);
event.addListener('some_event',a);
event.once('some_event',function(){
    console.log('once running');
})
setTimeout(function() {
    event.emit('some_event');
}, 1000);
