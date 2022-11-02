package guest.service;

import guest.model.Message;
import guest.model.MessageDao;
import guest.model.MessageException;

import java.util.List;

public class ListMessageService {

	//-------------------------------------------------------------------
	private int totalRecCount;		// 전체 레코드 수	
	private int pageTotalCount;		// 전체 페이지 수
	private int countPerPage = 3;	// 한페이지당 레코드 수
	
	private static ListMessageService instance;
	
	public static ListMessageService getInstance() throws MessageException
	{
		if( instance == null )
		{
			instance = new ListMessageService();
		}
		return instance;
	}
	
	private ListMessageService()
	{
		
	}
	
	public List <Message> getMessageList(String pageNum) throws MessageException
	{	
		int pNum = 1;
		if(pageNum != null) pNum = Integer.parseInt(pageNum);
		List <Message> mList = MessageDao.getInstance().selectList();	
		
		// 페이지		시작		끝
		//	1		1		3
		//	2		4		6
		//	3		7		9
		
		int startRow = ( (pNum * countPerPage) - (countPerPage - 1) );
		int endRow = pNum * countPerPage;
		
		return mList = MessageDao.getInstance().selectList(startRow, endRow);
	}
	
	public int getTotalPage() throws MessageException{
		// 전체 레코드 수
		totalRecCount = MessageDao.getInstance().getTotalCount();
		pageTotalCount = (int) Math.ceil(totalRecCount/(double)countPerPage);
		// 페이지 수 리턴
		return pageTotalCount;
	}
	
	
}
