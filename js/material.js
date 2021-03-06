$(document).ready(function(){ 
    tabActive();
    video();
}); //document ready END 

function tabActive(){
    
    var cookVal = $.cookie("mat");
    //console.log(cookVal);
    
    cntReset();
    
    if ($.cookie('mat') == 1) {
        $(".wrap .tabs li").removeClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").addClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").css({"opacity":"1"}); 
        
        //cnt3 display block
        $(".wrap .inner_wrap .cnt3").css({"display":"block"});
        //video display block
        $(".wrap .inner_wrap .mat_vid").css({"display":"block"});

        //material logo : tab 1
        $(".wrap .inner_wrap .mat_logo li").css({"display":"none"});
        $(".wrap .inner_wrap .mat_logo li:nth-child(1)").css({"display":"block"});

        //material banners : tab 1
        $(".wrap .inner_wrap .mat_banner").css({"background-image":"url(../img/material/mat_banner1.png)"});

        //material content images : tab 1
        $(".wrap .inner_wrap .cnt1 .img").css({"background-image":"url(../img/material/tab1/cnt1.png)"});
        $(".wrap .inner_wrap .cnt2 .img").css({"background-image":"url(../img/material/tab1/cnt2.png)"});
        $(".wrap .inner_wrap .cnt3 .img").css({"background-image":"url(../img/material/tab1/cnt3.png)"});
        
        if(window.matchMedia("(max-width:415px)").matches){
            //cnt1 padding top on mobile = 40 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            
            //tab border css
            $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696"});
            $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696","border-left":"none"});
            $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696","border-top":"none"});
            $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696","border-top":"none","border-left":"none"}); 
            
        }else{
            //cnt1 padding top on pc = 60 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
        }
        tab1Append(); 
        vidTitleAquaClean();
        
    }else if($.cookie('mat') == 2){
        $(".wrap .tabs li").removeClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").addClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").css({"opacity":"1"});
        
        //cnt3 display none
        $(".wrap .inner_wrap .cnt3").css({"display":"none"});
        //video display block
        $(".wrap .inner_wrap .mat_vid").css({"display":"block"});
        
        //material logo : tab 2
        $(".wrap .inner_wrap .mat_logo li").css({"display":"none"});
        $(".wrap .inner_wrap .mat_logo li:nth-child(2)").css({"display":"block"});

        //material banners : tab 2
        $(".wrap .inner_wrap .mat_banner").css({"background-image":"url(../img/material/mat_banner2.png)"});

        //material content images : tab 2
        $(".wrap .inner_wrap .cnt1 .img").css({"background-image":"url(../img/material/tab2/cnt1.png)"});
        $(".wrap .inner_wrap .cnt2 .img").css({"background-image":"url(../img/material/tab2/cnt2.png)"});
        $(".wrap .inner_wrap .cnt3 .img").css({"background-image":"url(../img/material/tab2/cnt3.png)"});
        
        if(window.matchMedia("(max-width:415px)").matches){
            //cnt1 padding top on mobile = 40 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            
            //tab border css
            $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696"});
            $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696","border-right":"none"});
            $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696","border-top":"none"});
            $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696","border-top":"none","border-left":"none"});

        }else{
            //cnt1 padding top on pc = 60 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"33px"});
        }
        tab2Append(); 
        vidTitleSunbrella();
        
    }else if($.cookie('mat') == 3){
        $(".wrap .tabs li").removeClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").addClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").css({"opacity":"1"});
        
        //cnt3 display block
        $(".wrap .inner_wrap .cnt3").css({"display":"block"});
        //video display block
        $(".wrap .inner_wrap .mat_vid").css({"display":"block"});
        
        //material logo : tab 3
        $(".wrap .inner_wrap .mat_logo li").css({"display":"none"});
        $(".wrap .inner_wrap .mat_logo li:nth-child(3)").css({"display":"block"});

        //material banners : tab 3
        $(".wrap .inner_wrap .mat_banner").css({"background-image":"url(../img/material/mat_banner3.png)"});

        //material content images : tab 3
        $(".wrap .inner_wrap .cnt1 .img").css({"background-image":"url(../img/material/tab3/cnt1.png)"});
        $(".wrap .inner_wrap .cnt2 .img").css({"background-image":"url(../img/material/tab3/cnt2.png)"});
        $(".wrap .inner_wrap .cnt3 .img").css({"background-image":"url(../img/material/tab3/cnt3.png)"});
        
        if(window.matchMedia("(max-width:415px)").matches){
            //cnt1 padding top on mobile = 40 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            
            //tab border css
            $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696"});
            $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696","border-bottom":"none"});
            $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696","border-left":"none","border-bottom":"none"});
            $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696","border-left":"none"});   
        }else{
            //cnt1 padding top on pc = 60 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
        }
        tab3Append();
        vidTitleSmart();
        
    }else if($.cookie('mat') == 4){
        $(".wrap .tabs li").removeClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").addClass('active');
        $(".wrap .tabs li:nth-child("+cookVal+")").css({"opacity":"1"});
        
        //cnt3 display block
        $(".wrap .inner_wrap .cnt3").css({"display":"block"});
        //video display none
        $(".wrap .inner_wrap .mat_vid").css({"display":"none"});
        
        //material logo : tab 4
        $(".wrap .inner_wrap .mat_logo li").css({"display":"none"});
        $(".wrap .inner_wrap .mat_logo li:nth-child(4)").css({"display":"block"});

        //material banners : tab 4
        $(".wrap .inner_wrap .mat_banner").css({"background-image":"url(../img/material/mat_banner4.png)"});

        //material content images : tab 4
        $(".wrap .inner_wrap .cnt1 .img").css({"background-image":"url(../img/material/tab4/cnt1.png)"});
        $(".wrap .inner_wrap .cnt2 .img").css({"background-image":"url(../img/material/tab4/cnt2.png)"});
        $(".wrap .inner_wrap .cnt3 .img").css({"background-image":"url(../img/material/tab4/cnt3.png)"});
        
        if(window.matchMedia("(max-width:415px)").matches){
            //cnt1 padding top on mobile = 0 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"0px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            
            //tab border css
            $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696"});
            $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696","border-bottom":"none"});
            $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696","border-left":"none","border-bottom":"none"});
            $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696","border-right":"none"}); 
        }else{
            //cnt1 padding top on pc = 20 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"20px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
        }
        tab4Append();
        
    }else{
        
        $(".wrap .tabs li").removeClass('active');
        $(".wrap .tabs li:nth-child(1)").addClass('active');
        $(".wrap .tabs li:nth-child(1)").css({"opacity":"1"}); 
        
        //cnt3 display block
        $(".wrap .inner_wrap .cnt3").css({"display":"block"});
        //video display block
        $(".wrap .inner_wrap .mat_vid").css({"display":"block"});
        
        //material logo : tab 1
        $(".wrap .inner_wrap .mat_logo li").css({"display":"none"});
        $(".wrap .inner_wrap .mat_logo li:nth-child(1)").css({"display":"block"});

        //material banners : tab 1
        $(".wrap .inner_wrap .mat_banner").css({"background-image":"url(../img/material/mat_banner1.png)"});

        //material content images : tab 1
        $(".wrap .inner_wrap .cnt1 .img").css({"background-image":"url(../img/material/tab1/cnt1.png)"});
        $(".wrap .inner_wrap .cnt2 .img").css({"background-image":"url(../img/material/tab1/cnt2.png)"});
        $(".wrap .inner_wrap .cnt3 .img").css({"background-image":"url(../img/material/tab1/cnt3.png)"});

        if(window.matchMedia("(max-width:415px)").matches){
            //cnt1 padding top on mobile = 40 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
        }else{
            //cnt1 padding top on pc = 60 due to video display block
            $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
            $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
        }
        tab1Append(); 
        vidTitleAquaClean();
    }

    $(".wrap .tabs li").on('click', function(){
        //reset cookie
        $.cookie("mat", null);
        
        //get index
        var i = $(this).index()+1;
        //console.log(i);

        if(window.matchMedia("(max-width:415px)").matches){
            //tab active css different in mobile - borders change
            $(".wrap .tabs li").removeClass('active');
            $(".wrap .tabs li").css({"opacity":"0.5"});
            $(this).css({"opacity":"1","border":"1px solid #969696"});
            
            if(i == 1){
                $(".wrap .tabs li:nth-child(1)").css({"font-weight":"bold"});
                
                $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696","border-left":"none"});
                $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696","border-top":"none"});
                $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696","border-top":"none","border-left":"none"});   
            }else if(i == 2){
                $(".wrap .tabs li:nth-child(2)").css({"font-weight":"bold"});
                
                $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696","border-right":"none"});
                $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696","border-top":"none"});
                $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696","border-top":"none","border-left":"none"});
            }else if(i == 3){
                $(".wrap .tabs li:nth-child(3)").css({"font-weight":"bold"});
                
                $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696","border-bottom":"none"});
                $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696","border-left":"none","border-bottom":"none"});
                $(".wrap .tabs li:nth-child(4)").css({"border":"1px solid #969696","border-left":"none"});        
            }else{
                $(".wrap .tabs li:nth-child(4)").css({"font-weight":"bold"});
                
                $(".wrap .tabs li:nth-child(1)").css({"border":"1px solid #969696","border-bottom":"none"});
                $(".wrap .tabs li:nth-child(2)").css({"border":"1px solid #969696","border-left":"none","border-bottom":"none"});
                $(".wrap .tabs li:nth-child(3)").css({"border":"1px solid #969696","border-right":"none"});     
            }
            
        }else{
            //tab active on tablet and pc
            $(".wrap .tabs li").removeClass('active');
            $(".wrap .tabs li").css({"opacity":"0.5"});
            $(this).addClass('active');
            $(this).css({"opacity":"1"});  
        }

        //material logo : tab 1,2,3
        $(".wrap .inner_wrap .mat_logo li").css({"display":"none"});
        $(".wrap .inner_wrap .mat_logo li:nth-child("+i+")").css({"display":"block"});

        //material banners : tab 1,2,3
        $(".wrap .inner_wrap .mat_banner").css({"background-image":"url(../img/material/mat_banner"+i+".png)"});

        //material content images : tab 1,2,3
        $(".wrap .inner_wrap .cnt1 .img").css({"background-image":"url(../img/material/tab"+i+"/cnt1.png)"});
        $(".wrap .inner_wrap .cnt2 .img").css({"background-image":"url(../img/material/tab"+i+"/cnt2.png)"});
        $(".wrap .inner_wrap .cnt3 .img").css({"background-image":"url(../img/material/tab"+i+"/cnt3.png)"});

        cntReset();

        if(i==1){
            //cnt3 display block
            $(".wrap .inner_wrap .cnt3").css({"display":"block"});
            //video display block
            $(".wrap .inner_wrap .mat_vid").css({"display":"block"});

            if(window.matchMedia("(max-width:415px)").matches){
                //cnt1 padding top on mobile = 40 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }else{
                //cnt1 padding top on pc = 60 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }
            tab1Append(); 
            vidTitleAquaClean();
            
        }else if(i==2){
            //cnt3 display none
            $(".wrap .inner_wrap .cnt3").css({"display":"none"});
            //video display block
            $(".wrap .inner_wrap .mat_vid").css({"display":"block"});
            if(window.matchMedia("(max-width:415px)").matches){
                //cnt1 padding top on mobile = 40 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }else{
                //cnt1 padding top on pc = 60 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"33px"});
            }
            tab2Append();
            vidTitleSunbrella();
            
        }else if(i==3){
            //cnt3 display block
            $(".wrap .inner_wrap .cnt3").css({"display":"block"});
            //video display block
            $(".wrap .inner_wrap .mat_vid").css({"display":"block"});
            if(window.matchMedia("(max-width:415px)").matches){
                //cnt1 padding top on mobile = 40 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"40px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }else{
                //cnt1 padding top on pc = 60 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"60px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }
            tab3Append();
            vidTitleSmart();
            
        }else{
            //cnt3 display block
            $(".wrap .inner_wrap .cnt3").css({"display":"block"});
            //video display none
            $(".wrap .inner_wrap .mat_vid").css({"display":"none"});
            if(window.matchMedia("(max-width:415px)").matches){
                //cnt1 padding top on mobile = 0 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"0px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }else{
                //cnt1 padding top on pc = 20 due to video display block
                $(".wrap .inner_wrap .cnt1").css({"padding-top":"20px"});
                $(".wrap .inner_wrap .cnt2").css({"padding-bottom":"0px"});
            }
            tab4Append();
        }   
    });
}

function cntReset(){
    //material : reset
    $(".wrap .inner_wrap .mat_int").empty();
    $(".wrap .inner_wrap .mat_abt li .title").empty();
    $(".wrap .inner_wrap .mat_abt li .info").empty();
    $(".wrap .inner_wrap .mat_cnt li .title").empty();
    $(".wrap .inner_wrap .mat_cnt li .cnt_txt").empty();
    $(".wrap .inner_wrap .mat_vid ul li:nth-child(1)").empty();
}

function tab1Append(){
    //tab1 : material introduction
    $(".wrap .inner_wrap .mat_int").append('아쿠아 패브릭 테크놀로지는 스페인 AQUACLEAN GROUP에서 개발한 소파 패브릭에 적용되는 고급 보호 기능입니다. 섬유 한 올 한 올에 눈에 보이지 않는 분자 수준의 코팅을 하여 먼지 및 이물질이 섬유에 침투하는 것을 방지합니다.'); 
    //tab1 : material about
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .title").append('아쿠아클린이란?');
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .info").append('아쿠아클린 기술은 물만으로도 얼룩을 제거할 수 있는 혁신적인 패브릭 처리 기술입니다. 아쿠아클린은 최소한의 시간을 투자하여 간단하게 패브릭을 관리할 수 있도록 해 줍니다.');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .title").append('아쿠아클린의 작용원리?');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .info").append('아쿠아클린 기술은 향상된 패브릭 보호 기술입니다. 이 공정을 통해 섬유 한올한올에 보이지 않는 분자 수준의 코팅을 하여 이물질이 섬유에 침투하는 것을 방지합니다.');

    //video
    $(".wrap .inner_wrap .mat_vid ul li:nth-child(1)").append("'아쿠아클린'");
    
    //cnt1
    $(".wrap .inner_wrap .cnt1 li .title").append('SAFE FRONT®는 진드기, 곰팡이, 박테리아 프로텍션입니다.');
    $(".wrap .inner_wrap .cnt1 li .cnt_txt").append('완벽한 위생 재질 커버로 패브릭에 있는 진드기, 곰팡이, 박테리아를 매우 친환경적이며 무해한 방법으로 제거해 줍니다. 자연적인 방법으로 보호막을 형성하여 집안에서 발생하는 먼지 진드기를 방지해 주는 기술입니다.');

    //cnt2
    $(".wrap .inner_wrap .cnt2 li .title").append('어떤 얼룩도 물만으로 손쉽게');
    $(".wrap .inner_wrap .cnt2 li .cnt_txt").append('소파에 얼룩이 묻어 지저분해지거나 묻은걸 잊고 있다가 나중에 발견할 때가 있습니다. 이제 그 어떠한 고민도 스트레스도 받지 않으셔도 됩니다. 아쿠아 패브릭 테크놀로지는 하루, 또는 그 이상의 시간이 지난 후에도 패브릭 소파의 얼룩을 물만으로 쉽게 제거할 수 있습니다.');

    //cnt3
    $(".wrap .inner_wrap .cnt3 li .title").append('애견과 함께할 수 있는 최적의 패브릭');
    $(".wrap .inner_wrap .cnt3 li .cnt_txt").append('패브릭 손상을 최소화하는 아쿠아클린의 테크놀로지는 반려동물로 인해 만들어지는 소파의 얼룩, 뜯김, 악취 등을 방지해줍니다.');
}

