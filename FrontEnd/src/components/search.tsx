'use client'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';


function Search(){
    return(
        <>
        <div>sfef</div>
       
      <InputGroup className="mb-3 center" >
        <Form.Control aria-label="Text input with dropdown button" placeholder='Nhập nội dung tìm kiếm' />
        <SplitButton
          variant="dark"
          title="Search"
          id="segmented-button-dropdown-2"
          
        >
          
          <Dropdown.Item  >Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
      </InputGroup>
        </>
    )
}
export default Search