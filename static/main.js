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
                                                        });
                                                        var bar = new ProgressBar.Circle('#progressbarAlternativeHTC',{
                                                            color: '#aaa',
                                                            // This has to be the same size as the maximum width to
                                                            // prevent clipping
                                                            strokeWidth: 4,
                                                            trailWidth: 1,
                                                            easing: 'easeInOut',
                                                            duration: 1400,
                                                            from: { color: '#aaa', width: 1 },
                                                            to: { color: '#5f0f4e', width: 4 },
                                                            // Set default step function for all animate calls
                                                            step: function(state, circle) {
                                                                circle.path.setAttribute('stroke', state.color);
                                                                circle.path.setAttribute('stroke-width', state.width);

                                                                var value = Math.round(circle.value() * 100);
                                                                if (value === 0) {
                                                                    circle.setText('');
                                                                } else {
                                                                    circle.setText(value+'%');
                                                                }

                                                            }
                                                        });
                                                        bar.text.style.fontFamily = '"Lato", sans-serif';
                                                        bar.text.style.fontSize = '2rem';
                                                        bar.animate(0.86);
                                                        var bar2 = new ProgressBar.Circle('#progressbarAlternativeIphone',{
                                                            color: '#aaa',
                                                            // This has to be the same size as the maximum width to
                                                            // prevent clipping
                                                            strokeWidth: 4,
                                                            trailWidth: 1,
                                                            easing: 'easeInOut',
                                                            duration: 1400,
                                                            from: { color: '#aaa', width: 1 },
                                                            to: { color: '#5f0f4e', width: 4 },
                                                            // Set default step function for all animate calls
                                                            step: function(state, circle) {
                                                                circle.path.setAttribute('stroke', state.color);
                                                                circle.path.setAttribute('stroke-width', state.width);

                                                                var value = Math.round(circle.value() * 100);
                                                                if (value === 0) {
                                                                    circle.setText('');
                                                                } else {
                                                                    circle.setText(value+'%');
                                                                }

                                                            }
                                                        });
                                                        bar2.text.style.fontFamily = '"Lato", sans-serif';
                                                        bar2.text.style.fontSize = '2rem';
                                                        bar2.animate(0.70);
                                                        var bar3 = new ProgressBar.Circle('#progressbarAlternativeSTablet',{
                                                            color: '#aaa',
                                                            // This has to be the same size as the maximum width to
                                                            // prevent clipping
                                                            strokeWidth: 4,
                                                            trailWidth: 1,
                                                            easing: 'easeInOut',
                                                            duration: 1400,
                                                            from: { color: '#aaa', width: 1 },
                                                            to: { color: '#5f0f4e', width: 4 },
                                                            // Set default step function for all animate calls
                                                            step: function(state, circle) {
                                                                circle.path.setAttribute('stroke', state.color);
                                                                circle.path.setAttribute('stroke-width', state.width);

                                                                var value = Math.round(circle.value() * 100);
                                                                if (value === 0) {
                                                                    circle.setText('');
                                                                } else {
                                                                    circle.setText(value+'%');
                                                                }

                                                            }
                                                        });
                                                        bar3.text.style.fontFamily = '"Lato", sans-serif';
                                                        bar3.text.style.fontSize = '2rem';
                                                        bar3.animate(0.56);
                                                    });
                                                    var line = new ProgressBar.Line('#progressbarAlternative');
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

