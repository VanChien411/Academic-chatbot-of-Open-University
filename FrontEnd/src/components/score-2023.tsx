import Table from "react-bootstrap/Table";
import * as style1 from "@/styles/main.module.css";
import * as score from "@/components/dataScore/dataScore";
interface RowData {
  maNganh: string;
  nganh: string;
  diemChuan: number;
}
function Score() {
  const data = score.handleScore2023();

  // console.log(data);
  return (
    <>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto `}
        style={{ height: "520px" }}
      >
        <h3 className="text-center text-danger p-2">
          THÔNG BÁO ĐIỂM CHUẨN TRÚNG TUYỂN ĐẠI HỌC CHÍNH QUY PHƯƠNG THỨC XÉT
          TUYỂN SỬ DỤNG KẾT QUẢ KỲ THI TỐT NGHIỆP THPT 2023
        </h3>

        <div>
          {" "}
          Trường Đại học Mở Thành phố Hồ Chí Minh công bố điểm trúng tuyển Đại
          học Chính quy năm 2023 (đối với thí sinh trung học phổ thông ở khu vực
          3) phương thức xét tuyển sử dụng kết quả thi TN THPT như sau:
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
            <thead>
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
            Lưu ý: (*) Ngành Luật và Luật kinh tế chương trình Đại trà: Điểm
            chuẩn tổ hợp C00 cao hơn 1.5 điểm.
            <br></br> - Điểm xét tuyển được quy về hệ số 30 (đối với những tổ
            hợp có môn nhân hệ số) cộng điểm ưu tiên (nếu có) và được làm tròn
            đến 2 chữ số thập phân.
            <br></br> - Thí sinh được hưởng ưu tiên Đối tượng, khu vực theo Điều
            7, quy chế tuyển sinh hiện hành.
            <br></br>- Thí sinh tham khảo Hướng dẫn làm thủ tục nhập học trực
            tuyến trên trang https://tuyensinh.ou.edu.vn từ 09h00 ngày
            24/08/2023 (đã cập nhật link tra cứu kết quả).
            <br></br>- Thí sinh xác nhận nhập học trực tuyến trên Cổng tuyển
            sinh Bộ GD&ĐT trước 17h00 ngày 08/9/2023.
            <br></br> - Sau thời gian nêu trên, thí sinh không xác nhận nhập học
            và hoàn thành các thủ tục, hồ sơ nhập học được xem là từ chối nhập
            học.
          </div>
        </div>
      </div>
    </>
  );
}
export default Score;
