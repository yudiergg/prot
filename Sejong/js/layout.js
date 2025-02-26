$(document).ready(function () {
    /* 헤더 메뉴 */
    $('.header_bottom .gnb ul.depth1 li').on('mouseenter focusin', function () {
        $(this).addClass('active');
        $(this).find('.lower_menu')
            .stop(true, true)
            .css({ 'visibility': 'visible', 'display': 'flex', 'opacity': 0 })
            .animate({ 'opacity': 1 }, { duration: 200, queue: false }); // 부드럽게 나타남
    }).on('mouseleave', function () {
        $(this).find('.lower_menu')
            .stop(true, true)
            .animate({ 'opacity': 0 }, { duration: 200, queue: false }, function () {
                $(this).css({ 'visibility': 'hidden', 'display': 'none' }); // 완전히 숨김 처리
            });
        $(this).removeClass('active');
    });

    /* 모바일 메뉴 */
    $('header .header_bottom .wrapper .sitemap a').on('click focusin', function (e) {
        e.preventDefault();
        $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300); // 부드럽게 토글
    });

    // 모든 2차, 3차 메뉴 초기 숨김 설정
    $('.mobile_list_body ul.depth1 ul.depth2, .mobile_list_body ul.depth1 ul.depth2 ul.depth3').hide();

    // 1차 메뉴 클릭 시 2차 메뉴 표시
    $('.mobile_list_body ul.depth1 > li > a').on('click focusin', function (e) {
        e.preventDefault();

        var $parentLi = $(this).parent('li');
        var $depth2 = $parentLi.find('ul.depth2');

        if ($parentLi.hasClass('active')) {
            $parentLi.removeClass('active');
            $depth2.stop(true, true).slideUp(300, 'easeInOutQuad'); // 부드럽게 닫기
        } else {
            $('.mobile_list_body ul.depth1 > li').removeClass('active')
                .find('ul.depth2').stop(true, true).slideUp(300, 'easeInOutQuad');

            $parentLi.addClass('active');
            $depth2.stop(true, true).slideDown(300, 'easeInOutQuad'); // 부드럽게 열기
        }
    });

    // 2차 메뉴 클릭 시 3차 메뉴 표시
    $('.mobile_list_body ul.depth1 ul.depth2 > li > a').on('click focusin', function (e) {
        e.preventDefault();

        var $parentLi = $(this).parent('li');
        var $depth3 = $parentLi.find('ul.depth3');

        if ($parentLi.hasClass('active')) {
            $parentLi.removeClass('active');
            $depth3.stop(true, true).slideUp(300, 'easeInOutQuad');
        } else {
            $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active')
                .find('ul.depth3').stop(true, true).slideUp(300, 'easeInOutQuad');

            $parentLi.addClass('active');
            $depth3.stop(true, true).slideDown(300, 'easeInOutQuad');
        }
    });

    /* 모바일 닫기 */
    $('header .header_bottom .wrapper .mobile_menu .mobile_wrap .mobile_header_top .close a').on('click', function (e) {
        e.preventDefault();
        console.log('클릭함');
        $('header .header_bottom .wrapper .mobile_menu').fadeToggle(300);
    });

    /* 푸터 */
    $('footer .footer_head .wrapper ul.footer_link ul.depth2').hide();

    $('footer .footer_head .wrapper ul.footer_link > li > a').on('click focusin', function (e) {
        e.preventDefault();
        var $parent = $(this).parent('li');
        var $footerdepth2 = $parent.find('ul.depth2');

        if ($parent.hasClass('active')) {
            $parent.removeClass('active');
            $footerdepth2.stop(true, true).slideUp(300, 'easeInOutQuad');
        } else {
            $('footer .footer_head .wrapper ul.footer_link > li').removeClass('active')
                .find('ul.depth2').stop(true, true).slideUp(300, 'easeInOutQuad');

            $parent.addClass('active');
            $footerdepth2.stop(true, true).slideDown(300, 'easeInOutQuad');
        }
    });
});
