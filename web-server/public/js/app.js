// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.address)
//             console.log(data.forecastData)
//         }
//     })
// }).catch((error) => {
//     console.log(error)
// })

const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const message1 = document.querySelector('#message-1')
    const message2 = document.querySelector('#message-2')
    const location = document.querySelector('input').value
    const url = '/weather?address=' + encodeURIComponent(location);
    console.log(url)

    fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if (data.error) {
                console.log(data.error)
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecastData
            }
        })
    }).catch((error) => {
        console.log(error)
    })
})
