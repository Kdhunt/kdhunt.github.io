let townName = "Preston";

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'].filter(
        town => town.name == townName
    );
    console.table(towns);
    towns[0].events.forEach(event=>{
        let eventcontainer = document.querySelector('.upcoming-events');
        let eventblock = `
            <div class="community-event">
                ${event}
            </div>
        `
        eventcontainer.insertAdjacentHTML("beforeend", eventblock);
    })

});