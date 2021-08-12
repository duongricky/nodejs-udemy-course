const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const dbName = 'task-manager'
const id = new ObjectID()
console.log(id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect the database')
    }

    const db = client.db(dbName)

    // insert One
    db.collection('users').insertOne({
        _id: id,
        name: 'Dil222',
        age: 25
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log('Insert user successfully')
        console.log(result.ops)
    })

    // db.collection('users').findOne({ _id: new ObjectID("60fa885f1a96e13ba3763b17") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }

    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("60fa83d6714dc7364ec1b7a6") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }

    //     console.log(users)
    // })

    // const updatePromise = db.collection('users').updateOne({ _id: ObjectID("60fa885f1a96e13ba3763b17") }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({ _id: ObjectID("60fa83d6714dc7364ec1b7a6") }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteMany({ completed: true }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
