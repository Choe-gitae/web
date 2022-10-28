$(function(){
	// 첫번째 <a>를 찾아서 prettyPopin 실팽
	$("a[rel='prettyPopin']:eq(0)").prettyPopin({ width:500 });
	$("a[rel='prettyPopin']:eq(1)").prettyPopin(
		{ width		: 500,
		  callback	: function(){
							alert("팝업이 닫힙니다.")
					  }
	});
	
})