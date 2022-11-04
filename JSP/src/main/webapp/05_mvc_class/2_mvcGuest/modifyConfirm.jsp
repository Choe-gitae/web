<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="board_ex.model.*,board_ex.service.*" %>

<%
	// 0. 넘겨받는 데이타의 한글 처리
	request.setCharacterEncoding("UTF-8");
%>
<%
	int result = (int) request.getAttribute("result");
%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>게시판글수정</title>
</head>
<body>

<%	if ( result == 1 ) { %>
		수정 되었습니다.
<%	}else {%>
		암호가 잘못 입력 되었습니다.
<%  } %>
<hr/>
<a href="list.do?cmd=list-page">방명록</a>
	


</body>
</html>