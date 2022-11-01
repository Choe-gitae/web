<%@page import="javax.management.Query"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="member.beans.MemberDao" %>

<% String id = request.getParameter("id"); %>
<% System.out.print(id); %>

<% 
	if( id == "" || id == null ){
		out.print("-1");
		return;
	}

	MemberDao dao = MemberDao.getInstance();
	boolean result = dao.isDuplicatedId(id);
	
	if( result )	out.print(true);
	else			out.print(false);
%>