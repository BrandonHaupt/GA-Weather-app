
// OpenWeatherMap API Key
const apiKey = "f0bf8da4eb8f0649281c58c7e630b550"

// const baseURL = "http://api.openweathermap.org/geo/1.0/direct?q="
const baseURL = "http://api.openweathermap.org/geo/1.0/zip?zip="

//example API Call
// const baseURL = "http://api.openweathermap.org/geo/1.0/direct?"

function getLocation(location){
    const url = `${baseURL}${location}&limit=5&appid=${apiKey}`

    //Example after location gotten
    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

    $.ajax(url)
    .then((data) => {
        
        // $main.empty()
        console.log(data)

        // console.log(data.lon)

        const locationURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`

        const $main = $(`main`)
        $main.empty()

        const div = $('<div>')

        div.html(`<p>Weather For: ${data.name}</p>
        <p>Temperature: ${data}</p>
        <p>Feels like: ${data}</p>
        <p>Weather: ${data}</p>
        `)

        $main.append(div)
      
    })
    .then((data) => {
       
    })
}

function getWeatherInfo(data){
    getLocation()
    
    

}



// grabbing the on click event
$('input[type=submit]').on("click", (event) => {
    event.preventDefault()

    const inputText = $(`input[type=text]`).val()

    getLocation(inputText)
})

getLocation("63376")
getWeatherInfo()