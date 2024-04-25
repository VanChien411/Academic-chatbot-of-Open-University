"use client";

import { Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";
import moment from "moment";
import { useEffect, useState } from "react";
// import TradeProgram from "@/components/tradingProgram/page-trade-program";
import useUserData from "@/hook/getUser";
import SidebarInformation from "@/components/sidebar-information";
import dynamic from "next/dynamic";
const ModelQuestionBug = dynamic(() => import("@/components/modelQuestionBug"), { ssr: false })

import IUser from "@/models/user";

import * as model1 from "@/models/all";
import * as api from "@/utils/api";

function BugInfomation() {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
  const [isSidebarInSmall, setIsInSmall] = useState(false);
  const [arrBugQuestion, setArrBugQuestion] = useState<model1.BugQuestion[]>(
    []
  );
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();
  const userData: IUser | null = useUserData();

  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    // console.log("shareside", sharedData)

    const handleResize = () => {
      const win = window.innerWidth < 768;
      setIsHiddenSidebar(win); // 992 là kích thước màn hình tương ứng với LG breakpoint
      setIsInSmall(win);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Xác định trạng thái ban đầu

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getAllBugQuestion();
        setArrBugQuestion(res);
      } catch (error) {
        console.error("Error:", error as Error);
      }
    };

    fetchData();
  }, [refresh]);

  const handleSideBar = () => {
    if (window.innerWidth < 768) {
      setIsInSmall(true);
    }
    setIsHiddenSidebar(!isHiddenSidebar);
  };
  return (
    <div style={{ backgroundColor: "rgb(207,242,251)" }}>
      <div className="container position-relative ">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="data-statistics"
        >
          <Row className="">
            {!isHiddenSidebar && (
              <SidebarInformation
                isSidebarInSmall={isSidebarInSmall}
                eventKey="bug-information"
                handleSideBar={handleSideBar}
              ></SidebarInformation>
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
                  <Navbar.Brand
                    className="btn "
                    onClick={() => router.push("/chat-page")}
                  >
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

              <div
                className="p-3 shadow bg-white  "
                style={{ overflow: "auto", height: "91vh" }}
              >
                <div
                  className="m-3"
                  style={{ fontSize: "20px", minHeight: "30px" }}
                >
                  <strong>Top báo lỗi</strong>
                  <div className=" float-end">
                    <ModelQuestionBug
                      name="Đặt câu hỏi"
                      user_id={userData?.user_id}
                      save={handleRefresh}
                    ></ModelQuestionBug>
                  </div>
                </div>
                <div className="container">
                  <hr></hr>
                  {arrBugQuestion?.map((item, index) => {
                    return (
                      <>
                        <div key={index} className="container">
                          <div>{item.view} view</div>
                          <div
                            className="text-primary btn p-0"
                            style={{ fontSize: "25px" }}
                            onClick={() =>
                              router.push(`/bug-information/${item.id}`)
                            }
                          >
                            {item.title}
                          </div>
                          <div className="d-flex justify-content-end">
                            <small className="text-primary">
                              {item.user_name}
                            </small>
                            &nbsp; /&nbsp;{" "}
                            <small>
                              {moment(item.create_time).format(
                                "DD/MM/YYYY HH:mm:ss"
                              )}
                            </small>
                          </div>
                        </div>

                        <hr></hr>
                      </>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
export default BugInfomation;
