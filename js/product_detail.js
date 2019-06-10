$(document).ready(function(){ 
    modalHeight();
    openDetail();
    closeDetail();
}); //document ready END 

function modalHeight(){
    if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
        $(".detail_wrap .fix .inner_wrap .left").css({"height":"407px"}); 

    }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
        $(".detail_wrap .fix .inner_wrap .left").css({"height":"196px"});  

    }else{
        var getHeight = $(window).height()-200;
        $(".detail_wrap .fix .inner_wrap .left").css({"height":getHeight});
        $(".detail_wrap .fix .inner_wrap .right").css({"height":getHeight});
    }
}

function openDetail(){
    
    var widthVal = 0;
    var fileExt = {},
        fileExt1=".png";
    
    $(".wrap .product_wrap li").on('click',function(){
        //html, body overflow:hidden
        $("html").css({"overflow":"hidden"});
        $("body").css({"overflow":"hidden"});
        
        $(".detail_wrap").fadeToggle(100);
        $(".wrap").css({"display":"none"});
        
        var folderName = $(this).text();
        var finfolderName = folderName.replace(/\s+/g,'_');
        
        $(".detail_wrap .fix .inner_wrap .right h3").append(folderName);
        
        console.log(finfolderName);
        if(finfolderName=='ENOVA_AQUACLEAN'){
            //for product with 6 images 
            for(var i=1; i<=6; i++){
                var $imgSrc = "./img/product_detail/"+finfolderName+"/"+i+".png";

                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+")").append('<img src="">');
                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") img").attr('src',$imgSrc);
            }
            
            var getLength = $(".detail_wrap .fix .inner_wrap .left li").find('img').length;
            
            if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
                widthVal = getLength*562;
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
                widthVal = getLength*270; 
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }
        }else if(finfolderName=='PANDORA_AQUACLEAN'){
            //for product with 7 images 
            for(var i=1; i<=7; i++){
                var $imgSrc = "./img/product_detail/"+finfolderName+"/"+i+".png";

                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+")").append('<img src="">');
                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") img").attr('src',$imgSrc);
            } 
            
            var getLength = $(".detail_wrap .fix .inner_wrap .left li").find('img').length;
            
            if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
                widthVal = getLength*562;
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
                widthVal = getLength*270; 
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }
        }else{
            //for product with 5 images
            for(var i=1; i<=5; i++){
                var $imgSrc = "./img/product_detail/"+finfolderName+"/"+i+".png";

                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+")").append('<img src="">');
                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") img").attr('src',$imgSrc);
            } 
            
            var getLength = $(".detail_wrap .fix .inner_wrap .left li").find('img').length;
            
            if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
                widthVal = getLength*562;
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
                widthVal = getLength*270; 
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }
        }

/*
        $.ajax({
            url: '/img/product_detail/'+finfolderName+'/',
            success: function (data) {
               //List all png or jpg or gif file names in the page
               $(data).find("a:contains(" + fileExt1 + ")").each(function () {
                   $(".detail_wrap .fix .inner_wrap .left").append("<li></li>");
               });
                
                var elLength = $(data).find("a:contains(" + fileExt1 + ")").length;
                console.log('elLength'+elLength);

                setWidth(elLength);
            } 
        });

        function setWidth(elLength){
            for(var i=1; i<elLength+1; i++){
                var $imgSrc = "./img/product_detail/"+finfolderName+"/"+i+".png";
                console.log('appeddeded');
                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") ").append('<img src="">');
                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") img").attr('src',$imgSrc);
            }

            var getLength = $(".detail_wrap .fix .inner_wrap .left li").find('img').length;

            if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
                widthVal = getLength*562;
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
                widthVal = getLength*270; 
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }
        }
*/
    });
}

function closeDetail(){
    $(".detail_wrap .fix .inner_wrap .close_btn").on('click',function(){
        //html, body overflow:auto
        $("html").css({"overflow":"auto"});
        $("body").css({"overflow":"auto"});
        
        $(".detail_wrap").fadeToggle(100);
        $(".wrap").css({"display":"block"});
        
        $(".detail_wrap .fix .inner_wrap .left li img").remove();
        $(".detail_wrap .fix .inner_wrap .right h3").empty();
    });
}