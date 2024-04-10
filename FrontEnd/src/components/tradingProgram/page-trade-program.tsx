import { Row,Col, TabContent } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from "react-bootstrap/Tab";
import { TabPane } from 'react-bootstrap';
import Score2023 from '@/components/score-2023'
import Score2022 from '@/components/score-2022'
import Score2021 from '@/components/score-2021'

import { useState } from 'react';
import CNTTProgram from './cntt-program';
import QLCProgram from './qlc-program';
import NNProgram from './nn-program';
import QTKDProgram from './qtkd-program';

function TradeProgram(){
    const [activeTab, setActiveTab] = useState('chart'); // Khoi tao tab ban dau la 'chart'

    const handleTabChange = (tabKey:any) => {
      setActiveTab(tabKey);
    };
    
    return (<>
    <div className='p-3 shadow bg-white'>
        <div className='m-3' style={{height:'30px'}}><strong>Chương trình đào tạo của trường</strong></div>
        <Tab.Container id="left-tabs-example"  defaultActiveKey="chart">
        <Nav className='shadow bg-info text-white' justify variant="tabs" defaultActiveKey="chart" onSelect={handleTabChange}>
        <Nav.Item>
          <Nav.Link eventKey="chart">CNTT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="QLC">QLC và KT
       
          </Nav.Link>
         
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="NN">Ngoại Ngữ
           
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="QTKD">QTKD
           
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent className='shadow '>
        <br></br>
        <TabPane eventKey="chart">
          {/* Nội dung cho tab Biểu đồ */}
            <CNTTProgram></CNTTProgram>
        </TabPane>
        <TabPane eventKey="QLC">
          {/* Nội dung cho tab Option 2 */}
          <div>
          <QLCProgram></QLCProgram>
            {/* Thêm nội dung cho Option 2 ở đây */}
          </div>
        </TabPane>
        <TabPane eventKey="NN">
          {/* Nội dung cho tab Option 2 */}
          <div>
          <NNProgram></NNProgram>
            {/* Thêm nội dung cho Option 2 ở đây */}
          </div>
        </TabPane>
        <TabPane eventKey="QTKD">
          {/* Nội dung cho tab Option 2 */}
          <div>
        <QTKDProgram></QTKDProgram>
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

export default TradeProgram