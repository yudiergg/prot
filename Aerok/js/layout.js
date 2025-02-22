$(document).ready(function () {
  
  var timestamp = new Date().getTime();

  // JavaScript 파일 강제 새로고침
  $('head').append('<script src="./js/script.js?v=' + timestamp + '"></script>');

  // CSS 파일 강제 새로고침
  $('link[rel="stylesheet"]').each(function () {
    var href = $(this).attr('href').split('?')[0]; // 기존 쿼리스트링 제거
    $(this).attr('href', href + '?v=' + timestamp);
  });

  // jQuery Ajax 기본 캐시 방지 설정

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
      // 1024px 초과 시 depth1, depth2 관련 상태 초기화
      $('header').removeClass('mobile_open over');
      $('.gnb .depth1 > li').removeClass('open active');
      $('.gnb .depth1 > li ul.depth2').removeClass('active').stop().slideUp(0);
    }
  }

  // 페이지 로드 시 실행
  checkWindowSize();
  resetMenu(); // 초기 로드 시 상태 초기화

  // 윈도우 리사이즈 이벤트 실행
  $(window).resize(function () {
    checkWindowSize();
    resetMenu(); // 윈도우 크기 변경 시 메뉴 초기화
  });

  // .ko a 요소 클릭 시 언어 선택 ul 보이기/숨기기
  $('header .tnb .lang .ko a').click(function (e) {
    e.preventDefault();
    let $langMenu = $('header .tnb .lang ul');
    $langMenu.stop().fadeToggle(200);
  });

  // 헤더에서 마우스가 벗어나면 언어 선택 ul 숨기기
  $(document).on('mouseleave', 'header', function () {
    $('header .tnb .lang ul').stop().fadeOut(200);
  });

  // 윈도우 리사이즈 시 초기화
  $(window).resize(function () {
    if ($(window).width() > 1024) {
      $('header .tnb .lang ul').stop().fadeOut(0); // 1024px 이상에서 강제 닫기
    }
  });

  // li 클릭 시 active 클래스 추가
  $('header .tnb ul li').click(function (e) {
    e.preventDefault();
    $('header .tnb ul li').removeClass('active');
    $(this).addClass('active');
  });

  // GNB 메뉴 열기
  $('header .gnb_open').on('click', function () {
    $('header').addClass('mobile_open');
  });

  $('header .gnb_close').on('click', function () {
    $('header').removeClass('mobile_open');
  });

  // depth1 > li > a 클릭 시 active 클래스 추가
  $('.gnb_wrap ul.depth1 > li > a').on('click', function (e) {
    if ($(window).width() > 1024) {
      return;
    }
    e.preventDefault();
    $('.gnb_wrap ul.depth1 > li').removeClass('active');
    $(this).parent('li').addClass('active');
  });

  // depth2 메뉴 toggle
  $('header .gnb .gnb_wrap ul.depth1 > li > a').click(function (e) {
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

  // depth2 > li 클릭 시 active 클래스 추가
  $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li > a').click(function (e) {
    e.preventDefault();
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').removeClass('active');
    $(this).parent().addClass('active');
  });
});