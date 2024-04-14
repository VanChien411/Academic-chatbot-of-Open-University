import { Card, Col, Form, InputGroup, Pagination, Row } from "react-bootstrap";
import * as api from "@/utils/api";
import * as model1 from "@/models/all";
import { useEffect, useState } from "react";
export default function LastPageWord() {
  const [arrNewPage, setArrNewPage] = useState<model1.NewPage[]>([]);
  const [indexPage, setIndexPage] = useState(0);
  const getAllNewPage = async () => {
    try {
      const data = await api.getAllNewPage();
      setArrNewPage(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error as Error);
    }
  };
  useEffect(() => {
    getAllNewPage();
  },[]);
  return (
    <>
      <div className="p-3 bg-white" style={{ height: "91vh" }}>
        <Row>
          <Col className="m-2">
            <Form.Select aria-label="Default select example" value={indexPage} onChange={(e) => setIndexPage(parseInt(e.target.value))}>
              {arrNewPage.map((item, index) => (
                <option key={index} value={index}>{item.name} - |{item.id}|</option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={2}><div onClick={()=>getAllNewPage()} className="m-2 btn btn-primary d-flex align-items-center justify-content-center">Tải lại</div></Col>
        </Row>
        <Row className="m-2 overflow-auto" style={{ height: "80vh" }} >
          {arrNewPage[indexPage] && (
            <Card className="p-0">
                
              <Card.Header className="bg-primary text-white">{arrNewPage[indexPage].name}</Card.Header>
              <Card.Body className="border border-primary overflow-auto" dangerouslySetInnerHTML={{__html: arrNewPage[indexPage].content}}></Card.Body>
              <Card.Footer className="border border-primary">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                      <span className="text-secondary me-2">Tổng trang: {arrNewPage.length}</span>
                      <span className="text-secondary">Trang {indexPage + 1} / {arrNewPage.length}</span>
                    </Col>
                    
                  
                    <Col className="p-0 m-0 ">
                      <Pagination className="m-0 float-end "  >
                        <Pagination.Prev onClick={() => setIndexPage(prev => Math.max(prev - 1, 0))} />
                        {arrNewPage.map((_, index) => (
                          <Pagination.Item
                            key={index}
                            active={index === indexPage}
                            onClick={() => setIndexPage(index)}
                          >
                            {index + 1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => setIndexPage(prev => Math.min(prev + 1, arrNewPage.length - 1))} />
                      </Pagination>
                    </Col>
                  

                </Row>
              </Card.Footer>
            </Card>
          )}
        </Row>
      </div>
    </>
  );
}
