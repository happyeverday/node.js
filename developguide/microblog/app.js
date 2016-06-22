var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();//创建服务器

// view engine setup
//参数设置
app.set('views', path.join(__dirname, 'views'));
//app.engine('.html', ejs.__express);
app.set('view engine', 'ejs');//视图模版引擎
app.set('view options',{
    layout:true
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//启用中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//静态文件服务器，供css，js和image
app.use(express.static(path.join(__dirname, 'public')));
//持久化存储用户登录信息
//app.use(express.session({
//  secret: settings.cookieSecret, store: new MongoStore({
//    db: settings.db
//  })
//}));

//路由控制
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
