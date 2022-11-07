<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ page import="mybatis.guest.service.CommentService" %>  

<%
	int commentNo = Integer.parseInt( request.getParameter("cId"));
	int result = CommentService.getInstance().deleteComment(commentNo);
%>
<html>
<head>
<meta charset="UTF-8">
<title>삭제</title>
</head>
<body>
<% if(result > 0) %>코멘트가 삭제 되었습니다.
<% else %>코멘트 삭제 실패

<a href="listComment.jsp"><button>리스트</button></a>
</body>
</html>