$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 1000000000,
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

		$(".tab_menu li a").click(function (e) {
			e.preventDefault();
			
			$(".tab_menu li").removeClass("active");
			$(this).parent().addClass("active");
	
			$(".tab_content section").hide();
			$($(this).attr("href")).show();
		});

		$("#section2").hide(); // 페이지 로드 시 section2 숨김

		const event_ticket_swiper = new Swiper('.event_ticket .swiper', { /* 팝업을 감싼는 요소의 class명 */
			slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
			spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
			breakpoints: {
				640: {    /* 640px 이상일때 적용 */
					slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
					spaceBetween: 48,
				},
			},
			centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
			loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
			autoplay: {  /* 팝업 자동 실행 */
				delay: 100000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
				el: '.event_ticket .swiper-pagination', /* 해당 요소의 class명 */
				clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
				type: 'bullets',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			},
		});
		gsap.registerPlugin(ScrollTrigger);
		const sections =  document.querySelector(".section");  //좌우요소를 감싸는 요소
		const large =  document.querySelector(".section .cont_wrap .cont"); //스크롤될 요소
		gsap.to(large, {
			y: () => (window.innerHeight - large.clientHeight - 64),  /* 실제 스크롤 값보다 더 스크롤 할 값 - 필요없으면 0 */
			ease: "none",
			scrollTrigger: {
				trigger: sections,
				pin: true,
				start: "top 20px", /* 좌우로 스크롤 될 동안의 위치, top top 상단에 고정, top 20% 상단에서 20% 떨어져서 */
				end: () => "+=500",
				scrub: 0.5, 
				markers: false,
				invalidateOnRefresh: true,
			}
		});
});