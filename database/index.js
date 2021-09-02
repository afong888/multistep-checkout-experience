var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/checkout', function (err, client) {
  if (err) throw err

  var db = client.db('checkout')



  db.collection('customer').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })

  // db.collection('address').find().toArray(function (err, result) {
  //   if (err) throw err

  //   console.log(result)
  // })

  // db.collection('payment').find().toArray(function (err, result) {
  //   if (err) throw err

  //   console.log(result)
  // })
  // console.log(db)
})

module.exports = MongoClient.connect;