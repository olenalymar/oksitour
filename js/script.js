//scroll navigation

$('.nav a').on('click', function(event) {
 event.preventDefault();
 var id = $(this).attr('href')
 $('html, body')
   .stop()
   .animate({
     scrollTop: $(id).offset().top
   }, 700);
});



//tour program accordion

$('.accordion').on('click', function() {
	if ($(this).next().hasClass('closed')) {
		$(this)
			.next()
			.slideDown('slow')
			.fadeIn(620)
			.removeClass('closed');
			return;
	};
	$(this).next().addClass('closed');
	$('.panel.closed').slideUp('slow').fadeOut(700);
	
});


//mobile menu

$('.burger-nav').on('click', function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('nav').slideUp();
	} else {
		$(this).addClass('active');
		$('nav').slideDown().addClass('shownav');
	}
});

$(window).on('resize', function() {
	if ($(window).width() > 959) {
		$('.burger-nav').removeClass('active');
		$('nav').removeClass('shownav').removeAttr('style');
	}
});


//reviews slider

$('.carousel').slick({
	dots: false,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: true,
	infinite: true,
	speed: 700,
	responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
  },
  {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  }]
});



// equal height of review items for slider

var equalHeight = function() {	
	var maxHeight = 0;
	$('.reviews-item').each(function() {
		if ($(this).height() > maxHeight) maxHeight = $(this).height();
	});
	console.log(maxHeight);
	$('.reviews-item').height(maxHeight + 'px');
};

equalHeight();



// included fadeIn when scrolling


$(window).on('scroll', function(){
	 // Check the location of each desired element 
	$('.included-list').each( function(i){
		var bottomOfObject = $(this).offset().top + $(this).outerHeight();
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		 // If the object is completely visible in the window, fade it it 
		if( bottomOfWindow > (bottomOfObject - 50) ){
			$(this).animate({'opacity':'1'}, 500);
		}
	});

	// tour program - translate when scrolling 

	$('.tour-program-item').each( function(i){
		var bottomOfObject = $(this).offset().top + $(this).outerHeight();
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		if( bottomOfWindow > (bottomOfObject - 227) ){
			$(this).addClass('scrolling');
		}
	});

}); 



