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
var forcast = document.getElementsByClassName("_day");

//Sample forcast json from openweathermap.org api
var forcast_data =  {
    "cod":"200",
    "message":0.0032,
    "cnt":36,
    "list":[
       {
          "dt":1487246400,
          "main":{
             "temp":286.67,
             "temp_min":281.556,
             "temp_max":286.67,
             "pressure":972.73,
             "sea_level":1046.46,
             "grnd_level":972.73,
             "humidity":75,
             "temp_kf":5.11
          },
          "weather":[
             {
                "id":800,
                "main":"Clear",
                "description":"clear sky",
                "icon":"01d"
             }
          ],
          "clouds":{
             "all":0
          },
          "wind":{
             "speed":1.81,
             "deg":247.501
          },
          "sys":{
             "pod":"d"
          },
          "dt_txt":"2017-02-16 12:00:00"
       },
       {
          "dt":1487257200,
          "main":{
             "temp":285.66,
             "temp_min":281.821,
             "temp_max":285.66,
             "pressure":970.91,
             "sea_level":1044.32,
             "grnd_level":970.91,
             "humidity":70,
             "temp_kf":3.84
          },
          "weather":[
             {
                "id":800,
                "main":"Rain",
                "description":"light showers",
                "icon":"09n"
             }
          ],
          "clouds":{
             "all":0
          },
          "wind":{
             "speed":1.59,
             "deg":290.501
          },
          "sys":{
             "pod":"d"
          },
          "dt_txt":"2017-02-16 15:00:00"
       },
       {
          "dt":1487268000,
          "main":{
             "temp":277.05,
             "temp_min":274.498,
             "temp_max":277.05,
             "pressure":970.44,
             "sea_level":1044.7,
             "grnd_level":970.44,
             "humidity":90,
             "temp_kf":2.56
          },
          "weather":[
             {
                "id":800,
                "main":"Clear",
                "description":"clear sky",
                "icon":"01n"
             }
          ],
          "clouds":{
             "all":0
          },
          "wind":{
             "speed":1.41,
             "deg":263.5
          },
          "sys":{
             "pod":"n"
          },
          "dt_txt":"2017-02-16 18:00:00"
       },
       {
          "dt":1487624400,
          "main":{
             "temp":272.424,
             "temp_min":272.424,
             "temp_max":272.424,
             "pressure":968.38,
             "sea_level":1043.17,
             "grnd_level":968.38,
             "humidity":85,
             "temp_kf":0
          },
          "weather":[
             {
                "id":801,
                "main":"Clouds",
                "description":"few clouds",
                "icon":"02n"
             }
          ],
          "clouds":{
             "all":20
          },
          "wind":{
             "speed":3.57,
             "deg":255.503
          },
          "rain":{
 
          },
          "snow":{
 
          },
          "sys":{
             "pod":"n"
          },
          "dt_txt":"2017-02-20 21:00:00"
       },
       {
          "dt":1487624400,
          "main":{
             "temp":272.424,
             "temp_min":272.424,
             "temp_max":272.424,
             "pressure":968.38,
             "sea_level":1043.17,
             "grnd_level":968.38,
             "humidity":85,
             "temp_kf":0
          },
          "weather":[
             {
                "id":801,
                "main":"Clouds",
                "description":"few clouds",
                "icon":"02n"
             }
          ],
          "clouds":{
             "all":20
          },
          "wind":{
             "speed":3.57,
             "deg":255.503
          },
          "rain":{
 
          },
          "snow":{
 
          },
          "sys":{
             "pod":"n"
          },
          "dt_txt":"2017-02-20 21:00:00"
       }
    ],
    "city":{
       "id":6940463,
       "name":"Altstadt",
       "coord":{
          "lat":48.137,
          "lon":11.5752
       },
       "country":"none"
    }
 }
 
for(let i = 0;i<forcast.length;i++){

    var day_index = ((current_date.getDay()+1+i) % 7);
    forcast[i].querySelector('.day_abbrev').innerHTML = day_abbrev[day_index];
    forcast[i].querySelector('.day_icon').innerHTML = "<img src='//openweathermap.org/img/wn/"+forcast_data.list[i].weather[0].icon+"@2x.png' alt='"+forcast_data.list[i].weather[0].description+"' />";
    forcast[i].querySelector('.day_desc').innerHTML = "High: "+parseInt(((forcast_data.list[i].main.temp_max - 273.15) * 9/5) + 32)+ "&deg;F";
};
