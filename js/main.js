$(document).ready(function(){ 
    
    $('.flexslider').flexslider({
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
    });
    
    gnbCss();
    hamMenu();
    subBannerLoad();
}); //document ready END 

function gnbCss(){
    
    var scroll =0,
        value1 =0,
        value2 =0,
        value3 =0,
        value4 =0; /*value 4 is for tablet and mobile*/
    
    function init(){
        scroll = $(window).scrollTop();
        value1 = scroll/100;
        value2 = scroll/80;
        value3 = (value2*(-255))+255; /*from 255 to 0*/
        value4 = -(value1-1);/*from 1 to 0*/
    };
        
    $(window).on('scroll', function(){
        init();
        
        if(value3 <=50){
            value3 = 50;
        }

        /*change menu color on scroll*/
        $(".gnb_wrap").css({"background":"rgba(255,255,255,"+value1+")"});
        $(".header li a").css({"color":"rgba("+value3+","+value3+","+value3+",1)"});
        $(".header li").css({"border-bottom-color":"rgba("+value3+","+value3+","+value3+",1)"});
        
        /*pc logo swith*/
        /*turn on black*/
        $(".gnb_wrap .logo_wrap .logo_b").css({"opacity":value1});
        /*turn off white*/
        $(".gnb_wrap .logo_wrap .logo_w").css({"opacity":value4});
        
        /*tablet, mobile logo swith*/
        /*turn on black*/
        $(".header_m .logo_m_b").css({"opacity":value1});
        /*turn off white*/
        $(".header_m .logo_b_w").css({"opacity":value4});
           
        /*tablet, mobile hamburger menu icon swith*/
        /*turn on black*/
        $(".header_m .ham_icon_b").css({"opacity":value1});
        /*turn off white*/
        $(".header_m .ham_icon_w").css({"opacity":value4});
    });
}

function hamMenu(){
    
    //open hamburger menu
    $(".gnb_wrap .header_m .ham_icon").on('click', function(){
        $(".ham_wrap").animate({"left":"0"},200,'swing');
    });
    //close hamburger menu
    $(".ham_wrap .ham_header li:nth-child(2)").on('click', function(){
        $(".ham_wrap").animate({"left":"-100vw"},200,'swing');
    });
    
}

function getUrl(){
    var url = window.location.href;
    console.log(url);
    
    var img1 = './img/sub_banner1.png',
        img2 = './img/sub_banner2.png',
        img3 = './img/sub_banner3.png';
    
    if(url == 'http://127.0.0.1:50231/product.html'){
        console.log('product page');
        $(".sub_banner").css({"background-image":"url("+img1+")"});
        $(".sub_banner .txt p").append('Product');
        $(".sub_banner .txt span").append('높은 품질의 재료를 사용하는것, 덴모빌리');
    }else if(url == 'http://127.0.0.1:50231/material.html'){
        console.log('material page');
        $(".sub_banner").css({"background-image":"url("+img2+")"});
        $(".sub_banner .txt p").append('Material');
        $(".sub_banner .txt span").append('높은 품질의 재료를 사용하는것, 덴모빌리');    
    }else if(url == 'http://127.0.0.1:50231/about.html'){
        console.log('about page');
        $(".sub_banner").css({"background-image":"url("+img3+")"});
        $(".sub_banner .txt p").append('About');
        $(".sub_banner .txt span").append('높은 품질의 재료를 사용하는것, 덴모빌리');        
    }
}

function subBannerLoad(){
    $(document).ready(function(){
        $(".sub_banner").animate({"opacity":"1"},600);
    });
}