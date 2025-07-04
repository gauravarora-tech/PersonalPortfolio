const form = document.querySelector('.form'); 4
const submitButton = document.querySelector('.form-btn');
console.log('Form element:', submitButton);

const validateForm = (e) => {
    e.preventDefault();
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const subj = document.getElementById('subj');
    const userMessage = document.getElementById('userMessage');

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const isValid = true;

    const nameRegix = /^[a-zA-Z\s]+$/;
    const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fname.value || !nameRegix.test(fname.value)) {
        nameError.textContent = 'Please enter a valid name.';
        isValid = false;
    }

    if (!email.value || !emailRegix.test(email.value)) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
    }

    if (!subj.value) {
        subjectError.textContent = 'Please enter a subject.';
        isValid = false;
    }



    if (isValid) {
        const formData = {
            name: fname.value,
            email: email.value,
            subject: subj.value,
        };
        let existingData = JSON.parse(localStorage.getItem('contactFormData')) || [];

        existingData.push(formData);

        // Store it in localStorage
        localStorage.setItem('contactFormData', JSON.stringify(existingData));

        // Optional: show a message or clear the form
        alert("Form submitted successfully and saved locally!");
        console.log('Form submitted successfully');
    }
}
