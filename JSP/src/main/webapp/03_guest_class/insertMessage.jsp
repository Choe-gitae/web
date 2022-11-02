<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	$(".submitBtn").click(function(){
		//alert("ok");
		var guestName	= $("input[name='guestName']").val();
		var password	= $("input[name='password']").val();
		var message		= $("textarea[name='message']").val();
		
		if( guestName == "" | password == "" | message == ""){
			alert("빈칸을 채워 주세요");
		}else{
			$("form[name='frm']").submit();
		}
	});
})
</script>

<title> 방명록 </title>
</head>

<body>

	<form action="saveMessage.jsp" name="frm" method="get">
		이름 : <input type="text" name="guestName" required/><br/><br/>
		암호 : <input type="password" name="password" required /><br/><br/>
		메세지 : <textarea name="message" rows="3" cols="30" required></textarea><br/><br/>
		<input type="button" class="submitBtn" value="메세지 남기기">
	</form>
</body>
</html>