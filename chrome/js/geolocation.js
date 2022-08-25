const API_KEY = "4d1663b9739ed87c16aa44a976ec4d01";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `위치 : ${data.sys.country} - ${data.name}`;
        weather.innerText = `날씨 : ${data.weather[0].main}  ${data.main.temp}°`;
    });
}

function onGeoError(){
    alert("you can't get you location")
}



navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);