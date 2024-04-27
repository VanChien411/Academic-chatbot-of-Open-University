import { Row, Col, TabContent, Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { TabPane } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import * as dataClub from "@/components/dataScore/dataClub";
function Club(props: any) {
  const [initClubData, setInitClubData] = useState(dataClub.handleClubData());
  const [clubData, setClubData] = useState(dataClub.handleClubData());
    const {search} = props
    useEffect(() => {
    //    const tam = dataClub.searchClub(clubData,'nông nghiệp')
    //    setClubData(tam)
    //    console.log(tam)
      
        const tam = dataClub.searchClub(initClubData,search)
        setClubData(tam)
        // console.log("tam",tam)
      
       
    },[search])
  return (
    <>
      <div
        className="p-3 shadow bg-white container "
        style={{ overflow: "auto", height: "91vh" }}
      >
        <div className="m-3 d-flex align-items-center" style={{ height: "30px" }}>
          <strong>Danh sách câu lạc bộ và đội nhóm</strong>
       
         
        </div>
        <Row>
          {clubData.map((item, index) => {
            return (
              <Col xs={12}  md={6} lg={6} xl={4} key={index}>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      className=" "
                      style={{ overflow:'hidden',textOverflow:'ellipsis', whiteSpace:'nowrap', border: "4px solid #D0E2FF"}}
                    title= {item.name}
                    >
                      {item.name}
                    </Accordion.Header>
                    <Accordion.Body>
                      <small>Email</small> <br></br>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                      <br></br>
                      <small> Facebook</small>
                      <br></br>
                      <a href={`http://${item.facebook}`}>
                        {item.facebook ? item.facebook : "Không có"}
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}

        
        </Row>
    
      </div>
    </>
  );
}

export default Club;
