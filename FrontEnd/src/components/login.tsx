'use client'
import IUser from "@/models/user"
import { Button } from "react-bootstrap"
import {Image} from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"

interface loginProp{
    user:IUser
}
function Login({user}:loginProp){
    return(
        <>
        <Button style={{width:'100%'}}>
            <Row >
            <div style={{textAlign:'start', marginLeft:'10px', width:"50px" ,height:"50px"}} >
            <img  width="50px" height="50px" src={user.img ? user.img : "https://th.bing.com/th/id/OIP.MxwWv4AAMqOlkqjNzjPk3QHaEo?w=301&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"} ></img>
            </div>
           <Col style={{width:'100%',display: "flex", justifyContent:"center",  alignItems:"center" }} className="">
            <span style={{}} className="align-middle"> {user.username}</span>
          
           
           </Col>
           
            </Row>
           
        </Button>
        </>
    )
}
export default Login
