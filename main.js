// Табы
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

// смена темы оформления
theme.onclick = function() {
  document.body.classList.toggle('dark-mode');
}