// const MongoClient = require('mongodb').MongoClient;

// object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connetc to MonboDB server');
  }
  console.log('Connected to MonboDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b7bea3a24a03d08f080d880')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7c2a95236fa27dee08a63a')
  }, {
    $set: {
      name: 'Lauri'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.collection('Users').update(
  //   { name: 'Lauri'
  // },
  //   { $inc: {age: 1}
  //
  // });


  // db.close();

});
