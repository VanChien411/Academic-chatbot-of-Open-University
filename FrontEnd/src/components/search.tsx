'use client'
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';


interface SearchProps {
  getValueS?: (value: string) => void;
  status:boolean
}

function  Search({ getValueS ,status}: SearchProps){
  const [valueS, setValueS]= useState<string>()

  const handleKeyPress = (event:any) => {
    
    if (event.key === 'Enter') {
      // Người dùng đã nhập Enter
      console.log('Enter đã được ấn');
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
          title="Hỏi"
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
        title="Hỏi"
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