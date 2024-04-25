import React, { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import type { Editor as TypeEditor } from "@ckeditor/ckeditor5-core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { saveAs } from "file-saver";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import dynamic from "next/dynamic";
import Nav from 'react-bootstrap/Nav';
import IUser from "@/models/user";
import Tab from "react-bootstrap/Tab";

const WordPage: React.FC = () => {
  const nameInit = "Trang mẫu";
  const wordInit= `<p><strong>Tiêu đề</strong></p><ol><li><p>Tiêu đề nhỏ</p><p>Nội dung .. <a href="vls.com">vls.com</a></p><p>Nội dung .. <a href="link.com">link.com</a></p></li><li><p>Tiêu đề nhỏ</p><p>Nội dung ..&nbsp;</p><p>Nội dung ..&nbsp;</p></li></ol><p><strong>Phần nội dung</strong></p><p>Nội dung 1…</p><p>Nội dung 2..</p><p><strong>Phần kết</strong></p><figure class="table"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>`;
  const [content, setContent] = useState<string>(wordInit);
  const [namePage, setNamePage] = useState<string>(nameInit);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [valueLinkPage, setValueLinkPage] = useState<number>(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState<IUser>();
  const [arrPage, setArrPage] = useState<model1.NewPage[]>([]);
  useEffect(() => {

    getAllNewPageByUserID();
  },[])

  const updateNewPage = async () => {
    try {
      const data: model1.NewPage = {
        id: arrPage[valueLinkPage].id,
        name: namePage,
        content: content,
        user_id: user?.user_id as number,
      }
      await api.updateNewPage(data);
      setShow(false);
      getAllNewPageByUserID();
    } catch (error) {
      console.error(error);
    }
  };

 
  const handleSaveWord = () => {
    const blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, "document.docx");
  };

  const createNewPage = async (data: model1.NewPage) => {
    try {
      await api.createNewPage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const get_info_user = async () => {
    try {
      const data = await api.get_user_info2();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSave = async () => {
    const data: model1.NewPage = {
      name: nameInit,
      content: wordInit,
      user_id: user?.user_id,
    };
    console.log(data);
    
    await createNewPage(data);
    handleClose();
    getAllNewPageByUserID();
  };

  const handleLinkPage = (eventKey:number) => {
    console.log(arrPage[eventKey])
    initvalue(arrPage[eventKey]);
    setValueLinkPage(eventKey);
  }

  const initvalue =(newPage: model1.NewPage) => {
    setContent(newPage.content);
    setNamePage(newPage.name);
  }

  const getAllNewPageByUserID = async () => {
    try {
      let tam = user
      if(!user){
        const user2 = await api.get_user_info2();
        tam = user2
        setUser(user2);
      }
    
      const data = await api.getAllNewPageByUserID(tam?.user_id as number);
      setValueLinkPage(0);
      setArrPage(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="p-3 bg-white  " style={{overflow:'auto',height:'91vh'}}>
       <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="data-statistics"
          >
         <Nav fill variant="tabs"   defaultActiveKey={valueLinkPage} onSelect={(e)=>handleLinkPage( parseInt(e as string))}>
      {arrPage?.map ((item, index) => (
         <Nav.Item key={index} >
         <Nav.Link className={`${valueLinkPage == index? 'bg-primary text-white':''}`} eventKey={index} href="">{item.name}</Nav.Link>
       </Nav.Item>
      ))}
      {/* <Nav.Item  >
        <Nav.Link className={`${valueLinkPage == 0? 'bg-primary text-white':''}`} eventKey={0} href="">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={1} >Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item> */}
      <Nav.Item className="d-flex p-0 m-0 justify-content-start">
    
       <div className="btn btn-outline-success border-0 p-0 align-items-center " style={{fontSize:"25px", width:"40px", height:"40px"}}  onClick={()=>handleSave()} >+</div>
      </Nav.Item>

    </Nav>
    <Tab.Content >
      {arrPage?.map ((item, index) => (
          console.log("segesgse",item),
         <Tab.Pane active = {valueLinkPage == index} key={index} eventKey={index}>
              <div className="p-2 bg-primary text-white">
        <Row>
          <Col xs={6} md={6}>
            <input
              type="text"
              onChange={(e) => setNamePage(e.target.value)}
              placeholder="Tên trang"
              value={namePage}
              className="bg-primary border-0 p-2 text-white"
            ></input>
          </Col>
          <Col className=" d-flex justify-content-end align-items-center align-content-center align-self-end float-end me-auto">
            <Button
              variant="success"
              className=" d-flex justify-content-center align-items-center float-end "
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-floppy"
                viewBox="0 0 16 16"
              >
                <path d="M11 2H9v3h2z" />
                <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
              </svg>{" "}
              &nbsp; Lưu
            </Button>
          </Col>
        </Row>
      </div>
      <div className="shadow overflow-auto" style={{ height: "600px" }}>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />

        {/* <button onClick={handleSaveWord}>Save as Word</button> */}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có muốn lưu Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thông tin trang bạn tạo sẽ được lưu vào cơ sở dữ liệu bạn có thể xem
          thông tin tại : <strong>Trang đã tạo</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={() => updateNewPage()}>
            Lưu trang
          </Button>
        </Modal.Footer>
      </Modal>
         </Tab.Pane>
      
      ))}
        
     
                </Tab.Content>
           
        
    
      </Tab.Container>
    </div>
  );
};

export default WordPage;
