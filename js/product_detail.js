$(document).ready(function(){ 
    modalHeight();
    openDetail();
    closeDetail();
    directUrl();
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
        $(".detail_wrap").fadeToggle(100);
        $(".wrap").css({"display":"none"});
        
        var folderName = $(this).text();
        $(".detail_wrap .fix .inner_wrap .right h3").append(folderName);
        
        $.ajax({
            //This will retrieve the contents of the folder if the folder is configured as 'browsable'
            url: '../img/product_detail/'+folderName+'/',
            success: function (data) {
               //List all png or jpg or gif file names in the page
               $(data).find("a:contains(" + fileExt1 + ")").each(function () {
                   var filename = this.href.replace(window.location.host, "").replace("http:///", "");
                   
                   $(".detail_wrap .fix .inner_wrap .left").append( "<li></li>");
               });
                
                var elLength = $(data).find("a:contains(" + fileExt1 + ")").length;

                setWidth(elLength);
            } 
        });
        
        function setWidth(elLength){
            for(var i=1; i<elLength+1; i++){
                var $imgSrc = "./img/product_detail/"+folderName+"/"+i+".png";

                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") ").append('<img src="">');
                $(".detail_wrap .fix .inner_wrap .left li:nth-child("+i+") img").attr('src',$imgSrc);
            }

            var getLength = $(".detail_wrap .fix .inner_wrap .left li").find('img').length;
                console.log("getLength"+getLength);

            if(window.matchMedia("(min-width: 416px) and (max-width: 768px)").matches){
                widthVal = getLength*562;
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }else if(window.matchMedia("(min-width: 300px) and (max-width: 415px)").matches){
                widthVal = getLength*270; 
                $(".detail_wrap .fix .inner_wrap .left").css({"width":widthVal});
            }
        }
    });
}

function closeDetail(){
    $(".detail_wrap .fix .inner_wrap .close_btn").on('click',function(){
        $(".detail_wrap").fadeToggle(100);
        $(".wrap").css({"display":"block"});
        
        $(".detail_wrap .fix .inner_wrap .left li").remove();
        $(".detail_wrap .fix .inner_wrap .right h3").empty();
    });
}

function directUrl(){
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    console.log(dir);
}