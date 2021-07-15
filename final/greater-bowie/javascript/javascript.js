const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 468) mainnav.classList.remove('responsive')};

const thisYear = new Date();
let year = thisYear.getFullYear();
document.getElementById("currentYear").textContent = year;

const lastModDate = new Date(document.lastModified);
let strLMD = + lastModDate.getMonth()+1 + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("lastUpdate").textContent = strLMD;