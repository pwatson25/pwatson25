const requestURL = "https://pwatson25.github.io/final/greater-bowie/data/companies.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    console.log(business);

    const company = document.querySelector('.company');

    const top3 = business.filter(x => x.companyName == 'Sky Zone Trampoline Park' || x.companyName == 'Patuxent Nursery' || x.companyName == 'SMaRT Fitness');
    console.log(top3)

    top3.forEach(business => {
      let back = document.createElement('div');
      back.setAttribute('class', 'back')

      let top = document.createElement('div');
      top.setAttribute('class', 'top');

      let info = document.createElement('div');
      info.setAttribute('class', 'info');

      let h2 = document.createElement('h2')
      let button = document.createElement('button');

      h2.textContent = `${business.companyName}`;
      button.innerHTML = "Visit...";
      button.setAttribute('onclick', `location.href="${business.url}"`);
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'visit');

      info.appendChild(h2);
      info.appendChild(button);

      top.appendChild(info);
      back.appendChild(top);


      let webicon = document.createElement('div');
      webicon.setAttribute('class', 'webicon');

      let div = document.createElement('div');

      let contact = document.createElement('div');
      contact.setAttribute('class', 'phone');

      let phone = document.createElement('img');

      phone.setAttribute('src', './images/call.svg');
      phone.setAttribute('class', 'icon')
      phone.setAttribute('alt', `phone icon`);
      phone.setAttribute('loading', 'lazy');
    
      let phoneNumber = document.createElement('div');
      let number = document. createElement('p');

      number.textContent = `${business.phoneNumber}`;
      
      phoneNumber.appendChild(number);
      contact.appendChild(phoneNumber);
      contact.appendChild(phone);
      div.appendChild(contact);

      let hours = document.createElement('div');
      hours.setAttribute('class', 'hours');

      let div2 = document.createElement('div');      

      let clock = document.createElement('img');

      clock.setAttribute('src', './images/clock.svg');
      clock.setAttribute('class', 'icon')
      clock.setAttribute('alt', `phone icon`);
      clock.setAttribute('loading', 'lazy');
    
      let open = document.createElement('div');
      let monFri = document.createElement('p');
      let sat = document.createElement('p');
      let sun = document.createElement('p');

      monFri.textContent = `Mon - Fri: ${business.hours.monFri}`;
      sat.textContent = `Sat: ${business.hours.sat}`;
      sun.textContent = `Sun: ${business.hours.sun}`;
      
      open.appendChild(monFri);
      open.appendChild(sat);
      open.appendChild(sun);
      hours.appendChild(open);
      hours.appendChild(clock);
      div2.appendChild(hours);

      //new

      let location = document.createElement('div');
      location.setAttribute('class', 'location');

      let div3 = document.createElement('div');      

      let pin = document.createElement('img');

      pin.setAttribute('src', './images/pin.svg');
      pin.setAttribute('class', 'icon')
      pin.setAttribute('alt', `phone icon`);
      pin.setAttribute('loading', 'lazy');
    
      let address = document.createElement('div');
      let streetAddress = document.createElement('p');

      streetAddress.textContent = `1234 Big Drive`;
      

      address.appendChild(streetAddress);
      location.appendChild(address);
      location.appendChild(pin);
      div3.appendChild(location);

      //end

      webicon.appendChild(contact);
      webicon.appendChild(hours);
      webicon.appendChild(location);

      back.appendChild(webicon);
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