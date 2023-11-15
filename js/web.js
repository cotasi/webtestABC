$(document).ready(function () {
    //화면이 준비되면 실행해라.

    var count =0;
    //좌우슬라이드
    setInterval(function () {
        $(".leftright").animate({ "marginLeft": -1200 }, 300, function () {
            $(".leftright .swiper-slide").eq(0).appendTo($(".leftright .swiper-wrapper"))
            $(this).css("margin-left", 0)
        })


        $(".topdown").animate({ "marginTop": -300 }, 300, function () {
            $(".topdown .swiper-slide").eq(0).appendTo($(".topdown .swiper-wrapper"))
            $(this).css("margin-top", 0)
        })


        count++;
        count %= 3;
        $("#fadeswiper .swiper-slide").eq(count).addClass("on").siblings().removeClass("on")

    }, 3000)

    // tab기능
    $(".tab h2").click(function () {
        $(this).parent().addClass("on").siblings().removeClass("on")
    })

    // popup기능 공지사항 첫번째 글 클릭시 팝업나옴
    $(".notice li:first-child a").click(function () {
        $("#popup").show();
    })
    //팝업의 닫기버튼
    $("#popup button").click(function () {
        $("#popup").hide();
    })


})