window.onload = function(){

		var frm = document.getElementById('frm');
		//var inputs = document.querySelectorAll("input");
		
		frm.onsubmit = function(evt) {
			evt.stopImmediatePropagation();
			evt.preventDefault();
			
			if( !frm.agree.checked ) {
				alert("약관을 읽고 체크해 주세요");
				return;
			}
			frm.submit();
		}


	}