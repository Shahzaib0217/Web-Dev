// clicl handler for forcast btn
document.getElementById("Forcast").addEventListener("click", getData);

// getData is called by Forcast button 
function getData() { // if arrow function than declare above
    let name = document.getElementById("name").value;
    getWeather(name);
}

/*This function makes AJAX call
to get Weather for entered city name
*/
const getWeather = (cityName) => {
    // Api to request data from (openwaethermap.org)
    const api_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const api_key = "efdc720d1d913e6c8f75c0bf6686e5e6";
    // units=metric will show temp in Celcius
    var API = api_endpoint + "q=" + cityName + "&appid=" + api_key + "&units=metric";

    //setting up request using AJAX
    let xhr = new XMLHttpRequest();
    //action when data is returned (ready state is Done(4))
    xhr.addEventListener("load", responseHandler);
    //open connection
    xhr.open("GET", API);
    // for JSON data
    xhr.responseType = "json";
    //send data
    xhr.send();
}

// This function is called onload
function responseHandler() {
    if (this.status == 200) { // when data is received
        const data = this.response;
        let inner_html = `
        <p>City: ${data.name}</p>
        <p>Temprature: ${data.main.temp}</p>
        <p>Feels Like: ${data.main.feels_like}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Min. Temp: ${data.main.temp_min}</p>
        <p>Max. Temp: ${data.main.temp_max}</p>
        `;
        document.getElementById("weatherInfo").innerHTML = inner_html;
    }
    else {
        alert("Unable to Load Data");
    }
}