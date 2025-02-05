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
		
		$('li[role="tab"]').click(function () {
			let target = $(this).attr('aria-controls'); // 클릭한 탭의 aria-controls 값 가져오기
	
			// 모든 탭에서 active 클래스 및 aria-selected 속성 제거
			$('li[role="tab"]').removeClass('active').attr('aria-selected', 'false');
			$(this).addClass('active').attr('aria-selected', 'true');
	
			// 모든 패널 숨기고, 해당 패널만 표시
			$('.tab_conts').removeClass('active').hide();
			$('#' + target).addClass('active').show();
		});
	
		// 기본적으로 첫 번째 탭 활성화
		$('li[role="tab"].active').trigger('click');

		const event_ticket_swiper = new Swiper('.event_ticket .swiper', { /* 팝업을 감싼는 요소의 class명 */
			slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
			spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
			breakpoints: {
				640: {    /* 640px 이상일때 적용 */
					slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
					spaceBetween: 48,
				},
				758: {    /* 640px 이상일때 적용 */
					slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
					spaceBetween: 24,
				},
			},
			centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
			loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
			autoplay: {  /* 팝업 자동 실행 */
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
				el: '.event_ticket .swiper-pagination', /* 해당 요소의 class명 */
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