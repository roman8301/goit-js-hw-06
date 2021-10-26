'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onFontSizeChange = function (rangeOfChange) {
  const fontSizeChange = rangeOfChange.currentTarget.value + 'px';
  textEl.style.fontSize = fontSizeChange;
};

fontSizeControl.addEventListener('input', onFontSizeChange);
