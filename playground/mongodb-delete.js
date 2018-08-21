// const MongoClient = require('mongodb').MongoClient;

// object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connetc to MonboDB server');
  }
  console.log('Connected to MonboDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat breakfast'}).then((result) => {
  //   console.log(result);
  // })

  // test
  // deleteMany Lauri
  db.collection('Users').deleteMany({name: 'Lauri'}).then((result) => {
    console.log(result);
  });

  // deleteOne Vesa
  db.collection('Users').deleteOne({_id: new ObjectID('5b7bf5ae424f540a67dace78')}).then((result) => {
    console.log(result);
  })

  // db.close();

});
