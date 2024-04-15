"use client";
import { useState, useCallback, useEffect, use } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import SideBar from "@/components/sidebar";
import MainChat from "@/components/main-chat";
import Search from "@/components/search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import { copyFileSync } from "fs";
import "@/styles/main.module.css";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store"; // Import hooks từ store.ts
import IUser from "@/models/user";
import Spinner from "react-bootstrap/Spinner";

import Placeholder from "react-bootstrap/Placeholder";

function ChatPage() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<model1.Message[]>([]);
  const [refresh, setRefresh] = useState(true);
  const [statusSearch, setStatusSearch] = useState(true);
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const chageIdSession = async () => {};
  const [isColHidden, setIsColHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState<IUser>();

 
  const get_user_info = async () => {
    try {
      const user:model1.Session[] = await api.get_idSession_by_user(); // Chờ Promise được giải quyết
      // console.log(user); // In ra để kiểm tra dữ liệu user
      // Tiếp tục xử lý dữ liệu user sau khi Promise đã được giải quyết
      if (user.length == 0) {
          const user = await api.get_user_info2();
          const newDate = getDate();
          const session: model1.Session = {
            name: `session ${newDate}`,
            start_time: newDate,
            end_time: newDate,
            user_id: user["user_id"] as number,
          };
          const session_id = await api.createSession(session);
          session_id ? router.push(`/chat-page/${session_id}`) : "";
        
    
      } else {
       
        router.push(`/chat-page/${ user[0].session_id}`);
        
      }
    } catch (error:any) {
      if (error.message === "Failed login") {
        console.log("Failed login : ",error.message) ;
        // Kiểm tra xem đối tượng error có tồn tại và có thuộc tính 'response' không
        router.push("/login"); // Điều hướng đến trang đăng nhập
      } else {
        console.error("Error fetching user session:", error);
        router.push("/login"); // Điều hướng đến trang đăng nhập

        // Xử lý lỗi khác nếu cần
      }
    }
  };
  useEffect(() => {
    // const token = api.getDataFromLocal('token')
    // let user:any;
    // const get_user_info = async(token:string) =>{
    //   try {
    //    user =  await api.get_user_info(token)
    //   } catch (error) {

    //   }
    // }
    // if(token){
    //   get_user_info(token)
    // }

    get_user_info();
    const handleResize = () => {
      setIsColHidden(window.innerWidth < 768); // 992 là kích thước màn hình tương ứng với LG breakpoint
    };
    setIsMounted(true);
    window.addEventListener("resize", handleResize);
    handleResize(); // Xác định trạng thái ban đầu

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // console.log("cha");

    const getAllMessageSession = async () => {
      try {
        // console.log("messages ");
        const session_id = api.getDataFromLocal("session_id");
        const user = api.getDataFromLocal("user");
        !user ? router.push("/login") : "";

        const sessions = await api.getAllMessageSession(session_id);
        setMessages(sessions);
        // console.log("messages ", sessions);
      } catch (error) {
        console.error("Error:", error);

        return []; // Trả về một mảng trống nếu có lỗi xảy ra
      }
    };
    // console.log("messages 2");
    // getAllMessageSession();
  }, [refresh]);

  const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Định dạng thời gian cho MySQL
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // console.log(formattedDate); // In ra: "2024-03-02 22:12:39"

    return formattedDate;
  };

  // const [valueSearch, setValueS] = useState("")
  // const handleSearch = useCallback((value: string) => {
  //   setValueS(value);
  // }, [valueSearch]); // Thêm valueSearch vào dependencies
  const handleSearch = async (value: string) => {
    setStatusSearch(false);
    try {
      // Lấy session_id từ local storage
      const session_id = api.getDataFromLocal("session_id");
      const qe_time = getDate();

      // Nếu giá trị là kiểu string, gán cho thuộc tính answer của đối tượng message
      const message1: model1.Message = {
        question: value,
        answer: "Loading ...",
        answer_time: getDate(),
        session_id: session_id,
        question_time: qe_time,
      };

      // Thêm message mới vào danh sách messages
      setMessages([...messages, message1]);
      // Gửi yêu cầu đến API và đợi kết quả trả về
      const response = await api.postModelChatbot(value);

      // Kiểm tra kiểu dữ liệu của giá trị trả về
      if (typeof response === "string") {
        // Nếu giá trị là kiểu string, gán cho thuộc tính answer của đối tượng message
        const message: model1.Message = {
          question: value,
          answer: response,
          answer_time: getDate(),
          session_id: session_id,
          question_time: qe_time,
        };

        // Thêm message mới vào danh sách messages
        setMessages([...messages, message]);

        await api.createMessage(message);
        // console.log("search", value);
      } else {
        // Nếu giá trị không phải kiểu string, xử lý theo trường hợp tương ứng
        console.error("Error: Response is not a string");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setStatusSearch(true);
  };
  const handleMessage = () => {};
  return (
    <>
      <Row style={{ height: "100%" }} className=" ">
        <span
          style={{ width: "335px", height: "100%" }}
          className={` ${
            showSideBar ? "" : "d-none "
          } p-0 d-block   d-md-block d-lg-block d-xl-block d-xxl-block`}
        >
          {!user ? (
            <SideBar
              showEmloyeeMessager={handleMessage}
              changeSession={chageIdSession}
            ></SideBar>
          ) : (
            ""
          )}
        </span>

        <Col style={{ width: showSideBar ? "10%" : "100%" }} className="p-0">
          <div
            style={{ fontSize: "25px", width: "100%", overflow: "hidden" }}
            className=" text-center center bg-warning "
          >
            {isColHidden ? (
              <span
                style={{
                  textAlign: "left",
                  marginLeft: "0",
                  marginRight: "10px",
                }}
                className=""
              >
                <button
                  className="btn btn-primary"
                  onClick={() => setShowSideBar(!showSideBar)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bricks"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z" />
                  </svg>
                </button>
              </span>
            ) : (
              ""
            )}
            <b className={`${showSideBar && isColHidden ? "d-none" : ""}`}>
              Chào mừng bạn đến với chatbot OU
            </b>
          </div>
          <Row style={{ height: "93%" }}>
            <Col
              xs={0}
              sm={0}
              md={0}
              lg={0}
              xl={9}
              xxl={9}
              className={`${
                showSideBar && isColHidden ? "d-none" : ""
              } position-relative container-fluid text-center center  `}
            >
              <Button variant="primary" disabled className="mt-5">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Đăng nhập ...
              </Button>
              <Placeholder xs={12} size="lg" />
              <Placeholder xs={12} />
              <Placeholder xs={12} size="sm" />
              <Placeholder xs={12} size="xs" />
              {/* <div
                style={{
                  height: "70%",
                  width: "93%",
                  overflowX: "hidden",
                  textAlign: "left",
                }}
                className="position-absolute bottom-10 "
              >
                <MainChat messages={messages}></MainChat> 
              </div>

              <div
                style={{ width: "100%" }}
                className=" position-absolute bottom-0 mb-5 px-5 d-flex justify-content-center"
              >
                <div
                  style={{ width: "100%" }}
                  className="  text-center center "
                >
                  <div style={{ width: "50px" }}></div>
                 
                </div>
              </div> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ChatPage;
