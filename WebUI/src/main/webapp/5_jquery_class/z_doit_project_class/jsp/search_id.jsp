<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="riview.CustomerVO" %>
<%@page import="riview.CustomerDAO"%>

<% request.setCharacterEncoding("UTF-8"); %>
<% 
	String email = request.getParameter("email");
	
	CustomerVO vo = new CustomerVO();
	vo.setEmail(email);
	
	CustomerDAO dao = CustomerDAO.getInstance();
	String result = dao.searchId(vo);
	
	if(result != null) {
		out.print("<p>아이디 : "+result+"</p>");
	}else{
		out.print("회원이 아닙니다.");
	}
	
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>