
"use client";
import React, { createContext,useContext, useEffect, useState } from "react";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import {SessionContext} from "@/hook/sessionContext";
// export const UserContext = createContext<any>('sesefesfe');


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [saveOldSessions, setSaveOldSessions] = useState<model1.Session[]>([]);
    const oldSessions = (value: model1.Session[]) => {
        if (value && value.length > 0){
            setSaveOldSessions(value);
            console.log("saveOldSessions",saveOldSessions);
        }
     
    };
  
    return (
      <SessionContext.Provider value={{ saveOldSessions , oldSessions }}>
        <html lang="en" style={{ height: '100%' }}>
          <body style={{ height: '100%' }}>
            {/* <div className="w-100">{saveOldSessions[0]?.name}</div> */}
            {children}
          </body>
        </html>
      </SessionContext.Provider>
    );
  }

