  
fetch('https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('temp-min').textContent = jsObject.main.temp_min;
    document.getElementById('temp-max').textContent = jsObject.main.temp_max;
    document.getElementById('condition').textContent = jsObject.weather[0].main;


    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
});