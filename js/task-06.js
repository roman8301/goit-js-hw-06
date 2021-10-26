'use strict';

//validation - input;

const input = document.querySelector('#validation-input');
const inputDataLength = input.getAttribute('data-length');

function onKeypressInput(valid) {
  if (input.textContent.length === inputDataLength) {
    return input.classList.add('#validation-input.valid');
  }
  return input.classList.add('#validation-input.invalid');
}

inputRef.addEventListener('keydown', onKeypressInput);

// function onKeypress(event) {
//   console.log(event.key);
// }

// function validationInput(event) {
//   console.log(inputRef);
// }

// inputRef.addEventListener('click', validationInput);
