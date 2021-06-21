fetch('https://api.nasa.gov/planetary/apod?api_key=kJMweCft7Sek5sPPm4bQ68PqvHPZACO8gMoKXTJu')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
        let title = jsObject.title;
        let explanation = jsObject.explanation;
    
        document.getElementById('title').textContent = (title);
        document.getElementById('explanation').textContent = (explanation);

        const imagesrc = jsObject.url;
        const desc = jsObject.title;
        document.getElementById('photo').setAttribute('src', imagesrc);
        document.getElementById('photo').setAttribute('alt', desc);
    
    });

fetch('http://api.nytimes.com/svc/semantic/v2/svc/events/v2/listings.json?ll=40.756173,-73.990173&radius=1000&sort=dist+asc')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);


});

  // const req = "https://api.nasa.gov/planetary/apod?api_key=kJMweCft7Sek5sPPm4bQ68PqvHPZACO8gMoKXTJu";

  // fetch(req)
  //   .then(function (response) {
  //     console.log(response.json());
  //     return response.json();
  //   })


  // .then(function (jsonObject) {
  //   const towns = jsonObject['towns'];
  //   const cards = document.querySelector('.cards');

  //   const name = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven');

  //   name.forEach(towns => {
  //       let section = document.createElement('section');

  //       let div = document.createElement('div');
  //       div.setAttribute('id', 'data');

  //       let h2 = document.createElement('h2');
  //       let h3 = document.createElement('h3')
  //       let p = document.createElement('p');
  //       let p2 = document.createElement('p');
  //       let p3 = document.createElement('p');
  //       let button = document.createElement('button');

  //       h2.textContent = `${towns.name}`;
  //       h3.textContent = `${towns.motto}`;
  //       p.textContent = `Year Founded: ${towns.yearFounded}`;
  //       p2.textContent = `Current Population: ${towns.yearFounded}`;
  //       p3.textContent = `Average Rainfall: ${towns.averageRainfall}`;
  //       button.innerHTML = "Visit...";
  //       button.setAttribute('onclick', `location.href='${towns.name}.html'`);
  //       button.setAttribute('type', 'button');


  //       div.appendChild(h2);
  //       div.appendChild(h3);
  //       div.appendChild(p);
  //       div.appendChild(p2);
  //       div.appendChild(p3);
  //       div.appendChild(button);

         
  //       let img = document.createElement('img');

  //       img.setAttribute('src', `images/${towns.photo}`);
  //       img.setAttribute('alt', `${towns.name}`);
  //       img.setAttribute('loading', 'lazy');



  //       section.appendChild(div);
  //       section.appendChild(img);

  //       cards.append(section);
  //   });
  //  });