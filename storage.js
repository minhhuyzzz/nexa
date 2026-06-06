/**
 * NEXA STORAGE MANAGEMENT SYSTEM
 * Quản lý tập trung dữ liệu người dùng, kết quả khảo thí và cấu hình trạng thái
 */

const NexaStorage = {
    // --- KHÓA LƯU TRỮ TRÊN LOCALSTORAGE ---
    KEYS: {
        USER_PROFILE: 'nexa_user_profile',
        CURRENT_TEST: 'nexa_current_test_session',
        TEST_HISTORY: 'nexa_test_history_logs'
    },

    // --- 1. QUẢN LÝ TÀI KHOẢN (USER PROFILE) ---
    saveUserAccount: function(userData) {
        if (!userData) return false;
        try {
            localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(userData));
            return true;
        } catch (e) {
            console.error("Lỗi lưu trữ tài khoản:", e);
            return false;
        }
    },

    getUserAccount: function() {
        const data = localStorage.getItem(this.KEYS.USER_PROFILE);
        return data ? JSON.parse(data) : null;
    },

    clearUserAccount: function() {
        localStorage.removeItem(this.KEYS.USER_PROFILE);
    },

    // --- 2. QUẢN LÝ PHIÊN KHẢO THÍ HIỆN TẠI (CURRENT TEST SESSION) ---
    saveCurrentSession: function(correctCount, totalQuestions, rankLabel, diagnosisText) {
        const sessionData = {
            timestamp: new Date().toISOString(),
            correctCount: correctCount,
            totalQuestions: totalQuestions,
            rankLabel: rankLabel,
            diagnosis: diagnosisText
        };
        try {
            localStorage.setItem(this.KEYS.CURRENT_TEST, JSON.stringify(sessionData));
            // Đồng thời lưu vào lịch sử lưu trữ dài hạn
            this.pushToHistoryLogs(sessionData);
            return true;
        } catch (e) {
            console.error("Lỗi lưu phiên khảo thí:", e);
            return false;
        }
    },

    getCurrentSession: function() {
        const data = localStorage.getItem(this.KEYS.CURRENT_TEST);
        return data ? JSON.parse(data) : null;
    },

    clearCurrentSession: function() {
        localStorage.removeItem(this.KEYS.CURRENT_TEST);
    },

    // --- 3. QUẢN LÝ LỊCH SỬ TIẾN TRÌNH KHẢO THÍ (HISTORY LOGS) ---
    getHistoryLogs: function() {
        const data = localStorage.getItem(this.KEYS.TEST_HISTORY);
        return data ? JSON.parse(data) : [];
    },

    pushToHistoryLogs: function(sessionData) {
        let history = this.getHistoryLogs();
        history.unshift(sessionData); // Đẩy kết quả mới nhất lên đầu danh sách
        // Giới hạn tối đa lưu 10 phiên gần nhất để tránh tràn bộ nhớ trình duyệt
        if (history.length > 10) history.pop();
        localStorage.setItem(this.KEYS.TEST_HISTORY, JSON.stringify(history));
    }
};




// =========================================================================
// --- KHỐI TIỆN ÍCH GIAO DIỆN DÙNG CHUNG (NEXA UI UTILITIES) ---
// Tách toàn bộ logic xử lý chuyển đổi trạng thái giao diện form ra khỏi file HTML
// =========================================================================
const NexaUI = {
    selectRegisterRole: function(role) {
        // Tìm các phần tử DOM trên form đăng ký
        const regRoleInput = document.getElementById('reg-role');
        const tLearner = document.getElementById('tab-learner');
        const tAdmin = document.getElementById('tab-admin');
        const dynamicFieldLabel = document.querySelector('#dynamic-field label');
        const dynamicFieldInput = document.querySelector('#dynamic-field input');
        const nameLabel = document.getElementById('lbl-name');

        // Phòng ngừa lỗi nếu trang hiện tại không chứa các thẻ này (tránh crash script)
        if (!regRoleInput || !tLearner || !tAdmin || !dynamicFieldLabel || !dynamicFieldInput || !nameLabel) {
            console.warn("NexaUI: Không tìm thấy đầy đủ các phần tử form đăng ký trên trang này.");
            return;
        }

        // Cập nhật giá trị thẻ ẩn
        regRoleInput.value = role;

        // Thay đổi class CSS và nội dung văn bản theo vai trò được chọn
        if (role === 'learner') {
            tLearner.className = "flex-1 py-2.5 text-sm font-bold bg-white text-[#003366] shadow-sm rounded-md transition-all cursor-pointer";
            tAdmin.className = "flex-1 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-all cursor-pointer";
            nameLabel.innerText = "Họ và tên người học";
            dynamicFieldLabel.innerText = "Mã số sinh viên (SSO)";
            dynamicFieldInput.placeholder = "Nhập MSSV định danh...";
        } else {
            tAdmin.className = "flex-1 py-2.5 text-sm font-bold bg-white text-[#003366] shadow-sm rounded-md transition-all cursor-pointer";
            tLearner.className = "flex-1 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-all cursor-pointer";
            nameLabel.innerText = "Họ và tên Giảng viên / Quản lý";
            dynamicFieldLabel.innerText = "Tên Cơ sở đào tạo / Nhà trường";
            dynamicFieldInput.placeholder = "Tên đơn vị, khoa, trường học...";
        }
    }
};