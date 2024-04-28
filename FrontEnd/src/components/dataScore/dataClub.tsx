
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

interface RowRoom {
   
    name: string
    describe?: string[]
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

const dataRoom =`
Phòng Quản lý đào tạo
Phòng Quản lý đào tạo địa chỉ tại Phòng 005 - 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3 và Phòng 001 - 35,37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1.
Phòng Quản lý đào tạo có số điện thoại liên hệ là (028) 39300072 hoặc (028) 392 07626.
Lịch tiếp sinh viên hàng ngày được thực hiện từ 8:00 đến 11:30 và từ 13:00 đến 16:30 tại phòng 005 từ thứ 2 đến thứ 6.
Phòng Quản lý đào tạo có nhiệm vụ quản lý thực hiện Chương trình đào tạo; xây dựng và giám sát việc thực hiện kế hoạch đào tạo năm học và học kỳ; xếp thời khóa biểu, lịch thi học kỳ, và điều phối giảng đường; tổ chức đăng ký môn học trực tuyến cho sinh viên; cấp chứng nhận sinh viên, thẻ sinh viên, và bảng điểm; xét miễn và giảm môn học, hoàn học phí; giải quyết đơn chuyển trường, chuyển ngành, và đăng ký học hai ngành; giải quyết thôi học và rút hồ sơ; cấp chứng nhận tốt nghiệp tạm thời, bản sao bằng tốt nghiệp, và bản sao các giấy tờ, chứng chỉ do nhà trường cấp; cấp chứng chỉ Giáo dục thể chất, chứng chỉ giáo dục quốc phòng và an ninh, chứng chỉ Tin học, và Ngoại ngữ; xét tạm ngừng học tập và học lại sau khi tạm nghỉ, cũng như khóa/mở mã số sinh viên khi sinh viên bị buộc tạm dừng học.

Phòng Tài chính Kế toán
Phòng Tài chính Kế toán được liên hệ tại Phòng 601 - 35,37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1.
Số điện thoại của Phòng Tài chính Kế toán là (028) 39207632.
Quầy giao dịch của Phòng Tài chính Kế toán đặt tại phòng 009 - 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Website của Phòng Tài chính Kế toán là www.ou.edu.vn/Pages/Phong-tai-chinh-ke-toan.
Email liên hệ của Phòng Tài chính Kế toán là ptckt@ou.edu.vn.
Phòng Tài chính Kế toán thu học phí khi nhập học đầu khóa.
Phòng Tài chính Kế toán thu các khoản dịch vụ khác như: cấp lại bảng điểm, cấp lại thẻ sinh viên, cấp giấy xác nhận sinh viên, mở khóa mã số sinh viên, sao y bản chính, lễ tốt nghiệp.
Phòng Tài chính Kế toán hoàn trả học phí cho sinh viên.
Thủ tục hoàn học phí cho sinh viên được thực hiện như sau: Đối với sinh viên hệ chính quy liên hệ Phòng Quản lý đào tạo (P.005). Sinh viên đến Phòng Tài chính - Kế toán để hoàn trả học phí phải mang theo các giấy tờ sau: Phiếu hoàn học phí, Thẻ sinh viên hoặc CMND, bản chính + 01 bản photo của biên lai đóng tiền học phí có môn học được hoàn.
Phòng Tài chính Kế toán chi, chuyển khoản tiền khen thưởng, học bổng, phụ cấp ban cán sự lớp.
Phòng Tài chính Kế toán đổi biên lai cho những sinh viên đóng tiền học phí qua ngân hàng.

Trạm Y tế
Trạm Y tế được liên hệ tại Phòng 104 - 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Số điện thoại của Trạm Y tế là (028) 393 01374.
Website của Trạm Y tế là www.ou.edu.vn/tramyte.
Email liên hệ của Trạm Y tế là tramytesv@ou.edu.vn.
Trạm Y tế cung cấp bảo hiểm y tế và bảo hiểm tai nạn cho sinh viên.
Trạm Y tế quản lý hồ sơ khám sức khỏe ban đầu của sinh viên.
Trạm Y tế tổ chức hệ thống y tế học đường, khám và tư vấn sức khỏe.
Sinh viên có thể xem thông báo, biểu mẫu thanh quyết toán BHYT-BHTN tại trang web của Trạm Y tế.
Sinh viên có thể tra cứu mã BHYT và quyền lợi thẻ BHYT trên web: https://baohiemxahoi.gov.vn/tracuu/pages/tra-cuu-thoi-han-su-dung-thebhyt.aspx

Phòng Khảo thí
Phòng Khảo thí được liên hệ tại Phòng 501 – 35,37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1.
Số điện thoại của Phòng Khảo thí là (028) 39207628.
Website của Phòng Khảo thí là www.ou.edu.vn/ttkt.
Email liên hệ của Phòng Khảo thí là pktdbcl@ou.edu.vn.
Phòng Khảo thí tổ chức thi kết thúc học kỳ và công bố điểm thi.
Phòng Khảo thí quản lý điểm thi giữa kỳ, thi kết thúc học kỳ, và thi/bảo vệ khóa luận/đồ án tốt nghiệp.
Phòng Khảo thí giải đáp thắc mắc về điểm thi.

Thư viện
Thư viện cơ sở chính được liên hệ tại Phòng 504, lầu 5, số 97 Võ Văn Tần, Quận 3, Thành phố Hồ Chí Minh.
Số điện thoại của Thư viện là (028) 39300209.
Website của Thư viện là https://thuvien.ou.edu.vn/
Email liên hệ của Thư viện là thuviendhm@ou.edu.vn.
Fanpage của Thư viện là https://www.facebook.com/groups/thuvienou.
Phòng đọc A13 nằm ở lầu 1, số 02 Mai Thị Lựu, Quận 1.
Phòng đọc Cơ sở Nhơn Đức nằm ở huyện Nhà Bè.
Phòng đọc Cơ sở 68 Lê Thị Trung nằm ở Bình Dương.
Phòng đọc Cơ sở Ninh Hòa nằm ở Khánh Hòa.
Sinh viên được sử dụng các dịch vụ Thư viện sau đây: mượn tài liệu về nhà, đọc tài liệu tại chỗ, đặt tài liệu online, xem tài liệu trực tuyến, sử dụng máy vi tính, internet, wifi, photo, in ấn ….
Sinh viên truy cập website Thư viện để xem thông tin chi tiết về: tài nguyên thông tin, tài liệu số, sách mới, các quy định, hướng dẫn sử dụng, thông báo, tin tức….
Sinh viên sẽ bị xử lý nếu mượn tài liệu quá hạn, làm hỏng, làm mất tài liệu hoặc vi phạm Nội quy Thư viện (chi tiết tham khảo Nội quy Thư viện ban hành kèm theo quyết định số 1626/QĐ-ĐHM ngày 22/06/2022).

Đoàn Thanh niên – Hội Sinh viên
Đoàn Thanh niên – Hội Sinh viên có thông tin liên hệ tại Phòng 101 và 103A – 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Số điện thoại của Đoàn Thanh niên – Hội Sinh viên là (028) 39 300 154.
Website của Đoàn Thanh niên – Hội Sinh viên là www.ou.edu.vn/dtn.
Email liên hệ của Đoàn Thanh niên – Hội Sinh viên là vanphongdoanhoi@ou.edu.vn.
Fanpage của Đoàn Thanh niên – Hội Sinh viên là https://www.facebook.com/aoxanhou.
Văn phòng Đoàn - Hội là nơi Đoàn trường - Hội sinh viên trường tiếp nhận các thông tin và là cơ quan phát ngôn đại diện của BTV Đoàn trường và BTK Hội sinh viên trường.

Trung tâm Quản lý hệ thống thông tin
Trung tâm Quản lý hệ thống thông tin có thông tin liên hệ tại phòng 101 – số 35, 37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1.
Số điện thoại của Trung tâm Quản lý hệ thống thông tin là (028) 39.207.621.
Website của Trung tâm Quản lý hệ thống thông tin là http://ttqlhttt.ou.edu.vn.
Email liên hệ của Trung tâm Quản lý hệ thống thông tin là hotro@ou.edu.vn.
Trung tâm Quản lý hệ thống thông tin thực hiện quản trị về mặt kỹ thuật và phối hợp với Thư viện xây dựng và phát triển thư viện điện tử đáp ứng nhu cầu nghiên cứu và học tập.
Trung tâm Quản lý hệ thống thông tin tổ chức, xây dựng, vận hành, quản trị và bảo quản hệ thống mạng nội bộ của trường hoạt động ổn định, an toàn và bảo đảm an ninh.
Trung tâm Quản lý hệ thống thông tin đảm bảo toàn bộ hệ thống thông tin của trường hoạt động tốt và thông suốt.
Trung tâm Quản lý hệ thống thông tin quản lý mặt kỹ thuật các thành phần trong hệ thống thông tin của trường bao gồm: Website, Mail, Đăng ký môn học trực tuyến, E-Learning, Edusoft, Thunhap, Egov, CVHT,...
Trung tâm Quản lý hệ thống thông tin xây dựng, quản lý, vận hành, phát triển các hệ thống hỗ trợ đào tạo trực tuyến như LMS, MOOC.

Phòng Thanh tra – Pháp chế
Phòng Thanh tra – Pháp chế có thông tin liên hệ tại Phòng 701 – 35,37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1.
Số điện thoại của Phòng Thanh tra – Pháp chế là (028) 39207634.
Website của Phòng Thanh tra – Pháp chế là www.ou.edu.vn/thanhtra.
Phòng Thanh tra – Pháp chế thực hiện thanh tra việc thực hiện các chế độ chính sách cho sinh viên và các công tác quản lý sinh viên.
Phòng Thanh tra – Pháp chế thực hiện nhiệm vụ tiếp công dân giải quyết đơn khiếu nại, tố cáo thuộc lĩnh vực giáo dục trong nhà trường theo quy định của pháp luật.
Phòng Thanh tra – Pháp chế tiếp nhận và xử lý các phản ánh, kiến nghị về những vấn đề bức xúc của sinh viên.
Phòng Thanh tra – Pháp chế kiểm tra kết quả chấm thi kết thúc môn học của sinh viên.
Sinh viên có thể tra cứu quy định và biểu mẫu về xem lại kết quả bài thi tại đường dẫn: http://ou.edu.vn/thanhtra/Pages/Quy-trinh-nghiep-vu.aspx.

Phòng Hợp tác & Quản lý khoa học
Phòng Hợp tác & Quản lý khoa học có thông tin liên hệ tại Phòng 201 – 35,37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1.
Số điện thoại của Phòng Hợp tác & Quản lý khoa học là (028) 39207622.
Website của Phòng Hợp tác & Quản lý khoa học là www.ou.edu.vn/htqlkh.
Email liên hệ của Phòng Hợp tác & Quản lý khoa học là phtqlkh@ou.edu.vn.
Phòng Hợp tác & Quản lý khoa học quản lý công tác nghiên cứu khoa học (NCKH) của sinh viên.
Phòng Hợp tác & Quản lý khoa học xác nhận sinh viên tham gia NCKH.
Phòng Hợp tác & Quản lý khoa học khen thưởng sinh viên NCKH các cấp.

Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học
Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học có thông tin liên hệ tại Phòng 215 – 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Số điện thoại của Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học là (028) 39308339.
Website của Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học là www.csc.ou.edu.vn.
Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học tổ chức và thực hiện hoạt động đào tạo ngắn hạn.
Các hoạt động đào tạo bao gồm đào tạo kỹ năng mềm, các chứng chỉ, bồi dưỡng, và các khóa học ngắn hạn.
Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học tổ chức và thực hiện đào tạo ngoại ngữ, bao gồm Tiếng Anh trình độ A, B, C; các lớp học Anh văn quốc tế TOEFL, TOEIC, IELTS, tiếng Pháp, tiếng Trung, v.v.
Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học tổ chức và thực hiện đào tạo tin học, bao gồm chứng chỉ tin học A, B và các khóa học tin học ngắn hạn khác.
Trung tâm Đào tạo ngắn hạn và Ngoại ngữ - Tin học cung cấp các chương trình liên kết đào tạo cho đối tượng học viên và sinh viên, học viên cao học, đào tạo từ xa, các công ty, cơ quan, v.v.

Trung tâm Đào tạo Từ xa
Trung tâm Đào tạo Từ xa có thông tin liên hệ tại Phòng 004 – 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Số điện thoại của Trung tâm Đào tạo Từ xa là (028) 39300155.
Website của Trung tâm Đào tạo Từ xa là www.oude.edu.vn.
Email của Trung tâm Đào tạo Từ xa là tuvan@oude.edu.vn.
Trung tâm Đào tạo Từ xa quản lý và đào tạo hệ không chính quy.
Hình thức đào tạo bao gồm Đào tạo từ xa và Vừa làm vừa học.
Trung tâm Đào tạo Từ xa tiếp nhận sinh viên hệ chính quy đã quá thời gian tối đa được phép học đối với các ngành có đào tạo theo hình thức đào tạo Từ xa.
Nếu sinh viên có yêu cầu được tiếp tục học để nhận bằng đại học theo hình thức đào tạo Từ xa, Trung tâm Đào tạo Từ xa sẽ tiếp nhận.
Trung tâm Đào tạo Từ xa giải quyết các vấn đề khác có liên quan đến sinh viên hệ không chính quy, bao gồm cấp giấy chứng nhận, bảng điểm, v.v.

Trung tâm Đào tạo trực tuyến
Trung tâm Đào tạo trực tuyến có thông tin liên hệ tại Phòng 505 - 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Số điện thoại của Trung tâm Đào tạo trực tuyến là 1800 6119 (phím 2).
Website của Trung tâm Đào tạo trực tuyến là elo.edu.vn.
Email của Trung tâm Đào tạo trực tuyến là tuyensinh@elo.edu.vn.
Trung tâm Đào tạo trực tuyến triển khai các chương trình đào tạo trực tuyến linh hoạt và hiệu quả.
Trung tâm Đào tạo trực tuyến cung cấp những ưu đãi đặc biệt khác khi liên hệ trực tiếp.

Trung tâm học liệu
Trung tâm học liệu có thông tin liên hệ tại Phòng 103 – 97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3.
Email của Trung tâm học liệu là trungtamhoclieu@ou.edu.vn.
Số điện thoại của Trung tâm học liệu là (028) 39307533.
Trung tâm học liệu cung cấp sách (học liệu giấy và học liệu ebook), tư liệu, ấn phẩm học tập cho sinh viên.
Trung tâm học liệu đặc biệt cung cấp các sách tiếng Anh căn bản và nâng cao (bộ sách Life).
Trung tâm học liệu tổ chức và quản lý việc biên soạn, nghiệm thu và in ấn giáo trình, tài liệu học tập theo kế hoạch đào tạo của Trường.
Trung tâm học liệu giảm 35% giá bán học liệu của Trường cho giảng viên, cán bộ viên chức và sinh viên ở tất cả các hệ đào tạo.
Trung tâm học liệu cung cấp dịch vụ mới cho sinh viên tại Thư quán.
Dịch vụ mới bao gồm trưng bày và bán tặng phẩm có logo, tên trường như: ba lô, bình nước giữ nhiệt, đồng phục thể dục, dây đeo thẻ, bút bi v.v tại các cơ sở Thư quán nhằm cung ứng cho sinh viên và phục vụ cho các sự kiện của các đơn vị trong nhà trường.
Dịch vụ mới còn bao gồm dịch vụ đóng bìa mạ vàng Khóa luận tốt nghiệp, Luận văn thạc sĩ, Luận án tiến sĩ theo quy định của nhà trường.
Dịch vụ mới còn bao gồm dịch vụ Photocopy, in ấn cho sinh viên tại Thư quán Võ Văn Tần.
Dịch vụ mới còn bao gồm cung cấp học liệu ebook để đáp ứng nhu cầu đọc tài liệu mọi lúc, mọi nơi cho sinh viên với mức giá mua ưu đãi tốt nhất.
Trung tâm học liệu thông tin về Thư quán của Trường.

Thư quán
Thư quán tại cơ sở 97, Võ Văn Tần, Phường Võ Thị Sáu, quận 3, Tp.HCM có thông tin liên hệ tại Phòng 002, điện thoại hành chính: (028) 3930 2342.
Website bán học liệu online của Thư quán bao gồm website sách in: sachin.ou.edu.vn và website ebook: thuquan.ou.edu.vn.
Fanpage facebook của Thư quán là Thư Quán OU.

Phòng Công tác Sinh viên và Truyền Thông
Phòng Công tác Sinh viên và Truyền Thông nắm bắt và định hướng về công tác tư tưởng, đạo đức, và lối sống trong sinh viên.
Phòng Công tác Sinh viên và Truyền Thông quản lý công tác thông tin tư liệu và hình ảnh về các mặt hoạt động, công tác tuyên truyền, và cổ động của trường và các đơn vị trong và ngoài trường.
Phòng Công tác Sinh viên và Truyền Thông quản lý thực hiện các chế độ chính sách cho sinh viên như thực hiện miễn giảm học phí, vay vốn Ngân hàng chính sách xã hội, và hỗ trợ chi phí học tập.
Phòng Công tác Sinh viên và Truyền Thông theo dõi lớp sinh viên, ban cán sự lớp, và cố vấn học tập.
Phòng Công tác Sinh viên và Truyền Thông theo dõi công tác đánh giá kết quả rèn luyện, đăng ký ngoại trú, và công tác khen thưởng ngoại khóa.
Phòng Công tác Sinh viên và Truyền Thông tổ chức xét học bổng Tài năng, học bổng Khuyến khích học tập, và các loại học bổng khác.
Phòng Công tác Sinh viên và Truyền Thông tổ chức các hoạt động ngoại khóa như văn hóa, văn nghệ, thể dục thể thao, và ngày hội nghề nghiệp.
Phòng Công tác Sinh viên và Truyền Thông tổ chức hoạt động hỗ trợ và dịch vụ sinh viên như tổ chức lễ khai giảng và lễ tốt nghiệp.
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

const getRoomData = (dataString: string): RowRoom[] => {
    const rows = dataString.trim().split("\n");
    const data: RowRoom[] = [];
    
    let pre;
    let roomData: RowRoom = {
        name: '',
        describe: [],
    };
    for (let i = 0; i < rows.length; i +=1) {
       
        if(!pre && rows[i]) {
            //reset
            roomData.describe = []
            roomData.name = rows[i];
        }
        else if(pre && rows[i]) {
            roomData.describe?.push(rows[i]);
        }
        // Thêm đối tượng CLB vào mảng nếu có tên CLB
        if (roomData.name && (rows[i+1] == ''|| rows[i+1] == undefined)) {
            data.push({...roomData});
            // console.log(khoaData)
        }
        pre = rows[i];
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

export const searchRoom = (rooms: RowRoom[], query: string): RowRoom[] => {
    const result: RowRoom[] = [];
    if(!query || query.trim() === '') return rooms;
    for (const room of rooms) {
        // Kiểm tra xem tên của câu lạc bộ hoặc địa chỉ email của nó có chứa chuỗi tìm kiếm hay không
        if (room.name.toLowerCase().includes(query.toLowerCase()) ) {
            result.push(room);
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

export function handleRoomData() {
    return getRoomData(dataRoom);
    }