// getData is called by Forcat button 
const getData = () => {
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
    const API = api_endpoint + "q=" + cityName + "&appid=" + api_key + "&units=metric";

    //setting up request using AJAX
    let xhr = new XMLHttpRequest();

    //action when data is returned 
    xhr.addEventListener("load", responseHandler);
    // fro JSON data
    xhr.responseType = "json";
    //open connection
    xhr.open("GET", API);
    //send data
    xhr.send();
}

// This function is called when data is received
const responseHandler = () => {
    if (this.status == 200) { //data received successfully

    }
    else { //error in data receiving

    }
}