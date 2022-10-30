$(function(){
	
	$("div#sign_up form").validate({
		rules	: {
			id  		: { required : true },
			email 		: { required : true , email : true },
			password	: { minlength : 6 , maxlength : 12 },
			passconf	: { equalTo : password }
		},
		success : function(label){
			label.addClass("valid");
			label.text("성공");
		}
	});
	
	$("div#sch_id form").validate({
		rules	: {
			email 		: { required : true , email : true },
		},
		success : function(label){
			label.addClass("valid");
			label.text("성공");
		}
	});

})