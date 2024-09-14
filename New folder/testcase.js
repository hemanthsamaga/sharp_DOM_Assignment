// Add the Edit Button:
function addEditButton(){

    const fruitItems=document.querySelectorAll('.fruit');
  
    fruitItems.forEach(item=>{
  
      if(!item.querySelector('.edit-btn'))
        {
          const editBtn=document.createElement('button');
          editBtn.textContent='Edit';
          editBtn.className='edit-btn';
  
          const deleteBtn=item.querySelector('.delete-btn');
  
          item.insertBefore(editBtn,deleteBtn.nextSibling);
        }
    })
  }
  
  // Implement the code as in video but with one extra 'Edit' button in 'li'
  
  const form=document.querySelector('form');
  const fruits=document.querySelector('.fruits');
  
  form.addEventListener('submit', function(event){
      event.preventDefault();
  
    const fruitToAdd=document.getElementById('fruit-to-add');
    const newLi=document.createElement('li');
    newLi.className='fruit';
    fruits.appendChild(newLi);
  
    newLi.innerHTML=fruitToAdd.value +'<button class="delete-btn">x</button>';
    fruitToAdd.value='';
  
    addEditButton();
  })
  fruits.addEventListener('click', function(event){
      if (event.target.classList.contains('delete-btn')){
          const fruitToDelete=event.target.parentElement;
          fruits.removeChild(fruitToDelete);
      }
  })
  addEditButton();