import model1 from "@/models/all";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";
import Search from "@/components/search";

interface messenger {
  username: string;
  chat_employee?: model1.ChatWithEmloyee[]; // Corrected spelling here
  handleClose: () => void;
  user_id: number;
  friend_id: number;
}

function MessengerChat(prop: messenger) {
  const [statusSearch, setStatusSearch] = useState(true);
  const [listMessage, setListMessage] = useState<model1.ChatWithEmloyee[]>(
    prop.chat_employee || []
  );
  const [emloyee, setEmloyee] = useState(false);
  const handleSearch = async (value: string) => {
    sendMessage(value);
  };

  const [receivedMessages, setReceivedMessages] = useState<any[]>([]);

  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const user_id = prop.user_id; // Thay prop.params.id bằng cách lấy user_id từ props của bạn
    user_id == 0 ? setEmloyee((pre) => true) : "";

    const newSocket = new WebSocket(`ws://localhost:8765`);
    newSocket.onopen = () => {
      console.log("Connected to WebSocket server");
      sendMessageSocket(newSocket)
    };
    newSocket.onmessage = (event) => {
      console.log(event);
      const message = JSON.parse(event.data);
      console.log(message);
      if (message.friend_id == user_id && message.user_id == prop.friend_id && message.message != "")
      {
        const item: model1.ChatWithEmloyee =
        user_id == 0
          ? {
              user_id: message.user_id,
              emloyee: false,
              messenger: message.message,
              status: true,
              datetime: getDate(),
            }
          : {
              user_id: user_id,
              emloyee: true,
              messenger: message.message,
              status: true,
              datetime: getDate(),
            };

      // setReceivedMessages(prevMessages => [...prevMessages, message]);
      setListMessage((prevMessages) => [...prevMessages, item]);
    };
      }
      

    setSocket(newSocket);
    
    // Không cần return một hàm từ useEffect
  }, [prop.user_id]);

  const sendMessage = (message: string) => {
    console.log("socket", socket);
    console.log("message", message.trim());

    if (socket && socket.readyState === WebSocket.OPEN) {
      const data = {
        user_id: prop.user_id.toString(),
        message: message,
        friend_id: prop.friend_id.toString(),
      };
      const item: model1.ChatWithEmloyee = {
        user_id: prop.user_id,
        emloyee: emloyee,
        messenger: message,
        status: true,
        datetime: getDate(),
      };

      setListMessage((prevMessages) => [...prevMessages, item]);
      const jsonData = JSON.stringify(data);
      socket.send(jsonData);
      console.log("sf");
    }
  };

  const sendMessageSocket = (Esocket: WebSocket) => {
    console.log("socket", Esocket);
 
    const message = ""
    if (Esocket && Esocket.readyState === WebSocket.OPEN) {
      const data = {
        user_id: prop.user_id.toString(),
        message: message,
        friend_id: prop.friend_id.toString(),
      };
      const item: model1.ChatWithEmloyee = {
        user_id: prop.user_id,
        emloyee: emloyee,
        messenger: message,
        status: true,
        datetime: getDate(),
      };

      const jsonData = JSON.stringify(data);
      Esocket.send(jsonData);
      console.log("sf1");
    }
    console.log("sqưef");

  };

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

  return (
    <>
      <div
        style={{ width: "300px", height: "400px", borderColor: "black" }}
        className="bg-white mx-2 border-2 position-relative"
      >
        <Row
          style={{ height: "50px", marginLeft: "0px" }}
          className="d-flex w-100 center align-items-center  bg-primary "
        >
          <Col
            style={{ paddingLeft: "15px" }}
            className="d-flex justify-items-center "
          >
            {prop.username}sg
          </Col>
          <div
            onClick={() => prop.handleClose}
            style={{ width: "50px", height: "50px" }}
            className="p-0 d-flex center align-items-center rounded-0  btn btn-danger"
          >
            <img className="img-fluid " src="/images/delete.png"></img>
          </div>
        </Row>
        {/* body */}
        <div
          style={{
            width: "100%",
            height: "280px",
            overflowY: "auto",
            backgroundColor: "#E0E0E0",
          }}
          className="px-3"
        >
          {listMessage?.map((item: model1.ChatWithEmloyee, index: number) => {
            return (
              <>
                {emloyee ? (
                  item.emloyee ? (
                    <div
                      style={{
                        maxWidth: "230px",
                        wordWrap: "break-word",
                        backgroundColor: "#99CCFF",
                        float: "right",
                      }}
                      className="d-inline-block rounded-2 px-2"
                    >
                      {item.messenger}sefsdsdgvsgsvvdvdvzvzvzvzdvzdvdsfsgegs
                    </div>
                  ) : (
                    <div
                      style={{ maxWidth: "230px", wordWrap: "break-word" }}
                      className="bg-white d-inline-block rounded-2 px-2 my-2"
                    >
                      {item.messenger}sefsdsdgvsgsvvdvdvzvzvzvzdvzdvdsfsgegs
                    </div>
                  )
                ) : !item.emloyee ? (
                  <div
                    style={{
                      maxWidth: "230px",
                      wordWrap: "break-word",
                      backgroundColor: "#99CCFF",
                      float: "right",
                    }}
                    className="d-inline-block rounded-2 px-2"
                  >
                    {item.messenger}sefsdsdgvsgsvvdvdvzvzvzvzdvzdvdsfsgegs
                  </div>
                ) : (
                  <div
                    style={{ maxWidth: "230px", wordWrap: "break-word" }}
                    className="bg-white d-inline-block rounded-2 px-2 my-2"
                  >
                    {item.messenger}sefsdsdgvsgsvvdvdvzvzvzvzdvzdvdsfsgegs
                  </div>
                )}
              </>
            );
          })}
        </div>

        {/* body */}
        <div className="position-absolute bottom-0 mx-2">
          <Search status={statusSearch} getValueS={handleSearch}></Search>
        </div>
      </div>
    </>
  );
}
export default MessengerChat;
