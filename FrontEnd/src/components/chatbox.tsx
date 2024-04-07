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
import Form from 'react-bootstrap/Form';
import * as api from "@/utils/api";
import * as model1 from "@/models/all";
import Spinner from "react-bootstrap/Spinner";


interface messenger {
  owner: IUser;
  messenger: string;
  bot?: boolean;
  mesengerProp:model1.Message
} //bot để nhận biết đây là bot
function Chatbox(prop: messenger, props: any) {
  const [stateStar, setStateStar] = useState(0);
  const [comment, setComment] = useState('');
  const [isOnComment, setOnComment] = useState(false);
  const [isOnStart, setOnStart] = useState(false);

  useEffect(()=>{
    console.log("id star", prop.mesengerProp )
    prop.mesengerProp.star?setStateStar(prop.mesengerProp.star):''
    prop.mesengerProp.comment?setComment(prop.mesengerProp.comment):''
  },[])
  const updateStarMessage =async(star:number)=>{
    console.log('mesP',prop.mesengerProp)
    try {
      setStateStar(star)
      prop.mesengerProp.star = star
      const r = await api.updateMessage(prop.mesengerProp)
      console.log('mes',r)
      setOnStart(false)
    } catch (error) {
      console.error(error)
    }
   
  }
  const updateCommentMessage =async(comment:string)=>{
    console.log('mesP',prop.mesengerProp)
    try {
      setComment(comment)
      prop.mesengerProp.comment= comment
      const r = await api.updateMessage(prop.mesengerProp)
      console.log('mes',r)
      setOnComment(false)
    } catch (error) {
      console.error(error)
    }
   
  }
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
      <Popover.Header as="h3">Đánh giá câu trả lời</Popover.Header>
      <Popover.Body>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} onChange={(e)=>{setComment(e.target.value)}} />
      </Form.Group>
      <Button onClick={()=>updateCommentMessage(comment)}>Gửi</Button>
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
              onClick={() =>updateStarMessage(number)}
              className="border-0 btn bg-white"
              key={number}
            >
              <Image width="20px" src="/images/star-outline.png" alt="Star" />
            </button>
          ) : (
            <button
              style={{}}
              onClick={() =>updateStarMessage(number)}
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

  return (
    <>
      <Row className="my-2">
        {/* img */}
        <div style={{ width: "70px" }}>
          <img
            width="50px"
            height="50px"
            src={
              prop.owner.img
                ? prop.owner.img
                : "https://th.bing.com/th/id/OIP.MxwWv4AAMqOlkqjNzjPk3QHaEo?w=301&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
          ></img>
        </div>
        <Col className="bg-body ">
          <div style={{ fontSize: "20px" }} className="d-flex  ">
            <b> {prop.owner.username}</b>
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
                    show ={isOnStart}
                    overlay={popover}
                  >
                    
                        <button onClick={()=>setOnStart(!isOnStart)} className={`btn ${stateStar != null && stateStar != 0 ? 'btn-warning':'btn-outline-warning'} border-0 p-0  `}  >
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
                        </button>
                      
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-start"
                    show = {isOnComment} 
                    overlay={popoverComment}
                    
                  >
                   
                        <button onClick={()=>setOnComment(!isOnComment)} className={`${comment ? 'btn btn-primary':'btn btn-outline-primary'} border-0 p-0 mx-3 `}>
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
                        </button>
                     
                  </OverlayTrigger>
                
                  <button className={`btn ${comment?'btn-primary':'btn-white'} `} style={{overflowY:'scroll', width:'50%', height:'100%', borderColor:'blue'}} title={comment}>{comment}</button>

                
                </div>
              );
            })()}
        </Col>
      </Row>
    </>
  );
}
export default Chatbox;
