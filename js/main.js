$(document).ready(function () {
    window.onload = function () {
        $('#preloader').delay(3000).fadeOut(500);
    }
    var nav = responsiveNav(".nav-collapse");
    //scroll down
    $("#js-scroll").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#our-works').offset().top
        }, 'slow');
    });

    //gallery
    $('#js-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        // fade: true,
        // autoplaySpeed: 2000,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-left"><span class="icon-angle-double-left"></span></div></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-right"><span class="icon-angle-double-right"></span></div></button>'
    });
    $('#js-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = $('.slick-current');
        current.html(current.html());
    });
    $('.slider-programs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        focusOnSelect: true
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        infinite: false,
        focusOnSelect: true
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.slider-nav',
        // adaptiveHeight: true,
        // variableWidth: true,
        infinite: true,
        autoplay: false,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-left"><span class="icon-chevron-thin-left"></span></div></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-right"><span class="icon-chevron-thin-right"></span></div></button>'
    });


    var tabsPrograms = $('.programs');
    var tabsProgtabs = $('.progtabs');
    //PJTabs
    jQuery('.pjtabs__nav .pjtabs__links a').on('click', function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $('.section__works').offset().top
        }, 'slow');
        var currentAttrValue = jQuery(this).attr('href');
        tabsPrograms.show();
        tabsProgtabs.hide();

        // Show/Hide Tabs (Sliding 2)
        jQuery('.pjtabs__nav ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        $('.slider-programs').get(0).slick.setPosition();
        $('.slider-programs').on('click', '.slick-slide', function () {
            $('.programs').hide();
            $('.progtabs').show();
            $('.slider-for').get(0).slick.setPosition();
        });
    });

    //Animate cover down
    $(".js-cover").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#our-works').offset().top
        }, 'slow');
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile
    } else {
        var wa = $(".js-share__item--wa").hide();
    }
    //toggle credit
    $('#js-credits').click(function () {
        $('#js-credits-content').slideToggle("slow");
    });
});