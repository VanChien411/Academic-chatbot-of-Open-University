import * as api from "@/utils/api";
import * as model1 from "@/models/all";
export interface RowData {
  maNganh: string;
  nganh: string;
  diemChuan: number;
}

const score2023 = `
7220201
Ngôn ngữ Anh
25.00
7220201C
Ngôn ngữ Anh Chất lượng cao
23.60
7220204
Ngôn ngữ Trung Quốc
25.00
7220204C
Ngôn ngữ Trung Quốc Chất lượng cao
24.10
7220209
Ngôn ngữ Nhật
23.30
7220209C
Ngôn ngữ Nhật Chất lượng cao
21.90
7220210
Ngôn ngữ Hàn Quốc
24.20
7310101
Kinh tế
24.00
7310101C
Kinh tế Chất lượng cao
23.00
7310301
Xã hội học
24.10
7310401
Tâm lý học
24.50
7310620
Đông Nam Á học
22.60
7340101
Quản trị kinh doanh
24.00
7340101C
Quản trị kinh doanh Chất lượng cao
22.60
7340115
Marketing
25.25
7340120
Kinh doanh quốc tế
24.90
7340201
Tài chính ngân hàng
23.90
7340201C
Tài chính ngân hàng Chất lượng cao
22.00
7340301
Kế toán
23.80
7340301C
Kế toán Chất lượng cao
21.25
7340302
Kiểm toán
24.10
7340403
Quản lý công
19.50
7340404
Quản trị nhân lực
24.30
7340405
Hệ thống thông tin quản lý
23.70
7380101
Luật (*)
23.40
7380107
Luật kinh tế (*)
23.90
7380107C
Luật kinh tế Chất lượng cao
23.10
7420201
Công nghệ sinh học
19.30
7420201C
Công nghệ sinh học Chất lượng cao
16.50
7460108
Khoa học dữ liệu
23.90
7480101
Khoa học máy tính
24.00
7480101C
Khoa học máy tính Chất lượng cao
22.70
7480201
Công nghệ thông tin
24.50
7510102
Công nghệ kỹ thuật công trình xây dựng
16.50
7510102C
Công nghệ kỹ thuật công trình xây dựng Chất lượng cao
16.50
7510605
Logistics và Quản lý chuỗi cung ứng
24.60
7540101
Công nghệ thực phẩm
20.90
7580302
Quản lý xây dựng
17.50
7760101
Công tác xã hội
21.50
7810101
Du lịch
23.40
`;

const score2022 = `
7220201
Ngôn ngữ Anh
24.90
7220201C
Ngôn ngữ Anh Chất lượng cao
22.40
7220204
Ngôn ngữ Trung Quốc
24.10
7220204C
Ngôn ngữ Trung Quốc Chất lượng cao
22.50
7220209
Ngôn ngữ Nhật
23.20
7220209C
Ngôn ngữ Nhật Chất lượng cao
23.00
7220210
Ngôn ngữ Hàn Quốc
24.30
7310101
Kinh tế
23.40
7310101C
Kinh tế Chất lượng cao
19.00
7310301
Xã hội học
22.00
7310620
Đông Nam Á học
20.00
7340101
Quản trị kinh doanh
23.30
7340101C
Quản trị kinh doanh Chất lượng cao
20.00
7340115
Marketing
25.25
7340120
Kinh doanh quốc tế
24.70
7340201
Tài chính ngân hàng
23.60
7340201C
Tài chính ngân hàng Chất lượng cao
20.60
7340301
Kế toán
23.30
7340301C
Kế toán Chất lượng cao
21.50
7340302
Kiểm toán
24.25
7340403
Quản lý công
16.00
7340404
Quản trị nhân lực
25.00
7340405
Hệ thống thông tin quản lý
23.50
7380101
Luật (*)
23.20
7380107
Luật kinh tế (*)
23.60
7380107C
Luật kinh tế Chất lượng cao
21.50
7420201
Công nghệ sinh học
16.00
7420201C
Công nghệ sinh học Chất lượng cao
16.00
7480101
Khoa học máy tính
24.50
7480101C
Khoa học máy tính Chất lượng cao
24.30
7480201
Công nghệ thông tin
25.40
7510102
Công nghệ kỹ thuật công trình xây dựng
16.00
7510102C
Công nghệ kỹ thuật công trình xây dựng Chất lượng cao
16.00
7510605
Logistics và Quản lý chuỗi cung ứng
25.20
7540101
Công nghệ thực phẩm
20.25
7580302
Quản lý xây dựng
16.00
7760101
Công tác xã hội
20.00
7810101
Du lịch
23.80`;

