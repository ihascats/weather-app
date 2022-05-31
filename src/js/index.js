import '../css/styles.css';
import displayWeather from './display.weather-info';
import grabWeatherInfo from './fetch.weather-info';

let celsius = true;
const searchBar = document.querySelector('#search');

window.onload = () => {
  displayWeather(grabWeatherInfo('Berlin'), celsius);
};

searchBar.onkeydown = (event) => {
  if (event.key === 'Enter') {
    displayWeather(grabWeatherInfo(searchBar.value), celsius);
  }
};

document.querySelector('#degree').onclick = (event) => {
  const button = event.target;
  celsius = !celsius;
  if (celsius) {
    button.textContent = '℃';
  } else {
    button.textContent = '°F';
  }
  const location = document.querySelector('#location');
  displayWeather(grabWeatherInfo(location.textContent), celsius);
};
