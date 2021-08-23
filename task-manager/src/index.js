const express = require('express')
require('./db/mongoose')
const userRouters = require('./routers/user')
const taskRouters = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouters)
app.use(taskRouters)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('6121c58c24b9bc18cdc444c3')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('6121c58424b9bc18cdc444c0')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()
