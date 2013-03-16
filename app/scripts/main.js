(function($){
	
	// Top Link
	function topLink() {
		
		var reset = $('.toTop').remove();
		var selector = '.container > section';
		
		if ($(window).width() < 480 ) {
			reset;
			$(selector).append('<a href="#page" class="toTop">top</a>');
			
		} else {
			reset;
		}
	}
	
	topLink();
	$(window).resize(function() {
		topLink();
	});
	
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