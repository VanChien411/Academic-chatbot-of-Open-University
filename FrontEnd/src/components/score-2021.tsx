import Table from "react-bootstrap/Table";
import * as style1 from "@/styles/main.module.css";
import * as score from "@/components/dataScore/dataScore";
interface RowData {
  maNganh: string;
  nganh: string;
  diemChuan: number;
}
function Score() {
  const data = score.handleScore2021();

  // console.log(data);
  return (
    <>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto `}
        style={{ height: "550px" }}
      >
        <h3 className="text-center text-danger p-2">
        HĐTS TRƯỜNG ĐẠI HỌC MỞ THÀNH PHỐ HỒ CHÍ MINH
<br></br>THÔNG BÁO ĐIỂM TRÚNG TUYỂN KỲ TUYỂN SINH ĐHCQ NĂM 2021
<br></br>Phương thức Xét tuyển Kết quả thi Tốt nghiệp THPT 2021
        </h3>

        <div>1. Xem Hướng dẫn làm thủ tục nhập học:  <a href="http://tuyensinh.ou.edu.vn/thong-bao-ve-viec-xac-nhan-nhap-hoc-va-nhap-hoc-truc-tuyen-online">
            &lt;&lt; tại đây &gt;&gt;
          </a>.
<br></br>2. Thí sinh tra cứu kết quả:  <a href="https://xettuyen.ou.edu.vn/thpt2021">
            &lt;&lt; tại đây &gt;&gt;
          </a>
<br></br>- Loại học bổng: Là loại học bổng Tân sinh viên được nhận học bổng sau khi làm thủ tục nhập học. 
<br></br>- Điểm xét học bổng là điểm Tổng không hệ số và không cộng điểm ưu tiên. Trường hợp 2 sinh viên bằng điểm sẽ xét điểm môn chính trong tổ hợp xét tuyển.
<br></br>- Sinh viên được nhận học bổng phải đóng học phí trước, nhà trường sẽ trao học bổng sau.</div>
        <br></br>
        <Table bordered>
  <thead>
    <tr>
      <th>Loại học bổng</th>
      <th>Chú thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TKN</td>
      <td>
        <ul>
          <li>Học bổng Thủ khoa ngành tuyển sinh theo Quy định của Trường Đại học Mở Thành phố Hồ Chí Minh.</li>
          <li>Học bổng toàn phần suốt 4 năm học, riêng năm nhất được nhận 150% học phí</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>100%HK1</td>
      <td>Học bổng Khuyến khích học tập:  100% học kỳ 1 năm nhất</td>
    </tr>
    <tr>
      <td>70%HK1</td>
      <td>Học bổng Khuyến khích học tập:  70% học kỳ 1 năm nhất</td>
    </tr>
    <tr>
      <td>50%HK1</td>
      <td>Học bổng Khuyến khích học tập:  50% học kỳ 1 năm nhất</td>
    </tr>
  </tbody>
</Table>
      <div>3. Thí sinh dự kiến làm Hồ sơ nhập học trực tuyến và Xác nhận nhập học: (Dự kiến) Từ ngày 18/9 - 22/9/2021</div>
        <div>
          {" "}
          Thí sinh tra cứu kết quả:{" "}
          <a href="https://xettuyen.ou.edu.vn/hb2023d1/vi/tracuu">
            &lt;&lt; tại đây &gt;&gt;
          </a>
        </div>
        <div className="container">
          <br></br>
          <Table bordered variant="primary">
            <thead className="table-primary">
              <tr>
                <th className="bg-primary text-light">Mã ngành</th>
                <th className="bg-primary text-light">Tên ngành</th>
                <th className="bg-primary text-light">Điểm chuẩn</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: RowData, index: number) => {
                return (
                  <tr key={index} className={index % 2 === 0 ? "table" : ""}>
                    <td>{item.maNganh}</td>
                    <td>{item.nganh}</td>
                    <td>{item.diemChuan}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>
            <br></br>
            - Điểm chuẩn được quy về hệ điểm 30. Điểm xét tuyển được làm tròn đến 02 chữ số thập phân.
            <br></br>- Điểm xét tuyển được xác định như sau (làm tròn đến 02 chữ số thập phân): 
            <br></br>Điểm xét tuyển = [(ĐM1*HS môn 1+ ĐM2*HS môn 2 + ĐM3 * HS môn 3)*3]/(Tổng hệ số) + Điểm ưu tiên Khu vực + Điểm ưu tiên đối tượng.
            <br></br>(*) Điểm trúng tuyển ngành Luật, Luật kinh tế: tổ hợp Văn, Sử, Địa cao hơn 1.5 điểm.
            <br></br>
            <br></br>(1) Ngành ngôn ngữ Anh, ngôn ngữ Trung Quốc, ngôn ngữ Nhật, ngôn ngữ Hàn Quốc: Ngoại ngữ nhân hệ số 2.
            <br></br>
            <br></br>(2) Các ngành Khoa học máy tính, Khoa học máy tính Chất lượng cao, Công nghệ thông tin, CTKT công trình xây dựng, CNKT công trình xây dựng Chất lượng cao, Quản lý xây dựng: Toán nhân hệ số 2.
            <br></br>
            <br></br>(3) Các ngành Chất lượng cao: Luật kinh tế, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Quản trị kinh doanh, Tài chính ngân hàng, Kế toán: Ngoại ngữ hệ số 2.
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
export default Score;
