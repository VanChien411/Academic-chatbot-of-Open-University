import { Row, Col, Card, Table } from "react-bootstrap";

import * as style1 from "@/styles/main.module.css";
import { useEffect, useState } from "react";

function CNTTProgram() {
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
        <h4 className="text-success">
          I. Chương trình đào tạo hệ Đại học 4 năm
        </h4>
        <div className="m-3">
          <b> 1. Ngành Khoa học máy tính - Mã ngành 7480101</b>
          <Table border={0}>
            <tbody>
              <tr>
                <td>
                  CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20NGANH%20KHMT-2021.pdf">
                    2021, 2022
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="http://it.ou.edu.vn/pages/view/33-de-cuong-mon-hoc">
                    2021, 2022
                  </a>
                </td>
                <td>
                  Chuẩn Đầu Ra Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CHUAN%20DAU%20RA%20CHUONG%20TRINH%20DAO%20TAO%20NGANH%20KHOA%20HOC%20MAY%20TINH%20-%202021.pdf">
                    {" "}
                    2021, 2022
                  </a>
                </td>
                <td>
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20NGANH%20KHMT%20PHU%20LUC%204.pdf">
                    2021, 2022
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20Khoa%20hoc%20may%20tinh_7480101.PDF">
                    2019,2020
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="http://it.ou.edu.vn/pages/view/33-de-cuong-mon-hoc">
                    2019, 2020
                  </a>
                </td>
                <td>
                  Chuẩn Đầu Ra Khóa :{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CDR%20Khoa%20hoc%20may%20tinh_7480101.PDF">
                    2019, 2020{" "}
                  </a>
                </td>
                <td>
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/HD%20thuc%20hien%20CT%20KHMT%20290620(1).pdf">
                    2019, 2020
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/2_%20HTTTQL%202016%20231117.pdf">
                    2016, 2017, 2018{" "}
                  </a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
              </tr>
              <tr>
                <td>
                  CTĐT Khóa:
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/1_%20KHMT%202016%20231117.pdf">
                    {" "}
                    2016, 2017, 2018{" "}
                  </a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
              </tr>
              <tr>
                <td>
                  Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/chuong_trinh_dao_tao/2015--HCQ-KHMT.pdf">
                    2015{" "}
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa
                  <a href="http://it.ou.edu.vn/pages/view/40-nganh-khoa-hoc-may-tinh-khoa-2015">
                    : 2015
                  </a>
                </td>
                <td>
                  {" "}
                  Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/chuong_trinh_dao_tao/2014--HCQ-KHMT.pdf">
                    2014{" "}
                  </a>
                </td>
                <td>
                  {" "}
                  Đề Cương Môn Học Khóa:
                  <a href="http://it.ou.edu.vn/pages/view/43-nganh-khoa-hoc-may-tinh-khoa-2014">
                    2014
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
          <b> 2. Ngành Hệ thống thông tin - Mã ngành 7340405</b>
          <Table>
            <tbody>
              <tr>
                <td>
                  CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20NGANH%20HTTTQL-2021.pdf">
                    2021, 2022{" "}
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="http://it.ou.edu.vn/pages/view/33-de-cuong-mon-hoc">
                    2021, 2022
                  </a>
                </td>
                <td>
                  Chuẩn Đầu Ra Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CHUAN%20DAU%20RA%20CHUONG%20TRINH%20DAO%20TAO%20NGANH%20HE%20THONG%20THONG%20TIN%20QUAN%20LY%20-%202021.pdf">
                    {" "}
                    2021, 2022
                  </a>
                </td>
                <td>
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20NGANH%20HTTTQL%20PHU%20LUC%204.pdf">
                    {" "}
                    2021, 2022
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20He%20thong%20thong%20tin%20quan%20ly_7340405.PDF">
                    {" "}
                    2019, 2020
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="https://drive.google.com/drive/u/6/folders/1Mq4tHFhB1kRbhN8eDB2QoSf6AduRG1sG">
                    2019, 2020{" "}
                  </a>
                </td>
                <td>
                  {" "}
                  Chuẩn Đầu Ra Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CDR%20He%20thong%20thong%20tin%20quan%20ly_7340405.PDF">
                    2019, 2020
                  </a>
                </td>
                <td>
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/HD%20thuc%20hien%20CT%20HTTTQL%20290620.pdf">
                    2019, 2020
                  </a>
                </td>
              </tr>{" "}
              <tr>
                <td>
                  CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/2_%20HTTTQL%202016%20231117.pdf">
                    2016, 2017, 2018{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/chuong_trinh_dao_tao/K2015--HCQ-HTTTQL.pdf">
                    2015
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa
                  <a href="http://it.ou.edu.vn/pages/view/41-he-thong-thong-tin-kinh-te-2015">
                    2015
                  </a>
                </td>
                <td>
                  {" "}
                  Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/chuong_trinh_dao_tao/K2014--HCQ-HTTTQL.pdf">
                    2014
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa
                  <a href="http://it.ou.edu.vn/pages/view/42-he-thong-thong-tin-kinh-te-2014">
                    {" "}
                    2014
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
          <b> 3. Ngành Công nghệ thông tin - Mã ngành 7480201</b>
          <Table>
            <tbody>
              <tr>
                <td>
                  CTĐT khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20NGANH%20CNTT-2021.pdf">
                    2021, 2022
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="http://it.ou.edu.vn/pages/view/33-de-cuong-mon-hoc">
                    2021, 2022{" "}
                  </a>
                </td>
                <td>
                  Chuẩn Đầu Ra Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CHUAN%20DAU%20RA%20CHUONG%20TRINH%20DAO%20TAO%20NGANH%20CONG%20NGHE%20THONG%20TIN%20-%202021.pdf">
                    2021, 2022
                  </a>
                </td>
                <td>
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT%20NGANH%20CNTT%20PHU%20LUC%204.pdf">
                    {" "}
                    2021, 2022
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  CTĐT khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT_CNTT_2019.PDF">
                    2019, 2020{" "}
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="https://drive.google.com/drive/u/6/folders/12L1GpBEIR-YyXW85_j42lj7_gLsfjLgS">
                    {" "}
                    2019, 2020
                  </a>
                </td>
                <td>
                  {" "}
                  Chuẩn Đầu Ra Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CDR_CNTT_7480201(1).PDF">
                    {" "}
                    2019, 2020
                  </a>
                </td>
                <td>
                  {" "}
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/HD%20thuc%20hien%20CT%20CNTT%20QLDT%20290620.pdf">
                    {" "}
                    2019, 2020
                  </a>
                </td>
              </tr>{" "}
              <tr>
                <td>
                  {" "}
                  CTĐT khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/180417_DE%20CUONG%20MON%20HOC/Chuong%20trinh%20dao%20tao%20CNTT%2027%20-%2011.pdf">
                    2018
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa
                  <a href="http://it.ou.edu.vn/pages/view/47-nganh-cong-nghe-thong-tin-khoa-2017">
                    {" "}
                    2018
                  </a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
              </tr>
            </tbody>
          </Table>

          <b>4. Ngành Khoa học máy tính (Chất lượng cao) - Mã ngành 7480101C</b>
          <Table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  Khóa:{" "}
                  <a href="https://drive.google.com/file/d/1jQ8cQzBF5RSNPjhU531ydr-jjiL1s8vh/view?usp=sharing">
                    {" "}
                    2021, 2022
                  </a>
                </td>
                <td>
                  Đề Cương Môn Học Khóa:{" "}
                  <a href="http://it.ou.edu.vn/pages/view/33-de-cuong-mon-hoc">
                    2021, 2022
                  </a>
                </td>
                <td>
                  Chuẩn Đầu Ra Khóa :{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CDR%20KHMT%20CLC.pdf">
                    {" "}
                    2021, 2022
                  </a>
                </td>
                <td>
                  {" "}
                  Hướng dẫn thực hiện CTĐT Khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/Huong%20dan%20thuc%20hien%20CTDT%20KHMT%20CLC.pdf">
                    2021, 2022
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>

          <b>
            5. Ngành Công nghệ thông tin tăng cường tiếng Nhật- Mã ngành 7480201
          </b>
          <Table>
            <tbody>
              <tr>
                <td>
                  CTĐT khóa:{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CTDT.PDF">
                    2019
                  </a>
                </td>
                <td>
                  Chuẩn Đầu Ra Khóa :{" "}
                  <a href="http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/CDR.PDF">
                    {" "}
                    2019{" "}
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <h4 className="bg-info">
          II. Chương trình đào tạo hệ Liên thông đại học Ngành Khoa Học Máy Tính
          2 năm
        </h4>
        <div className="m-3">
          <b>
            {" "}
            ​Khóa 2015, 2016 (học theo chương trình đào tạo Hệ Đại học 2015; xét
            miễn giảm môn học)
            <br></br>​​Chương trình đào tạo
            <br></br>​Đề cương môn học
          </b>
        </div>
        <h4 className="bg-info">
          ​III. Chương trình Cao học chuyên ngành Khoa học máy tính
        </h4>
        <div className="m-3">
          <b>
            {" "}
            Hướng dẫn Khóa : 2021
            <br></br>Hướng dẫn Khóa : 2019
            <br></br>Hướng dẫn Khóa : 2016
          </b>
        </div>
      </div>
    </>
  );
}

export default CNTTProgram;
