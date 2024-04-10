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
import StatisticsStudent from "@/components/statistics-student";
import { useEffect, useState } from "react";
import TradeProgram from "@/components/tradingProgram/page-trade-program";

function PageInformation() {
    const [isHiddenSidebar, setIsHiddenSidebar] = useState(false)
    const [isSidebarInSmall, setIsInSmall] = useState(false)
    const router = useRouter();

    useEffect(() => {
        // console.log("shareside", sharedData)
    
        const handleResize = () => {
            const win = window.innerWidth < 768
            setIsHiddenSidebar(win); // 992 là kích thước màn hình tương ứng với LG breakpoint
            setIsInSmall(win);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize(); // Xác định trạng thái ban đầu
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const handleSideBar = ()=>{
        if(window.innerWidth < 768 )
            {
                setIsInSmall(true)
            }
            setIsHiddenSidebar(!isHiddenSidebar)
      }

  return (
    <>
    <div style={{backgroundColor:'rgb(207,242,251)'}}>
    <div className="container position-relative "  >
      <Tab.Container id="left-tabs-example" defaultActiveKey="trade-program">
        <Row className="h-100" >
            {!isHiddenSidebar && (
                  <div style={{ width: "250px", zIndex:'1' }} className={`bg-light p-0 ${isSidebarInSmall?'position-absolute':''}  float-start `}>
                  <div
                    className="d-flex justify-content-center align-items-center  position-relative"
                    style={{ height: "70px", fontSize:'30px' }}
                    onClick={()=>router.push('/chat-page')}
                  >
                    Trang chu
                   {isSidebarInSmall &&(
                       <div className="position-absolute btn btn-outline-primary" onClick={()=>handleSideBar()} style={{ right: '-40px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                     </svg></div>
                   )}
                 
                  </div>
                
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
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
                    </Nav.Item>
                    <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
                      <Nav.Link eventKey="trade-program">
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
                        &nbsp;Chương trình đào tạo
                      </Nav.Link>
                    </Nav.Item>
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
                  </Nav>
                </div>
                
            )}
        

          <Col className="p-0 " >
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand onClick={()=>handleSideBar()} > 
                <div  className="btn btn-outline-primary ">
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
                  <Navbar.Brand onClick={()=>router.push('/chat-page')}> Chatbot OU</Navbar.Brand>
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
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Tab.Content >
              
              <Tab.Pane eventKey="home">
                First tab content</Tab.Pane>
              <Tab.Pane eventKey="list-user">
                {/* <Messenger onSendData={handleDataFromChild}></Messenger> */}
              </Tab.Pane>
              <Tab.Pane eventKey="trade-program">
               <TradeProgram></TradeProgram>
              </Tab.Pane>
              <Tab.Pane eventKey="data-statistics">
   
           <StatisticsStudent></StatisticsStudent>
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
