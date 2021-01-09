const options = {day: 'numeric', month: 'long', year: 'numeric', hour: "numeric", minute: "numeric"};
        document.getElementById("date").textContent = new Date().toLocaleDateString('en-US', options);

