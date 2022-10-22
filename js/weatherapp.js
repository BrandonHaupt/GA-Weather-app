
// OpenWeatherMap API Key
const apiKey = "f0bf8da4eb8f0649281c58c7e630b550"

// const baseURL = "http://api.openweathermap.org/geo/1.0/direct?q="

// grabbing the zipcode seems to allow me to get the lat and lon
const baseURL = "http://api.openweathermap.org/geo/1.0/zip?zip="

//example API Call
// const baseURL = "http://api.openweathermap.org/geo/1.0/direct?"

function getLocation(location){
    const url = `${baseURL}${location}&limit=5&appid=${apiKey}`

    //Example after location gotten
    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

    return $.ajax(url).then((data) => {
        const locationURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`
        $.ajax(locationURL)
        .then((data) => {
            // console.log(data)
    
            const f = Math.floor(1.8*(data.main.feels_like - 273)+32)
            const temp = Math.floor(1.8*(data.main.temp - 273)+32)
    
            // Updating the HTML to display the grabbed info
            const $main = $(`main`)
            $main.empty()
        
            const div = $('<div>')
        
            div.html(`<p>Weather For: ${data.name}</p>
            <p>Temperature: ${temp}&deg</p>
            <p>Feels like: ${f}&deg</p>
            <p>Weather: ${data.weather[0].description}</p>
            `)
        
            $main.append(div) 
        })
    })
}

// grabbing the on click event
$('input[type=submit]').on("click", (event) => {
    event.preventDefault()

    const inputText = $(`input[type=text]`).val()

    getLocation(inputText)
})

getLocation("73007")
