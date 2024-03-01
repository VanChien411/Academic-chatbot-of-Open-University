'use client'
import Card from 'react-bootstrap/Card';
import { Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Link from 'next/link'
import  '@/styles/main.module.css'

function Login(){
    return(
        <>
       
      
      
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }} className=''>
     
            <div className=' bg-white rounded-3 shadow p-5' style={{width:'400px',height:'500px'}}>
            <Card.Body>
        <Card.Title style={{fontSize:'30px'}} className='mb-3'>Đăng nhập</Card.Title>
        
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Địa chỉ Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button   className="mb-3 w-100" >
       Đăng nhập
      </Button>
      <Row>
        <Col className='text-primary'>
        <Form.Check
           style={{opacity:'0.7'}}
        
            type="checkbox"
            label={`Lưu mật khẩu`}
            id={`disabled-default-checkbox`}
          />
        </Col>
        <Col><Link style={{color:'inherit', textDecoration:'none'}} className="custom-link" href={"#"}>Quên mật khẩu</Link>
        </Col>
    
       
      </Row>
      <Row className='my-3 w-80 center text-center' >
        <div className=''>
        Bạn chưa có tài khoản? {' '}
        <Link style={{textDecoration:'none'}} href={'#'}>Đăng ký</Link>
        </div>
  
</Row>
     
    </Form>
      </Card.Body> 
            </div>
</div>

        </>
    )
}
export default Login