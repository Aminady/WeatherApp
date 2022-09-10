import {dateParser, getSunsetAndSunriseTime} from './dateAndTime';

let userInput = document.getElementById('search-bar');
let country = document.querySelector('.country');
let temperature = document.querySelector('.temperature');
let weather = document.querySelector('.weather');
let date = document.querySelector('.date');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');


export default async function requestWeatherAPI() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=bf6a7f8b83a17833aa9772415f2e3e57`, {mode : "cors"})
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=bf6a7f8b83a17833aa9772415f2e3e57`, {mode : "cors"})

    const weatherData = await response.json();
    try { 
        country.textContent = weatherData.name + ", " + weatherData.sys.country;
        temperature.textContent = parseInt((weatherData.main.temp) * 0.10) + " °";
        weather.textContent = weatherData.weather[0].description;
        date.textContent = dateParser();
        sunrise.textContent = `Sunrise : ${getSunsetAndSunriseTime(weatherData.sys.sunrise)}`
        sunset.textContent = `Sunset : ${getSunsetAndSunriseTime(weatherData.sys.sunset)}`
        console.log(weatherData);
    } catch(err) {
        console.log(err);
    }
};

