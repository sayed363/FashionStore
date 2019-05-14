$(document).ready(function(){
	//nivo slider for main slider
	$('#slider').nivoSlider({
		manualAdvance:false,
		//prevText: '<span><i class="fas fa-arrow-alt-circle-left"></i></span>',
        //nextText: '<span><i class="fas fa-arrow-alt-circle-right"></i></span>',
		directionNav:false,	//left & right arrow
        controlNav:false,	//slider indicator
		animSpeed:500,
		pauseTime:7000,
	});
	
		
	//wow js
	new WOW().init();
	
	
	//isotope plugin
	$('.list-group').isotope({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.list-item',
	  percentPosition: true,
	  masonry: {
		// use element for option
		columnWidth: '.list-item'
	  }
	})
	
	//owl-carousel for product slider
	$(".owl-carousel").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		
	});
	
});

