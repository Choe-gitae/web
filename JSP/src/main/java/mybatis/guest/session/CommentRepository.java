package mybatis.guest.session;

import java.io.*;
import java.util.*;

import mybatis.guest.model.Comment;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.*;

public class CommentRepository 
{
	//	private final String namespace = "CommentMapper";

	private SqlSessionFactory getSqlSessionFactory() {
		
		InputStream inputStream;
		try {
			inputStream = Resources.getResourceAsStream("mybatis-config.xml");
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
		SqlSessionFactory sessFactory =  new SqlSessionFactoryBuilder().build(inputStream);
		return sessFactory;
	}
	
	
	public List<Comment> selectComment() {
		// 연결객체 Connection => SqlSession
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			return session.selectList("CommentMapper.selectComment");
		} finally {
			session.close();	// 연결객체 반환
		}
		
	}
	
	
	public Comment selectCommentByPK(int commentNo) {
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			HashMap map = new HashMap<>();
			map.put("commentNo", commentNo);
			Comment c = session.selectOne("CommentMapper.selectCommentByPK",map);
			return c;
		} finally {
			session.close();
		}
	}
	
	
	public void insertComment(Comment c) {
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			int result = session.insert("CommentMapper.insertComment", c);
			if(result > 0) session.commit();
			else session.rollback();
		} finally {
			session.close();
		}
	}
	
	
	public int updateComment(Comment c) {
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			int result = session.update("CommentMapper.updateComment", c);
			if(result > 0) session.commit();
			else session.rollback();
			return result;
		} finally {
			session.close();
		}
	}
	
	
	public int deleteComment(int commentNo) {
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			int result = session.delete("CommentMapper.deleteComment", commentNo);
			if(result > 0) session.commit();
			else session.rollback();
			return result;
		} finally {
			session.close();
		}
	}
	

}
