/**
 * Created by happy on 16/6/16.
 */
var util = require('util');

function Base(){
    this.name = "base";
    this.base = 1991;
    this.sayHello = function(){
        console.log('hello' + this.name);
    }
}
Base.prototype.showName = function(){
    console.log(this.name);
};

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

//util.inspect()将对象转换为字符串形式输出
console.log(util.inspect(objBase));
console.log(util.inspect(objSub));
