$(document).ready(function(){
	if($('#toTop').length) {
	  // click function for the scroll to top icon
	  $('#toTop').click( function () {
		//$('window, html').animate({scrollTop:0}, 500, 'easeOutCubic');
		$('html,body').animate({scrollTop: 0}, 800);
	  });

	  // hide scroll icon if content is at top already
	  if ($(window).scrollTop() === 0 && $("html").scrollTop() === 0) {
		$('#toTop').hide();
	  }

	  // update scroll icon if window is resized
	  $(window).resize(function () {
		if ($(window).scrollTop() === 0 && $("html").scrollTop() === 0) {
		  $('#toTop').hide();
		}
	  });

	  // update scroll icon when scrolling
	  $(window).scroll(function () {
		/*if ($(window).scrollTop() === 0 && $("html").scrollTop() === 0) {
		  $('#toTop').fadeOut(400);
		} else {
		  $('#toTop').fadeIn(400);
		}*/
		if ($(window).scrollTop() === 0 && $("html").scrollTop() === 0) {
		  $('#toTop').fadeOut(400);
		} else if ($(window).scrollTop() >550 || $("html").scrollTop() >550) {
		  $('#toTop').fadeIn(400);
		}
	  });
	} 
})