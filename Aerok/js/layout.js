$(document).ready(function () {
    $('.gnb .depth1 > li').hover(
        function(){
            $('header').addClass('over'); // 헤더에 .over 추가
            $(this).addClass('open'); // 현재 li에 .open 추가
        },
        function(){
            $('header').removeClass('over'); // 헤더에서 .over 제거
            $(this).removeClass('open'); // 현재 li에서 .open 제거
        }
    );
    $('.lang button').click(function (e) {
        e.stopPropagation(); // 클릭 이벤트 버블링을 막아 부모 요소로 전달되지 않도록 함
        $('.lang ul').toggle().css('display', 'flex');
      });
    
      // 메뉴 클릭 시 active 클래스 추가
      $('.tnb ul li a').click(function (e) {
        e.preventDefault(); // 기본 링크 동작 방지
        $('.tnb ul li').removeClass('active'); // 기존 active 제거
        $(this).parent().addClass('active'); // 현재 클릭된 요소에 추가
      });
    
      // header에서 마우스가 떠나면 .lang ul 숨기기
      $('header').mouseleave(function () {
        $(".lang ul").hide(); // 마우스가 header 밖으로 나가면 .lang ul 숨김
      });
});
