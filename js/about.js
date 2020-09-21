$(document).ready(function () {
    //nav
    var $nav = $('#js-nav');
    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH - 10) {
            $nav.addClass("invert");
        } else {
            $nav.removeClass("invert");
        }
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });
    $("#js-team").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#team').offset().top
        }, 'slow');
    });
    var video = $('#bgvid').get(0);
    if (screen.width > 768) {
        $('#fullpage').fullpage({
            normalScrollElements: '.content',
            scrollOverflow: false,
            hybrid: true,
            fitToSection: false,
            normalScrollElementTouchThreshold: 5,
            afterLoad: function (anchorLink, index) {
                var loadedSection = $(this);
                if (index == 1) {
                    video.play();
                }
                //using i
            }
        });
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile
        $("#bgvid").attr('poster', 'images/cover-about.jpg');
    } else {
        $('#bgvid').prop('loop',true);
    }
});