// import Image from "next/image";
// import styles from "./page.module.css";
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
   <div>
    <Link href={"/chat-page"}>chuyen den chat bot</Link>
    <img width="50px" src={ "https://th.bing.com/th/id/OIP.Iy0tmJanZeN5ceMP5uToLQAAAA?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet"} ></img>
   </div>
  );
}
