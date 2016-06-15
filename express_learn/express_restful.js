/**
 * Created by JNC on 2016/6/8.
 */
var express = require('express');
var fs = require('fs');
var favicons = require('connect-favicons');

var app = express();
app.use(favicons());
app.get('/ListUsers',function(req,res){
   fs.readFile(__dirname + '/' + "users.json","utf8",function(err,data){
      if(err){
          return console.log(err.status);
      }
       console.log(data);
       res.send(data);
   });
});

//读取用户
app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );

        res.send(JSON.stringify(user));
    });
})
app.listen(8000);