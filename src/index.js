import './style.css';
import './darkmode.css';
import './mobile.css';
import './createHTMLElements';
import {requestLocalisation, requestWeatherAPI} from './weatherApp';
import {setTheme} from './extras';

let userInput = document.getElementById('search-bar');
let search = document.querySelector('.loupe');
let localize = document.querySelector('.localisation');

document.body.onload = requestLocalisation();

document.querySelector('.dark-mode').addEventListener('click', setTheme);


localize.addEventListener('click', requestLocalisation);

search.addEventListener('click', () => {
    requestWeatherAPI(userInput.value);
});

const num = [187, 66, '10000', 5, -9]  
console.log('Max = ' + Math.max(...num));
console.log('Min = ' + Math.min(...num));

