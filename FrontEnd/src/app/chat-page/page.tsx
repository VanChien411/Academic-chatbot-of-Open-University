"use client"
import { useState, useCallback,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import SideBar from "@/components/sidebar";
import MainChat from "@/components/main-chat";
import Search  from "@/components/search";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ChatPage() {
  const [open, setOpen] = useState(true);
  // const [valueSearch, setValueS] = useState("")
  // const handleSearch = useCallback((value: string) => {
  //   setValueS(value);
  // }, [valueSearch]); // Thêm valueSearch vào dependencies
   const handleSearch = (value: string) => {
      // đã có giá trị value 
      console.log("search", value)
   } 
  return (
    <>
      <Row style={{ height: "100%" }} className=" ">
        <SideBar></SideBar>
          <Col 
          xs={0} sm={0} md={6} lg={7} xl={8} xxl={7}
          className="position-relative bg-warning  container-fluid text-center center  ">
            <div>sfsf</div>
          <MainChat></MainChat>
          <div style={{width:'100%'}} className=" position-absolute bottom-0 mb-5 px-5 d-flex justify-content-center" >
            <div style={{width:'100%'}} className="  text-center center ">
            <Search getValueS={handleSearch} ></Search>
            
            </div>
          
          </div>
          
          </Col>
        </Row>
        
    </>
  );
}

export default ChatPage;