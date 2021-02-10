"use strict";

window.addEventListener("load", startCount);

let counter = 0;
let array = [];

function startCount() {
  array.unshift(counter);
  console.log(array);
  array = array.slice(0, 9);
  counter++;
  setTimeout(startCount, 1000);
}
