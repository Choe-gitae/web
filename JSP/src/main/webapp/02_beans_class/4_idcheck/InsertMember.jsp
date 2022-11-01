<%@page import="member.beans.MemberDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>

<% 
	String id = request.getParameter("id");
	String pw = request.getParameter("password");
	String name = request.getParameter("name");
	String tel = request.getParameter("tel");
	String addr = request.getParameter("addr");
%>

<jsp:useBean id="member" class="member.beans.Member">
	<jsp:setProperty name="member" property="id" param="id"/>
	<jsp:setProperty name="member" property="password" param="pw"/>
	<jsp:setProperty name="member" property="name" param="name"/>
	<jsp:setProperty name="member" property="tel" param="tel"/>
	<jsp:setProperty name="member" property="addr" param="addr"/>
</jsp:useBean>

<%
	MemberDao dao = MemberDao.getInstance();
	dao.insertMember(member);
%>