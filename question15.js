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
    }

    listItems.appendChild(delete_Btn);
    document.getElementById('listOfItems').appendChild(listItems); 
}

module.exports = handleFormSubmit;