import { Row,Col, TabContent } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from "react-bootstrap/Tab";
import { TabPane } from 'react-bootstrap';
import Score2023 from '@/components/score-2023'
import Score2022 from '@/components/score-2022'
import Score2021 from '@/components/score-2021'

import { useState } from 'react';
import ChartsScore from './charts-score';
function StatisticsStudent(){
    const [activeTab, setActiveTab] = useState('chart'); // Khoi tao tab ban dau la 'chart'

    const handleTabChange = (tabKey:any) => {
      setActiveTab(tabKey);
    };
    
    return (<>
    <div className='p-3 shadow bg-white ' >
        <div className='m-3' style={{height:'30px'}}><strong>Tuyển sinh qua các năm </strong></div>
        <Tab.Container id="left-tabs-example"  defaultActiveKey="chart">
        <Nav className='shadow bg-info text-white' justify variant="tabs" defaultActiveKey="chart" onSelect={handleTabChange}>
        <Nav.Item>
          <Nav.Link eventKey="chart">Biểu đồ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="score2023">Điểm 2023
           
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="score2022">Điểm 2022
           
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="score2021">Điểm 2021
           
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>

      <TabContent className='shadow '>
        <br></br>
        <TabPane eventKey="chart">
          {/* Nội dung cho tab Biểu đồ */}
         <ChartsScore></ChartsScore>
        </TabPane>
        <TabPane eventKey="score2023">
          {/* Nội dung cho tab Option 2 */}
          <div>
          <Score2023></Score2023>
            {/* Thêm nội dung cho Option 2 ở đây */}
          </div>
        </TabPane>
        <TabPane eventKey="score2022">
          {/* Nội dung cho tab Option 2 */}
          <div>
          <Score2022></Score2022>
            {/* Thêm nội dung cho Option 2 ở đây */}
          </div>
        </TabPane>
        <TabPane eventKey="score2021">
          {/* Nội dung cho tab Option 2 */}
          <div>
          <Score2021></Score2021>
            {/* Thêm nội dung cho Option 2 ở đây */}
          </div>
        </TabPane>
        <TabPane eventKey="disabled" >
          {/* Nội dung cho tab Disabled (bị vô hiệu hóa) */}
          <div>
            <h2>Content for Disabled Tab</h2>
            {/* Nội dung của tab bị vô hiệu hóa ở đây */}
          </div>
        </TabPane>
      </TabContent>
      </Tab.Container>
    </div>
    </>)
}

export default StatisticsStudent