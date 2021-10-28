'use strict';

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onSubmittingAForm);

function onSubmittingAForm(evt) {
  evt.preventDefault();
  if (
    evt.currentTarget.elements.password.value === '' ||
    evt.currentTarget.elements.email.value === ''
  ) {
    alert('All form fields must be completed!');
  } else {
    const dataLoginForm = {
      email: evt.currentTarget.elements.email.value,
      password: evt.currentTarget.elements.password.value,
    };
    console.log(dataLoginForm);
    evt.currentTarget.reset();
  }
}
