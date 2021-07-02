fetch('https://some-random-api.ml/animal/panda')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
        let fact = jsObject.fact;
    
        document.getElementById('fact').textContent = (fact);

        const imagesrc = jsObject.image;
        document.getElementById('photo').setAttribute('src', imagesrc);
        document.getElementById('photo').setAttribute('alt', "Panda Photo");
    
    });