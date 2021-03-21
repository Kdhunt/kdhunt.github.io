const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'].filter(
        town => town.name.match(/^(Preston|Fish Haven|Soda Springs)$/)
    );
    console.table(towns);
    towns.sort((a,b) => (a.currentPopulation < b.currentPopulation) ? 1 : ((b.currentPopulation < a.currentPopulation) ? -1 : 0));
    const events = []
    towns.forEach(town=>{
        town.events.forEach(event=>events.push(event))
        let towncontainer = document.querySelector('.town-cards');
        let cardblock = `
        <div class="card">
            <img src="images/${town.photo}" alt="${town.name} Idaho" loading="lazy" width="800" height="" />
            <div>
            <h2>${town.name}</h2>
            <p>${town.motto}</p>
            <p>Year Founded: ${town.yearFounded}</p>
            <p>Population: ${town.currentPopulation}</p>
            <p>Annual Rain Fall: ${town.averageRainfall} in.</p>
            <div>
        </div>
        `
        
        towncontainer.insertAdjacentHTML("beforeend", cardblock);
    });
    events.forEach(event=>{
        let eventcontainer =document.querySelector('.upcoming-events');
        let eventblock = `
            <div class="community-event">
                ${event}
            </div>
        `
        eventcontainer.insertAdjacentHTML("beforeend", eventblock);
    })

});
