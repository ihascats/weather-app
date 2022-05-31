import capitalizeFirstLetter from './string.capitalize-first';

async function displayWeather(weatherInformationArray, celsius) {
  // do stuff
  const weatherInformation = await weatherInformationArray;
  const [city] = weatherInformation;
  let [
    ,
    weatherDescription,
    temperature,
    feelsLike,
    humidity,
    pressure,
    windSpeed,
  ] = weatherInformation;

  const weatherDisplay = document.querySelector('.weatherInfo');
  const list = [];
  weatherDisplay.childNodes.forEach((node) => {
    if (node.classList) {
      list.push(node.lastElementChild);
    }
  });
  weatherDescription = capitalizeFirstLetter(weatherDescription);

  if (celsius === true) {
    temperature = `${(temperature - 273.15).toFixed(2)}℃`;
    feelsLike = `${(feelsLike - 273.15).toFixed(2)}℃`;
  } else {
    temperature = `${(((temperature - 273.15) * 9) / 5 + 32).toFixed(2)}°F`;
    feelsLike = `${(((feelsLike - 273.15) * 9) / 5 + 32).toFixed(2)}°F`;
  }

  humidity = `${humidity}%`;
  pressure = `${pressure} mb`;
  windSpeed = `${windSpeed} km/h`;
  const location = document.querySelector('#location');
  location.firstElementChild.textContent = city;
  const info = [
    weatherDescription,
    temperature,
    feelsLike,
    humidity,
    pressure,
    windSpeed,
  ];
  list.forEach((value, index) => {
    const element = value;
    element.textContent = info[index];
  });
}

export default displayWeather;
