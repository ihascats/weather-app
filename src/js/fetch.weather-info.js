async function grabWeatherInfo(query) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=ca299863075664630c1b21144e576529`,
      {
        mode: 'cors',
      },
    );
    if (response.status === 404) {
      throw new Error('404');
    }
    const retrieved = await response.json();

    // Take info to display to user
    const city = retrieved.name;
    const weatherDescription = retrieved.weather[0].icon;
    const temperature = retrieved.main.temp;
    const feelsLike = retrieved.main.feels_like;
    // eslint-disable-next-line prefer-destructuring
    const humidity = retrieved.main.humidity;
    // eslint-disable-next-line prefer-destructuring
    const pressure = retrieved.main.pressure;
    const windSpeed = retrieved.wind.speed;

    // Return necessary info
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
    // Tell user theres been an error with query
    const search = document.querySelector('#search');
    search.classList.add('error');
    search.value = '';
    search.placeholder = "Couldn't find query";
    search.onclick = () => {
      search.classList.remove('error');
      search.placeholder = '';
      search.onclick = null;
      search.oninput = null;
    };
    search.oninput = () => {
      search.classList.remove('error');
      search.placeholder = '';
      search.onclick = null;
      search.oninput = null;
    };
    return 404;
  }
}

export default grabWeatherInfo;
