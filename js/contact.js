(function () {

    $('#js-contact').on("click", function () {
        $(this).toggleClass('active')
        $('.contact__bottom')
            .slideToggle();
    });

    $("#js-scroll").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#faqs').offset().top
        }, 'slow');
    });

    $("#js-scroll-2").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#jobs-opportunities').offset().top
        }, 'slow');
    });
    if (screen.width > 768) {
        //nav
        var $nav = $('#js-nav');
        var $win = $(window);
        var winH = $win.height(); // Get the window height.

        $win.on("scroll", function () {
            if ($(this).scrollTop() > winH*2 - 20) {
                $nav.removeClass("invert");
            } else {
                $nav.addClass("invert");
            }
        }).on("resize", function () { // If the user resizes the window
            winH = $(this).height(); // you'll need the new height value
        });
    } else {
        $.fn.isOnScreen = function isOnScreen() {
            var win = $(window);
            var winH = win.height();
            var viewport = {
                top: win.scrollTop(),
                left: win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top + winH || viewport.top > bounds.bottom));
        };
        
        // menu scroll
        var $nav = $('#js-nav');
        var $win = $(window);
        $win.on("scroll", function () {
            if ($('#jobs-opportunities').isOnScreen() == true) {
                $nav.removeClass("invert");
            }else {
                $nav.addClass("invert");
            }
        });
    }
    // $('dd').hide();

    $('dl').on("click", 'dt', function () {
        $(this)
            .addClass('active')
            .siblings('dt')
            .removeClass('active');
        $(this)
            .next()
            .slideDown(300)
            .siblings('dd')
            .slideUp(300)
    });
})();