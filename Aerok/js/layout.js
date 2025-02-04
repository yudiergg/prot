$(document).ready(function () {
  function checkWindowSize() {
    /*if ($(window).width() <= 1024) {
      // 모바일/태블릿 화면에서 메뉴 닫기 및 버튼 표시
      $('header').removeClass('over');
      $('.gnb .depth1 > li').off('mouseenter mouseleave');
      //$('.gnb_wrap ul.depth1').hide(); // 메뉴 닫기
      //$('.gnb_open').show(); // GNB 열기 버튼 표시
      //$('.gnb_close').hide(); // GNB 닫기 버튼 숨기기
    } else {
      // 데스크탑 화면에서 메뉴 열기 및 hover 이벤트 처리
      $('.gnb .depth1 > li').hover(
        function () {
          $('header').addClass('over');
          $(this).addClass('open');
        },
        function () {
          $('header').removeClass('over');
          $(this).removeClass('open');
        }
      );
      $('.gnb_wrap ul.depth1').css('display', 'flex'); // 메뉴 보이기
      $('.gnb_open').hide(); // GNB 열기 버튼 숨기기
      $('.gnb_close').hide(); // GNB 닫기 버튼 숨기기
    }*/
    $('.gnb .depth1 > li').on('mouseenter focusin', function(){
      
      if($(window).width() > 1024) {
        $('header').addClass('over')
        $('.gnb .depth1 > li').removeClass('open')
        $(this).addClass('open')
      }
    })
  }

  // 페이지 로드 시 실행
  checkWindowSize();

  // 윈도우 리사이즈 이벤트 실행
  $(window).resize(function () {
    // 리사이즈 시 메뉴 상태를 먼저 업데이트
    checkWindowSize();
  });

  // .ko a 요소 클릭 시 언어 선택 ul 보이기/숨기기
  $('header .tnb .lang .ko a').click(function (e) {
    e.preventDefault();
    let $langMenu = $('header .tnb .lang ul');
    // fadeToggle을 사용하여 부드럽게 열고 닫기
    $langMenu.stop().fadeToggle(200);
  });

  // 헤더에서 마우스가 벗어나면 언어 선택 ul 숨기기
  $('header').mouseleave(function () {
    $('header .tnb .lang ul').stop().fadeOut(200);
  });

  // li 클릭 시 active 클래스 추가
  $('header .tnb ul li').click(function (e) {
    e.preventDefault();
    $('header .tnb ul li').removeClass('active');
    $(this).addClass('active');
  });

  // GNB 메뉴 열기
  /*
  $('.gnb_open').on('click', function () {
    $('.gnb_wrap ul.depth1').css('display', 'flex'); // GNB 메뉴 보이기
    $('.gnb_close').css('display', 'block'); // 닫기 버튼 표시
    $('.gnb_open').css('display', 'none'); // 열기 버튼 숨기기
  });
  */

  // GNB 메뉴 닫기
  $('.gnb_close').on('click', function () {
    closeMenu(); // 메뉴 닫기
  });

  // depth1 > li > a 클릭 시 active 클래스 추가
  $('.gnb_wrap ul.depth1 > li > a').on('click', function (e) {
    e.preventDefault();
    $('.gnb_wrap ul.depth1 > li').removeClass('active');
    $(this).parent('li').addClass('active');
  });

  // depth2 메뉴 toggle
  $('header .gnb .gnb_wrap ul.depth1 > li > a').click(function (e) {
    e.preventDefault();

    let $parentLi = $(this).parent();
    let $depth2 = $parentLi.find('ul.depth2');

    if ($depth2.hasClass('active')) {
      // 닫기
      $depth2.removeClass('active').stop().slideUp(300);
    } else {
      // 다른 열린 메뉴 닫기
      $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2.active')
        .removeClass('active')
        .stop()
        .slideUp(300);
      // 새 메뉴 열기
      $depth2.addClass('active').stop().slideDown(300);
    }
  });

  // depth2 > li 클릭 시 active 클래스 추가
  $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li > a').click(function (e) {
    e.preventDefault();
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li').removeClass('active');
    $(this).parent().addClass('active');
  });

  // 메뉴 닫기 함수
  function closeMenu() {
    $('.gnb_wrap ul.depth1').hide(); // 메뉴 닫기
    $('.gnb_open').show(); // GNB 열기 버튼 표시
    $('.gnb_close').hide(); // GNB 닫기 버튼 숨기기
  }
});