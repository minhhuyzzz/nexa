// --- QUẢN LÝ TRẠNG THÁI HỆ THỐNG ---
let appCurrentIndex = 0;
let appSelectedOption = null;
let appTimerInterval = null;
let appTimeLeft = 30;
let appCorrectCount = 0; // Đếm chính xác số câu trả lời đúng
let quizData = []; 

// --- THUẬT TOÁN XÁO TRỘN ĐỀ VÀ ĐÁP ÁN ---
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Trích xuất 30 câu hỏi: Lấy ngẫu nhiên đúng 5 câu từ mỗi nhóm (1 -> 6)
function getQuizQuestions() {
    let selectedQuestions = [];
    if (typeof appQuestionBank === 'undefined') {
        console.error("LỖI: Không tìm thấy biến appQuestionBank! Hãy kiểm tra file Questions.js");
        return [];
    }
    
    for (let i = 1; i <= 6; i++) {
        let group = appQuestionBank.filter(q => q.groupId === i);
        let shuffledGroup = shuffleArray(group).slice(0, 5);
        selectedQuestions.push(...shuffledGroup);
    }
    return shuffleArray(selectedQuestions); // Trộn chéo lại một lần nữa trước khi phát đề
}

// --- ĐIỀU KHIỂN LUỒNG GIAO DIỆN (UI/UX FLOW) ---
function processGuestRegistration() {
    const nameInput = document.getElementById('guest-name');
    const name = nameInput ? nameInput.value.trim() : "";
    if (!name) { 
        alert("Vui lòng nhập họ và tên trước khi bắt đầu bài khảo thí!"); 
        return; 
    }
    
    quizData = getQuizQuestions();
    if (quizData.length === 0) {
        alert("Có lỗi xảy ra khi khởi tạo ngân hàng câu hỏi. Hãy nhấn F12 để kiểm tra lỗi Console.");
        return;
    }
    
    // Chuyển màn hình từ Đăng Ký sang Phòng Thi
    document.getElementById('quiz-step-register').classList.add('hidden');
    document.getElementById('quiz-step-engine').classList.remove('hidden');
    
    appCurrentIndex = 0;
    appCorrectCount = 0;
    renderQuestion(0);
}

function renderQuestion(index) {
    // Dọn dẹp dứt điểm Interval cũ trước khi dựng câu hỏi mới
    if (appTimerInterval) {
        clearInterval(appTimerInterval);
        appTimerInterval = null;
    }
    appSelectedOption = null;
    
    // Khóa nút Tiếp tục và chuyển về trạng thái xám (Chưa chọn đáp án)
    const btnNext = document.getElementById('app-btn-next');
    if (btnNext) {
        btnNext.disabled = true;
        btnNext.className = "px-8 py-3 bg-slate-200 text-slate-400 font-black rounded-xl text-xs cursor-not-allowed flex items-center gap-2 transition-all";
    }
    
    const q = quizData[index];
    
    // Cập nhật giao diện thanh tiến trình & số thứ tự câu hỏi
    document.getElementById('app-counter-txt').innerText = `CÂU HỎI ${index + 1} / ${quizData.length}`;
    document.getElementById('app-progress-bar').style.width = `${((index + 1) / quizData.length) * 100}%`;
    document.getElementById('app-question-prompt').innerText = q.prompt;
    
    // Bóc tách đáp án và xáo trộn vị trí (Phá vỡ quy luật đáp án A luôn đúng)
    let optionsWithMeta = q.options.map((opt, idx) => ({
        text: opt, 
        isCorrect: (idx === q.correctIndex)
    }));
    let shuffledOptions = shuffleArray(optionsWithMeta);
    
    const container = document.getElementById('app-options-container');
    container.innerHTML = '';
    
    // Sinh các nút bấm đáp án động
    shuffledOptions.forEach((opt, idx) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = "option-btn w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-iuhBlue hover:bg-blue-50 transition text-sm font-semibold flex items-center gap-3 shadow-sm cursor-pointer";
        card.onclick = () => selectOption(idx, card, opt.isCorrect);
        
        // Loại bỏ ký tự gốc "A.", "B." thừa ở đầu chuỗi text của câu hỏi để hiển thị đẹp mắt
        let cleanedText = opt.text.replace(/^[A-D]\.\s*/, '');
        card.innerHTML = `<div class="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs border border-slate-200">${String.fromCharCode(65 + idx)}</div><span>${cleanedText}</span>`;
        container.appendChild(card);
    });
    
    startTimer();
}

