<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSTL 기초 문법</title>
</head>
<body>
<!-- 변수선언 -->
<c:set var="gender" value="male"/>
<c:if test="${ gender eq 'male' }">당신은 남성입니다.</c:if>
<c:if test="${ gender == 'female' }">당신은 여성입니다.</c:if>

<c:set var="age">20</c:set>
<c:choose>
	<c:when test="${ age lt 10 }">어린이입니다.</c:when>
	<c:when test="${ age ge 10 and age lt 20 }">청소년입니다.</c:when>
	<c:otherwise>성인입니다.</c:otherwise>
</c:choose>
<c:set var="sum" value="0"></c:set>
<c:forEach var="i" begin="1" end="100">
	<c:set var="sum" value="${ sum+i }"></c:set>
</c:forEach>
1~100 까지의 합: ${ sum } <hr/>

<!-- 1부터 100까지의 짝수의 합 / 홀수의 합 구하기 -->
<c:set var="oddSum" value="0"></c:set>
<c:set var="evenSum" value="0"></c:set>
<c:forEach var="i" begin="1" end="100">
	<c:if test="${ i%2 == 1 }">
		<c:set var="oddSum" value="${ oddSum + i }"></c:set>
	</c:if>
	<c:if test="${ i%2 == 0 }">
		<c:set var="evenSum" value="${ evenSum + i }"></c:set>
	</c:if>
</c:forEach>
1~100 까지의 홀수합: ${ oddSum } <hr/>
1~100 까지의 짝수합: ${ evenSum } <hr/>

</body>
</html>

<!-- 
	* JSP 기초 문법
	< %@ %> : 설정
		- page
		- include
		- taglib  : JSTL 사용
	< %! %> : 선언 (변수,함수)
	< % %>  : 스크립트릿 (자바코드)
	< %= %> : 표현식 (화면결과 출력) ==> EL
	
 -->