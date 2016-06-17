/**
 * Created by happy on 16/6/16.
 */
var event = require('events');

var emitter = new event.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
    console.log('listen1',arg1,arg2);
});

emitter.emit('someEvent','gxf',1991);
