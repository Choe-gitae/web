package mvc.guest.command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mvc.guest.model.Message;
import mvc.guest.model.MessageDao;
import mvc.guest.model.MessageException;

public class CommandList implements Command 
{
	private String next;

	public CommandList( String _next ){
		next = _next;
	}

	public String execute( HttpServletRequest request , HttpServletResponse response  ) throws CommandException{
		try{
			int countPerPage = 5;	// 한 페이지 방명록 갯수
			int pages		 = 5;	// 표시할 페이지 갯수
			String btn		 = request.getParameter("btn");	// 다음, 이전 버튼 클릭확인
			if( btn == null ) btn = "";
			
			// 현재 페이지, 클릭한 페이지
			int pageNum = 1;
			String strPageNum = request.getParameter("pageNum");
			if( strPageNum != null ) pageNum = Integer.parseInt(strPageNum);
			
			// 총 페이지 계산
			int totalRecCount = MessageDao.getInstance().getTotalCount();	// 총 레코드 수
			int totalPageCount = (int) Math.ceil(totalRecCount/(double)countPerPage);	// 총 페이지 수
			
			// 출력 할 시작 페이지, 끝 페이지 계산
			String strStartPage = (String) request.getAttribute("startPage");
			int startPage = 1;
			if( strStartPage != null ) Integer.parseInt(strStartPage);
			int endPage = startPage + pages - 1;
			
			// 총 페이지 갯수가 표시할 페이지 갯수보다 작을때
			if( totalPageCount <= pages ){
		 		endPage = totalPageCount;
		 	}
			
			// 버튼 클릭 했을 때
			if( btn.equals("prev") ){
				startPage -= pages;
				pageNum -= pages;
				if ( startPage < 1 ) {
					startPage = 1 ;	// 이전 버튼이 1보다 작아질 때
					pageNum += pages;
				}
				endPage = startPage + pages - 1 ;
			}else if( btn.equals("next") ){
				startPage += pages;
				pageNum += pages;
				endPage = startPage + pages - 1 ;
				if ( endPage > totalPageCount ) {
					endPage = totalPageCount;	// 끝 페이지가 총페이지 보다 커질 때
					pageNum -= pages;
				}
				if ( startPage > endPage ) {
					startPage -= pages;	// 시작 페이지가 끝 페이지보다 커질 때
					pageNum -= pages;
				}
			}
			// 계산한 시작 페이지, 끝 페이지 저장
			request.setAttribute("startPage", startPage);
			request.setAttribute("endPage", endPage);
			request.setAttribute("pageNum", pageNum);
			
			// 검색 후 리스트 저장
			int startRow = (pageNum * countPerPage) - (countPerPage - 1);
			int endRow = pageNum * countPerPage;
		    List <Message> mList = MessageDao.getInstance().selectList(startRow, endRow);
		    request.setAttribute("list", mList );
		    
		   

		}catch( MessageException ex ){
			throw new CommandException("CommandList.java < 목록보기시 > " + ex.toString() ); 
		}
		
		return next;
	}
}
