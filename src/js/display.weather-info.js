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
  const day = weatherDescription.slice(-1);
  weatherDescription = `http://openweathermap.org/img/wn/${weatherDescription}@2x.png`;
  const wrapper = document.querySelector('.wrapper');
  if (day === 'n') {
    wrapper.style.color = 'white';
    wrapper.style.background = 'rgb(32 39 72)';
  } else {
    wrapper.style.color = '';
    wrapper.style.background = '';
  }
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
