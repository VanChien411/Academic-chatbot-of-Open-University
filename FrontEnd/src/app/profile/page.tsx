"use client";
import { Col, Row } from "react-bootstrap";
import Head from "./head";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import * as api from "@/utils/api"
import { useRouter } from "next/navigation";
import IUser from "@/models/user";
import { setFips } from "crypto";
import { Ultra } from "next/font/google";
import CustomAlert from "@/components/alert";
const Profile = () => {
    const [isEdit, setIsEdit] = useState<boolean>(true);
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [user, setUser] = useState<IUser>();
    const [uName, setUName] = useState('');
    const [uFirst, setUFirst] = useState('');
    const [uLast, setULast] = useState('');
    const [uEmail, setUEmail] = useState('');
    const [showAlert, setShowAlert] = useState(true);
    const [dataAlert, setDataAlert] = useState<string>("");

    const router = useRouter()

    useEffect(()=>{
      get_user_info()
    },[])

    const handleCloseAlert = () => {
      setShowAlert(false);
    };
  
    const initValueProfile = (user:IUser)=>{
      setUName(user.username);
      setUFirst(user.full_name || '');
      setULast(user.full_name || '');
      setUEmail(user.email || '');
    }
    
  

    const get_user_info = async () => {
      try {
        const user = await api.get_user_info2(); // Chờ Promise được giải quyết
        console.log(user); // In ra để kiểm tra dữ liệu user
        // Tiếp tục xử lý dữ liệu user sau khi Promise đã được giải quyết
        if(!user){
          router.push('/login')
        }else
        {
          setUser(user)
          initValueProfile(user)
        }
      } catch (error) {
        console.log('Error:', error);
        // Xử lý lỗi nếu cần
      }
    }

    const setUserNew = () =>{
      if(user)
        {
          let newUser = user;
          newUser.username = uName;
          newUser.full_name = uFirst;
          newUser.email = uEmail;
          return newUser
        }
       


    }

    const updateUser = async () => {
      try {
        if(user)
          {
            const userNew = setUserNew()
        console.log('user', userNew);
         await api.updateUser(userNew as IUser); // Chờ Promise được giải quyết
          // Tiếp tục xử lý dữ liệu user sau khi Promise đã được giải quyết
       
          }
     
      } catch (error) {
        console.log('Error:', error);
        // Xử lý lỗi nếu cần
        setDataAlert('Lưu thất bại');
       setShowAlert(true)
      }
      setDataAlert('Lưu thành công');
      setShowAlert(true)
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log(file)
      if (!file) return;
  
      const reader = new FileReader();
      reader.onloadend = () => {
        // Do something with the uploaded image, like save it or display it
        setImage(reader.result);
        console.log(reader.result)
      };
  
      reader.readAsDataURL(file);
    };
  return (
    <>
      <div className=" h-100" style={{ backgroundColor: "rgb(242,246,252)" }}>
        <Head></Head>
        <div className="w-100 p-3 bg-light shadow">Thông tin tài khoản</div>
        <div className="container">
          <div className="p-3 border">Thông tin</div>
          <Row>
            <Col  md={5}   className="">
              <div className="p-3 " style={{ height: "350px" }}>
                <Card className="shadow h-100">
                  <Card.Header className="text-primary">
                    <strong>Ảnh đại diện</strong>
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center align-items-center flex-column ">
                    <img
                      className="rounded-5"
                      src="/images/dragon.jpg"
                      height="130px"
                      width="130px"
                    ></img>

                    <div
                      style={{ fontSize: "10px" }}
                      className="opacity-50 m-2"
                    >
                      {" "}
                      JPG hoặc PNG không lớn hơn 5M
                    </div>
                    <div className="btn btn-primary mt-3">
                    <input type="file"  accept="images/*" onChange={handleImageUpload} />Tải ảnh mới</div>
                    {image && <img src={image as string} alt="Uploaded Image" />}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col  md={7}  className="">
              <div className="p-3 ">
                {" "}
                <Card className="shadow">
                  <Card.Header className="text-primary">
                    <strong>Thông tin tài khoản</strong>
                  </Card.Header>
                  <Card.Body className=" opacity-75">
                    <small className="m-1">Tên tài khoản</small>
                    <br></br>
                    <input disabled = {isEdit}
                      className="rounded-2 p-2 m-1 border-1 w-100"
                      placeholder="Tên người dùng" value={uName} onChange={(e)=>setUName(e.target.value)}
                    ></input>
                    <Row>
                      <Col sx={5}>
                        <small className="m-1">Tên</small>
                        <br></br>
                        <input disabled = {isEdit}
                          className="rounded-2 p-2 m-1 border-1 w-100"
                          placeholder="Tên người dùng" value={uFirst}  onChange={(e)=>setUFirst(e.target.value)}
                        ></input>
                      </Col>
                      <Col sx={5}>
                        <small className="m-1">Họ</small>
                        <br></br>
                        <input disabled = {isEdit}
                          className="rounded-2 p-2 m-1 border-1 w-100"
                          placeholder="Tên người dùng" value={uLast}  onChange={(e)=>setULast(e.target.value)}
                        ></input>
                      </Col>
                    </Row>
                    <Row>
                      <Col sx={5}>
                        <small className="m-1">Thời gian bắt đầu</small>
                        <br></br>
                        <input disabled = {isEdit}
                          className="rounded-2 p-2 m-1 border-1 w-100"
                          placeholder="Tên người dùng"
                        ></input>
                      </Col>
                      <Col sx={5}>
                        <small className="m-1">Thời gian thay đổi</small>
                        <br></br>
                        <input disabled = {isEdit}
                          className="rounded-2 p-2 m-1 border-1 w-100"
                          placeholder="Tên người dùng"
                        ></input>
                      </Col>
                    </Row>
                    <small className="m-1">Email</small>
                    <br></br>
                    <input disabled = {isEdit}
                      className="rounded-2 p-2 m-1 border-1 w-100"
                      placeholder="Tên người dùng" value={uEmail}  onChange={(e)=>setUEmail(e.target.value)}
                    ></input>

                    <Row>
                      <Col sx={5}>
                        <small className="m-1">Tên người dùng</small>
                        <br></br>
                        <input disabled = {isEdit}
                          className="rounded-2 p-2 m-1 border-1 w-100"
                          placeholder="Tên người dùng"
                        ></input>
                      </Col>
                      <Col sx={5}>
                        <small className="m-1">Tên người dùng</small>
                        <br></br>
                        <input disabled = {isEdit}
                          className="rounded-2 p-2 m-1 border-1 w-100"
                          placeholder="Tên người dùng"
                        ></input>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center">
                    {isEdit?(
                    <div className="btn btn-outline-danger px-5 " style={{marginLeft:'20px',marginRight:'20px'}} onClick={()=>setIsEdit(false)}>Sửa</div>

                    ):(
                        <div className="btn btn-outline-danger px-5 " style={{marginLeft:'20px',marginRight:'20px'}} onClick={()=>{setIsEdit(true);user? initValueProfile(user):''} }>Hủy</div>

                    )}
                    <div className="btn btn-primary px-5" style={{marginLeft:'20px',marginRight:'20px'}} onClick={()=>updateUser()}>Lưu</div>

                </Card.Footer>
                </Card>
                
              </div>
            </Col>
          </Row>

        </div>
        <CustomAlert
          show={showAlert}
          onClose={handleCloseAlert}
          data={dataAlert}
        />
      </div>
    </>
  );
};
export default Profile;
