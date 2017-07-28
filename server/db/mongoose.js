var mongoose = require('mongoose');
//Which promise to use
mongoose.Promise = global.Promise;
//connect to collection
mongoose.connect('mongodb://localhost:27017/ToDoApp');

module.exports = {mongoose};
