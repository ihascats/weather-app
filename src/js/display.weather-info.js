async function displayWeather(weatherInformationArray, celsius) {
  const weatherInformation = await weatherInformationArray;
  // if fetch threw an error, end execution here
  if (weatherInformation === 404) return;
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

  // get last letter from the icon, if its n that means its night and if its d its day
  const cycle = weatherDescription.slice(-1);
  const wrapper = document.querySelector('.wrapper');
  // if cycle is n set theme to "night", or if not to "day";
  if (cycle === 'n') {
    wrapper.classList.add('night');
    wrapper.classList.remove('day');
  } else {
    wrapper.classList.add('day');
    wrapper.classList.remove('night');
  }

  weatherDescription = `https://openweathermap.org/img/wn/${weatherDescription}@2x.png`;

  // Change measurement types depending on wether user wants celsius or fahrenheit
  // Additionally change km/h to mp/h
  if (celsius === true) {
    temperature = `${(temperature - 273.15).toFixed(2)}℃`;
    feelsLike = `${(feelsLike - 273.15).toFixed(2)}℃`;
    windSpeed = `${windSpeed} km/h`;
  } else {
    temperature = `${(((temperature - 273.15) * 9) / 5 + 32).toFixed(2)}°F`;
    feelsLike = `${(((feelsLike - 273.15) * 9) / 5 + 32).toFixed(2)}°F`;
    windSpeed = `${(windSpeed / 1.609).toFixed(2)} mp/h`;
  }

  humidity = `${humidity}%`;
  pressure = `${pressure} mb`;

  // Display information where its supposed to be shown

  const location = document.querySelector('#location');
  location.textContent = city;

  const weatherElement = document.querySelector('#weather');
  weatherElement.src = weatherDescription;

  const temperatureElement = document.querySelector('#temperature');
  temperatureElement.textContent = temperature;

  const feelsLikeElement = document.querySelector('#feelsLike');
  feelsLikeElement.textContent = feelsLike;

  const humidityElement = document.querySelector('#humidity');
  humidityElement.textContent = humidity;

  const pressureElement = document.querySelector('#pressure');
  pressureElement.textContent = pressure;

  const windSpeedElement = document.querySelector('#windSpeed');
  windSpeedElement.textContent = windSpeed;
}

export default displayWeather;
