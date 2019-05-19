$(document).ready(function(){ 
    modalHeight();
    openDetail();
    closeDetail();
    setWidth();
}); //document ready END 

function modalHeight(){
    
    if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
        console.log('tablet');
        $(".detail_wrap .fix .inner_wrap .left").css({"height":"407px"}); 

    }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
        console.log('mobile');
        $(".detail_wrap .fix .inner_wrap .left").css({"height":"196px"});  

    }else{
        console.log('pc');
        var getHeight = $(window).height()-200;
        $(".detail_wrap .fix .inner_wrap .left").css({"height":getHeight});
        $(".detail_wrap .fix .inner_wrap .right").css({"height":getHeight});
    }
}

function openDetail(){
    $(".wrap .product_wrap li").on('click',function(){
        $(".detail_wrap").fadeToggle(100);
        $(".wrap").css({"display":"none"});
    });
}

function closeDetail(){
    $(".detail_wrap .fix .inner_wrap .close_btn").on('click',function(){
        $(".detail_wrap").fadeToggle(100);
        $(".wrap").css({"display":"block"});
    });
}

function setWidth(){
    if(window.matchMedia("(max-width: 768px)").matches){
        var getLength = $(".detail_wrap .fix .inner_wrap .media_flow .left li").length;
        var widthVal = getLength*562;

        $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
        
        $(window).resize(function(){
            var getLength = $(".detail_wrap .fix .inner_wrap .media_flow .left li").length;
            var widthVal = getLength*562;

            $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal}); 
        });
    }
}