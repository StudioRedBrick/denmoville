$(document).ready(function(){ 
    insertImg();
    filter();
    loadProduct();
}); //document ready END 

function insertImg(){
    var getLength = $(".wrap .product_wrap li").length;

    for(i=1; i<=getLength; i++){
        $(".wrap .product_wrap li:nth-child("+i+")").css({"background-image":"url(./img/product/p"+i+".png)","background-reepat":"no-repeat","background-size":"cover","background-position":"center"});

        if(i==1){
            $(".product_wrap li:nth-child("+i+") p").append("ARIA LEATHER");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s1");
        }else if(i==2){
            $(".product_wrap li:nth-child("+i+") p").append("SUNSHINE SUNBRELLA NAVY");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s2");
        }else if(i==3){
            $(".product_wrap li:nth-child("+i+") p").append("SUNSHINE SUNBRELLA GREY");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s2");
        }else if(i==4){
            $(".product_wrap li:nth-child("+i+") p").append("GREECE AQUACLEAN GREY");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s3");
        }else if(i==5){
            $(".product_wrap li:nth-child("+i+") p").append("GREECE AQUACLEAN NAVY");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s3");
        }else if(i==6){
            $(".product_wrap li:nth-child("+i+") p").append("VENICE AQUACLEAN");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s4");
        }else if(i==7){
            $(".product_wrap li:nth-child("+i+") p").append("ARIA AQUACLEAN 세미형");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s5");
        }else if(i==8){
            $(".product_wrap li:nth-child("+i+") p").append("ARIA AQUACLEAN 일자형");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s5");
        }else if(i==9){
            $(".product_wrap li:nth-child("+i+") p").append("ENOVA AQUACLEAN");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s6");
        }else if(i==10){
            $(".product_wrap li:nth-child("+i+") p").append("TOMMY AQUACLEAN");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s7");
        }else if(i==11){
            $(".product_wrap li:nth-child("+i+") p").append("PANDORA AQUACLEAN");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m1 s8");
        }else if(i==12){
            $(".product_wrap li:nth-child("+i+") p").append("DAVINCHI");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m2 s9");
        }else if(i==13){
            $(".product_wrap li:nth-child("+i+") p").append("BERLIN");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m2 s10");
        }else if(i==14){
            $(".product_wrap li:nth-child("+i+") p").append("SIENA");
            $(".product_wrap li:nth-child("+i+")").addClass("m0 m2 s11");
        }
    }
}

