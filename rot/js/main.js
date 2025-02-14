$(document).ready(function(){
    const newitem_swiper = new Swiper('.new_item .swiper', { /* 팝업을 감싼는 요소의 class명 */

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
		el: '.new_item .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'bullets',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},	
	navigation: {  
		nextEl: '.next',  
		prevEl: '.prev',  
	},
}); 


let line_obj = $('.history .year_group .color_line path') //반드시 path
let drag_rate = 0.5 //그림을 그리기 시작하는 화면의 위치
let line_start
let line_length
let line_h
let line_end
let line_drag
let scrolling
let window_h


function line_path(){
scrolling = $(window).scrollTop()
window_h = $(window).height()
line_start = line_obj.offset().top
line_h = line_obj.parent('svg').height()
line_length = line_obj.get(0).getTotalLength()
line_end = line_start + line_h

if(scrolling > (line_end - window_h) + (window_h * drag_rate)){
line_drag = 0
}else if(scrolling > (line_start - window_h) + (window_h * drag_rate)){
line_drag = line_length - line_length * ((scrolling - line_start + window_h - (window_h * drag_rate)) / line_h)
}else{
line_drag = line_length
}


line_obj.css('stroke-dashoffset', line_drag)
line_obj.css('stroke-dasharray', line_length)
}

line_path()
$(window).scroll(function(){
line_path()
})
$(window).resize(function(){
line_path()
})
})