import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import type { Editor as TypeEditor } from "@ckeditor/ckeditor5-core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import Spinner from "react-bootstrap/Spinner";
function Comment(props: any) {
  const [content, setContent] = useState<string>("");
  const { comment, refAllBugComment, newUser_id } = props;
  const [isComment, setComment] = useState<boolean>(false);
  const [isPostData, setPostData] = useState<boolean>(false);
  console.log("comment", comment);
  const handleCreateComment = async () => {
    setPostData(true);
    if (content !== "" && comment) {
      console.log(newUser_id);
      const newComment = {
        ...comment,
        user_id: newUser_id,
        user_id_last_comment: comment.user_id,
        content: content,
      };
      try {
        const tamp = await api.createBugComment(newComment);
        // setContent('');
        setComment(false);
        if (refAllBugComment) refAllBugComment();
      } catch (error) {
        console.error(error);
      }
    }
    setPostData(false);
  };

  return (
    <>
      {comment.content && (
        <div className="p-3 rounded" style={{ backgroundColor: "#F6F6F6" }}>
          <div className="">
            <b>{comment?.user_name}</b>
          </div>
          <div className="d-flex">
            <span className="text-primary">
              {comment?.user_name_last_comment} &nbsp;
            </span>
            <span dangerouslySetInnerHTML={{ __html: comment?.content }}></span>
          </div>
          <div className="text-muted d-flex justify-content-end">
            {comment?.create_time}
          </div>
        </div>
      )}

      <div className="d-flex justify-content-end   ">
        <b
          className="btn btn-outline-secondary  border-0"
          onClick={() => setComment(!isComment)}
        >
          <b>Phản hồi</b>
        </b>
      </div>
      {isComment && (
        <div>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              setContent(data);
            }}
          />
          <div className="d-flex justify-content-end  ">
            {isPostData ? (
              <div className="btn btn-outline-primary " >
                <Spinner animation="border" role="status" size="sm">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <div
                className="btn btn-outline-primary "
                onClick={handleCreateComment}
              >
                Gửi
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Comment;
