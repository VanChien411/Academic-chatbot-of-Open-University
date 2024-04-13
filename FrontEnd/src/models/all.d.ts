
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

  export interface DataScore{
    id_score? : number;
    id_career : string;
    score: number;
    name: string;
    id_faculty?: number;
    year: number; 
  }

  export interface Faculty{
    id_faculty?:number;
    name: string;
  }

  
  export interface SubjectCombination{
    id?:number;
    id_combination:string;
    name?:string;
  }

  export interface AdmissionSubject {
    id?: number;
    id_subject: string;
    name?: string;
  }

  export interface DataScoreVsSubjectCombination {
    id?: number;
    id_score: number;
    id_combination?: string;
    formula?: string;
  }

  export interface SubjectCombinationVsAdmissionSubject {
    id?: number;
    id_combination: string;
    id_subject: string;
  }
  
  
  declare module 'websocket';
