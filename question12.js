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
//module.exports=handleFormSubmit;