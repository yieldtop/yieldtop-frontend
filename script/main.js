// табы dashboard и wallet
$('.js-tab-trigger').click(function() {
  let id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');

$('.js-tab-trigger.active').removeClass('active');
$(this).addClass('active');

$('.js-tab-content.active').removeClass('active');
  content.addClass('active');
});

$('.js-tab-trigger').click(function() {
  let id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
});

// бургер меню
$(document).ready(function() {
  $('.header__burger').click(function(e) {
    $('.header__burger,.header__burger-menu').toggleClass('active');
  });
  $('.header__list').click(function(e) {
      $('.header__burger,.header__burger-menu').removeClass('active');
  });
});

// смена темы оформления
theme.onclick = function() {
  document.body.classList.toggle('dark-mode');
}