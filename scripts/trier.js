const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const appid = "bcb2df88e376b761ec3268e6a148dd65";
let lat = 49.750943665121056;
let lon = 6.637082582339139;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
currentTemp.innerHTML = `${data.main.temp}&deg;C`;
const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
let desc = data.weather[0].description;
weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('width', 40);
captionDesc.textContent = `${desc}`;
}

apiFetch()