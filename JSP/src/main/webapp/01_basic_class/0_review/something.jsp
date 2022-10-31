<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="member.dao.*" %>

<%
// 0. 한글처리
request.setCharacterEncoding("UTF-8");

// 1. 이전 폼의 입력값 얻어오기
String name = request.getParameter("realName");
String nickname = request.getParameter("nickname");
String email = request.getParameter("myemail");
String myage = request.getParameter("myage");

// 2. VO객체에 저장하기
MemberVO vo = new MemberVO();
vo.setRealname(name);
vo.setNickname(nickname);
vo.setMyemail(email);
vo.setMyage(Integer.parseInt(myage));

// 3. DB에 입력하기
MemberDAO dao = MemberDAO.getInstance();
dao.insert(vo);

// 4. 출력은 알아서
out.print(name+"/");
out.print(nickname+"/");
out.print(email+"/");
out.print(myage+"/");
%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>