$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        effect: 'fade',
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
    });
    //////////** top-view slider **//////////
    var topswiper = new Swiper('.top-view .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.top-view .swiper-button-next',
            prevEl: '.top-view .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    //////////** lattest slider **//////////
    var lattestswiper = new Swiper('.lattest .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.lattest .swiper-button-next',
            prevEl: '.lattest .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    //////////** brands slider **//////////
    var brandswiper = new Swiper('.brands-slider .swiper-container', {
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: '.brands-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    //////////** cats Slider **//////////
    if ($(window).width() <= 991) {
        $(".cats").addClass("swiper-wrapper");
        $(".cats.swiper-wrapper").removeClass("cats");

        var catswiper = new Swiper('.cats-cont .swiper-container', {
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.cats-cont .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,

                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }
    //////////** feats Slider **//////////
    if ($(window).width() <= 1199) {
        $(".feats.swiper-wrapper").removeClass("feats");
        $(".feats-cont.swiper-container").addClass("feats-container");
        $(".feats-cont.swiper-container").removeClass("feats-cont");
        $(".feat").wrap("<div class='swiper-slide'></div>");

        var catswiper = new Swiper('.feats-container', {
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.feats-container .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,

                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }
    //////////** cats Slider **//////////
    if ($(window).width() <= 991) {
        $(".lenses").addClass("swiper-wrapper");
        $(".lenses.swiper-wrapper").removeClass("lenses");

        var lenseswiper = new Swiper('.lenses-cont .swiper-container', {
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.lenses-cont .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,

                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    /////////search/////////
    $('.search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(400);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusOut();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    ///////// **menu** /////////
    if ($(window).width() <= 1199) {
        $('.menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    ///////// **account dropdown** /////////
    $('.sub-cont .nav-a').click(function () {
        $(this).toggleClass("active");
        $(this).siblings().slideToggle(300);
    })

});