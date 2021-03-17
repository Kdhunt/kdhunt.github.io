const requestURL = '//byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = prophet.name + ' ' + prophet.lastname;
        let image = document.createElement("img")
        image.setAttribute('src', prophet.imageurl);
        var p1 = document.createElement("p");
        var text1 = document.createTextNode("Date of Birth: "+prophet.birthdate);
        p1.appendChild(text1)
        var p2 = document.createElement("p");
        var text2 = document.createTextNode("Place of Birth: "+prophet.birthplace);
        p2.appendChild(text2)
        
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
      });
});
  

  