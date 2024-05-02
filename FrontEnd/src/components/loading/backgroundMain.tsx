import { Col, Row } from "react-bootstrap"
import CogLoading from "./cogLoading"
import Pulse from "./pulse"
import SolarSytem from "./solarSystem"

function BackgroundMain() {

    return (
        <>
        <div className="position-relative" style={{ height: '100%', margin: 0, padding: 0 }}>
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: "url('/images/background_login.jpg')",
        backgroundSize: 'cover', // Đảm bảo hình nền được căng đầy
        backgroundRepeat: 'no-repeat', // Không lặp lại hình nền
        backgroundPosition: 'center' // Căn giữa hình nền
      }}
    >
        <h1 className="text-center text-white position-absolute  start-0 end-0" style={{top:'20px', }}>Chào mừng đến với chatbot OU</h1>
        <div  className="d-flex justify-content-center align-items-center position-absolute">

            <CogLoading></CogLoading>
          
        
        </div>
        <div className="position-absolute">
              <SolarSytem></SolarSytem>
        </div>
        <Row className="position-absoluter " style={{top:'100px'}}>
            <Col className="p-0 m-0">
      <img className="p-2" src="/images/main.png" width='450px'></img>

            </Col>
         
        <Col className="p-0 m-0">
      <img className ="p-2" src="/images/tienich.png" width='450px'></img>

        </Col>
        </Row>
        <div className="d-flex justify-content-center">
            <Pulse></Pulse>
        </div>
   
    </div>
  </div>
       
        </>
    )

}
export default BackgroundMain