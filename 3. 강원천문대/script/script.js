$(function(){
    //슬라이더
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3 ;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex ;
    },3000);


    //메인메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(600);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(600);
    });


    //탭메뉴
    let tabBtn = $(".tab-btn > li");
    let tabCont = $(".tab-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

    
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });


    //팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });


});