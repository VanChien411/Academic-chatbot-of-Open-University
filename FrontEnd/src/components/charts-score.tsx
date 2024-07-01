import { Row, Col, Card, Table } from "react-bootstrap";
import ChartScore from "./chartLine-score";
import * as style1 from "@/styles/main.module.css";
import { useEffect, useState } from "react";
import * as score from "@/components/dataScore/dataScore";
import * as model1 from "@/models/all";
import * as api from "@/utils/api";
import ChartGPA from "./chart-GPA";
import Form from "react-bootstrap/Form";
import Placeholder from "react-bootstrap/Placeholder";
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
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

interface getSubVsAdGroup {
  id_combination: string;
  subjects: model1.AdmissionSubject[];
}

// Định nghĩa interface mới kế thừa từ interface ban đầu
interface AdmissionSubjectHaveScore extends model1.AdmissionSubject {
  // Thêm các thuộc tính mới
  score: number;
  // Và các thuộc tính khác bạn muốn thêm
}

interface dataScoreCombination extends model1.DataScore {
  id_combination: string[];
}

function ChartsScore() {
  const [year, setYear] = useState<any>([]);
  const [subject, setSubject] = useState(Array.from({ length: 3 }, () => 0));
  const [scoreSubject, setScoreSubject] = useState<scoreForYear[]>([]);
  const [gpaScore, setGpaScore] = useState([]);
  const [selectedValue, setSelectedValue] = useState("0");
  const [selectedValue2, setSelectedValue2] = useState("0");
  const [checkboxFullScore, setCheckboxFullScore] = useState(false);
  const [AdmissionSubject, setArrAdmissionSubject] = useState<
    AdmissionSubjectHaveScore[]
  >([]);
  const [
    ArrSubjectCombinationVsAdmissionSubjectGroup,
    setArrSubjectCombinationVsAdmissionSubjectGroup,
  ] = useState<getSubVsAdGroup[]>([]);
  const [dataScoreCombination, setDataScoreCombination] = useState<
    dataScoreCombination[]
  >([]);
  const [selectLanguage, setSelectLanguage] = useState<string>("Chứng chỉ Ngoại ngữ");
  const [isShowSelectLanguage, setIsShowSelectLanguage] = useState<boolean>(false);

  const [selectShare, setSelectShare] = useState<string>("Ưu tiên khu vực");
  const [isShowSelectShare, setIsShowSelectShare] = useState<boolean>(false);
  const [selectShareScore, setSelectShareScore] = useState<number>(0.0);

  const [yearAdmission, setYearAdmission] = useState<string>("0");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    console.log("Selected value:", event.target.value);
    // Tại đây bạn có thể thực hiện các hành động khác với giá trị đã chọn
  };

  // Hàm xử lý thay đổi score của mỗi phần tử
  const handleScoreChangeAdmission = (index: number, event: any) => {
    const newAdmissionSubjects = [...AdmissionSubject];
    newAdmissionSubjects[index].score = event.target.value;
    if (newAdmissionSubjects[index].score > 10) {
      newAdmissionSubjects[index].score = 10;
    } else if (newAdmissionSubjects[index].score < 0) {
      newAdmissionSubjects[index].score = 0;
    }
    setArrAdmissionSubject(newAdmissionSubjects);
    // console.log("newAdmissionSubjects", newAdmissionSubjects);
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
  const setValueSelectLanguage = (event: any) => {
    setSelectLanguage(event.target.innerText);
    setIsShowSelectLanguage(false);
  }
  const popover = (
    <Popover id="popover-basic"  className="overflow-auto" style={{maxHeight: "300px"}}>
      <Popover.Header as="h2"  onClick={(e)=>{setSelectLanguage("Chứng chỉ Ngoại ngữ");setIsShowSelectLanguage(false);}} className="bg-primary text-white btn w-100">Bỏ qua</Popover.Header>
      <Popover.Header as="h3" >Tiếng Anh</Popover.Header>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>IELTS &gt;= 6.5</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>IELTS = 6.0</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>IELTS = 5.5</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>IELTS = 5.0</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL iBT &gt;= 100</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL iBT = 90-99</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL iBT = 80-89</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL iBT = 55-79</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL ITP &gt;= 550</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL ITP = 520-549</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL ITP = 500-519</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOEFL ITP = 475-499</div>
      
      <Popover.Header as="h3">Tiếng Trung Quốc</Popover.Header>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>HSK cấp độ 3 = 261-300</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>HSK cấp độ 3 = 221-260</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>HSK cấp độ 3 = 180-220</div>
     
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>HSK cấp độ 4 &gt;= 180</div>

      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOCFL cấp độ 3 = 114-124</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOCFL cấp độ 3 = 104-113</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOCFL cấp độ 3 = 94-103</div>

      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>TOCFL cấp độ 4 &gt;= 125</div>


      <Popover.Header as="h3" className="">Tiếng Nhật</Popover.Header>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>JLPT cấp độ N3 &gt;= 161</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>JLPT cấp độ N3 = 141-160</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>JLPT cấp độ N3 = 121-140</div>
      <div onClick={(e)=>setValueSelectLanguage(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}>JLPT cấp độ N3 = 95-120</div>
    
    
    </Popover>
  );

  const setValueSelectShare = (event: any) => {
    setSelectShareScore(event.target.dataset.defaultValue);
    setSelectShare(event.target.innerText);
    setIsShowSelectShare(false);
  }
  const popoverShare = (
    <Popover id="popover-basic"  className="overflow-auto" style={{maxHeight: "300px"}}>
      <Popover.Header as="h2"  onClick={(e)=>{setSelectShare("Ưu tiên khu vực");setIsShowSelectShare(false);}} className="bg-primary text-white btn w-100">Bỏ qua</Popover.Header>
    
      <div onClick={(e)=>setValueSelectShare(e)}  className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}  data-default-value={0.75}> Khu vực 1 (KV1) = 0,75 điểm</div>
      <div onClick={(e)=>setValueSelectShare(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}  data-default-value={0.5}> Khu vực 2 nông thôn (KV2-NT) = 0,5 điểm</div>
      <div onClick={(e)=>setValueSelectShare(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}  data-default-value={0.25}> khu vực 2 (KV2) là 0,25 điểm</div>
      <div onClick={(e)=>setValueSelectShare(e)} className="btn btn-outline-secondary w-100 text-start text-black rounded-0" style={{borderTop:"0", borderLeft: "0", borderRight: "0",borderBottom: "1px solid black"}}  data-default-value={0}> Khu vực 3 (KV3) không được tính điểm ưu tiên</div>
      
      <Popover.Header as="h3"><div className="text-primary">| 22,5 trở lên giảm điểm ưu tiên |</div> <br></br>Điểm ưu tiên = [(30 - Tổng điểm đạt được)/7,5] x Mức điểm ưu tiên (theo khu vực hoặc theo đối tượng chính sách)</Popover.Header>
    </Popover>
  );
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
  const getGPAScoreByYear = async () => {
    const gpa = await api.getGPAScoreByYear();
    const arrGpa: any = [];

    gpa.map((item: any) => {
      arrGpa.push(item.average_score);
    });
    setGpaScore(arrGpa);

    console.log("gpa", arrGpa);
  };

  const get_data_score_and_combination_by_year = async (year: number) => {
    const data = await api.get_data_score_and_combination_by_year(year);
    setDataScoreCombination(data);
    // console.log("data", data);
    return data;
  };

  useEffect(() => {
    // const year = ["2023", "2022", "2021"];
   
    // setYear(year);
    getAllSubjectCombinationVsAdmissionSubjectGroup();
    getAllAdmissionSubject();
    getGPAScoreByYear();
    async function fetchData() {
      let arrInitCheck: checkYear[] = [];
      let arrYear: any = [];
      try {
        const tam: RowData[][] = await getScoreByYear();
        console.log(tam);
        // Sau khi lấy được dữ liệu, bạn có thể xử lý nó theo cách bạn muốn ở đây
        tam.forEach((yearData: RowData[]) => {
          arrInitCheck.push({
            year: yearData[0].year?.toString() as string,
            status: true,
            data: yearData,
          });
          arrYear.push(yearData[0].year?.toString() as string);
        });

        handleScore(tam);
        setCheckboxState(arrInitCheck);
        setYear(arrYear);
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

  const getAllAdmissionSubject = async () => {
    try {
      const arr = await api.getAllAdmissionSubject();
      setArrAdmissionSubject(arr);
    } catch (error) {}
  };

  const getAllSubjectCombinationVsAdmissionSubjectGroup = async () => {
    try {
      const arr = await api.getAllSubjectCombinationVsAdmissionSubjectGroup();
      console.log("group", arr);
      setArrSubjectCombinationVsAdmissionSubjectGroup(arr);
    } catch (error) {}
  };
  return (
    <>
      <div
        className={`${(style1 as any).scrollbarHidden} overflow-auto bg-light `}
        style={{ height: "590px" }}
      >
        <Row>
          <Col md={6}>
            <div className=" p-3" style={{ height: "300px" }}>
              <Card className="shadow">
                <Card.Header className="bg-primary text-white">
                  <strong>Tra cứu</strong>
                </Card.Header>
                <Card.Body>
                  <Row className="d-flex align-items-center">
                    <Col xs={4}>
                      <strong>Ngành học </strong>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        value={selectedValue}
                        onChange={(e) => handleChange(e)}
                      >
                        <option value={0}>Chọn ngành học </option>

                        {scoreSubject?.map((item, index) => {
                          return (
                            <>
                              <option value={item.id_career} key={index}>
                                {item.name}
                              </option>
                              {item.score}
                            </>
                          );
                        })}
                      </Form.Select>
                    </Col>
                  </Row>
                  <div>
                    <br></br>
                    <div className="overflow-auto">
                      <Table variant="info">
                        <thead>
                          <tr>
                            <th className="bg-primary">Năm</th>
                            {checkboxState?.map((item, index) => {
                              return (
                                <>
                                  <td className="bg-primary" key={index}>
                                    {item.year}
                                  </td>
                                </>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Điểm</th>
                            {checkboxState?.map((item, index) => {
                              const indexOfCareer = item.data.findIndex(
                                (item) => item.id_career == selectedValue
                              );

                              if (indexOfCareer != -1) {
                                return (
                                  <>
                                    <td key={index}>
                                      {" "}
                                      {item.data[indexOfCareer].score}
                                    </td>
                                  </>
                                );
                              } else {
                                return (
                                  <>
                                    <td key={index}> {0}</td>
                                  </>
                                );
                              }
                            })}
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div
                    className="btn btn-danger"
                    onClick={() => setSelectedValue("0")}
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
                <Card.Header className="bg-primary text-white">
                  {" "}
                  <strong>Điểm trung bình mỗi năm</strong>
                </Card.Header>
                <Card.Body>
                  <div
                    className="d-flex justify-content-center"
                    style={{ height: "200px", textAlign: "center" }}
                  >
                    { gpaScore && gpaScore.length > 0 &&  year && year.length > 0 ? (
                      <ChartGPA data={gpaScore} labels={year}></ChartGPA>
                    ) : (
                      <div>
                        Tải dữ liệu ...
                        <Placeholder animation="glow">
                          <Placeholder xs={12} />
                        </Placeholder>
                      </div>
                    )}
                  </div>
                </Card.Body>
                {/* <Card.Footer></Card.Footer> */}
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <div className="border" style={{ height: "700px" }}>
            <Card className="shadow">
              <Card.Header className="bg-info text-white">
                <Row>
                  <Col md={5}>
                    <b>Các môn qua từng năm</b>
                  </Col>
                  <Col className="d-flex">
                    {checkboxState &&
                      checkboxState.map((item, index) => {
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
                            <label htmlFor={`checkbox${item.year}`}>
                              &nbsp;{item.year}
                            </label>
                          </div>
                        );
                      })}
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                {scoreSubject.length > 0 && year ? (
                  <ChartScore data={scoreSubject} labels={year}></ChartScore>
                ) : (
                  <div>
                    Tải dữ liệu ...
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </div>
                )}
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
        </Row>
        <Row>
          <Card>
            <Card.Header className="bg-primary text-white">
              <div>Tính điểm tuyển sinh</div>
            </Card.Header>

            <Card.Body>
              <br></br>
              <Row>
                {AdmissionSubject?.map((item, index) => {
                  return (
                    <Col xs={6} md={3} key={index}>
                      <small style={{ marginLeft: "5px" }}>{item.name}</small>
                      <input
                        onChange={(e) => handleScoreChangeAdmission(index, e)}
                        value={item.score}
                        type="number"
                        className="rounded-2 p-2 m-1 border-1 border-primary w-100"
                        placeholder="Điểm"
                        max={10}
                      ></input>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
      <Col>
      <div className="m-3 d-flex justify-content-between">
       <OverlayTrigger show= {isShowSelectShare} trigger="focus"  placement="bottom" overlay={popoverShare}>
    <Button style={{maxWidth:'45%', whiteSpace:'nowrap'}}  variant="primary"  onClick={() => setIsShowSelectShare(!isShowSelectShare)} title={selectShare}>{selectShare}</Button>
  </OverlayTrigger>
  <div style={{width:'10px'}}></div>
       <OverlayTrigger show= {isShowSelectLanguage} trigger="focus"  placement="bottom" overlay={popover}>
    <Button style={{maxWidth:'45%', whiteSpace:'nowrap'}} variant="primary"  onClick={() => setIsShowSelectLanguage(!isShowSelectLanguage)} title={selectLanguage}>{selectLanguage}</Button>
  </OverlayTrigger>
        
        </div>
      </Col>

      <Col className="d-flex justify-content-end">
          <div
          className="btn btn-primary m-3 "
          onClick={() => getAllSubjectCombinationVsAdmissionSubjectGroup()}
        >
          Kiểm tra
        </div>
          </Col>
       
        </Row>
                
                
        
              
       


        <div className="bg-primary text-white p-3">
          <strong className="m-3">Điểm của mỗi tổ hợp</strong>
        </div>

        <Row className="px-3" style={{ height: "230px", overflow: "auto" }}>
          {ArrSubjectCombinationVsAdmissionSubjectGroup?.map((item, index) => {
            return (
              <Col xs={4} md={2} className="px-3 " key={index}>
                <hr className="border-primary"></hr>
                <strong>{item.id_combination}</strong>
                {item.subjects.map((item, index) => {
                  return (
                    <Row key={index}>
                      <Col xs={7} style={{ paddingRight: "0" }}>
                        <div>{item.name} </div>
                      </Col>
                      <Col xs={5} className="p-0">
                        :{" "}
                        {AdmissionSubject.find(
                          (subject) => subject.id_subject === item.id_subject
                        )?.score ?? 0}
                      </Col>
                    </Row>
                  );
                })}
              </Col>
            );
          })}

          {/* <Col>
          <div><strong className="m-3">Các ngành đủ điều kiện</strong></div>
                
          </Col> */}
        </Row>
        <div className="bg-primary" style={{ height: "5px" }}></div>
        <br />
        <Row>
          <Col>
            <Row>
              <Col className="d-flex justify-content-center">
                <strong>Chọn năm học :</strong>
              </Col>
              <Col>
                <Form.Select
                  defaultValue={0}
                  value={yearAdmission}
                  onChange={(e) => {
                    get_data_score_and_combination_by_year(
                      parseInt(e.target.value)
                    );
                    setYearAdmission(e.target.value);
                  }}
                >
                  <option value={0}>Chọn năm</option>
                  {checkboxState?.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.year}>
                          {item.year}
                        </option>
                      </>
                    );
                  })}
                  {/* <option value="2022">2022</option> */}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Row className="form-check " style={{ marginLeft: "15px" }}>

                  <input
                    className="form-check-input " 
                    type="checkbox"
                    id="exampleCheckbox"
                    value="exampleValue"
                    checked={checkboxFullScore}
                    onChange={(e)=>setCheckboxFullScore(e.target.checked)}
                  />
                  <Col><label className="form-check-label" htmlFor="exampleCheckbox">
                    Các ngành đủ điểm
                  </label></Col>
                  
                </Row>
              </Col>
              <Col>
                <Form.Select
                  onChange={(e) =>{setSelectedValue2(e.target.value),setCheckboxFullScore(false)} }
                  value={selectedValue2}
                >
                  <option value="0">Tất cả ngành</option>
                  {scoreSubject?.map((item, index) => {
                    return (
                      <option key={index} value={item.id_career}>
                        {item.name}
                      </option>
                    );
                  })}
                  {/* <option value="2022">2022</option> */}
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={{ marginLeft: "10px", marginTop: "15px" }}
          className="bg-primary p-1 text-white"
        >
          {" "}
          <strong>Các ngành xét tuyển </strong>
        </Row>
        <Row className="" style={{ height: "280px", overflow: "auto" }}>
          <Col className="m-2">
            <Row className="m-3 border-primary border">
              <Col xs={4} className="d-flex align-items-center">
                <div>
                  <strong>Tên ngành</strong>
                </div>
              </Col>
              <Col
                xs={2}
                md={1}
                className="bg-info m-0 p-0 d-flex justify-content-center align-items-center"
              >
                <strong>Điểm</strong>
              </Col>
              <Col>
                <Row className="d-flex align-items-center justify-content-center">
                  <strong>Điểm theo các tổ hợp</strong>
                </Row>
              </Col>
            </Row>
            {yearAdmission == '0' && (<div><div className="text-center p-3 m-3 text-white rounded-5" style={{backgroundColor:'green',wordWrap:'break-word' }}>Chọn năm học muốn xem kết quả</div></div>)}
            {dataScoreCombination.map((item, index) => {
              // console.log('dataScoreCombination', item)
              let arrCombination: { combination: string; score: number }[] = [];

              item.id_combination.forEach((item2, index2) => {
                let indexC =
                  ArrSubjectCombinationVsAdmissionSubjectGroup?.findIndex(
                    (item3) => item3.id_combination == item2
                  );
                let totalScore = 0;
                let count = 0;
                if (indexC !== -1) {
                  ArrSubjectCombinationVsAdmissionSubjectGroup[
                    indexC
                  ]?.subjects.forEach((subject) => {
                    const admissionSubject = AdmissionSubject.find(
                      (admissionSubject) =>
                        admissionSubject.id_subject === subject.id_subject
                    );
                   
                    if (admissionSubject) {
                      totalScore += parseFloat(
                        String(admissionSubject.score ?? 0)
                      );
                      // console.log("multiplier",item.multiplier)
                      if(item.multiplier && item.multiplier == subject.id_subject){
                        totalScore += parseFloat(
                          String(admissionSubject.score ?? 0)
                        );
                        count++;
                       
                      }
                      else if(item.multiplier && item.multiplier == 'NgoaiNgu')
                        {
                         
                          if(subject.id_subject.includes('Tieng'))
                            {
                              totalScore += parseFloat(
                                String(admissionSubject.score ?? 0)
                              );
                            // console.log("subject",subject.id_subject)
                            count++;

                            }
                        }
                      count++;
                    }
                  });
                }
                const avg = count !== 0 ? ((totalScore * (count - 1)) + selectShareScore) / count : 0;

                console.log("avg",avg)
                //  const averageScore = count !== 0 ? totalScore / count : 0;
                arrCombination.push({ combination: item2, score: avg });
              });

              // Kiểm tra selectedValue2 để quyết định xem có nên return hay không
              if(checkboxFullScore ){
                let fullScore = false;
                arrCombination.map((itemC, index) => {
                  if (itemC.score >= item.score) {
                    fullScore = true;
                }})
                if(!fullScore) return;
                return (
                  <React.Fragment key={index}>
                    <Row className="m-3 border-primary border" key={index}>
                      <Col xs={4} className="d-flex align-items-center">
                        <div>{item.name}</div>
                      </Col>
                      <Col
                        xs={2}
                        md={1}
                        className="bg-info m-0 p-0 d-flex justify-content-center align-items-center"
                      >
                        <strong>{item.score}</strong>
                      </Col>
                      <Col>
                        <Row>
                          {arrCombination.map((itemC, index) => (
                            <Col
                              className="m-1 p-0 d-flex justify-content-center"
                              xs={12}
                              md={3}
                              key={index}
                            >
                              <div
                                className={`m-0 p-0 bg-${
                                  itemC.score >= item.score
                                    ? "success"
                                    : "danger"
                                }`}
                                style={{ width: "100px" }}
                              >
                                <div
                                  className="bg-white"
                                  style={{
                                    marginLeft: "10px",
                                    marginRight: "1px",
                                    marginTop: "1px",
                                    marginBottom: "1px",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  {itemC.combination}|{itemC.score.toFixed(2)}
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </React.Fragment>
                );
              }
              
              else if (selectedValue2 !== "0" && item.id_career === selectedValue2) {
                return (
                  <React.Fragment key={index}>
                    <Row className="m-3 border-primary border" key={index}>
                      <Col xs={4} className="d-flex align-items-center">
                        <div>{item.name}</div>
                      </Col>
                      <Col
                        xs={2}
                        md={1}
                        className="bg-info m-0 p-0 d-flex justify-content-center align-items-center"
                      >
                        <strong>{item.score}</strong>
                      </Col>
                      <Col>
                        <Row>
                          {arrCombination.map((itemC, index) => (
                            <Col
                              className="m-1 p-0 d-flex justify-content-center"
                              xs={12}
                              md={3}
                              key={index}
                            >
                              <div
                                className={`m-0 p-0 bg-${
                                  itemC.score >= item.score
                                    ? "success"
                                    : "danger"
                                }`}
                                style={{ width: "100px" }}
                              >
                                <div
                                  className="bg-white"
                                  style={{
                                    marginLeft: "10px",
                                    marginRight: "1px",
                                    marginTop: "1px",
                                    marginBottom: "1px",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  {itemC.combination}| {itemC.score.toFixed(2)}
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </React.Fragment>
                );
              } else if (selectedValue2 == "0") {
                return (
                  <React.Fragment key={index}>
                    <Row className="m-3 border-primary border" key={index}>
                      <Col xs={4} className="d-flex align-items-center">
                        <div>{item.name}</div>
                      </Col>
                      <Col
                        xs={2}
                        md={1}
                        className="bg-info m-0 p-0 d-flex justify-content-center align-items-center"
                      >
                        <strong>{item.score}</strong>
                      </Col>
                      <Col>
                        <Row>
                          {arrCombination.map((itemC, index) => (
                            <Col
                              className="m-1 p-0 d-flex justify-content-center"
                              xs={12}
                              md={3}
                              key={index}
                            >
                              <div
                                className={`m-0 p-0 bg-${
                                  itemC.score >= item.score
                                    ? "success"
                                    : "danger"
                                }`}
                                style={{ width: "100px" }}
                              >
                                <div
                                  className="bg-white"
                                  style={{
                                    marginLeft: "10px",
                                    marginRight: "1px",
                                    marginTop: "1px",
                                    marginBottom: "1px",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  {itemC.combination}|{itemC.score.toFixed(2)}
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </React.Fragment>
                );
              }
            })}
          </Col>
        </Row>
        <Row className="bg-primary" style={{ height: "5px" }}></Row>
        {/* Đặt nội dung của biểu đồ ở đây */}
        <div style={{ height: "100px" }}></div>
      </div>
    </>
  );
}

export default ChartsScore;
