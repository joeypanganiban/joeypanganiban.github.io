

// Navigation 

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

 
// slides images 
var slideIndex = 0;
    showSlides();
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
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
