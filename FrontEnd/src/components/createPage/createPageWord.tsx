import React, { useState } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import type { Editor as TypeEditor } from '@ckeditor/ckeditor5-core'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { saveAs } from "file-saver";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import dynamic from 'next/dynamic';

const WordPage: React.FC = () => {
  const wordInit = `<p><strong>Tiêu đề</strong></p><ol><li><p>Tiêu đề nhỏ</p><p>Nội dung .. <a href="vls.com">vls.com</a></p><p>Nội dung .. <a href="link.com">link.com</a></p></li><li><p>Tiêu đề nhỏ</p><p>Nội dung ..&nbsp;</p><p>Nội dung ..&nbsp;</p></li></ol><p><strong>Phần nội dung</strong></p><p>Nội dung 1…</p><p>Nội dung 2..</p><p><strong>Phần kết</strong></p><figure class="table"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>`;
  const [content, setContent] = useState<string>(wordInit);
  const [namePage, setNamePage] = useState<string>("Trang mẫu");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
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

  const handleSave = async () => {
    const data: model1.NewPage = {
      name: namePage,
      content: content,
    };
    console.log(data)
    await createNewPage(data);
    handleClose();
  }

  return (
    <div className="p-3 bg-white  " >
      <h4 className="p-3 bg-primary text-white">
        <Row>
          <Col xs={6} md={6} >
        <input type="text" onChange={(e) => setNamePage(e.target.value)} placeholder="Tên trang" value={namePage} className="bg-primary border-0 p-2 text-white"></input>
          </Col>
          <Col   className=" d-flex justify-content-end align-items-center align-content-center align-self-end float-end me-auto">
          <Button variant="success" className=" d-flex justify-content-center align-items-center float-end " onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
  <path d="M11 2H9v3h2z"/>
  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
</svg> &nbsp; Lưu 
      </Button></Col>
      
        </Row>

      </h4>
      <div className="shadow overflow-auto"  style={{ height: "560px" }}>
       
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
        <Modal.Body>Thông tin trang bạn tạo sẽ được lưu vào cơ sở dữ liệu bạn có thể xem thông tin tại : <strong>Trang đã tạo</strong></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={()=>handleSave()}>
            Lưu trang
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WordPage;

