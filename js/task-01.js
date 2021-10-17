'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const list = document.querySelectorAll('#categories>li');
list.forEach(el => {
  console.log(`category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`);
});
