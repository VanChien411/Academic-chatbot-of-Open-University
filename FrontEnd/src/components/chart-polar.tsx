import Chart from "chart.js/auto";
import { useEffect } from "react";


function ChartPolar(props:any){
    useEffect(() => {
      const {data} = props
        const ctx: any = document.getElementById("chartPolar");
        const existingChart = Chart.getChart(ctx); // Kiểm tra xem có biểu đồ nào đang được vẽ trên canvas không
    
        if (existingChart) {
          existingChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
        }
    
        new Chart(ctx, {
          type:  'pie',
          data: {
            labels: ['1 sao',
            '2 sao',
            '3 sao',
            '4 sao',
            '5 sao'],
            datasets: [
              {
                label: "Bình luận / độ hài lòng",
                data: data,
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
      }, [ props.data]);
    return(
        <>
         <canvas style={{ display: "block" }} id="chartPolar"></canvas>
        </>
    )
}

export default ChartPolar