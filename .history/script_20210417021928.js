function getWeather() {

 fetch("http://api.weatherstack.com/current?access_key=085bf9598e44c25b6bd8dbd50cd19478&query=Chicago" )
 .then(response=>response.json().then(data =>alert(data.current.temperature)))
}

