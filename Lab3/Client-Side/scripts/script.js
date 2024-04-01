document.addEventListener('DOMContentLoaded', function() {

    const nameInput = document.getElementsByName('name')[0];

    nameInput.addEventListener('input', function() {
        const name = this.value.trim();
        if (name.length <= 3) {
            nameInput.classList.add('is-invalid');
            nameInput.classList.remove('is-valid');
        } else {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
        }
    });

    const mobileInput = document.getElementsByName('mobile')[0];

    mobileInput.addEventListener('input', function() {
        const mobile = this.value;
        if (mobile.length !== 11 || isNaN(this.value)) {
            mobileInput.classList.remove('is-valid');
            mobileInput.classList.add('is-invalid');
        } else {
            mobileInput.classList.remove('is-invalid');
            mobileInput.classList.add('is-valid');
        }
    });

    const addressInput = document.getElementsByName('address')[0];

    addressInput.addEventListener('input', function() {
        const address = this.value;
        if (address.length == 0 ) {
            addressInput.classList.remove('is-valid');
            addressInput.classList.add('is-invalid');
        } else {
            addressInput.classList.remove('is-invalid');
            addressInput.classList.add('is-valid');
        }
    });

    const emailInput = document.getElementsByName('email')[0];

    emailInput.addEventListener('input', function() {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }
    });

    const form = document.querySelector('form');
    const submit = document.getElementById('submit')
    form.addEventListener('submit', function(event) {
        const invalidInputs = form.querySelectorAll('.is-invalid');

        if (invalidInputs.length > 0) {
            // Prevent form submission
            event.preventDefault();
            submit.classList.add('is-invalid');
            console.log('Form submission prevented due to invalid input(s).');
        } else {
            submit.classList.remove('is-invalid');
        }
    });
    
});