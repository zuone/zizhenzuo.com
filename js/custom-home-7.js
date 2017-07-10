(function($) { "use strict";

	function Selector_Cache() {
		var collection = {};

		function get_from_cache( selector ) {
			if ( undefined === collection[ selector ] ) {
				collection[ selector ] = $( selector );
			}

			return collection[ selector ];
		}

		return { get: get_from_cache };
	}

	var selectors = new Selector_Cache();


	//Preloader

	Royal_Preloader.config({
        mode:        'scale_text',
        text:        'just a moment, please~',
        text_colour: '#FFFFFF',
		background:  '#363dc2'
	});

	
	//Home text fade on scroll	
	
	$(window).scroll(function () { 
        var $Fade = $('.fade-elements');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	

	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();

	
	/* Scroll Too */
	
	$(window).load(function(){"use strict";
				
		/* Page Scroll to id fn call */
		$("menu ul li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"menu ul li a",
			offset: 78,
			scrollSpeed:800,
			scrollEasing: "easeInOutCubic"
		});
				
		/* demo functions */
		$("a[rel='next']").on('click', function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
				
	});	
			
	
	$(document).ready(function() {
		
			
		//Hover text effect
 
		$('.chaffle').chaffle({
			speed: 10,
			time: 60
		});
		
				
		//Tooltip

		$(".tipped").tipper();

		
		//Parallax
		
		$('.parallax').parallax("50%", 0.3); 
		$('.parallax-1').parallax("50%", 0.3); 
		$('.parallax-2').parallax("50%", 0.3); 
		$('.parallax-3').parallax("50%", 0.3); 
			
			
		//Navigation	

		"use strict";

		$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
		//Checks if li has sub (ul) and adds class for toggle icon - just an UI


		$('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
		//Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

		$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

		//Adds menu-mobile class (for mobile toggle menu) before the normal menu
		//Mobile menu is hidden if width is more then 1199px, but normal menu is displayed
		//Normal menu is hidden if width is below 1199px, and jquery adds mobile menu
		//Done this way so it can be used with wordpress without any trouble

		$(".menu > ul > li").hover(function (e) {
			if ($(window).width() > 1183) {
				$(this).children("ul").stop(true, false).fadeToggle(300);
				e.preventDefault();
			}
		});
		//If width is more than 943px dropdowns are displayed on hover

		$(".menu > ul > li").on('click', function () {
			if ($(window).width() <= 1183) {
				$(this).children("ul").fadeToggle(300);
			}
		});
		//If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

		$(".menu-mobile").on('click', function (e) {
			$(".menu > ul").toggleClass('show-on-mobile');
			e.preventDefault();
		});
		//when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
		
	});

	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	