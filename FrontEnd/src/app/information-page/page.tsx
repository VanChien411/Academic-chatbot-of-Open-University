"use client";

import { Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";
import NavDropdown from "react-bootstrap/NavDropdown";
// import StatisticsStudent from "@/components/statistics-student";
import { useEffect, useState } from "react";
// import TradeProgram from "@/components/tradingProgram/page-trade-program";
import AddSubject from "@/components/add-subject";
// import CreatePageWord from "@/components/createPage/createPageWord";
// import LastPageWord from "@/components/createPage/lastPageWord";

import dynamic from "next/dynamic";
const CreatePageWord = dynamic(() => import("@/components/createPage/createPageWord"), { ssr: false })

const TradeProgram = dynamic(() => import('@/components/tradingProgram/page-trade-program'));
const StatisticsStudent = dynamic(() => import('@/components/statistics-student'));

const LastPageWord = dynamic(() => import('@/components/createPage/lastPageWord'));
function PageInformation() {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
  const [isSidebarInSmall, setIsInSmall] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // console.log("shareside", sharedData)

    const handleResize = () => {
      const win = window.innerWidth < 1200;
      setIsHiddenSidebar(win); // 992 là kích thước màn hình tương ứng với LG breakpoint
      setIsInSmall(win);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Xác định trạng thái ban đầu

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSideBar = () => {
    if (window.innerWidth < 1200) {
      setIsInSmall(true);
    }
    setIsHiddenSidebar(!isHiddenSidebar);
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(207,242,251)" }}>
        <div className="container-fluid position-relative ">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="data-statistics"
          >
            <Row className="" >
              {!isHiddenSidebar && (
                <div
                  style={{ width: "250px", zIndex: "1" }}
                  className={`bg-light p-0 ${
                    isSidebarInSmall ? "position-absolute" : ""
                  }  float-start `}
                >
                  <div
                    className="d-flex justify-content-center align-items-center  position-relative"
                    style={{ height: "70px", fontSize: "30px" }}
                  >
                    Trang chủ
                    {isSidebarInSmall && (
                    <div
                      className="position-absolute btn btn-outline-primary p-0"
                      onClick={() => handleSideBar()}
                      style={{ right: "-40px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </div>
                  )}

                  </div>

                  <Nav variant="pills" className="flex-column">
                    {/* <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="list-user">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-lines-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                        </svg>
                        &nbsp; Danh sách người dùng
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="data-statistics">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-bar-chart-line"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
                        </svg>
                        &nbsp; Điểm tuyển sinh
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="trade-program">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-book"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                        </svg>
                        &nbsp;Chương trình đào tạo
                      </Nav.Link>
                    </Nav.Item>
                    <hr></hr>
                    <div
                      className=""
                      style={{ marginLeft: "10px", color: "blue" }}
                    >
                      Thêm dữ liệu
                    </div>
                    {/* <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="add-subject">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-database-add"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0" />
                          <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
                        </svg>
                        &nbsp; Thêm môn và tổ hợp
                      </Nav.Link>
                    </Nav.Item> */}

                    <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="create-page">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                        </svg>{" "}
                        Tạo trang
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="last-create-page">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark-break"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z" />
                        </svg>{" "}
                        Trang đã tạo
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              )}

              <Col className="p-0 ">
                <Navbar expand="lg" className="bg-body-tertiary">
                  <Container fluid>
                    <Navbar.Brand onClick={() => handleSideBar()}>
                      <div className="btn btn-outline-primary ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-bricks"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z" />
                        </svg>
                      </div>
                    </Navbar.Brand>
                    <Navbar.Brand className="btn " onClick={() => router.push("/chat-page")}>
                      {" "}
                       <strong>Chatbot OU</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                      >
                        {/* <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Link
                    </Nav.Link> */}
                      </Nav>
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Tìm kiếm"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Tìm</Button>
                      </Form>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>

                <Tab.Content>
                  <Tab.Pane eventKey="home">First tab content</Tab.Pane>
                  <Tab.Pane eventKey="list-user">
                    {/* <Messenger onSendData={handleDataFromChild}></Messenger> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="trade-program">
                    <TradeProgram></TradeProgram>
                  </Tab.Pane>
                  <Tab.Pane  eventKey="data-statistics">
                    <StatisticsStudent></StatisticsStudent>
                  </Tab.Pane>
                  <Tab.Pane  eventKey="add-subject">
                    {/* <AddSubject></AddSubject> */}
                    <div>Cần đủ quyền hạn</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="create-page">
                    <CreatePageWord></CreatePageWord>
                    {/* <AddSubject></AddSubject> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="last-create-page">
                    <LastPageWord></LastPageWord>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}
export default PageInformation;
