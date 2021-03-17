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
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // reduce the list array to the five forecasts ... 40
        for (let i = 0; 1<jsObject.list.length; i++){
            // filter
                // feed the filter a condition ...18:00:00    dt_txt and see if it includes()
            // loop through each of the forecast days
            let d   = new Date(jsObject.list[i].dt_txt);

            let time = jsObject.list[i].dt_txt.includes('18:00:00');
            if (time == true){
                console.log(d);
                document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
                day++
            }
        }
    });
    

