import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import randomColor from 'randomcolor';


function ChartGPA(props:any) {

  const [usedColors, setUsedColors] = useState<string[]>([]);

  const generateRandomColor = () => {
    let newColor;
    do {
      newColor = randomColor(); // Tạo một màu sắc ngẫu nhiên
    } while (usedColors.includes(newColor)); // Kiểm tra xem màu đã được sử dụng chưa

    // Cập nhật mảng màu đã sử dụng
    setUsedColors([...usedColors, newColor]);

    return newColor;
  };

  useEffect(() => {
    const {data, labels} = props

      const ctx: any = document.getElementById("chartGPA");
      const existingChart = Chart.getChart(ctx); // Kiểm tra xem có biểu đồ nào đang được vẽ trên canvas không
  
      if (existingChart) {
        existingChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
      }
  
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels   ,
          datasets: [
            {
              label: "Điểm trung bình mỗi năm",
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              // hoverOffset: 4,
            },
          ],
        },
        options: {
         
          plugins: {
           
            legend: {
              display: true,
              position: 'bottom' // Đặt chú thích về bên trái
              
            }
          }
        }  
      });
    }, [ props.data]);
  return (
    <>
      <canvas  className="" id="chartGPA"></canvas>
    </>
  );
}

export default ChartGPA;
