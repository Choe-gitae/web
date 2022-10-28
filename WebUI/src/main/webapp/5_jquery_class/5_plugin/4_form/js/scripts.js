/**
 * 
 */
 
$(function(){
	
	$("div#signup > form").validate({
		rules	: {
			name  		: { required : true },
			email 		: { required : true , email : true },
			website 	: { url : true },
			password	: { minlength : 6 , maxlength : 12 },
			passconf	: { equalTo : password }
		},
		success : function(label){
			label.addClass("valid");
			label.text("성공");
		}
	});
	
	
	$(".stats > .check-all").click(function(){
		/*
		var checked = $(".stats > .check-all").is(":checked");
		if( checked ){
			$(".stats > .agree").prop("checked", true);
		}else {
			$(".stats > .agree").prop("checked", false);
		}
		*/
		$(".stats > .agree").prop( "checked", $(".stats > .check-all").is(":checked") );
	});
	
	$(".stats").on("click",".agree",function(){
		let checked = $(this).is(":checked");
		
		if(!checked){
			$('.check-all').prop('checked', false);
		} 
   	});
	
})