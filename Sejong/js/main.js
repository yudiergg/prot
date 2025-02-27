$(document).ready(function(){
    const visual_popup_swiper = new Swiper('.visual_popup .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

    slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 1,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 0,
		},
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},	
	navigation: {  
		nextEl: '.next',  
		prevEl: '.prev',  
	},
});

// 초기 상태 설정 (처음에는 stop 버튼만 보이도록)
$('.visual .visual_popup .swiper .swiper_nav .buntton_inner .start').hide(); // 처음에 play 숨기기

// stop 버튼 클릭 시 -> autoplay 멈추고 play 버튼 보이기
$('.visual .visual_popup .swiper .swiper_nav .buntton_inner .stop').on('click', function () {
    $(this).hide(); // stop 버튼 숨기기
    $('.visual .visual_popup .swiper .swiper_nav .buntton_inner .start').show(); // play 버튼 표시
    visual_popup_swiper.autoplay.stop(); // Swiper 자동 재생 정지
});

// play 버튼 클릭 시 -> autoplay 시작하고 stop 버튼 보이기
$('.visual .visual_popup .swiper .swiper_nav .buntton_inner .start').on('click', function () {
    $(this).hide(); // play 버튼 숨기기
    $('.visual .visual_popup .swiper .swiper_nav .buntton_inner .stop').show(); // stop 버튼 표시
    visual_popup_swiper.autoplay.start(); // Swiper 자동 재생 시작
});



/* 팝업존 */
const popzone_wrap_swiper = new Swiper('.section_popupzone .popzone_wrap .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		800: {    /* 640px 이상일때 적용 */
			slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '.popzone_wrap .swiper_nav .next',
		prevEl: '.popzone_wrap .swiper_nav .prev',
	},
});

// 초기 설정: 모든 tabpanel을 숨기고, 첫 번째 패널을 활성화
$(".tab_content [role='tabpanel']").attr("aria-hidden", "true").find("ul").removeClass("on");
$("#tabpanel_01").attr("aria-hidden", "false").find("ul").addClass("on");

// 추가: 모든 .more 숨기기, 첫 번째 패널의 .more 보이기
$(".tab_content .more").hide();
$("#tabpanel_01 .more").show();

$(".tab_list li").on('click focusin', function() {
    // 모든 탭에서 active 제거
    $(".tab_list li").removeClass("active")
        .attr("aria-selected", "false")
        .removeAttr("title");

    // 클릭한 탭에 active 추가
    $(this).addClass("active")
        .attr("aria-selected", "true")
        .attr("title", "선택됨");

    // 클릭한 탭의 aria-controls 값(panel_01, panel_02, ...)을 가져옴
    var panelId = $(this).attr("aria-controls");

    // 모든 tabpanel 숨기기
    $(".tab_content [role='tabpanel']").attr("aria-hidden", "true").find("ul").removeClass("on");

    // 선택된 tabpanel 보이기
    $("#" + panelId).attr("aria-hidden", "false").find("ul").addClass("on");

    // 추가: 모든 .more 숨기고, 선택된 패널의 .more 보이기
    $(".tab_content .more").hide();
    $("#" + panelId + " .more").show();
});
})
