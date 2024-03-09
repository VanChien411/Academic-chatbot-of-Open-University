// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import * as api from "@/utils/api";
import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = api.getDataFromLocal("user");
    !user ? router.push("/login") : "";
  });
  return (
    <div style={{ width: "100%" ,display: 'grid', placeItems: 'center',textAlign:'center',alignItems:'center'}} className=" ">
      <div style={{width:'400px',height:'50%'}}>
        <div>
          <Link
            href={"/chat-page"}
            style={{ textDecoration: "none", fontSize: "30px", color: "black" }}
          >
            <b>Hỗ trợ học vụ OU</b>
          </Link>
          <br></br>
          <small>Chatbot tư vấn hỗ trợ sinh viên về học vụ</small>
        </div>
        <div className="my-4">
          <img src="images\bodyOU.png" width="400px" height='250px'></img>

        </div>
        <div className="btn btn-primary my-3" onClick={()=>router.push('/chat-page')}>Bắt đầu trải nghiệm</div>
        <Row >
          <Col>
            <small>Lập trình</small>
            <br></br>
            <strong>Lê Văn Chiến</strong>
            <br></br>
            <strong>Bùi Tiến Phát</strong>
          </Col>
          <Col>
            <small>Giáo viên</small>
            <br></br>
            <strong>Dương Hữu Thành</strong>
          </Col>
        </Row>
      </div>
    </div>
  );
}
