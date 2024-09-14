// Write your code below:
const headerDiv = document.getElementById('header');


const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic'; 


headerDiv.appendChild(subHeading);


const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];

const fruitsTotal = document.createElement('p');
fruitsTotal.id = 'fruits-total';
fruitsTotal.textContent = 'Total fruits: 4';


const ul = secondDiv.querySelector('ul');
secondDiv.insertBefore(fruitsTotal, ul);