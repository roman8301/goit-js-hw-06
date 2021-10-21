'use strict';

const valueEl = document.querySelector('#value');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]',
);
let counterValue = 0;

const subtraction = function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const addition = function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementButton.addEventListener('click', subtraction);

incrementButton.addEventListener('click', addition);
