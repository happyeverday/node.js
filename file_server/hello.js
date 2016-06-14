/**
 * Created by happy on 16/6/14.
 */
var s = "hello";
function greet(name){
    console.log(s + " " + name + "!");
}
console.log(module.exports);//输出｛｝
exports = greet;
console.log(module.exports);//{}
console.log(exports);
module.exports = greet;
