var express = require('express');
var router = express.Router();

// 首页
router.get('/', function(req, res, next) {//next用于转移控制权给下面的路由，可用于实现中间件
  res.render('index', { title: 'gxf Blog'});
  //调用模版解析引擎解析名为index的模版，并传入对象作为参数
});
//用户首页
router.get('/u/:user',function(req,res){

});
//
router.post('/post',function(req,res){

});
//获取注册页面
router.get('/reg',function(req,res){
  res.render('reg', {
    title: '用户注册'});
});
//提交注册信息
router.post('/reg',function(req,res){

});
//跳转登录页面
router.get('/login',function(req,res){

});
//用户输入信息登录
router.post('/login',function(req,res){

});
//退出登录
router.get('/logout',function(req,res){

});
module.exports = router;

