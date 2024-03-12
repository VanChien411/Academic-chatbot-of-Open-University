"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as api from "@/utils/api";

import { Button, Col, Row } from "react-bootstrap";
import SideBarAdmin from "@/components/sidebar-admin";
import MessengerChat from "@/components/messenger-chat";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleCloseMessage =()=>{

  }
  return (
    <html lang="en" style={{ height: "100%", width: "100%" }}>
      <body style={{ height: "100%" }} className={inter.className}>
        <div
          className="bg-dark w-100 position-relative "
          style={{ height: "100vh" }}
        >
          {/* head */}
          <div
            className="bg-danger position-absolute top-0 start-0 end-0"
            style={{ height: "50px" }}
          ></div>
          {/* body */}
          <div
            style={{ height: "100%" }}
            className="center bg-white w-100 container  p-0 "
          >
            <Row
              style={{
                paddingLeft: "11px",
                width: "1235px",
                height: "calc(100vh - 50px)",
              }}
              className=" position-absolute "
            >
              <div style={{ marginTop: "50px" }}></div>
              <div
                style={{ width: "250px " }}
                className="col-3 bg-info h-100 p-0 text-start "
              >
                <SideBarAdmin></SideBarAdmin>
              </div>
              <Col style={{ width: "100%" }} className="p-0 ">
                <div
                  style={{ height: "600px" }}
                  className=" w-100 m-5 bg-black "
                >
                  {children}
                </div>
              </Col>
            </Row>
          </div>
          <div className="position-absolute bottom-0 end-0 d-flex">
          <MessengerChat  friend_id={0} user_id={1} handleClose={handleCloseMessage} username="1" key={1}></MessengerChat>
          <MessengerChat friend_id={0} user_id={2} handleClose={handleCloseMessage} username="2" key={2}></MessengerChat>
          <MessengerChat friend_id={1} user_id={0} handleClose={handleCloseMessage} username="0" key={0}></MessengerChat>

          </div>
         
        </div>
      </body>
    </html>
  );
}
