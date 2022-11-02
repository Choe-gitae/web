<%@page import="member.beans.MemberDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="member" class="member.beans.Member"></jsp:useBean>
<jsp:setProperty name="member" property="*"/>

<%
	MemberDao dao = MemberDao.getInstance();
	dao.insertMember(member);
%>