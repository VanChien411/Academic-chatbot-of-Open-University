
'use client'
import React, { createContext,useContext, useEffect, useState } from "react";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import { useRouter } from 'next/navigation';
import IUser from "@/models/user";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { UserContext } from "@/components/useContext/useContextUser";

// export const UserContext = createContext<any>('sesefesfe');
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/reducer/userSlice';
import { UserProvider } from "@/components/useContext/useContextUser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ height: '100%' }}>
    <UserProvider>
        {children }
        </UserProvider>
      </body>
    </html>
  );
}


