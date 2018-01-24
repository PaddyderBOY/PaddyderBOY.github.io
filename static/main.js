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
                    }, 800);
                    return false;
                }
            }
        });
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });
        $(".imagezoom").click(function() {
            if ($(this).hasClass("checked")) {
                $(this).removeClass("checked");
                return false;
            }
            var question=$(this).attr('id').substring(1,2);
            var id='Q'+question+'A';
            var questioncontainer=$('#'+id);
            questioncontainer.removeClass('checked');
            id='Q'+question+'B';
            questioncontainer=$('#'+id);
            questioncontainer.removeClass('checked');
            id='Q'+question+'C';
            questioncontainer=$('#'+id);
            questioncontainer.removeClass('checked');


            $(this).addClass("checked");
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
        arrows: false,
    });
    AOS.init();

    // Wizard
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
        $('.slideshowreview').slick('setPosition');

    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if($(e.target).attr('href')=='#complete'){
            bar.set(0);
            bar.animate(0.86);
            bar2.set(0);
            bar2.animate(0.70);
            bar3.set(0);
            bar3.animate(0.56);
            $('.slideshowreview').slick('setPosition');
        }
    });
    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.addClass('done');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

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

});
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
// Show Menu on Book
$(window).bind('scroll', function() {
    var navHeight = $(window).height() - 500;
    if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
    } else {
        $('.navbar-default').removeClass('on');
    }
});

