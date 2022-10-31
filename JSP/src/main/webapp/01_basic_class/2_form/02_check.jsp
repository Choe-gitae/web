<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<% 
	String name = request.getParameter("name");
	String gender = request.getParameter("gender");
	String job = request.getParameter("occupation");
	String[] hobby = request.getParameterValues("hobby");
	String hobbyTxt = "";
	//if( hobby != null ){
		for(int i=0; hobby != null && i<hobby.length; i++)
			hobbyTxt += hobby[i] + "/";
	//}
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
이름 : <%= name %> <br/>
성별 : <%= gender %> <br/>
직업 : <%= job %> <br/>
취미 : <%= hobbyTxt %>
</body>
</html>