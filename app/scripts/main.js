(function($){
	// Smooth Scrolling
    $('#mainNav li a').click(function(){
      var anchor = $(this);
      $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top
          }, 'slow');
      return false;
    });
	
	function nav(wrapper,toggle,breakpoint) {
		var windowWidth = $(window).width();
		
		if (windowWidth < breakpoint) {
			
			$('#mainNav > ul').css({
				display: 'none'
			});
			
			$(wrapper).removeAttr('style').css({
				position: 'fixed',
				backgroundColor: 'rgba(255,255,255,.95)',
				top: 0,
				margin: 0,
				width: '100%',
				padding: '1em'
			});
		} else {
			$(wrapper).removeAttr('style');
		}
		
		$('.toggleNav').click(function(){
			$('#mainNav > ul').slideToggle();
		});
	}
	
	nav('#mainNav', '#mainNav .toggleNav', '480');
	
	$(window).resize(function(){
		nav('#mainNav', '#mainNav .toggleNav', '480');
	});
}(jQuery));