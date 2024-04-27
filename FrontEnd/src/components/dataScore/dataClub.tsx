
interface RowClub{
    name: string
    email?: string
    facebook?: string
}

interface RowKhoa {
    name: string
    describe?: string
    website?: string
    phone?: string
    adress?: string
}
const dataClub = `
Câu lạc bộ Kinh tế trẻ\\clbkinhtetre@ou.edu.vn\\facebook.com/clbkinhtetreou
Câu lạc bộ Đầu tư kinh tế\\clbdautukinhte@gmail.com\\facebook.com/clbdautukinhteou.
Câu lạc bộ Thể thao khoa Luật\\sportcluboflaw.ou.3010@gmail.com.vn\\facebook.com/profile.php?id=100063662284448&amp;mibextid=LQQJ4d.
Câu lạc bộ Tuyên Truyền Pháp Luật\\tuyentruyenphapluatclub.ou@gmail.com\\facebook.com/clbtuyentruyenphapluatou.
Câu lạc bộ Kỹ năng pháp lý\\legalskillsclub2020@ou.edu.vn\\facebook.com/leagalskillsclub.ou.
Câu lạc bộ truyền thông Khoa Luật - COL Team\\colteam@ou.edu.vn\\facebook.com/COLTEAM.official.
Câu lạc bộ Câu lạc bộ Kế toán – Kiểm Toán\\aaclub@ou.edu.vn\\facebook.com/aaclubou.
Câu lạc bộ Thể thao\\sportsas.club@gmail.com\\facebook.com/clb.sasabout.
Câu lạc bộ Khởi nghiệp GEAROUP\\gearoupclub@gmail.com\\facebook.com/profile.php?id=100095324881866.
Câu lạc bộ giao lưu quốc tế BLUESKY\\blueskyclub.ou@gmail.com\\facebook.com/blueskyclub.ou.
Câu lạc bộ Luật L.A.W\\clblaw2015@gmail.com\\facebook.com/CLBL.A.W?mib extid=ZbWKwL.
Câu lạc bộ Văn nghệ PASSION CLUB - OU\\passionclub.ou@gmail.com\\facebook.com/passionclub.ou?mibextid=LQQJ4d.
CLB Tiếng Anh A.C.E\\aceclub.ou@gmail.com\\facebook.com/aceclb.ou.
CLB NCKH MAREC RESEARCH\\clb.marec@gmail.com\\facebook.com/clbnckh.marec.
CLB Your Club -CLB Kĩ năng thành công\\yourclubou@gmail.com\\facebook.com/YourClubOU?mi bextid=LQQJ4d.
CLB FBA - Tài chính ngân hàng kế toán\\fbaclub.ou@gmail.com\\facebook.com/caulacbotcnhkt?mibextid=LQQJ4d.
CLB O.MARKETING\\omarketing.dtdb@ou.edu.vn\\facebook.com/omarketing.ou? mibextid=LQQJ4d.
Nhóm tư vấn tâm lí Spirit\\spirit.team@ou.edu.vn\\facebook.com/nhomspirit.
CLB Truyền Thông Trẻ\\truyenthongtre@ou.edu.vn\\facebook.com/youmclub.
NGC - Night Guitar Club\\ngc.nightguitarclub2010@gmail.com\\facebook.com/Night.Guitar.OU.
Đội tuyên truyền hiến máu tình nguyện\\doihienmautinhnguyen@ou.edu.vn\\facebook.com/HienMauOU.
Câu lạc bộ Nông nghiệp\\khoacongnghesinhhoc@ou.edu.vn.
Câu lạc bộ Y Dược\\khoacongnghesinhhoc@ou.edu.vn.
Câu lạc bộ Thực phẩm\\khoacongnghesinhhoc@ou.edu.vn.
Câu lạc bộ Môi trường\\khoacongnghesinhhoc@ou.edu.vn.
Câu lạc bộ Văn thể mỹ\\khoacongnghesinhhoc@ou.edu.vn.
Câu lạc bộ Sáng tạo khởi nghiệp\\khoacongnghesinhhoc@ou.edu.vn.
Câu lạc bộ tiếng Anh\\khoacongnghesinhhoc@ou.edu.vn.
CEO Guitar Club\\ceo.guitarclub@gmail.com\\facebook.com/CEO.Guitar.OU.
Civil Multimedia Camera\\Xaydung@ou.edu.vn\\facebook.com/profile.php?id=100063314493509.
Dự Toán Xây Dựng\\dutoanxaydung@ou.edu.vn.
CFC – Bóng đã Xây dựng\\Xaydung@ou.edu.vn\\facebook.com/CEO.Guitar.OU.
CLB Nghiên cứu khoa học (SRC Club)\\src.fbou@gmail.com\\facebook.com/SRCCLUB.OU.
CLB Tài chính – Chứng khoán (FBS Club)\\fbs.fbou@gmail.com\\facebook.com/caulacbotcck.
Câu lạc bộ Ngôn ngữ và Văn hóa Indonesia (BABUD Club)\\myindonesia@ou.edu.vn\\facebook.com/indonesia.ou.
Câu lạc bộ Văn hóa Thái Lan (Thai Club)\\Thaiclub@ou.edu.vn\\facebook.com/thaiclub.ou.
Câu lạc bộ Thúc đẩy bình đẳng giới (Equality Club)\\Equalityclub.ou@gmail.com\\facebook.com/EqualityOu.
Câu lạc bộ Nhảy hiện đại (Tripple S Crew)\\triplescrew@ou.edu.vn\\facebook.com/TripleS.ou.
Câu lạc bộ Sách (Open Book)\\openbookclub@ou.edu.vn\\facebook.com/openbook.ou.
Câu lạc bộ Văn hóa (Culture Club)\\cultureclub.2208@ou.edu.vn\\facebook.com/Cultureclub.2208.
Câu lạc bộ Ngôn ngữ và Văn hóa Indonesia (BABUD Club)\\myindonesia@ou.edu.vn\\facebook.com/indonesia.ou.
Câu lạc bộ Văn hóa Thái Lan (Thai Club)\\Thaiclub@ou.edu.vn\\facebook.com/thaiclub.ou.
Câu lạc bộ Thúc đẩy bình đẳng giới (Equality Club)\\Equalityclub.ou@gmail.com\\facebook.com/EqualityOu.
Câu lạc bộ Nhảy hiện đại (Tripple S Crew)\\triplescrew@ou.edu.vn\\facebook.com/TripleS.ou.
Câu lạc bộ Sách (Open Book)\\openbookclub@ou.edu.vn\\facebook.com/openbook.ou.
Câu lạc bộ Văn hóa (Culture Club)\\cultureclub.2208@ou.edu.vn\\facebook.com/Cultureclub.2208.
Open Marketing Group\\openmargroup@gmail.com\\facebook.com/caulacbo.omg.
Kỹ năng & Giá trị sống – HappyU\\happyu@ou.edu.vn\\facebook.com/CLBHappyU.
YEP – Youth Empowerment Project\\weareyepou@gmail.com\\facebook.com/yepclubou.
Books&Friends\\booksandfriends@ou.edu.vn\\facebook.com/BooksAndFriendsOU.
Nhân Sự Trẻ\\clbnhansutre@ou.edu.vn\\facebook.com/caulacbonhansutre.
Du lịch – Open Tourism Club\\clbdulich2ou@gmail.com\\facebook.com/clbdulich.ou/.
Logistics & Supply Chain LSC\\lscclub.ou@gmail.com\\facebook.com/LSCClub.OU.
Khởi nghiệp TEC\\khoinghiepou@gmail.com\\facebook.com/CLBKhoiNghiepOU.
Câu lạc bộ Tiếng Anh The Sun\\thesunclub.ou@gmail.com\\facebook.com/TheSunEC.
Câu lạc bộ tiếng Nhật Nikoniko\\clubnikonikoou@gmail.com\\facebook.com/Nikoniko.clbtiengNhat.DHMoTphcm.
Câu lạc bộ tiếng Trung ZWS OU\\zwschineseclub.hcmcou@gmail.com\\facebook.com/zwschineseclub.hcmcou.
CLB tiếng Hàn Urinuri\\urinuriclubou@ou.edu.vn\\facebook.com/CLBtiengHanUrinuriOU.
CLB RadiOU\\radio.ou269@gmail.com\\facebook.com/Radioudhmo.
CLB Mỹ Thuật ORA\\oraclub@ou.edu.vn\\facebook.com/oraclubou.
CLB Thể Thao Khoa Ngoại Ngữ - ĐH Mở (FFLSC)\\fflsc@ou.edu.vn\\facebook.com/FFLSC.
Orange Team\\ogteam.ith@gmail.com\\facebook.com/ogdanceteam.ith.
OU Basketball Club\\basketballclub.ou@gmail.com\\facebook.com/Oubasketballclub.
CLB Taekwondo - ĐHM\\clbtaekwondoou@gmail.com\\facebook.com/outaekwondoclub.
Câu Lạc Bộ N.I.M Photo Club\\photoclub.nim@gmail.com\\facebook.com/photoclub.nim.
Câu Lạc Bộ Cờ Vua\\ouchessclub@ou.edu.vn\\facebook.com/oumchessclub.
CLB Vovinam - Việt Võ Đạo\\vovinam.daihocmo@gmail.com\\facebook.com/profile.php?id=100057192560784.
CLB Nhân sự nguồn\\clbnhansunguon@ou.edu.vn.
CLB OU - PT\\oupt@ou.edu.vn.
CLB Lý luận trẻ\\bantuyengiao.dtn@ou.edu.vn.
CLB OU Green Plus\\ougreen@ou.edu.vn\\facebook.com/OUGreenPlusClub.
Câu Lạc Bộ Cựu Sinh Viên Trường Đại Học Mở TP.HCM\\alumni@ou.edu.vn\\facebook.com/Alumniclub.OU
`

