"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewSession from "@/components/newSession";
import Login from "./login";
import IUser from "@/models/user";


function SideBar() {
  const user1:IUser={ user_id: 1, username: "nam", password: "134", status: true, img: "https://th.bing.com/th/id/OIP.Iy0tmJanZeN5ceMP5uToLQAAAA?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet" }

  
  
  return (
    <>
      <div
        style={{ width: "350px", height: "100%" }}
        className={
          " d-none  d-md-block d-lg-block d-xl-block d-xxl-block bg-danger p-0 position-relative "
        }
      >
        
        <Button
          style={{ width: "85%", marginLeft: "50px" }}
          className="position-absolute top-2 m-3 "
        >
          New task
        </Button>
        <div
          style={{ overflowY: "scroll", height: "calc(100% - 200px)" }}
          className="text-center"
        >
          <div style={{ height: "70px" }} className="space"></div>
          <div style={{ width: "85%", marginLeft: "25px" }}>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          </div>
        
        </div>

        <div
          style={{ height: "200px", width: "100%" }}
          className=" position-absolute bg-info bottom-0 "
        >
          <span className="mx-4">dong duoi</span>
          <div style={{width:"100%"}} className="position-absolute bottom-0">
          <Login user = {user1} ></Login>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default SideBar;
