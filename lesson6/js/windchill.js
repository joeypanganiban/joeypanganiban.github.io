/* Defining Table
    * Input:       Get the input value of Temperature and Wind Speed
    * Processing:  Convert the Temperature and Windspeed into Wind Chill temperature
    * Output:      Fahrenheit of Wind Chill
    */

// functionName should match from the HTML button-onclick

    // Input
        // a. get a temperatature from the first text field
        let tempF = 50;
        // b. get a wind speed from the second text field 
        let speed = 4.8;
        
        // c. call the second function(windChill)
        // d. store the value returned by windChill in a variable
        let f     = windChill(tempF, speed);

    // Output
        // e. output the value returned by windChill to the div for the user to see
        document.getElementById("windchill").innerHTML = f + " ";
    
        // a. take a temperature in Fahrenheit as a parameter
        // b. take a wind speed in miles per hour as a parameter
        function windChill(t, s) {

    // Processing
        // c. calculate the wind chill factor as a temperature in Fahrenheit
        let f = 35.74 + 0.6215 * t 
                        - 35.75 * Math.pow(s, 0.16)
                        + 0.4275 * t * Math.pow(s, 0.16);
        // d. return the wind chill factor in Fahrenheit
        return Math.round(f);   
    }