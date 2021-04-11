// Banner 
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

// Navigation 

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

    // Signature

    


/**************** Footer *******************/

    
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

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("date").textContent = new Date()
        .toLocaleDateString('en-US', options);
const currentYear ={year: 'numeric'}
document.getElementById("year").textContent = new Date()
        .toLocaleDateString('en-US', currentYear);
