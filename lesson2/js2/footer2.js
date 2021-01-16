const options2 = {day: 'numeric', month: 'long', year: 'numeric', hour: "numeric", minute: "numeric"};
        document.getElementById("date2").textContent = new Date().toLocaleDateString('en-US', options2);
const currentYear2 ={year: 'numeric'}
        document.getElementById("year2").textContent = new Date().toLocaleDateString('en-US', currentYear2);