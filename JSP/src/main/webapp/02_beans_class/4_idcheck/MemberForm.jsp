<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 회원가입  </title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script type="text/javascript">

$(function(){
	
	function selectId(data){
		//alert(data);
		if(data.trim() == "-1"){
			$("#result").text("아이디를 입력해 주세요.");
			$('#sign').attr('disabled','disabled');
		}else if(data.trim() == "true"){
			$("#result").text("사용 불가능한 아이디 입니다.");
			$('#sign').attr('disabled','disabled');
		}else if (data.trim() == "false"){
			$("#result").text("사용 가능한 아이디 입니다.");
			$('#sign').removeAttr('disabled');
		}
	}
	
	
	function clear(){
		$("input[name='id']").val("");
		$("input[name='password']").val("");
		$("input[name='repassword']").val("");
		$("input[name='name']").val("");
		$("input[name='tel']").val("");
		$("input[name='addr']").val("");
		$('#sign').attr('disabled','disabled');
	}
	

	$(".dupChk").click(function(){
		//alert("ok");
		var param = { id : $("input[name='id']").val() };
		$.ajax({
			type	: "get",
			url		: "selectId.jsp",
			data	: param,
			dataType: "text",
			success	: selectId
		});
	});
	
	
 	$(".sign").click(function(){
 		var pw = $("input[name='password']").val();
 		var rePw = $("input[name='repassword']").val();
 		
		if(pw == rePw){
			$.ajax({
				type	: "get",
				url		: "InsertMember.jsp",
				data	: $("form[name='frm']").serialize(),
				dataType: "text",
				success	: clear
			})
		}else{
			alert("비밀번호가 일치하지 않습니다.");
			$("input[name='password']").val("");
			$("input[name='repassword']").val("");
			$("input[name='password']").focus();
		}
 	});
	
})
</script>
</head>
<body>

<h1>회원가입서 작성하기</h1>
 
   <form method="post" name="frm">
      <table>
         <tr>
            <td width="100">
            <font color="blue">아이디</font>
            </td>
            <td width="100">
            <input type="text" name="id" pattern="[A-Za-z]{3,}" required ="required">
            <input type="button" value="중복확인" class="dupChk"><br/>
            <div id="result"></div>
            </td>
         </tr>
         <tr>
            <td width="100">
            <font color="blue">비밀번호</font>
            </td>
            <td width="100">
            <input type="password" name="password" required ="required"/><br/>
            </td>
         </tr>
         <tr>
            <td width="100">
            <font color="blue">비밀번호학인</font>
            </td>
            <td width="100">
            <input type="password" name="repassword" required ="required"/><br/>
            </td>
         </tr>
         <tr>
            <td width="100">
            <font color="blue">이름</font>
            </td>
            <td width="100">
            <input type="text" name="name" required ="required"/><br/>
            </td>
         </tr>
         <tr>
            <td width="100">
            <font color="blue">전화번호</font>
            </td>
            <td>
            <input type="text" size="15" name="tel"/>
            <br/>
            </td>
         </tr>
         <tr>
            <td width="100">
            <font color="blue">주소</font>
            </td>
            <td>
            <input type="text" size="50" name="addr"/><br/>
            </td>
         </tr>
         <tr>
            <td width="100">
             <!--로그인 버튼-->
             <input type="button" value="회원가입" class="sign" disabled>
            </td>
            <td width="100">
            <input type="reset" name="cancel" value="취소"><br/>
            </td>
         </tr>
      </table>
   </form>

 </body>
</html>
    