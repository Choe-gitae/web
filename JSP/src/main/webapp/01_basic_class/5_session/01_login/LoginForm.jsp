<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String user = request.getParameter("user");
	String pass = "비밀번호를 확인해 주세요";
	if(user == null) {
		user = "";
		pass = "";
	}
%>
<!DOCTYPE html>
<html>
<head>
<title> 로그인창 </title>
</head>
<body>

<h3>로그인 확인하기 </h3> 
<form action="LoginService.jsp" method="get">
사용자: <input name='User' type='text' value="<%= user %>"><br/>
비밀번호: <input name='Pass' type='password'><%= pass %><br/>
<input type='submit' value='login'> 
</form>

</body>
</html>