'use strict';

const colorValue = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(event) {
  colorValue.textContent = getRandomHexColor();

  if (event.target.classList.contains('change-color')) {
    return (document.body.style.background = getRandomHexColor());
  }
  return;
}
