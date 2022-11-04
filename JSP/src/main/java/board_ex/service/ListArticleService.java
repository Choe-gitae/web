package board_ex.service;

import java.util.List;

import board_ex.model.*;

public class ListArticleService {
	private int totalRecCount;		// 전체 레코드 수
	private int totalPageCount;		// 전체 페이지 수
	private int countPerPage = 3;	// 한 페이지 레코드 수
	
	private static ListArticleService instance;
	
	
	public static ListArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new ListArticleService();
		}
		return instance;
	}
	
	
	public List <BoardVO> getArticleList(String pageNum) throws BoardException
	{
		int pNum = 1;
		if ( pageNum != null ) pNum = Integer.parseInt(pageNum);
		
		List <BoardVO> mList = BoardDao.getInstance().selectList();		
		
		// 페이지		시작		끝
		//	1		1		10
		//	2		11		20
		//	3		21		30
		int startRow = (pNum * countPerPage) - (countPerPage - 1);
		int endRow = pNum * countPerPage;
		
		return mList = BoardDao.getInstance().selectList(startRow, endRow);
	}
	
	public int getTotalPage() throws BoardException {
		totalRecCount = BoardDao.getInstance().totalRecCount();
		totalPageCount = (int) Math.ceil(totalRecCount/(double)countPerPage);
		return totalPageCount;
	}
		
}
