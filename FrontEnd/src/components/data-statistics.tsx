"use client";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import ChartPie from "./chart-pie";
import ChartBar from "./chart-bar";
import ChartPolar from "./chart-polar";
import * as api from "@/utils/api";
import * as model1 from "@/models/all";

function DataStatistics(props: any) {
  const [allMessage, setAllMessage] = useState<model1.Message[]>();
  const [data1, setData1] = useState(Array.from({ length: 3 }, () => 0));
  const [data2, setData2] = useState(Array.from({ length: 5 }, () => 0));
  const [data3, setData3] = useState(Array.from({ length: 5 }, () => 0));

  const handleChartPie = (item: model1.Message, data: any, setData: any) => {
    const newData = [...data]; // Tạo bản sao của dữ liệu hiện tại
    if (item.star && item.star > 0) {
      if (item.star > 3) {
        newData[0] += 1;
      } else if (item.star < 3) {
        newData[1] += 1;
      } else {
        newData[2] += 1;
      }
    }
    setData(newData); // Cập nhật state với dữ liệu mới
  };

  const handleChartBar = (item: model1.Message, data: any, setData: any) => {
    const newData = [...data]; // Tạo bản sao của dữ liệu hiện tại
    if (item.star && item.comment) {
      newData[item.star - 1] += 1; // Làm phương thức này ngắn gọn hơn
    }
    setData(newData); // Cập nhật state với dữ liệu mới
  };

  const handleChartPolar = (item: model1.Message, data: any, setData: any) => {
    const newData = [...data]; // Tạo bản sao của dữ liệu hiện tại
    if (item.star) {
      newData[item.star - 1] += 1; // Làm phương thức này ngắn gọn hơn
    }
    setData(newData); // Cập nhật state với dữ liệu mới
  };
  useEffect(() => {
    console.log("Data updated:", data1, data2, data3);
  }, [data1, data2, data3]);

  useEffect(() => {
    console.log("ol");
    const getAllMessage = async () => {
      try {
        const allMessage: model1.Message[] = await api.getAllMessage();
        // console.log("allMessage", allMessage)
        const newData1 = [...data1];
        const newData2 = [...data2];
        const newData3 = [...data3];

        allMessage.forEach((item: model1.Message) => {
          // Xử lý thay đổi cho newData1
          if (item.star && item.star > 0) {
            if (item.star > 3) {
              newData1[0] += 1;
            } else if (item.star < 3) {
              newData1[1] += 1;
            } else {
              newData1[2] += 1;
            }
          }

          // Xử lý thay đổi cho newData2
          if (item.star && item.comment) {
            newData2[item.star - 1] += 1;
          }

          // Xử lý thay đổi cho newData3
          if (item.star) {
            newData3[item.star - 1] += 1;
          }
        });

        // Cập nhật state một lần duy nhất
        setData1(newData1);
        setData2(newData2);
        setData3(newData3);

        console.log(newData1);
        setAllMessage(allMessage);
      } catch (error) {}
    };
    getAllMessage();
  }, []);
  return (
    <>
      <style>
        {`
      
        `}
      </style>
      <div className="d-flex flex-nowrap">
        <div
          className="order-1  "
          style={{
            marginRight: "5px",
            marginLeft: "5px",
            width: "270px",
            height: "270px",
          }}
        >
          <div
            className=" rounded-4 p-2 center"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              width: "270px",
              height: "270px",
              backgroundColor: "rgb(255,239,204)",
              boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="row justify-content-center ">
              <div style={{ width: "80%", height: "80%" }} className="">
                <ChartPie data={data1}></ChartPie>
              </div>

              <div className="text-center mt-3">Độ hài lòng</div>
            </div>
          </div>
          <div
            className=" rounded-4 p-2"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              width: "270px",
              height: "270px",
              backgroundColor: "rgb(249,206,210)",
              boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="row justify-content-center ">
              <div style={{ width: "100%", height: "100%" }} className="">
                <ChartPolar data={data2}></ChartPolar>
              </div>

              {/* <div className="text-center mt-3" >Độ hài lòng</div> */}
            </div>
          </div>
        </div>
        <div
          className=" order-2  "
          style={{
            marginRight: "5px",
            marginLeft: "5px",
            width: "100%",
            height: "545px",
          }}
        >
          <div
            className=" rounded-4 p-2 5 shadow"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              width: "100%",
              height: "100%",
              backgroundColor: "#CFF2FB",

              boxShadow: " 2px 2px 4px rgb(159,229,248))",
            }}
          >
            <div className="row justify-content-center ">
              <div style={{ width: "80%", height: "80%" }} className="pt-2">
                <ChartBar data={data3}></ChartBar>
              </div>

              <div className="text-center mt-3">Thống kê đánh giá</div>
              <div
                style={{ width: "100%", height: "100%" }}
                className="bg-warning mt-3 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmark-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
                &nbsp; ----- &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bookmark-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div
                style={{
                  height: "100%",
                  paddingTop: "0",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                }}
              >
                <div
                  style={{ width: "100%", height: "100%",backgroundColor:"#cff2fb" }}
                  className="  container mt-3"
                >
                  Chú thích: <br></br>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                  </svg>
                  : Độ hài lòng do người dùng đánh giá xếp hạng từ 1 -&gt; 5 (
                  sao )<br></br>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                  </svg>
                  : Bình luận của người dùng
                  <></>
                  <br></br>
                  <small>
                  &nbsp;  &nbsp; Tốt : 4 -&gt; 5 ( sao )<br></br>
                  &nbsp;  &nbsp; Ổn : 3 ( sao )<br></br>
                  &nbsp;  &nbsp; Chưa tốt : 1 -&gt; 2 ( sao )
                  </small>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DataStatistics;
