
/****************** Date String ******************/
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d  = new Date();
let hours       = d.getHours();
let minutes     = d.getMinutes();
let dayName     = daynames[d.getDay()];
let monthName   = months[d.getMonth()];
let year        = d.getFullYear();

/** Sample *
document.getElementById("weekday1").innerHTML = dayName;

/** time format 9:00 AM 
const hour = { hour: 'numeric', minute: 'numeric', hour12: true };
document.getElementById("hour").textContent = new Date()
    .toLocaleString('en-US', hour); 

document.getElementById("weekday2").innerHTML = dayName;

const hourWeekday = {hour: 'numeric', munite: 'numeric', weekday: 'long'};
document.getElementById("hourWeekday").textContent = new Date()
    .toLocaleDateString('en-US', hourWeekday); */


/******************** Banner *********************/
let banner = document.getElementById("banner");
if (d.getDay() === 5) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}
 



/*************** Navigation ***************/
function toggleMenu() {
document.getElementById("primaryNav")
        .classList.toggle("hide");
}



/**************** Footer *******************/
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById("date").textContent = new Date()
            .toLocaleDateString('en-US', options);

