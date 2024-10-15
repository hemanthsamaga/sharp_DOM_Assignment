<<<<<<< HEAD
// Write your code below:
function  handleFormSubmit(event){
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
  
  localStorage.setItem('User Details', JSON.stringify(userDetails));  
   
  }
  
  document.onsubmit = handleFormSubmit;
=======
// Write your code below:
function  handleFormSubmit(event){
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
  
  localStorage.setItem('User Details', JSON.stringify(userDetails));  
   
  }
  
  document.onsubmit = handleFormSubmit;
>>>>>>> b9337f3d8c3546a6f797c02afb447aceba86d3b2
  module.exports=handleFormSubmit; 