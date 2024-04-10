import { Row, Col, Card, Table } from "react-bootstrap";

import * as style1 from "@/styles/main.module.css";
import { useEffect, useState } from "react";

function QLCProgram() {
  return (
    <>
      <style>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto `}
        style={{ height: "550px" }}
      >
        <div className="container">
      <div style={{textAlign: 'right'}} >
        <span style={{color: '#000000'}}>Cập nhật ngày 15/7/2022</span>
        <span style={{color: '#000000'}}>22</span>
      </div>
      <span style={{color: '#ff0000', fontWeight: 'bold'}}>1. ĐẠI HỌC CHÍNH QUY TẬP TRUNG</span>
      <p><br /></p>
      <p><strong>Ngành Kinh tế (Chất lượng cao): </strong><em>từ năm 2022</em></p>
      <p>- Khối thi tuyển sinh:<span style={{fontSize: '14.6667px', fontFamily: 'arial, sans-serif', color: '#000000'}}> </span>Toán, Hóa, Anh (D07); Toán, Lý, Anh (A01);
      Toán, Văn, Anh (D01); Toán, KHXH, Anh (D96)</p>
      <p>- Số năm đào tạo: 04 năm</p>
      <p>- Số học kỳ đào tạo: 11 học kỳ</p>
      <p>- Bằng cấp: Cử nhân Kinh tế (Chất lượng cao)</p>
      <p><em>Xem chi tiết chương trình đào tạo: <a href="/ktqlc/Pages/Hoc-che-tin-chi.aspx">Tại đây</a></em></p>
      <p><strong>Ngành Quản lý công: </strong><em>từ năm 2022</em></p>
      <p>- Khối thi tuyển sinh:<span style={{fontSize: '14.6667px', fontFamily: 'arial, sans-serif', color: '#000000'}}> </span>Toán, Lý, Hóa (A00); Toán, Lý, Anh (A01);
      Toán, Văn, Anh (D01); Toán, Hóa, Anh (D07)</p>
      <p>- Số năm đào tạo: 04 năm</p>
      <p>- Số học kỳ đào tạo: 11 học kỳ</p>
      <p>- Bằng cấp: Cử nhân Quản lý công</p>
      <p><em>Xem chi tiết chương trình đào tạo: <a href="/ktqlc/Pages/Hoc-che-tin-chi.aspx">Tại đây</a></em></p>
      <p><strong>Ngành Kinh tế</strong></p>
      <p>- Khối thi tuyển sinh:<span style={{fontSize: '14.6667px', fontFamily: 'arial, sans-serif', color: '#000000'}}> </span>Toán, Lý, Hóa (A00); Toán, Lý, Anh (A01);
      Toán, Hóa, Anh (D07); Toán, Văn, Anh (D01)</p>
      <p>- Số năm đào tạo: 04 năm</p>
      <p>- Số học kỳ đào tạo: 11 học kỳ</p>
      <p>- Bằng cấp: Cử nhân Kinh tế</p>
      <p><em>(Ngành Kinh tế từ khóa 2012 trở về sau có 03 chuyên ngành: Kinh tế học, Kinh tế quốc tế, Kinh tế Đầu tư)</em></p>
      <p><em>Xem chi tiết chương trình đào tạo <a href="/ktqlc/Pages/Hoc-che-tin-chi.aspx">tại đây</a></em></p>
      <p><strong><span style={{color: '#ff0000'}}>2. ĐẠI HỌC KHÔNG CHÍNH QUY</span></strong></p>
      <p><strong><span style={{color: '#0070c0'}}>2.1. ĐÀO TẠO TỪ XA</span></strong></p>
      <p><strong>Ngành Kinh tế, chuyên ngành Kinh tế - Luật</strong></p>
      <p>- Xét tuyển, không thi đầu vào.</p>
      <p>- Số năm đào tạo: 04 năm</p>
      <p>- Số học kỳ đào tạo: 12 học kỳ</p>
      <p>- Bằng cấp: Cử nhân Kinh tế</p>
      <p><a href="/ktqlc/Pages/He-dao-tao-tu-xa.aspx">Xem chi tiết chương trình đào tạo Đào tạo từ xa</a></p>
      <p><strong><span style={{color: '#0070c0'}}>2.2. VỪA LÀM - VỪA HỌC</span></strong></p>
      <p><strong>2.2.1. Ngành Kinh tế, chuyên ngành Kinh tế - Luật</strong></p>
      <p>- Khối thi tuyển sinh: A, A1, D.</p>
      <p>- Số năm đào tạo: 04 năm</p>
      <p>- Số học kỳ đào tạo: 12 học kỳ</p>
      <p>- Bằng cấp: Cử nhân Kinh tế</p>
      <strong>2.2.2. Ngành Kinh tế, chuyên ngành Kinh tế-Luật (bằng thứ hai)</strong>
      <p>- Miễn thi đầu vào cho người đã tốt nghiệp Đại học.</p>
      <p>- Số năm đào tạo: 02 năm</p>
      <p>- Số học kỳ đào tạo: 05 học kỳ</p>
      <p>- Bằng cấp: Cử nhân Kinh tế</p>
      <p><a href="/ktqlc/Pages/He-vua-hoc-vua-lam.aspx">Xem chi tiết chương trình đào tạo vừa làm vừa học</a></p>
      <p> </p>
      </div>
      </div>
    </>
  );
}

export default QLCProgram;
