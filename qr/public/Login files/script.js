$(document).ready(function () {
  $('.tab a').click(function () {

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    var target = $(this).attr('href');
    $('.content > div').not(target).hide();
    $(target).fadeIn(600);
  });
});