function tab2Append(){
    //tab2 : material introduction
    $(".wrap .inner_wrap .mat_int").append('Sunbrella®는 45 년 이상 캐주얼 가구, 주거용 가구, 천막, 선박 및 자동차 시장을 위한 기성능 소재에서 가장 인정 받고 신뢰받는 세계 No.1 브랜드입니다. 자외선 및 색바램을 방지하고 향균 처리가 되어 세균, 곰팡이, 균 등이 자라지 않습니다.'); 
    //tab2 : material about
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .title").append('선브렐라란?');
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .info").append('내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다.');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .title").append('선브렐라의 특징');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .info").append('내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다.');

    //video
    $(".wrap .inner_wrap .mat_vid ul li:nth-child(1)").append("'선브렐라'");
    
    //cnt1
    $(".wrap .inner_wrap .cnt1 li .title").append('아이의 건강을 위한 패브릭');
    $(".wrap .inner_wrap .cnt1 li .cnt_txt").append('Sunbrella Contract with Defiance® 직물은 규제가 엄격한 보건 환경에 적합하도록 항균 처리가 되어 세균, 곰팡이, 균 등이 자라지 않습니다. 또한 GREENGUARD Gold 등급 인증으로 실내 공기를 오염시키는 360가지 이상의 휘발성 유기 화합물(VOC) 배출량을 제한한 제품을 보장합니다.');

    //cnt2
    $(".wrap .inner_wrap .cnt2 li .title").append('시간이 지나도 변하지 않는 컬러');
    $(".wrap .inner_wrap .cnt2 li .cnt_txt").append('Sunbrella 섬유는 고성능의 자외선 안정성 염료를 코어 중심부까지 염색하는 세계 최고의 공법으로 오랜 시간이 지나도 변색되거나 씻겨 나가지 않고 원래의 색상을 유지합니다.');
}

