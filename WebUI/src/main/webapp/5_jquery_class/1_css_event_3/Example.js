$(function(){
	
	// 글씨크기 변경
	$("#wrap .fontSize > button:contains('+')").click(function(){
		$("#txt").css("font-size","+=1px");
	})
	$("#wrap .fontSize > button:contains('-')").click(function(){
		$("#txt").css("font-size","-=1px");
	})
	
	//$('.fontSize:first')
	//$('.fontSize:last')
	//$('.fontSize > button:first')
	//$('.fontSize > button:last')
	//$('.fontSize > button:eq(0)')
	
	// 글씨체 변경
	$('#fontstyle').change(function(){
		$('#txt').css({
		'font-family': $(this).val()
		});
		//$('#txt').css( 'font-family', $(this).val() );
		
		//$('#fontstyle')
   });
	
})