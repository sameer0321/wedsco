/*-----------------------------------------------------------------

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. preloader 


------------------------------------------------------------------*/

(function ($) {
    "use strict";

    $(document).ready(function () {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });


        // Initialize Isotope
        const grid = document.querySelector('.grid');
        const iso = new Isotope(grid, {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-buttons button');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');

                // Filter items
                const filterValue = button.getAttribute('data-filter');
                iso.arrange({ filter: filterValue });
            });
        });
        //isotope js End

        //>> Hero Slider Start <<//
        const sliderActive1 = ".hero-slider";
        const sliderInit1 = new Swiper(sliderActive1, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 2000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },

        });
        // content animation when active start here
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
        //>> Hero-2 Slider Start <<//
        const sliderActive2 = ".hero-slider-2";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed:3000,
            autoplay: {
                delay:7000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".arry-prev",
                prevEl: ".arry-next",
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);



        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });

        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        const testimonialImageSlider = new Swiper(".testimonial-image-slider", {
            speed: 1000,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
        });

        //>> Testimonial Content Slider Start <<//
        const testimonialContentSlider = new Swiper(".testimonial-content-slider", {
            speed: 1000,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        // testimonialImageSlider.controller.control = testimonialContentSlider;
        // testimonialContentSlider.controller.control = testimonialImageSlider;

        const testimonialSlider4 = new Swiper(".testimonial-content-slider-4", {
            speed: 1200,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        //>>  Featured Gallery Section Start <<//
        var featuredgallery = new Swiper(".featured-portfolio-img", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 15,
                stretch: 0,
                depth: 300,
                modifier: -1,
                slideShadows: true,
            },
            loop: true,
        });


        //>> Instagram Slider Start <<//
        const imageBannerSlider = new Swiper(".image-gallery-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            // navigation: {
            //     nextEl: ".array-prev",
            //     prevEl: ".array-next",
            // },
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        //>> Instagram Slider Start <<//
        const instagramBannerSlider = new Swiper(".instagram-banner-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 7,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Instagram Slider-2 Start<<//
        if ($('.instagram-banner-slider-2').length > 0) {
            const upcomingMovieSlider = new Swiper(".instagram-banner-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                breakpoints: {
                    1699: {
                        slidesPerView: 6,
                    },
                    1499: {
                        slidesPerView: 6,
                    },
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 2,
                    },
                },
            });
        }

        //>> wedding-design Slider Start <<//
        const designSlider = new Swiper(".wedding-design", {
            spaceBetween: 50,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Scroll Js Start <<//
        var scrollPath = document.querySelector(".scroll-up path");
        var pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        var updatescroll = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var scroll = pathLength - (scroll * pathLength) / height;
            scrollPath.style.strokeDashoffset = scroll;
        };
        updatescroll();
        $(window).scroll(updatescroll);
        var offset = 50;
        var duration = 950;
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".scroll-up").addClass("active-scroll");
            } else {
                jQuery(".scroll-up").removeClass("active-scroll");
            }
        });
        jQuery(".scroll-up").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate(
                {
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });
        // Back to top area end here 


    }); // End Document Ready Function
    function loader() {
        $(window).on('load', function () {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }

    loader();

})(jQuery); // End jQuery

