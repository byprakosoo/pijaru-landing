$(document).ready(function () {
    //nav
    var $nav = $('#js-nav');
    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH - 10) {
            $nav.addClass("invert");
            $('.menu-item').first().addClass('active');
        } else {
            $nav.removeClass("invert");
            $('.menu-item').first().removeClass('active');
        }
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });
    
    if (screen.width > 768) {
        $('#fullpage').fullpage({
            normalScrollElements: '.content',
            scrollOverflow: false,
            hybrid: true,
            fitToSection: false,
            normalScrollElementTouchThreshold: 5
        });
    }
    //scroll down
    $('.menu-item').first().click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#our-works').offset().top }, 'slow');
    });
    $('.footer__menu__item').first().next().click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#our-works').offset().top }, 'slow');
    });
});