$(document).ready(function () {

    var left = $('.l');
    var right = $('.r');

    $('button').on('click', function() {
      left.toggleClass('left');
      right.toggleClass('right');

      if (left.hasClass('left')) {
        $(left).children('figcaption').text('Floating Left');
      } else {
        $(left).children('figcaption').text('Not Floating');
      }

      if (right.hasClass('right')) {
        $(right).children('figcaption').text('Floating Right');
      } else {
        $(right).children('figcaption').text('Not Floating');
      }
    });
});
