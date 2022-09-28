'use strict';

{

  function inViewCallback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }


  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });

  const targets = document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });




}