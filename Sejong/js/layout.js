$(document).ready(function () {

/* 헤더 메뉴 */
$('.header_bottom .gnb ul.depth1 li').on('mouseenter focusin', function () {
    var $lowerMenu = $(this).find('.lower_menu');
    
    // 메뉴를 열고 'active' 클래스를 추가하여 표시
    $(this).addClass('active');
    $lowerMenu.stop(true, true).addClass('active');
}).on('mouseleave', function () {
    var $lowerMenu = $(this).find('.lower_menu');
    
    // 메뉴를 닫을 때 'active' 클래스 제거
    if (!$(this).find('.lower_menu').is(':focus')) {
        $(this).removeClass('active');
        $lowerMenu.removeClass('active'); // 'active' 클래스 제거
    }
});

// focusout을 사용하여 포커스가 벗어날 때만 active를 제거
$('.header_bottom .gnb ul.depth1 li').on('focusout', function () {
    var $lowerMenu = $(this).find('.lower_menu');

    // focusout 시 메뉴가 닫히도록 처리
    if (!$(this).find('.lower_menu').is(':focus')) {
        $(this).removeClass('active');
        $lowerMenu.removeClass('active'); // 'active' 클래스 제거
    }
});



/* 모바일 메뉴 */
$('header .header_bottom .wrapper .sitemap a').on('click focusin', function (e) {
    e.preventDefault();
    $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300); // 부드럽게 토글
});

// 모든 2차 메뉴 초기 숨김 설정
$('.mobile_list_body ul.depth1 ul.depth2, .mobile_list_body ul.depth1 ul.depth2 ul.depth3').hide();

// 1차 메뉴 클릭 또는 포커스 시 2차 메뉴 열기/닫기
$('.mobile_list_body ul.depth1 > li > a').on('click', function (e) {
    e.preventDefault();

    var $parentLi = $(this).parent('li');
    var $depth2 = $parentLi.find('ul.depth2');

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

    var $parentLi = $(this).parent('li');
    var $depth3 = $parentLi.find('ul.depth3');

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

// 1차 메뉴 포커스 시 2차 메뉴 열기
$('.mobile_list_body ul.depth1 > li > a').on('focusin', function (e) {
    e.preventDefault();

    var $parentLi = $(this).parent('li');
    var $depth2 = $parentLi.find('ul.depth2');

    if (!$parentLi.hasClass('active')) {
        // 클릭 없이 포커스만 들어온 경우에만 2차 메뉴 열기
        $('.mobile_list_body ul.depth1 > li').removeClass('active')
            .find('ul.depth2').stop(true, true).slideUp(300, 'swing'); // 2차 메뉴 숨기기

        $parentLi.addClass('active');
        $depth2.stop(true, true).slideDown(300, 'swing'); // 2차 메뉴 열기
    }
});

// 2차 메뉴 포커스 시 3차 메뉴 열기
$('.mobile_list_body ul.depth1 ul.depth2 > li > a').on('focusin', function (e) {
    e.preventDefault();

    var $parentLi = $(this).parent('li');
    var $depth3 = $parentLi.find('ul.depth3');

    if (!$parentLi.hasClass('active')) {
        // 클릭 없이 포커스만 들어온 경우에만 3차 메뉴 열기
        $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active')
            .find('ul.depth3').stop(true, true).slideUp(300, 'swing'); // 3차 메뉴 숨기기

        $parentLi.addClass('active');
        $depth3.stop(true, true).slideDown(300, 'swing'); // 3차 메뉴 열기
    }
});

/* 모바일 닫기 */
$('header .header_bottom .wrapper .mobile_menu .mobile_wrap .mobile_header_top .close a').on('click', function (e) {
    e.preventDefault();
    $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300);
});



/* 푸터 */
$('footer .footer_head .wrapper ul.footer_link ul.depth2').hide();

$('footer .footer_head .wrapper ul.footer_link > li > a').on('click focusin', function (e) {
    e.preventDefault();
    
    var $parent = $(this).parent('li');
    var $footerdepth2 = $parent.find('ul.depth2');
    
    // 현재 메뉴가 이미 열려있으면 아무 동작도 하지 않음
    if ($parent.hasClass('active')) {
        return; // 클릭이나 focusin시 아무 동작도 하지 않음
    }
    
    // 다른 모든 메뉴를 닫음
    $('footer .footer_head .wrapper ul.footer_link > li').not($parent).removeClass('active')
        .find('ul.depth2').stop(true, true).slideUp(300, 'swing');
    
    // 현재 메뉴 열기
    $parent.addClass('active');
    $footerdepth2.stop(true, true).slideDown(300, 'swing');
});

// 포커스가 메뉴 항목을 벗어나면 2차 메뉴 닫기
$('footer .footer_head .wrapper ul.footer_link > li > a').on('focusout', function () {
    var $parent = $(this).parent('li');
    var $footerdepth2 = $parent.find('ul.depth2');
    
    // 2차 메뉴가 열려 있으면 닫기
    if ($parent.hasClass('active')) {
        $parent.removeClass('active');
        $footerdepth2.stop(true, true).slideUp(300, 'swing');
    }
});



});
