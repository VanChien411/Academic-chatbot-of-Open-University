import { Nav, Tab } from "react-bootstrap";
import React, { useMemo } from 'react';
import { useRouter } from "next/navigation";
const SidebarInformation = React.memo(React.forwardRef(function SidebarInformation(props: any, ref: React.Ref<any>) {
  const memoizedProps = useMemo(() => props, [props]);
  const { isSidebarInSmall, handleSideBar, eventKey } = props;
  const router = useRouter();
  const handleClickRoute = (e: any) => {
    const eventKeyValue = e.currentTarget.getAttribute("data-rr-ui-event-key"); // hoặc e.currentTarget.getAttribute('data-rr-ui-event-key')
    // console.log(eventKeyValue);
    router.push(`/${eventKeyValue}`);
  };
  // console.log("key", eventKey);
  return (
    <div
      style={{ width: "300px", zIndex: "1" }}
      className={`bg-light p-0 ${
        isSidebarInSmall ? "position-absolute" : ""
      }  float-start `}
    >
      <div
        className="d-flex justify-content-center align-items-center  position-relative"
        style={{
          height: "70px",
          fontSize: "30px",
          backgroundColor: " #1A2342",
        }}
      >
        {/* <img width="50px" height="50px" src="/images/lo-go.png"></img> */}
        <div className="text-white" onClick={() => router.push("/chat-page")}>
          {" "}
          Trang chủ
          
        </div>
        {isSidebarInSmall && (
          <div
            className="position-absolute btn btn-outline-primary p-0"
            onClick={() => handleSideBar()}
            style={{ right: "-40px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        )}
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey={eventKey}>
        <Nav
          defaultActiveKey="trade-program"
          variant="pills"
          style={{
            backgroundColor: "#101A33",
            height: "90vh",
            flexWrap: "nowrap",
            overflowY: "auto",
          }}
          className="flex-column d-inline-flex w-100 p-0 "
        >
             
             <hr className="p-0"></hr>
          <div
            className="text-white"
            style={{ marginLeft: "10px", color: "blue" }}
          >
            <strong>Tiện ích</strong>
          </div>
          {/* <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
          <Nav.Link eventKey="list-user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
            &nbsp; Danh sách người dùng
          </Nav.Link>
        </Nav.Item> */}
          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="data-statistics"
              onClick={(e) => handleClickRoute(e)}
              className="m-0 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bar-chart-line"
                viewBox="0 0 16 16"
              >
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
              </svg>
              &nbsp; <strong>Điểm tuyển sinh</strong>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="trade-program"
              onClick={(e) => handleClickRoute(e)}
              className="m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
              &nbsp; <strong>Chương trình đào tạo</strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="club"
              onClick={(e) => handleClickRoute(e)}
              className="m-0 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-suit-club" viewBox="0 0 16 16">
  <path d="M8 1a3.25 3.25 0 0 0-3.25 3.25c0 .186 0 .29.016.41.014.12.045.27.12.527l.19.665-.692-.028a3.25 3.25 0 1 0 2.357 5.334.5.5 0 0 1 .844.518l-.003.005-.006.015-.024.055a22 22 0 0 1-.438.92 22 22 0 0 1-1.266 2.197c-.013.018-.02.05.001.09q.016.029.03.036A.04.04 0 0 0 5.9 15h4.2q.014 0 .022-.006a.1.1 0 0 0 .029-.035c.02-.04.014-.073.001-.091a23 23 0 0 1-1.704-3.117l-.024-.054-.006-.015-.002-.004a.5.5 0 0 1 .838-.524c.601.7 1.516 1.168 2.496 1.168a3.25 3.25 0 1 0-.139-6.498l-.699.03.199-.671c.14-.47.14-.745.139-.927V4.25A3.25 3.25 0 0 0 8 1m2.207 12.024c.225.405.487.848.78 1.294C11.437 15 10.975 16 10.1 16H5.9c-.876 0-1.338-1-.887-1.683.291-.442.552-.88.776-1.283a4.25 4.25 0 1 1-2.007-8.187l-.009-.064c-.023-.187-.023-.348-.023-.52V4.25a4.25 4.25 0 0 1 8.5 0c0 .14 0 .333-.04.596a4.25 4.25 0 0 1-.46 8.476 4.2 4.2 0 0 1-1.543-.298"/>
</svg>
              &nbsp; <strong>Câu lạc bộ</strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="khoa"
              onClick={(e) => handleClickRoute(e)}
              className="m-0 "
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backpack2" viewBox="0 0 16 16">
  <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14"/>
  <path fill-rule="evenodd" d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
  <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v1.191l1.17.585a1.5 1.5 0 0 1 .83 1.342V13.5a1.5 1.5 0 0 1-1.5 1.5h-1c-.456.607-1.182 1-2 1h-7a2.5 2.5 0 0 1-2-1h-1A1.5 1.5 0 0 1 0 13.5v-2.382a1.5 1.5 0 0 1 .83-1.342L2 9.191V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0M3 13.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8A5 5 0 0 0 3 8zm-1-3.19-.724.362a.5.5 0 0 0-.276.447V13.5a.5.5 0 0 0 .5.5H2zm12 0V14h.5a.5.5 0 0 0 .5-.5v-2.382a.5.5 0 0 0-.276-.447L14 10.309Z"/>
</svg>
              &nbsp; <strong>Khoa</strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="room"
              onClick={(e) => handleClickRoute(e)}
              className="m-0 "
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cast" viewBox="0 0 16 16">
  <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0"/>
  <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z"/>
</svg>
              &nbsp; <strong>Các phòng và đoàn đội</strong>
            </Nav.Link>
          </Nav.Item>
          <hr className="text-white"></hr>
          <div
            className="text-white"
            style={{ marginLeft: "10px", color: "blue" }}
          >
            <strong>Hỏi đáp và báo lỗi</strong>
          </div>
          {/* <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
          <Nav.Link eventKey="add-subject">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-database-add"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0" />
              <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
            </svg>
            &nbsp; Thêm môn và tổ hợp
          </Nav.Link>
        </Nav.Item> */}

          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="bug-information"
              onClick={(e) => handleClickRoute(e)}
              className="  m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-question-diamond"
                viewBox="0 0 16 16"
              >
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
              </svg>
              &nbsp; <strong> Các câu hỏi </strong>
            </Nav.Link>
          </Nav.Item>

          <hr className="text-white"></hr>
          <div
            className="text-white"
            style={{ marginLeft: "10px", color: "blue" }}
          >
            <strong>Thêm dữ liệu</strong>
          </div>
          {/* <Nav.Item className=" py-1 btn btn-outline-primary border-0 text-start p-0">
          <Nav.Link eventKey="add-subject">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-database-add"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0" />
              <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
            </svg>
            &nbsp; Thêm môn và tổ hợp
          </Nav.Link>
        </Nav.Item> */}

          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="create-page"
              onClick={(e) => handleClickRoute(e)}
              className="  m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark"
                viewBox="0 0 16 16"
              >
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
              </svg>{" "}
              &nbsp; <strong> Tạo trang </strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" py-1 btn btn-outline-dark border-0 text-start p-0 m-0">
            <Nav.Link
              eventKey="last-create-page"
              onClick={(e) => handleClickRoute(e)}
              className="  m-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-break"
                viewBox="0 0 16 16"
              >
                <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z" />
              </svg>{" "}
              &nbsp; <strong> Trang đã tạo </strong>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </div>
  );
}))
export default SidebarInformation;
