(function ($) {
	"use strict";
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip()

// Nice Select
    $('select').niceSelect();

// meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });

// Extra Info
    $('.info-bar').on('click',function(){
        $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click',function(){
        $('.extra-info').removeClass('info-open');
    })

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Main Slider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			prevArrow: '<button type="button" class="slick-prev"> <i class="far fa-chevron-left"></i> </button>',
			nextArrow: '<button type="button" class="slick-next"> <i class="far fa-chevron-right"></i> </button>',
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
    mainSlider();
// Main Slider

// magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
// Magnific Popup
$(".video-play").magnificPopup({
    type: 'iframe',
});
//   End  Magnific Popup

 // portfolio active
    $('.portfolio-area').imagesLoaded( function() {
        var grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        })

        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
        });

        //for portfolio menu active class
        $('.portfolio-menu button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });
// End Isotope

// Start Counter
    $('.counter').counterUp({
        delay: 3,
        time: 2000,
    });
// End Counter

// WOW active
  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
});
    wow.init();
//  End Wow 

// Blog Carousel
    $('.blog-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });

// Testimonial Carousel
    $('.testimonial-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });        

// Brand Carousel
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        }
        ]
    });

// Testimonial Carousel 2
    $('.testimonial-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-nav-img'
    });
    $('.testimonial-nav-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active-2',
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-arrow-up"></i>', 
        activeOverlay: false, 
    });
//   Scroll Up


})(jQuery);
