import { Row, Col, Card } from "react-bootstrap";
import ChartScore from "./chartLine-score";
import * as style1 from "@/styles/main.module.css";
import { useEffect, useState } from "react";
import * as score from "@/components/dataScore/dataScore";
interface scoreForYear {
  maNganh: string;
  nganh: string;
  diemChuan: number[];
}
interface checkYear {
    year:string;
    status:boolean;
    data: score.RowData[]
  }

function ChartsScore() {
  const [year, setYear] = useState<any>([]);
  const [subject, setSubject] = useState(Array.from({ length: 3 }, () => 0));
  const [scoreSubject, setScoreSubject] = useState<scoreForYear[]>(
   []
  );
  const data2021: score.RowData[] = score.handleScore2021();
  const data2022: score.RowData[] = score.handleScore2022();
  const data2023: score.RowData[] = score.handleScore2023();
  const [checkboxState, setCheckboxState] = useState<checkYear[]>(); // State để lưu trạng thái của checkbox
   // Hàm xử lý sự kiện khi checkbox thay đổi
   const handleCheckboxChange = (event:any) => {
    const { name, checked } = event.target; // Lấy tên và trạng thái của checkbox

   if(checkboxState){
    const tam:checkYear[]  = checkboxState 

    let arrData:score.RowData[][] = [];
    let preLabel:any = []
    console.log(tam)
    tam.map((item)=>{
        // console.log(name, checked)
        console.log("sef",item.year, item.status)
        if(item.year == name )
            {
                item.status = checked
               
            } 
            if(item.status){
                arrData.push(item.data)
                preLabel.push(item.year)
                console.log('arr',arrData)
                setYear(preLabel)
            }
    })
    console.log(tam)
    setCheckboxState(tam)
   if(arrData){
    console.log(arrData)
    handleScore(arrData)
   }
    
    // console.log(tam)
   }
  

  };

  const hashmapYear = (checkboxState:checkYear[]) =>{
    let arrData:score.RowData[];
    if(checkboxState){
        checkboxState.map((item)=>{
            if( year.includes(item.year) ){
                arrData.push()
            }
        })
    }
  }
  useEffect(() => {
    const year = ["2023", "2022", "2021"];

    setYear(year);
    let arrInitCheck:checkYear[];
  
        setCheckboxState([{year:'2023',status:true, data:data2023},{year:"2022",status:true, data:data2022},{year:"2021",status:true, data:data2021} ])
    
    handleScore([data2023,data2022,data2021])
  

    
  
    // console.log(combinedData);
    // [
    //     {
    //         "maNganh": "7480101",
    //         "nganh": "Khoa học máy tính",
    //         "diemChuan": 25.55
    //     },
    //     {
    //         "maNganh": "7480101",
    //         "nganh": "Khoa học máy tính",
    //         "diemChuan": 24.5
    //     },
    //     {
    //         "maNganh": "7480101",
    //         "nganh": "Khoa học máy tính",
    //         "diemChuan": 24
    //     }
    // ]

    // let dataScores:scoreForYear[] = [];
    // data2023.forEach((item, index)=>{
    //     if(dataScores.length >0){
    //         dataScores.forEach((score, index2) => {
    //             if (score.maNganh == item.maNganh) {
    //                 dataScores[index2].diemChuan.push(item.diemChuan); // Thêm giá trị vào mảng diemChuan
    //             } else {
    //                 dataScores.push({ maNganh: item.maNganh, nganh: item.nganh, diemChuan: [item.diemChuan] });
    //             }
    //         });

    //     }
    //     else{
    //         dataScores.push({maNganh:item.maNganh, nganh:item.nganh, diemChuan:[item.diemChuan]})

    //     }

    // })

    // console.log(dataScores)
  }, []);
  function handleScore(arrData: score.RowData[][]){
    const combinedData: { [maNganh: string]: score.RowData[] } = {};

    arrData.forEach((data) => {
      data.forEach((item) => {
        if (!combinedData[item.maNganh]) {
          combinedData[item.maNganh] = [];
        }
        combinedData[item.maNganh].push(item);
      });
    });
    getDateScoreForYear(combinedData);
}

function getDateScoreForYear(combinedData:{ [maNganh: string]: score.RowData[] }) {
  let arr: scoreForYear[] = [];
  for (const maNganh in combinedData) {
    const dataForMaNganh = combinedData[maNganh];
    let itemScore: scoreForYear = {
      maNganh: "",
      nganh: "",
      diemChuan: Array.from({ length: year.length }, () => 0),
    }; // Tạo một đối tượng item với giá trị mặc định

    itemScore.maNganh = maNganh; // Gán giá trị cho thuộc tính maNganh của item
    // {
    //     label: "My First Dataset",
    //     data: [65, 59, 80, 81, 56, 55, 40],
    //     fill: false,
    //     borderColor: "rgb(75, 192, 192)",
    //     tension: 0.1,
    //   },

    // Duyệt qua các phần tử trong mảng dataForMaNganh và thực hiện các thao tác bạn cần
    dataForMaNganh.forEach((item, index) => {
      // Thực hiện các thao tác với mỗi item
      index == 0 ? (itemScore.nganh = item.nganh) : "";
      itemScore.diemChuan[index] = item.diemChuan;
      // console.log(item);
    });

    arr.push(itemScore);
  }
//   console.log(arr);
setScoreSubject(arr)
}
  return (
    <>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto `}
        style={{ height: "550px" }}
      >
        <Row>
          <Col md={6}>
            <div className="border p-3" style={{ height: "300px" }}>
              <Card>
                <Card.Header>Các môn qua từng năm</Card.Header>
                <Card.Body>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </div>
          </Col>
          <Col>2</Col>
        </Row>
        <Row>
          <div className="border" style={{ height: "900px" }}>
          <Card>
                <Card.Header><Row><Col md={5}>
                Các môn qua từng năm
                </Col>
                <Col className="d-flex">
                <div style={{marginLeft:'30px p-0'}} className='btn btn-outline-primary'>
                    
    <input onChange={(e)=>handleCheckboxChange(e)} className="" defaultChecked type="checkbox" id="checkbox" name="2023"></input>
    <label  htmlFor="checkbox">&nbsp; 2023</label></div>
    <div style={{marginLeft:'30px'}} className='btn btn-outline-primary'>
    <input onChange={(e)=>handleCheckboxChange(e)} className="" defaultChecked type="checkbox" id="checkbox2" name="2022"></input>
    <label htmlFor="checkbox2">&nbsp;2022</label></div>
    <div style={{marginLeft:'30px'}} className='btn btn-outline-primary'>
    <input   onChange={(e)=>handleCheckboxChange(e)} className="" defaultChecked type="checkbox" id="checkbox3" name="2021"></input>
    <label htmlFor="checkbox3">&nbsp;2021</label></div>
                </Col>
                </Row>

                </Card.Header>
                <Card.Body>
          <ChartScore data={scoreSubject} labels={year}></ChartScore>

                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
          </div>
        </Row>
        {/* Đặt nội dung của biểu đồ ở đây */}
      </div>
    </>
  );
}

export default ChartsScore;
