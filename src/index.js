import './style.css';
import './darkmode.css';
import './createHTMLElements'
import requestWeatherAPI from './weatherApp'

let userInput = document.getElementById('search-bar');

let search = document.querySelector('.loupe');
let localize = document.querySelector('.localisation');

document.body.onload = requestLocalisation()

localize.addEventListener('click', () => {
  requestLocalisation();
})

search.addEventListener('click', () => {
    requestWeatherAPI(userInput.value);
});

function setTheme() {
  const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }
  
document.querySelector('.dark-mode').addEventListener('click', setTheme);

async function requestLocalisation() { 
  const response = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=18f81c5c2973449488cd1ce29cfea360', {mode : "cors"});
  const locData = await response.json();
  try {
    return requestWeatherAPI(locData.city);
  }
  catch(err) {
    console.log(err);
  }
}

