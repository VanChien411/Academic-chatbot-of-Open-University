import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import randomColor from 'randomcolor';

interface scoreForYear {
  id_career: string;
  name: string;
  score: number[];
}
interface ChartData {
  data: scoreForYear[]; // Kiểu dữ liệu của dữ liệu
  labels: string[]; // Kiểu dữ liệu của nhãn
}
function ChartScore(props: ChartData) {

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
    const { data, labels } = props;
    
    const ctx: any = document.getElementById("chartBar");
    const existingChart = Chart.getChart(ctx); // Kiểm tra xem có biểu đồ nào đang được vẽ trên canvas không

    if (existingChart) {
      existingChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
    }

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: data.map(item => {
          return {
              label: item.name,
              data: item.score, // Đây là dữ liệu mẫu, bạn cần thay thế bằng dữ liệu thực từ item
              fill: false,
              borderColor: generateRandomColor(),
              borderWidth: 4, // Độ dày của đường
              tension: 0.5, // Tăng độ dày của đường để biểu diễn dữ liệu chi tiết hơn
          };
      })
      },
      options: {
        scales: {
            y: {
                suggestedMin: 0, // Giá trị tối thiểu của trục y
                suggestedMax: 35, // Giá trị tối đa của trục y
                // Các tùy chọn khác của trục y, ví dụ: định dạng, v.v.
                ticks: {
                  // forces step size to be 50 units
                  stepSize: 0.1
                }
            }
        },
        plugins: {
         
          legend: {
            display: true,
            position: 'right' // Đặt chú thích về bên trái
            
          }
        }
        
    },
   
    });
  }, [props.data]);
  return (
    <>
      <canvas style={{ display: "block"  }} className="" id="chartBar"></canvas>
    </>
  );
}

export default ChartScore;
