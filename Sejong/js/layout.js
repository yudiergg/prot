$(document).ready(function () {

/* 헤더 메뉴 */
$('.header_bottom .gnb ul.depth1 > li').on('mouseenter focusin', function () {
    let $lowerMenu = $(this).find('.lower_menu');

    // 기존의 active 클래스 제거
    $('.header_bottom .gnb ul.depth1 > li').removeClass('active').removeAttr("title");
    $('.header_bottom .gnb ul.depth1 .lower_menu').removeClass('active').removeAttr("title");

    // 현재 선택된 메뉴에 active 클래스 추가
    $(this).addClass('active').attr("title", "선택됨");
    $lowerMenu.stop(true, true).addClass('active').attr("title", "선택됨");
});

// 마우스를 헤더에서 벗어나면 전체 메뉴 비활성화
$('.header_bottom .gnb').on('mouseleave', function(){
    $('.header_bottom .gnb ul.depth1 > li').removeClass('active').removeAttr("title");
    $('.header_bottom .gnb ul.depth1 .lower_menu').removeClass('active').removeAttr("title");
});

// focusout을 사용하여 포커스가 벗어날 때 active를 제거
$('header .header_bottom .wrapper .sitemap a').on('focusin', function () {
    $('.header_bottom .gnb ul.depth1 > li').removeClass('active').removeAttr("title");
    $('.header_bottom .gnb ul.depth1 .lower_menu').removeClass('active').removeAttr("title");
});




/* 모바일 메뉴 */

$('header .header_bottom .wrapper .sitemap a').on('click', function (e) {
    if (window.innerWidth <= 1200) { // 화면 너비가 1200px 이하일 때만 실행
        e.preventDefault();
        $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300);
    }
});

// 모든 2차 메뉴 초기 숨김 설정
$('.mobile_list_body ul.depth1 ul.depth2, .mobile_list_body ul.depth1 ul.depth2 ul.depth3').hide();

// 1차 메뉴 클릭시 2차 메뉴 열기/닫기
$('.mobile_list_body ul.depth1 > li > a').on('click', function (e) {
    e.preventDefault();

    let $parentLi = $(this).parent('li');
    let $depth2 = $parentLi.find('ul.depth2');

    // 현재 클릭한 메뉴가 열려있는 경우 닫기
    if ($parentLi.hasClass('active')) {
        $parentLi.removeClass('active');
        $depth2.stop(true, true).slideUp(300, 'swing'); // 2차 메뉴 닫기
    } else {
        // 다른 1차 메뉴를 모두 닫고, 현재 클릭한 메뉴만 열기
        $('.mobile_list_body ul.depth1 > li').removeClass('active')
            .find('ul.depth2').stop(true, true).slideUp(300, 'swing'); // 다른 2차 메뉴 숨기기

        $parentLi.addClass('active');
        $depth2.stop(true, true).slideDown(300, 'swing'); // 2차 메뉴 열기
    }
});

// 2차 메뉴 클릭 시 3차 메뉴 열기/닫기
$('.mobile_list_body ul.depth1 ul.depth2 > li > a').on('click', function (e) {
    e.preventDefault();

    let $parentLi = $(this).parent('li');
    let $depth3 = $parentLi.find('ul.depth3');

    // 현재 클릭한 2차 메뉴가 열려있는 경우 닫기
    if ($parentLi.hasClass('active')) {
        $parentLi.removeClass('active');
        $depth3.stop(true, true).slideUp(300, 'swing'); // 3차 메뉴 닫기
    } else {
        // 다른 2차 메뉴를 모두 닫고, 현재 클릭한 메뉴만 열기
        $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active')
            .find('ul.depth3').stop(true, true).slideUp(300, 'swing'); // 다른 3차 메뉴 숨기기

        $parentLi.addClass('active');
        $depth3.stop(true, true).slideDown(300, 'swing'); // 3차 메뉴 열기
    }
});


/* 모바일닫기 */
$('header .header_bottom .wrapper .mobile_menu .mobile_wrap .mobile_header_top .close a').on('click', function (e) {
    e.preventDefault();
    $('header .header_bottom .wrapper .mobile_menu').fadeToggle(0);
});


/* 푸터닫기 */
$('footer .footer_head .wrapper ul.footer_link > li').on('click', function (e) {
    if($(this).hasClass('active') == true){
        $(this).removeClass('active')
        $('footer .footer_head .wrapper ul.footer_link > li').find('button').attr("title", "열림");
        $(this).find('.depth2').slideUp()
    }else{
        $('footer .footer_head .wrapper ul.footer_link > li.active > .depth2').slideUp()
        $('footer .footer_head .wrapper ul.footer_link > li').removeClass('active')
        $(this).addClass('active')
        $('footer .footer_head .wrapper ul.footer_link > li.active').find('button').attr("title", "닫힘");
        $(this).find('.depth2').slideDown()
    }
});

});
