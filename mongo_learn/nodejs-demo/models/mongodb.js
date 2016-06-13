/**
 * Created by happy on 16/5/30.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
exports.mongoose = mongoose;
