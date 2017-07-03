$(document).ready(function() {
    $('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
    $('#menu-trigger').on('click', function() {
        $('#menu').slideToggle();
    });
});
