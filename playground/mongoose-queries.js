const {ObjectID} = require ('mongodb')

const {mongoose} = require ('./../server/db/mongoose')
const {Todo} = require ('./../server/models/todo')
const {User} = require ('./../server/models/user')

// var id = 'a573c874a3a6907212d6daf'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }). then ((todos) => {
//   console.log ('Todos',todos)
// })
//
// Todo.findOne({
//   _id: id
// }). then ((todo) => {
//   console.log ('Todo',todo)
// })

// Todo.findById(id). then ((todo) => {
//   if (!todo) {
//     return console.log('ID not found')
//   }
//   console.log ('Todo By Id',todo)
// }).catch((e) =>console.log(e))

User.findById('5a5716ef834526fee808f62e'). then ((user) => {
  if (!User) {
    return console.log('User not found')
  }
  console.log (JSON.stringify(user, undefined,2))
}).catch((e) =>console.log(e))
