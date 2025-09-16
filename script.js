// 🎉 Part 1: JavaScript Event Handling and Interactive Elements

// Get the button and the message element
const toggleMessageBtn = document.getElementById('toggleMessageBtn');
const message = document.getElementById('message');

// Add a 'click' event listener to the button
toggleMessageBtn.addEventListener('click', function() {
    // Toggle the 'hidden' class on the message element
    // This will show the message if it's hidden, and hide it if it's visible
    message.classList.toggle('hidden');
});

// ---

// 🎮 Part 2: Building Interactive Elements

// 1. Light/Dark Mode Toggle
const modeToggleBtn = document.getElementById('modeToggleBtn');
const body = document.body;

// Add a click event listener to the mode toggle button
modeToggleBtn.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the <body> element
    body.classList.toggle('dark-mode');
});

// 2. Collapsible FAQ Section
// Get all buttons with the class 'faq-question'
const faqButtons = document.querySelectorAll('.faq-question');

// Loop through each button and add a click event listener
faqButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the next sibling element, which is the answer div
        const answer = this.nextElementSibling;
        
        // Toggle the 'show' class on the answer
        answer.classList.toggle('show');
    });
});

// ---

// 📋✅ Part 3: Form Validation with JavaScript

// Get the form and all the input and error message elements
const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

// Add a 'submit' event listener to the form
registrationForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Reset previous error messages and success message
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    // Initialize a flag to check if the form is valid
    let isValid = true;

    // Validate the Name field
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate the Email field using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate the Password field
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // If the form is valid, show a success message
    if (isValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        // In a real application, you would send the data to a server here
        registrationForm.reset(); // Clear the form fields
    }
});