/**
 * NEXA EVALUATION SCALES
 * official: Dành cho bài thi 120 câu (Full DigComp 2.2)
 * freeTest: Dành cho bài test nhanh 30 câu (Phản xạ)
 */

const nexaScales = {
    official: {
        level5: { min: 109, label: "Level 5: Chuyên gia", diagnosis: "Xuất sắc tuyệt đối. Bạn làm chủ hoàn toàn tư duy và kỹ năng số." },
        level4: { min: 97, label: "Level 4: Tốt", diagnosis: "Tư duy giải quyết vấn đề nhạy bén, thích nghi nhanh với công nghệ." },
        level3: { min: 73, label: "Level 3: Khá", diagnosis: "Kỹ năng số ổn định, nắm vững chuẩn DigComp 2.2 cấp độ 3." },
        level2: { min: 49, label: "Level 2: Trung bình", diagnosis: "Có kiến thức căn bản nhưng cần rèn luyện thêm tính thực chiến." },
        level1: { min: 0, label: "Level 1: Yếu/Cần cải thiện", diagnosis: "Cần củng cố thao tác và tư duy công nghệ cơ bản." }
    },
    freeTest: {
        level5: { min: 28, label: "Level 5: Thành thạo", diagnosis: "Phản xạ công nghệ cực nhạy bén, làm chủ môi trường số hoàn toàn." },
        level4: { min: 24, label: "Level 4: Tốt", diagnosis: "Tốc độ xử lý tình huống số xuất sắc, tư duy đổi mới cao." },
        level3: { min: 18, label: "Level 3: Khá", diagnosis: "Khả năng ứng dụng kỹ năng số ổn định, đáp ứng tốt công việc." },
        level2: { min: 12, label: "Level 2: Đạt cơ bản", diagnosis: "Cần cải thiện tốc độ phản xạ và làm quen với công cụ mới." },
        level1: { min: 0, label: "Level 1: Cơ bản yếu", diagnosis: "Phụ thuộc thủ công, cần được đào tạo lại kỹ năng số căn bản." }
    }
};