const weatherIcon = document.querySelector("#weatherIcon");
const weatherInfo = document.querySelector("#weatherInfo");
const futureWeather = document.querySelector("#futureWeather");
const todayTemp = document.querySelector("#todayTemp");

const lat = -25.37684036774518;
const lon = -57.58509281160609;
const appid = "bcb2df88e376b761ec3268e6a148dd65";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}&units=metric&cnt=20`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }
        else
            throw error(await response.text());
            
    } catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else
            throw error(await response.text());
            
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("width", "50");
    weatherInfo.innerHTML = `${data.weather[0].description}<br> ${data.main.temp}&deg;C<br> <strong>Min:</strong> ${data.main.temp_min}&deg;C<br> <strong>Max:</strong> ${data.main.temp_max}&deg;C`;
    todayTemp.innerHTML = `<strong>Today: </strong> ${data.main.temp}&deg;C`;
}

function displayForecast(data){
    futureWeather.innerHTML = `<strong>Tomorrow: </strong> ${data.list[3].main.temp}&deg;C <br> <strong>Next day: </strong>${data.list[11].main.temp}&deg;C`;
}

fetchWeather();
fetchForecast();