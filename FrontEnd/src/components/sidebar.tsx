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
  renderSideBar:boolean;
}

interface chat_employee extends model1.ChatWithEmloyee {
  announcement?: number;
  announcement_user?:number;
}
function SideBar({ changeSession, showEmloyeeMessager,renderSideBar ,saveOldSessions, oldSessions}: MyEvents,props: any) {
  // console.log('saveOldSessions', saveOldSessions);
  const [sessions, setSessions] = useState<model1.Session[]>(saveOldSessions);
  const [refresh, setRefresh] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userL, setUserL] = useState<IUser>(props.user);
  const [userAndChat, setUserAndChat] = useState<chat_employee | undefined>(undefined);
  useEffect(() => {
    setSessions(saveOldSessions);
  }, [saveOldSessions]);
  const dispatch = useAppDispatch();
  // const user1 = useAppSelector((state) => state.user.user);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);

  // trong một file khác, ví dụ main-chat.tsx
  const router = useRouter();

  const get_number_chat_user = async (user_id:number) => {
    try {
      const data:chat_employee = await api.get_number_chat_user(user_id as number);
      setUserAndChat(data)
      console.log(data);
    } catch (error) {}
  }
  useEffect(() => {
    console.log("23432")
    const getAllS = async() => {
      const arrSession = await api.getAllSessionUser(userL["user_id"] as number);
      // console.log('2', arrSession);
      setSessions(arrSession);
      
    };
 

    if(userL)
      {
   
    getAllS();

      }

  },[renderSideBar])
  useEffect(() => {
    ()=>oldSessions(sessions);
  },[sessions])
  useEffect(() => {
    console.log(1);
    setIsLoading(true);
    const fetchDataAndUpdateUser = async () => {
      try {
        let user;
        if(!userL)
          {
            user = await get_user_info();
          
            setUserL(user);
          }
        else{
          user = userL;
        }
        
        get_number_chat_user(user.user_id as number)
        if (user && "user_id" in user) {
          const arrSession = await api.getAllSessionUser(user["user_id"] as number);
          // console.log('2', arrSession);
          setSessions(arrSession);
          if (arrSession.length !== 0) {
            const currentPath = window.location.pathname;
            if (!currentPath.includes(`chat-page/${arrSession[0]["session_id"]}`)) {
              router.push(`/chat-page/${arrSession[0]["session_id"]}`);
            }
          } else {
            // await createSession();
          }
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    fetchDataAndUpdateUser();
    setIsLoading(false);
  }, []);
  async function get_user_info() {
    try {
      let user;
      if( !userL)
        {
          user = await api.get_user_info2();
          setUserL(user);
        }
        else{
          user = userL;
        }
   
      if (user) {
        // console.log("u", user);
        setIsMounted(true);
        return user;
      }
      return null;
    } catch (error) {
      // console.log("Error:", error);
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

    // console.log(formattedDate); // In ra: "2024-03-02 22:12:39"

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
      console.log(22324)
      setIsLoading(true);
      let user
      if(userL)
        {
          user = userL
        }
        else{
          user = await get_user_info(); // Corrected to call the function
          console.log('chay log sau khi tai')
        }

      if (user) {
        setUserL(user);
        console.log("user1", user);
        // Sử dụng TypeScript assertion để khẳng định rằng user không phải là null hoặc undefined
        if ("user_id" in user) {
          console.log("user_id", user["user_id"]);
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
      // console.log("put", session);
      setIsLoading(false);
      return s;
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      return []; // Trả về một mảng trống nếu có lỗi xảy ra
    }
  };

  const deleteSession = async (session: model1.Session) => {
    try {
      await api.deleteSession(session.session_id as number);
      if(session.session_id == sessions[0].session_id )
        {

          if(sessions[1])
            {
            console.log(session.session_id, '|', sessions[0].session_id)

              router.push(`/chat-page/${sessions[1].session_id}`);
            }
          
          else
          createSession();

        }
      setSessions(prevSessions => prevSessions.filter(s => s.session_id !== session.session_id))

    } catch (error) {
      
    }
   

  }
  const handleSelectSession = async (session: model1.Session) => {
    setIsLoading(true);
    session.end_time = getDate();
    try {
      const s = await updateSession(session); // Chờ cho updateSession hoàn thành
      // Chỉ chuyển hướng khi không có lỗi xảy ra
      // console.log("updateS", s);
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
        className={  `p-0 position-relative bg-dark`}
      >
          {/* <Button onClick={()=>oldSessions(sessions)}>sefsegs</Button> */}
        <div className={`  ${isLoading && (style1 as any)['disabled-div']} `}>
        <div  
          
          style={{
            width: "91%",
            marginLeft: "40px",
            height: "45px",
            margin: "auto",
            paddingLeft: "20px",
          }}
          className={`position-absolute btn btn-outline-light top-2 m-3 text-center z-3 ` }
          onClick={createSession}
        >
          <b>Tạo mới</b>
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
          <div className="position-relative" style={{ width: "85%", textAlign: "left", marginLeft: "25px" }}>
            {isLoading ? (
              <div className="position-absolute" style={{top:'50%', right:'50%', transform:' translate(-50%, -50%);', opacity:'1', zIndex:'2'}}>
               <Spinner animation="border" variant="white" />
               
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
                      deleteSession={deleteSession}
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
                      deleteSession={deleteSession}

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
        </div>
        <div
          style={{ height: "250px", width: "100%" }}
          className=" position-absolute bottom-0 bg-black"
        >
          <hr></hr>
          <div
            // variant="dark"
            onClick={() => router.push("/data-statistics")}
            className="w-100 border-0 btn btn-outline-dark  text-start px-5"
            style={{ color: "white" }}
          >
            <img width="40px" src="../images\document.png"></img>

            <b className="mx-2">&nbsp;Tiện ích</b>
          </div>
          <div
            style={{ color: "white" }}
            className="w-100 btn btn-outline-dark position-relative  border-0 text-start px-5 "
            // variant="light"
            onClick={showEmloyeeMessager}
          >
            <img width="40px" src="../images\support.png"></img>

            <b className="mx-1"> &nbsp;Hỗ trợ SV</b>
            {userAndChat  && (
              <div className="position-absolute top-0 text-danger border border-danger rounded-4 px-2" style={{right:'120px'}}><small> {Number(userAndChat.announcement_user) }</small></div>
            )}
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
