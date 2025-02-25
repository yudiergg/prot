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

// swiper.autoplay.stop();  
// swiper.autoplay.start();


/* 팝업존 */
const popzone_wrap_swiper = new Swiper('.number4 .popzone_wrap .swiper', { /* 팝업을 감싼는 요소의 class명 */
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
		delay: 100000,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '.popzone_wrap .swiper_nav .prev',
		prevEl: '.popzone_wrap .swiper_nav .next',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
});

    // 초기 설정: 모든 ul에서 on 제거한 후, 첫 번째 패널(aria-labelledby="panel_01")의 ul에 on 추가
    $(".tab_content ul").removeClass("on");
    $("[aria-labelledby='panel_01'] ul").addClass("on");

    $(".tab_list li").click(function() {
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

        // 모든 tab_content 내의 ul에서 on 제거
        $(".tab_content ul").removeClass("on");

        // aria-labelledby가 panelId인 요소의 ul에 on 추가 (CSS에서 on일 때 display:block 처리)
        $("[aria-labelledby='" + panelId + "'] ul").addClass("on");
    });
})
