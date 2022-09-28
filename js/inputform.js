'use strict';

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const main = document.querySelector('.main');
const close = document.getElementById('close');
const pc_menu = document.querySelector('.pc_menu');


open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
  main.classList.add('hide');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
  main.classList.remove('hide');
});

function keydown(e){
  if(e.keyCode === 13){
    var obj = document.activeElement;
    obj.nextElementSibling.focus();
  }
}
 
window.onkeydown = keydown;
