'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as api from "@/utils/api";
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from "react";
import * as model1 from "@/models/all";
import IUser from "@/models/user";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ChatBot OU",
//   description: "Hệ thống trả lời học vụ",
// };

export const UserContext  = createContext<IUser|undefined>(undefined);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [user, setUser] = useState<IUser|undefined>();
  useEffect(() => {
    get_user_info();
  },[])
  const get_user_info = async () => {
    try {
      const session:model1.Session[] = await api.get_idSession_by_user(); // Chờ Promise được giải quyết
      // console.log(user); // In ra để kiểm tra dữ liệu user
      // Tiếp tục xử lý dữ liệu user sau khi Promise đã được giải quyết
      const user = await api.get_user_info2();
      setUser(user)
      if (session.length == 0) {
       
          const newDate = getDate();
          const session: model1.Session = {
            name: `session ${newDate}`,
            start_time: newDate,
            end_time: newDate,
            user_id: user["user_id"] as number,
          };
          const session_id = await api.createSession(session);
          session_id ? router.push(`/chat-page/${session_id}`) : "";
        
    
      } else {
       
        router.push(`/chat-page/${ session[0].session_id}`);
        
      }
    } catch (error:any) {
      if (error.message === "Failed login") {
        console.log("Failed login : ",error.message) ;
        // Kiểm tra xem đối tượng error có tồn tại và có thuộc tính 'response' không
        router.push("/login"); // Điều hướng đến trang đăng nhập
      } else {
        console.error("Error fetching user session:", error);
        router.push("/login"); // Điều hướng đến trang đăng nhập

        // Xử lý lỗi khác nếu cần
      }
    }
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Định dạng thời gian cho MySQL
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // console.log(formattedDate); // In ra: "2024-03-02 22:12:39"

    return formattedDate;
  };
  return (
    <html lang="en"  style={{ height:'100%'}}>
      <body style={{height:'100%'}} className={inter.className}>
       
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
        
       
      </body>
    </html>
  );
}
