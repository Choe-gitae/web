<%@page import="mvc.guest.model.Message"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="board_ex.service.*, board_ex.model.*" %>
<%
	Message msg = (Message) request.getAttribute("msg");
%>   
    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>방명록 수정하기</title>
</head>
 <body>
	<h4> 방명록 수정하기 </h4><br/>
	<form name='frm' method='post' action="modify.do?cmd=modify-do">
	작 성 자 : <input type='text' name="guestName" value="<%= msg.getGuestName()%>"><br/><br/>
	패스워드(수정/삭제시 필요) :
			<input type='password' name="password"><br/><br/>
	메 세 지 : <textarea name='message' rows='10' cols='40'><%= msg.getMessage()%></textarea><br/><br/>
	<input type="hidden" name="id" value="<%=msg.getId()%>">
	<input type='submit' value='수정하기'>
	<input type='button' value='목록보기' onclick="list.do?cmd=list-page">
	</form>

</body>
</html>