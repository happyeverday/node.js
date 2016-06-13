/**
 * Created by JNC on 2016/5/30.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
exports.mongoose = mongoose;
