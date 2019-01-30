console.log('Made with 💚 by r-worx');


/*

JS INDEX
================================================
1. preloader js
2. scroll to top js
3. slick menu js
4. sticky menu js
5. counter js
6. Testimonial owl carousel
7. New Products owl carouse
================================================*/

(function($) {

    var $main_window = $(window);

    /*====================================
    preloader js
    ======================================*/
    $('#preloader').fadeOut();

    /*====================================
    scroll to top js
    ======================================*/
    $main_window.on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $(".back-to-top").fadeIn(200);
        } else {
            $(".back-to-top").fadeOut(200);
        }
    });
    $(".back-to-top").on("click", function() {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            "slow"
        );
        return false;
    });

    /*====================================
    slick menu js
    ======================================*/
    var logo_path=$('.mobile-menu').data('logo');
    $('#main-menu').slicknav({
        appendTo:'.mobile-menu',
        removeClasses:false,
        label:'',
        closedSymbol:'<i class="fas fa-chevron-right"><i/>',
        openedSymbol:'<i class="fas fa-chevron-down"><i/>',
        brand:'<a href="/"><img src="'+logo_path+'" class="img-responsive" height="30px" alt="logo"></a>'
    });

    /*====================================
    sticky menu js
    ======================================*/
    $main_window.on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".scrolling-navbar").addClass("top-nav-collapse");
        } else {
            $(".scrolling-navbar").removeClass("top-nav-collapse");
        }
    });

    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();

    /*
    MixitUp
    ========================================================================== */
    $('#portfolio').mixItUp();

    /*=======================================
    counter
    ======================================= */
    if ($(".counter").length > 0) {
        $(".counter").counterUp({
            delay: 1,
            time: 800
        });
    }

    // Progress Bar
    $('.skill-shortcode').appear(function() {
        $('.progress').each(function() {
            $('.progress-bar').css('width', function() {
                return ($(this).attr('data-percentage') + '%')
            });
        });
    }, {
        accY: -100
    });

    /*====================================
    Clients  Owl Carousel
    ======================================*/
    var detailsslider = $("#clients-scroller");
    detailsslider.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:30,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 4,
            }
        }
    });

    /*====================================
      New Products Owl Carousel
      ======================================*/
    var newproducts = $("#color-client-scroller");
    newproducts.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:5,
        loop: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 3,
            },
            991: {
                items: 4,
            }
        }
    });

    /*====================================
      New Products Owl Carousel
      ======================================*/
    var newproducts = $("#testimonial-item");
    newproducts.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin: 10,
        loop: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 2,
            }
        }
    });


    /*====================================
      New Products Owl Carousel
      ======================================*/
    var newproducts = $("#testimonial-dark");
    newproducts.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:5,
        loop: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    });

    /*====================================
    New Products Owl Carousel
    ======================================*/
    var newproducts = $("#single-testimonial-item");
    newproducts.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:5,
        loop: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            991: {
                items: 1,
            }
        }
    });

    /*====================================
    New Products Owl Carousel
    ======================================*/
    var newproducts = $("#image-carousel");
    newproducts.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:5,
        loop: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 3,
            },
            991: {
                items: 4,
            }
        }
    });

    /*====================================
    New Products Owl Carousel
    ======================================*/
    var newproducts = $("#carousel-image-slider");
    newproducts.owlCarousel({
        autoplay: false,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:5,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 1,
            }
        }
    });

    /*====================================
    New Products Owl Carousel
    ======================================*/
    var newproducts = $("#carousel-about-us");
    newproducts.owlCarousel({
        autoplay: true,
        nav: false,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: true,
        margin:5,
        loop: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            991: {
                items: 1,
            }
        }

    });



})(jQuery);

