
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

    localStorage.setItem(email,JSON.stringify(user_Details));

    const listItems = document.createElement('li');
    listItems.textContent = `${username} - ${email} - ${phone}`;

    const delete_Btn = document.createElement('button');
    delete_Btn.textContent = 'Delete';

    delete_Btn.onclick = function(){
        listItems.remove();
        localStorage.removeItem(email);
    };

    const edit_Btn = document.createElement('button');
    edit_Btn.textContent = 'Edit';

    edit_Btn.onclick = function() {

      const old_User = JSON.parse(localStorage.getItem(email));
      if(old_User){
        document.getElementById('username').value = old_User.username;
        document.getElementById('email').value = old_User.email;
        document.getElementById('phone').value = old_User.phone;
        
        localStorage.removeItem(email);
        listItems.remove();
        }
    }

    listItems.appendChild(delete_Btn);
    listItems.appendChild(edit_Btn);

    document.querySelector('ul').appendChild(listItems); 
    
    //event.target.username.value = '';
    //event.target.email.value = '';
    //event.target.phone.value = '';
}

module.exports = handleFormSubmit;