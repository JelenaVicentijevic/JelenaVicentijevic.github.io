$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
	
	$('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
	/* Navigation scroll */
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var baseMinScrollTime = 200,
            baseMaxScrollTime = 1000;

        var docHeight = $(document).height(),
            triggerTop = $(this).offset().top,
            targetTop = $target.offset().top;

        var scrollProportion = (targetTop - triggerTop) / docHeight,
            relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
            // Create inverse relationship (quicker the further we scroll)
            scrollTime = -1 * (1 - relativeTime);

        $('html, body').animate({
          scrollTop: targetTop - 10
        }, scrollTime);
        return false;
      }
    }
		
  });
		
    /* Animation on scroll */
	
 	$('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
	
	
	$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
	
	
	$('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
	
	
	$('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });
	
	/* Mobile navigation */
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		
		if(icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round')
		} else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round')
		}
		
	});
	
	
	
});
	
	
	
	
	
	
	