
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatProvider } from "@/components/useContext/useContextChat";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  
  return (
    <html lang="en" style={{ height: "100%", width: "100%" }}>
      <body style={{ height: "100%" }} className={inter.className}>
       
       <ChatProvider>
        {children}
        </ChatProvider>
       
      </body>
    </html>
  );
}
