// import Image from "next/image";
// import styles from "./page.module.css";
"use client"
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import * as api from "@/utils/api";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    const user = api.getDataFromLocal("user");
        !user ? router.push("/login") : "";
  })
  return (
   <div>
    <Link href={"/chat-page"}>chuyen den chat bot</Link>
    <img width="50px" src={ "https://th.bing.com/th/id/OIP.Iy0tmJanZeN5ceMP5uToLQAAAA?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet"} ></img>
   </div>
  );
}
