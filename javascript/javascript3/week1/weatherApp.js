const errorMessage = document.getElementById("errorMessage");
const cityInput = document.getElementById("city-input");
const button = document.getElementById("bttn");
const city = document.getElementById("city-name");

function displayData() {
  if (cityInput.value === "") {
    errorMessage.removeAttribute("hidden");
    errorMessage.textContent = "Enter a city";
    return;
  }
  if (cityInput.value) {
    errorMessage.textContent = "";
    city.textContent = (cityInput.value).toUpperCase();
    setTimeout(fetchWeather);
  }
}

button.addEventListener("click", displayData);
let weatherApi;
const fetchWeather = () => {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather?');
  weatherApi = { q: cityInput.value, appid: 'fa28aa4964bf5fa2ad258ddbce59805c' };
  url.search = new URLSearchParams(weatherApi).toString();
  fetch(url)
    .then(response => response.json())
    .then(readJson);
}

function readJson(apiResponse) {
  const weatherIcon = document.getElementById("icon");
  const cityTemp = document.getElementById("temperature-in-c");
  const windSpeed = document.getElementById("wind");
  const cloudy = document.getElementById("clouds");
  const sunriseTime = document.getElementById("sunrise");
  const sunsetTime = document.getElementById("sunset");

  const kelvinTemp = apiResponse.main.temp;
  const tempInC = (kelvinTemp - 273).toFixed();
  let iconcode = apiResponse.weather[0].icon;
  let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x" + ".png";
  const windSpd = apiResponse.wind.speed;
  const cloud = apiResponse.clouds;
  const sunrise = apiResponse.sys.sunrise;
  const sunriseHour = getTime(sunrise);
  const sunset = apiResponse.sys.sunset;
  const sunsetHour = getTime(sunset);



  
  cityTemp.innerHTML = tempInC+"°C";
  weatherIcon.setAttribute('src', iconurl);
  weatherIcon.removeAttribute("hidden");
  windSpeed.innerHTML = "Wind speed: " + windSpd + " m/s";
  cloudy.innerHTML = "Cloudy: " + cloud + "%";
  sunriseTime.innerHTML = "Sunrise: "+ sunriseHour;
  sunsetTime.innerHTML = "Sunset: " + sunsetHour;

  fetch()
    .then(resultB => {
      console.log(resultB.list.length);
      for (let i = 0; i < resultB.list.length; i++) {
        const hourlyTemp = resultB.list[i].main.temp;
        console.log(hourlyTemp);
      }
    });
}
function getTime(unix_timestamp) {
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let fullTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return fullTime;
}