$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 2500,
			disableOnInteraction: true,
		},
	
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'bullets',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			// renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
			// 	return '<span class="' + className + '">' + (index + 1) + "</span>";
			// },
		},
	});

	// 페이지 로드 시 기본적으로 일본 탭을 활성화하고 일본 콘텐츠만 표시
    $('#japan').addClass('active').attr('aria-selected', 'true');
    $('#japan_pannel').addClass('active');
    $('#japan i').addClass('active-icon').removeClass('sr-only'); // 일본 탭 아이콘 활성화

    // 페이지가 로드되었을 때 일본 컨텐츠만 보이게 설정
    $("#japan_pannel").show();
    $("#dognum_pannel").hide();
    
    // 일본 버튼 클릭 시
    $("#japan").click(function() {
        // 일본 버튼 활성화
        $(this).addClass('active').attr('aria-selected', 'true');
        // 동남아 버튼 비활성화
        $("#dognum").removeClass('active').attr('aria-selected', 'false');
        
        // 일본 컨텐츠 보이게
        $("#japan_pannel").show();
        // 동남아 컨텐츠 숨기기
        $("#dognum_pannel").hide();

        // 일본 탭 아이콘 활성화 및 표시
        $('#japan i').addClass('active-icon').removeClass('sr-only');
        // 동남아 탭 아이콘 비활성화 및 숨기기
        $('#dognum i').removeClass('active-icon').addClass('sr-only');

        // 일본 탭에 '선택됨' 텍스트 추가
        $('#japan').find('i').remove(); // 기존에 있는 i 태그 제거 (비활성화 상태에서)
        $('#japan').append('<i class="sr-only created">선택됨</i>'); // 선택됨 텍스트 추가
        // 동남아 탭에서 '선택됨' 텍스트 제거
        $('#dognum').find('i').remove(); 
    });

    // 동남아 버튼 클릭 시
    $("#dognum").click(function() {
        // 동남아 버튼 활성화
        $(this).addClass('active').attr('aria-selected', 'true');
        // 일본 버튼 비활성화
        $("#japan").removeClass('active').attr('aria-selected', 'false');
        
        // 동남아 컨텐츠 보이게
        $("#dognum_pannel").show();
        // 일본 컨텐츠 숨기기
        $("#japan_pannel").hide();

        // 동남아 탭 아이콘 활성화 및 표시
        $('#dognum i').addClass('active-icon').removeClass('sr-only');
        // 일본 탭 아이콘 비활성화 및 숨기기
        $('#japan i').removeClass('active-icon').addClass('sr-only');

        // 동남아 탭에 '선택됨' 텍스트 추가
        $('#dognum').find('i').remove(); // 기존에 있는 i 태그 제거 (비활성화 상태에서)
        $('#dognum').append('<i class="sr-only created">선택됨</i>'); // 선택됨 텍스트 추가
        // 일본 탭에서 '선택됨' 텍스트 제거
        $('#japan').find('i').remove();
    });

	const event_ticket_swiper = new Swiper('.event_ticket .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			770: {   
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.event_ticket .swiper_wrap .swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지s 값 */
			type: 'bullets',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});
		
		// gsap.registerPlugin(ScrollTrigger);

		// function initScrollTrigger() {
		// 	// 기존 ScrollTrigger 제거 (초기화)
		// 	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		
		// 	if (window.innerWidth > 768) {
		// 		// 768px 초과에서만 실행
		// 		const news_sections = document.querySelector('.news .wrapper .section');  
		// 		const large = document.querySelector('.news .wrapper .section .cont_wrap .cont');
		
		// 		gsap.to(large, {
		// 			y: () => (window.innerHeight - large.clientHeight - 0), 
		// 			ease: "none",
		// 			scrollTrigger: {
		// 				trigger: news_sections,
		// 				pin: true,
		// 				pinSpacing: true,
		// 				start: "top 10%",
		// 				end: () => "+=500",
		// 				scrub: 0.5,
		// 				markers: false,
		// 				invalidateOnRefresh: false,
		// 			}
		// 		});
		// 	}
		// }
		// // 초기 실행
		// initScrollTrigger();
		
		// // 화면 크기 변경 시 다시 적용
		// window.addEventListener("resize", initScrollTrigger);

	$('.news .news_group .tit').sticky({
		stickyClass: 'sticky',      // 고정될 때 추가할 클래스
		anchorClass: 'sticky-anchor', // 앵커 역할을 할 클래스
		activeClass: 'active',      // 스크롤 시 활성화될 때 추가할 클래스
		buffer: 80               // 고정될 때 위쪽 헤더영역기준으로 (20px)	
	});
});