import Chatbox from "@/components/chatbox";
import IUser from "@/models/user";
import { useEffect, useState } from "react";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import { useRef } from "react";

// Interface MainChatProp
interface MainChatProp {
  user?: IUser;
  bot: IUser;
  user_messenger: string[];
  bot_messenger: string[];
}
interface messages {
  messages: model1.Message[];
}
// Function MainChat
function MainChat({ messages }: messages) {
  const [message, setMessage] = useState<model1.Message[]>([]);
  const [userL, setUserL] = useState<IUser>();
  useEffect(() => {
    const userLocal = api.getDataFromLocal("user");
    setUserL(userLocal);
    const getAllSessionUser = async (user_id: number) => {
      try {
        const sessions = await api.getAllSessionUser(user_id);
        return sessions;
      } catch (error) {
        console.error("Error:", error);
        return []; // Trả về một mảng trống nếu có lỗi xảy ra
      }
    };
    if (userLocal) {
      const sections = getAllSessionUser(userLocal["user_id"]);
    }
   
  }, []);

  const endRef = useRef(null);

  // Hàm để cuộn scroll đến cuối thẻ
  const scrollToBottom = () => {
    const element = document.getElementById('endCroll');
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };
  
  
  
  // Tạo đối tượng dataMainChat có kiểu MainChatProp và gán giá trị cho các thuộc tính của nó
  const dataMainChat: MainChatProp = {
    user: userL,
    bot: {
      user_id: 0,
      username: "Bot",
      password: "134",
      status: true,
      img: "https://th.bing.com/th/id/OIP.fQAsK6RlR4fCvlyyq-8Y0wHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    user_messenger: ["1sefesfges", "2efwefef"],
    bot_messenger: ["bot1sdgesgsg", "bot2dsgeshehs"],
  };

  // Sử dụng dataMainChat để truyền vào props của Chatbox
  return (
    <>
      {dataMainChat.user && (
        <>
          {messages?.map((message: model1.Message, index: number) => {
            return (
              <>
                <Chatbox
                  owner={dataMainChat.user!}
                  messenger={message.question}
                  mesengerProp={message}
                />
                <Chatbox owner={dataMainChat.bot} bot={true} messenger={message.answer} 
                  mesengerProp={message}

                 />
                
              </>
            );
          })}
          {scrollToBottom()}
        </>
      )}
      <span id='endCroll'></span>
    </>
  );
}

export default MainChat;
