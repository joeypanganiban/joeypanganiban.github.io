        let tempF = 50;
        let speed = 4.8;
        let f     = windChill(tempF, speed);

        document.getElementById("windchill").innerHTML = f + " ";
 
    function windChill(t, s) {
    
        let f = 35.74 + 0.6215 * t 
                        - 35.75 * Math.pow(s, 0.16)
                        + 0.4275 * t * Math.pow(s, 0.16);
        let digits = 2;
        let multiplier = Math.pow(10, digits);
        let total = Math.round(f * multiplier) / multiplier
        return total;   
    }