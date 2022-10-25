$(document).ready(function(){
	
	$("p#intro").animate({
		padding : "20px",
		fontSize : "30px"
	}, 2000);
	
	$("div#navigation li").hover(function(){
		$(this).animate({ paddingLeft: "+=15px" }, 100);
	}, function(){
		$(this).animate({ paddingLeft: "-=15px" }, 100);
	});
	
	// 고정퀵메뉴 원리
	$(window).scroll(function(){
		$("div#navigation").css({ "top": $(document).scrollTop() })
	});
	
})