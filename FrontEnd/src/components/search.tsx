'use client'
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import Spinner from 'react-bootstrap/Spinner';

interface SearchProps {
  getValueS?: (value: string) => void;
  status:boolean;
};

function  Search({ getValueS ,status}: SearchProps){
  const [valueS, setValueS]= useState<string>()

  const handleKeyPress = (event:any) => {
    
    if (event.key === 'Enter') {
      // Người dùng đã nhập Enter
      // console.log('Enter đã được ấn');
      getValue()
      // Thực hiện các hành động cần thiết khi người dùng nhập Enter
    }
  };
  const getValue=()=>{
    valueS&&getValueS?getValueS(valueS):""
    
    handleCloseSearch()
  }
  const r =5
  const handleCloseSearch=()=>{
    setValueS("")
  }

    return(
        <>
       

    {status ? (
      <InputGroup className="mb-3 center">
        <Form.Control aria-label="Text input with dropdown button" placeholder='Nhập nội dung cần hỏi'  onKeyDown={(e)=>handleKeyPress(e)} value={valueS} onChange={(e) => { setValueS(e.target.value) }} />
        <SplitButton
          variant="dark"
          title={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </svg>}
          id="segmented-button-dropdown-2"
          onClick={getValue}
        >
          
          <Dropdown.Item href='https://ou.edu.vn/'>Web đại học mở</Dropdown.Item>
          <Dropdown.Item href="https://tienichsv.ou.edu.vn/#/home">Tiện ích sinh viên OU</Dropdown.Item>
          <Dropdown.Item href="http://it.ou.edu.vn/">Khoa công nghệ thông tin OU</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Thông tin khác</Dropdown.Item>
        </SplitButton>
      </InputGroup>
    ) : (
      <InputGroup className="mb-3 center">
      <Form.Control aria-label="Text input with dropdown button" placeholder='Nhập nội dung cần hỏi' value={valueS}  onChange={(e) => { setValueS(e.target.value) , console.log(e.target.value)}} />
      <SplitButton
        disabled
        variant="dark"
        title={ <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />}
        id="segmented-button-dropdown-2"
        
        onClick={getValue}
      >
        
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </SplitButton>
    </InputGroup>
    )}

      
        </>
    )
}
export default Search