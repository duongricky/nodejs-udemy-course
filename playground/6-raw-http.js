const https = require('https')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHVvbmdyaWNreSIsImEiOiJja3JhM2w2Y20wdDgyMnBuamFnOWhtYmtuIn0.EsrqrxdOntX_UiTgKf3taw'
const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end();