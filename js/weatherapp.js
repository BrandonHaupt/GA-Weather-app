
// OpenWeatherMap API Key
const apiKey = "f0bf8da4eb8f0649281c58c7e630b550"

// const baseURL = "http://api.openweathermap.org/geo/1.0/direct?q="

//example API Call
const baseURL = "http://api.openweathermap.org/geo/1.0/direct?"

function getLocation(location){
    const url = `${baseURL}q=${location}&limit=5&appid=${apiKey}`
    // console.log(url)

    //Example after location gotten
    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

    $.ajax(url)
    .then((data) => {
        const $main = $(`main`)
        $main.empty()
        console.log(data)
        const locationURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}}`
        // console.log(locationURL)

        const p = $(`p`)

        p.html(`<p>Weather For: ${locationURL.name}</p>
        <p>Temperature: ${locationURL.temperature}</p>
        <p>Feels like: ${data}</p>
        <p>Weather: ${data}</p>
        `)

        $main.append
    })
    .then((locationURL) => {

    //  console.log(locationURL)

    
    })
}

// grabbing the on click event
$('input[type=submit]').on("click", (event) => {
    event.preventDefault()

    const inputText = $(`input[type=text]`).val()

    getLocation(inputText)
})

getLocation("Missouri")