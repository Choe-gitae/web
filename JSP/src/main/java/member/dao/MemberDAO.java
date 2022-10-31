package member.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;


public class MemberDAO {

	// Singleton pattern
	static MemberDAO memberDAO = null;

	private MemberDAO() throws Exception{
		// 1. 드라이버 로딩
		Class.forName("oracle.jdbc.driver.OracleDriver");
		System.out.println("memberDAO 객체 생성 - 드라이버 로딩 성공");
	}

	public static MemberDAO getInstance() throws Exception{
		if( memberDAO == null ) memberDAO = new MemberDAO();
		return memberDAO;
	}

	public void insert(MemberVO vo) throws Exception{

		String				url  = "jdbc:oracle:thin:@192.168.0.164:1521:xe";	// 127.0.0.1
		String				user = "scott";
		String				pass = "tiger";
		PreparedStatement 	ps   = null;
		Connection 			con  = null;

		// 입력값 얻어오기
		String 	name		= vo.getRealname();
		String	nickname	= vo.getNickname();
		String	email		= vo.getMyemail();
		int		age			= vo.getMyage();

		try {
			// 2. 연결객체 얻어오기
			con = DriverManager.getConnection(url, user, pass);
			System.out.println("DB 연결 성공");

			// 3. SQL 문장
			String sql = "INSERT INTO group6(name, nickname, email, age) "
					+ " VALUES(?,?,?,?) ";

			// 4. SQL 전송객체
			ps = con.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, nickname);
			ps.setString(3, email);
			ps.setInt(4, age);

			// 5. SQL 전송
			//	- excuteQuery()		:  SELECT					return ResultSet
			//	- excuteUpdate()	:  INSERT/DELETE/UPDATE		return int
			ps.executeUpdate();		// 이미 sql 연결함

		} finally {
			// 6. 닫기
			ps.close();
			con.close();
		}

	}

}
