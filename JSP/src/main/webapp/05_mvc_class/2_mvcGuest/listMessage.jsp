<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="mvc.guest.model.*" %>    
<%@ page import="java.util.List" %>

<%  //웹브라우저가 게시글 목록을 캐싱할 경우 새로운 글이 추가되더라도 새글이 목록에 안 보일 수 있기 때문에 설정
	response.setHeader("Pragma","No-cache");		// HTTP 1.0 version
	response.setHeader("Cache-Control","no-cache");	// HTTP 1.1 version
	response.setHeader("Cache-Control","no-store"); // 일부 파이어폭스 버스 관련
	response.setDateHeader("Expires", 1L);			// 현재 시간 이전으로 만료일을 지정함으로써 응답결과가 캐쉬되지 않도록 설정
%>
 
<%
	// Control에서 list에 저장한 list 변수에 지정
	List <Message> list = (List <Message>) request.getAttribute("list");
	
	// 페이지 변수
	int pageNum = (int) request.getAttribute("pageNum");
//	String strStartPage = (String) request.getAttribute("startPage");
//	String strEndPage = (String) request.getAttribute("endPage");
	int startPage = (int) request.getAttribute("startPage");
	int endPage	  = (int)request.getAttribute("endPage");
	
%>    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title> 방명록 목록 2 </title>
</head>
<body>
	
	<a href="insert.do?cmd=input-form">방명록 남기기 </a><br/><br/>
	
	<% if( list == null ) { %>
		남겨진 메세지가 하나도~~없습니다. <br>
	<% } else { %>
	<table border="1">
	
		<% for( Message msg : list ) { %>
		<tr>	
			<td> <%= msg.getId() %> </td> 
			<td> <%= msg.getGuestName() %></td> 
			<td> <a href="delete.do?cmd=delete-form&id=<%=msg.getId()%>"> [ 삭제하기 ]</a> </td>
			<td> <a href="modify.do?cmd=modify-form&id=<%=msg.getId()%>"> [ 수정하기 ]</a> </td>
		</tr>
		<tr>
			<td colspan='3'> 
			<textarea cols=35 rows=3 style="font-family: '돋움', '돋움체'; font-size: 10pt; font-style: normal; line-height: normal; color: #003399;background-color:#D4EBFF;border:1 solid #00009C;"><%= msg.getMessage() %>
			</textarea>
			</td>
		</tr>
		<% } %>
	</table>
	<a href="list.do?cmd=list-page&btn=prev"><button>이전</button></a>
	<% for(int i=startPage; i<=endPage; i++) { %>
		<a href="list.do?cmd=list-page&pageNum=<%=i%>">[ <%=i%> ]</a>
	<% } %>
	<a href="list.do?cmd=list-page&btn=next"><button>다음</button></a>
	

	<% } // end if-else %>
	<% //request.setAttribute("startPage", startPage); %>
</body>
</html>