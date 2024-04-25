import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Tab } from "react-bootstrap";



// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thông báo lỗi",
  description: "Trang Báo Lỗi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
  <body style={{ height: '100%', margin: 0, padding: 0 }}>
        
      {children}
   
  </body>
</html>
  );
}
