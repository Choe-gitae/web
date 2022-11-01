<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-3.6.1.min.js"> </script>
<script type="text/javascript">
$(function(){
	
	var param = { cate:"book", name:"hong" };
	
	$.ajax({
		type	: "get",
		data	: param,
		url		: "04_server.jsp",
		datatype: "text",
		success	: parseData0
	})
	
	function parseData(result){
		//********************
		// 추후에 json라이브러리를 이용하여 json객체 변환
		var obj = {};
		obj = eval( "("+result+")" );
		$("input[name='cate']").val( obj.first );
		$("#name").val( obj.second );
	}
	
})
</script>
</head>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="cate" id="cate"/><br/>
두번째 데이터 : <input type="text" name="name" id="name"/><br/>
</body>
</html>


