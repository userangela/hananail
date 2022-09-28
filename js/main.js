'use strict';

{

// heroエリア

  function play() {
    setTimeout(() =>{
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length -1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();


  // footerのpc-menuエリア
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const main = document.querySelector('.main');
  const close = document.getElementById('close');
  const pc_menu = document.querySelector('.pc_menu');


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    main.classList.add('hide');
    pc_menu.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    main.classList.remove('hide');
    pc_menu.classList.remove('hide');
  });


  // productsのmodalエリア

  $('.hoge-item').click(function () {
    const src = $(this).find('img').attr('src');
    // const cap = $(this).attr('alt');
    const capTtl = $(this).find('.ttl').text();
    const capMoney = $(this).find('.txt').text();

    $('.modal-block').fadeIn(300);
    $('.modal-block').css('display', 'flex');

    $('#popup').attr('src', src);
    $('.caption-ttl').text(capTtl);
    $('.caption-money').text(capMoney);
  });
  $('.img-section >span').click(function () {
    $('.modal-block').css('display', 'none');
    });
  
  

  // productsのもっと見るボタンエリア

  $(function () {
    const listItems = $('.js-accordion li').length;
    const windowWidth = $(window).width();

    $('.js-accordion').each(function () {
      let num = 6,
        closeNum = num - 1;
      $(this).find('.js-btn-more').show();
      $(this).find('.js-btn-close').hide();
      $(this)
        .find('li:not(:lt(' + num + '))')
        .hide();
      $('.js-btn-more').click(function () {
        if(windowWidth <= 600){
           num += 2;
        }else{
          num += 3;
        }
        $(this)
          .parent()
          .find('li:lt(' + num + ')')
          .slideDown();
        if (listItems <= num) {
          $('.js-btn-more').hide();
          $('.js-btn-close').show();
          $('.js-btn-close').click(function () {
            $(this)
              .parent()
              .find('li:gt(' + closeNum + ')')
              .slideUp();
            $(this).hide();
            $('.js-btn-more').show();
          });
        }
      });
    });
  });

}