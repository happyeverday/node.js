require('../../css/reset.scss'); //加载初始化样式
require('../../css/allComponent.scss'); //加载组件样式
Jquery = require('../../../node_modules/jquery');
//var tab = require('imports?$=jquery!./jquery.tab');
console.log('gxf learning webpack haha');
console.log($);
$("p").click(function(){
    $(this).hide();
});


