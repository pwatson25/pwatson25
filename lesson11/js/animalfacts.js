fetch('https://some-random-api.ml/animal/panda')
.then((response) => response.json())
.then((jsObject) => {
    
        let panda = jsObject.fact;
    
        document.getElementById('panda').textContent = (panda);

        const imagesrc = jsObject.image;
        document.getElementById('pandaPhoto').setAttribute('src', imagesrc);
        document.getElementById('pandaPhoto').setAttribute('alt', "Panda Photo");
        document.getElementById('pandaPhoto').setAttribute('loading', 'lazy');

    
    });
fetch('https://some-random-api.ml/animal/racoon')
.then((response) => response.json())
.then((jsObject) => {
    
        let racoon = jsObject.fact;
    
        document.getElementById('racoon').textContent = (racoon);

        const src = jsObject.image;
        document.getElementById('racoonPhoto').setAttribute('src', src);
        document.getElementById('racoonPhoto').setAttribute('alt', "Racoon Photo");
        document.getElementById('racoonPhoto').setAttribute('loading', 'lazy');

    
    });
    fetch('https://some-random-api.ml/animal/kangaroo')
.then((response) => response.json())
.then((jsObject) => {
    
        let kangaroo = jsObject.fact;
    
        document.getElementById('kangaroo').textContent = (kangaroo);

        const src = jsObject.image;
        document.getElementById('kangarooPhoto').setAttribute('src', src);
        document.getElementById('kangarooPhoto').setAttribute('alt', "Kangaroo Photo");
        document.getElementById('kangarooPhoto').setAttribute('loading', 'lazy');

    
    });
    fetch('https://some-random-api.ml/animal/koala')
.then((response) => response.json())
.then((jsObject) => {
    
        let koala = jsObject.fact;
    
        document.getElementById('koala').textContent = (koala);

        const src = jsObject.image;
        document.getElementById('koalaPhoto').setAttribute('src', src);
        document.getElementById('koalaPhoto').setAttribute('alt', "Koala Photo");
        document.getElementById('koalaPhoto').setAttribute('loading', 'lazy');

    
    });
    fetch('https://some-random-api.ml/animal/fox')
    .then((response) => response.json())
    .then((jsObject) => {
        
            let fox = jsObject.fact;
        
            document.getElementById('fox').textContent = (fox);
    
            const src = jsObject.image;
            document.getElementById('foxPhoto').setAttribute('src', src);
            document.getElementById('foxPhoto').setAttribute('alt', "Fox Photo");
            document.getElementById('foxPhoto').setAttribute('loading', 'lazy');

        
        });