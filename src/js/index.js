import '../css/styles.css';

async function grabWeatherInfo(query) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=ca299863075664630c1b21144e576529`,
      {
        mode: 'cors',
      },
    );
    const retrieved = await response.json();
    // code here
    const city = retrieved.name;
    const weatherDescription = retrieved.weather[0].description;
    const temperature = retrieved.main.temp;
    const feelsLike = retrieved.main.feels_like;
    // eslint-disable-next-line prefer-destructuring
    const humidity = retrieved.main.humidity;
    // eslint-disable-next-line prefer-destructuring
    const pressure = retrieved.main.pressure;
    const windSpeed = retrieved.wind.speed;
    console.log([
      city,
      weatherDescription,
      temperature,
      feelsLike,
      humidity,
      pressure,
      windSpeed,
    ]);
    return [
      city,
      weatherDescription,
      temperature,
      feelsLike,
      humidity,
      pressure,
      windSpeed,
    ];
  } catch (error) {
    // code here
    console.log(error);
    return error;
  }
}

async function displayWeather(weatherInformationArray) {
  // do stuff
  const weatherInformation = await weatherInformationArray;
  const weatherDisplay = document.querySelector('.weatherInfo');
  const list = [];
  weatherDisplay.childNodes.forEach((node) => {
    if (node.classList) {
      list.push(node.lastElementChild);
    }
  });
  list.forEach((value, index) => {
    const element = value;
    element.textContent = weatherInformation[index];
  });
}

const searchBar = document.querySelector('#search');
searchBar.onkeydown = (event) => {
  if (event.key === 'Enter') {
    displayWeather(grabWeatherInfo(searchBar.value));
  }
};
