// 이미지 슬라이더
var imgSwiper = new Swiper('.swiper1', {
    // 맨끝 이미지에서 처음이미지로 반복
    loop: true,
    // 자동 재생
    autoplay: {
        delay: 3000,
    },
});
// 이벤트 슬라이더
var eventSwiper = new Swiper('.swiper2', {
    slidesPerView: 3,
    slidesPerGroup : 3,
    spaceBetween: 5,
    pagination : {
        el : '.swiper-pagination',
        clickable : true,
    },
});

// 메뉴 클릭시 이동
// gelato
$('.menu_gelato').on("mouseover",function(){
    $(this).css("cursor","pointer");
});
$('.menu_gelato').on("click",function(){
    location.href='pages/gelato.html'
});
// smoothie
$('.menu_smoothie').on("mouseover",function(){
    $(this).css("cursor","pointer");
});
$('.menu_smoothie').on("click",function(){
    location.href='pages/smoothie.html'
});
// icelolly
$('.menu_icelolly').on("mouseover",function(){
    $(this).css("cursor","pointer");
});
$('.menu_icelolly').on("click",function(){
    location.href='pages/icelolly.html'
});
// coffee
$('.menu_coffee').on("mouseover",function(){
    $(this).css("cursor","pointer");
});
$('.menu_coffee').on("click",function(){
    location.href='pages/coffee.html'
});
// dessert
$('.menu_dessert').on("mouseover",function(){
    $(this).css("cursor","pointer");
});
$('.menu_dessert').on("click",function(){
    location.href='pages/dessert.html'
});

// store
$('.store_wrap').on('mouseover', function(){
    $(this).css("cursor","pointer");
});
$('.store_wrap').on("click",function(){
    location.href='pages/store.html'
});
// event
$('.gift_wrap').on('mouseover', function(){
    $(this).css("cursor","pointer");
});
$('.gift_wrap').on("click",function(){
    location.href='pages/event.html'
});

// 이미지 불러오기
// 카카오 이미지검색 api 연동
$.ajax({
    method : "GET",
    url : 'https://dapi.kakao.com/v2/search/image',
    data: {
        query: "젤라또아이스크림",
    },
    headers: {
        Authorization: "KakaoAK c20d09c54c65199d7d5cce2f8c9a0232"
    },
    success: function (imgData) {
        $('.pictures').append($(".pic_1").attr('src', imgData.documents[0].thumbnail_url));
        $('.pictures').append($(".pic_2").attr('src', imgData.documents[1].thumbnail_url));
        $('.pictures').append($(".pic_3").attr('src', imgData.documents[2].thumbnail_url));
        $('.pictures').append($(".pic_4").attr('src', imgData.documents[3].thumbnail_url));
        $('.pictures').append($(".pic_5").attr('src', imgData.documents[4].thumbnail_url));
        $('.pictures').append($(".pic_6").attr('src', imgData.documents[5].thumbnail_url));
        $('.pictures').append($(".pic_7").attr('src', imgData.documents[6].thumbnail_url));
        $('.pictures').append($(".pic_8").attr('src', imgData.documents[7].thumbnail_url));
        $('.pictures').append($(".pic_9").attr('src', imgData.documents[8].thumbnail_url));
        $('.pictures').append($(".pic_10").attr('src', imgData.documents[9].thumbnail_url));
        $('.pictures').append($(".pic_11").attr('src', imgData.documents[10].thumbnail_url));
        $('.pictures').append($(".pic_12").attr('src', imgData.documents[11].thumbnail_url));
        $('.pictures').append($(".pic_13").attr('src', imgData.documents[12].thumbnail_url));
        $('.pictures').append($(".pic_14").attr('src', imgData.documents[13].thumbnail_url));
        $('.pictures').append($(".pic_15").attr('src', imgData.documents[14].thumbnail_url));
    
    console.log(imgData);
    }
});

$('.pictures img').on("mouseover", function(){
    $(this).css("cursor","pointer");
})