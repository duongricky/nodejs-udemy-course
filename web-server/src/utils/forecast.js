const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=df6f0694f96bbec91ed7f5ad514fe11e&query=' + latitude + ',' + longitude
    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + ' degress out. The weather is ' + response.body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast