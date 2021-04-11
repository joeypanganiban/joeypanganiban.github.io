
// PRESTON WEATHER

let cityID  = 1720561;      // Calapan City, Oriental Mindoro
let appKEY  = '696163ebec7f78354faaee5bc55c62fe'

const summary  = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${appKEY}`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${appKEY}`;

fetch(summary)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)   
        const city        = document.querySelector('#city');     
        const description = document.querySelector('#description');
        const temperature = document.querySelector('#temperature'); 
        const humidity    = document.querySelector('#humidity');    
        const windspeed   = document.querySelector('#windspeed');
        city.textContent        = jsObject.name;
        description.textContent = jsObject.weather[0].description;
        temperature.textContent = jsObject.main.temp;
        humidity.textContent    = jsObject.main.humidity;
        windspeed.textContent   = jsObject.wind.speed;
            const icon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
            const name  = jsObject.weather[0].description;
            document.getElementById("icon").setAttribute('src', icon);
            document.getElementById("icon").setAttribute('alt', name);
    });
    fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let i = 0; 1 < jsObject.list.length; i++ ){
            let d = new Date(jsObject.list[i].dt_txt);

            // get tbe forecast that includes 18:00:00 on weather's day time
            let time = jsObject.list[i].dt_txt.includes('18:00:00');
            if (time == true){
                console.log(d)

                document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
                document.getElementById(`temp${day+1}`).textContent = jsObject.list[i].main.temp;
                
                const icon = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
                const name  = jsObject.list[i].weather[0].description;
                document.getElementById(`icon${day+1}`).setAttribute('src', icon);
                document.getElementById(`icon${day+1}`).setAttribute('alt', name);
                console.log(icon)
                day++
            }
        }
    });