function tab3Append(){
    //tab3 : material introduction
    $(".wrap .inner_wrap .mat_int").append('아쿠아 패브릭 테크놀로지는 스페인 AQUACLEAN GROUP에서 개발한 소파 패브릭에 적용되는 고급 보호 기능입니다. 섬유 한 올 한 올에 눈에 보이지 않는 분자 수준의 코팅을 하여 먼지 및 이물질이 섬유에 침투하는 것을 방지합니다.'); 
    //tab3 : material about
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .title").append('라이브스마트란?');
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .info").append('내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다.');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .title").append('라이브스마트의 작용원리?');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .info").append('내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다.');

    //video
    $(".wrap .inner_wrap .mat_vid ul li:nth-child(1)").append("'라이브스마트'");
    
    //cnt1
    $(".wrap .inner_wrap .cnt1 li .title").append('S4계절 내내 한결같은 원단');
    $(".wrap .inner_wrap .cnt1 li .cnt_txt").append('LiveSmart 패브릭은 얼룩 재연성 및 수분 리플렌트 마감으로 뛰어난 청결도와 지속적인 성능을 제공합니다. 당사의 모든 패브릭이 ASTM 성능 및 안전 표준을 충족합니다.');

    //cnt2
    $(".wrap .inner_wrap .cnt2 li .title").append('발수에 특화된 실용적인 신소재'+'<br>'+'LIVE SMART FABRIC');
    $(".wrap .inner_wrap .cnt2 li .cnt_txt").append('완벽한 발수처리로 액체가 흘렀을때 흡수를 억제해주고 오염이 되지 않는 견고한 마모성을 가진 최첨단 원단입니다.');

    //cnt3
    $(".wrap .inner_wrap .cnt3 li .title").append('내구성이 강한 실용적인 원단');
    $(".wrap .inner_wrap .cnt3 li .cnt_txt").append('LiveSmart 패브릭은 얼룩 재연성 및 수분 리플렌트 마감으로 뛰어난 청결도와 지속적인 성능을 제공합니다. 당사의 모든 패브릭이 ASTM 성능 및 안전 표준을 충족합니다.');
}

