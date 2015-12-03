$(document).ready(function($) {
  $('.menu-button').click(function() {
    if ($('.menu-button').children('div').hasClass('active')) {
      $('.menu-button').children('div').removeClass('active');
      $('.menu-button').children('div').addClass('reset');
    }
    else if($('.menu-button').children('div').hasClass('reset')) {
      $('.menu-button').children('div').removeClass('reset');
      $('.menu-button').children('div').addClass('active');
    }
    else {
      $('.menu-button').children('div').addClass('active');
    }
  });
});
