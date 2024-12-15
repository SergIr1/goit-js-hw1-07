const inputEL = document.querySelectorAll('input');
const labelEL = document.querySelectorAll('label');
const btnEL = document.querySelector('button');

inputEL.forEach(input => input.classList.add('js-login-form-input'));
// inputEL.classList.add('js-login-form-input');
labelEL.forEach(label => label.classList.add('js-login-form-label'));
// labelEL.classList.add('js-login-form-label');
btnEL.classList.add('js-login-form-btn');


const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    if (formEl.elements.email.value.trim() === "" || formEl.elements.password.value.trim() === "") {
        alert('All form fields must be filled in');
        return;
    }

    const formDate = {
        [formEl.elements.email.name]: formEl.elements.email.value.trim(),
        [formEl.elements.password.name]: formEl.elements.password.value.trim(),
    };

    console.log(formDate);
    
    formEl.reset();
});
