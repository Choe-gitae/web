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
		// 검색창 포커스시 배경 흰색
	var search = $("#sch_f #keyword");
	search.focus(function(){
		$(this).css("background", "white");	
	});
		// 검색창 포커스 잃으면 배경 리셋
	search.blur(function(){
		$(this).css("background", "url(images/sch_guide.gif) no-repeat");
	});
	
	
	// (3) 탭팬 구현 (10점)
	var tabs = $("#tabmenu img");
	tabs.each(function(){
		$(this).click(function(){
			let LastTab = $("dl#tabmenu img[src*='over']");	// img [src]에 'over'가 포함된 요소
			let lastTabSrc = LastTab.attr("src");			// 마지막탭 [src] 값
			let thisSrc = $(this).attr("src");				// 클릭한 탭 [src] 값 저장
			
			$("#tabmenu dd").hide();				// 패널 모두 숨기기
			$(this).closest("dt").next().show();	// 클릭한 탭 패널 보이기
			
			LastTab.attr( "src" , lastTabSrc.replace("over","out") );	// 마지막탭 [src] 값 변경
			$(this).attr( "src" , thisSrc.replace("out","over") ); 		// 클릭한 탭 [src] 값 변경
		})
	})
	
	
	// (4)이미지슬라이드 구현 (10점)
	var bestBookSlider = $("div#best_bg > ul").bxSlider({
		auto		: true,
		minSlides	: 5,
		maxSlides	: 5,
		moveSlides	: 1,
		slideWidth	: 125,
		slideMargin	: 25,
		autoHover	: true,
		controls	: false,
		pager		: false
	});
		// bxslider  css 세부작업
	$("div#bestbook_zone div#best_bg .bx-wrapper").css("margin-left","120px");
	$("div#bestbook_zone div#best_bg .bx-wrapper img").css("vertical-align","middle");
	$("div#bestbook_zone div#best_bg span").css("padding","18px 8px 0px 0px");
		// <p>prev_btn, <p>next_btn 클릭시 슬라이드 이동
	var prevBtn = $("#best_bg > p.prev_btn");
	prevBtn.click(function(){
		bestBookSlider.goToPrevSlide();
	});
	var nextBtn = $("#best_bg > p.next_btn");
	nextBtn.click(function(){
		bestBookSlider.goToNextSlide();
	});
	
	
	// (5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)
		// 로그인 버튼 누르면 로그인form 위치 지정
	$("li.login_wrap").click(function(){
		$("#login_f").offset({top:25});
	})
		// Close 버튼 누르면 로그인form 리셋
	$("p.login_close_btn").click(function(){
		$("#login_f").offset({top:-500});
		return false;	//<a> href false
	})
	
	
	// (6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
	var totalMenuBtn = $("p#total_btn img");						// 전체메뉴 버튼
	var totalMenuPanel = $("div#total_menu");						// 전체메뉴 패널
	var totalMenuCloseBtn = $("div#total_menu > p#total_close");	// 전체메뉴 닫기 버튼
		// 전체메뉴 토글 함수
	function totalMenuToggle(){
		let totalMenuSrc = totalMenuBtn.attr("src");			// 전체메뉴 버튼 [src] 값
		
		// 전체메뉴 이미지 변경
		if( totalMenuSrc.includes("out") ) {					// 전체메뉴 버튼 [src] 값 "out" 포함하면
			totalMenuSrc = totalMenuSrc.replace("out","over");	// 전체메뉴 버튼 [src] 값 변경
			totalMenuBtn.attr( "src" , totalMenuSrc );
		}else {													// 전체메뉴 버튼 [src] 값 "out" 포함 안하면
			totalMenuSrc = totalMenuSrc.replace("over","out");	// 전체메뉴 버튼 [src] 값 변경
			totalMenuBtn.attr( "src" , totalMenuSrc );
		}
		// 전체메뉴 display 토글
		totalMenuPanel.toggle();
	}
		// 전체메뉴 버튼 클릭시
	totalMenuBtn.click(function(){
		totalMenuToggle();
	})
		// 전체메뉴 Close버튼 클릭시
	totalMenuCloseBtn.click(function(){
		totalMenuToggle();
	})
	
	
	// (7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)
	// (7-1) 팝업창 띄우기
	var popup = window.open("popup.html","popup","width=300","height=350");
	popup.resizeTo(320,430);
	
	
	// (7-2) 홈페이지 하단에 주소 추가
	var address = $("<div><img src='images/address.gif'></div>");
	$("#container").append(address);
	
	
	// (7-3) 알림판 버튼 & 탭 & 인터벌
	var rollBannerBtns = $("div#roll_banner_wrap dt img");
	var rollBannerPlayBtn = $("div#roll_banner_wrap a.playBtn");
	var rollBannerStopBtn = $("div#roll_banner_wrap a.stopBtn");
	var rollBannerInterval = null;
		// 알림판 버튼 클릭
	rollBannerBtns.each(function(){
		$(this).click(function(){
			let lastBtn = $("div#roll_banner_wrap dt img[src*='over']");	// img [src]에 'over'가 포함된 요소
			let lastBtnSrc = lastBtn.attr("src");							// 요소 [src] 속성값
			let thisSrc = $(this).attr("src");								// 클릭한 버튼 [src]
			//alert(btnNum+10);
			
			$("div#roll_banner_wrap dd").hide();	// 패널 모두 숨기기
			$(this).closest("dt").next().show(); 	// 클릭한 버튼 패널 보이기
			
			lastBtn.attr( "src" , lastBtnSrc.replace("over","out") );	// 마지막 버튼 [src] 값 변경
			$(this).attr( "src" , thisSrc.replace("out","over") );		// 클릭한 버튼 [src] 값 변경
		})
	})
		// 알림판 재생버튼 인터벌 시작
	rollBannerPlayBtn.click(function(){
		rollBannerInterval = setInterval(function(){
			let rollPanels = $("div#roll_banner_wrap dd");					// 알림판 패널 ALL
			let rollBtns = $("div#roll_banner_wrap dt img");				// 알림판 버튼 ALL
			let lastBtn = $("div#roll_banner_wrap dt img[src*='over']");	// 마지막 버튼
			let lastBtnSrc = lastBtn.attr("src");							// 마지막 버튼 [src] 값
			let btnNum = parseInt( lastBtnSrc.match(/\d/)-1 );				// 버튼번호
			let nextBtn;													// 다음 버튼
			let nextBtnSrc;													// 다음 버튼 [src] 값
			let nextPanel;													// 다음 패널
			if( btnNum != rollBannerBtns.length-1 ){
				nextBtn = $(rollBtns[btnNum+1]);
				nextBtnSrc = nextBtn.attr("src");
				nextPanel = $(rollPanels[btnNum+1]);
			}else{
				nextBtn = $(rollBtns[0]);
				nextBtnSrc = nextBtn.attr("src");
				nextPanel = $(rollPanels[0]);
			}
			
			rollPanels.hide();												// 패널 숨기기 ALL
			nextPanel.show();			 									// 다음 패널 보이기
			lastBtn.attr( "src" , lastBtnSrc.replace("over","out") );		// 마지막 버튼 [src] 값 변경
			nextBtn.attr( "src" , nextBtnSrc.replace("out","over") ); 		// 다음 버튼 [src] 값 변경
			lastBtn = nextBtn;												// 다음 버튼 마지막 버튼으로 지정
			lastBtnSrc = lastBtn.attr("src");								// 다음 버튼 [src] 값 저장
		},2000)
	})
		// 알림판 정지버튼 인터벌 취소
	rollBannerStopBtn.click(function(){
		clearInterval(rollBannerInterval);
	})
	
	
	// (7-4) 로그인창 포커스 블러
	var inputId = $("input#user_id");
	var inputPw = $("input#user_pw");
		// 입력값이 있을 때 & 없을 때 배경설정 함수
	function idBg(){
		if( inputId.val() == "" ){
			inputId.css("background", "url(images/login_title_id.gif) no-repeat");	
		}else{
			inputId.css("background", "white");
		}
	}
		// 입력값이 있을 때 & 없을 때 배경설정 함수
	function pwBg(){
		if( inputPw.val() == "" ){
			inputPw.css("background", "url(images/login_title_pw.gif) no-repeat");	
		}else{
			inputPw.css("background", "white");
		}
	}
		// 아이디 비밀번호 <img>태그 삭제
	$("form#login_f p.user_id img").remove();
	$("form#login_f p.user_pw img").remove();
		// 아이디 포커스 잃으면 배경 리셋
	inputId.blur(function(){
		idBg();
	});
		// 비밀번호 포커스 잃으면 배경 리셋
	inputPw.blur(function(){
		pwBg();
	});
		// 아이디창 포커스시 배경 흰색
	inputId.focus(function(){
		$(this).css("background", "white");	
	});
		// 비밀번호창 포커스시 배경 흰색
	inputPw.focus(function(){
		$(this).css("background", "white");	
	});
	
	
	// (7-5) 회원가입
	var signBtn = $("p.join_btn_wrap > a:contains('회원가입')");
	signBtn.click(function(){
		let signPopup = window.open("sign.html","","width=400","height=400");
		signPopup.resizeTo(600,600);
	})
	
	
	// (7-6) 아이디, 비밀번호 찾기
	var searchIdBtn = $("form#login_f a.sch_id_btn");
	searchIdBtn.click(function(){
		let signPopup = window.open("sign.html","","width=400","height=400");
		signPopup.resizeTo(600,600);
	})
	
	
	// (7-7) 로그인 및 쿠키
	var loginForm = $("form#login_f");
	var loginBtn = $("form#login_f p.log_btn");
	var pwSaveChk = $("form#login_f input#save_id")
	
	loginForm.attr("action","jsp/login.jsp");
	loginBtn.click(function(){
		if( pwSaveChk.is(":checked") ) {
			$.cookie( "id" , $("#user_id").val() );
			$.cookie( "password" , $("#user_pw").val());
		}
	})
		// 쿠키 값 가져와서 로그인창에 입력
	let id = $.cookie("id");
	let password = $.cookie("password");
	$("#user_id").val(id);
	$("#user_pw").val(password);
	idBg();	pwBg();
	
})