

//calculate Wind chill factor
function calculate_windchill(temp, wind){
    return (temp <= 50 && wind >= 3)?
       (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind,0.16)) 
       + (0.4275 * temp * Math.pow(wind,0.16))).toFixed(1):"n/a";
 }
 document.querySelector(".windchill").innerHTML = calculate_windchill(
    parseInt(document.querySelector(".temperature").textContent),
    parseInt(document.querySelector(".wind_speed").textContent),
 
 )