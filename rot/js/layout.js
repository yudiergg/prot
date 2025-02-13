$(document).ready(function () {
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
            $("header").addClass("hidden"); // 스크롤 내리면 숨김
        } else {
            $("header").removeClass("hidden"); // 최상단이면 다시 보이게
        }
    });
});