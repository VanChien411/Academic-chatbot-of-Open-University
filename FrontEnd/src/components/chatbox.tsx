'use client'
import IUser from "@/models/user"
import { Row } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import {Image} from "react-bootstrap"
interface messenger{
    owner: IUser
    messenger:String
}

function Chatbox(prop: messenger){
    return(
        <>
      
            <Row>
            {/* img */}
            <div style={{width:"30px"}}>
            <Image src= {prop.owner.img?prop.owner.img:"#"}> </Image>
            </div>
            <Col>
            <header className="font-weight-bold">
                {prop.owner.username}
            </header>
            <body>
                {prop.messenger}
            </body>
            </Col>

            </Row>
     
        </>
    )

}
export default Chatbox