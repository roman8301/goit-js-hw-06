'use strict';

const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
textEl.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', () => {
  textEl.style.fontSize = fontSizeControl.value + 'px';
});
