const currentTemp = document.querySelector('#current-temp');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.49&lon=-122.17&units=imperial&appid=932631c08dfe2bb0e33e964670c1961c'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.49&lon=-122.17&units=imperial&appid=932631c08dfe2bb0e33e964670c1961c'

async function currentWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

currentWeather();

function displayWeather(data) {
    const roundedTemp = Math.round(data.main.temp)
    currentTemp.innerHTML = `${roundedTemp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherIcon.setAttribute('height', '48');
    weatherIcon.setAttribute('width', '48');
    description.textContent = `${desc}`;
    const roundedHighTemp = Math.round(data.main.temp_max);
    highTemp.innerHTML = `High: ${roundedHighTemp}&deg;F`;
    const roundedLowTemp = Math.round(data.main.temp_min)
    lowTemp.innerHTML = `Low: ${roundedLowTemp}&deg;F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
    const sunriseTime = sunrise
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        .replace(/^0/, '');
    const sunsetTime = sunset
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        .replace(/^0/, '');
    document.querySelector('#sunrise').textContent = `Sunrise: ${sunriseTime}`;
    document.querySelector('#sunset').textContent = `Sunset: ${sunsetTime}`;
}

async function weatherForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(forecastData) {
    const forecastContainer = document.querySelector('#forecast-container');
    forecastContainer.innerHTML = '';
    const dailyMap = {};

    forecastData.forEach(entry => {
        const date = entry.dt_txt.split(" ")[0];
        if (!dailyMap[date]) {
            dailyMap[date] = [];
        }
        dailyMap[date].push(entry);
    });

    const today = new Date().toLocaleDateString("en-CA");
    const dates = Object.keys(dailyMap)
        .filter(date => date !== today)
        .sort()
        .slice(1, 4);
    
    dates.forEach(date => {
        const entries = dailyMap[date];
        let high = -Infinity;
        let low = Infinity;
        let middayEntry = entries.find(e => e.dt_txt.includes("12:00:00")) || entries[Math.floor(entries.length / 2)];
        entries.forEach(entry => {
            high = Math.max(high, entry.main.temp_max);
            low = Math.min(low, entry.main.temp_min);
        });

        const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
        const iconUrl = `https://openweathermap.org/img/wn/${middayEntry.weather[0].icon}@2x.png`;
        const description = middayEntry.weather[0].description;
        const forecastHTML = `
            <div class="forecast-day">
                <h3>${dayName}<h3>
                <div class="forecast-info">
                    <figure>
                        <img src="${iconUrl}" alt="${description}" height="48" width="48">
                        <figcaption>${ description }</figcaption>
                    </figure>
                    <div class="forecast-temp">
                        <p>High: ${Math.round(high)}&deg;F</p>
                        <p>Low: ${Math.round(low)}&deg;F</p>
                    </div>
                </div>
            </div>
        `;
        forecastContainer.innerHTML += forecastHTML;
    });
}

weatherForecast();