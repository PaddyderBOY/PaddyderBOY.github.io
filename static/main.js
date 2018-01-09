function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });
        $('#A').click(function (e) {
            $('#question').fadeOut('slow', function () {
                $('#question').replaceWith('<div id="question">\n' +
                    '        <div class="row top-buffer border">\n' +
                    '            <div class="col-12 top-buffer">\n' +
                    '                <h3>2. Frage</h3>\n' +
                    '            </div>\n' +
                    '            <div class="col-4 text-center col-question-buffer">\n' +
                    '                <button type="button" class="btn btn-circle btn-xl">Option 1</button>\n' +
                    '            </div>\n' +
                    '            <div class="col-4 text-center col-question-buffer">\n' +
                    '                <button type="button" class="btn btn-circle btn-xl">Option 2</button>\n' +
                    '            </div>\n' +
                    '            <div class="col-4 text-center col-question-buffer">\n' +
                    '                <a href="#question" class="btn btn-custom" id="triggerButton">Swap Divs</a>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>').fadeIn('slow');
            });
        });
    }());


}

main();