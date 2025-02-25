$(document).ready(function() {
    $('.header_bottom .gnb ul.depth1 li').on('mouseenter', function() {
        $(this).addClass('active')
        $(this).find('.lower_menu').stop().css('display', 'flex').hide().fadeIn(200)
    }).on('mouseleave', function() {
        $(this).find('.lower_menu').stop().fadeOut(200, function() {
            $(this).css('display', 'none')
        })
        $(this).removeClass('active')
    })

    /* 모바일 메뉴 */
    $('header .header_bottom .wrapper .sitemap a').click(function(e) {
        e.preventDefault()
        $('header .header_bottom .wrapper .mobile_menu').slideToggle()
    })

    // 1차 메뉴 클릭 시 2차 메뉴 표시
    $('.mobile_list_body ul.depth1 > li > a').click(function(e) {
        e.preventDefault()
        
        var $parentLi = $(this).parent('li')
        var $depth2 = $parentLi.find('ul.depth2')

        if ($parentLi.hasClass('active')) {
            $parentLi.removeClass('active')
            $depth2.stop(true, true).slideUp(300)
        } else {
            $('.mobile_list_body ul.depth1 > li').removeClass('active')
            $('.mobile_list_body ul.depth1 > li ul.depth2').stop(true, true).slideUp(300)

            $parentLi.addClass('active')
            $depth2.stop(true, true).slideDown(300)
        }
    })

    // 2차 메뉴 클릭 시 3차 메뉴 표시
    $('.mobile_list_body ul.depth1 > li ul.depth2 > li > a').click(function(e) {
        e.preventDefault()

        var $parentLi = $(this).parent('li')
        var $depth3 = $parentLi.find('ul.depth3')

        if ($parentLi.hasClass('active')) {
            $parentLi.removeClass('active')
            $depth3.stop(true, true).slideUp(300)
        } else {
            $('.mobile_list_body ul.depth1 ul.depth2 > li').removeClass('active')
            $('.mobile_list_body ul.depth1 ul.depth2 > li ul.depth3').stop(true, true).slideUp(300)

            $parentLi.addClass('active')
            $depth3.stop(true, true).slideDown(300)
        }
    })
})
