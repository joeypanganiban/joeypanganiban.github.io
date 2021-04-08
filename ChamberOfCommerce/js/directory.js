const requestURL = 'ChamberOfCommerce/calapan.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const calapan = jsonObject['calapan'];  
    for (let i = 0; i < calapan.length; i++ ) {
      let card = document.createElement('section');
      let h4 = document.createElement('h4');
      let image = document.createElement('img');
            
      h4.textContent = calapan[i].name;
      

      card.appendChild(h4);
      
      document.querySelector('div.cards').appendChild(card);
    }
  });