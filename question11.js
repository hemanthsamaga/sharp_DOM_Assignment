function addDescriptionInput() {
    const form = document.querySelector('form');

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('placeholder', 'Enter fruit description');

    const button = form.querySelector('button');
    form.insertBefore(descriptionInput, button);
}

// Call the function to add the description input
addDescriptionInput();

function addFruit(event) {
    event.preventDefault();

    const fruitInput = document.getElementById('fruit-to-add');
    const descriptionInput = document.getElementById('description');

    const fruitName = fruitInput.value.trim();
    const fruitDescription = descriptionInput.value.trim();

    // Exit if fields are empty
    if (!fruitName || !fruitDescription) {
        return; // Simply exit if fields are empty
    }

    const fruitsList = document.querySelector('.fruits');

    // Create a new list item for the fruit
    const fruitItem = document.createElement('li');
    fruitItem.classList.add('fruit');
    fruitItem.innerHTML = `${fruitName}<button class="delete-btn">x</button>`;

    // Create a paragraph for the description
    const descriptionPara = document.createElement('p');
    descriptionPara.classList.add('description'); // Use CSS class for styling
    descriptionPara.style.fontStyle = 'italic';
    descriptionPara.textContent = fruitDescription;

    // Append the description paragraph to the fruit item
    fruitItem.appendChild(descriptionPara);

    // Add the fruit item to the list
    fruitsList.appendChild(fruitItem);

    // Clear the input fields
    fruitInput.value = '';
    descriptionInput.value = '';
}

// Attach the addFruit function to the form submission
const form = document.querySelector('form');
form.addEventListener('submit', addFruit);

// Function to delete a fruit item
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});

// Filter functionality
const filter = document.getElementById('filter');
if (filter) { // Check if filter exists
    filter.addEventListener('keyup', function(event) {
        const textEntered = event.target.value.toLowerCase();
        const fruitItems = document.getElementsByClassName('fruit');

        // Loop through each fruit item to check visibility based on filter
        for (let i = 0; i < fruitItems.length; i++) {
            const currentFruitText = fruitItems[i].childNodes[0].textContent.toLowerCase(); // Fruit name
            const descriptionText = fruitItems[i].querySelector('p.description')
                ? fruitItems[i].querySelector('p.description').textContent.toLowerCase()
                : ''; // Description with fallback

            // Check if the current fruit name or its description matches the filter text
            if (
                currentFruitText.indexOf(textEntered) === -1 &&
                descriptionText.indexOf(textEntered) === -1
            ) {
                fruitItems[i].style.display = "none"; // Hide non-matching items
            } else {
                fruitItems[i].style.display = "flex"; // Show matching items
            }
        }
    });
}