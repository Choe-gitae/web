package mybatis.guest.model;

import java.io.Serializable;

/*
 * 직렬화
 * 	- Serializable 상속
 * 	- 통신상에 전송하는 개체는 직렬화를 해야 함
 */
public class Comment implements Serializable{
	// field
	private int		commentNo;
	private String	userId;
	private String	commentContent;
	private String	regDate;
	
	// get/set
	public int getCommentNo() {
		return commentNo;
	}
	public void setCommentNo(int commentNo) {
		this.commentNo = commentNo;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getCommentContent() {
		return commentContent;
	}
	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	
}
