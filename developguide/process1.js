/**
 * Created by JNC on 2016/6/22.
 */
f = function(b) {
    console.log(b);
    if(b==1001){
        return;
    }
    return process.nextTick(function() {
        return f(b + 1);
    });
};

setImmediate(function () {
    console.log('------------------------------------');
});

f(1);