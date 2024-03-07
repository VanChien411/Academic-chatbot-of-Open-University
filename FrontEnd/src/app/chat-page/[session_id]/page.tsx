"use client";
import { useState, useCallback, useEffect } from "react";
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

function ChatPage(prop: any) {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<model1.Message[]>([]);
  const [refresh, setRefresh] = useState(true);
  const [statusSearch, setStatusSearch] = useState(true);
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const chageIdSession = async () => {
    // // Chờ cho cập nhật local storage hoàn tất trước khi tiếp tục
    // await new Promise((resolve) => setTimeout(resolve, 100)); // Thời gian chờ có thể thay đổi
    // const session_id = api.getDataFromLocal("session_id");
    // console.log(session_id);
    // setRefresh((prevRefresh) => !prevRefresh);
    // console.log(refresh);
  };
  const [isColHidden, setIsColHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsColHidden(window.innerWidth < 768); // 992 là kích thước màn hình tương ứng với LG breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Xác định trạng thái ban đầu

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("cha");
    console.log(prop.params.session_id);
    const getAllMessageSession = async () => {
      try {
        const session_id = prop.params.session_id;
        const user = api.getDataFromLocal("user");
        !user ? router.push("/login") : "";

        const sessions = await api.getAllMessageSession(session_id);
        setMessages(sessions);
        console.log("messages ", sessions);
      } catch (error) {
        console.error("Error:", error);

        return []; // Trả về một mảng trống nếu có lỗi xảy ra
      }
    };
    console.log("messages 2");
    getAllMessageSession();
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

    console.log(formattedDate); // In ra: "2024-03-02 22:12:39"

    return formattedDate;
  };

  function convertNewlinesToBreaks(inputString: string) {
    return inputString
      .split("\n")
      .map((line, index, array) => {
        if (index === array.length - 1) {
          return line;
        } else {
          return line + "<br />";
        }
      })
      .join("");
  }

  // const [valueSearch, setValueS] = useState("")
  // const handleSearch = useCallback((value: string) => {
  //   setValueS(value);
  // }, [valueSearch]); // Thêm valueSearch vào dependencies
  const handleSearch = async (value: string) => {
    setStatusSearch(false);
    try {
      // Lấy session_id từ local storage
      const session_id = prop.params.session_id;
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
        const answer = convertNewlinesToBreaks(response); // Sử dụng const để khai báo biến answer
        // Nếu giá trị là kiểu string, gán cho thuộc tính answer của đối tượng message
        const message: model1.Message = {
          question: value,
          answer: answer,
          answer_time: getDate(),
          session_id: session_id,
          question_time: qe_time,
        };

        console.log("answer", answer);
        // Thêm message mới vào danh sách messages
        setMessages([...messages, message]);

        await api.createMessage(message);
        console.log("search", value);
      } else {
        // Nếu giá trị không phải kiểu string, xử lý theo trường hợp tương ứng
        console.error("Error: Response is not a string");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setStatusSearch(true);
  };

  return (
    <>
      <Row style={{ height: "100%" }} className=" ">
        <span
          style={{ width: "350px", height: "100%" }}
          className={` ${
            showSideBar ? "" : "d-none "
          } p-0 d-block   d-md-block d-lg-block d-xl-block d-xxl-block`}
        >
          <SideBar changeSession={chageIdSession}></SideBar>
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
              <div
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
                  <Search
                    status={statusSearch}
                    getValueS={handleSearch}
                  ></Search>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ChatPage;
