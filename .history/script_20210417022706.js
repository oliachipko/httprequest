function getWeather() {
const city = document.getElementById('city').value;
 fetch(`http://api.weatherstack.com/current?access_key=085bf9598e44c25b6bd8dbd50cd19478&query=${city}` )
 .then(response=>response.json().then(data =>alert(`temperature in ${data.location.name} is ${data.current.temperature}`)))
}

