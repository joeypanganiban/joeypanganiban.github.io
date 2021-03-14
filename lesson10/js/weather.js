let cityID  = 5604473;      // Preston, Idaho
let appKEY  = '696163ebec7f78354faaee5bc55c62fe'

const summary  = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${appKEY}`;
const forecast = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${appKEY}`;

fetch(summary)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)        
        const description = document.querySelector('#description');
        const temperature = document.querySelector('#temperature'); 
        const humidity    = document.querySelector('#humidity');    
        const windspeed   = document.querySelector('#windspeed');   
        description.textContent = jsObject.weather[0].description;
        temperature.textContent = jsObject.main.temp;
        humidity.textContent    = jsObject.main.humidity;
        windspeed.textContent   = jsObject.wind.speed;
    });
fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        let d   = new Date(jsObject.list[4].dt_txt);
        console.log(d);
        document.getElementById(`dayofweek${1}`).textContent = jsObject[d.getDate()];
        
    });
    

