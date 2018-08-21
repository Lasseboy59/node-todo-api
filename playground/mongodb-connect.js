// const MongoClient = require('mongodb').MongoClient;

// object destructuring
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Lauri', age: 40};
// var {name} = user;
// console.log(name);

// MongoDB v. 3: replace (err, db) with (err, client)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connetc to MonboDB server');
  }
  console.log('Connected to MonboDB server');

  // MongoDB v. 3 -insert-> const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new collection to Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Vesa',
  //   age: 39,
  //   location: 'Lahti'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert to Users db', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // MongoDB v. 3 replace db.close(); with client.close();
  db.close();

});
