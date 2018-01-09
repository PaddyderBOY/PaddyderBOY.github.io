function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top-60
                    }, 900);
                    return false;
                }
            }
        });
        $('#A').click(function (e) {
            $.get("A.html", function (data) {
                $('#question').fadeOut('slow', function () {
                    $('#question').replaceWith($(data)).fadeIn('slow');
                    $('.slideshowreview').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 8000,
                        dots: true,
                        arrows: true,
                    })
                });
            });

        });

    }());


}

main();

$(document).ready(function () {
    $('.slideshowintro').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
    });
    $('.slideshowreview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        arrows: true,
    });
});