function tab4Append(){
    //tab3 : material introduction
    $(".wrap .inner_wrap .mat_int").append('“덴모빌리는 이태리 최상급 가죽만을 사용합니다.” 부드럽고 내구성이 좋은 가죽만을 사용하여 오랜동안 편한 사용감을 느낄 수 있고 또한 다채로운 색감의 원단으로 다양한 선택지를 제공합니다.'); 
    //tab3 : material about
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .title").append('덴모빌리의 가죽의 특징 01');
    $(".wrap .inner_wrap .mat_abt li:nth-child(1) .info").append('내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다.');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .title").append('덴모빌리 가죽만의 특징 02');
    $(".wrap .inner_wrap .mat_abt li:nth-child(2) .info").append('내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다. 내용이 노출됩니다.');

    //cnt1
    $(".wrap .inner_wrap .cnt1 li .title").append('텍스트가 노출됩니다. 텍스트가 노출됩니다.');
    $(".wrap .inner_wrap .cnt1 li .cnt_txt").append('텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다.');

    //cnt2
    $(".wrap .inner_wrap .cnt2 li .title").append('텍스트가 노출됩니다. 텍스트가 노출됩니다.');
    $(".wrap .inner_wrap .cnt2 li .cnt_txt").append('텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다.');

    //cnt3
    $(".wrap .inner_wrap .cnt3 li .title").append('텍스트가 노출됩니다. 텍스트가 노출됩니다.');
    $(".wrap .inner_wrap .cnt3 li .cnt_txt").append('텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다. 텍스트가 노출됩니다.');
}

