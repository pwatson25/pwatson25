const requestURL = 'https://api.nasa.gov/planetary/apod?api_key=kJMweCft7Sek5sPPm4bQ68PqvHPZACO8gMoKXTJu&count=6';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const photos = jsonObject;
    const cards = document.querySelector('.cards');

    photos.forEach(image => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let explanation = document.createElement('p');
        let pimg = document.createElement('img');

        title.textContent = `${image.title}`;
        explanation.textContent = `${image.explanation}`;
        pimg.setAttribute('src', image.url);
        pimg.setAttribute('alt', `Copywrite: ${image.copywrite}`);
        pimg.setAttribute('loading','lazy');
        card.append(title);
        card.append(explanation);
        card.append(pimg);
        cards.append(card);
    });
  });

  