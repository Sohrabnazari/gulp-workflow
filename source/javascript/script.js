(function ($) {
    /*--------------------------------------------------------------
     *-------------------- Add class for loading button
     *-------------------------------------------------------------*/
    $(".loading").click(function(e){
        $(this).addClass('play');
    });
    /*--------------------------------------------------------------
     *-------------------- Close button for alerts
     *-------------------------------------------------------------*/
    $(".alert.close .close").click(function(e){
        $(this).parent().fadeOut();
    });
    /*--------------------------------------------------------------
     *-------------------- Active Slider
     *-------------------------------------------------------------*/
    $("#slider").responsiveSlides({
        speed: 800,
        auto: true,
        pager: true,
        nav: true
      });
})(jQuery);