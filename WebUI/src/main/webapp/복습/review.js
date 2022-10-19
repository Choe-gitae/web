window.onload = function() {
	let table = document.getElementById("tbl");
	let item = document.getElementsByClassName("item");
	let bInsert = document.getElementById("bInsert");
	bInsert.onclick = appendRow;
	
	// 테이블에 이벤트 걸 때
	table.onclick = function(evt) {
		let price = evt.target.getAttribute("data-price");
		alert(price);
	}
	
	
	// 테이블데이터에 이벤트 걸 때
	for(let i = 0; i < item.length; i++)
		item[i].onclick = function() {
		let price = item[i].getAttribute("data-price");
		alert(price);
	}
	
	
	// 테이블에 행 추가
	function appendRow() {
		let text1 = document.getElementById("txt1").value;
		let text2 = document.getElementById("txt2").value;
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		td1.setAttribute("data-price", "10000");
		let td2 = document.createElement("td");
		let txt1 = document.createTextNode(text1);
		let txt2 = document.createTextNode(text2);
		
		td1.appendChild(txt1);
		td2.appendChild(txt2);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	}
	
}