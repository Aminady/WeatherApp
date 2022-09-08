// let userInput = document.getElementById('user-input')
let userInput = prompt("Country ?")
let country = document.querySelector('.country');
let temperature = document.querySelector('.temperature');
let weather = document.querySelector('.weather');
let date = document.querySelector('.date')

function dateParser() {
    let newDate = new Date().toLocaleDateString("en-EN", {
        // year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return newDate;
}

console.log(dateParser());

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=bf6a7f8b83a17833aa9772415f2e3e57`, {mode : "cors"})
.then(function(response) {
    // console.log(response.json());
    return response.json()
})
.then(function(response) {
    country.textContent = response.name;
    temperature.textContent = parseInt(response.main.temp * 0.10) + " °";
    weather.textContent = response.weather[0].main;
    date.textContent = dateParser()
})
.catch(function(error) {
    console.log(error);
})

