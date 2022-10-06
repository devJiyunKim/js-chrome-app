
const API_KEY = "6ec9eb79fcce7f897cabc32457aff43a";

function onGeoSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(respone => respone.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
  alert("Can't find you. 위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);



