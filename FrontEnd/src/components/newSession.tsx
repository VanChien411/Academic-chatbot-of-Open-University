import { Button } from "react-bootstrap"
import * as model1 from "@/models/all";
import { Session } from "inspector";
interface NewSession {
    status: boolean;
    name: string;
    getSession: (session: model1.Session) => void;
    session: model1.Session;
}

function NewSession({ status, name, getSession, session }: NewSession) {
    return (
        <>
            <div onClick={() => getSession(session)} style={{ width: "100%" }} className={`${status ? "btn btn-primary" : "btn btn-outline-primary"} my-1`}>{name}</div>
        </>
    );
}

export default NewSession;
