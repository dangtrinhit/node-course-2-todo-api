// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  var todos_collection = db.collection('Todos')

  //findOneAndUpdate
  // todos_collection.findOneAndUpdate({
  //   _id: new ObjectID('5a57081c72447067aa2a431d')
  // },{
  //   $set: {
  //     completed:false
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((result)=> {
  //   console.log(result)
  // })


  var user_collection = db.collection('Users')
  user_collection.findOneAndUpdate({
    _id: new ObjectID('5a56ec91d34819fe2f17b426')
  },{
    $set: {
      name:'Tung Duy'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  })
  .then((result)=> {
    console.log(result)
  })

})
