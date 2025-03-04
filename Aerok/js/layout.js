$(document).ready(function () {
  var timestamp = new Date().getTime();

  $('script[src*="script.js"]').remove();
  $('head').append('<script src="./js/script.js?v=' + timestamp + '"></script>');

  $('link[rel="stylesheet"]').each(function () {
    var href = $(this).attr('href').split('?')[0];
    $(this).attr('href', href + '?v=' + timestamp);
  });

  $.ajaxSetup({ cache: false });

  function checkWindowSize() {
    $('.gnb .depth1 > li').off('mouseenter focusin').on('mouseenter focusin', function () {
      if ($(window).width() > 1024) {
        $('header').addClass('over');
        $('.gnb .depth1 > li').removeClass('open');
        $(this).addClass('open');
        $(this).find('ul.depth2').stop().slideDown(200); // depth2 열기
      }
    });

    $('.gnb .depth1 > li').off('mouseleave').on('mouseleave', function () {
      if ($(window).width() > 1024) {
        $(this).removeClass('open');
        $(this).find('ul.depth2').stop().slideUp(200); // depth2 닫기
      }
    });

    $('header').off('mouseleave').on('mouseleave', function () {
      $(this).removeClass('over');
      $('.gnb .depth1 > li').removeClass('open');
      $('.gnb .depth1 > li ul.depth2').stop().slideUp(200); // 전체 depth2 닫기
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
  resetMenu();

  $(window).off('resize').on('resize', function () {
    checkWindowSize();
    resetMenu();
  });
});
