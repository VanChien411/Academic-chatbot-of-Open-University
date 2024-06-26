import Chatbox from "@/components/chatbox";
import IUser from "@/models/user";
import { useEffect, useState } from "react";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Spinner from "react-bootstrap/Spinner";
// Interface MainChatProp
interface MainChatProp {
  user?: IUser;
  bot: IUser;
  user_messenger: string[];
  bot_messenger: string[];
}
interface messages {
  messages: model1.Message[];
  getValueS?: (value: string) => void;
}
// Function MainChat
function MainChat({ messages, getValueS }: messages) {
  const [message, setMessage] = useState<model1.Message[]>([]);
  const [userL, setUserL] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    
  const get_user_info = async () => {
    try {
      const user = await api.get_user_info2(); // Corrected to call the function
      setUserL(user);
      return user
     
    } catch (error) {
      console.log('Error:', error);
      // Handle error if necessary
    }
  }
    
  get_user_info()
    const getAllSessionUser = async (user_id: number) => {
      try {
        const sessions = await api.getAllSessionUser(user_id);
        return sessions;
      } catch (error) {
        console.error("Error:", error);
        return []; // Trả về một mảng trống nếu có lỗi xảy ra
      }
    };
    // if (userLocal) {
    //   setIsLoading(true)
    //   const sections = getAllSessionUser(userLocal["user_id"]);
    //   setIsLoading(false)

    // }
    scrollToBottom
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      scrollToBottom();
     
    }, 100); // Gọi sau khi render
  },[messages])
  const endRef = useRef(null);

  // Hàm để cuộn scroll đến cuối thẻ
  const scrollToBottom = () => {
    const element = document.getElementById("endCroll");
    console.log(element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  // Tạo đối tượng dataMainChat có kiểu MainChatProp và gán giá trị cho các thuộc tính của nó
  const dataMainChat: MainChatProp = {
    user: userL,
    bot: {
      user_id: 0,
      username: "Chatbot OU",
      password: "134",
      status: true,
      img: "/images/bot.jpg",
    },
    user_messenger: ["1sefesfges", "2efwefef"],
    bot_messenger: ["bot1sdgesgsg", "bot2dsgeshehs"],
  };

  // Sử dụng dataMainChat để truyền vào props của Chatbox
  return (
    <>
    <div className="px-3 " style={{paddingTop:'10px'}}>
      {dataMainChat.user && (
        <>{isLoading? (<div className="btn btn-primary">
           <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
        </div>):''}
          {messages?.map((message: model1.Message, index: number) => {
            return (
              <>
                <Chatbox
                  owner={dataMainChat.user!}
                  messenger={message.question}
                  mesengerProp={message}
                  getValueS={getValueS}
                  time={message.question_time}
                />
                <br></br>
                <Chatbox
                  owner={dataMainChat.bot}
                  bot={true}
                  messenger={message.answer}
                  mesengerProp={message}
                  getValueS={getValueS}
                  
                />
                <br></br>
              </>
            );
          })}
  
          {(messages == undefined || messages.length === 0) && (
            <div
              style={{
                height: "100%",
                textAlign: "center",
                alignItems: "center",
                marginTop:'43px'
              }}
            >
              <div
                style={{ width: "100%", display: "grid", placeItems: "center" }}
                className=" "
              >
                <div style={{ width: "400px" }}>
                  <div>
                   
                  </div>
                  <div className=" p-0 " style={{marginTop:'80px'}} >
                    <img
                      src="../images/bodyOU.png"
                      width="350px"
                      height="250px"
                      alt="Body Image"
                    ></img>
                  </div>
                  <div className="btn btn-primary my-3">
                    Tạo chat mới để bắt đầu trải nghiệm
                  </div>
                  <Row>
                    <Col>
                      <small>Lập trình</small>
                      <br></br>
                      <strong>Lê Văn Chiến</strong>
                      <br></br>
                      <strong>Bùi Tiến Phát</strong>
                    </Col>
                    <Col>
                      <small>Giáo viên</small>
                      <br></br>
                      <strong>Dương Hữu Thành</strong>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
          {scrollToBottom()}
        </>
      )}
      

    </div>
    <div id="endCroll"  className="w-100 float-end"></div>
    </>
  );
}

export default MainChat;
