<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="riview.CustomerVO" %>
<%@page import="riview.CustomerDAO"%>

<% request.setCharacterEncoding("UTF-8"); %>
<% 
	String id = request.getParameter("id");
	String password = request.getParameter("password");
	String email = request.getParameter("email");
	
	CustomerVO vo = new CustomerVO();
	vo.setId(id);
	vo.setPassword(password);
	vo.setEmail(email);
	
	CustomerDAO dao = CustomerDAO.getInstance();
	int result = dao.customerSign(vo);
	
	if(result == 1){
		out.print("<hr/>");
		out.print("회원가입 성공");
	}else {
		out.print("<hr/>");
		out.print("회원가입 실패");
	}
%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>

</body>
</html>