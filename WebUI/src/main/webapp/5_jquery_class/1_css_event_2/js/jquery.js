$(function(){
	
	$(".header > .menu > li > a > img").hover(function(){
		let src = $(this).attr("src");
		$(this).attr("src",src.replace('off','on'));
	}, function(){
		let src = $(this).attr("src");
		$(this).attr("src",src.replace('on','off'));
	});
	
})