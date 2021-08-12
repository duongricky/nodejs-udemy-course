const validator = require('validator')
const mongoose = require('mongoose')

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

module.exports = User