const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=df6f0694f96bbec91ed7f5ad514fe11e&query=37.8267,-122.4233'
// request({url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log('The current temperature is: ' + data.current.temperature)
// })

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.2eyJ1IjoiZHVvbmdyaWNreSIsImEiOiJja3JhM2w2Y20wdDgyMnBuamFnOWhtYmtuIn0.EsrqrxdOntX_UiTgKf3taw'
request({url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect the api")
    } else if (!response.body.features) {
        console.log("Unable to find location")
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        
        console.log(latitude, longitude)
    }
})
