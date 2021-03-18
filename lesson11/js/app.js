function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        // select output location
        const template = document.querySelector('.utah');
        // filter the towns
        const town = towns.filter(towns => towns.name == "Preston" ||
        towns.name == "Fish Haven" || towns.name == "Soda Springs");
        // create element
        town.forEach(townselect => {
            let card        = document.createElement('section');
            let article     = document.createElement('article')
            let h2          = document.createElement('h2');
            let motto       = document.createElement('h3')
            let content     = document.createElement('p');
            let population  = document.createElement('p');
            let rainFall    = document.createElement('p');
            const image     = document.createElement('img');

            // use template literals
            h2.textContent          = `${townselect.name}`;
            motto.textContent       = `${townselect.motto}`;
            content.innerHTML       = `Year Founded: ${townselect.yearFounded}`;
            population.textContent  = `Population: ${townselect.currentPopulation}`;
            rainFall.textContent    = `Annual Rain Fall: ${townselect.averageRainfall}`;
            
            image.setAttribute('src', 'images/' + townselect.photo);

            
            template.append(card);
            card.append(article)
            article.append(h2);
            article.append(motto);
            article.append(content);
            article.append(population);
            article.append(rainFall);
            card.append(image);

            
        });
    });