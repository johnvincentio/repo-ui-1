$(document).ready(function() {

    $('button').on('click', function() {
        if ($('img').attr('src').indexOf('wide') > -1) {
            $('img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/ada-small.jpeg');
        } else {
            $('img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/ada-wide.jpeg');
        }
    });
});
