$(function(){
	$("#hideButton").click(function(){
		$("#intro").hide();
	});
	
	$("#showButton").click(function(){
		$("#intro").show();
	});
	
	/*
	$("#toggleButton").click(function(){
		$("#intro > img").toggle();
	});
	*/
	$("#toggleButton").click(function(){
		if( $("#intro").is(":visible") ){
			$("#intro > img").fadeOut(1000);
		}else {
			$("#intro > img").fadeIn(1000);
		}
	});
	
	// 테이블의 내용 중 홀수행을 배경색 지정
	var tr = $("#celebs > .data > tbody > tr:odd");
	tr.css({"background":"lightblue"});
	//$("#celebs > .data > tbody > tr:odd").addClass("table_striping");
	
	// 마우스가 올라갔을 때 배경색 바뀌고 다시 나오면 원래 색으로
	$("#celebs tr").hover(function(){
		$(this).addClass("td_mouseover");
	}, function(){
		$(this).removeClass("td_mouseover");
	})
	
})