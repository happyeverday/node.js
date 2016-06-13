/**
 * Created by happy on 16/5/30.
 */
var express = require('express');
var router = express.Router();
var Movie = require('./../models/Movie.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a movie');
});

router.get('/add',function(req,res,next){
    if(req.params.name){//update
        return res.render('movie', {
            title:req.params.name+'|电影|管理|moive.me',
            label:'编辑电影:'+req.params.name,
            movie:req.params.name
        });
    } else { //insert
        return res.render('movie',{
            title:'新增加|电影|管理|moive.me',
            label:'新增加电影',
            movie:false
        });
    }
})
module.exports = router;
