import Chart from "chart.js/auto";
import { useEffect } from "react";


function ChartPie(props:any){
    useEffect(() => {
      const {data} = props
      console.log("dataPie", data)
        const ctx: any = document.getElementById("charPie");
        const existingChart = Chart.getChart(ctx); // Kiểm tra xem có biểu đồ nào đang được vẽ trên canvas không
    
        if (existingChart) {
          existingChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
        }
    
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Tốt", "Chưa tốt", "Ổn"],
            datasets: [
              {
                label: "Mức độ hài lòng",
                data: data,
                backgroundColor: [
                  "rgb(255, 99, 132)",
                 
                  "rgb(255, 205, 86)",
                  "rgb(54, 162, 235)",
                ],
                hoverOffset: 4,
              },
            ],
          },
        });
      }, [ props.data]);
    return(
        <>
         <canvas style={{ display: "block" }} id="charPie"></canvas>
        </>
    )
}

export default ChartPie