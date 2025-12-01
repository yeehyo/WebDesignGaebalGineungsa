$(function(){
    //슬라이더
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginTop: -350 * currentIndex + "px"},600);
        
        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop: 0},0);
                currentIndex = 0;
            });
        }
    }, 3000);

    //메뉴
    $(".nav > ul > li").mouseover(function(){
        $(".submenu").stop().slideDown(300);
        $("#header").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".submenu").stop().slideUp(300);
        $("#header").removeClass("on");
    });

    //팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});