const dataKhoa =`
Khoa Đào tạo Đặc biệt gồm các ngành: Quản trị kinh doanh, Tài chính - Ngân hàng, Kế toán, Công nghệ sinh học, CNKT Công trình xây dựng, Khoa học máy tính, Luật kinh tế, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật, Kinh tế, Kinh doanh Quốc tế, Quản trị nhân lực.
Website/email của Khoa Đào tạo Đặc biệt: www.ou.edu.vn/dacbiet, sas@ou.edu.vn
Điện thoại của Khoa Đào tạo Đặc biệt: (028) 3930.9918
Địa chỉ liên hệ của Khoa Đào tạo Đặc biệt: Phòng 007, 97 Võ Văn Tần, P. Võ Thị Sáu, Q.3
Khoa Công nghệ sinh học gồm các ngành: Công nghệ sinh học, Công nghệ thực phẩm.
Website/email của Khoa Công nghệ sinh học: www.ou.edu.vn/cnsh, khoacongnghesinhhoc@ou.edu.vn
Điện thoại của Khoa Công nghệ sinh học: (028) 3838.6602
Địa chỉ liên hệ của Khoa Công nghệ sinh học: Phòng 602, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Công nghệ thông tin gồm các ngành: Khoa học máy tính, Công nghệ thông tin
Website/email Khoa Công nghệ thông tin: www.it.ou.edu.vn, fcs@ou.edu.vn
Điện thoại Khoa Công nghệ thông tin: (028) 3838.6603
Địa chỉ liên hệ Khoa Công nghệ thông tin: Phòng 604, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Kế toán – Kiểm toán gồm các ngành: Kế toán, Kiểm toán
Website/email Khoa Kế toán – Kiểm toán: www.ou.edu.vn/ktkt, ktkt@ou.edu.vn
Điện thoại Khoa Kế toán – Kiểm toán: (028) 3838.6608
Địa chỉ liên hệ Khoa Kế toán – Kiểm toán: Phòng 105, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Kinh tế và Quản lý công gồm các ngành: Kinh tế, Quản lý công
Website/email Khoa Kinh tế và Quản lý công: www.ou.edu.vn/ktqlc, khoaktqlc@ou.edu.vn
Điện thoại Khoa Kinh tế và Quản lý công: (028) 3838.6615
Địa chỉ liên hệ Khoa Kinh tế và Quản lý công Phòng 603, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Luật gồm các ngành: Luật kinh tế, Luật
Website/email Khoa Luật: www.ou.edu.vn/luat, khoaluat.dhm@ou.edu.vn
Điện thoại Khoa Luật: (028) 3838.6601
Địa chỉ liên hệ Khoa Luật: Phòng 102, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Ngoại ngữ gồm các ngành: Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật, Ngôn ngữ Hàn Quốc
Website/email Khoa Ngoại ngữ: www.ou.edu.vn/nn, khoangoaingu@ou.edu.vn
Điện thoại Khoa Ngoại ngữ: (028) 3838.6606
Địa chỉ liên hệ Khoa Ngoại ngữ: Phòng 503, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Quản trị kinh doanh gồm các ngành: Quản trị kinh doanh, Kinh doanh quốc tế, Quản trị nhân lực, Marketing, Du lịch, Logistics và Quản lý chuỗi cung ứng
Website/email Khoa Quản trị kinh doanh: www.kqtkdou.edu.vn, qtkd@ou.edu.vn
Điện thoại Khoa Quản trị kinh doanh: (028) 3838.6604
Địa chỉ liên hệ Khoa Quản trị kinh doanh: Phòng 403, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Tài chính – Ngân hàng gồm những ngành: Tài chính – Ngân hàng
Website/email Khoa Tài chính – Ngân hàng: www.ou.edu.vn/tcnh, tcnh@ou.edu.vn
Điện thoại Khoa Tài chính – Ngân hàng: (028) 3838.6605
Địa chỉ liên hệ Khoa Tài chính – Ngân hàng: Phòng 402, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Xã hội học - Công tác xã hội (XHH – CTXH) gồm các ngành: Xã hội học, Công tác xã hội, Đông Nam Á học, Tâm lý học
Website/email Khoa Xã hội học - Công tác xã hội (XHH – CTXH): http://xhh.ou.edu.vn, khoaxhh@ou.edu.vn
Điện thoại Khoa Xã hội học - Công tác xã hội (XHH – CTXH): (028) 3838.6616
Địa chỉ liên hệ Khoa Xã hội học - Công tác xã hội (XHH – CTXH): Phòng 703, 35-37 Hồ Hảo Hớn, Quận 1
Khoa Xây dựng gồm các ngành: Công nghệ kỹ thuật công trình xây dựng, Quản lý xây dựng
Website/email Khoa Xây dựng: www.ce.ou.edu.vn, xaydung@ou.edu.vn
Điện thoại Khoa Xây dựng: (028) 3838.6617
Địa chỉ liên hệ Khoa Xây dựng: Phòng 705, 35-37 Hồ Hảo, Hớn, Quận 1
Khoa Khoa học Cơ bản gồm các ngành: Khoa học dữ liệu
Website/email Khoa Khoa học Cơ bản: www.ou.edu.vn/bancoban, khoakhcb@ou.edu.vn
Điện thoại :
Địa chỉ liên hệ Khoa Khoa học Cơ bản: Phòng 502, 35-37 Hồ Hảo, Hớn, Quận 1
`

