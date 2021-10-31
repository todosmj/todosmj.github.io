const icon = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "30044d0c1e3ad122261df52adf322aa9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        city.innerText = data.name;
        //   weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;

        const iconImage = getIcon(data.weather[0].icon);
        icon.appendChild(iconImage);
        weather.innerText = `${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

function getIcon(id) {
    const img = document.createElement('img');
    img.src = `http://openweathermap.org/img/w/${id}.png`
    img.width = '50'
    console.log(img);
    return img;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);