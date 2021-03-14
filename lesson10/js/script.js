var current_date = new Date();
const days = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thurssday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// Wednesday, 24 January 2021
let updatedt = document.getElementById('updatedt');
updatedt.innerHTML = days[current_date.getDay()]+", "
+("0" + current_date.getDate()).slice(-2)+" "
+months[current_date.getMonth()]+" "
+current_date.getFullYear()

;

document.getElementById("menu_toggle").addEventListener("click", ()=>{
    document.getElementById("nav_menu").classList.toggle("menu_active");
});

//if the day is Friday, display the banner 
let banner = document.getElementsByClassName("banner_bar")[0];
if(current_date.getDay() == 5){
    banner.style.display = "block";
}

const day_abbrev = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var forcast_block = document.getElementsByClassName("_day");

//Sample forcast json from openweathermap.org api
const weatherApiURL = `//api.openweathermap.org/data/2.5/weather?id=${citycode}&appid=597b2c47ecaa36d899d4e4fffd3c3470&units=imperial`;
fetch(weatherApiURL)
.then((response) => response.json())
.then((jsObject) => {
  //console.log(jsObject);
  document.querySelector('.weather_item_value.weather_description').innerHTML = jsObject.weather[0].description;
  document.querySelector('.weather_item_value .temperature').innerHTML = jsObject.main.temp_max;
  document.querySelector('.weather_item_value .humidity').innerHTML = jsObject.main.humidity;
  document.querySelector('.weather_item_value .wind_speed').innerHTML = jsObject.wind.speed;
  

});
const forcastApiUrl = `//api.openweathermap.org/data/2.5/forecast?id=${citycode}&appid=597b2c47ecaa36d899d4e4fffd3c3470&units=imperial`;
fetch(forcastApiUrl)
.then((response) => response.json())
.then((jsObject) => {
    
    let forcast_data = jsObject.list.filter(day=>day.dt_txt.includes("18:00:00"))
    forcast_data.forEach((day, index) => {
        //console.log(day);
        var day_index = ((current_date.getDay()+1+index) % 7);
        forcast_block[index].querySelector('.day_abbrev').innerHTML = day_abbrev[day_index];
        forcast_block[index].querySelector('.day_icon').innerHTML = "<img src='//openweathermap.org/img/wn/"+day.weather[0].icon+"@2x.png' alt='"+day.weather.description+"' />";
        forcast_block[index].querySelector('.day_desc').innerHTML = "High: "+ day.main.temp_max + "&deg;F";
    });
});
/* FORM SLIDER */
var slider = document.querySelector("input[type=range]");
var output = document.getElementById("severity_rangevalue");


// Update the current slider value (each time you drag the slider handle)
if (typeof output !== 'undefined' && slider !== null){
   output.innerHTML = slider.value; // Display the default slider value
   slider.oninput = function() {
   output.innerHTML = this.value;
   }
}