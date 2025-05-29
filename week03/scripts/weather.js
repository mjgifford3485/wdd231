const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=932631c08dfe2bb0e33e964670c1961c'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=imperial&appid=932631c08dfe2bb0e33e964670c1961c'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
}

async function weatherForecast() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecast(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

weatherForecast();

function displayForecast(forecastData) {
    currentTemp.innerHTML = `${forecastData.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`
    let forecastDesc = forecastData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', forecastData.weather[0].description);
    captionDesc.textContent = `${forecastDesc}`;
}