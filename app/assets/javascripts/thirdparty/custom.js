(function($) {


	"use strict";

/* ==========================================================================
   ieViewportFix - fixes viewport problem in IE 10 SnapMode and IE Mobile 10
   ========================================================================== */

	function ieViewportFix() {

		var msViewportStyle = document.createElement("style");

		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport { width: device-width; }"
			)
		);

		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			msViewportStyle.appendChild(
				document.createTextNode(
					"@-ms-viewport { width: auto !important; }"
				)
			);
		}
		document.getElementsByTagName("head")[0].
			appendChild(msViewportStyle);

	}

/* ==========================================================================
   exists - Check if an element exists
   ========================================================================== */

	function exists(e) {
		return $(e).length > 0;
	}

/* ==========================================================================
   isTouchDevice - return true if it is a touch device
   ========================================================================== */

	function isTouchDevice() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}

/* ==========================================================================
   setDimensionsPieCharts
   ========================================================================== */
	function setDimensionsPieCharts() {

		$(".pie-chart").each(function() {

			var $t = $(this);
			var n = $t.parent().width();
			var r = $t.attr("data-barSize");

			if (n < r) {
				r = n;
			}

			$t.css("height", r);
			$t.css("width", r);
			$t.css("line-height", r + "px");


			if (n < r) {
				r = n;
			}

			$t.css("height", r);
			$t.css("width", r);
			$t.css("line-height", r + "px");

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$t.find("i").css({
				"line-height": r + "px",
				"font-size": r / 3
			});
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		});

	}

/* ==========================================================================
   animatePieCharts
   ========================================================================== */

	function animatePieCharts() {

		if(typeof $.fn.easyPieChart != 'undefined'){

			$(".pie-chart:in-viewport").each(function() {
<<<<<<< HEAD

				var $t = $(this);
				var n = $t.parent().width();
				var r = $t.attr("data-barSize");

				if (n < r) {
					r = n;
				}

=======

				var $t = $(this);
				var n = $t.parent().width();
				var r = $t.attr("data-barSize");

				if (n < r) {
					r = n;
				}

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
				$t.easyPieChart({
					animate: 1300,
					lineCap: "square",
					lineWidth: $t.attr("data-lineWidth"),
					size: r,
					barColor: $t.attr("data-barColor"),
					trackColor: $t.attr("data-trackColor"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find('.pie-chart-percent span').text(Math.round(percent));
					}
<<<<<<< HEAD

				});

			});

=======

				});

			});

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		}

	}

/* ==========================================================================
   animateMilestones
   ========================================================================== */

	function animateMilestones() {

		$(".milestone:in-viewport").each(function() {
<<<<<<< HEAD

			var $t = $(this);
			var	n = $t.find(".milestone-value").attr("data-stop");
			var	r = parseInt($t.find(".milestone-value").attr("data-speed"));

=======

			var $t = $(this);
			var	n = $t.find(".milestone-value").attr("data-stop");
			var	r = parseInt($t.find(".milestone-value").attr("data-speed"));

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			if (!$t.hasClass("already-animated")) {
				$t.addClass("already-animated");
				$({
					countNum: $t.find(".milestone-value").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".milestone-value").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".milestone-value").text(this.countNum);
					}
				});
			}
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		});

	}

/* ==========================================================================
   animateProgressBars
   ========================================================================== */

	function animateProgressBars() {

		$(".progress-bar .progress-bar-outer:in-viewport").each(function() {
<<<<<<< HEAD

			var $t = $(this);

=======

			var $t = $(this);

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			if (!$t.hasClass("already-animated")) {
				$t.addClass("already-animated");
				$t.animate({
					width: $t.attr("data-width") + "%"
				}, 2000);
			}
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		});

	}

/* ==========================================================================
   enableParallax
   ========================================================================== */

	function enableParallax() {

		if(typeof $.fn.parallax != 'undefined'){
<<<<<<< HEAD

			$('.parallax').each(function() {

				var $t = $(this);
				$t.addClass("parallax-enabled");
				$t.parallax("49%", 0.3, false);

			});

=======

			$('.parallax').each(function() {

				var $t = $(this);
				$t.addClass("parallax-enabled");
				$t.parallax("49%", 0.3, false);

			});

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		}

	}

