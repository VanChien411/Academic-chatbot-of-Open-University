import { Row, Col, TabContent, Card } from "react-bootstrap";
import * as api from "@/utils/api";
import * as model1 from "@/models/all";
import { useState } from "react";
import * as dataScore from "@/components/dataScore/dataScore";
interface getArrCombination {
  id_career: string;
  id_combination: string[];
}
// SELECT ds.id_score, ds.id_career, ds.score, ds.name, ds.id_faculty, ds.year,
// GROUP_CONCAT(dsvc.id_combination) AS id_combination
// FROM data_score ds
// LEFT JOIN data_score_vs_subject_combination dsvc ON ds.id_score = dsvc.id_score
// WHERE ds.year = 2023
// GROUP BY ds.id_score;

function AddSubject() {
  const [valueSCID, setValueSCID] = useState("");
  const [valueSCN, setValueSCIN] = useState("");
  const [valueASID, setValueASID] = useState("");
  const [valueASN, setValueASN] = useState("");
  const [valueSCADC, setValueSCADC] = useState("");
  const [valueSCADS, setValueSCADS] = useState("");
const [valueDSSC, setValueDSSC] = useState("");
const [valueDSDS, setValueDSDS] = useState<number>();
  const [arrSubjectCombination, setArrSubjectCombination] = useState<
    model1.SubjectCombination[]
  >([]);
  const [arrAdmissionSubject, setArrAdmissionSubject] = useState<
    model1.AdmissionSubject[]
  >([]);
  const [arrDataScoreVsSubjectCombination, setArrDataScoreVsSubjectCombination] = useState<
    model1.DataScoreVsSubjectCombination[]
  >([]);
  const [
    arrSubjectCombinationVsAdmissionSubject,
    setArrSubjectCombinationVsAdmissionSubject,
  ] = useState<model1.SubjectCombinationVsAdmissionSubject[]>([]);
  async function createSubjectCombination(data: model1.SubjectCombination) {
    try {
      await api.createSubjectCombination(data);
    } catch (error) {}
  }
  async function getAllSubjectCombination() {
    try {
      const arr = await api.getAllSubjectCombination();
      setArrSubjectCombination(arr);
    } catch (error) {}
  }

  async function createAdmissionSubject(data: model1.AdmissionSubject) {
    try {
      await api.createAdmissionSubject(data);
    } catch (error) {}
  }

  async function createDataScoreVsSubjectCombination(data: model1.DataScoreVsSubjectCombination) {
    try {
      await api.createDataScoreVsSubjectCombination(data);
    } catch (error) {
      
    }
  }
  async function getAllAdmissionSubject() {
    try {
      const arr = await api.getAllAdmissionSubject();
      setArrAdmissionSubject(arr);
    } catch (error) {}
  }

  async function getAllDataScore() {
    try {
      const arr = await api.getAllDataScore();
      
    } catch (error) {
      
    }
  }
  const handleCreteSC = (data: model1.SubjectCombination) => {
    createSubjectCombination(data);
    setValueSCID("");
    setValueSCIN("");
  };

  const handleCreteAS = (data: model1.AdmissionSubject) => {
    createAdmissionSubject(data);
    setValueASID("");
    setValueASN("");
  };
  const handleCreateDSVSC = (data: model1.DataScoreVsSubjectCombination) => {
    createDataScoreVsSubjectCombination(data);
    // setValueASID("");
    // setValueASN("");
  };

  const getAllDataScoreVsSubjectCombination = async () => {
    try {
      const data = await api.getAllDataScoreVsSubjectCombination();
      setArrDataScoreVsSubjectCombination(data)
    } catch (error) {}
  }
  const addListDataScoreVsSubjectCombination = async( ) => {
    try {
      // console.log('s')
      const arr:model1.DataScore[] = await api.getAllDataScore();
      // console.log(arr)
      const data:getArrCombination[] = dataScore.handleDataCombination2023() as getArrCombination[];
      console.log(data)
      // createDataScoreVsSubjectCombination({id_career:'sef',id_combination:'sef' })
      arr.map((item) => {
        const index = data.findIndex(itemData => itemData.id_career == item.id_career && item.year == 2023);
        if(index >= 0){

          data[index]?.id_combination.map((item2) => {
            // console.log(item.id_score,item2,item.name)
            createDataScoreVsSubjectCombination({ id_score:item.id_score as number,id_combination:item2 })
          })
        
        }
      })
     
    } catch (error) {
      
    }
   
   
  }
  const addListSubject = () => {
    const data: model1.AdmissionSubject[] =
      dataScore.handleSubject() as model1.AdmissionSubject[];
    data?.map((item) => {
      createAdmissionSubject(item);
    });
  };
  async function createSubjectCombinationVsAdmissionSubject(
    data: model1.SubjectCombinationVsAdmissionSubject
  ) {
    await api.createSubjectCombinationVsAdmissionSubject(data);
  }
  async function createSCVSAS(
    subjects: { tt: any; id_combination: any; subjects: string[] }[]
  ) {
    try {
      const data: model1.AdmissionSubject[] =
        await api.getAllAdmissionSubject();
      console.log("data", data);
      const re: model1.SubjectCombinationVsAdmissionSubject[] = [];
      // console.log(subjects)
      // console.log('su',subjects)

      subjects?.map((itemS) => {
        itemS.subjects.map((item2) => {
          data.map((item) => {
            if (item.name?.toLocaleLowerCase() == item2.toLocaleLowerCase())
              // console.log(item.name?.toLocaleLowerCase(), item2.toLocaleLowerCase())
              re.push({
                id_subject: item.id_subject,
                id_combination: itemS.id_combination,
              });
          });
        });
      });
      re.map((item) => {
        createSubjectCombinationVsAdmissionSubject(item);
      });
      //   console.log(re);
      return re;
    } catch (error) {
      return;
    }
  }

  const getAllSubjectCombinationVsAdmissionSubject = async () => {
    try {
      const data = await api.getAllSubjectCombinationVsAdmissionSubject();
      setArrSubjectCombinationVsAdmissionSubject(data);
    } catch (error) {}
  };
  const dataSubjectVSGroup = () => {
    // Assume handleGetSubjectAd() returns a Promise
    const tam = dataScore.handleGetSubjectAd();
    createSCVSAS(tam);
  };

  return (
    <>
      <div className="p-3 shadow bg-white">
        <div className="m-3" style={{ height: "30px" }}>
          <strong>Tuyển sinh qua các năm </strong>
        </div>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Header className="bg-primary text-white">
                subject_combination ( add tổ hợp môn tuyển sinh)
              </Card.Header>
              <Card.Body>
                <div>
                  Mã :{" "}
                  <input
                    type="text"
                    value={valueSCID}
                    onChange={(e) => setValueSCID(e.target.value)}
                  ></input>
                </div>
                <div>
                  Tên :{" "}
                  <input
                    type="text"
                    value={valueSCN}
                    onChange={(e) => setValueSCIN(e.target.value)}
                  ></input>
                </div>

                <div
                  className="btn btn-danger"
                  onClick={() => getAllSubjectCombination()}
                >
                  show
                </div>
                <div
                  className="btn btn-success"
                  onClick={() =>
                    handleCreteSC({ id_combination: valueSCID, name: valueSCN })
                  }
                >
                  add
                </div>
                <div style={{ height: "200px" }} className="overflow-auto">
                  {arrSubjectCombination?.map((item) => {
                    return (
                      <>
                        <div key={item.id}>
                          id : {item.id_combination} || name : {item.name}
                        </div>
                      </>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className="bg-primary text-white">
                admission_subject ( add môn tuyển sinh)
              </Card.Header>
              <Card.Body>
                <div>
                  Mã :{" "}
                  <input
                    type="text"
                    value={valueASID}
                    onChange={(e) => setValueASID(e.target.value)}
                  ></input>
                </div>
                <div>
                  Tên :{" "}
                  <input
                    type="text"
                    value={valueASN}
                    onChange={(e) => setValueASN(e.target.value)}
                  ></input>
                </div>

                <div
                  className="btn btn-danger"
                  onClick={() => getAllAdmissionSubject()}
                >
                  show
                </div>
                <div
                  className="btn btn-success"
                  onClick={() =>
                    handleCreteAS({ id_subject: valueASID, name: valueASN })
                  }
                >
                  add
                </div>
                <div style={{ height: "200px" }} className="overflow-auto">
                  {arrAdmissionSubject?.map((item) => {
                    return (
                      <>
                        <div key={item.id}>
                          id : {item.id_subject} || name : {item.name}
                        </div>
                      </>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col>
            <Card>
              <Card.Header className="bg-primary text-white">
                subject_combination_vs_admission_subject ( mối quan hệ giữa tổ
                hợp và môn học)
              </Card.Header>
              <Card.Body>
                <div>
                  Mã tổ hợp A00 :
                  <input
                    type="text"
                    value={valueSCADC}
                    onChange={(e) => setValueSCADC(e.target.value)}
                  ></input>
                </div>
                <div>
                  Mã môn :
                  <input
                    type="text"
                    value={valueSCADS}
                    onChange={(e) => setValueSCADS(e.target.value)}
                  ></input>
                </div>

                <div
                  className="btn btn-danger "
                  hidden
                  onClick={() => dataSubjectVSGroup}
                >
                  create
                </div>
                <div
                  className="btn btn-danger"
                  onClick={() => getAllSubjectCombinationVsAdmissionSubject()}
                >
                  show
                </div>
                <div
                  className="btn btn-success"
                  onClick={() =>
                    createSubjectCombinationVsAdmissionSubject({ id_combination: valueSCADC, id_subject: valueSCADS })
                  }
                >
                  add
                </div>
                <div style={{ height: "200px" }} className="overflow-auto">
                  {arrSubjectCombinationVsAdmissionSubject?.map((item) => {
                    return (
                      <>
                        <div key={item.id}>
                          Tổ hợp : {item.id_combination} || Môn :{" "}
                          {item.id_subject}
                        </div>
                      </>
                      
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card>
              <Card.Header className="bg-primary text-white">
              data_score_vs_subject_combination ( mối quan hệ giữa tổ
                hợp và nganh)
              </Card.Header>
              <Card.Body>
                <div>
                  Mã tổ hợp A00 :
                  <input
                    type="text"
                    value={valueDSSC}
                    onChange={(e) => setValueDSSC(e.target.value)}
                  ></input>
                </div>
                <div>
                  Mã ngày theo năm :
                  <input
                    type="number"
                    value={valueDSDS}
                    onChange={(e) => setValueDSDS(parseInt(e.target.value) as number)}
                  ></input>
                </div>

                <div
                  className="btn btn-danger "
                  hidden
                  onClick={() =>  addListDataScoreVsSubjectCombination()}
                >
                  create
                </div>
                <div
                  className="btn btn-danger"
                  onClick={() => getAllDataScoreVsSubjectCombination()}
                >
                  show
                </div>
                <div
                  className="btn btn-success"
                  onClick={() =>createDataScoreVsSubjectCombination({ id_combination: valueDSSC, id_score: valueDSDS as number })
                   
                  }
                >
                  add
                </div>
                <div style={{ height: "200px" }} className="overflow-auto">
                  {arrDataScoreVsSubjectCombination?.map((item) => {
                    return (
                      <>
                        <div key={item.id}>
                          Tổ hợp : {item.id_combination} || Mã ngành theo năm :
                          {item.id_score}
                        </div>
                      </>
                      
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddSubject;
