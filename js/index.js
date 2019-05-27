$(document).ready(function(){ 
    checkBanner();
    customPager();
    bxSlider();
    mediaMatch();
    matAddClass();
}); //document ready END 

function moreBtn(){
    $(".wrap .section .more_btn").on('mouseenter',function(){
        $(".wrap .section .more_btn a").stop().animate({"color":"rgba(255,255,255,1)"},200);
        $(".wrap .section .more_btn").stop().animate({"backgroundColor":"rgba(50,50,50,1)"},200);
    });
    $(".wrap .section .more_btn").on('mouseleave',function(){
        $(".wrap .section .more_btn a").stop().animate({"color":"rgba(50,50,50,1)"},200);
        $(".wrap .section .more_btn").stop().animate({"backgroundColor":"rgba(255,255,255,1)"},200);
    });
}

function checkBanner(){
    window.setInterval(function(){

        var target = $(".flexslider .flex-control-nav").find('.flex-active').text();
        var value = parseInt(target);

        //highlighting banner title
        //turn down all banner title opacity
        $(".flexslider .banner_title li").css({"color":"rgba(255,255,255,0.5)"});
        $(".flexslider .banner_title li span").css({"color":"rgba(255,255,255,0.5)"});
        //turn up selected title opacity
        $(".flexslider .banner_title li:nth-child("+value+")").css({"color":"rgba(255,255,255,1)"});
        //turn up selected title opacity
        $(".flexslider .banner_title li:nth-child("+value+") span").css({"color":"rgba(255,255,255,1)"});

        if(window.matchMedia("(max-width:415px)").matches){
            //turn down all banner title opacity
            $(".flexslider .banner_title li").css({"display":"none"});
            //turn up selected title opacity
            $(".flexslider .banner_title li:nth-child("+value+")").css({"display":"block"});    
        }

        //banner animation
        $(".flex-control-nav li a").css({"animation":"none"});

        if(value == 1){
            $(".flexslider .slides .image_wrap2 div").css({"animation":"none"});
            $(".flexslider .slides .image_wrap1 div").css({"animation":"bannerAni 8s ease forwards"});

            $(".flex-control-nav li:nth-child(1) a").css({"animation":"progressBar 5s forwards"});
        }else if( value == 2){
            $(".flexslider .slides .image_wrap3 div").css({"animation":"none"});
            $(".flexslider .slides .image_wrap2 div").css({"animation":"bannerAni2 8s ease forwards"});

            $(".flex-control-nav li:nth-child(2) a").css({"animation":"progressBar 5s forwards"});
        }else if( value == 3){
            $(".flexslider .slides .image_wrap1 div").css({"animation":"none"});
            $(".flexslider .slides .image_wrap3 div").css({"animation":"bannerAni 8s ease forwards"});

            $(".flex-control-nav li:nth-child(3) a").css({"animation":"progressBar 5s forwards"});
        }else{
            $(".flexslider .slides .image_wraps div").css({"animation":"none"}); 

            $(".flex-control-nav li a").css({"animation":"none"});
        }
    }, 50);
}

function customPager(){
    $('.custom-pager').append('1 / 13');
}

function bxSlider(){
    $('.slider').bxSlider({
        auto:true,
        pause:3000,
        speed:800,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:3,
        moveSlides:1,
        slideWidth:400,
        //slideMargin:20,
        responsive:true,
        shrinkItems:true,
        pager:false,
        onSliderLoad: function (currentIndex){
            $('.custom-pager').text(currentIndex + 1 + ' / ' + $('.slider > li:not(.bx-clone)').length);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('.custom-pager').text(newIndex + 1 + ' / ' + $('.slider > li:not(.bx-clone)').length);
        },
        onSliderLoad: function (){
            $('.bx-controls-direction').hide();
            $('.bx-wrapper').hover(
                function () { $('.bx-controls-direction').fadeIn(200); },
                function () { $('.bx-controls-direction').fadeOut(200); }
            );
        }
    });
}

function matAddClass(){
    $(".wrap .section2 ul li").on('click',function(){
        $(".wrap .section2 ul li").removeClass("checkIndex");
        $(this).addClass("checkIndex");
    });
}

function matHover(){
    $(".wrap .section2 ul li").on('mouseenter', function(){
        var i = $(this).index()+1;
        //this change opacity
        $(this).animate({"opacity":"1"},300);
        //logo position change
        $(".wrap .section2 ul li:nth-child("+i+") .mat_logo").stop().animate({"bottom":"125px"},300);
        //detail button position change
        $(".wrap .section2 ul li:nth-child("+i+") .detail").stop().animate({"bottom":"80px","opacity":"1"},300);
    });

    $(".wrap .section2 ul li").on('mouseleave', function(){
        var i = $(this).index()+1;
        //this change opacity
        $(this).animate({"opacity":"0.9"},300);
        //logo position change
        $(".wrap .section2 ul li:nth-child("+i+") .mat_logo").stop().animate({"bottom":"90px"},300);
        //detail button position change
        $(".wrap .section2 ul li:nth-child("+i+") .detail").stop().animate({"bottom":"60px","opacity":"0"},300);
    });    
}

function mediaMatch(){
    if(window.matchMedia("(max-width:768px)").matches){
        //material animation stop working
    }else{
        //material animation working
        matHover();
        moreBtn();
    }
}