const score2021 = `
7220201
Ngôn ngữ Anh
26.8
7220201C
Ngôn ngữ Anh – Chất lượng cao
25.9
7220204
Ngôn ngữ Trung Quốc
26.1
7220204C
Ngôn ngữ Trung Quốc - Chất lượng cao
25.75
7220209
Ngôn ngữ Nhật
25.9
7220209C
Ngôn ngữ Nhật - Chất lượng cao
24.9
7220210
Ngôn ngữ Hàn Quốc
26.7
7310101
Kinh tế
25.8
7310301
Xã hội học
23.1
7310620
Đông Nam Á học
23.1
7340101
Quản trị kinh doanh
26.4
7340101C
Quản trị kinh doanh - Chất lượng cao
26.4
7340115
Marketing
26.95
7340120
Kinh doanh quốc tế
26.45
7340201
Tài chính Ngân hàng
25.85
7340201C
Tài chính ngân hàng - Chất lượng cao
25.25
7340301
Kế toán
25.7
7340301C
Kế toán - Chất lượng cao
24.15
7340302
Kiểm toán
25.2
7340404
Quản trị nhân lực
26.25
7340405
Hệ thống thông tin quản lý
25.9
7380101
Luật (* - C00 cao hơn 1.5đ)
25.2
7380107
Luật kinh tế (* - C00 cao hơn 1.5đ) 
25.7
7380107C
Luật kinh tế - Chất lượng cao
25.1
7420201
Công nghệ sinh học
16
7420201C
Công nghệ sinh học - Chất lượng cao
16
7480101
Khoa học máy tính
25.55
7480101C
Khoa học máy tính - Chất lượng cao
24
7480201
Công nghệ thông tin
26.1
7510102
Công nghệ kỹ thuật công trình xây dựng
17
7510102C
Công nghệ kỹ thuật công trình xây dựng - Chất lượng cao
16
7510605
Logistics và Quản lý chuỗi cung ứng
26.8
7540101
Công nghệ thực phẩm
19
7580302
Quản lý xây dựng
19
7760101
Công tác xã hội
18.8
7810101
Du lịch
24.5`;
const subject = `
Toan
Toán
NguVan
Ngữ văn
VatLy
Vật lý
HoaHoc
Hóa học
SinhHoc
Sinh học
LichSu
Lịch sử
DiaLy
Địa lý
GiaoDucCongDan
Giáo dục công dân
TiengAnh
Tiếng anh
TiengNga
Tiếng nga
TiengPhap
Tiếng pháp
TiengTrung
Tiếng trung
TiengDuc
Tiếng đức
TiengNhat
Tiếng nhật
TiengHan
Tiếng hàn
`;

const dataSubjectVSGroup = `
1	A00	Toán, Vật lý, Hóa học
2	A01	Toán, Vật lý, Tiếng Anh
3	A02	Toán, Vật lý , Sinh học
4	A03	Toán, Vật lý, Lịch sử
5	A04	Toán, Vật lý, Địa lý
6	A05	Toán, Hóa học, Lịch sử
7	A06	Toán, Hóa học, Địa lý
8	A07	Toán, Lịch sử, Địa lý
9	A08	Toán, Lịch sử, Giáo dục công dân
10	A09	Toán, Địa lý, Giáo dục công dân
11	A10	Toán, Vật lý, Giáo dục công dân
12	A11	Toán, Hóa học, Giáo dục công dân
13	A12	Toán, Khoa học tự nhiên, Khoa học xã hội
14	A14	Toán, Khoa học tự nhiên, Địa lý
15	A15	Toán, Khoa học tự nhiên, Giáo dục công dân
16	A16	Toán, Khoa học tự nhiên, Ngữ văn
17	A17	Toán, Khoa học xã hội, Vật lý
18	A18	Toán, Khoa học xã hội, Hóa học
1	B00	Toán, Hóa học, Sinh học
2	B01	Toán, Sinh học, Lịch sử
3	B02	Toán, Sinh học, Địa lý
4	B03	Toán, Sinh học, Ngữ văn
5	B04	Toán, Sinh học, Giáo dục công dân
6	B05	Toán, Sinh học, Khoa học xã hội
7	B08	Toán, Sinh học, Tiếng Anh
1	C00	Ngữ văn, Lịch sử, Địa lý
2	C01	Ngữ văn, Toán, Vật lý
3	C02	Ngữ văn, Toán, Hóa học
4	C03	Ngữ văn, Toán, Lịch sử
5	C04	Ngữ văn, Toán, Địa lý
6	C05	Ngữ văn, Vật lý, Hóa học
7	C06	Ngữ văn, Vật lý, Sinh học
8	C07	Ngữ văn, Vật lý, Lịch sử
9	C08	Ngữ văn, Hóa học, Sinh
10	C09	Ngữ văn, Vật lý, Địa lý
11	C10	Ngữ văn, Hóa học, Lịch sử
12	C12	Ngữ văn, Sinh học, Lịch sử
13	C13	Ngữ văn, Sinh học, Địa
14	C14	Ngữ văn, Toán, Giáo dục công dân
15	C15	Ngữ văn, Toán, Khoa học xã hội
16	C16	Ngữ văn, Vật lý, Giáo dục công dân
17	C17	Ngữ văn, Hóa học, Giáo dục công dân
18	C18	Ngữ văn, Sinh học, Giáo dục công dân
19	C19	Ngữ văn, Lịch sử, Giáo dục công dân
20	C20	Ngữ văn, Địa lý, Giáo dục công dân
1	D01	Ngữ văn, Toán, Tiếng Anh
2	D02	Ngữ văn, Toán, Tiếng Nga
3	D03	Ngữ văn, Toán, Tiếng Pháp
4	D04	Ngữ văn, Toán, Tiếng Trung
5	D05	Ngữ văn, Toán, Tiếng Đức
6	D06	Ngữ văn, Toán, Tiếng Nhật
7	D07	Toán, Hóa học, Tiếng Anh
8	D08	Toán, Sinh học, Tiếng Anh
9	D09	Toán, Lịch sử, Tiếng Anh
10	D10	Toán, Địa lý, Tiếng Anh
11	D11	Ngữ văn, Vật lý, Tiếng Anh
12	D12	Ngữ văn, Hóa học, Tiếng Anh
13	D13	Ngữ văn, Sinh học, Tiếng Anh
14	D14	Ngữ văn, Lịch sử, Tiếng Anh
15	D15	Ngữ văn, Địa lý, Tiếng Anh
16	D16	Toán, Địa lý, Tiếng Đức
17	D17	Toán, Địa lý, Tiếng Nga
18	D18	Toán, Địa lý, Tiếng Nhật
19	D19	Toán, Địa lý, Tiếng Pháp
20	D20	Toán, Địa lý, Tiếng Trung
21	D21	Toán, Hóa học, Tiếng Đức
22	D22	Toán, Hóa học, Tiếng Nga
23	D23	Toán, Hóa học, Tiếng Nhật
24	D24	Toán, Hóa học, Tiếng Pháp
25	D25	Toán, Hóa học, Tiếng Trung
26	D26	Toán, Vật lý, Tiếng Đức
27	D27	Toán, Vật lý, Tiếng Nga
28	D28	Toán, Vật lý, Tiếng Nhật
29	D29	Toán, Vật lý, Tiếng Pháp
30	D30	Toán, Vật lý, Tiếng Trung
31	D31	Toán, Sinh học, Tiếng Đức
32	D32	Toán, Sinh học, Tiếng Nga
33	D33	Toán, Sinh học, Tiếng Nhật
34	D34	Toán, Sinh học, Tiếng Pháp
35	D35	Toán, Sinh học, Tiếng Trung
36	D41	Ngữ văn, Địa lý, Tiếng Đức
37	D42	Ngữ văn, Địa lý, Tiếng Nga
38	D43	Ngữ văn, Địa lý, Tiếng Nhật
39	D44	Ngữ văn, Địa lý, Tiếng Pháp
40	D45	Ngữ văn, Địa lý, Tiếng Trung
41	D52	Ngữ văn, Vật lý, Tiếng Nga
42	D54	Ngữ văn, Vật lý, Tiếng Pháp
43	D55	Ngữ văn, Vật lý, Tiếng Trung
44	D61	Ngữ văn, Lịch sử, Tiếng Đức
45	D62	Ngữ văn, Lịch sử, Tiếng Nga
46	D63	Ngữ văn, Lịch sử, Tiếng Nhật
47	D64	Ngữ văn, Lịch sử, Tiếng Pháp
48	D65	Ngữ văn, Lịch sử, Tiếng Trung
49	D66	Ngữ văn, Giáo dục công dân, Tiếng Anh
50	D68	Ngữ văn, Giáo dục công dân, Tiếng Nga
51	D69	Ngữ văn, Giáo dục công dân, Tiếng Nhật
52	D70	Ngữ văn, Giáo dục công dân, Tiếng Pháp
53	D72	Ngữ văn, Khoa học tự nhiên, Tiếng Anh
54	D73	Ngữ văn, Khoa học tự nhiên, Tiếng Đức
55	D74	Ngữ văn, Khoa học tự nhiên, Tiếng Nga
56	D75	Ngữ văn, Khoa học tự nhiên, Tiếng Nhật
57	D76	Ngữ văn, Khoa học tự nhiên, Tiếng Pháp
58	D77	Ngữ văn, Khoa học tự nhiên, Tiếng Trung
59	D78	Ngữ văn, Khoa học xã hội, Tiếng Anh
60	D79	Ngữ văn, Khoa học xã hội, Tiếng Đức
61	D80	Ngữ văn, Khoa học xã hội, Tiếng Nga
62	D81	Ngữ văn, Khoa học xã hội, Tiếng Nhật
63	D82	Ngữ văn, Khoa học xã hội, Tiếng Pháp
64	D83	Ngữ văn, Khoa học xã hội, Tiếng Trung
65	D84	Toán, Giáo dục công dân, Tiếng Anh
66	D85	Toán, Giáo dục công dân, Tiếng Đức
67	D86	Toán, Giáo dục công dân, Tiếng Nga
68	D87	Toán, Giáo dục công dân, Tiếng Pháp
69	D88	Toán, Giáo dục công dân, Tiếng Nhật
70	D90	Toán, Khoa học tự nhiên, Tiếng Anh
71	D91	Toán, Khoa học tự nhiên, Tiếng Pháp
72	D92	Toán, Khoa học tự nhiên, Tiếng Đức
73	D93	Toán, Khoa học tự nhiên, Tiếng Nga
74	D94	Toán, Khoa học tự nhiên, Tiếng Nhật
75	D95	Toán, Khoa học tự nhiên, Tiếng Trung
76	D96	Toán, Khoa học xã hội, Tiếng Anh
77	D97	Toán, Khoa học xã hội, Tiếng Pháp
78	D98	Toán, Khoa học xã hội, Tiếng Đức
79	D99	Toán, Khoa học xã hội, Tiếng Nga
80	DD0	Toán, Khoa học xã hội, Tiếng Nhật
81	DD2	Ngữ văn, Toán, Tiếng Hàn
82	DH1	Ngữ văn, Địa lý, Tiếng Hàn
`;

const dataHaveCombination2023 = `
1	7220201	Ngôn ngữ Anh	A01; D01; D14; D78	25	
2	7220201C	Ngôn ngữ Anh Chất lượng cao	A01; D01; D14; D78	23.6	
3	7220204	Ngôn ngữ Trung Quốc	D01; D06; DD2; D78; D83; DH8	25	
4	7220204C	Ngôn ngữ Trung Quốc Chất lượng cao	D01; D06; DD2; D78; D83; DH8	24.1	
5	7220209	Ngôn ngữ Nhật	D01; D06; DD2; D78; D83; DH8	23.3	
6	7220209C	Ngôn ngữ Nhật Chất lượng cao	D01; D06; DD2; D78; D83; DH8	21.9	
7	7220210	Ngôn ngữ Hàn Quốc	D01; D06; DD2; D78; D83; DH8	24.2	
8	7310101	Kinh tế	A00; A01; D01; D07	24	
9	7310101C	Kinh tế Chất lượng cao	D07; A01; D01; D96	23	
10	7310301	Xã hội học	A01; C00; D01; D06; DD2; D78; D83; DH8	24.1	
11	7310401	Tâm lý học	A01; C00; D01; D06; DD2; D78; D83; DH8	24.5	
12	7310620	Đông Nam Á học	A01; C00; D01; D06; DD2; D78; D83; DH8	22.6	
13	7340101	Quản trị kinh doanh	A00; A01; D01; D07	24	
14	7340101C	Quản trị kinh doanh Chất lượng cao	D07; A01; D01; D96	22.6	
15	7340115	Marketing	A00; A01; D01; D07	25.25	
16	7340120	Kinh doanh quốc tế	A00; A01; D01; D07	24.9	
17	7340201	Tài chính ngân hàng	A00; A01; D01; D07	23.9	
18	7340201C	Tài chính ngân hàng Chất lượng cao	D07; A01; D01; D96	22	
19	7340301	Kế toán	A00; A01; D01; D07	23.8	
20	7340301C	Kế toán Chất lượng cao	D07; A01; D01; D96	21.25	
21	7340302	Kiểm toán	A00; A01; D01; D07	24.1	
22	7340403	Quản lý công	A00; A01; D01; D07	19.5	
23	7340404	Quản trị nhân lực	A00; C03; D01; A01	24.3	
24	7340405	Hệ thống thông tin quản lý	A00; A01; D01; D07	23.7	
25	7380101	Luật (*)	A00; A01; C00; D01; D03; D05; D06	23.4	
26	7380107	Luật kinh tế (*)	A00; A01; C00; D01; D03; D05; D06	23.9	
27	7380107C	Luật kinh tế Chất lượng cao	D07; A01; D01; D14	23.1	
28	7420201	Công nghệ sinh học	A00; D07; A02; B00	19.3	
29	7420201C	Công nghệ sinh học Chất lượng cao	D08; A01; B00; D07	16.5	
30	7460108	Khoa học dữ liệu	A00; D01; D07; A01	23.9	
31	7480101	Khoa học máy tính	A00; A01; D01; D07	24	
32	7480101C	Khoa học máy tính Chất lượng cao	A00; A01; D01; D07	22.7	
33	7480201	Công nghệ thông tin	A00; A01; D01; D07	24.5	
34	7510102	Công nghệ kỹ thuật công trình xây dựng	A00; A01; D01; D07	16.5	
35	7510102C	Công nghệ kỹ thuật công trình xây dựng Chất lượng cao	A00; A01; D01; D07	16.5	
36	7510605	Logistics và Quản lý chuỗi cung ứng	A00; A01; D01; D07	24.6	
37	7540101	Công nghệ thực phẩm	A00; D07; A01; B00	20.9	
38	7580302	Quản lý xây dựng	A00; A01; D01; D07	17.5	
39	7760101	Công tác xã hội	A01; C00; D01; D06; DD2; D78; D83; DH8	21.5	
40	7810101	Du lịch	A00; C03; D01; A01	23.4	
`

