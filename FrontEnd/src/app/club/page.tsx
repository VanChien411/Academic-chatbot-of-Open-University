

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
import { useCallback, useEffect, useState } from "react";
// import TradeProgram from "@/components/tradingProgram/page-trade-program";
import AddSubject from "@/components/add-subject";
// import CreatePageWord from "@/components/createPage/createPageWord";
// import LastPageWord from "@/components/createPage/lastPageWord";

import dynamic from "next/dynamic";
import SidebarInformation from "@/components/sidebar-information";
import Club from "@/components/club";
const CreatePageWord = dynamic(() => import("@/components/createPage/createPageWord"), { ssr: false })

const TradeProgram = dynamic(() => import('@/components/tradingProgram/page-trade-program'));
const StatisticsStudent = dynamic(() => import('@/components/statistics-student'));

const LastPageWord = dynamic(() => import('@/components/createPage/lastPageWord'));
function DataStatistics() {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
  const [isSidebarInSmall, setIsInSmall] = useState(false);
  const router = useRouter();
    const [search, setSearch] = useState('');
    const [searchClub, setClubData] = useState('');
    let timerId: NodeJS.Timeout | null = null;

    const handleSearchChange = (data: string) => {
        const value = data;
        setSearch(value);
    
        // Clear previous timer
        if (timerId !== null) {
            clearTimeout(timerId);
        }
    
        // Set a new timer to execute search after 2 seconds
        const tam = setTimeout(() => {
            setClubData(value);
        }, 1000);
    
        // Lưu trữ ID của hàm setTimeout để có thể xóa bỏ nó nếu cần
        timerId = tam;
    };
    const handleResize =() => {
        if (typeof window !== 'undefined') {
            const win = window.innerWidth < 1200;
            setIsHiddenSidebar(win);
            setIsInSmall(win);
        }
    };
  useEffect(() => {
    // console.log("shareside", sharedData)

 

    window.addEventListener("resize", handleResize);
    handleResize(); // Xác định trạng thái ban đầu

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSideBar = useCallback(
    () => {
        console.log("show");
        if (window.innerWidth < 1200) {
          setIsInSmall(true);
        }
        setIsHiddenSidebar(!isHiddenSidebar);
      },[])

      const handleSideBar_by_button =
        () => {
            console.log("show");
            if (window.innerWidth < 1200) {
              setIsInSmall(true);
            }
            setIsHiddenSidebar(!isHiddenSidebar);
          }
    

  return (
    <>
      <div style={{ backgroundColor: "rgb(207,242,251)" }}>
        <div className="container-fluid position-relative ">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="club"
          >
            <Row className="" >
              {!isHiddenSidebar && (
                             <SidebarInformation isSidebarInSmall = {isSidebarInSmall} eventKey="club" handleSideBar = {handleSideBar}></SidebarInformation>

              )}

              <Col className="p-0 ">
                <Navbar expand="lg" className="bg-body-tertiary">
                  <Container fluid>
                    <Navbar.Brand onClick={() => handleSideBar_by_button()}>
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
                          value={search}
                          onChange={(e) => handleSearchChange(e.target.value)}
                        />
                        <Button variant="outline-success">Tìm</Button>
                      </Form>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>

                <Tab.Content>
                
                  <Tab.Pane eventKey="club">
                    <Club search = {search}></Club>
                    {/* <AddSubject></AddSubject> */}
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
export default DataStatistics;
