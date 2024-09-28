// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");

// Create the description input element
const descriptionInput = document.createElement("input");
descriptionInput.setAttribute("type", "text");
descriptionInput.setAttribute("id", "description");
descriptionInput.setAttribute("placeholder", "Enter fruit details");

// Insert the description input before the submit button
const submitButton = form.querySelector("button");
form.insertBefore(descriptionInput, submitButton);

// Show the fruit description in italics on the next line
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fruitName = document.getElementById("fruit-to-add").value;
    const fruitDescription = descriptionInput.value;

    // Ensure both fruit name and description are provided
    if (fruitName === "" || fruitDescription === "") {
        return; // Exit if validation fails, without alert
    }

    const listItem = document.createElement("li");
    listItem.className = "fruit";
    listItem.innerHTML = `
        ${fruitName}
        <p style="font-style: italic;">${fruitDescription}</p>
        <button class="delete-btn">x</button>
    `;
    document.querySelector(".fruits").appendChild(listItem);
    
    // Clear input fields
    document.getElementById("fruit-to-add").value = "";
    descriptionInput.value = "";
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event) {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        const currentDescriptionText = fruitItems[i].querySelector('p').textContent.toLowerCase();

        // Check if the entered text matches either the fruit name or description
        if (currentFruitText.indexOf(textEntered) === -1 && currentDescriptionText.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none"; // Hide the item
        } else {
            fruitItems[i].style.display = "flex"; // Show the item
        }
    }
});
