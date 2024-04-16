"use client";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Iuser from "@/models/user";
import Pagination from 'react-bootstrap/Pagination';
import * as api from "@/utils/api";
function Messenger(props: any) {
  const [users, setUsers] = useState<Iuser[]>([]);
  const [paginate, setPaginate] = useState<Iuser[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(9);

  const getAllUser = async () => {
    await api.getAllUser().then((data) => {
      setUsers(data);
    });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const handleListUser = (user: Iuser) => {
    props.onSendData(user);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const renderUsers = () =>
    currentUsers.map((user: Iuser, index: number) => (
      <tr key={user.user_id} onClick={() => handleListUser(user)}>
        <td>{user.user_id}</td>
        <td>{user.username}</td>
        <td >
          <div className="btn btn-success d-flex position-relative " style={{ width: "45px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
           
            </svg>
            <span className="d-flex position-absolute rounded-5  text-bg-danger" style={{top:'-10px', right:'-10px', paddingLeft:'5px', paddingRight:'5px'}}><small>2</small></span>
          </div>
        </td>
        <td>@mdo</td>
      </tr>
    ));

  return (
    <>
      <h3 className="position-absolute top-0 " style={{ margin: "20px 0" }}>
        Danh sách các user
      </h3>
    <br></br>
      <Table hover className="rounded-2 shadow-sm  bg-light" style={{ borderRadius: "200px" }}>
        <thead className="bg-primary " style={{ position: "sticky", top: "0" }}>
          <tr>
            <th className="bg-primary text-white">#</th>
            <th className="bg-primary text-white">Tên Đăng Nhập</th>
            <th className="bg-primary text-white">Chat</th>
            <th className="bg-primary text-white">Username</th>
          </tr>
        </thead>
        <tbody className="opacity-75">
          {renderUsers()}
        </tbody>
        <tfoot className="position-absolute bottom-0 p-3 end-0">
      
      {users && ( // kiểm tra users có nhiều hơn 10 không, nếu có thì tạo phân trang
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}></Pagination.Prev>
            {Array.from({length: Math.ceil(users.length/usersPerPage)}, (_, index) => (
              <Pagination.Item
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
                key={index + 1}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(users.length/usersPerPage)))} disabled={currentPage === Math.ceil(users.length/usersPerPage)}/>
          </Pagination>
        
        </div>
      )}
    </tfoot> 
      </Table>
    </>
  );
}

export default Messenger;

