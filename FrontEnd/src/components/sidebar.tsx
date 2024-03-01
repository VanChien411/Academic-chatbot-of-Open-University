"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SideBar() {
 return(
  <>
   <div
            style={{ width: "350px", height: "100%" }} 
            className={' d-none  d-md-block d-lg-block d-xl-block d-xxl-block bg-danger p-0 position-relative '}
          >
            <Button style={{width:'85%',marginLeft:'50px'}} className="position-absolute top-2 m-3 ">New task</Button>
            <div style={{ overflowY: "scroll", height: "calc(100% - 200px)" }} className="text-center">
              Nội dung của cột thứ hai
            </div>

            <div
              style={{ height: "200px", width: "100%" }}
              className=" position-absolute bg-info bottom-0 "
            >
              <span className="mx-4">dong duoi</span>
            </div>
          </div>

  </>
 )
}

export default SideBar;