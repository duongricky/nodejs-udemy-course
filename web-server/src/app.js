const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

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

app.get('/products', function (req, res) {
    console.log(req.query.search)
})

app.get('/weather', function (req, res) {
    if (!req.query.address) {
        return res.send('You must to give address param')
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send(error)
            }

            res.send({
                address: req.query.address,
                location,
                forecastData
            })
        })
    })
})

app.get('/about/*', function (req, res) {
    res.render('404_about')
})

app.get('*', function (req, res) {
    res.render('404_index')
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
