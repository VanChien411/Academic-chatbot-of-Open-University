'use client'
import Table from 'react-bootstrap/Table';


function messenger(){
    
 
    return(
        <>
             <Table striped hover >
      <thead className='bg-primary'>
        <tr>
          <th  className='bg-primary'>#</th>
          <th  className='bg-primary'>First Name</th>
          <th  className='bg-primary'>Last Name</th>
          <th  className='bg-primary'>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
       
      </tbody>
    </Table>
        </>
    )
}
export default messenger