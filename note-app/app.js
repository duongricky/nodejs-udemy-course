const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by DR (edited)')
fs.appendFileSync('notes.txt', 'This is a appended message')