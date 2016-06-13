/**
 * Created by happy on 16/6/6.
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
    console.log('some_event事件执行中');
});
event.addListener('some_event',function(){
    console.log('add Event listener');
})
event.once('some_event',function(){
    console.log('once running');
})
setTimeout(function() {
    event.emit('some_event');
}, 1000);
