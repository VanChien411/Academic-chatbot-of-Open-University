import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import type { Editor as TypeEditor } from "@ckeditor/ckeditor5-core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useRouter } from "next/navigation";
import * as api from "@/utils/api";
import * as model1 from "@/models/all";
import useSWR, { mutate } from "swr";
import Spinner from "react-bootstrap/Spinner";

function ModelQuestionBug(props: any) {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState<string>("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isPostData, setPostData] = useState<boolean>(false);
  const router = useRouter();
  const { name, user_id, save } = props;

  const handleSave = async () => {
    setPostData(true);
    if (title.trim() !== "" && content.trim() !== "") {
      // Thực hiện hành động lưu ở đây
      const data: model1.BugQuestion = {
        title: title,
        content: content,
        user_id: user_id,
      };
      await api.createBugQuestion(data);
      handleClose();
      if (save) save();
      router.push("/bug-infomation");
    } else {
      setError("Vui lòng nhập đầy đủ thông tin");
    }
    setPostData(false);
  };

  return (
    <>
      <div className="btn btn-outline-primary" onClick={handleShow}>
        {name ? name : "Launch demo modal"}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mô tả lỗi gặp phải</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>Tên lỗi</div>
            <textarea
              className="mt-2 form-control"
              rows={1}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              defaultValue={""}
            />
          </div>
          <div>
            <div className="mt-3">Mô tả lỗi</div>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </div>
          <small className="text-danger">{error}</small>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          {isPostData ? (
            <Button variant="primary" onClick={() => handleSave()}>
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Button>
          ) : (
            <Button variant="primary" onClick={() => handleSave()}>
              Lưu
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelQuestionBug;