function filter(){
//when 1st list is clicked
    $(".wrap .filter_wrap .inner_wrap1 .filter li").on('click',function(){
        var i = $(this).index();
        var getTxt = $(this).text();

        //remove txt in input1
        $(".wrap .filter_wrap .inner_wrap1 .input p").empty();
        //append txt in input1
        $(".wrap .filter_wrap .inner_wrap1 .input p").append(getTxt);

        //product filtering
        $(".product_wrap li").css({"display":"none"});   
        $(".product_wrap li.m"+i).css({"display":"block"}); 

        //reset 2nd input txt
        $(".wrap .filter_wrap .inner_wrap2 .input p").empty();
        $(".wrap .filter_wrap .inner_wrap2 .input p").append('--');

        //reset product li float
        var lengthVal = $(".wrap .product_wrap li:visible").length;
        console.log(lengthVal);
        if(lengthVal == 1){
            $(".wrap .product_wrap li:nth-child(even)").css({"float":"none"});   
        }else{
            $(".wrap .product_wrap li:nth-child(even):visible").css({"float":"right"});  
        }

        if(lengthVal < 8){
            $(".wrap .see_more").css({"display":"none"});
        }else{
            //turn off all product list
            $(".wrap .product_wrap li").css({"display":"none"});
            //only show first 8 lists
            for(i=1; i<=8; i++){
                $(".wrap .product_wrap li:nth-child("+i+")").css({"display":"block"});
            }
            $(".wrap .see_more").css({"display":"block"});    
        }

        //reset arrow button
        $(".wrap .filter_wrap .inner_wrap1 .input span").removeClass("active");
        $(".wrap .filter_wrap .inner_wrap2 .input span").removeClass("active");

        //close 1st filter list
        $(this).parent().stop().fadeOut(200);
    });

//when 2nd list is clicked
    $(".wrap .filter_wrap .inner_wrap2 .filter li").on('click',function(){
        var i = $(this).index();
        var getTxt = $(this).text();
        var getParentTxt = $(".wrap .filter_wrap .inner_wrap1 .input p").text();

        //remove txt in input2
        $(".wrap .filter_wrap .inner_wrap2 .input p").empty();
        //append txt in input2
        $(".wrap .filter_wrap .inner_wrap2 .input p").append(getTxt);

        //product filtering
        $(".product_wrap li").css({"display":"none"});  

        if(getTxt == 'Aria Leather'){
            $(".product_wrap li.s1").css({"display":"block"});     
        }else if(getTxt == 'Sunshine Sunbrella'){
            $(".product_wrap li.s2").css({"display":"block"});
        }else if(getTxt == 'Greece Aquaclean'){
            $(".product_wrap li.s3").css({"display":"block"});
        }else if(getTxt == 'Venice Aquaclean'){
            $(".product_wrap li.s4").css({"display":"block"});
        }else if(getTxt == 'Aria Aquaclean'){
            $(".product_wrap li.s5").css({"display":"block"});
        }else if(getTxt == 'Enova Aquaclean'){
            $(".product_wrap li.s6").css({"display":"block"});
        }else if(getTxt == 'Tommy Aquaclean'){
            $(".product_wrap li.s7").css({"display":"block"});
        }else if(getTxt == 'Pandora Aquaclean'){
            $(".product_wrap li.s8").css({"display":"block"});
        }else if(getTxt == 'Davinchi'){
            $(".product_wrap li.s9").css({"display":"block"});
        }else if(getTxt == 'Berlin'){
            $(".product_wrap li.s10").css({"display":"block"});
        }else if(getTxt == 'Siena'){
            $(".product_wrap li.s11").css({"display":"block"});
        }else{
            if(getParentTxt == '거실가구'){
                $(".product_wrap li.m1").css({"display":"block"});
            }else if(getParentTxt == '주방가구'){
                $(".product_wrap li.m2").css({"display":"block"});         
            }else if(getParentTxt == '침실가구'){
                $(".product_wrap li.m3").css({"display":"block"});     
            }
        }

        //reset product li float
        var lengthVal = $(".wrap .product_wrap li:visible").length;
        console.log(lengthVal);
        if(lengthVal == 1){
            $(".wrap .product_wrap li:nth-child(even)").css({"float":"none"});   
        }else{
            $(".wrap .product_wrap li:nth-child(even):visible").css({"float":"right"});  
        }

        if(lengthVal < 8){
            $(".wrap .see_more").css({"display":"none"});
        }else{
            //turn off all product list
            $(".wrap .product_wrap li").css({"display":"none"});
            //only show first 8 lists
            for(i=1; i<=8; i++){
                $(".wrap .product_wrap li:nth-child("+i+")").css({"display":"block"});
            }
            $(".wrap .see_more").css({"display":"block"});    
        }

        //reset arrow button
        $(".wrap .filter_wrap .inner_wrap1 .input span").removeClass("active");
        $(".wrap .filter_wrap .inner_wrap2 .input span").removeClass("active");

        //close 2nd filter list
        $(this).parent().stop().fadeOut(200);
    });

    //open filter list 1
    $(".wrap .filter_wrap .inner_wrap1 .input").on('click',function(){

        $(".wrap .filter_wrap .inner_wrap1 .filter").stop().fadeToggle(200);
        $(".wrap .filter_wrap .inner_wrap2 .filter").stop().fadeOut(200);

        $(".wrap .filter_wrap .inner_wrap2 .input span").removeClass("active");
        //arrow button
        $(".wrap .filter_wrap .inner_wrap1 .input span").toggleClass("active");
    });

    //open filter list 2
    $(".wrap .filter_wrap .inner_wrap2 .input").on('click',function(){

        $(".wrap .filter_wrap .inner_wrap1 .filter").stop().fadeOut(200);

        var inputTxt = $(".wrap .filter_wrap .inner_wrap1 .input p").text();

        if(inputTxt == '거실가구'){
            $(".wrap .filter_wrap .inner_wrap2 .filter1").stop().fadeToggle(200);
        }else if(inputTxt == '주방가구'){
            $(".wrap .filter_wrap .inner_wrap2 .filter2").stop().fadeToggle(200);     
        }else if(inputTxt == '침실가구'){
            $(".wrap .filter_wrap .inner_wrap2 .filter3").stop().fadeToggle(200);     
        }else{
            $(".wrap .filter_wrap .inner_wrap2 .filter").css({"display":"none"});
        }

        $(".wrap .filter_wrap .inner_wrap1 .input span").removeClass("active");
        //arrow button
        $(".wrap .filter_wrap .inner_wrap2 .input span").toggleClass("active");
    });
}

function loadProduct(){
    //only show 8 products on load
    $(".wrap .product_wrap li").css({"display":"none"});
    for(i=1; i<=8; i++){
        $(".wrap .product_wrap li:nth-child("+i+")").css({"display":"block"});
    }

    //load remaining product when see more is clicked
    $(".wrap .see_more").on('click', function(){
        var getInput1 = $(".wrap .inner_wrap1 .input p").text();
        console.log(getInput1);
        if(getInput1 == '거실가구'){
            $(".wrap .product_wrap li.m1").css({"display":"block"});
        }else if(getInput1 == '주방가구'){
            $(".wrap .product_wrap li.m2").css({"display":"block"});     
        }else if(getInput1 == '침실가구'){
            $(".wrap .product_wrap li.m3").css({"display":"block"});     
        }else{
            //'전체보기'일경우, show all product
            $(".wrap .product_wrap li").css({"display":"block"}); 
        }
        //turn off see more button
        $(".wrap .see_more").css({"display":"none"});
    });
}