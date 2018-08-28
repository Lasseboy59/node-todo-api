const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b84f814e49d81bab4ed0eb2'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b84fe157a7fb4e90797765b').then((todo) => {
  console.log(todo);
});
