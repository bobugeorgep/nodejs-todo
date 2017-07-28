var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose.js');
var { ToDoModel } = require('./models/todo.js');

var app = express();
app.use(bodyParser.json());
//Post method to create a new post
app.post('/todos', (req, res) => {
    var todo = new ToDoModel({
        text: req.body.text
    });
    todo.save().then((doc) => { 
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Started on Port 3000');
});


// //Create a model for ToDo

// //Create a new instance of ToDoModel
// var newToDoModel = new ToDoModel({ text: 'Wash the car', completed: false , completedAt : 100});
// //Try save the newToDoModel
// newToDoModel.save().then((doc) => {
//     console.log(JSON.stringify(doc,null,4));
// }, (e) => {
//     console.log(JSON.stringify(e,null,4));
// });