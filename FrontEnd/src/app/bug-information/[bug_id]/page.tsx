"use client";

import { Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";
import Comment from "@/components/comment";
import { useEffect, useState } from "react";
// import TradeProgram from "@/components/tradingProgram/page-trade-program";
import useUserData  from "@/hook/getUser";
import dynamic from "next/dynamic";
import ModelQuestionBug from "@/components/modelQuestionBug";
import IUser from "@/models/user";
import * as model1 from '@/models/all';
import * as api from '@/utils/api';
import moment from "moment";
import { combineSlices } from "@reduxjs/toolkit";
import SidebarInformation from "@/components/sidebar-information";
function BugInfomation(props:any) {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
  const [isSidebarInSmall, setIsInSmall] = useState(false);
  const router = useRouter();
  const userData:IUser|null = useUserData();
  const [bugQuestion, setBugQuestion] = useState<model1.BugQuestion>();
  const [arrCommentOfBug, setArrCommentOfBug] = useState<model1.BugComment[]>([]);
  const getBugQuestion = async (id: number) => {
    const res = await api.getBugQuestion(id);
    console.log(res)
    updateViewBugQuestion(res)
    setBugQuestion(res);
   
  }
  const getAllBugComment = async () => {
    const res = await api.getAllBugComment();
    setArrCommentOfBug(res);
  }

  const getAllBugCommentByBugId = async (id: number) => {
   
    const res = await api.getAllBugCommentByBugId(id);
   
    setArrCommentOfBug(res);
  }
  const createConstBugComment =(BugComment: model1.BugComment )=>{

  return BugComment
  }

  const refAllBugComment =()=>{
   
    getAllBugCommentByBugId(props.params.bug_id)
  }

  const updateBugQuestion = async (data: model1.BugQuestion) => {
    const res = await api.updateBugQuestion(data);
    
  }
  const updateViewBugQuestion = async (data: model1.BugQuestion) => {
 
    if(data)
      
      {  
        const view = data.view as number + 1
        const newData = { ...data, 'view': view };
        await updateBugQuestion(newData);}
 
  }
  useEffect(() => {
    // console.log("shareside", sharedData)
  
    getBugQuestion(props.params.bug_id)
    getAllBugCommentByBugId(props.params.bug_id)

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
             <SidebarInformation isSidebarInSmall = {isSidebarInSmall} eventKey="bug-information" handleSideBar = {handleSideBar}></SidebarInformation>
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
                  <strong>
                    {bugQuestion?.title}
                  </strong>

                  <div className=" float-end" >
                    {" "}
                   
                    <ModelQuestionBug name="Đặt câu hỏi" user_id={userData?.user_id}></ModelQuestionBug>
                  </div>
                  <div>
                    <small>{bugQuestion?.view != null ? bugQuestion?.view +1 : 0} view</small> /{" "}
                    <small className="text-primary">{bugQuestion?.user_name? bugQuestion?.user_name : bugQuestion?.user_id}</small> /{" "}
                    <small className="text-muted">{ moment(bugQuestion?.create_time).format('DD/MM/YYYY HH:mm:ss')}</small>{" "}
                  </div>
                </div>
                <hr></hr>
                <div className="container">
                  <div>
                    <div
                      className="p-3 rounded  border border-black"
                      style={{ backgroundColor: "" }}
                      dangerouslySetInnerHTML={{ __html: bugQuestion?.content as string }}
                    >
                      
                  
                    
                    </div>
                   
                   {userData &&   (
                    
                    <Comment newUser_id={userData?.user_id} refAllBugComment = {refAllBugComment} comment ={createConstBugComment({bug_question_id:bugQuestion?.id as number,content:'',user_id:bugQuestion?.user_id  as number,user_id_last_comment:bugQuestion?.user_id as number})}></Comment>

                   )}
                  
                    
                  </div>
                  <div className="" style={{marginLeft:'5%'}}>
                    {arrCommentOfBug?.map((comment) => (
                       <Comment key={comment.id} newUser_id={userData?.user_id} refAllBugComment = {refAllBugComment} comment ={comment}></Comment>
                    ))}
                   {/* <Comment user_name={userData?.full_name as string} user_name_last_comment={bugQuestion?.user_id}></Comment> */}
                  </div>
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
