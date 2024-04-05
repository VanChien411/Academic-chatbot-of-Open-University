import { useRouter } from "next/navigation";
import { Button, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function SideBarAdmin() {
  const router = useRouter();
  // Lấy đường dẫn hiện tại từ useRouter



  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="/chat-page">Về trang user</Navbar.Brand>
        </Container>
      </Navbar>
     
      <Row>
        <Col sm={0}>
          <Nav
            variant="pills"
            className="flex-column"
          
          >
            <Nav.Item className="mb-1" >
              <Nav.Link eventKey="list-user" >Danh sách người dùng</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-1">
              <Nav.Link eventKey="add-file-chatbot">
                Thêm dữ liệu vào bot
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
}
export default SideBarAdmin;
