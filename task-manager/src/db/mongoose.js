const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://localhost:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid format')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [7, 'The password is greater than 6 characters'],
        trim: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('The password is not contain password')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    name: {
        type: String
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        default: false,
        type: Boolean
    }
})

// const newUser = new User({
//     name: 'Duong',
//     email: '   duongrickySS@gmail.com  ',
//     password: 'nguyenduong123'
// })

// newUser.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const newTask = new Task({
    name: 'Task 1',
    description: 'Task 1 description',
})

newTask.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
