/**
 * NEXA GLOBAL SIDEBAR - LEARNER PORTAL (EXACT VISUAL MATCH)
 */
document.addEventListener("DOMContentLoaded", function() {
    // Tự động tìm tên file HTML đang chạy để xử lý trạng thái Active Tab làm sáng nút
    const currentPath = window.location.pathname.split("/").pop();

    const sidebarHTML = `
    <aside class="hidden md:flex flex-col h-screen fixed left-0 top-0 py-6 border-r border-slate-200 bg-white w-64 z-50">
        <div class="px-6 mb-8 flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-[#00236f] flex items-center justify-center text-white font-black text-xl shadow-sm">N</div>
            <div class="leading-none">
                <h1 class="font-black text-base text-[#00236f] tracking-tight block">NEXA Intelligence</h1>
                <p class="text-[9px] text-slate-400 font-bold mt-1 block">Nền tảng đánh giá năng lực số AI</p>
            </div>
        </div>
        
        <nav class="flex-grow px-4 space-y-1 overflow-y-auto">
            
            <a href="dashboard_learner.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'dashboard_learner.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'dashboard_learner.html' ? 1 : 0};">dashboard</span>
                <span>Tổng quan</span>
            </a>
            
            <a href="baidanhgia.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'baidanhgia.html' || currentPath === 'dashboard_test_120.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">assignment</span>
                <span>Bài đánh giá</span>
            </a>
            
            <a href="nhiemvu.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'practical_task_list.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">task</span>
                <span>Nhiệm vụ</span>
            </a>
            
            <a href="chungchi.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'chungchi.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">verified</span>
                <span>Chứng chỉ</span>
            </a>
            
            <a href="nangluc.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'nangluc.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">radar</span>
                <span>Năng lực</span>
            </a>
            
            <a href="hosonangluc.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'hosonangluc.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">folder_shared</span>
                <span>Hồ sơ năng lực</span>
            </a>
            
            <a href="phantich.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'phantich.html' ? 'bg-[#2a439b] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">analytics</span>
                <span>Phân tích</span>
            </a>
            
        </nav>

        <div class="px-4 mt-auto pt-4 border-t border-slate-100 space-y-4">
            <div class="p-4 bg-[#f4f3fa] border border-slate-200 rounded-2xl text-center shadow-inner">
                <p class="text-xs font-bold text-slate-600 mb-3">Mở khóa thông tin chi tiết từ AI</p>
                <button class="w-full py-2.5 bg-[#00236f] hover:bg-[#1b365d] text-white rounded-xl text-xs font-black shadow-md transition-all active:scale-95 border-none cursor-pointer">
                    Nâng cấp tài khoản
                </button>
            </div>
            
            <div class="flex flex-col gap-0.5 text-slate-500 font-bold">
                <a class="flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm hover:bg-slate-50 hover:text-slate-800 transition-all" href="trogiup.html">
                    <span class="material-symbols-outlined">help</span>
                    <span>Trợ giúp</span>
                </a>
                <a class="flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm hover:bg-red-50 hover:text-red-600 transition-all" href="../index.html">
                    <span class="material-symbols-outlined">logout</span>
                    <span>Đăng xuất</span>
                </a>
            </div>
        </div>
    </aside>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
});