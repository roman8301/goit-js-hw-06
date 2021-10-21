'use strict';

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', e => {
  outputRef.textContent = e.target.value;

  e.target.value
    ? (outputRef.textContent = e.target.value)
    : (outputRef.textContent = outputRef);
});
