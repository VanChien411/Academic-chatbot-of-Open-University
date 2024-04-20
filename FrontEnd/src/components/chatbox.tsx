"use client";
import IUser from "@/models/user";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";
import star from "@/assets/images/star.png";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import * as api from "@/utils/api";
import * as model1 from "@/models/all";
import Spinner from "react-bootstrap/Spinner";
import style1 from "@/styles/main.module.css";
import InputGroup from "react-bootstrap/InputGroup";

interface messenger {
  owner: IUser;
  messenger: string;
  bot?: boolean;
  mesengerProp: model1.Message;
  getValueS?: (value: string) => void;
} //bot để nhận biết đây là bot
function Chatbox(prop: messenger, props: any) {
  const [stateStar, setStateStar] = useState(0);
  const [comment, setComment] = useState("");
  const [isOnComment, setOnComment] = useState(false);
  const [isOnStart, setOnStart] = useState(false);
  const [isDislike, setDislike] = useState(false);

  function handleOnHide(): void {
    setOnComment(false);
    console.log("sef123");
  }

  useEffect(() => {
    prop.mesengerProp.star ? setStateStar(prop.mesengerProp.star) : "";
    prop.mesengerProp.comment ? setComment(prop.mesengerProp.comment) : "";
  }, []);
  const updateStarMessage = async (star: number) => {
    console.log("mesP", prop.mesengerProp);
    try {
      setStateStar(star);
      prop.mesengerProp.star = star;
      const r = await api.updateMessage(prop.mesengerProp);
      console.log("mes", r);
      setOnStart(false);
    } catch (error) {
      console.error(error);
    }
  };
  const updateCommentMessage = async (comment: string) => {
    try {
      setComment(comment);
      prop.mesengerProp.comment = comment;
      const r = await api.updateMessage(prop.mesengerProp);

      setOnComment(false);
    } catch (error) {
      console.error(error);
    }
  };
  const renderTooltipStar = (tooltipProps: any = props) => (
    <Tooltip id="button-tooltip" {...tooltipProps}>
      Mức độ phù hợp của câu trả lời
    </Tooltip>
  );

  const renderTooltipComment = (tooltipProps: any = props) => (
    <Tooltip id="button-tooltip-comment" {...tooltipProps}>
      Bình luận sự hài lòng
    </Tooltip>
  );

  const popoverComment = (
    <Popover id="popover-comment" className="w-100">
      <Popover.Header className="bg-primary text-white" as="h3">
        Đánh giá câu trả lời
      </Popover.Header>
      <Popover.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </Form.Group>
          <Button onClick={() => updateCommentMessage(comment)}>Gửi</Button>
        </Form>
      </Popover.Body>
    </Popover>
  );

  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        {[1, 2, 3, 4, 5].map((number) =>
          number > stateStar ? (
            <button
              style={{}}
              onClick={() => updateStarMessage(number)}
              className="border-0 btn bg-white"
              key={number}
            >
              <Image width="20px" src="/images/star-outline.png" alt="Star" />
            </button>
          ) : (
            <button
              style={{}}
              onClick={() => updateStarMessage(number)}
              className="border-0 btn bg-white"
              key={number}
            >
              <Image width="20px" src="/images/star.png" alt="Star" />
            </button>
          )
        )}
      </Popover.Body>
    </Popover>
  );

  const datatam = ['Quy định về đồng phục của trường',' Hiệu trưởng trường là ai?']
 
  return (
    <>
      <Row className="my-2">
        {/* img */}
        <div style={{ width: "70px" }} className="rounded-4">
          <img
            className="rounded-5"
            width="40px"
            height="40px"
            src={prop.owner.img ? prop.owner.img : "/images/dragon.jpg"}
          ></img>
        </div>
        <Col className="bg-body ">
          <div style={{ fontSize: "20px" }} className="d-flex  ">
            <b>
              {" "}
              {prop.owner.full_name
                ? prop.owner.full_name
                : prop.owner.username}
            </b>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: prop.messenger }}
            style={{ fontSize: "18px" }}
            className="d-flex"
          >
            {/* {prop.messenger} */}
          </div>

          {prop.bot &&
            (() => {
              // Đoạn mã JSX bạn muốn render
              return (
                <div style={{ height: "30px" }} className="">
                  {/* star */}

                  <OverlayTrigger
                    key={1}
                    trigger="click"
                    placement="top"
                    show={isOnStart}
                    overlay={popover}
                  >
                    <button
                      onClick={() => setOnStart(!isOnStart)}
                      className={`btn ${
                        stateStar != null && stateStar != 0
                          ? ""
                          : " text-warning"
                      } border-0 p-0  `}
                    >
                      {(stateStar != null && stateStar != 0 ) ||
                       isOnStart? (
                        <Image width="25px" src="/images/star.png" alt="Star" />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-star"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                        </svg>
                      )}
                    </button>
                  </OverlayTrigger>

                  {/* <OverlayTrigger
                    trigger="click"
                  
                    placement="bottom-start"
                    show = {isOnComment} 
                    overlay={popoverComment}
                    rootClose={true} // Khi người dùng nhấp chuột ra ngoài overlay, overlay sẽ tự động ẩn đi và gọi hàm handleOnHide
                  //  onHide={handleOnHide}// Sử dụng rootClose để ẩn overlay khi người dùng nhấp chuột ra ngoài
                  >
                   
                      
                     
                  </OverlayTrigger> */}
                  <button
                    onClick={() => {
                      !isOnComment && setDislike(false);
                      setOnComment(!isOnComment);
                    }}
                    className={`${
                      comment ? "" : "btn  text-primary"
                    } border-0 p-0 mx-3 `}
                  >
                    {comment || isOnComment ? (
                      <Image
                        width="25px"
                        className="bg-white"
                        src="/images/chat-blue.png"
                        alt="Comment"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-chat-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={() => setOnComment(!isOnComment)}
                    className={`p-0 justify-content-center align-items-center btn ${
                      comment ? "btn-primary" : "btn-white"
                    } `}
                    style={{
                      overflowY: "auto",
                      width: "50%",
                      height: "100%",
                      borderColor: "blue",
                    }}
                    title={comment}
                  >
                    {comment}
                  </button>
                  <img
                    
                    src={
                      isDislike
                        ? "/images/dislike-blue.png"
                        : "/images/dislike.png"
                    }
                    width="25px"
                    alt="Dislike"
                    onClick={() => {
                      setDislike(!isDislike);
                      setOnComment(false);
                    }}
                    style={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
              );
            })()}

          {prop.bot && isOnComment && (
            <div className=" mt-2 position-relative rounded">
              <div className="p-2 rounded bg-primary text-white">
                {" "}
                <strong>Đánh giá câu trả lời</strong>
              </div>
              <textarea
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                className="border my-2 rounded p-2   overflow-auto w-100"
                style={{ height: "100px",borderColor:'#383838e8' }}
              ></textarea>
              <Button
                className="position-absolute "
                style={{ bottom: "15px", right: "0px" }}
                onClick={() => {
                  updateCommentMessage(comment);
                  setOnComment(false);
                }}
              >
                Gửi
              </Button>
            </div>
          )}

          {prop.bot && isDislike && (
            <div className=" mt-2 position-relative rounded">
              <div className="p-2 rounded bg-primary text-white">
                {" "}
                <strong>Một số câu hỏi thay thế</strong>
              </div>
              <div onClick={() => setDislike(false)} className="position-absolute end-0 top-0 btn rounded-5 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></div>
              <div
                className="p-2 rounded border  overflow-auto "
                style={{ height: "100px",borderColor:'#383838e8' }}
              >
                <div>
                  {datatam.map((item, index) => {
                    return (
<div key={index}
                    className={`${style1.changeBg}  p-1 position-relative rounded`}
                    style={{}}
                  >
                    {item}
                    <div
                      onClick={() => {
                        prop.getValueS?prop.getValueS(item as string):'';
                    
                      }}
                      className={"btn  position-absolute p-1 end-0 top-0 "}
                      style={{
                        backgroundColor: "rgb(246, 243, 243)",
                        width: "40px",
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                    </div>
                  </div>
                    )
                  })}
                  
               
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
}
export default Chatbox;
