import { Col, Row } from "react-bootstrap";
import CogLoading from "./cogLoading";
import Pulse from "./pulse";
import SolarSytem from "./solarSystem";
import Carousel from "react-bootstrap/Carousel";

function BackgroundMain() {
  return (
    <>
      {/* <div className="position-relative" style={{ height: '100%', margin: 0, padding: 0 }}>
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
  </div> */}

      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: "url('/images/background_login.jpg')",
          backgroundSize: "cover", // Đảm bảo hình nền được căng đầy
          backgroundRepeat: "no-repeat", // Không lặp lại hình nền
          backgroundPosition: "center", // Căn giữa hình nền
        }}
      >
        <h1
          className="position-absolute text-center  z-1"
          style={{ top: "60px", background: 'linear-gradient(to right, #FEBAFE, #681CFE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
        >
          Chào mừng đến với chatbot OU
        </h1>
        <div>
          <Row className=" z-2">
            <Col
              xs={1}
              className="d-flex justify-content-center align-items-center "
              style={{
                marginRight: "4%",
              }}
            >
              <div className="position-relative ">
                <div className="position-absolute">
                  {" "}
                  <SolarSytem></SolarSytem>
                </div>
                <div className="position-absolute "></div>

                <CogLoading></CogLoading>
              </div>
            </Col>
            <Col
              xs={9}
              className="p-0 rounded m-0 text-center text-white d-flex justify-content-center align-items-center "
              style={{
                background: "linear-gradient(to right, #0079FF, #00bfff)"
              }}
            >
              <div className="container-fluid" style={{  minHeight: "400px"}}>
              <h2 className="mt-4 mb-4 font-monospace" style={{ color:'#FDBAFE'}}>Hệ thống CHATBOT hỗ trợ học vụ</h2>
               
                <div className="d-flex-column float-start">
                  <h4 className="text-start">1. Trả lời câu hỏi nhanh chóng</h4>
                  <h4 className="text-start">
                    2. Trả lời câu hỏi dựa theo ngữ cảnh câu hỏi trước
                  </h4>
                  <h4 className="text-start">
                    3. Dễ dàng xếp hạng và đánh giá câu trả lời
                  </h4>

                  <h4 className="text-start">
                    4. Cung cấp các thông tin đầy đủ từ sổ tay sinh viên
                  </h4>

                  <h4 className="text-start">
                    5. Tổng kết vào thống kê điểm tuyển sinh{" "}
                    <span className="text-primary"> &lt; Tiện ích &gt;</span>{" "}
                  </h4>
                  <h4 className="text-start">
                    6. Tính điểm xét tuyển của bạn{" "}
                    <span className="text-primary"> &lt; Tiện ích &gt;</span>
                  </h4>
                  <h4 className="text-start">
                    7. Danh sách khoa, clb, văn phòng ...
                    <span className="text-primary"> &lt; Tiện ích &gt;</span>
                  </h4>
                </div>
              </div>

              {/* <Carousel.Item interval={500}>
      séef
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
              {/* <Carousel.Item>
       sêfes
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
            </Col>
          </Row>
          <div
            className="text-white text-center position-absolute d-flex-column  justify-content-center start-0 end-0"
            style={{ bottom: "10px" }}
          >
            <h3>Hệ thống đang tải vui lòng chờ</h3>
            <br></br>
            <h3 className="d-flex justify-content-center z-0">
              <Pulse></Pulse>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default BackgroundMain;
