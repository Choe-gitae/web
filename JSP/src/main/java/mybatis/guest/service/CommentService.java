package mybatis.guest.service;

import java.util.*;

import mybatis.guest.model.Comment;
import mybatis.guest.session.CommentRepository;

public class CommentService {
	
	private static CommentService service;
	
	// 모델단(JDBC) - DAO - Repository
	private CommentRepository reps = new CommentRepository();
	
	
	private CommentService() {}
	public static CommentService getInstance(){
		if( service == null) service = new CommentService();
		return service;
	}
	
	
	public List<Comment> selectComment() {
		return reps.selectComment();
	}
	
	
	public Comment selectCommentByPrimaryKey(int cId) {
		return reps.selectCommentByPK(cId);
	}
	
	
	public void insertComment(Comment c) {
		reps.insertComment(c);
	}
	
	public int updateComment(Comment c) {
		return reps.updateComment(c);
	}
	
	public int deleteComment(int cId) {
		return reps.deleteComment(cId);
	}

}