const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "   Km/h";

        if (data.weather[0].main === "Rain") {
            document.querySelector(".weather-icon").src = "images/rain.png";
        }
        else if (data.weather[0].main === "Clouds") {
            document.querySelector(".weather-icon").src = "images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            document.querySelector(".weather-icon").src = "images/clear.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            document.querySelector(".weather-icon").src = "images/drizzle.png";
        }
        else if (data.weather[0].main === "Snow") {
            document.querySelector(".weather-icon").src = "images/snow.png";
        }
        else if (data.weather[0].main === "Mist") {
            document.querySelector(".weather-icon").src = "images/mist.png";
        }

        else {
            document.querySelector(".weather-icon").src = "images/search.png"; // defaul image
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "NONE";
    }
}


searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});