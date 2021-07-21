const requestURL = "https://pwatson25.github.io/final/greater-bowie/data/companies.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    console.log(business);
    
    const company = document.querySelector('.company');

    const top3 = business.filter(x => x.companyName == 'National Capital Radio and Televison Museum' || x.companyName == 'Patuxent Nursery' || x.companyName == 'SMaRT Fitness');
    console.log(top3)

    top3.forEach(business => {
      let back = document.createElement('div');
      back.setAttribute('class', 'back')

      let top = document.createElement('div');
      top.setAttribute('class', 'top');

      let info = document.createElement('div');
      info.setAttribute('class', 'info');

      let img = document.createElement('img');
      img.setAttribute('src', `https://storage.googleapis.com/pwatson25_photos/${towns.photo}`);
      img.setAttribute('alt', `${towns.name}`);
      img.setAttribute('loading', 'lazy');

      let h2 = document.createElement('h2')
      let button = document.createElement('button');

      h2.textContent = `${buisness.companyName}`;
      button.innerHTML = "Visit...";
      button.setAttribute('onclick', `location.href="${buisness.url}"`);
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'visit');

      info.appendChild(img);
      info.appendChild(h2);
      info.appendChild(button);

      info.appendChild(div);
      top.appendChild(div);

      // let webicon = document.createElement('div');
      // webicon.setAttribute('class', 'webicon');


      // let p2 = document.createElement('p');

      // h3.textContent = `${buisness.address.streetAddress}`;
      // p.innerHTML = `<span style="font-weight:bold">Hours:</span> <br/><br/> Mon-Fri: ${buisness.hours.monFri} <br/><br/> Sat: ${buisness.hours.sat} <br/><br/> Sun: ${buisness.hours.sun}`;
      // p2.textContent = `Phone Number: ${buisness.phoneNumber}`;
    
      // div.appendChild(h3);
      // div.appendChild(p);
      // div.appendChild(p2);

       

 

      company.append(back);
  });
 });