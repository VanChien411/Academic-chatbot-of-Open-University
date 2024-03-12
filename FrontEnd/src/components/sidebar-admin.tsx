import { useRouter } from 'next/navigation';
import { Button, Col, Row } from "react-bootstrap"

function SideBarAdmin(){
    const router = useRouter();
    // Lấy đường dẫn hiện tại từ useRouter


    return(
        <>
         
         <Button style={{height:'50px'}} className="w-100 text-start">
                <b>Trang chu</b>
                    </Button>
                    <Button variant="outline-primary" style={{height:'50px'}} className="w-100 text-start border-0">
                       b1 segsrg
                    </Button>
                    <Button variant="outline-primary" style={{height:'50px'}}  className="w-100 text-start border-0">
                        b1 segsrg
                    </Button>
             
                    
   
        </>
    )
}
export default SideBarAdmin