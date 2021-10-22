'use strict';

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const outputTextDefault = outputEl.textContent;

const onInputChange = function (event) {
  if (event.currentTarget.value === '') {
    return (outputEl.textContent = outputTextDefault);
  }
  return (outputEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', onInputChange);
