window.onload = function() {
	
	//let frm = document.querySelector("#frm");
	
	// 드랍박스 성인, 아동, 유아 20명씩 추가
	for(let i=0; i < 20; i++) {
		frm.adult.add( new Option(i+"명", i) );
	}
	for(let i=0; i < 20; i++) {
		frm.kid.add( new Option(i+"명", i) );
	}
	for(let i=0; i < 20; i++) {
		frm.baby.add( new Option(i+"명", i) );
	}
	
	frm.adult.onchange = totalCalc;
	frm.kid.onchange = totalCalc;
	frm.baby.onchange = totalCalc;
	
	function totalCalc() {
		frm.total.value = frm.adult.value * 39000 + frm.kid.value * 29000 + frm.baby.value * 19000 +"원";
	}
	
	// 확인버튼
	frm.onsubmit = function(evt) {
		evt.stopImmediatePropagation();
		evt.preventDefault();
		
		if( !frm.agree1.checked || !frm.agree2.checked ) {
			alert("약관을 읽고 체크해 주세요");
			return;
		}
		frm.submit()
	}
	
}