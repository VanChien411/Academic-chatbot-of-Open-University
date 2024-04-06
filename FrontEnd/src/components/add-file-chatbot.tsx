"use client";



function AddFileChatBot(props:any) {
 

  return (
    <>
       <style>
        {`
       input[type="file"] {
        background-color: #f1f1f1; /* Màu nền */
        
        color: blue; /* Màu chữ */
        /* Các thuộc tính khác tùy chỉnh theo nhu cầu */
        border: 1px solid #ccc; /* Viền */
        border-radius: 5px; /* Bo góc */
        padding: 10px; /* Khoảng cách bên trong */
      }
      input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: #084cdf;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
      }
      
      input[type=file]::file-selector-button:hover {
        background: #0d45a5;
      }
      .custom-border {
        border: 2px dashed #555; /* Đường viền dạng dashed màu #555 */
      }
        `}
        </style>
      <div className="d-flex justify-content-center ">
        <div style={{fontSize:'40px',width:'500px',textAlign:'center'}}><b>Upload file, cập nhập dữ liệu mới cho Chatbot</b></div>
       
    
      </div>
      <div style={{}} className="custom-border mt-5">
      <div  className="d-flex justify-content-center" style={{marginTop:'50px'}}>
      <form action="/action_page.php">
  <label htmlFor="images" className="drop-container" id="dropcontainer">
    {/* <span className="drop-title">Drop files here</span> */}
    <input type="file" id="images" accept="image/*" required></input>
  </label>
</form>


</div>
<h4 className="d-flex justify-content-center"  style={{fontFamily:'initial', color:'blue',marginTop:'30px'}}>Chọn dữ liệu muốn cập nhập vào cơ sở dữ liệu của chatbot</h4>
</div>
    </>
  );
}
export default AddFileChatBot;
