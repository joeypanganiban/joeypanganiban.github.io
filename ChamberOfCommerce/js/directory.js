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
      let div3 = document.createElement('div');
      let div4 = document.createElement('div');
      let contact = document.createElement('p');
      let image = document.createElement('img');
      let website = document.createElement('button');
      let a = document.createElement('a');  
            
      card.setAttribute('class', 'card');
      h2.textContent = calapan[i].name;
      contact.textContent = 'Contact: ' + calapan[i].contact;
      image.setAttribute('src', 'images/'+calapan[i].photo);
      image.setAttribute('alt', calapan[i].name);
      div3.setAttribute('class', 'directorylogo');
      div4.setAttribute('class', 'directorystore');
      a.setAttribute('href', calapan[i].website);
      a.setAttribute('target', '_blank');
      a.textContent = 'Visit Us';
      

      div1.appendChild(image);
      div2.appendChild(h2);
      div2.appendChild(contact);
      div2.appendChild(website);
      website.appendChild(a);
      div3.appendChild(div1);
      div4.appendChild(div2);
      card.appendChild(div3);
      card.appendChild(div4);
      
      document.querySelector('div.directory').appendChild(card);
    }
  });


  // addEventListener List Grid
const card = document.querySelector('.card')
const list = document.querySelector('.list')
const grid = document.querySelector('.grid')

grid.addEventListener("click", e => {console.log('list 1')})