$(document).ready(function () {
  $('.tab a').click(function () {

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    var target = $(this).attr('href');
    $('.content > div').not(target).hide();
    $(target).fadeIn(600);
  });

  /*$('.button-enter').click(function () {
    //$('#loginp').hide();
    $('body').css("background", "url(/images/b12.jpg)"); // removed no-repeat so that all text can be seen 
    //$('#homep').show();
  });*/

  /*$("#menu").click(function(){
		  $(".sidenav li #list").slideUp();
		  $("li").removeClass("on");
		  $("li").addClass("off");
		  
		  if($(this).next().is(':visible')==false){
			   $(this).next().slideDown();
			   $(this).parent.removeClass("off");
			   $(this).parent.addClass("on");
		   }
	 });*/
});

