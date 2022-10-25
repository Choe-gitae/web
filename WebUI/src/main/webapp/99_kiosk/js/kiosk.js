$(document).ready(function(){
	
	var totalPrice = 0;
	
	$('ul.tabs li').click(function(){
		tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	$('img').click(function(){
		var tr = $('<tr/>');
		var count = $('<td><button class="btnMinus"> - </button><span id="cnt">1</span><button class="btnPlus"> + </button></td>')
		var name = $(this).parent().find("span").attr("data-name");
		var price = parseInt( $(this).parent().find("span").attr("data-price") );
		
		if( $("#list:contains("+name+")").length == 0 ){
			tr.append([$('<td/>').text(name),$('<td/>').text(price).attr("id","price"),count]);
			$('#list').append(tr);
			totalPrice += price;
			$('#total').val(totalPrice);
		}else{
			alert("이미 추가 되었습니다.");
		}
	});
		
	$('#list').on("click",".btnMinus",function(){
		if( $(this).parent().find("#cnt").text() === "1" ){
			totalPrice -= parseInt( $(this).closest("tr").find("#price").text() );
			$('#total').val(totalPrice);
			//$(this).parent().parent().remove();
			$(this).closest('tr').remove();
			
		}else{
			let cnt = parseInt($(this).parent().find("#cnt").text()) - 1;
			$(this).parent().find("#cnt").text(cnt);
			totalPrice -= parseInt( $(this).closest("tr").find("#price").text() );
			$('#total').val(totalPrice);
		}
	});
		
	$('#list').on("click",".btnPlus", function(){
		let cnt = parseInt($(this).parent().find("#cnt").text()) + 1;
		$(this).parent().find("#cnt").text(cnt);
		totalPrice += parseInt( $(this).closest("tr").find("#price").text() );
		$('#total').val(totalPrice);
	});

})