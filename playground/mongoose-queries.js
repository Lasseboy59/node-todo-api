const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// https://mongoosejs.com/docs/queries.html

// var id = '5b7feb6d5c3309790a0faf7c'; // Real one
// var id = '5b7feb6d5c3309790a0faf7c11';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById()  3 cases found, not found all errors

var id = '5b7fbfdc994aa21e0730ef38';
User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  // console.log('User by id', user);
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
