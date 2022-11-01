<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="member.beans.MemberDao" %>     
<%
   String id = request.getParameter("id");
   String pw = request.getParameter("password");
   if (id == ""|| id == "null") {
      out.print("아이디를 입력해주세요.");
      return;
   }
   
   MemberDao dao = MemberDao.getInstance();
   boolean result = dao.checkLogin(id, pw);
    
   if (result)	out.print(true);
   else			out.print(false);
%>