/**
 * Created by JNC on 2016/5/30.
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
conn.query(insertSQL, function (err1, res1) {
    if (err1) console.log(err1);
    console.log("INSERT Return ==> ");
    console.log(res1);
});
var selectSQL = 'select * from t_user';
conn.query(selectSQL,function(err2,rows){
    if(err2){
        console.log(err2);
    }
    console.log("SELECT RETURN ==>");
    console.log(rows);
})
conn.end();