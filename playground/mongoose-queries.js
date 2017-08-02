const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5981c4b8f6fa082d042c11c211';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Returns an array with the objects in it, if wrong returns an empty array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Returns the object, if wrong returns null
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Returns the object, if wrong returns null
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var userid = '5981b4407e83d429180260ee';

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('User doesn\'t exist');
  }
  console.log('User found', user);
}).catch((e) => {
  console.log(e);
});
