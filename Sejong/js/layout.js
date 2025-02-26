$(document).ready(function () {
    /* 헤더 메뉴 */
    $('.header_bottom .gnb ul.depth1 li').on('mouseenter focusin', function () {
        $(this).addClass('active');
        $(this).find('.lower_menu')
            .stop(true, true)
            .css({ 'opacity': 0, 'visibility': 'visible', 'display': 'flex' }) // 숨김 해제
            .animate({ 'opacity': 1 }, 200); // 부드럽게 나타나도록 처리
    }).on('mouseleave', function () {
        $(this).find('.lower_menu')
            .stop(true, true)
            .animate({ 'opacity': 0 }, 200, function () {
                $(this).css({ 'visibility': 'hidden', 'display': 'none' }); // 완전히 숨김 처리
            });
        $(this).removeClass('active');
    });

     /* 모바일 메뉴 */
     $('header .header_bottom .wrapper .sitemap a').on('click focusin', function (e) {
        e.preventDefault();
        $('header .header_bottom .wrapper .mobile_menu').toggle();
    });

    // 모든 2차, 3차 메뉴 초기 숨김 설정
    $('.mobile_list_body ul.depth1 ul.depth2').hide();
    $('.mobile_list_body ul.depth1 ul.depth2 ul.depth3').hide();

    // 1차 메뉴 클릭 시 2차 메뉴 표시
    $('.mobile_list_body ul.depth1 > li > a').on('click focusin',function (e) {
        e.preventDefault();

        var $parentLi = $(this).parent('li');
        var $depth2 = $parentLi.find('ul.depth2');

        if ($parentLi.hasClass('active')) {
            // 다시 클릭하면 닫힘
            $parentLi.removeClass('active');
            $depth2.stop(true, true).slideUp(300);
        } else {
            // 다른 열린 메뉴 닫기
            $('.mobile_list_body ul.depth1 > li').removeClass('active');
            $('.mobile_list_body ul.depth1 > li ul.depth2').stop(true, true).slideUp(300);

            // 현재 클릭한 메뉴 활성화 및 2차 메뉴 열기
            $parentLi.addClass('active');
            $depth2.stop(true, true).slideDown(300);
        }
    });

    // 2차 메뉴 클릭 시 3차 메뉴 표시
    $('.mobile_list_body ul.depth1 > li ul.depth2 > li > a').on('click focusin',function (e) {
        e.preventDefault();

        var $parentLi = $(this).parent('li');
        var $depth3 = $parentLi.find('ul.depth3');

        if ($parentLi.hasClass('active')) {
            $parentLi.removeClass('active');
            $depth3.stop(true, true).slideUp(300);
        } else {
            // 다른 열린 3차 메뉴 닫기
            $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active');
            $('.mobile_list_body ul.depth1 ul.depth2 > li ul.depth3').stop(true, true).slideUp(300);

            // 현재 클릭한 메뉴 활성화 및 3차 메뉴 열기
            $parentLi.addClass('active');
            $depth3.stop(true, true).slideDown(300);
        }
    });

    /* 모바일 닫기 */
    $('header .header_bottom .wrapper .mobile_menu .mobile_wrap .mobile_header_top .close a').on('click', function (e) {
        e.preventDefault();
        console.log('클릭함');
        $('header .header_bottom .wrapper .mobile_menu').toggle();
    });

    /* 푸터 */
    // 초기 상태에서 모든 2차 메뉴 숨김 (푸터에만 적용하도록 수정)
    $('footer .footer_head .wrapper ul.footer_link ul.depth2').hide();

    $('footer .footer_head .wrapper ul.footer_link > li > a').on('click focusin',function (e) {
        e.preventDefault();
        var $parent = $(this).parent('li');
        var $footerdepth2 = $parent.find('ul.depth2');

        if ($parent.hasClass('active')) {
            // 이미 활성화된 경우 비활성화
            $parent.removeClass('active');
            $footerdepth2.stop(true, true).slideUp(300);
        } else {
            // 다른 열린 메뉴 닫기
            $('footer .footer_head .wrapper ul.footer_link > li').removeClass('active');
            $('footer .footer_head .wrapper ul.footer_link ul.depth2').stop(true, true).slideUp(300);

            // 현재 클릭한 메뉴 활성화
            $parent.addClass('active');
            $footerdepth2.stop(true, true).slideDown(300);
        }
    });
});
