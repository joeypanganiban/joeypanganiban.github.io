  // PRESTON

  const eventsAPI = 'https://byui-cit230.github.io/weather/data/towndata.json';
  fetch(eventsAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
          //console.table(jsonObject); // temporary checking for valid response and data parsing
          const towns = jsonObject['towns'];
  
          // select output location
          const events = document.querySelector('.upcomingEvents');
          // filter the towns
          const town = towns.filter(towns => towns.name == "Preston");
          // create element
          town.forEach(townselect => {
              let card    = document.createElement('div');
              let p1      = document.createElement('p');
              let p2      = document.createElement('p');
              let p3      = document.createElement('p');

              p1.textContent    = `${townselect.events[0]}`;
              p2.textContent    = `${townselect.events[1]}`;
              p3.textContent    = `${townselect.events[2]}`;

              events.append(card);
              card.append(p1);
              card.append(p2);
              card.append(p3);
          });
      });