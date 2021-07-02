fetch('https://some-random-api.ml/animal/panda')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
        let panda = jsObject.fact;
    
        document.getElementById('panda').textContent = (panda);

        const imagesrc = jsObject.image;
        document.getElementById('pandaPhoto').setAttribute('src', imagesrc);
        document.getElementById('pandaPhoto').setAttribute('alt', "Panda Photo");
    
    });
fetch('https://some-random-api.ml/animal/racoon')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
        let racoon = jsObject.fact;
    
        document.getElementById('racoonFact').textContent = (racoon);

        const src = jsObject.image;
        document.getElementById('racoonPhoto').setAttribute('src', src);
        document.getElementById('racoonPhoto').setAttribute('alt', "Racoon Photo");
    
    });