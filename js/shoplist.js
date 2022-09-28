'use strict';
{
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


  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const option = {
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(callback, option);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });



}
