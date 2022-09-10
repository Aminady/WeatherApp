import './style.css';
import './darkmode.css';
import './createHTMLElements'
import requestWeatherAPI from './weatherApp'

let search = document.querySelector('.loupe');
let localize = document.querySelector('.localisation');

localize.addEventListener('click', () => {
  requestLocalisation();})

search.addEventListener('click', () => {
    requestWeatherAPI();
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
    console.log(locData);
  }
  catch(err) {
    console.log(err);
  }
}
