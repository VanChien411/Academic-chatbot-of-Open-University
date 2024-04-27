import Table from "react-bootstrap/Table";
import * as style1 from "@/styles/main.module.css";
import * as score from "@/components/dataScore/dataScore";
interface RowData {
  maNganh: string;
  nganh: string;
  diemChuan: number;
}
function Score() {
  const data = score.handleScore2022();

  // console.log(data);
  return (
    <>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto `}
        style={{ height: "590px" }}
      >
        <h3 className="text-center text-danger p-2">
          HĐTS TRƯỜNG ĐẠI HỌC MỞ THÀNH PHỐ HỒ CHÍ MINH THÔNG BÁO ĐIỂM CHUẨN
          TRÚNG TUYỂN PHƯƠNG THỨC XÉT TUYỂN KẾT QUẢ KỲ THI TỐT NGHIỆP THPT 2022
        </h3>

        <div>
          {" "}
          Trường Đại học Mở Thành phố Hồ Chí Minh công bố điểm trúng tuyển Đại
          học Chính quy năm 2023 (đối với thí sinh trung học phổ thông ở khu vực
          3) phương thức xét tuyển sử dụng kết quả thi TN THPT như sau:
        </div>
        <div>
          1. Xem Hướng dẫn làm thủ tục nhập học: .<br></br>2. Thí sinh tra cứu:
          <br></br>3. Thí sinh có tên trong Danh sách trúng tuyển phải xác nhận
          nhập học trực tuyến trên Hệ thống của Bộ GD&ĐT từ ngày 18/9 đến trước
          17h00 ngày 30/9/2022 (https://thisinh.thitotnghiepthpt.edu.vn) và làm
          hồ sơ nhập học TRỰC TUYẾN tại trang nhập học của trường: (Sau khi đăng
          ký nhập học tại Cổng thông tin tuyển sinh của Bộ GD&ĐT tối thiểu 60
          phút))
        </div>
        <br></br>
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
            <br></br>- Điểm chuẩn được quy về hệ điểm 30. Điểm xét tuyển được
            làm tròn đến 02 chữ số thập phân.
            <br></br>- Điểm xét tuyển được xác định như sau (làm tròn đến 02 chữ
            số thập phân):
            <br></br>+ Đối với những ngành có tổ hợp môn có môn nhân hệ số 2:
            <br></br>Điểm xét tuyển = (Điểm môn hệ số 2 x 2 + Tổng 2 môn còn
            lại) x 3/4 + Điểm ưu tiên Khu vực + Điểm ưu tiên đối tượng.
            <br></br>+ Đối với những ngành có tổ hợp không có môn hệ số:
            <br></br>Điểm xét tuyển = Tổng điểm 3 môn + Điểm ưu tiên Khu vực +
            Điểm ưu tiên đối tượng.
            <br></br>(*) Điểm trúng tuyển ngành Luật, Luật kinh tế: tổ hợp Văn,
            Sử, Địa (C00) cao hơn 1.5 điểm.
            <br></br>
            <br></br>(1) Ngành ngôn ngữ Anh, ngôn ngữ Trung Quốc, ngôn ngữ Nhật,
            ngôn ngữ Hàn Quốc: Ngoại ngữ nhân hệ số 2.
            <br></br>
            <br></br>(2) Các ngành Khoa học máy tính, Khoa học máy tính Chất
            lượng cao, Công nghệ thông tin, CNKT công trình xây dựng, CNKT công
            trình xây dựng Chất lượng cao, Quản lý xây dựng: Toán nhân hệ số 2.
            <br></br>
            <br></br>(3) Các ngành Chất lượng cao: Luật kinh tế, Ngôn ngữ Anh,
            Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật, Quản trị kinh doanh, Tài chính
            ngân hàng, Kế toán, Kinh tế: Ngoại ngữ hệ số 2.
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
export default Score;
