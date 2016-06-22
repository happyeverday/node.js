/**
 * Created by happy on 16/6/18.
 */
var fs = require('fs');
var files = ['a.txt', 'b.txt', 'c.txt'];
for (var i = 0; i < files.length; i++) {
    fs.readFile(files[i], 'utf-8', function(err, contents) {
        console.log(i);//i一直为3
        console.log(files[i] + ': ' + contents);
    });
}

for (var i = 0; i < files.length; i++) { (function(i) {
    fs.readFile(files[i], 'utf-8', function(err, contents) {
        console.log(files[i] + ': ' + contents);
    }); })(i);
}

//更常见的写法
files.forEach(function(filename) {
    fs.readFile(filename, 'utf-8', function(err, contents) {
        console.log(filename + ': ' + contents);
    });
});
var someuser = { name: 'byvoid', func: function () {

    console.log(this.name);

}

};

var foo = { name: 'foobar'

};
func = someuser.func.bind(foo);
func(); // 输出 foobar
func2 = func.bind(someuser);

func2(); // 输出 foobar
