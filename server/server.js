var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});



// THIS WORKS
// // GET /todos/123  localhost:3000/todos/123
// app.get('/users/:id', (req, res) => {
//   res.send(req.params);
// });


// GET /todos/123456
// id='5b7fbfdc994aa21e0730ef38' name='Timo'
app.get('/users/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send('');
  }

  User.findById(id).then((user) => {
    if(!user){
      return res.status(404).send();
    }
    res.send({user});
    console.log(JSON.stringify(user,undefined,2));
  }).catch((e) => {
    res.status(404).send();
  });
  //   if(!user) {
  //     return res.status(400).send('');
  //   }
  //   // console.log('User by id', user);
  //   console.log(JSON.stringify(user,undefined,2));
  // }).catch((e) => console.log(e));

});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};

// app.post('/users', (req, res) => {
//   var user = new User({
//     email: req.body.email
//   });
//   user.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });
