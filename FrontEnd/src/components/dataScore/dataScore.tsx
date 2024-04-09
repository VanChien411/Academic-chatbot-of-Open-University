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
24.5`
;
const getScoreToData = (dataString:any)=>{
    
const rows = dataString.trim().split('\n');
const data = [];

for (let i = 0; i < rows.length; i += 3) {
    const maNganh = rows[i];
    const nganh = rows[i + 1];
    const diemChuan = parseFloat(rows[i + 2]);
    data.push({ maNganh, nganh, diemChuan });
}
return data
}

export function handleScore2023(){
    return getScoreToData(score2023)
}

export function handleScore2022(){
    return getScoreToData(score2022)
}

export function handleScore2021(){
    return getScoreToData(score2021)
}