"use client";
import * as api from "@/utils/api";

import { Button, Col, Row } from "react-bootstrap";
import SideBarAdmin from "@/components/sidebar-admin";
import MessengerChat from "@/components/messenger-chat";
import Messenger from "@/components/messenger_admin";
import IUser from "@/models/user";
import { useState } from "react";
import AddFileChatBot from "@/components/add-file-chatbot";
import DataStatistics from "@/components/data-statistics";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';

import Container from 'react-bootstrap/Container';
import * as style1 from '@/styles/main.module.css';
const PageAdmin = () =>{
    const [listMessageUser, setListMessageUser] = useState<IUser[]>([]);
    const handleCloseMessage = () => {};
    const handleDataFromChild = (user: IUser) => {
      !listMessageUser.some(item => item.user_id === user.user_id)?
      setListMessageUser((prev) => [...prev, user]):''
      // return(
      //   <>
      //   {user.user_id?(
      //   <MessengerChat friend_id={user.user_id} user_id={0} handleClose={handleCloseMessage} username={user.username} key={user.user_id}></MessengerChat>
  
      //   ):''}
  
      //   </>
      // )
      // Lưu dữ liệu nhận được từ con vào state của cha
    };
  
    const handleDeleteChatId =(user_id:number)=>{
      console.log("id",user_id)
        removeItem(user_id)
    }
  
    const removeItem = (itemId: number) => {
      setListMessageUser(prevList => prevList.filter(item => item.user_id != itemId));
    };
    return(
        <>
         <div
          className="bg-light  w-100 position-relative "
          style={{ height: "100vh" }}
        >
          {/* head */}
         
             <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary position-absolute top-0 start-0 end-0 justify-content-center">
      
        <Navbar.Brand href="#" className="justify-content-center opacity-50">Trang quản lý của Admin</Navbar.Brand>
     
    </Navbar>
          
          {/* body */}
          <div
            style={{ height: "100%", borderColor:'black' , boxShadow:" 2px 2px 2px 2px rgba(0, 0, 0, 0.3)"}}
            className="center bg-white w-100 container  p-0 "
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="data-statistics">

            <Row
              style={{
                paddingLeft: "11px",
                width: "1235px",
                height: "calc(100vh - 50px)",
              }}
              className=" position-absolute  "
            >
              <div style={{ marginTop: "50px" }}></div>
              <div
                style={{ width: "250px " , boxShadow:" 2px 2px 4px rgba(0, 0, 0, 0.1)"}}
                className="col-3 bg-light h-100 p-0 text-start  "
              >
                <SideBarAdmin></SideBarAdmin>
              </div>
              <Col style={{ width: "100%" }} className="p-0 position-relative">
                <div
                  style={{ height: "600px", overflowY: "auto" }}
                 
                  className={`${(style1 as any).scrollbarHidden} w-100 m-5  `}
                >
                  {/* điểm chuyển trang */}
                  {/* <Messenger onSendData={handleDataFromChild}></Messenger> */}
                  {/* <AddFileChatBot></AddFileChatBot> */}
                  <Tab.Content>
            <Tab.Pane eventKey="home">First tab content</Tab.Pane>
            <Tab.Pane eventKey="list-user">
             
                  <Messenger onSendData={handleDataFromChild}></Messenger>
              
            </Tab.Pane>
            <Tab.Pane eventKey="add-file-chatbot">
                  <AddFileChatBot></AddFileChatBot>
              
            </Tab.Pane>
            <Tab.Pane eventKey="data-statistics">
                  <DataStatistics></DataStatistics>
              
            </Tab.Pane>
          </Tab.Content>
               
                </div>
              </Col>
            </Row>
            </Tab.Container>

          </div>
          <div className="position-absolute bottom-0 end-0 d-flex">
            {listMessageUser?.map((user: IUser, index: number) => {
              return (
                <>
                  {user.user_id ? (
                    <MessengerChat
                      friend_id={user.user_id}
                      user_id={0}
                      handleClose={handleCloseMessage}
                      onSendData = {handleDeleteChatId}
                      username={user.username}
                      key={user.user_id}
                    ></MessengerChat>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
            {/* <MessengerChat  friend_id={0} user_id={1} handleClose={handleCloseMessage} username="1" key={1}></MessengerChat>
          <MessengerChat friend_id={0} user_id={2} handleClose={handleCloseMessage} username="2" key={2}></MessengerChat>
          <MessengerChat friend_id={6} user_id={0} handleClose={handleCloseMessage} username="0" key={0}></MessengerChat> */}
          </div>
        </div>
        </>
    )
}
export default PageAdmin