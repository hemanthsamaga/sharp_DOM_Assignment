// Write your code below:
function handleFormSubmit(event){
    
    event.preventDefault();

   const name = event.target.username.value;
   const email = event.target.email.value;
   const phonenumber = event.target.phone.value;

   
   localStorage.setItem('Username', name);
   localStorage.setItem('Email', email);
   localStorage.setItem('Phone',phonenumber);
}
document.getElementById('userForm').onsubmit = handleFormSubmit;
<<<<<<< HEAD
module.exports=handleFormSubmit;
=======
module.exports=handleFormSubmit;
>>>>>>> b9337f3d8c3546a6f797c02afb447aceba86d3b2
