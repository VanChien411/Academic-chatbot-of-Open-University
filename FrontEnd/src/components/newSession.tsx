import { Button } from "react-bootstrap"
interface newSession{
    status:boolean
    name:string
}
function NewSession ({status,name}:newSession){
    return (
        <>
            <Button style={{width:"100%"}} className={'${status?"":"bg-danger"} my-1'}>{name}</Button>

        </>
    )

}
export default NewSession