$(document).ready(function(){ 
    
    $("#pageflip").pageflipInit( {
        PageWidth: 400,
        PageHeight: 600,
        CoverWidth: 400,
        CoverHeight: 600,
        BookOffsetX:100,
        VerticalMode:true,
        ScaleToSinglePage:true,
        HardCover:false,
        CenterSinglePage:true,
        Margin:0,
        FullScale:true,
        AutoMaxHeight:true,
        AutoSinglePageMode:true,
        AutoScale:true,
        CenterSinglePage:true,
        RightToLeft:true,
        StartPage:1,
        //PageDataFile: "demobook.html",
        Copyright: Key.Copyright,
        Key: Key.Key
    });
    
    
    
    


}); //document ready END 