function video(){
    openVid();
    closeVid();
    vidTop();
}

function openVid(){
    $(".wrap .inner_wrap .mat_vid").on('click',function(){
        //$(".video_wrap").css({"display":"block"});
        $(".video_wrap").fadeToggle(200);
    });
}

function closeVid(){
    $(".video_wrap .blanket .inner_wrap .close_btn").on('click',function(){
        $(".video_wrap").fadeToggle(200);
    });
}

function vidTop(){
    var winHeight = ($(window).height())/2;
    var vidHeight = ($(".video_wrap .blanket .inner_wrap").height())/2;
    var value = winHeight-vidHeight;
    
    $(".video_wrap .blanket .inner_wrap").css({"margin-top":value});
    
    //change close button position on tablet and mobile
    if (window.matchMedia("(max-width:768px)").matches){

        $(".video_wrap .blanket .inner_wrap .close_btn").css({"top":-value+30});          
    }
}

function vidTitleAquaClean(){
    if (window.matchMedia("(min-width:769px) and (max-width:1024px)").matches){
        //Tablet 가로
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"230px"});
    }else if(window.matchMedia("(min-width:416px) and (max-width:768px)").matches){
        //Tablet 세로
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"190px"});
    }else if(window.matchMedia("(max-width:415px)").matches){
        //Mobile 
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"185px"});
    }else{
        //PC
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"230px"});
    }
}

function vidTitleSunbrella(){
    if (window.matchMedia("(min-width:769px) and (max-width:1024px)").matches){
        //Tablet 가로
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"210px"});
    }else if(window.matchMedia("(min-width:416px) and (max-width:768px)").matches){
        //Tablet 세로
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"175px"});
    }else if(window.matchMedia("(max-width:415px)").matches){
        //Mobile   
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"168px"});
    }else{
        //PC
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"210px"});
    }
}

function vidTitleSmart(){
    if (window.matchMedia("(min-width:769px) and (max-width:1024px)").matches){
        //Tablet 가로
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"250px"});
    }else if(window.matchMedia("(min-width:416px) and (max-width:768px)").matches){
        //Tablet 세로
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"207px"});
    }else if(window.matchMedia("(max-width:415px)").matches){
        //Mobile   
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"200px"});
    }else{
        //PC
        $(".wrap .inner_wrap .mat_vid ul").css({"width":"247px"});
    }
}

function checkCookie(){
    var result = $.cookie("mat");
    //console.log(result);
}