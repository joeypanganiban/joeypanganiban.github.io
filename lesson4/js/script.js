const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
        document.getElementById("date").textContent = new Date().toLocaleDateString('en-US', options);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}