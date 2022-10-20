
// OpenWeatherMap API Key
const apiKey = "f0bf8da4eb8f0649281c58c7e630b550"

// const baseURL = "http://api.openweathermap.org/geo/1.0/direct?q="

//example API Call
const baseURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid="

function getLocation(location){
    const url = `${baseURL}${apiKey}`
    console.log(url)

    $.ajax(url).then((data) => {
        const $main = $(`main`)
        $main.empty()

        console.log(data)
        const p = $(`p`)
        p.html(`<p>Weather For: ${data.name}</p>
        <p>${data}</p>
        `)

        $main.append
    })
}

// // grabbing the on click event
// $('input[type=submit]').on("click", (event) => {
//     event.preventDefault()

//     const inputText = $(`input[type=text]`).val()

//     getLocation(inputText)
// })

getLocation()