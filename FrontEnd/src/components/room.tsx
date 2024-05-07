import { Row, Col, TabContent, Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { TabPane } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import * as dataClub from "@/components/dataScore/dataClub";
import ScrollToTopButton from "@/hook/scroll";
function Room(props: any) {
  const [initroomData, setInitRoomData] = useState(dataClub.handleRoomData());
  const [roomData, ssetRoomData] = useState(dataClub.handleRoomData());

    const {search} = props
    useEffect(() => {
    //    const tam = dataClub.searchClub(roomData,'nông nghiệp')
    //    ssetRoomData(tam)
    //    console.log(tam)
      
        const tam = dataClub.searchRoom(initroomData,search)
        ssetRoomData(tam)
        // console.log("tam",tam)
      
       
    },[search])
  return (
    <>
      <div
      id="scrollId"
        className="p-3 shadow bg-white container-fluid "
        style={{ overflow: "auto", height: "91vh" }}
      >
        <div  className="p-4 d-flex align-items-center bg-primary text-white shadow" style={{ height: "30px" }}>
          <strong>Danh sách phòng và đoàn đội</strong>
       
         
        </div>
        <br></br>
        <Row >
          {roomData.map((item, index) => {
            return (
              <Col xs={12}  md={6} lg={6} xl={4} key={index}>
                <Accordion defaultActiveKey="1" flush className="mb-2 shadow">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      className=" "
                      style={{ overflow:'hidden',textOverflow:'ellipsis', whiteSpace:'nowrap', border: "4px solid #D0E2FF"}}
                      title= {item.name}
                    >{item.name}</Accordion.Header>
                    <Accordion.Body>
                      {item.describe?.map((desc:string, i:number) => (
                        <div key={i}>
                       
                          <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                          <hr className="p-0 my-1"></hr>
                        </div>
                       
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}

          {/* <ScrollToTopButton scrollId={document.getElementById("scrollId")}></ScrollToTopButton> */}
        </Row>
       
      </div>
    </>
  );
}

export default Room;
