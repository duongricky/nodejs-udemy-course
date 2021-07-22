const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Define path for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Set static assets
app.use(express.static(publicDirPath))

app.get('', function (req, res) {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/about', function (req, res) {
    res.render('about')
})

app.get('/about/*', function (req, res) {
    res.render('404_about')
})

app.get('*', function (req, res) {
    res.render('404_index')
})

app.listen(3000, () => {
    console.log("Server is up")
})
