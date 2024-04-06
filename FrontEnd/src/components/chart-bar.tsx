import Chart from "chart.js/auto";
import { useEffect } from "react";


function ChartBar(){
    useEffect(() => {
        const ctx: any = document.getElementById("chartBar");
        const existingChart = Chart.getChart(ctx); // Kiểm tra xem có biểu đồ nào đang được vẽ trên canvas không
    
        if (existingChart) {
          existingChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
        }
    
        new Chart(ctx, {
          type:  'bar',
          data: {
            labels: ['1 sao',
            '2 sao',
            '3 sao',
            '4 sao',
            '5 sao'],
            datasets: [
              {
                label: "Tất cả đánh giá/câu trả lời",
                data: [901, 50, 100,70,34],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(201, 203, 207)',
                  'rgb(54, 162, 235)'
                ],
              
              },
            ],
          },
        });
      }, []);
    return(
        <>
         <canvas style={{ display: "block" }} id="chartBar"></canvas>
        </>
    )
}

export default ChartBar