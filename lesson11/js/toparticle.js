const doURL = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=5';

fetch(doURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const articles = document.querySelector('.articles');


        jsonObject.forEach(entry => {
            let section = document.createElement('section');

            let div = document.createElement('div');
            div.setAttribute('id', 'data');

            let title = document.createElement('h2');
            let newsSite = document.createElement('h3')
            let summary = document.createElement('p');
            let button = document.createElement('button');

            title.textContent = `${entry.title}`;
            newsSite.textContent = `News Source: ${entry.newsSite}`;
            summary.textContent = `${entry.summary}`;
            button.innerHTML = "Read More...";
            button.setAttribute('onclick', `location.href="${entry.url}"`);
            button.setAttribute('type', 'button');


            div.appendChild(title);
            div.appendChild(newsSite);
            div.appendChild(summary);
            div.appendChild(button);


            let img = document.createElement('img');

            img.setAttribute('src', entry.imageUrl);
            img.setAttribute('alt', `${entry.id}`);
            img.setAttribute('loading', 'lazy');



            section.appendChild(div);
            section.appendChild(img);

            articles.append(section);
        });
    });