const dataHaveCombination = (dataString: any) => {
  const rows = dataString.trim().split("\n");

  const data: { nganh: string; diemChuan: number; id_career: string; id_combination: string[] }[] = [];

  for (let i = 0; i < rows.length; i++) {
     // Loại bỏ các phần tử rỗng sau khi split
const cols:string[] = rows[i].split("\t").filter((col: string) => (col as string).trim() !== "");

      
      // console.log(cols);
      const id_career = cols[1] || "";
      const nganh = cols[2] || "";
      const diemChuan = parseFloat(cols[4]) || 0;

      // Lấy các phần tử từ vị trí thứ 3 cho đến phần tử cuối cùng của mảng
      let id_combination = cols.slice(3, -1).join("").split(";").map((combination: string) => combination.trim());

   
      if (nganh && id_career && diemChuan) {
          // console.log(nganh, diemChuan, id_career, id_combination);
          data.push({ nganh, diemChuan, id_career, id_combination });
      }
      // console.log(data);
  }
  return data;
};

const getScoreToData = (dataString: any) => {
  const rows = dataString.trim().split("\n");
  const data = [];

  for (let i = 0; i < rows.length; i += 3) {
    const maNganh = rows[i];
    const nganh = rows[i + 1];
    const diemChuan = parseFloat(rows[i + 2]);

    data.push({ maNganh, nganh, diemChuan });
  }
  return data;
};

