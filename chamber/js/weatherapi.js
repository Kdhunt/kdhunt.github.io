const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.54&lon=-104.57&exclude=hourly,minutely&appid=597b2c47ecaa36d899d4e4fffd3c3470&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


jsObject.alerts = [
  {
    "sender_name": "NWS Tulsa (Eastern Oklahoma)",
    "event": "Heat Advisory",
    "start": 1597341600,
    "end": 1597366800,
    "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible."
  }
];

    let currentweather = document.querySelector(".weather-block.current");
    currentweather.querySelector(".temp .value").innerHTML = jsObject.current.temp.toFixed(0);
    currentweather.querySelector(".description").innerHTML = jsObject.current.weather[0].description;
    currentweather.querySelector(".humidity").innerHTML = jsObject.current.humidity;

    let weatherblocks = document.querySelectorAll(".forcast .weather-block");
    weatherblocks.forEach((weather,i)=>{
      let date = new Date(0);
      date.setUTCSeconds(jsObject.daily[i].dt);
      weather.querySelector("h4").innerHTML = `${date.getMonth()+1}/${date.getDate()+1}/${date.getFullYear()}`;
      weather.querySelector(".temp .value").innerHTML = jsObject.daily[i].temp.day.toFixed(0);
      weather.querySelector(".description").innerHTML = jsObject.daily[i].weather[0].description;
      weather.querySelector(".humidity").innerHTML = jsObject.daily[i].humidity;
    });

    if(jsObject.alerts){//} && curDate > Date(jsObject.alerts[0].start) && curDate < Date(jsObject.alerts[0].end)){
        weatherAlert.classList.add("active");
        let event = weatherAlert.querySelector('.event');
        event.innerHTML = jsObject.alerts[0].event+"<span class='event-details'></span>";
        let alertdetails = event.querySelector(".event-details")
        alertdetails.innerHTML = jsObject.alerts[0].description;
        event.addEventListener("mouseover", e=>{
          alertdetails.classList.add("view");
        });
        event.addEventListener("mouseout", e=>{
          alertdetails.classList.remove("view");
        });
    }
  });