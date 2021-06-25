// const name = require('./utils')
const sum = require('./utils')
const getNotes = require('./note')
const validator = require('validator')
const chalk = require('chalk')

console.log('This is app.js')
console.log(sum(3, 5))
console.log(getNotes())

console.log(validator.isEmail('foo@bar.com'))
console.log(validator.isEmail('foo@sss.com'))
