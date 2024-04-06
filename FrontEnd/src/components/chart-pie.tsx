import Chart from "chart.js/auto";
import { useEffect } from "react";


function ChartPie(){
    useEffect(() => {
        const ctx: any = document.getElementById("charPie");
        const existingChart = Chart.getChart(ctx); // Kiểm tra xem có biểu đồ nào đang được vẽ trên canvas không
    
        if (existingChart) {
          existingChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
        }
    
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Tốt", "Ổn", "Không tốt"],
            datasets: [
              {
                label: "Mức độ hài lòng",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          },
        });
      }, []);
    return(
        <>
         <canvas style={{ display: "block" }} id="charPie"></canvas>
        </>
    )
}

export default ChartPie