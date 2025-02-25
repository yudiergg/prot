$(document).ready(function(){
    $('.header_bottom .gnb ul.depth1 li').on('mouseenter', function(){
        $(this).addClass('active'); // li에 active 클래스 추가
        $(this).find('.lower_menu').stop().css('display', 'flex').hide().fadeIn(200);
    }).on('mouseleave', function(){
        $(this).find('.lower_menu').stop().fadeOut(200, function(){
            $(this).css('display', 'none')
        })
        $(this).removeClass('active') // li에서 active 클래스 제거
    })
})