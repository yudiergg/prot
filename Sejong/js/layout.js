$(document).ready(function () {

/* 헤더 메뉴 */
$('.header_bottom .gnb ul.depth1 > li').on('mouseenter focusin', function () {
    let $lowerMenu = $(this).find('.lower_menu');

    // 기존의 active 클래스 제거
    $('.header_bottom .gnb ul.depth1 > li').removeClass('active');
    $('.header_bottom .gnb ul.depth1 .lower_menu').removeClass('active');

    // 현재 선택된 메뉴에 active 클래스 추가
    $(this).addClass('active');
    $lowerMenu.stop(true, true).addClass('active');
});

// 마우스를 헤더에서 벗어나면 전체 메뉴 비활성화
$('.header_bottom .gnb').on('mouseleave', function(){
    $('.header_bottom .gnb ul.depth1 > li').removeClass('active');
    $('.header_bottom .gnb ul.depth1 .lower_menu').removeClass('active');
});

// focusout을 사용하여 포커스가 벗어날 때 active를 제거
$('header .header_bottom .wrapper .sitemap a').on('focusin', function () {
    $('.header_bottom .gnb ul.depth1 > li').removeClass('active');
    $('.header_bottom .gnb ul.depth1 .lower_menu').removeClass('active');
});




/* 모바일 메뉴 */
$('header .header_bottom .wrapper .sitemap a').on('click', function (e) {
    e.preventDefault();
    $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300); // 부드럽게 토글
});

// 모든 2차 메뉴 초기 숨김 설정
$('.mobile_list_body ul.depth1 ul.depth2, .mobile_list_body ul.depth1 ul.depth2 ul.depth3').hide();

// 1차 메뉴 클릭시 2차 메뉴 열기/닫기
$('.mobile_list_body ul.depth1 > li').on('click', function (e) {
    e.preventDefault();

    let $parentLi = $(this).parent('li');
    let $depth2 = $parentLi.find('ul.depth2');

    // 1차 메뉴가 이미 열려있으면 2차 메뉴를 닫고, 다시 클릭하면 열림
    if ($parentLi.hasClass('active')) {
        // 이미 열려있는 메뉴라면 2차 메뉴를 접고, active 클래스 제거
        $parentLi.removeClass('active');
        $depth2.stop(true, true).slideUp(300, 'swing'); // 2차 메뉴 닫기
    } else {
        // 다른 1차 메뉴를 모두 닫고, 해당 메뉴를 열기
        $('.mobile_list_body ul.depth1 > li').removeClass('active')
            .find('ul.depth2').stop(true, true).slideUp(300, 'swing'); // 2차 메뉴 숨기기

        // 클릭된 1차 메뉴만 열기
        $parentLi.addClass('active');
        $depth2.stop(true, true).slideDown(300, 'swing'); // 2차 메뉴 열기
    }
});

// 2차 메뉴 클릭 또는 포커스 시 3차 메뉴 열기
$('.mobile_list_body ul.depth1 ul.depth2 > li > a').on('click', function (e) {
    e.preventDefault();

    let $parentLi = $(this).parent('li');
    let $depth3 = $parentLi.find('ul.depth3');

    // 2차 메뉴가 이미 열려있으면 3차 메뉴를 닫고, 다시 클릭하면 열림
    if ($parentLi.hasClass('active')) {
        // 이미 열려있는 메뉴라면 3차 메뉴를 접고, active 클래스 제거
        $parentLi.removeClass('active');
        $depth3.stop(true, true).slideUp(300, 'swing'); // 3차 메뉴 닫기
    } else {
        // 다른 2차 메뉴를 모두 닫고, 해당 메뉴를 열기
        $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active')
            .find('ul.depth3').stop(true, true).slideUp(300, 'swing'); // 3차 메뉴 숨기기

        // 클릭된 2차 메뉴만 열기
        $parentLi.addClass('active');
        $depth3.stop(true, true).slideDown(300, 'swing'); // 3차 메뉴 열기
    }
});


// 2차 메뉴 포커스 시 3차 메뉴 열기
$('.mobile_list_body ul.depth1 ul.depth2 > li > a').on('click', function (e) {
    e.preventDefault();

    let $parentLi = $(this).parent('li');
    let $depth3 = $parentLi.find('ul.depth3');

    if (!$parentLi.hasClass('active')) {
        // 클릭 없이 포커스만 들어온 경우에만 3차 메뉴 열기
        $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active')
            .find('ul.depth3').stop(true, true).slideUp(300, 'swing'); // 3차 메뉴 숨기기

        $parentLi.addClass('active');
        $depth3.stop(true, true).slideDown(300, 'swing'); // 3차 메뉴 열기
    }
});

/* 모바일닫기 */
$('header .header_bottom .wrapper .mobile_menu .mobile_wrap .mobile_header_top .close a').on('click', function (e) {
    e.preventDefault();
    $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300);
});


/* 푸터닫기 */
$('footer .footer_head .wrapper ul.footer_link > li').on('click', function (e) {
    if($(this).hasClass('active') == true){
        $(this).removeClass('active')
        $(this).find('.depth2').slideUp()
    }else{
        $('footer .footer_head .wrapper ul.footer_link > li.active > .depth2').slideUp()
        $('footer .footer_head .wrapper ul.footer_link > li').removeClass('active')
        $(this).addClass('active')
        $(this).find('.depth2').slideDown()
    }
});

});
