var mongoose = require('mongoose');
var ToDoModel = mongoose.model('ToDoModel', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});
module.exports = {ToDoModel}