const requestURL = '../ChamberOfCommerce/js/calapan.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const calapan = jsonObject['calapan'];  
    for (let i = 0; i < calapan.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let contact = document.createElement('p');
      let image = document.createElement('img');
      let website = document.createElement('p')
            
      h2.textContent = calapan[i].name;
      contact.textContent = 'Contact: ' + calapan[i].contact;
      image.setAttribute('src', 'images/'+calapan[i].photo);
      image.setAttribute('alt', calapan[i].name);
      website.textContent = calapan[i].website;
      

      div1.appendChild(image);
      div2.appendChild(h2);
      div2.appendChild(contact);
      div2.appendChild(website);
      card.appendChild(div1);
      card.appendChild(div2);
      
      document.querySelector('div.directory').appendChild(card);
    }
  });


  // addEventListener List Grind
