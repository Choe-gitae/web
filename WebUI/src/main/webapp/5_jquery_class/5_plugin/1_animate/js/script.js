$(function(){
	
	$("#bio h3").css({"cursor":"pointer"});
	
	$("div#bio > div").hide();
	//$("#bio > div").show();
	
	$("#bio h3").each(function(){
		$(this).click(function(){
			//$(this).next().show();
			$(this).next().animate({"height":"toggle"}, 2000, "easeOutBounce");
		})
	})
	
		
})