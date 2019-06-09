'use strict'
let timeOut;
function goUp() {
  let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if(top>0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout('goUp()', 50);
  }
  else clearTimeout(timeOut);
}