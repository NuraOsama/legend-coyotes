(function ($) {

    "use strict";
    new WOW().init();
    
       //preloader
      var  mainStatus  = $('#status'),
       mainBody = $('body'),
       mainPreloader  = $('#preloader');
  
       window.onload = function() {
        mainStatus.fadeOut();
        mainPreloader.delay(500).fadeOut('slow');
        mainBody.delay(500)
       }

    //scroll
    $("body").niceScroll({
    scrollspeed: 80,
    cursorcolor:"#ff9b00",
     cursorwidth:"8px",
     zindex: 2000,
     background:"#5f1f1fa6"
    })
    
})(jQuery);