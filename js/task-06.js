'use strict';

const input = document.querySelector('input#validation-input');

const validationInput = input.addEventListener('blur', event => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
