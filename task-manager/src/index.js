const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouters = require('./routers/user');
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouters)

//Create task
app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then((result) => {
        res.send(task)
    }).catch((error) => {
        res.send(error)
    })
})

//Get list tasks
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        console.log(tasks)
        res.send(tasks)
    }).catch((error) => {
        res.send(error)
    })
})

//Get detail user
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        res.send(task)
    }).catch((error) => {
        res.send(error)
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
