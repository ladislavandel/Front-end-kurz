const apiKey = "59566e203e1861478fe2e5f810dba144";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = fetch(apiURL + city + `&appid=${apiKey}`)
    .then((response) => {
      if (response.status == 404) {
        document.querySelector(".invalid-city").style.display = "block";
        document.querySelector(".city").textContent = "";
        document.querySelector(".temp").textContent = "";
        document.querySelector(".humidity").textContent = "";
        document.querySelector(".wind").textContent = "";
      } else {
        document.querySelector(".invalid-city").style.display = "none";
        return response.json();
      }
    })
    .then((data) => {
      const name = data.name;
      const city = document.querySelector(".city");
      city.textContent = name;
      const temp = Math.round(data.main.temp);
      const temppharagraph = document.querySelector(".temp");
      temppharagraph.textContent = `${temp}°C`;
      const humidity = data.main.humidity;
      const humiditypharagraph = document.querySelector(".humidity");
      humiditypharagraph.textContent = `${humidity}%`;
      const wind = parseFloat(data.wind.speed.toFixed(1));
      const windpharagraph = document.querySelector(".wind");
      windpharagraph.textContent = `${wind} km/h`;

      if (data.weather[0].main == "Rain") {
        weatherIcon.src = "WeatherIMG/rain.png";
      } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "WeatherIMG/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "WeatherIMG/clear.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "WeatherIMG/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "WeatherIMG/mist.png";
      } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "WeatherIMG/snow.png";
      }
    });
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

document.querySelector(".prague").addEventListener("click", () => {
  checkWeather("prague");
});
document.querySelector(".paris").addEventListener("click", () => {
  checkWeather("paris");
});
document.querySelector(".berlin").addEventListener("click", () => {
  checkWeather("berlin");
});
document.querySelector(".bratislava").addEventListener("click", () => {
  checkWeather("bratislava");
});
document.querySelector(".london").addEventListener("click", () => {
  checkWeather("london");
});
document.querySelector(".wien").addEventListener("click", () => {
  checkWeather("wien");
});
