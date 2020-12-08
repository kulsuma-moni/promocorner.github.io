(function($){
	"use strict";
	// data-background
	 // $("[data-background]").each(function(){
 	//  $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
  //  	});

	 // Slider AREA

	 $('.slider_active').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
				
		
})(jQuery);