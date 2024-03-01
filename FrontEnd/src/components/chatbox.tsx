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
      
            <Row className="my-2">
            {/* img */}
            <div style={{width:"70px"}}>
            
            <img width="50px" height="50px" src={prop.owner.img ? prop.owner.img : "https://th.bing.com/th/id/OIP.MxwWv4AAMqOlkqjNzjPk3QHaEo?w=301&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"} ></img>

            </div>
            <Col className="bg-body-secondary ">
            <div style={{fontSize:"20px",}} className="d-flex bg-danger ">
              <b> {prop.owner.username}</b> 
            </div>
            <div style={{fontSize:"18px",}} className="d-flex">
                {prop.messenger}
            </div>
            </Col>

            </Row>
     
        </>
    )

}
export default Chatbox