/* ==========================================================================
<<<<<<< HEAD
   handleMobileMenu
   ========================================================================== */
=======
   handleMobileMenu
   ========================================================================== */
>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989

	var MOBILEBREAKPOINT = 979;

	function handleMobileMenu() {

		if ($(window).width() > MOBILEBREAKPOINT) {
<<<<<<< HEAD

			$("#mobile-menu").hide();
			$("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed");

		} else {

			if (!exists("#mobile-menu")) {

=======

			$("#mobile-menu").hide();
			$("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed");

		} else {

			if (!exists("#mobile-menu")) {

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
				$("#menu").clone().attr({
					id: "mobile-menu",
					"class": "fixed"
				}).insertAfter("#nav");
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
				$("#mobile-menu > li > a, #mobile-menu > li > ul > li > a").each(function() {
					var $t = $(this);
					if ($t.next().hasClass('sub-menu') || $t.next().is('ul')) {
						$t.append('<span class="fa fa-angle-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');
					}
				});
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
				$(".mobile-menu-submenu-arrow").click(function(event) {
					var $t = $(this);
					if ($t.hasClass("mobile-menu-submenu-closed")) {
						$t.parent().siblings("ul").slideDown(300);
						$t.removeClass("mobile-menu-submenu-closed fa-angle-down").addClass("mobile-menu-submenu-opened fa-angle-up");
					} else {
						$t.parent().siblings("ul").slideUp(300);
						$t.removeClass("mobile-menu-submenu-opened fa-angle-up").addClass("mobile-menu-submenu-closed fa-angle-down");
					}
					event.preventDefault();
				});
<<<<<<< HEAD

				$("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");

			}

=======

				$("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");

			}

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		}

	}

/* ==========================================================================
   showHideMobileMenu
   ========================================================================== */

	function showHideMobileMenu() {
<<<<<<< HEAD

		$("#mobile-menu-trigger").click(function(event) {

			var $t = $(this);
			var $n = $("#mobile-menu");

=======

		$("#mobile-menu-trigger").click(function(event) {

			var $t = $(this);
			var $n = $("#mobile-menu");

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			if ($t.hasClass("mobile-menu-opened")) {
				$t.removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
				$n.slideUp(300);
			} else {
				$t.removeClass("mobile-menu-closed").addClass("mobile-menu-opened");
				$n.slideDown(300);
			}
			event.preventDefault();
<<<<<<< HEAD

		});

	}

/* ==========================================================================
   handleBackToTop
   ========================================================================== */

   function handleBackToTop() {

=======

		});

	}

/* ==========================================================================
   handleBackToTop
   ========================================================================== */

   function handleBackToTop() {

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		$('#back-to-top').click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});
<<<<<<< HEAD

   }

/* ==========================================================================
   showHidebackToTop
   ========================================================================== */

	function showHidebackToTop() {

=======

   }

/* ==========================================================================
   showHidebackToTop
   ========================================================================== */

	function showHidebackToTop() {

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		if ($(window).scrollTop() > $(window).height() / 2 ) {
			$("#back-to-top").removeClass('gone');
			$("#back-to-top").addClass('visible');
		} else {
			$("#back-to-top").removeClass('visible');
			$("#back-to-top").addClass('gone');
		}
<<<<<<< HEAD

	}

/* ==========================================================================
   handlePageLoader
   ========================================================================== */

	function handlePageLoader() {

		$(".loader-img").delay(500).fadeOut();
		$("#pageloader").delay(1000).fadeOut("slow");

	}

/* ==========================================================================
   handleFullScreenDiv
   ========================================================================== */

	function handleFullScreenDiv() {

		var x = $(window).height();

		$('.full-screen').css("min-height", x + "px");

	}

/* ==========================================================================
   handleSmoothScrolling
   ========================================================================== */

	function handleSmoothScrolling() {

=======

	}

/* ==========================================================================
   handlePageLoader
   ========================================================================== */

	function handlePageLoader() {

		$(".loader-img").delay(500).fadeOut();
		$("#pageloader").delay(1000).fadeOut("slow");

	}

