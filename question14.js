// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const user_Details = {
  
      username: username,
      email: email,
      phone: phone
    }
  
    localStorage.setItem(email, JSON.stringify(user_Details));
    const li = document.createElement('li');
  
    li.textContent = `${username} - ${email} - ${phone}`;
    document.getElementById('usersList').appendChild(li);
  }
  
  document.onSubmit = handleFormSubmit;
  module.exports = handleFormSubmit;