$(document).ready(function () {
  var timestamp = new Date().getTime();

  // 기존 script.js 제거 후 다시 추가 (강제 새로고침)
  $('script[src*="script.js"]').remove();
  $('head').append('<script src="./js/script.js?v=' + timestamp + '"></script>');

  // CSS 파일 강제 새로고침
  $('link[rel="stylesheet"]').each(function () {
    var href = $(this).attr('href').split('?')[0]; // 기존 쿼리스트링 제거
    $(this).attr('href', href + '?v=' + timestamp);
  });

  $.ajaxSetup({ cache: false });

  function checkWindowSize() {
    $('.gnb .depth1 > li').off('mouseenter focusin').on('mouseenter focusin', function () {
      if ($(window).width() > 1024) {
        $('header').addClass('over');
        $('.gnb .depth1 > li').removeClass('open');
        $(this).addClass('open');
      }
    });

    $('header').off('mouseleave').on('mouseleave', function () {
      $(this).removeClass('over');
    });
  }

  function resetMenu() {
    if ($(window).width() > 1024) {
      $('header').removeClass('mobile_open over');
      $('.gnb .depth1 > li').removeClass('open active');
      $('.gnb .depth1 > li ul.depth2').removeClass('active').stop().slideUp(0);
    }
  }

  checkWindowSize();
  resetMenu(); // 초기 로드 시 상태 초기화

  $(window).off('resize').on('resize', function () {
    checkWindowSize();
    resetMenu(); // 윈도우 크기 변경 시 메뉴 초기화
  });

  $('header .tnb .lang .ko a').off('click').on('click', function (e) {
    e.preventDefault();
    let $langMenu = $('header .tnb .lang ul');
    $langMenu.stop().fadeToggle(200);
  });

  $(document).off('mouseleave', 'header').on('mouseleave', 'header', function () {
    $('header .tnb .lang ul').stop().fadeOut(200);
  });

  $(window).off('resize').on('resize', function () {
    if ($(window).width() > 1024) {
      $('header .tnb .lang ul').stop().fadeOut(0);
    }
  });

  $('header .tnb ul li').off('click').on('click', function (e) {
    e.preventDefault();
    $('header .tnb ul li').removeClass('active');
    $(this).addClass('active');
  });

  $('header .gnb_open').off('click').on('click', function () {
    $('header').addClass('mobile_open');
  });

  $('header .gnb_close').off('click').on('click', function () {
    $('header').removeClass('mobile_open');
  });

  $('.gnb_wrap ul.depth1 > li > a').off('click').on('click', function (e) {
    if ($(window).width() > 1024) {
      return;
    }
    e.preventDefault();
    $('.gnb_wrap ul.depth1 > li').removeClass('active');
    $(this).parent('li').addClass('active');
  });

  $('header .gnb .gnb_wrap ul.depth1 > li > a').off('click').on('click', function (e) {
    if ($(window).width() > 1024) {
      return;
    }
    e.preventDefault();

    let $parentLi = $(this).parent();
    let $depth2 = $parentLi.find('ul.depth2');

    if ($depth2.hasClass('active')) {
      $depth2.removeClass('active').stop().slideUp(300);
    } else {
      $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2.active')
        .removeClass('active')
        .stop()
        .slideUp(300);
      $depth2.addClass('active').stop().slideDown(300);
    }
  });

  $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li > a').off('click').on('click', function (e) {
    e.preventDefault();
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').removeClass('active');
    $(this).parent().addClass('active');
  });
});
