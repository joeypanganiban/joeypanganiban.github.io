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

// Upcoming Events
const eventsAPI = "https://joeypanganiban.github.io/ChamberOfCommerce/events.json"
fetch(eventsAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['events'];
        // select output location
        const events = document.querySelector('.upcomingEvents');
        // filter the towns
        });