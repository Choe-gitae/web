package temp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class EmpDAO {
	
	// Singleton pattern
	static EmpDAO empDAO = null;
	
	private EmpDAO() throws Exception{
		// 1. 드라이버 로딩
		Class.forName("oracle.jdbc.driver.OracleDriver");
		System.out.println("EmpDAO 객체 생성 - 드라이버 로딩 성공");
	}
	
	public static EmpDAO getInstance() throws Exception{
		if( empDAO == null ) empDAO = new EmpDAO();
		return empDAO;
	}
	
	public void insert(EmpVO vo) throws Exception{
		
		String				url  = "jdbc:oracle:thin:@192.168.0.164:1521:xe";	// 127.0.0.1
		String				user = "scott";
		String				pass = "tiger";
		PreparedStatement 	ps   = null;
		Connection 			con  = null;
		
		// 입력값 얻어오기
		int 	empno	= vo.getEmpno();
		int 	deptno	= vo.getDeptno();
		String	ename	= vo.getEname();
		String	job		= vo.getJob();
		int		sal		= vo.getSal();
		
		try {
			// 2. 연결객체 얻어오기
			con = DriverManager.getConnection(url, user, pass);
			System.out.println("DB 연결 성공");
			
			// 3. SQL 문장
			String sql = "INSERT INTO emp(empno, deptno, ename, job, sal) "
					+ " VALUES(?,?,?,?,?) ";
			
			// 4. SQL 전송객체
			ps = con.prepareStatement(sql);
			ps.setInt(1, empno);
			ps.setInt(2, deptno);
			ps.setString(3, ename);
			ps.setString(4, job);
			ps.setInt(5, sal);

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
