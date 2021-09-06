$ = require( 'jquery' );


// Smooth Scrolling With Id Example : #header

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 6000);
    }
});


