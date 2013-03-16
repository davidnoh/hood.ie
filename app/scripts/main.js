(function($){
	
	// Top Link
	if ($(window).width() < 480 ) {
		$('.container > section').append('<a href="#page" class="toTop">top</a>');
	}
	
	// Smooth Scrolling
	$(window).load(function(){
	    $('#mainNav li a, .toTop').click(function(){
	      var anchor = $(this);
	      $('html, body').stop().animate({
	              scrollTop: $(anchor.attr('href')).offset().top
	          }, 'slow');
	      return false;
	    });
	})
}(jQuery));