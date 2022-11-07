<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ page import="mybatis.guest.service.CommentService" %>   

<jsp:useBean id="comment" class="mybatis.guest.model.Comment"></jsp:useBean>
<jsp:setProperty property="*" name="comment"/>


<%
	int result = CommentService.getInstance().updateComment(comment);
%>

<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<% if(result > 0) %>코멘트가 수정 되었습니다.
<% else %>코멘트 수정 실패

<a href="listComment.jsp"><button>리스트</button></a>
</body>
</html>