function startTimer() {
    // Ép dọn dẹp một lần nữa để phòng ngừa lỗi đúp luồng đếm ngược chạy song song
    if (appTimerInterval) clearInterval(appTimerInterval);
    
    appTimeLeft = 30;
    document.getElementById('app-timer-sec').innerText = appTimeLeft;
    
    appTimerInterval = setInterval(() => {
        appTimeLeft--;
        document.getElementById('app-timer-sec').innerText = appTimeLeft;
        if (appTimeLeft <= 0) {
            clearInterval(appTimerInterval);
            appTimerInterval = null;
            handleNext(); // Tự động nộp bài câu hiện tại khi hết thời gian phản xạ
        }
    }, 1000);
}

function selectOption(idx, cardNode, isCorrect) {
    appSelectedOption = isCorrect;
    
    // Reset hiệu ứng của toàn bộ các nút đáp án khác
    const btns = document.getElementById('app-options-container').children;
    for (let b of btns) {
        b.className = "option-btn w-full text-left p-4 rounded-xl border border-slate-200 bg-white transition text-sm font-semibold flex items-center gap-3 shadow-sm cursor-pointer";
    }
    
    // Kích hoạt trạng thái Active (IUH Blue) cho nút được chọn
    cardNode.className = "w-full text-left p-4 rounded-xl border-2 border-iuhBlue bg-blue-50/50 transition text-sm font-semibold flex items-center gap-3 shadow-md cursor-pointer";
    
    // Mở khóa nút Tiếp tục và thêm hiệu ứng sáng rực
    const btnNext = document.getElementById('app-btn-next');
    if (btnNext) {
        btnNext.disabled = false;
        btnNext.className = "px-8 py-3 bg-iuhBlue hover:bg-iuhBlue-light text-white font-black rounded-xl text-xs transition flex items-center gap-2 shadow-lg cursor-pointer";
    }
}

function handleNext() {
    if (appTimerInterval) {
        clearInterval(appTimerInterval);
        appTimerInterval = null;
    }
    
    // Nếu chọn đúng, tăng tổng số câu trả lời đúng lên 1 đơn vị
    if (appSelectedOption === true) {
        appCorrectCount++;
    }
    
    appCurrentIndex++;
    if (appCurrentIndex < quizData.length) {
        renderQuestion(appCurrentIndex);
    } else {
        finishQuiz();
    }
}

// --- KẾT THÚC VÀ XUẤT BÁO CÁO CHẨN ĐOÁN AI ---
function finishQuiz() {
    if (appTimerInterval) {
        clearInterval(appTimerInterval);
        appTimerInterval = null;
    }

    document.getElementById('quiz-step-engine').classList.add('hidden');
    document.getElementById('quiz-step-result').classList.remove('hidden');
    
    // Ghi nhận tên thí sinh lên màn hình kết quả
    const name = document.getElementById('guest-name').value.trim();
    document.getElementById('guest-result-welcome').innerText = `Thí sinh: ${name}`;
    
    // Hiển thị số câu đúng thực chứng dạng X / 30 câu
    document.getElementById('app-final-score-txt').innerHTML = `${appCorrectCount}<span class="text-xl text-slate-300">/${quizData.length} câu</span>`;
    
    // Áp dụng thuật toán so khớp Thang đo Test nhanh (freeTest) chuẩn xác của bạn
    if (typeof nexaScales === 'undefined') {
        console.error("LỖI: Không tìm thấy biến nexaScales! Hãy kiểm tra file nexa-scale.js");
        return;
    }
    
    const scale = nexaScales.freeTest;
    let rank;
    
    if (appCorrectCount >= scale.level5.min) rank = scale.level5;
    else if (appCorrectCount >= scale.level4.min) rank = scale.level4;
    else if (appCorrectCount >= scale.level3.min) rank = scale.level3;
    else if (appCorrectCount >= scale.level2.min) rank = scale.level2;
    else rank = scale.level1;
    
    // Đẩy dữ liệu chẩn đoán động ra giao diện HTML công bộ kết quả
    document.getElementById('app-rank-label').innerText = rank.label;
    document.getElementById('app-diagnostic-summary-txt').innerText = rank.diagnosis;

    // TỰ ĐỘNG GHI KẾT QUẢ VÀO FILE STORAGE TRUNG TÂM (Đã liên kết với đối tượng NexaStorage mới)
    if (typeof NexaStorage !== 'undefined') {
        NexaStorage.saveCurrentSession(appCorrectCount, quizData.length, rank.label, rank.diagnosis);
    } else {
        console.warn("Cảnh báo: Không tìm thấy module NexaStorage. Hãy kiểm tra xem file storage.js đã được nhúng chưa.");
    }
}