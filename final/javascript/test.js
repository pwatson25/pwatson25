fetch('/companies.json')
    .then(res => res.json())
    .then((data) => {
        console.log(data);

        // let title = jsObject.title;
        // let explanation = jsObject.explanation;

        // document.getElementById('title').textContent = (title);
        // document.getElementById('explanation').textContent = (explanation);

        // const imagesrc = jsObject.url;
        // const desc = jsObject.title;
        // document.getElementById('photo').setAttribute('src', imagesrc);
        // document.getElementById('photo').setAttribute('alt', desc);

    });
