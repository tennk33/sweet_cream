// 선택한 이벤트 카테고리에 따라서 보이게 안보이게
// 모든 이벤트
$('label:nth-child(1) > input[type="radio"]').on("click", function(){
    $(".store_event").css('display', "inline-block");
    $(".online_event").css('display', "inline-block");
});
// 스토어 이벤트
$('label:nth-child(2) > input[type="radio"]').on("click", function(){
    $(".store_event").css('display', "inline-block");
    $(".online_event").css('display', "none");
});
// 온라인 이벤트
$('label:nth-child(3) > input[type="radio"]').on("click", function(){
    $(".store_event").css('display', "none");
    $(".online_event").css('display', "inline-block");
});