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

// Định nghĩa kiểu dữ liệu cho các sự kiện
interface MyEvents {
  valueChange?: [(newValue: string) => void];
  [key: string]: any; // Index signature cho kiểu string
  changeSession: () => void;
}
function SideBar({ changeSession }: MyEvents) {
  const [sessions, setSessions] = useState<model1.Session[]>([]);
  const [refresh, setRefresh] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  // trong một file khác, ví dụ main-chat.tsx
  const router = useRouter();
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    const fetchData = async (user_id: number) => {
      const arrSession = await api.getAllSessionUser(user_id);
      setSessions(arrSession);
      console.log("arrS", arrSession);
      if (arrSession.length !== 0) {
        const currentPath = window.location.pathname;
        console.log("địa chỉ", arrSession); // In ra địa chỉ hiện tại, không phải chuỗi 'currentPath'
        if (!currentPath.includes(`chat-page/${arrSession[0]["session_id"]}`)) {
          console.log("routersidebar");
          router.push(`/chat-page/${arrSession[0]["session_id"]}`); // Loại bỏ tiền tố chat-page/
        }
        

      } else if(arrSession){
        try {
          const session = await createSession(); // Tạo phiên mới
        } catch (error) {
          console.error("Error creating session:", error);
        }
      }

     
    };

    const user = api.getDataFromLocal("user");
    if (user) {
      fetchData(user["user_id"]);
    }
    changeSession();
    // Theo dõi thay đổi của refresh
  }
  }, [isMounted]);

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
    const userLocal = api.getDataFromLocal("user");

    const newDate = getDate();
    const session: model1.Session = {
      name: `session ${newDate}`,
      start_time: newDate,
      end_time: newDate,
      user_id: userLocal["user_id"],
    };
    const session_id = await api.createSession(session);
    session_id ? router.push(`/chat-page/${session_id}`) : "";
  };

  const updateSession = async (session: model1.Session) => {
    try {
      const s = await api.updateSession(session);
      console.log("put", session);
      return s;
    } catch (error) {
      console.error("Error:", error);
      return []; // Trả về một mảng trống nếu có lỗi xảy ra
    }
  };

  const handleSelectSession = async (session: model1.Session) => {
    session.end_time = getDate();
    try {
      const s = await updateSession(session); // Chờ cho updateSession hoàn thành
      // Chỉ chuyển hướng khi không có lỗi xảy ra
      console.log('updateS', s)
      s ? router.push(`/chat-page/${session.session_id}`) : "";
    } catch (error) {
      console.error("Error updating session:", error);
    }
  };
  return (
    <>
      <div
        style={{ width: "100%", height: "100%", backgroundColor: "#faecb2" }}
        className={"  p-0 position-relative "}
      >
        <div
          style={{ width: "85%", marginLeft: "50px" }}
          className="position-absolute btn btn-primary top-2 m-3 "
          onClick={createSession}
        >
          New chat
        </div>

        <div
          style={{
            overflowY: "scroll",
            textAlign: "left",
            height: "calc(100% - 200px)",
          }}
          className=""
        >
          <div style={{ height: "70px" }} className="space"></div>
          <div style={{ width: "85%", textAlign: "left", marginLeft: "25px" }}>
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
          style={{ height: "200px", width: "100%" }}
          className=" position-absolute bg-white bottom-0 "
        >
          <span className="mx-4">dong duoi</span>
          <div style={{ width: "100%" }} className="position-absolute bottom-0">
            <Login user={api.getDataFromLocal("user")}></Login>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
