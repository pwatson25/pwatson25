  
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&exclude=hourly,minutely&units=imperial&APPID=98cbc04c44e9fc2905a70710f2643e4e')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    let temp = jsObject.current.temp;
    let minTemp = jsObject.daily[0].temp.min;
    let maxTemp = jsObject.daily[0].temp.max;

    document.getElementById('condition').textContent = jsObject.current.weather[0].main;
    document.getElementById('temp-min').textContent = Math.round(minTemp);
    document.getElementById('temp-max').textContent = Math.round(maxTemp);
    document.getElementById('temp-current').textContent = Math.round(temp);

        
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var data = jsObject.daily;
        var dayOfWeek = document.getElementsByClassName("forecast-day");
        var weatherIcon = document.getElementsByClassName("weatherIcon");
        var tempMax = document.getElementsByClassName("forecast-max");
        var tempMin = document.getElementsByClassName("forecast-min");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt);
            dayOfWeek[i].textContent = weekday[d.getDay()];
            const imagesrc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
            const description = data[i].weather[0].description;
            
            weatherIcon[i].setAttribute('src', imagesrc);
            weatherIcon[i].setAttribute('alt', description);

            tempMax[i].innerHTML = Math.round(data[i].temp.max) + " &#176;F";
            tempMin[i].innerHTML = Math.round(data[i].temp.min) + " &#176;F";

        }

    });