const getClubData = (dataString: string): RowClub[] => {
    const rows = dataString.trim().split("\n");
    const data: RowClub[] = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const clubData: RowClub = {
            name: "",
        };

        // Tìm tên CLB
        const item = row.split('\\')
        if (item[0]) {
            clubData.name = item[0];
        }

        // Tìm địa chỉ email


        if (item[1]) {
            clubData.email = item[1];
        }

        // Tìm trang Facebook
      
        if (item[2]) {
            clubData.facebook = item[2];
        }

        // Thêm đối tượng CLB vào mảng nếu có tên CLB
        if (clubData.name) {
            data.push(clubData);
        }
    }

    return data;
};

const getKhoaData = (dataString: string): RowKhoa[] => {
    const rows = dataString.trim().split("\n");
    const data: RowKhoa[] = [];

    for (let i = 0; i < rows.length; i +=4) {
        const row = rows[i].split('gồm');
        const name = row[0].trim();
        const describe = 'Gồm ' + row[1].trim();
        const khoaData: RowKhoa = {
            name,
            describe,
            website : rows[i+1].trim(),
            phone: rows[i+2].trim(),
            adress : rows[i+3].trim(),
        };

        

        // Thêm đối tượng CLB vào mảng nếu có tên CLB
        if (khoaData.name) {
            data.push(khoaData);
            // console.log(khoaData)
        }
    }

    return data;
};
export const searchClub = (clubs: RowClub[], query: string): RowClub[] => {
    const result: RowClub[] = [];
    if(!query || query.trim() === '') return clubs;
    for (const club of clubs) {
        // Kiểm tra xem tên của câu lạc bộ hoặc địa chỉ email của nó có chứa chuỗi tìm kiếm hay không
        if (club.name.toLowerCase().includes(query.toLowerCase()) || (club.email && club.email.toLowerCase().includes(query.toLowerCase()))) {
            result.push(club);
        }
    }

    return result;
};
export const searchKhoa = (khoas: RowKhoa[], query: string): RowKhoa[] => {
    const result: RowKhoa[] = [];
    if(!query || query.trim() === '') return khoas;
    for (const khoa of khoas) {
        // Kiểm tra xem tên của câu lạc bộ hoặc địa chỉ email của nó có chứa chuỗi tìm kiếm hay không
        if (khoa.name.toLowerCase().includes(query.toLowerCase()) || (khoa.describe && khoa.describe.toLowerCase().includes(query.toLowerCase())) ||  (khoa.adress && khoa.adress.toLowerCase().includes(query.toLowerCase()))||  (khoa.phone && khoa.phone.toLowerCase().includes(query.toLowerCase())) ||  (khoa.website && khoa.website.toLowerCase().includes(query.toLowerCase()))) {
            result.push(khoa);
        }
    }

    return result;
};
export function handleClubData() {
    return getClubData(dataClub);
  }

export function handleKhoaData() {
return getKhoaData(dataKhoa);
}