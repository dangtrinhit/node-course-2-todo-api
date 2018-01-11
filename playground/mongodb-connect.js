// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj.getTimestamp())

var user = {name: 'DangTrinh', age: 24}
var {name} = user
console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')


  // collection.insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err,result) =>{
  //   if (err){
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // })

  // const collection = client.db('TodoApp').collection('Todos')
  // collection
  //   .insert({text: 'Test 2', completed: false})
  //   // .then(() => collection.insertMany([ { id: 1 }, { id: 1 } ]))
  //   .then(result => console.log(JSON.stringify(result.ops,undefined,2)))
  //   .catch(err => console.log('Unable to insert todo', err))

  const user_collection = db.collection('Users')
  user_collection
    .insert({name:'DangTrinh', age: 24, location:'HCM'})
    .then(result => console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2)))
    .catch(err => console.log('Unable to insert user', err))

  db.close()
})
