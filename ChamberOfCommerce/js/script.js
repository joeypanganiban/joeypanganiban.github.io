// Navigation 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
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

// Upcoming Events
const eventsAPI = "https://joeypanganiban.github.io/ChamberOfCommerce/events.json"
fetch(eventsAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const events = jsonObject['events'];
        // select output location
        const event = document.querySelector('.upcomingEvents');
        // filter the towns
            let card    = document.createElement('div');
            let p1      = document.createElement('p');
            let p2      = document.createElement('p');
            let p3      = document.createElement('p');

            p1.textContent    = `${events[0]}`;
            p2.textContent    = `${events[1]}`;
            p3.textContent    = `${events[2]}`;

            event.append(card);
            card.append(p1);
            card.append(p2);
            card.append(p3);
        });