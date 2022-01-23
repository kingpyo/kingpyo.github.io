// const API_KEY = "969e5e0d845bb1253d45ba270575e0c9";

// function geoSuccess(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         const fineDust = document.querySelector("#fine_dust")
//         const ultrafineDust = document. querySelector("#ultrafine_dust")
//         fineDust.innerText = `${data.list[0].components.pm2_5}`;
//         ultrafineDust.innerText = `${data.list[0].components.pm10}`;
//     });
// }

// function geoError() {
//     alert("!")
// }

// navigator.geolocation.getCurrentPosition(geoSuccess, geoError)