/* ==========================================================================
   handleFullScreenDiv
   ========================================================================== */

	function handleFullScreenDiv() {

		var x = $(window).height();

		$('.full-screen').css("min-height", x + "px");

	}

/* ==========================================================================
   handleSmoothScrolling
   ========================================================================== */

	function handleSmoothScrolling() {

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 700);
				return false;
			  }
			}
		});
	}

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
<<<<<<< HEAD

	$(document).ready(function() {

		ieViewportFix();


=======

	$(document).ready(function() {

		ieViewportFix();


>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		animatePieCharts();
		animateMilestones();
		animateProgressBars();

		if (!isTouchDevice()) {
			enableParallax();
		}
<<<<<<< HEAD

		handleMobileMenu();
		showHideMobileMenu();

		handleBackToTop();
		showHidebackToTop();

		handleFullScreenDiv();

		handleSmoothScrolling();

		init_ui();



		// sticky header
		// http://imakewebthings.com/jquery-waypoints/shortcuts/sticky-elements/

		var stickyHeader = true;

		if((typeof $.fn.waypoint != 'undefined') && stickyHeader && ($(window).width() > 1024)){

=======

		handleMobileMenu();
		showHideMobileMenu();

		handleBackToTop();
		showHidebackToTop();

		handleFullScreenDiv();

		handleSmoothScrolling();

		init_ui();



		// sticky header
		// http://imakewebthings.com/jquery-waypoints/shortcuts/sticky-elements/

		var stickyHeader = true;

		if((typeof $.fn.waypoint != 'undefined') && stickyHeader && ($(window).width() > 1024)){

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('#nav').waypoint('sticky', {
			  wrapper: '<div class="sticky-wrapper" />',
			  stuckClass: 'stuck'
			});

		}
<<<<<<< HEAD



		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/

		if(typeof $.fn.superfish != 'undefined'){

=======



		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/

		if(typeof $.fn.superfish != 'undefined'){

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('#menu').superfish({
				delay: 100,
				animation: {opacity:'show',height:'show'},
				speed: 100,
				cssArrows: false
			});
<<<<<<< HEAD

		}



		// scrollspy

		if(typeof $.fn.scrollspy != 'undefined'){

			$('body').scrollspy({ offset: 50 });

		}

		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html

		if(typeof $.fn.magnificPopup != 'undefined'){

=======

		}



		// scrollspy

		if(typeof $.fn.scrollspy != 'undefined'){

			$('body').scrollspy({ offset: 50 });

		}

		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html

		if(typeof $.fn.magnificPopup != 'undefined'){

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('.magnificPopup').magnificPopup({
				disableOn: 400,
				closeOnContentClick: true,
				type: 'image'
			});
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('.magnificPopup-gallery').magnificPopup({
				disableOn: 400,
				type: 'image',
				gallery: {
					enabled: true
				}
			});
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989

			$('.portfolio-item-link').magnificPopup({
				type:'inline',
				midClick: true,
				callbacks: {
					open: function() {
<<<<<<< HEAD

						init_ui();

					}
				}
			});

		}

	});



	function init_ui(){

		console.log('Init UI');

		setDimensionsPieCharts();


		//twitter fetcher

		if(typeof twitterFetcher != 'undefined' && $('.ewf_widget_latest_tweets').length){

=======

						init_ui();

					}
				}
			});

		}

	});



	function init_ui(){

		console.log('Init UI');

		setDimensionsPieCharts();


		//twitter fetcher

		if(typeof twitterFetcher != 'undefined' && $('.ewf_widget_latest_tweets').length){

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('.ewf_widget_latest_tweets').each(function(index){
				var account_id = $('.ewf-tweet-list', this).attr('data-account-id');
				var items = $('.ewf-tweet-list', this).attr('data-items');
				var newID = 'ewf-tweet-list-'+index;
<<<<<<< HEAD

				$('.ewf-tweet-list', this).attr('id', newID);
				twitterFetcher.fetch(account_id, newID, items, false, false, false);
			});

		}


		// Fitvids - fluid width video embeds
		// https://github.com/davatron5000/FitVids.js/blob/master/README.md

		if(typeof $.fn.fitVids != 'undefined'){

			$('.fitvids').fitVids();

		}



		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md

		if(typeof $.fn.simplePlaceholder != 'undefined'){

			$('input[placeholder], textarea[placeholder]').simplePlaceholder();

		}



		// EasyTabs - tabs plugin
		// https://github.com/JangoSteve/jQuery-EasyTabs/blob/master/README.markdown

		if(typeof $.fn.easytabs != 'undefined'){

=======

				$('.ewf-tweet-list', this).attr('id', newID);
				twitterFetcher.fetch(account_id, newID, items, false, false, false);
			});

		}


		// Fitvids - fluid width video embeds
		// https://github.com/davatron5000/FitVids.js/blob/master/README.md

		if(typeof $.fn.fitVids != 'undefined'){

			$('.fitvids').fitVids();

		}



		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md

		if(typeof $.fn.simplePlaceholder != 'undefined'){

			$('input[placeholder], textarea[placeholder]').simplePlaceholder();

		}



		// EasyTabs - tabs plugin
		// https://github.com/JangoSteve/jQuery-EasyTabs/blob/master/README.markdown

		if(typeof $.fn.easytabs != 'undefined'){

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('.tabs-container').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
<<<<<<< HEAD

=======

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
			$('.vertical-tabs-container').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
<<<<<<< HEAD

		}



		// bxSlider - responsive slider
		// http://bxslider.com/options

		if(typeof $.fn.bxSlider != 'undefined'){

			$('.references-slider .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'
=======

		}



		// bxSlider - responsive slider
		// http://bxslider.com/options

		if(typeof $.fn.bxSlider != 'undefined'){

			$('.references-slider .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'
>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
<<<<<<< HEAD

		}



		// gMap -  embed Google Maps into your website; uses Google Maps v3
		// http://labs.mario.ec/jquery-gmap/

		if(typeof $.fn.gMap != 'undefined'){

			$(".google-map").each(function() {

				var $t = $(this);

				var mapZoom = parseInt($t.attr("data-zoom"));
				var mapAddress = $t.attr("data-address");
				var mapCaption = $t.attr("data-caption");

=======

		}



		// gMap -  embed Google Maps into your website; uses Google Maps v3
		// http://labs.mario.ec/jquery-gmap/

		if(typeof $.fn.gMap != 'undefined'){

			$(".google-map").each(function() {

				var $t = $(this);

				var mapZoom = parseInt($t.attr("data-zoom"));
				var mapAddress = $t.attr("data-address");
				var mapCaption = $t.attr("data-caption");

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
				$t.gMap({
					maptype: 'ROADMAP',
					scrollwheel: false,
					zoom: mapZoom,
					markers: [{
							address: mapAddress,
							html: mapCaption,
							popup: false
						}
					]
				});
<<<<<<< HEAD

			});

		}


=======

			});

		}


>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		$(window).resize();
	}


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
<<<<<<< HEAD

	$(window).scroll(function() {

		animateMilestones();
		animatePieCharts();
		animateProgressBars();

=======

	$(window).scroll(function() {

		animateMilestones();
		animatePieCharts();
		animateProgressBars();

>>>>>>> 9727805c6d916c74d6c9861e0a18721026ea4989
		showHidebackToTop();

	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
<<<<<<< HEAD

	$(window).resize(function() {

		animateMilestones();
		animatePieCharts();
		animateProgressBars();

		handleMobileMenu();
		handleFullScreenDiv();

	});

/* ==========================================================================
   When the window is loading, do
   ========================================================================== */

	$(window).load(function() {

		handlePageLoader();

=======

	$(window).resize(function() {

		animateMilestones();
		animatePieCharts();
		animateProgressBars();

		handleMobileMenu();
		handleFullScreenDiv();

	});

/* ==========================================================================
   When the window is loading, do
   ========================================================================== */

	$(window).load(function() {

		handlePageLoader();

	});

})(window.jQuery);

(function($) {

    var $allVideos = $(".blog-post iframe[src^='//player.vimeo.com'], .blog-post iframe[src^='//www.youtube.com'], .blog-post iframe, .blog-post object, .blog-post embed"),
    $fluidEl = $(".blog-post");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();

})(window.jQuery);

// non jQuery scripts below
