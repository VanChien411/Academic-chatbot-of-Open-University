
// Interface cho bảng role
export interface Role {
    role_id?: number;
    role_name: string;
  }
  
  // Interface cho bảng session
  export interface Session {
    session_id?: number;
    name: string ;
    start_time: string;
    end_time?: string ;
    user_id: number;
  }
  
  // Interface cho bảng message
  export interface Message {
    qa_id?: number;
    session_id: number;
    question: string;
    answer: string;
    question_time?: string;
    answer_time?: string;
    comment?: string ;
    star?:number;
  }
  
  // Interface cho bảng information
  export interface Information {
    in_id?: number;
    name: string;
    link: string;
  }

  export interface ChatWithEmloyee{
    id?: number;
    messenger: string;
    emloyee:boolean;
    status:boolean;
    datetime:string;
    user_id: number;
  }

  declare module 'websocket';
