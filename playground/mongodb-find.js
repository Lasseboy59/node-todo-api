// const MongoClient = require('mongodb').MongoClient;

// object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connetc to MonboDB server');
  }
  console.log('Connected to MonboDB server');

  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {


// ok
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b7bea3a24a03d08f080d880')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   cosole.log('Unable to fetch Todos',err);
  // });

// ok
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   cosole.log('Unable to fetch Todos',err);
  // });

// ok
db.collection('Users').find({name: 'Lauri'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch docs');
});

  // db.close();

});
