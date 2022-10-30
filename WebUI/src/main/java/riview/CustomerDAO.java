package riview;

import java.sql.*;

public class CustomerDAO {

	private static CustomerDAO customerDAO;

	private CustomerDAO() throws Exception {
		// 1. 드라이버 로딩
		Class.forName("oracle.jdbc.driver.OracleDriver");
		System.out.println("드라이버 로딩 성공");
	}

	/*
	 * 함수명		: getInstance
	 * 인자		: 없음
	 * 리턴값		: DAO 참조값
	 * 역할		: 오라클DB 드라이버 로딩 싱글턴
	 */
	public static CustomerDAO getInstance() throws Exception {
		if(customerDAO == null) {
			customerDAO = new CustomerDAO();
		}
		return customerDAO;
	}
	
	
	/*
	 * 함수명		: customerSign
	 * 인자		: 회원 ID, PASSWORD
	 * 리턴값		: 회원가입 성공여부 (boolean)
	 * 역할		: 회원 ID, PASSWORD DB에 저장
	 */
	public int customerSign(CustomerVO vo) throws Exception {
		
		String 				url 	= "jdbc:oracle:thin:@127.0.0.1:1521:xe";	// 127.0.0.1
		String 				user 	= "choe";
		String 				pass 	= "1234";
		PreparedStatement 	ps 		= null;
		Connection 			con 	= null;

		try {
			// 2. 연결객체 얻어오기
			con = DriverManager.getConnection(url, user, pass);
			System.out.println("DB 연결 성공");

			// 3. SQL 문장
			String sql = "INSERT INTO customer(id, password, email) VALUES(?,?,?)";
			
			// 입력값
			String id 		= vo.getId();
			String password = vo.getPassword();
			String email 	= vo.getEmail();

			// 4. SQL 전송객체
			ps = con.prepareStatement(sql);
			ps.setString(1, id);
			ps.setString(2, password);
			ps.setString(3, email);

			// 5. SQL 전송
			//	- excuteQuery()		:  SELECT					return ResultSet
			//	- excuteUpdate()	:  INSERT/DELETE/UPDATE		return int
			int result = ps.executeUpdate();
			return result;
			
		}catch (SQLIntegrityConstraintViolationException e) {
			return -1;
			
		} finally {
			ps.close();
			con.close();
		}
	}
	
	
	/*
	 * 함수명		: customerLogin
	 * 인자		: 회원 ID, PASSWORD
	 * 리턴값		: 로그인 성공여부
	 * 역할		: 로그인
	 */
	public int customerLogin(CustomerVO vo) throws Exception {
		
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";	// 127.0.0.1
		String user = "choe";
		String pass = "1234";
		PreparedStatement ps = null;
		Connection con = null;
		ResultSet rs = null;

		try {
			// 2. 연결객체 얻어오기
			con = DriverManager.getConnection(url, user, pass);
			System.out.println("DB 연결 성공");

			// 3. SQL 문장
			String id = vo.getId();
			String password = vo.getPassword();
			String sql = " SELECT id, password FROM customer where id LIKE ? AND password LIKE ? ";

			// 4. SQL 전송객체
			ps = con.prepareStatement(sql);
			ps.setString(1, id);
			ps.setString(2, password);

			// 5. SQL 전송
			//	- excuteQuery()		:  SELECT					return ResultSet
			//	- excuteUpdate()	:  INSERT/DELETE/UPDATE		return int
			rs =  ps.executeQuery();
			if(rs.next())	return 1;
			else			return -1;
			
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
		
	}
	
	
	/*
	 * 함수명		: searchId
	 * 인자		: 회원 email
	 * 리턴값		: 회원 아이디
	 * 역할		: 이메일로 아이디 찾기
	 */
	public String searchId(CustomerVO vo) throws Exception {
		
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";	// 127.0.0.1
		String user = "choe";
		String pass = "1234";
		PreparedStatement ps = null;
		Connection con = null;
		ResultSet rs = null;

		try {
			// 2. 연결객체 얻어오기
			con = DriverManager.getConnection(url, user, pass);
			System.out.println("DB 연결 성공");

			// 3. SQL 문장
			String email = vo.getEmail();
			String sql = " SELECT id FROM customer where email LIKE ? ";

			// 4. SQL 전송객체
			ps = con.prepareStatement(sql);
			ps.setString(1, email);

			// 5. SQL 전송
			//	- excuteQuery()		:  SELECT					return ResultSet
			//	- excuteUpdate()	:  INSERT/DELETE/UPDATE		return int
			rs =  ps.executeQuery();
			if(rs.next())	return rs.getString("ID");
			else			return null;
			
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
		
	}
}