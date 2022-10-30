<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="riview.CustomerVO" %>
<%@page import="riview.CustomerDAO"%>

<% request.setCharacterEncoding("UTF-8"); %>
<% 
	String id = request.getParameter("user_id");
	String password = request.getParameter("user_pw");
	
	CustomerVO vo = new CustomerVO();
	vo.setId(id);
	vo.setPassword(password);
	
	CustomerDAO dao = CustomerDAO.getInstance();
	int result = dao.customerLogin(vo);
	
	if(result == 1){
		out.print("<hr/>");
		out.print("로그인 성공");
	}else {
		out.print("<hr/>");
		out.print("로그인 실패");
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