const getSubject = (dataString: any) => {
  const rows = dataString.trim().split("\n");
  const data = [];

  for (let i = 0; i < rows.length; i += 2) {
    const id_subject = rows[i];
    const name = rows[i + 1];

    data.push({ id_subject, name });
  }
  return data;
};

const getdataSubjectVSGroup = (dataString: any) => {
  const data: { tt: string; id_combination: string; subjects: string[] }[] = [];

  // Tách chuỗi thành một mảng các dòng dữ liệu
  const lines = dataString.trim().split("\n");
  // Duyệt qua từng dòng dữ liệu
  lines.forEach((line: string) => {
    // Tách dòng dữ liệu thành các phần riêng biệt
    const parts = line.split(/\s+/);
    // Thay thế Khoa học tự nhiên  và Khoa học xã hội 
    
   
    const tt = parts[0];
    const id_combination = parts[1];
    let subjectsP = parts.slice(2).join(' ').trim();
 
    if(subjectsP.toLocaleLowerCase().includes('khoa học tự nhiên'))
        {
            subjectsP += ', Vật lý, Hóa học, Sinh học'
            // console.log('098', subjectsP)
        }
        else if(subjectsP.toLocaleLowerCase().includes('khoa học xã hội')){
            subjectsP += ', Lịch sử, Địa lý, Giáo dục công dân'
            // console.log('097', subjectsP)
        }
    const subjects2 = subjectsP.trim().split(',');
    const subjects = subjects2.map(part => part.trim());
    // Lưu thông tin vào mảng kết quả
    data.push({ tt, id_combination, subjects });
  });

  return data;
};

export function handleGetSubjectAd() {
  return getdataSubjectVSGroup(dataSubjectVSGroup);
}

export function handleSubject() {
  return getSubject(subject);
}

export function handleScore2023() {
  return getScoreToData(score2023);
}

export function handleScore2022() {
  return getScoreToData(score2022);
}

export function handleScore2021() {
  return getScoreToData(score2021);
}

export function handleDataCombination2023() {
  return dataHaveCombination(dataHaveCombination2023);
}
