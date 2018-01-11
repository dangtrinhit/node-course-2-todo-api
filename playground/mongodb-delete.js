// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  var todos_collection = db.collection('Todos')

  //deleteMany
  // todos_collection.deleteMany({text: 'Eat Lunch'}).then((result)=> {
  //   console.log(result)
  // })

  //deleteOne
  // todos_collection.deleteOne({text: 'Test 2'}).then((result)=> {
  //   console.log(result)
  // })

  //findOneAndDelete
  todos_collection.findOneAndDelete({_id: new ObjectID('5a57082172447067aa2a4320')}).then((result)=> {
    console.log(result)
  })

})
