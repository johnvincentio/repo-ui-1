
/*global document: false, $:false */

$(document).ready(function() {
    $(".fancybox-button").fancybox({
        prevEffect		: 'none',
        nextEffect		: 'none',
        closeBtn		: false,
        helpers		: {
            title	: { type : 'inside' },
            buttons	: {}
        }
    });
    $('.filter').on('click', function() {
         var $this = $(this);  // this => current element
        if (! $this.hasClass('active')) {
            $('.filter').removeClass('active');     // set active tab
            $this.addClass('active');   // add active class to current element
            var $filter = $this.data('rel');    // attr = 'data-rel'
            if ($filter == 'all') {
                $('.fancybox-button').attr('data-fancybox-group', 'gallery').not(':visible').fadeIn();
            } else {
                $('.fancybox-button').fadeOut(0).filter(function() {
                    return $(this).data('filter') == $filter;
                })
                .attr('data-fancybox-group', $filter)
                .fadeIn(1000);
            }
        }
    });
});
