///**
// * Created by happy on 16/6/18.
// */
//module.exports = {
//    cookieSecret: 'microblogbyvoid',
//    db: 'microblog',
//    host: 'localhost'
//};
/**
 * Created by happy on 16/5/30.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/microblog');
exports.mongoose = mongoose;
