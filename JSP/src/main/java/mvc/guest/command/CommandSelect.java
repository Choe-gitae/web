package mvc.guest.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mvc.guest.model.Message;
import mvc.guest.model.MessageDao;
import mvc.guest.model.MessageException;

public class CommandSelect implements Command {
	private String next;

	public CommandSelect( String _next ){
		next = _next;
	}
	
	public String execute(HttpServletRequest request, HttpServletResponse response  ) throws CommandException {

		try{
				
			int messageId = Integer.parseInt(request.getParameter("id"));
			
			Message msg = MessageDao.getInstance().selectById(messageId);
			
			request.setAttribute("msg", msg);
			
		}catch( MessageException ex ){
			throw new CommandException("CommandSelect.java < 검색시 > " + ex.toString() ); 
		}
		
		return next;			
	}

}
