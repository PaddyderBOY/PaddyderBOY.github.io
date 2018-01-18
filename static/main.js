function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }
        });

        $('.A').click(function (e) {
            $.get("B.html", function (data) {
                $('#question').fadeOut('slow', function () {
                    $('#question').replaceWith($(data)).fadeIn('slow');
                    $('.Aback').click(function (e) {
                        $.get("A.html", function (backdata) {
                            $('#question').fadeOut('slow', function () {
                                $('#question').replaceWith($(backdata)).fadeIn('slow');
                            });
                        });
                    });
                    $('.B').click(function (e) {
                        $.get("C.html", function (data) {
                            $('#question').fadeOut('slow', function () {
                                $('#question').replaceWith($(data)).fadeIn('slow');
                                $('.C').click(function (e) {
                                    $.get("D.html", function (data) {
                                        $('#question').fadeOut('slow', function () {
                                            $('#question').replaceWith($(data)).fadeIn('slow');
                                            $('.D').click(function (e) {
                                                $.get("ErgebnisS8.html", function (data) {
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
                                        });
                                    });
                                });
                            });
                        });
                    });
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
        arrows:false
    });
    $('.slideshowreview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        arrows: true,
    });
    AOS.init();
});

// Show Menu on Book
$(window).bind('scroll', function() {
    var navHeight = $(window).height() - 500;
    if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
    } else {
        $('.navbar-default').removeClass('on');
    }
});
