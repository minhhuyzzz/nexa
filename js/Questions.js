/**
 * NEXA QUESTION BANK - 120 QUESTIONS
 * Khung năng lực số chuẩn DigComp 2.2
 */

const appQuestionBank = [
    // --- NHÓM 1: Tìm kiếm, khai thác dữ liệu và thông tin số (20 câu) ---
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi cần tìm tài liệu học thuật đáng tin cậy, công cụ nào phù hợp nhất?",
        options: ["A. Google Scholar", "B. TikTok", "C. Facebook cá nhân", "D. Tin nhắn nhóm"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Từ khóa tìm kiếm tốt là từ khóa như thế nào?",
        options: ["A. Ngắn, rõ, đúng trọng tâm", "B. Càng dài càng tốt", "C. Viết hoa toàn bộ", "D. Có nhiều biểu tượng cảm xúc"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi tìm tài liệu về “năng lực số sinh viên”, cách tìm nào hiệu quả hơn?",
        options: ["A. Gõ “năng lực số sinh viên filetype:pdf”", "B. Gõ “giúp tôi với”", "C. Chỉ tìm trên mạng xã hội", "D. Hỏi ngẫu nhiên trong nhóm chat"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Dấu ngoặc kép trong tìm kiếm Google dùng để làm gì?",
        options: ["A. Tìm chính xác cụm từ", "B. Tăng tốc máy tính", "C. Tự động dịch văn bản", "D. Xóa kết quả trùng lặp"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi muốn loại bỏ một từ khỏi kết quả tìm kiếm, có thể dùng ký hiệu nào?",
        options: ["A. Dấu trừ “-”", "B. Dấu cộng “+”", "C. Dấu chấm hỏi “?”", "D. Dấu sao “*”"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi tìm văn bản pháp luật chính thức, nên ưu tiên nguồn nào?",
        options: ["A. Cổng thông tin cơ quan nhà nước", "B. Bài đăng không rõ nguồn", "C. Bình luận mạng xã hội", "D. Ảnh chụp không ghi ngày"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi tìm thông tin mới, yếu tố nào cần kiểm tra?",
        options: ["A. Ngày đăng/cập nhật", "B. Màu nền website", "C. Số lượng quảng cáo", "D. Kích cỡ logo"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Kết quả tìm kiếm đầu tiên trên Google luôn đúng?",
        options: ["A. Không, cần kiểm chứng", "B. Có, luôn chính xác", "C. Chỉ đúng nếu có nhiều lượt xem", "D. Chỉ đúng nếu tiêu đề in hoa"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi tìm kiếm bằng AI, người dùng nên làm gì?",
        options: ["A. Kiểm tra lại bằng nguồn đáng tin cậy", "B. Tin tuyệt đối", "C. Sao chép ngay", "D. Không cần hỏi nguồn"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Dữ liệu số là gì?",
        options: ["A. Thông tin được lưu trữ/xử lý bằng thiết bị số", "B. Chỉ là giấy tờ in ra", "C. Chỉ là hình ảnh", "D. Chỉ là mật khẩu"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi lưu tài liệu học tập, cách đặt tên file nào tốt nhất?",
        options: ["A. TenMon_ChuDe_NgayThang", "B. abcxyz", "C. filemoi", "D. không cần đặt tên"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Cách tổ chức thư mục hiệu quả là gì?",
        options: ["A. Phân loại theo môn/chủ đề/thời gian", "B. Để tất cả ngoài desktop", "C. Lưu tùy ý", "D. Xóa sau khi dùng"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi tải tài liệu từ Internet, cần chú ý điều gì trước tiên?",
        options: ["A. Nguồn và độ an toàn của file", "B. Màu sắc file", "C. Tên người gửi có hay không", "D. File có biểu tượng đẹp không"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Định dạng PDF thường phù hợp để làm gì?",
        options: ["A. Chia sẻ tài liệu giữ nguyên bố cục", "B. Chạy phần mềm", "C. Lưu mật khẩu", "D. Diệt virus"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi tìm hình ảnh sử dụng trong bài thuyết trình, cần chú ý điều gì?",
        options: ["A. Bản quyền và giấy phép sử dụng", "B. Ảnh càng lớn càng tốt", "C. Chỉ cần đẹp", "D. Không cần ghi nguồn"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Công cụ lọc thời gian trong tìm kiếm giúp gì?",
        options: ["A. Tìm thông tin theo khoảng thời gian mong muốn", "B. Tăng dung lượng lưu trữ", "C. Tự động tóm tắt văn bản", "D. Chặn quảng cáo"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi cần tìm tài liệu tiếng Anh, cách nào nên dùng?",
        options: ["A. Dùng từ khóa tiếng Anh phù hợp", "B. Chỉ dùng tiếng Việt", "C. Gõ không dấu", "D. Dùng ký tự đặc biệt"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Kỹ năng tìm kiếm thông tin tốt giúp người học điều gì?",
        options: ["A. Tiết kiệm thời gian và tăng độ chính xác", "B. Không cần học", "C. Tránh mọi bài kiểm tra", "D. Không cần đọc tài liệu"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi có quá nhiều kết quả tìm kiếm, nên làm gì?",
        options: ["A. Thu hẹp bằng từ khóa cụ thể hơn", "B. Mở tất cả kết quả", "C. Chọn ngẫu nhiên", "D. Dừng tìm kiếm"],
        correctIndex: 0
    },
    {
        groupId: 1,
        groupName: "Tìm kiếm, khai thác dữ liệu và thông tin số",
        prompt: "Khi lưu dữ liệu quan trọng, người dùng nên làm gì?",
        options: ["A. Sao lưu định kỳ", "B. Chỉ lưu ở một nơi", "C. Gửi lên mạng xã hội", "D. Đổi tên liên tục"],
        correctIndex: 0
    },

    // --- NHÓM 2: Đánh giá thông tin, dữ liệu và nội dung số (20 câu) ---
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Tiêu chí quan trọng khi đánh giá một nguồn tin là gì?",
        options: ["A. Tác giả, nguồn, thời gian, bằng chứng", "B. Màu sắc trang web", "C. Tiêu đề gây sốc", "D. Số emoji"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Tin giả thường có dấu hiệu nào?",
        options: ["A. Tiêu đề giật gân, thiếu nguồn, kích động cảm xúc", "B. Có trích dẫn rõ ràng", "C. Có nguồn chính thức", "D. Có dữ liệu kiểm chứng"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi đọc một số liệu thống kê, cần kiểm tra điều gì?",
        options: ["A. Nguồn, thời điểm, phương pháp thu thập", "B. Phông chữ", "C. Ai chia sẻ", "D. Số lượt thích"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Một bài viết có nhiều lượt chia sẻ có chắc đúng không?",
        options: ["A. Không chắc, cần kiểm chứng", "B. Chắc chắn đúng", "C. Đúng nếu có ảnh minh họa", "D. Đúng nếu đăng ban đêm"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi AI trả lời một vấn đề chuyên môn, người dùng nên làm gì?",
        options: ["A. Đối chiếu với tài liệu gốc/chuyên gia", "B. Tin ngay", "C. Dùng nguyên văn", "D. Không cần kiểm tra"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Nguồn thông tin học thuật thường đáng tin hơn khi nào?",
        options: ["A. Có tác giả, tạp chí, năm xuất bản, tài liệu tham khảo", "B. Có tiêu đề dài", "C. Có nhiều ảnh", "D. Có bình luận tích cực"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi hai nguồn đưa thông tin khác nhau, nên làm gì?",
        options: ["A. So sánh nguồn, bằng chứng và bối cảnh", "B. Chọn nguồn mình thích", "C. Chọn nguồn ngắn hơn", "D. Bỏ qua cả hai"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "“Thiên lệch thông tin” là gì?",
        options: ["A. Thông tin bị nghiêng về một góc nhìn nhất định", "B. Thông tin được mã hóa", "C. Thông tin bị xóa", "D. Thông tin lưu trên mây"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi đánh giá ảnh trên mạng, cần chú ý điều gì?",
        options: ["A. Ảnh có thể bị chỉnh sửa hoặc lấy sai ngữ cảnh", "B. Ảnh luôn đúng", "C. Ảnh càng nét càng thật", "D. Ảnh có chữ là đúng"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Công cụ tìm kiếm ngược hình ảnh giúp gì?",
        options: ["A. Kiểm tra nguồn gốc và ngữ cảnh hình ảnh", "B. Tăng độ phân giải ảnh", "C. Tự động xóa ảnh", "D. Tạo mật khẩu"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi gặp thông tin sức khỏe/pháp luật/tài chính, nên ưu tiên nguồn nào?",
        options: ["A. Cơ quan chuyên môn/chính thức", "B. Người nổi tiếng", "C. Bình luận cộng đồng", "D. Tin nhắn chuyển tiếp"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Dấu hiệu của thông tin thiếu tin cậy là gì?",
        options: ["A. Không có nguồn, không có ngày, không có tác giả", "B. Có liên kết văn bản gốc", "C. Có dữ liệu rõ", "D. Có trích dẫn"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Vì sao cần kiểm tra ngày cập nhật của tài liệu?",
        options: ["A. Vì thông tin có thể thay đổi theo thời gian", "B. Vì ngày càng cũ càng đúng", "C. Vì để trang trí", "D. Vì bắt buộc phải có màu đỏ"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi dùng số liệu trong bài viết, cách làm đúng là gì?",
        options: ["A. Ghi rõ nguồn và thời điểm số liệu", "B. Chỉ ghi “theo Internet”", "C. Không cần ghi nguồn", "D. Tự sửa số liệu cho đẹp"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Nội dung do AI tạo ra có thể gặp vấn đề gì?",
        options: ["A. Sai sự thật, thiếu nguồn, bịa thông tin", "B. Luôn chính xác", "C. Luôn cập nhật", "D. Không cần chỉnh sửa"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi đánh giá website, tên miền nào thường đáng tin hơn trong lĩnh vực nhà nước Việt Nam?",
        options: ["A. .gov.vn", "B. .xyz không rõ chủ sở hữu", "C. blog cá nhân ẩn danh", "D. link rút gọn"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Phản ứng đúng khi nhận tin “khẩn cấp, chia sẻ ngay” là gì?",
        options: ["A. Dừng lại, kiểm chứng trước khi chia sẻ", "B. Chia sẻ ngay", "C. Chỉnh sửa rồi đăng", "D. Gửi cho tất cả bạn bè"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Đánh giá thông tin tốt giúp người học tránh điều gì?",
        options: ["A. Tin sai, lan truyền sai, ra quyết định sai", "B. Học nhanh hơn mà không cần đọc", "C. Không cần tài liệu", "D. Không cần tư duy phản biện"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Khi trích dẫn ý kiến chuyên gia, cần làm gì?",
        options: ["A. Xác minh chuyên môn và nguồn phát ngôn", "B. Chỉ cần tên nổi tiếng", "C. Dựa vào ảnh đại diện", "D. Không cần bối cảnh"],
        correctIndex: 0
    },
    {
        groupId: 2,
        groupName: "Đánh giá thông tin, dữ liệu và nội dung số",
        prompt: "Câu hỏi nào nên tự đặt ra khi đọc một thông tin số?",
        options: ["A. Ai nói, nói khi nào, dựa trên bằng chứng nào?", "B. Có nhiều màu không?", "C. Có vui không?", "D. Có đang thịnh hành không?"],
        correctIndex: 0
    },

    // --- NHÓM 3: Giao tiếp và hợp tác trong môi trường số (20 câu) ---
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi gửi email học tập/làm việc, tiêu đề nên như thế nào?",
        options: ["A. Rõ nội dung, ngắn gọn, lịch sự", "B. Để trống", "C. Viết “Gấp!!!” cho mọi email", "D. Dùng ký hiệu khó hiểu"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi gửi file qua email, nên làm gì?",
        options: ["A. Đặt tên file rõ ràng và kiểm tra trước khi gửi", "B. Gửi file bất kỳ", "C. Không cần nội dung email", "D. Gửi nhiều lần liên tục"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Trong nhóm học tập trực tuyến, hành vi nào phù hợp?",
        options: ["A. Trao đổi đúng chủ đề, tôn trọng người khác", "B. Spam tin nhắn", "C. Chia sẻ tin chưa kiểm chứng", "D. Công kích cá nhân"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi tham gia họp trực tuyến, nên làm gì?",
        options: ["A. Kiểm tra micro, camera, tên hiển thị", "B. Bật micro liên tục", "C. Vào trễ không báo", "D. Ghi âm bí mật"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "“Dấu vết số” là gì?",
        options: ["A. Dữ liệu/hành vi để lại khi hoạt động trên môi trường số", "B. Dấu vân tay trên màn hình", "C. Mật khẩu Wi-Fi", "D. Mã QR"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi bình luận trên mạng xã hội, cần chú ý điều gì?",
        options: ["A. Tôn trọng, có trách nhiệm, không xúc phạm", "B. Viết gì cũng được", "C. Dùng tài khoản ẩn danh để công kích", "D. Chia sẻ thông tin cá nhân người khác"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Công cụ nào phù hợp để cộng tác soạn thảo tài liệu nhóm?",
        options: ["A. Google Docs/Microsoft 365", "B. Máy tính cầm tay", "C. Phần mềm diệt virus", "D. Ổ cắm điện"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi làm việc nhóm trên tài liệu trực tuyến, nên sử dụng chức năng nào để góp ý?",
        options: ["A. Comment/Suggesting", "B. Xóa trực tiếp nội dung người khác", "C. Đổi toàn bộ định dạng", "D. Khóa tài liệu"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi chia sẻ tài liệu trực tuyến, quyền “View only” nghĩa là gì?",
        options: ["A. Chỉ được xem", "B. Được chỉnh sửa", "C. Được xóa", "D. Được chuyển quyền sở hữu"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi gửi tin nhắn cho giảng viên/cấp trên, cách nào phù hợp?",
        options: ["A. Chào hỏi, nêu rõ nội dung, cảm ơn", "B. Gửi “alo”", "C. Gửi sticker liên tục", "D. Viết không dấu khó hiểu"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi xảy ra hiểu nhầm trong giao tiếp số, nên làm gì?",
        options: ["A. Trao đổi lại bình tĩnh, làm rõ ngữ cảnh", "B. Đăng bài chỉ trích", "C. Chặn ngay mọi người", "D. Chia sẻ đoạn chat công khai"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi sử dụng nhóm chat công việc, nội dung nào nên tránh?",
        options: ["A. Nội dung riêng tư, xúc phạm, không liên quan", "B. Thông báo nhiệm vụ", "C. Tài liệu học tập", "D. Lịch họp"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi chia sẻ ảnh người khác lên mạng, cần điều gì?",
        options: ["A. Có sự đồng ý phù hợp", "B. Chỉ cần ảnh đẹp", "C. Không cần hỏi", "D. Gắn tên cho vui"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Kỹ năng giao tiếp số tốt giúp gì?",
        options: ["A. Làm việc hiệu quả, giảm hiểu nhầm, tăng hợp tác", "B. Gửi nhiều tin hơn", "C. Tranh luận gay gắt hơn", "D. Ẩn danh tốt hơn"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi phản hồi góp ý trực tuyến, thái độ phù hợp là gì?",
        options: ["A. Tôn trọng, tập trung vào vấn đề", "B. Công kích cá nhân", "C. Mỉa mai", "D. Không đọc nội dung"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi dùng biểu tượng cảm xúc trong môi trường học tập/làm việc, nên như thế nào?",
        options: ["A. Dùng phù hợp ngữ cảnh", "B. Dùng càng nhiều càng tốt", "C. Thay toàn bộ nội dung bằng emoji", "D. Dùng để chế giễu"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi làm việc nhóm từ xa, công cụ quản lý nhiệm vụ giúp gì?",
        options: ["A. Phân công, theo dõi tiến độ, nhắc hạn", "B. Tăng tốc Internet", "C. Tự làm thay nhiệm vụ", "D. Xóa lỗi chính tả"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi chia sẻ màn hình trong cuộc họp, nên làm gì trước?",
        options: ["A. Đóng nội dung riêng tư/nhạy cảm", "B. Mở tất cả ứng dụng", "C. Bật thông báo cá nhân", "D. Không cần kiểm tra"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Quy tắc ứng xử số yêu cầu người dùng điều gì?",
        options: ["A. Lịch sự, tôn trọng, chịu trách nhiệm", "B. Tự do xúc phạm", "C. Chia sẻ mọi dữ liệu", "D. Ẩn danh để tránh trách nhiệm"],
        correctIndex: 0
    },
    {
        groupId: 3,
        groupName: "Giao tiếp và hợp tác trong môi trường số",
        prompt: "Khi tham gia diễn đàn học tập, bài đăng tốt nên có gì?",
        options: ["A. Câu hỏi rõ, thông tin nền, thái độ cầu thị", "B. Tiêu đề mơ hồ", "C. Nội dung toàn chữ in hoa", "D. Không liên quan chủ đề"],
        correctIndex: 0
    },

    // --- NHÓM 4: Sáng tạo nội dung số (20 câu) ---
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Sáng tạo nội dung số bao gồm hoạt động nào?",
        options: ["A. Tạo, chỉnh sửa, kết hợp văn bản/hình ảnh/video/dữ liệu", "B. Chỉ xem video", "C. Chỉ tải file", "D. Chỉ đổi mật khẩu"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi dùng hình ảnh từ Internet trong slide, cần chú ý gì?",
        options: ["A. Bản quyền và ghi nguồn", "B. Chỉ cần ảnh đẹp", "C. Không cần kiểm tra", "D. Cắt logo nguồn"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Nội dung số có giấy phép Creative Commons nghĩa là gì?",
        options: ["A. Có điều kiện sử dụng nhất định theo giấy phép", "B. Muốn dùng sao cũng được", "C. Không được dùng bao giờ", "D. Chỉ dùng cho quảng cáo"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi tạo video học tập, yếu tố nào quan trọng?",
        options: ["A. Mục tiêu rõ, nội dung chính xác, âm thanh/hình ảnh phù hợp", "B. Hiệu ứng càng nhiều càng tốt", "C. Nhạc thật lớn", "D. Không cần kịch bản"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi sử dụng AI để viết bài, việc nào là cần thiết?",
        options: ["A. Kiểm tra, chỉnh sửa, ghi nhận phù hợp", "B. Nộp nguyên văn", "C. Không đọc lại", "D. Xóa mọi dấu vết nguồn"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Đạo văn là gì?",
        options: ["A. Sử dụng ý tưởng/nội dung của người khác mà không ghi nhận", "B. Tự viết bài", "C. Trích dẫn đúng nguồn", "D. Tóm tắt có ghi nguồn"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi thiết kế infographic, cần ưu tiên điều gì?",
        options: ["A. Thông tin rõ, trực quan, dễ hiểu", "B. Nhồi nhiều chữ", "D. Dùng quá nhiều màu", "D. Không cần tiêu đề"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Công cụ bảng tính giúp tạo nội dung số dạng nào?",
        options: ["A. Bảng dữ liệu, biểu đồ, phân tích số liệu", "B. Chỉ tạo ảnh đại diện", "C. Chỉ gửi tin nhắn", "D. Chỉ diệt virus"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi chỉnh sửa ảnh người khác, cần lưu ý gì?",
        options: ["A. Quyền riêng tư, sự đồng ý, mục đích sử dụng", "B. Chỉnh thế nào cũng được", "C. Đăng công khai ngay", "D. Không cần hỏi"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi tạo bài thuyết trình, cấu trúc tốt là gì?",
        options: ["A. Mở đầu, nội dung chính, kết luận", "B. Chỉ có hình ảnh", "C. Chỉ có chữ", "D. Không cần logic"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Một prompt tốt cho AI tạo nội dung nên có gì?",
        options: ["A. Vai trò, nhiệm vụ, bối cảnh, yêu cầu đầu ra", "B. Một từ bất kỳ", "C. Chỉ biểu tượng cảm xúc", "D. Không cần mục tiêu"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi dùng nhạc nền cho video công khai, cần kiểm tra gì?",
        options: ["A. Quyền sử dụng/bản quyền âm nhạc", "B. Nhạc đang thịnh hành", "C. Nhạc càng dài càng tốt", "D. Không cần kiểm tra"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi tạo nội dung số cho học tập, nên tránh điều gì?",
        options: ["A. Sao chép nguyên văn không dẫn nguồn", "B. Trình bày rõ ràng", "C. Kiểm tra thông tin", "D. Ghi tài liệu tham khảo"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Tái sử dụng nội dung số hợp pháp cần điều gì?",
        options: ["A. Tôn trọng bản quyền, giấy phép, trích dẫn", "B. Xóa tên tác giả", "C. Đăng lại không ghi nguồn", "D. Chỉnh màu là thành của mình"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi xuất bản nội dung lên mạng, người dùng cần cân nhắc điều gì?",
        options: ["A. Tác động, độ chính xác, quyền riêng tư", "B. Đăng càng nhanh càng tốt", "C. Không cần đọc lại", "D. Chỉ cần nhiều lượt xem"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi làm poster, nguyên tắc thiết kế cơ bản là gì?",
        options: ["A. Ít chữ, điểm nhấn rõ, thông điệp dễ nhớ", "B. Càng nhiều chữ càng tốt", "C. Không cần khoảng trắng", "D. Dùng mọi font chữ"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi tạo biểu đồ, cần đảm bảo điều gì?",
        options: ["A. Dữ liệu đúng, nhãn rõ, không gây hiểu lầm", "B. Chọn biểu đồ đẹp là đủ", "C. Ẩn nguồn dữ liệu", "D. Phóng đại tùy ý"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Lập trình cơ bản trong năng lực số giúp gì?",
        options: ["A. Hiểu logic, tự động hóa, giải quyết vấn đề", "B. Chỉ dành cho hacker", "C. Không liên quan học tập", "D. Chỉ để chơi game"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Khi dùng mẫu thiết kế có sẵn, nên làm gì?",
        options: ["A. Điều chỉnh phù hợp và tuân thủ điều kiện sử dụng", "B. Giữ nguyên mọi thứ", "C. Xóa thông tin nguồn", "D. Bán lại ngay"],
        correctIndex: 0
    },
    {
        groupId: 4,
        groupName: "Sáng tạo nội dung số",
        prompt: "Sản phẩm số có chất lượng cần đạt tiêu chí nào?",
        options: ["A. Đúng mục tiêu, chính xác, dễ dùng, có trách nhiệm", "B. Nhiều hiệu ứng", "C. Dung lượng lớn", "D. Đăng thật nhanh"],
        correctIndex: 0
    },

    // --- NHÓM 5: An toàn, bảo mật và trách nhiệm số (20 câu) ---
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Mật khẩu mạnh nên có đặc điểm nào?",
        options: ["A. Dài, khó đoán, gồm chữ/số/ký tự", "B. Ngày sinh", "C. 123456", "D. Tên bản thân"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Xác thực hai yếu tố giúp gì?",
        options: ["A. Tăng bảo vệ tài khoản", "B. Tăng tốc Internet", "C. Xóa quảng cáo", "D. Tự động tạo nội dung"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi nhận email yêu cầu nhập mật khẩu qua link lạ, nên làm gì?",
        options: ["A. Không bấm link, kiểm tra nguồn gửi", "B. Nhập ngay", "C. Chuyển tiếp cho bạn bè", "D. Tải file đính kèm"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Phishing là gì?",
        options: ["A. Lừa đảo nhằm lấy thông tin/tài khoản", "B. Tăng tốc tải file", "C. Sao lưu dữ liệu", "D. Mã hóa hợp pháp"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi dùng Wi-Fi công cộng, nên tránh điều gì?",
        options: ["A. Đăng nhập tài khoản quan trọng/giao dịch nhạy cảm nếu không an toàn", "B. Đọc tin tức", "C. Tìm đường", "D. Xem thời tiết"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Dữ liệu cá nhân gồm thông tin nào?",
        options: ["A. Họ tên, số điện thoại, địa chỉ, CCCD, tài khoản", "B. Thời tiết", "C. Tin tức chung", "D. Hướng dẫn sử dụng phần mềm"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi cài ứng dụng mới, cần chú ý điều gì?",
        options: ["A. Quyền truy cập và nguồn tải", "B. Màu biểu tượng", "C. Số lượng hình nền", "D. Tên ứng dụng ngắn"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Sao lưu dữ liệu quan trọng giúp gì?",
        options: ["A. Giảm mất mát khi thiết bị hỏng/mất", "B. Làm máy nặng hơn", "C. Xóa virus tự động", "D. Tăng độ sáng màn hình"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi chia sẻ CCCD/số tài khoản lên mạng, rủi ro là gì?",
        options: ["A. Bị lợi dụng danh tính/lừa đảo", "B. Tăng uy tín", "C. Tăng lượt theo dõi", "D. Không có rủi ro"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Phần mềm diệt mã độc có tác dụng gì?",
        options: ["A. Phát hiện, ngăn chặn phần mềm độc hại", "B. Tạo bài thuyết trình", "C. Tăng dung lượng ổ cứng", "D. Tự động học ngoại ngữ"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Cập nhật hệ điều hành/ứng dụng giúp gì?",
        options: ["A. Vá lỗi bảo mật và cải thiện tính năng", "B. Làm mất mọi dữ liệu", "C. Chỉ để đổi giao diện", "D. Không có tác dụng"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi cho người khác mượn thiết bị, nên làm gì?",
        options: ["A. Đăng xuất/khóa dữ liệu riêng tư", "B. Giao toàn bộ mật khẩu", "C. Mở sẵn email", "D. Tắt bảo mật"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Hành vi nào là thiếu trách nhiệm số?",
        options: ["A. Chia sẻ thông tin cá nhân người khác không xin phép", "B. Ghi nguồn tài liệu", "C. Kiểm chứng tin", "D. Tôn trọng người khác"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi bị bắt nạt trực tuyến, nên làm gì?",
        options: ["A. Lưu bằng chứng, chặn/báo cáo, nhờ hỗ trợ", "B. Trả đũa bằng xúc phạm", "C. Im lặng tuyệt đối", "D. Chia sẻ rộng rãi hơn"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi tạo tài khoản mới, thông tin nào không nên công khai tùy tiện?",
        options: ["A. Số điện thoại, địa chỉ, giấy tờ cá nhân", "B. Sở thích chung", "C. Tên môn học", "D. Chủ đề học tập"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Quyền riêng tư số là gì?",
        options: ["A. Quyền kiểm soát thông tin cá nhân trong môi trường số", "B. Quyền dùng mạng miễn phí", "C. Quyền tải mọi nội dung", "D. Quyền xóa bài người khác"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi phát hiện tài khoản bị đăng nhập lạ, nên làm gì đầu tiên?",
        options: ["A. Đổi mật khẩu và đăng xuất khỏi thiết bị lạ", "B. Bỏ qua", "C. Đăng công khai mật khẩu", "D. Tạo thêm tài khoản giả"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Khi dùng AI, dữ liệu nào không nên nhập tùy tiện?",
        options: ["A. Dữ liệu cá nhân, bí mật, thông tin nhạy cảm", "B. Câu hỏi học tập chung", "C. Yêu cầu tóm tắt công khai", "D. Ý tưởng không nhạy cảm"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "Sức khỏe số liên quan đến điều gì?",
        options: ["A. Quản lý thời gian màn hình, tư thế, cân bằng đời sống", "B. Tốc độ Wi-Fi", "C. Màu điện thoại", "D. Số lượng ứng dụng"],
        correctIndex: 0
    },
    {
        groupId: 5,
        groupName: "An toàn, bảo mật và trách nhiệm số",
        prompt: "An toàn số tốt giúp người dùng điều gì?",
        options: ["A. Bảo vệ tài khoản, dữ liệu, danh tiếng và quyền riêng tư", "B. Không cần học kỹ năng khác", "C. Tránh mọi trách nhiệm", "D. Dùng mạng ẩn danh hoàn toàn"],
        correctIndex: 0
    },

    // --- NHÓM 6: Giải quyết vấn đề bằng công nghệ và AI (20 câu) ---
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi gặp lỗi phần mềm, bước đầu tiên nên làm gì?",
        options: ["A. Xác định lỗi, đọc thông báo lỗi, thử cách xử lý cơ bản", "B. Xóa ngay phần mềm", "C. Đổ lỗi cho thiết bị", "D. Cài phần mềm lạ"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi chọn công cụ số cho một nhiệm vụ, cần dựa vào gì?",
        options: ["A. Mục tiêu, tính năng, chi phí, độ an toàn", "B. Công cụ đang nổi tiếng", "C. Giao diện nhiều màu", "D. Bạn bè dùng gì thì dùng"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "AI phù hợp nhất trong trường hợp nào?",
        options: ["A. Hỗ trợ gợi ý, tóm tắt, phân tích, sáng tạo có kiểm soát", "B. Thay thế hoàn toàn tư duy", "C. Ra quyết định pháp lý cuối cùng", "D. Làm mọi việc không cần kiểm tra"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi AI đưa kết quả sai, người dùng nên làm gì?",
        options: ["A. Kiểm tra lại, sửa prompt, đối chiếu nguồn", "B. Tin tiếp", "C. Đăng ngay", "D. Xóa tài khoản"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Kỹ năng tự học công nghệ mới quan trọng vì sao?",
        options: ["A. Công nghệ thay đổi nhanh, cần thích nghi liên tục", "B. Không cần học nếu biết một phần mềm", "C. Chỉ chuyên gia mới cần", "D. Học một lần là đủ"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi cần tự động hóa công việc lặp lại, công cụ nào có thể hữu ích?",
        options: ["A. Bảng tính, macro, workflow, AI", "B. Trình nghe nhạc", "C. Hình nền", "D. Máy chiếu"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi máy tính chạy chậm, cách xử lý phù hợp là gì?",
        options: ["A. Kiểm tra ứng dụng nền, dung lượng, cập nhật, mã độc", "B. Đập máy", "C. Tải thêm phần mềm lạ", "D. Mở nhiều tab hơn"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi không biết dùng một công cụ số, nên làm gì?",
        options: ["A. Tìm hướng dẫn, thử nghiệm an toàn, hỏi người có kinh nghiệm", "B. Bỏ cuộc", "C. Dùng sai cũng được", "D. Chia sẻ mật khẩu để người khác làm"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi giải quyết vấn đề bằng công nghệ, bước nào nên có?",
        options: ["A. Xác định vấn đề, chọn công cụ, thử nghiệm, đánh giá kết quả", "B. Chọn công cụ trước khi hiểu vấn đề", "C. Làm theo cảm tính", "D. Không cần đánh giá"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Prompt nào tốt hơn khi hỏi AI?",
        options: ["A. “Đóng vai chuyên gia, lập bảng 5 bước, có ví dụ”", "B. “Làm đi”", "C. “Nói gì đó”", "D. “Nhanh”"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi dùng AI cho học tập, cách sử dụng có trách nhiệm là gì?",
        options: ["A. Dùng để hỗ trợ hiểu bài, kiểm tra lại và tự trình bày", "B. Nộp nguyên văn", "C. Nhờ AI làm toàn bộ bài thi", "D. Không cần ghi nhận"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi một công cụ số không phù hợp, nên làm gì?",
        options: ["A. Đánh giá nguyên nhân và chọn công cụ khác", "B. Cố dùng bằng mọi giá", "C. Dừng toàn bộ công việc", "D. Xóa dữ liệu"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Dấu hiệu cho thấy cần nâng cấp kỹ năng số là gì?",
        options: ["A. Thường xuyên phụ thuộc người khác cho thao tác cơ bản", "B. Biết tự học công cụ mới", "C. Bảo mật tốt", "D. Quản lý file rõ ràng"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi phân tích dữ liệu đơn giản, công cụ nào thường phù hợp?",
        options: ["A. Excel/Google Sheets", "B. Trình phát nhạc", "C. Máy ảnh", "D. Ứng dụng thời tiết"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi muốn cải tiến quy trình làm việc bằng công nghệ, cần bắt đầu từ đâu?",
        options: ["A. Xác định điểm nghẽn và dữ liệu đầu vào/đầu ra", "B. Mua phần mềm trước", "C. Tạo nhóm chat mới", "D. Đổi logo"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi AI tạo nội dung không đúng yêu cầu, nên cải thiện bằng cách nào?",
        options: ["A. Viết lại prompt rõ bối cảnh, tiêu chí, định dạng", "B. Hỏi y hệt nhiều lần", "C. Tin kết quả đầu tiên", "D. Không cần chỉnh"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Công nghệ số giúp giải quyết vấn đề học tập như thế nào?",
        options: ["A. Tìm tài liệu, luyện tập, phản hồi, cộng tác, quản lý tiến độ", "B. Thay học hoàn toàn", "C. Loại bỏ nhu cầu tư duy", "D. Đảm bảo điểm cao tự động"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Khi sử dụng công cụ mới, yếu tố an toàn nào cần kiểm tra?",
        options: ["A. Nhà cung cấp, quyền truy cập, chính sách dữ liệu", "B. Màu giao diện", "C. Số biểu tượng", "D. Tên có ngắn không"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Người có năng lực giải quyết vấn đề số tốt thường có đặc điểm nào?",
        options: ["A. Linh hoạt, biết thử nghiệm, biết kiểm tra và học từ lỗi", "B. Chỉ làm theo một cách", "C. Sợ công nghệ mới", "D. Không cần phản hồi"],
        correctIndex: 0
    },
    {
        groupId: 6,
        groupName: "Giải quyết vấn đề bằng công nghệ và AI",
        prompt: "Mục tiêu cuối cùng của giải quyết vấn đề bằng công nghệ là gì?",
        options: ["A. Tạo ra kết quả hiệu quả, an toàn, có giá trị", "B. Dùng thật nhiều ứng dụng", "C. Thay thế mọi con người", "D. Làm nhanh dù sai"],
        correctIndex: 0
    }
];
