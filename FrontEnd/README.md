
# Chatbot 2024 Project

## Giới thiệu
Project này giữ vai trò là frontend, được xây dựng với Next.js để cung cấp giao diện người dùng cho chatbot.

## Cài đặt

### Cài đặt Node.js và npm
1. Tải và cài đặt Node.js từ trang chủ Node.js.
2. Sau khi cài đặt, kiểm tra phiên bản của Node.js và npm bằng cách chạy lệnh sau trong terminal hoặc command prompt:

   ```bash
   node -v
   npm -v
    ```
### Cài đặt các phụ thuộc
1. Clone project từ repository

    ```bash
   git clone https://github.com/VanChien411/Academic-chatbot-of-Open-University.git
    ```
2. Di chuyển vào thư mục của project

     ```bash
     cd Academic-chatbot-of-Open-University
     cd FrontEnd
    ```
3. Cài đặt các phụ thuộc bằng npm

     ```bash
     npm install
    ```

### Chạy Project
1. Để khởi chạy server phát triển, sử dụng lệnh sau

     ```bash
     npm run dev
    ```
2. Mở trình duyệt và truy cập http://localhost:3000 để xem project.

3. Chạy dự án với các local api.  

    Bạn vào Academic-chatbot-of-Open-University\FrontEnd\src\env\env.tsx

    ```bash
    export const API_BASE_URL = 'https://phuthienchien3.pythonanywhere.com/';

    // export const SERVER_HEROKU = 'https://dbchatbot2024-f0e00c0b161a.herokuapp.com/';
    // export const SERVER_WEBSOCKET = 'wss://server-websocket-b808bc5aef93.herokuapp.com'


    // new host 
    export const SERVER_HEROKU = 'https://server-connect-apimodel.onrender.com/';
    export const SERVER_WEBSOCKET = 'wss://server-websocket-n051.onrender.com/'
    ```

    Thay đổi địa chỉ tương ứng với các địa chỉ chạy của local api
    ```bash
    API_BASE_URL = "backendchatbot"
    SERVER_HEROKU = "server-connect-apiModel"
    SERVER_WEBSOCKET = "server-websocket"
    ```
## Lưu ý
Để chạy đầy đủ dự án bạn cần cài đặt các phần sau.
1. [FrontEnd (Next.js)](https://github.com/VanChien411/Academic-chatbot-of-Open-University.git) - [x]

2. BackEnd (Python)
    - [backendchatbot](https://github.com/VanChien411/backendchatbot.git)   
    - [server-connect-apiModel](https://github.com/VanChien411/server-connect-apiModel.git)
    - [server-websocket](https://github.com/VanChien411/server-websocket.git)

3. Bạn có thể trải nghiệm trực tiếp qua
    - [Chatbot OU website](https://academic-chatbot-of-open-university.vercel.app/)
 
## Hỗ trợ
Nếu bạn gặp vấn đề trong quá trình cài đặt hoặc chạy project, hãy liên hệ với chúng tôi qua email phuthienchien3@gmail.com
hoặc zalo
0328089720

Chúc bạn thành công!
