"use client";
import Table from "react-bootstrap/Table";
import * as api from "@/utils/api";
import { useEffect, useState } from "react";
import Iuser from "@/models/user";

function Messenger(props: any) {
  const [users, setUsers] = useState<Iuser[]>();
  const getAllUser = async () => {
    await api.getAllUser().then((data) => {
      setUsers(data);
    });
  };

  useEffect(() => {
    console.log("sfse");
    getAllUser();
  }, []);

  const handleListUser = (user: Iuser) => {
    props.onSendData(user);
  };

  return (
    <>
    
    <h3 className="position-absolute top-0 " style={{margin:'20px 0'}}>Danh sách các user</h3>
   <br></br>
      <Table  hover className="rounded-2  bg-light" style={{borderRadius:'200px'}} >
        <thead className="bg-primary " style={{   position:'sticky',
  top:' 0'}}>
          <tr >
            <th className="bg-primary text-white">#</th>
            <th className="bg-primary text-white">Tên Đăng Nhập</th>
            <th className="bg-primary text-white">Chat</th>
            <th className="bg-primary text-white">Username</th>
          </tr>
        </thead>
        <tbody className="opacity-75">
          {users?.map((item: Iuser, index: number) => {
            return (
              
                <tr key={item.user_id} onClick={() => handleListUser(item)}>
                  <td>{item.user_id}</td>
                  <td>{item.username}</td>
                  <td>
                    <div className="btn btn-success">
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
                    </div>
                  </td>
                  <td>@mdo</td>
                </tr>
             
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default Messenger;
