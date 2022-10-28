$(function(){
/*	
	* 필요시 main.js 파일을 첨부할 수도 있습니다.
(1) 오늘 날짜 출력 (10점)
(2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
(3) 탭팬 구현 (10점)
(4) 이미지슬라이드 구현 (10점)
(5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)
(6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
(7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)
*/	
	// (1)오늘 날짜 출력 (10점)
	var today = new Date();
	$("#date_wrap .year").text(today.getFullYear());
	$("#date_wrap .month").text(today.getMonth()+1);
	$("#date_wrap .date").text(today.getDate());
	
	// (2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
	$("#sch_f #keyword").focus(function(){
		$(this).css("background", "white");
	});
	
	$("#sch_f #keyword").blur(function(){
		$(this).css("background", "url(images/sch_guide.gif) no-repeat");
	});
	
	// (3) 탭팬 구현 (10점)
	$("#tabmenu img").each(function(){
		$(this).click(function(){
			$("#tabmenu dd").hide();
			$(this).closest("dt").next().show();
		})
	})
	
	// (4)이미지슬라이드 구현 (10점)
	var mySlider = $('#best_bg>ul').bxSlider({
		auto:true,
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 1,
		slideWidth: 150,
		autoHover: true,
		controls: false,
		pager:false
	});
	
	$(".bx-wrapper").css("margin-left","120px");
	$(".bx-wrapper img").css("vertical-align","middle");
	$(".#best_bg li").css("width","120");
	
	$(".prev_btn").click(function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToPrevSlide();
            // <a>의 링크를 차단한다.
            return false;
	});
	$(".next_btn").click(function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToNextSlide();
            // <a>의 링크를 차단한다.
            return false;
	});
	
})