/*
const listItems=document.getElementsByTagName('li');

listItems[2].style.color='pink';

for (let i=0; i<listItems.length; i++)
{
    listItems[i].style.fontStyle='italic';
}

const fruit=document.getElementsByClassName('fruit');
for (let i=0; i<fruit.length; i++)
    {
        fruit[i].style.fontWeight='bold';
    }




// QuerySelector is used to grab only single element

const mainHeading=document.querySelector('#main-heading');  // in querySelector we should use # before the ID
mainHeading.style.textAlign='center';

const fruits=document.querySelector('.fruits'); // in case of elements with clasa we use " . ", i.e. we append '.' 
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px';

//const fruitItems=document.querySelector('.fruit');
//fruitItems.style.backgroundColor='white';

//const fruitItems1=document.querySelector('.fruit:last-child');
//fruitItems1.style.backgroundColor='white';

//const fruitItems2=document.querySelector('.fruit:nth-child(2)');
//fruitItems2.style.backgroundColor='yellow';


// QuerySelectorAll is used to grab all the elements with the same class / tag.

const fruitItems=document.querySelectorAll('.fruit');
for (let i=0; i<fruitItems.length;i++)
{
    fruitItems[i].style.backgroundColor='white';
    fruitItems[i].style.padding='10px';
    fruitItems[i].style.margin='10px';
    fruitItems[i].style.borderRadius='5px';
}

const oddFruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0; i<oddFruitItems.length;i++)
{
    oddFruitItems[i].style.backgroundColor='lightgray   ';
}



// -------------->>> Question No. 7  <<<------------


//createElement
const para=document.createElement('p');


//createTextNode
const paraText=document.createTextNode('Total Fruits: 4');


//appendChild
para.appendChild(paraText);
//console.log(para)
const divs=document.getElementsByTagName('div');
const secondDiv=divs[1];
//secondDiv.appendChild(para);


// insertBefore  -- for this we need to decide the place where we want to insert it
const fruits=document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);  //to print output at the top
const basketHeading=document.getElementById('basket-heading');
secondDiv.insertBefore(para,basketHeading);  // to print before Fruits in basket heading


//setAttribute, className, id
para.className='fruitCount';
para.id='fruitsTotal';
para.setAttribute('title','fruitsTotal');
console.log(para);



//  ----->> DOM Relations  <<-----

const ul=document.querySelector('.fruits');


// parent  ====>> method used is parentElement
//ul.parentElement.parentElement.style.backgroundColor='pink'; 

//children ===>>> method used is children (returns the HTML Collection and can grab the element same as arrays i.e. using index no.)
   //  for first child ---->>> method used is firstElementChild
   //  fro last child  ---->>> method used is lastElementChild
ul.children[0].style.backgroundColor='pink'; 
ul.lastElementChild.style.backgroundColor='pink';  // to select last child

//sibling
ul.nextElementSibling.style.backgroundColor='pink'; // for next Sibling

ul.previousElementSibling.style.backgroundColor='pink'; // for previous sibling

*/

//================================================================================================//

//    -------------->>>> Question No. 10  <<<<-----------------------

const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
    event.preventDefault();
    // selected the input element where fruit name is entered
    const fruitToAdd=document.getElementById('fruit-to-add');

    // created the li element

    const newLi=document.createElement('li');
    
    //const newLiText=document.createTextNode(fruitToAdd.value);
    //newLi.appendChild(newLiText);
    //newLi.className='fruit';

    // created a delete button to be added inside li (sub part of creating li element)

    //const deleteBtn=document.createElement('button');
    //const deleteBtnText=document.createTextNode('x');
    //deleteBtn.appendChild(deleteBtnText);
    //deleteBtn.className='delete-btn';
    //newLi.appendChild(deleteBtn);
   

    // adding li as the last element of unordered list
    fruits.appendChild(newLi);
    


//  Short trick that we can do the entire above thing in one single line 
    newLi.innerHTML=fruitToAdd.value +'<button class="delete-btn">x</button>';
    
})

fruits.addEventListener('click', function(event){
    if (event.target.classList.contains('delete-btn')){ 
        const fruitToDelete=event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }

})
    
