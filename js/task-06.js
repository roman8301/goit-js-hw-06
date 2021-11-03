'use strict';

const input = document.querySelector('input#validation-input');
input.addEventListener('blur', validationInput);

function validationInput() {
  if (input.value.length === Number(input.dataset.length)) {
    return toggleClass('valid', 'invalid');
  }
  return toggleClass('invalid', 'valid');
}

function toggleClass(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}
