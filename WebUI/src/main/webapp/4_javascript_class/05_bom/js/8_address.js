window.onload = function() {
	
	document.getElementById("address_kakao_search").onclick = function() {
		 new daum.Postcode({
             oncomplete: function(data) { //선택시 입력값 세팅
                 document.getElementById("address_kakao_result").value = data.address; 
             }
         }).open();
	 }
}