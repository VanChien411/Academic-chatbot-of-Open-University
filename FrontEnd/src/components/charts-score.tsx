import { Row, Col, Card, Table } from "react-bootstrap";
import ChartScore from "./chartLine-score";
import * as style1 from "@/styles/main.module.css";
import { useEffect, useState } from "react";
import * as score from "@/components/dataScore/dataScore";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import ChartGPA from "./chart-GPA";
import Form from 'react-bootstrap/Form';
interface RowData {
  id_career: string;
  name: string;
  score: number;
  id_faculty?: string;
  year?: number;
}
interface scoreForYear {
  id_career: string;
  name: string;
  score: number[];
}
interface checkYear {
  year: string;
  status: boolean;
  data: RowData[];
}

function ChartsScore() {
  const [year, setYear] = useState<any>([]);
  const [subject, setSubject] = useState(Array.from({ length: 3 }, () => 0));
  const [scoreSubject, setScoreSubject] = useState<scoreForYear[]>([]);
  const [gpaScore, setGpaScore] = useState([])
  const [selectedValue, setSelectedValue] = useState("0");

  
  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
    console.log("Selected value:", event.target.value);
    // Tại đây bạn có thể thực hiện các hành động khác với giá trị đã chọn
  };
  // const data2021: RowData[] = score.handleScore2021();
  // const data2022: RowData[] = score.handleScore2022();
  // const data2023: RowData[] = score.handleScore2023();

  // const createDataScore = async(data:model1.DataScore)=>{
  //   try {
  //       await api.createDataScore(data)
  //       console.log("datascoreApi",data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // const initData2021 =()=>{
  //   data2021.map(item=>{
  //       const tam:model1.DataScore = {id_career:item.id_career, name: item.name, score:item.score,year:2021}

  //       createDataScore(tam)
  //   })
  // }

  const [checkboxState, setCheckboxState] = useState<checkYear[]>(); // State để lưu trạng thái của checkbox
  // Hàm xử lý sự kiện khi checkbox thay đổi
  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target; // Lấy tên và trạng thái của checkbox

    if (checkboxState) {
      const tam: checkYear[] = checkboxState;

      let arrData: RowData[][] = [];
      let preLabel: any = [];

      tam.map((item) => {
        // console.log(name, checked)

        if (item.year == name) {
          item.status = checked;
        }
        if (item.status) {
          arrData.push(item.data);
          preLabel.push(item.year);

          setYear(preLabel);
        }
      });

      setCheckboxState(tam);
      if (arrData) {
        handleScore(arrData);
      }

      // console.log(tam)
    }
  };

  // Định nghĩa hàm lấy dữ liệu điểm số theo năm
  async function getScoreByYear(): Promise<RowData[][]> {
    try {
      const tam = await api.getScoreByYear(); // Gọi API để lấy dữ liệu

      return tam; // Trả về dữ liệu lấy được
    } catch (error) {
      console.error("Error while fetching data:", error);
      throw error; // Ném ra lỗi nếu có lỗi xảy ra
    }
  }

  const hashmapYear = (checkboxState: checkYear[]) => {
    let arrData: RowData[];
    if (checkboxState) {
      checkboxState.map((item) => {
        if (year.includes(item.year)) {
          arrData.push();
        }
      });
    }
  };
  const getGPAScoreByYear =async() =>{
    const gpa = await api.getGPAScoreByYear()
    const arrGpa:any = [ ]

    gpa.map(( item:any)=>{
      arrGpa.push(item.average_score)
    })
    setGpaScore(arrGpa)

    console.log('gpa', arrGpa)
  }
  useEffect(() => {
    // const year = ["2023", "2022", "2021"];

    // setYear(year);

   
    getGPAScoreByYear()
    async function fetchData() {
      let arrInitCheck: checkYear[] = [];
      let arrYear:any = [];
      try {
        const tam: RowData[][] = await getScoreByYear();
        console.log(tam)
        // Sau khi lấy được dữ liệu, bạn có thể xử lý nó theo cách bạn muốn ở đây
        tam.forEach((yearData: RowData[]) => {
          arrInitCheck.push({
            year: yearData[0].year?.toString() as string,
            status: true,
            data: yearData,
          });
          arrYear.push(yearData[0].year?.toString() as string)
        });

        handleScore(tam);
        setCheckboxState(arrInitCheck);
        setYear(arrYear)
        // console.log('2', [data2023,data2022,data2021])

        // console.log("tamuseE", tam);
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error while fetching data:", error);
      }
    }

    fetchData();

    // console.log(combinedData);
    // [
    //     {
    //         "id_career": "7480101",
    //         "name": "Khoa học máy tính",
    //         "score": 25.55
    //     },
    //     {
    //         "id_career": "7480101",
    //         "name": "Khoa học máy tính",
    //         "score": 24.5
    //     },
    //     {
    //         "id_career": "7480101",
    //         "name": "Khoa học máy tính",
    //         "score": 24
    //     }
    // ]

    // let dataScores:scoreForYear[] = [];
    // data2023.forEach((item, index)=>{
    //     if(dataScores.length >0){
    //         dataScores.forEach((score, index2) => {
    //             if (score.id_career == item.id_career) {
    //                 dataScores[index2].score.push(item.score); // Thêm giá trị vào mảng score
    //             } else {
    //                 dataScores.push({ id_career: item.id_career, name: item.name, score: [item.score] });
    //             }
    //         });

    //     }
    //     else{
    //         dataScores.push({id_career:item.id_career, name:item.name, score:[item.score]})

    //     }

    // })

    // console.log(dataScores)
  }, []);
  function handleScore(arrData: RowData[][]) {
    const combinedData: { [id_career: string]: RowData[] } = {};

    arrData.forEach((data) => {
      data.forEach((item) => {
        if (!combinedData[item.id_career]) {
          combinedData[item.id_career] = [];
        }
        combinedData[item.id_career].push(item);
      });
    });

    getDateScoreForYear(combinedData);
  }

  function getDateScoreForYear(combinedData: {
    [id_career: string]: RowData[];
  }) {
    let arr: scoreForYear[] = [];

    for (const id_career in combinedData) {
      const dataForid_career = combinedData[id_career];
      let itemScore: scoreForYear = {
        id_career: "",
        name: "",
        score: Array.from({ length: year.length }, () => 0),
      }; // Tạo một đối tượng item với giá trị mặc định

      itemScore.id_career = id_career; // Gán giá trị cho thuộc tính id_career của item
      // {
      //     label: "My First Dataset",
      //     data: [65, 59, 80, 81, 56, 55, 40],
      //     fill: false,
      //     borderColor: "rgb(75, 192, 192)",
      //     tension: 0.1,
      //   },

      // Duyệt qua các phần tử trong mảng dataForid_career và thực hiện các thao tác bạn cần
      dataForid_career.forEach((item, index) => {
        // Thực hiện các thao tác với mỗi item
        index == 0 ? (itemScore.name = item.name) : "";
        itemScore.score[index] = item.score;
        // console.log(item);
      });

      arr.push(itemScore);
    }

    //   console.log(arr);
    setScoreSubject(arr);
  }
  return (
    <>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto bg-light `}
        style={{ height: "550px" }}
      >
        <Row>
          <Col md={6}>
            <div className=" p-3" style={{ height: "300px" }}>
              <Card className="shadow">
                <Card.Header>Tra cứu</Card.Header>
                <Card.Body>
                  <Row className="d-flex align-items-center">
                    <Col xs={4}>
                    Ngành học : 
                    </Col>
                    <Col>
                    <Form.Select aria-label="Default select example" onChange={(e)=>handleChange(e)}>
                    <option value={0} >Chọn ngành học</option>
   
    {scoreSubject?.map((item, index)=>{

      return(
        <>
      <option value={item.id_career}  key={index}>{item.name}</option>
{item.score}
        </>
      )
    })}

    </Form.Select>
                    </Col>
                    
                  </Row >
                  <div>
                    <br>

                    </br>
                    <div className="overflow-auto">
                      <Table variant="info">
                        <thead>
                          <tr>
                            <th className="bg-primary">
                              Năm
                            </th>
                            {checkboxState?.map((item, index)=>{
                              return(
                                <>
                                 <td className="bg-primary" key={index}>
                                {item.year}
                            </td>
                                </>
                              )
                            })}
                           
                          
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th>
                              Điểm
                            </th>
                            { checkboxState?.map((item, index)=>{

                             const indexOfCareer =  item.data.findIndex((item)=> item.id_career == selectedValue)

                             if(indexOfCareer != -1 )
                              {
                                return(
                                  <>
                                     <td key={index}>  {item.data[indexOfCareer].score}</td>
                                  </>
                                )
                              }
                              else{
                                return(
                                  <>
                                     <td key={index}>  {0}</td>
                                  </>
                                )
                              }
                             
                             
                             
                            })}
                           

                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div
                    
                    className="btn btn-danger"
                    // onClick={() => getScoreByYear()}
                  >
                    Trở lại 
                  </div>
                </Card.Body>
               
              </Card>
            </div>
          </Col>
          <Col>
          <div className=" p-3" style={{ height: "300px" }}>
              <Card className="shadow">
                <Card.Header>Điểm trung bình mỗi năm</Card.Header>
                <Card.Body>
                <div className="d-flex justify-content-center" style={{height:'200px', textAlign:'center'}}>
                <ChartGPA data={gpaScore} labels={year}></ChartGPA>

                </div>
                </Card.Body>
                {/* <Card.Footer></Card.Footer> */}
              </Card>
            </div></Col>
        </Row>
        <Row className="mt-5">
          <div className="border" style={{ height: "900px" }}>
            <Card className="shadow">
              <Card.Header className="bg-info text-white">
                <Row>
                  <Col md={5}>
                    <b>Các môn qua từng năm</b>
                  </Col>
                  <Col className="d-flex">
                 
                    {checkboxState && (
    checkboxState.map((item,index) => {
        return (
            <div
                key={item.year} // Đảm bảo sử dụng key unique cho mỗi phần tử trong map
                style={{ marginLeft: "30px" }}
                className="btn btn-primary"
            >
                <input
                    onChange={(e) => handleCheckboxChange(e)}
                    className=""
                    defaultChecked={item.status} // Sử dụng trạng thái từ mảng checkboxState
                    type="checkbox"
                    id={`checkbox${item.year}`} // Sử dụng year của mỗi item làm id để đảm bảo duy nhất
                    name={item.year.toString()} // Sử dụng year của mỗi item làm tên
                />
                <label htmlFor={`checkbox${item.year}`}>&nbsp;{item.year}</label>
            </div>
        );
    })
)}
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
