// ==UserScript==
// @name         cookie clicker (beta)
// @namespace    https://github.com/Khdoop
// @version      0.4
// @description  delicious cookies
// @author       Khdoop
// @match        http://orteil.dashnet.org/cookieclicker/beta/
// @require      https://code.jquery.com/jquery-2.2.0.min.js
// ==/UserScript==

$(function() {
    var html = '<div id="auto-clicker">clicker</div>';
    $('#links').before(html);

    var button = $('#auto-clicker');
    var interval;
    var flag = false;

    button
        .css({
            cursor: 'pointer',
            width: '50px',
            border: 'none',
            'text-align': 'center',
            'background-color': 'rgba(255, 0, 0, 0.2)'
        });

    button.on('click', function() {
        if (flag) {
            flag = false;
            $(this).css('background-color', 'rgba(255, 0, 0, 0.2)');
            window.clearInterval(interval);
        } else {
            flag = true;
            $(this).css('background-color', 'rgba(0, 255, 0, 0.2)');
            interval = setInterval(function() {
                $('#bigCookie').trigger('click');
                $('#goldenCookie').trigger('click');
            }, 1);
        }
    });
});