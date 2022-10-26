$(function(){
	
	$(".accordion").each(function(){
		var allDt = $(this).find("dt");
		var allDd = $(this).find("dd");
		
		allDd.hide();
		allDd.first().show();
		
		allDt.css({"cursor":"pointer"});
		
		allDt.click(function(){
			allDd.hide();
			//if( $(this).next().is(:visible) )
			//$(this).next().show();
			//$(this).next().fadeIn(1000);
			//$(this).next().slideDown();
			$(this).next().toggle();
		});
	});
	
});