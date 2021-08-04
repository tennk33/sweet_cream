// 메인 GNB 활성화. 마우스 벗어나면 애니메이션 중간에 멈추게
$('.main_gnb').hover(function(){
    $('.toggle').stop(true, false).animate({height: "220px"}, 300);
},
    function(){
        $('.toggle').stop(true,false).animate({height: "0px"}, 200);
    });

// 햄버거 토글열기
$('.hamburger').click(function () {
    $(".small_toggle").animate({'width': 'toggle'});
});
// 햄버거 토글닫기
$('.small_wrap svg').click(function () {
    $(".small_toggle").animate({'width': 'toggle'});
});

// 위로가기 화살표 누르면 맨위로 스크롤됨
$('.arrow').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});
$('.arrow').on('mouseover', function(){
    $(this).css("cursor","pointer");
});

// 사이즈 크기 조정 할때마다 새로고침
$(window).resize(function(){location.reload();});