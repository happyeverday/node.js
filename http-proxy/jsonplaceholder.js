/**
 * Created by happy on 16/5/7.
 */
 $ = require('jquery');
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
    url: root + '/posts/1',
    method: 'GET'
}).then(function(data) {
    console.log(data);
});
