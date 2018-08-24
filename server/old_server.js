var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://localhost:27017/UserApp');


// User model
// email - require it, trim it, set type to string and minlength of 1

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlengh: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var saveUser = new User({
  email: '   I am first user name= Lauri '
});

saveUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save userData')
});
