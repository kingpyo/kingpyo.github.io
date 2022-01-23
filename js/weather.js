const API_KEY = "969e5e0d845bb1253d45ba270575e0c9";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // weather
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#city")
        const icon = document.querySelector("#icon")
        const weather = document.querySelector("#weather")
        const img = document.createElement("img")
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        city.innerText = data.name;
        icon.appendChild(img);
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
    // air pollution
    const url2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url2)
    .then((response) => response.json())
    .then((data) => {
        const fineDust = document.querySelector("#fine_dust div")
        const ultrafineDust = document. querySelector("#ultrafine_dust div")
        const pm2_5 = data.list[0].components.pm2_5;
        const pm10 = data.list[0].components.pm10
        // 미세먼지 기준
        if (pm2_5 >= 0 && pm2_5 <= 25) {
            fineDust.innerText = "good";
            setFineDustBackgroundColor("#ebf7ff");
            setFineDustColor("#34a0ff");
        } else if (pm2_5 > 25 && pm2_5 <= 50) {
            fineDust.innerText = "fair";
            setFineDustBackgroundColor("#ebfae8");
            setFineDustColor("#00c73c");
        } else if (pm2_5 > 50 && pm2_5 <= 90) {
            fineDust.innerText = "moderate";
            setFineDustBackgroundColor("#fefcda");
            setFineDustColor("#fc0");
        } else if (pm2_5 > 90 && pm2_5 <= 180) {
            fineDust.innerText = "Poor";
            setFineDustBackgroundColor("#fdfbef");
            setFineDustColor("#fda60e");
        } else if (pm2_5 > 180) {
            fineDust.innerText = "Very Poor";
            setFineDustBackgroundColor("#fdf2ef");
            setFineDustColor("#e64746");
        }
        // 초미세먼지 기준
        if (pm10 >= 0 && pm10 <= 15) {
            ultrafineDust.innerText = "good";
            setUltraFineDustBackgroundColor("#ebf7ff");
            setUltraFineDustColor("#34a0ff");
        } else if (pm10 > 15 && pm10 <= 30) {
            ultrafineDust.innerText = "fair";
            setUltraFineDustBackgroundColor("#ebfae8");
            setUltraFineDustColor("#00c73c");
        } else if (pm10 > 30 && pm10 <= 55) {
            ultrafineDust.innerText = "moderate";
            setUltraFineDustBackgroundColor("#fefcda");
            setUltraFineDustColor("#fc0");
        } else if (pm10 > 55 && pm10 <= 110) {
            ultrafineDust.innerText = "Poor"; 
            setUltraFineDustBackgroundColor("#fdfbef");
            setUltraFineDustColor("#fda60e");
        } else if (pm10 > 110) {
            ultrafineDust.innerText = "Very Poor";
            setUltraFineDustBackgroundColor("#fdf2ef");
            setUltraFineDustColor("#e64746");
        }
    });
}

function geoError() {
    const lat = 37.541;
    const lon = 126.986;
    // weather
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#city")
        const icon = document.querySelector("#icon")
        const weather = document.querySelector("#weather")
        const img = document.createElement("img")
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        city.innerText = "Seoul";
        icon.appendChild(img);
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
    // air pollution
    const url2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url2)
    .then((response) => response.json())
    .then((data) => {
        const fineDust = document.querySelector("#fine_dust div")
        const ultrafineDust = document. querySelector("#ultrafine_dust div")
        const pm2_5 = data.list[0].components.pm2_5; 
        const pm10 = data.list[0].components.pm10
        // 미세먼지 기준
        if (pm2_5 >= 0 && pm2_5 <= 25) {
            fineDust.innerText = "good";
            setFineDustBackgroundColor("#ebf7ff");
            setFineDustColor("#34a0ff");
        } else if (pm2_5 > 25 && pm2_5 <= 50) {
            fineDust.innerText = "fair";
            setFineDustBackgroundColor("#ebfae8");
            setFineDustColor("#00c73c");
        } else if (pm2_5 > 50 && pm2_5 <= 90) {
            fineDust.innerText = "moderate";
            setFineDustBackgroundColor("#fefcda");
            setFineDustColor("#fc0");
        } else if (pm2_5 > 90 && pm2_5 <= 180) {
            fineDust.innerText = "Poor";
            setFineDustBackgroundColor("#fdfbef");
            setFineDustColor("#fda60e");
        } else if (pm2_5 > 180) {
            fineDust.innerText = "Very Poor";
            setFineDustBackgroundColor("#fdf2ef");
            setFineDustColor("#e64746");
        }
        // 초미세먼지 기준
        if (pm10 >= 0 && pm10 <= 15) {
            ultrafineDust.innerText = "good";
            setUltraFineDustBackgroundColor("#ebf7ff");
            setUltraFineDustColor("#34a0ff");
        } else if (pm10 > 15 && pm10 <= 30) {
            ultrafineDust.innerText = "fair";
            setUltraFineDustBackgroundColor("#ebfae8");
            setUltraFineDustColor("#00c73c");
        } else if (pm10 > 30 && pm10 <= 55) {
            ultrafineDust.innerText = "moderate";
            setUltraFineDustBackgroundColor("#fefcda");
            setUltraFineDustColor("#fc0");
        } else if (pm10 > 55 && pm10 <= 110) {
            ultrafineDust.innerText = "Poor"; 
            setUltraFineDustBackgroundColor("#fdfbef");
            setUltraFineDustColor("#fda60e");
        } else if (pm10 > 110) {
            ultrafineDust.innerText = "Very Poor";
            setUltraFineDustBackgroundColor("#fdf2ef");
            setUltraFineDustColor("#e64746");
        }
    });
}

function setFineDustBackgroundColor(color) {
    const fineDust0 = document.querySelector("#fine_dust")
    fineDust0.style.backgroundColor = color;
}

function setFineDustColor(color) {
    const fineDust1 = document.querySelector("#fine_dust div")
    fineDust1.style.color = color;
}

function setUltraFineDustBackgroundColor(color) {
    const ultraFineDust0 = document.querySelector("#ultrafine_dust")
    ultraFineDust0.style.backgroundColor = color;
}

function setUltraFineDustColor(color) {
    const ultraFineDust1 = document.querySelector("#ultrafine_dust div")
    ultraFineDust1.style.color = color;
}



navigator.geolocation.getCurrentPosition(geoSuccess, geoError)