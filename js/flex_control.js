$(document).ready(function(){ 
    
    var $flexslider = $('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshow:true,
        //itemWidth: 210,
        itemMargin: 0,
        minItems: 1,
        maxItems: 1,
        animationDuration: 1000,
        move:1,
        slideshowSpeed:5000,
        controlNav:true,
        directionNav:false,
        touch:false,
        useCss:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        pauseOnAction:true,
        after: function($flexslider){
            /* auto-restart player if paused after action */
            if (!$flexslider.playing) {
              $flexslider.play();
            }    
        }
    });
}); //document ready END 