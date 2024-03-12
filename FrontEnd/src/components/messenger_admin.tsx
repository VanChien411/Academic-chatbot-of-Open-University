"use client";
import Table from "react-bootstrap/Table";
import * as api from "@/utils/api";
import { useEffect, useState } from "react";
import Iuser from "@/models/user";


function Messenger(props:any) {
  const [users, setUsers] = useState<Iuser[]>();
  const getAllUser = async () => {
     await api.getAllUser().then((data) => {
     
      setUsers(data);
    });
  };

  useEffect(()=>{
    console.log("sfse")
    getAllUser()
  },[])

  const handleListUser=(user:Iuser)=>{
    props.onSendData(user)
  }

  return (
    <>
      <Table striped hover>
        <thead className="bg-primary">
          <tr>
            <th className="bg-primary">#</th>
            <th className="bg-primary">Tên Đăng Nhập</th>
            <th className="bg-primary">Last Name</th>
            <th className="bg-primary">Username</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item: Iuser, index: number) => {
            return (
              <>
                <tr onClick={()=>handleListUser(item)}>
                  <td>{item.user_id}</td>
                  <td>{item.username}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </>
            );
          })}
         
        </tbody>
      </Table>
    </>
  );
}
export default Messenger;
