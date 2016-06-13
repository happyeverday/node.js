/**
 * Created by happy on 16/6/7.
 */
var a = 1;
b = 2;
console.log(global.a);//undefined，非全局变量
console.log(global.b);//2,全局变量

console.log(__filename);
console.log(__dirname);
