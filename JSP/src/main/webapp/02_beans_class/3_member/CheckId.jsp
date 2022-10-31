<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="member.beans.*" %>
<% request.setCharacterEncoding("UTF-8"); %>

<% String id = request.getParameter("userId"); %>
<%
	boolean idChk = false;
		MemberDao dao = MemberDao.getInstance();
		idChk = dao.isDuplicatedId(id);
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 아이디 중복 확인 </title>
</head>
<body>
<%  if( id.equals("") || id.equals(null) ){ %>
		아이디를 입력하세요.
<%	}else if( idChk == true ) { %>
		사용중인 아이디가 있습니다. 다시 입력하여 주십시오.
<%  }else { %>
		사용할 수 있는 아이디입니다.
<%  } %>
</body>
</html>