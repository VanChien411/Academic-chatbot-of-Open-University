"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewSession from "@/components/newSession";
import Login from "./login";
import IUser from "@/models/user";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import { useRouter } from "next/navigation";
import Spinner from "react-bootstrap/Spinner";
import * as style1 from "@/styles/main.module.css";

import MessengerChat from "@/components/messenger-chat";
import { useAppDispatch, useAppSelector } from "@/redux/store"; // Import hooks từ store.ts

import { fetchUserStart } from "@/reducer/userSlice"; // Import action từ userSlice.ts
import { fetchUser } from "@/reducer/userSlice";
// Định nghĩa kiểu dữ liệu cho các sự kiện
interface MyEvents {
  valueChange?: [(newValue: string) => void];
  [key: string]: any; // Index signature cho kiểu string
  changeSession: () => void;
  showEmloyeeMessager: () => void;
}
function SideBar({ changeSession, showEmloyeeMessager }: MyEvents) {
  const [sessions, setSessions] = useState<model1.Session[]>([]);
  const [refresh, setRefresh] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userL, setUserL] = useState<IUser>();

  const dispatch = useAppDispatch();
  // const user1 = useAppSelector((state) => state.user.user);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);

  // trong một file khác, ví dụ main-chat.tsx
  const router = useRouter();

  useEffect(() => {
    const fetchData = async (user_id: number) => {
      const arrSession = await api.getAllSessionUser(user_id);
      setSessions(arrSession);
      console.log("arrS", arrSession);
      if (arrSession.length !== 0) {
        const currentPath = window.location.pathname;
        console.log("địa chỉ", arrSession);
        if (!currentPath.includes(`chat-page/${arrSession[0]["session_id"]}`)) {
          console.log("routersidebar");
          router.push(`/chat-page/${arrSession[0]["session_id"]}`);
        }
      } else if (arrSession) {
        try {
          const session = await createSession(); // Tạo phiên mới
        } catch (error) {
          console.error("Error creating session:", error);
        }
      }
    };

    const fetchDataAndUpdateUser = async () => {
      try {
        const user = await get_user_info();
        setUserL(user);
        console.log("userrrrr", user);
        if (user && "user_id" in user) {
          fetchData(user["user_id"] as number);
          console.log("loginsession");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchDataAndUpdateUser();
  }, []); // Thêm mảng dependencies rỗng để chỉ chạy useEffect một lần khi component mount

  async function get_user_info() {
    try {
      const user = await api.get_user_info2();
      if (user) {
        console.log("u", user);
        setIsMounted(true);
        return user;
      }
      return null;
    } catch (error) {
      console.log("Error:", error);
      // Handle error if necessary
      return null;
    }
  }

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

  const user1: IUser = {
    user_id: 1,
    username: "nam",
    password: "134",
    status: true,
    img: "https://th.bing.com/th/id/OIP.Iy0tmJanZeN5ceMP5uToLQAAAA?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet",
  };
  const createSession = async () => {
    try {
      setIsLoading(true);
      const user = await userL; // Corrected to call the function
      if (user) {
        setUserL(user);
        // Sử dụng TypeScript assertion để khẳng định rằng user không phải là null hoặc undefined
        if ("user_id" in user) {
          const newDate = getDate();
          const session: model1.Session = {
            name: `session ${newDate}`,
            start_time: newDate,
            end_time: newDate,
            user_id: user["user_id"] as number,
          };
          const session_id = await api.createSession(session);
          session_id ? router.push(`/chat-page/${session_id}`) : "";
        }
      }
      return user;
    } catch (error) {
      console.log("Error:", error);
      // Handle error if necessary
    }

    setIsLoading(false);
  };

  const updateSession = async (session: model1.Session) => {
    setIsLoading(true);
    try {
      const s = await api.updateSession(session);
      console.log("put", session);
      setIsLoading(false);
      return s;
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      return []; // Trả về một mảng trống nếu có lỗi xảy ra
    }
  };

  const handleSelectSession = async (session: model1.Session) => {
    setIsLoading(true);
    session.end_time = getDate();
    try {
      const s = await updateSession(session); // Chờ cho updateSession hoàn thành
      // Chỉ chuyển hướng khi không có lỗi xảy ra
      console.log("updateS", s);
      s ? router.push(`/chat-page/${session.session_id}`) : "";
    } catch (error) {
      console.error("Error updating session:", error);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        className={"  p-0 position-relative bg-dark "}
      >
        <div
          style={{
            width: "91%",
            marginLeft: "40px",
            height: "45px",
            margin: "auto",
            paddingLeft: "20px",
          }}
          className="position-absolute btn btn-outline-light top-2 m-3 "
          onClick={createSession}
        >
          <b>New chat</b>
        </div>

        <div
          style={{
            overflow: "auto",
            textAlign: "left",
            height: "calc(100% - 200px)",
          }}
          className={`${(style1 as any).scrollbarHidden}`}
        >
          <div style={{ height: "70px" }} className="space"></div>
          <div style={{ width: "85%", textAlign: "left", marginLeft: "25px" }}>
            {isLoading ? (
              <div>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
              </div>
            ) : (
              ""
            )}
            <div className="m-3"></div>
            {sessions?.map((session: model1.Session, index: number) => {
              {
                if (index == 0) {
                  return (
                    <NewSession
                      key={session.session_id}
                      status={true}
                      name={session.name}
                      session={session}
                      getSession={handleSelectSession}
                    />
                  );
                } else {
                  return (
                    <NewSession
                      key={session.session_id}
                      status={false}
                      name={session.name}
                      session={session}
                      getSession={handleSelectSession}
                    />
                  );
                }
              }
            })}

            {/* <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession>
          <NewSession status={true} name="sefef"></NewSession> */}
          </div>
        </div>

        <div
          style={{ height: "250px", width: "100%" }}
          className=" position-absolute bottom-0 bg-black"
        >
          <hr></hr>
          <div
            // variant="dark"
            onClick={() => router.push("/information-page")}
            className="w-100 border-0 btn btn-outline-dark  text-start px-5"
            style={{ color: "white" }}
          >
            <img width="40px" src="../images\document.png"></img>

            <b className="mx-2">&nbsp;Tiện ích</b>
          </div>
          <div
            style={{ color: "white" }}
            className="w-100 btn btn-outline-dark  border-0 text-start px-5 "
            // variant="light"
            onClick={showEmloyeeMessager}
          >
            <img width="40px" src="../images\support.png"></img>

            <b className="mx-1"> &nbsp;Hỗ trợ SV</b>
          </div>
          <br></br>

          <div
            // variant="dark"
            onClick={() => router.push("/chat-support-gpt")}
            className="w-100 border-0 btn btn-outline-dark  text-start px-5"
            style={{ color: "white" }}
          >
            <img width="40px" src="../images\chatgpticon.png"></img>

            <b className="mx-2">&nbsp;Chat Gpt</b>
          </div>

          <div className="position-absolute bottom-0 w-100">
            <Button
              // variant="primary"
              onClick={() => router.push("/login")}
              className="w-100 border-0 text-start px-5"
            >
              <img width="35px" src="../images\logout.png"></img>

              <b className="mx-2">Đăng xuất</b>
            </Button>

            {/* <Login user={api.getDataFromLocal("user")}></Login> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
