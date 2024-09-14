// Write your code below:
const mainHeading=document.getElementById('main-heading');
mainHeading.textContent='Fruit World';
mainHeading.style.color='orange';

const header=document.getElementById('header');
header.style.backgroundColor='green';
header.style.borderBottom='3px solid orange';

const basketHeading=document.getElementById('basket-heading');
basketHeading.style.color='green';

const thanks=document.getElementById('thanks');
thanks.innerHTML='<p>Please visit us again</p>';

const fruit = document.getElementsByClassName('fruit');
console.log(fruit[1]);
fruit[1].textContent='Pineapple'; 
fruit[1].style.fontWeight='bold';

for (let i=0; i<fruit.length; i++)
{
    fruit[i].style.backgroundColor='gray';
}
fruit[2].style.color='red';