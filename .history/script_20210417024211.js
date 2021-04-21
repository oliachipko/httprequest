function getWeather() {
const city = document.getElementById('city').value;
 fetch(`http://api.weatherstack.com/current?access_key=085bf9598e44c25b6bd8dbd50cd19478&query=${city}` )
 .then(response=>response.json().then(data =>alert(`temperature in ${data.location.name} is ${data.current.temperature}`)));
}

function getWeather2() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.weatherstack.com/current?access_key=085bf9598e44c25b6bd8dbd50cd19478&query=Chicago}`);
    xhr.send();
    xhr.onload = function() {
        console.log(xhr.response);
        alert(xhr.response.request)
    }
    
}