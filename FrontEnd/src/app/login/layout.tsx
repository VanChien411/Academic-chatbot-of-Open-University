import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';


// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
  <body style={{ height: '100%', margin: 0, padding: 0 }}>
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: "url('https://th.bing.com/th/id/R.09d23d8b030005bd6170ec188e81a5fe?rik=ySUwxB89zXwDnw&pid=ImgRaw&r=0')",
        backgroundSize: 'cover', // Đảm bảo hình nền được căng đầy
        backgroundRepeat: 'no-repeat', // Không lặp lại hình nền
        backgroundPosition: 'center' // Căn giữa hình nền
      }}
    >
      {children}
    </div>
  </body>
</html>
  );
}
