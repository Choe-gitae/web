<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% request.setCharacterEncoding("UTF-8"); %>
<% String name = request.getParameter("name"); %>
<% String[] animals = request.getParameterValues("animals"); %>

<% out.print("이름: " + name + "<hr/>"); %>
<% out.print("좋아하는 동물: "); %>
<% 
	for(int i=0; animals!=null && i<animals.length; i++){
		out.print(animals[i] + "/");
	}
%>
<% 
	for(String a : animals){
		out.print(a + "/");
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