function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');
let size = 30;

createButton.addEventListener('click', getInputValue);
destroyButton.addEventListener('click', destroyBoxes);

function getInputValue() {
  createBoxes(input.value);
  input.value = '';
}

function createBoxes(amount) {
  const divElements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    divElements.push(div);
    size += 10;
  }
  container.append(...divElements);
}

function destroyBoxes() {
  container.innerHTML = '';
  size = 30;
}
