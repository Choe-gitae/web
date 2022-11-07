<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
 <%@ page import="mybatis.guest.model.Comment" %>   
 <%@ page import="mybatis.guest.service.CommentService" %>   

<% 
	int commentNo = Integer.parseInt( request.getParameter("cId") );
	Comment c = CommentService.getInstance().selectCommentByPrimaryKey(commentNo);
%>

<html>
<head>
<meta charset="UTF-8">
<title>수정</title>
</head>
<body>
<form action="updateCommentConfirm.jsp">
	<table>
	<tr><td>글번호</td><td><input type="text" name="commentNo" size="3" value="<%=c.getCommentNo()%>" readonly/></td></tr>
	<tr><td>사용자</td><td><input type="text" name="userId" size="15" value="<%=c.getUserId()%>" readonly/></td></tr>
	<tr><td>메세지</td><td><textarea name="commentContent" rows="10" columns="40"><%=c.getCommentContent()%></textarea></td></tr>
	<tr><td><input type="submit" value="수정하기"/></td></tr>
</table>
</form>
</body>
</html>