'use client'
import IUser from "@/models/user"
import { Row } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import {Image} from "react-bootstrap"
interface messenger{
    owner: IUser
    messenger:string
}

function Chatbox(prop: messenger){
    return(
        <>
      
            <Row>
            {/* img */}
            <div style={{width:"30px"}}>
            <Image src={prop.owner.img || "https://th.bing.com/th/id/OIP.MxwWv4AAMqOlkqjNzjPk3QHaEo?w=301&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"} />

            </div>
            <Col className="bg-body-secondary">
            <div  className="font-weight-bold">
                {prop.owner.username}
            </div>
            <div>
                {prop.messenger}
            </div>
            </Col>

            </Row>
     
        </>
    )

}
export default Chatbox