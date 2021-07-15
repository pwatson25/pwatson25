const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];

    const name = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven');
    console.log(name);

    if (location.pathname=="/lesson11/preston.html") {
      let events = name[2].events;
      for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.events').appendChild(event);
        }
      } else if (location.pathname=="/lesson11/Soda%20Springs.html") {
      let events = name[0].events;
      for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.events').appendChild(event);
        }
      } else if (location.pathname=="/lesson11/Fish%20Haven.html") {
      let events = name[1].events;
      for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.events').appendChild(event);
      }
    }
    }); 