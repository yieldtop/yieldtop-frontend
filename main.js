// переключение табов
$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');

$('.js-tab-trigger.active').removeClass('active');
$(this).addClass('active');

$('.js-tab-content.active').removeClass('active');
  content.addClass('active');
});

$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
});


// переключение темы оформления
theme.onclick = function() {
  document.body.classList.toggle('dark-mode');
}