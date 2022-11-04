package mvc.guest.command;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mvc.guest.model.MessageDao;
import mvc.guest.model.MessageException;

/**
 * Servlet implementation class CommandPage
 */
@WebServlet("/CommandPage")
public class CommandPage extends HttpServlet {
	private String next;

	public CommandPage( String _next ){
		next = _next;
	}
	
	public String execute(HttpServletRequest request, HttpServletResponse response  ) throws CommandException {

		try{
				
			int messageId = Integer.parseInt(request.getParameter("messageId"));
			String password = request.getParameter("password");
			
			int resultCnt = MessageDao.getInstance().delete(messageId, password);
			
			request.setAttribute("result", resultCnt);
		}catch( MessageException ex ){
			throw new CommandException("CommandDelete.java < 삭제시 > " + ex.toString() ); 
		}
		
		return next;			
	}

}
