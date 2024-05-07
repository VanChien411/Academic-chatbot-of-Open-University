import { Row, Col, TabContent, Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { TabPane } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import * as dataClub from "@/components/dataScore/dataClub";
function Khoa(props: any) {
  const [initKhoaData, setInitKhoabData] = useState(dataClub.handleKhoaData());
  const [khoaData, setKhoaData] = useState(dataClub.handleKhoaData());
    const {search} = props
    console.log(khoaData)
    useEffect(() => {
    //    const tam = dataClub.searchClub(clubData,'nông nghiệp')
    //    setClubData(tam)
    //    console.log(tam)
      
        const tam = dataClub.searchKhoa(initKhoaData,search)
        setKhoaData(tam)
        // console.log("tam",tam)
      
       
    },[search])
  return (
    <>
      <div
        className="p-3 shadow bg-white container-fluid "
        style={{ overflow: "auto", height: "91vh" }}
      >
        <div className="p-4 d-flex align-items-center shadow bg-primary text-white" style={{ height: "30px" }}>
          <strong>Danh sách các khoa</strong>
       
         
        </div>
        <br></br>
        <Row>
          {khoaData.map((item, index) => {
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
                    <Accordion.Body className="mx-auto">
                        <div className="mx-auto">{item.describe}</div>
                        <hr className="p-0 m-0"></hr>
                        <div dangerouslySetInnerHTML={{__html: item.website as string}}></div>
                        <hr className="p-0 m-0"></hr>
                        <div dangerouslySetInnerHTML={{__html: item.phone as string}}></div>
  
                        <hr className="p-0 m-0"></hr>
                        <div>{item.adress}</div>
                        <hr className="p-0 m-0"></hr>
                      {/* <small>Email</small> <br></br>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                      <br></br>
                      <small> Facebook</small>
                      <br></br>
                      <a href={`http://${item.facebook}`}>
                        {item.facebook ? item.facebook : "Không có"}
                      </a> */}
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

export default Khoa;
