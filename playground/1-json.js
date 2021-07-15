const fs = require('fs')
const book = {
    title: 'Title',
    author: 'Me'
}

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Duong updated";

fs.writeFileSync('1-json.json', JSON.stringify(user))