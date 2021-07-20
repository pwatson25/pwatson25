const requestURL = "https://pwatson25.github.io/final/greater-bowie/data/companies.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const buisness = jsonObject['buisness'];
    const cards = document.querySelector('.cards');

    const top3 = buisness.filter(x => x.companyName == 'National Capital Radio and Televison Museum' || x.companyName == 'Patuxent Nursery' || x.companyName == 'SMaRT Fitness');

    top3.forEach(buisness => {
      let section = document.createElement('section');

      let div = document.createElement('div');
      div.setAttribute('id', 'data');

      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3')
      let p = document.createElement('p');
      let p2 = document.createElement('p');
      let button = document.createElement('button');

      h2.textContent = `${buisness.companyName}`;
      h3.textContent = `${buisness.address.streetAddress}`;
      p.innerHTML = `<span style="font-weight:bold">Hours:</span> <br/><br/> Mon-Fri: ${buisness.hours.monFri}`;
      p2.textContent = `Phone Number: ${buisness.phoneNumber}`;
      button.innerHTML = "Visit...";
      button.setAttribute('onclick', `location.href="${buisness.url}"`);
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'visit');


      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(button);

       
      // let img = document.createElement('img');

      // img.setAttribute('src', `https://storage.googleapis.com/pwatson25_photos/${towns.photo}`);
      // img.setAttribute('alt', `${towns.name}`);
      // img.setAttribute('loading', 'lazy');



      section.appendChild(div);
      // section.appendChild(img);

      cards.append(section);
  });
 });