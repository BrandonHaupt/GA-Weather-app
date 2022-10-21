
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
        
        // $main.empty()
        console.log(data)

        
      
    })
}


function getWeatherInfo(info){
    getLocation()
    
    console.log(info)

    const locationURL = `https://api.openweathermap.org/data/2.5/weather?lat=38.7802&lon=-90.6228&appid=${apiKey}`

   

    //Example after location gotten
    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

    $.ajax(locationURL)
    .then((data) => {
        console.log(data)

        const f = Math.floor(1.8*(data.main.feels_like - 273)+32)
        const temp = Math.floor(1.8*(data.main.temp - 273)+32)

        // Updating the HTML to display the grabbed info
        const $main = $(`main`)
        $main.empty()
    
        const div = $('<div>')
    
        div.html(`<p>Weather For: ${data.name}</p>
        <p>Temperature: ${temp}</p>
        <p>Feels like: ${f}</p>
        <p>Weather: ${data.weather[0].description}</p>
        `)
    
        $main.append(div) 
    })
}




// grabbing the on click event
$('input[type=submit]').on("click", (event) => {
    event.preventDefault()

    const inputText = $(`input[type=text]`).val()

    getLocation(inputText)
})

getLocation("63376").then(getWeatherInfo())
