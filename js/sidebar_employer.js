/**
 * NEXA GLOBAL SIDEBAR - EMPLOYER PORTAL (EXACT VISUAL MATCH)
 */
document.addEventListener("DOMContentLoaded", function() {
    // Tự động tìm tên file HTML đang chạy để xử lý trạng thái Active Tab làm sáng nút
    const currentPath = window.location.pathname.split("/").pop();

    const sidebarHTML = `
    <aside class="hidden md:flex flex-col h-screen fixed left-0 top-0 py-6 border-r border-slate-200 bg-white w-64 z-50">
        <div class="px-6 mb-8 flex flex-col items-start">
            <h1 class="font-headline-lg text-2xl font-black text-[#00236f] tracking-tight">NEXA</h1>
            <p class="font-label-sm text-xs font-bold text-slate-400 mt-1">Hệ thống Doanh nghiệp</p>
        </div>
        
        <nav class="flex-grow px-4 space-y-1 overflow-y-auto">
            
            <a href="dashboard_employer.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'dashboard_employer.html' ? 'bg-[#1b365d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'dashboard_employer.html' ? 1 : 0};">dashboard</span>
                <span>Tổng quan</span>
            </a>
            
            <a href="timkiem.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'timkiem_ungvien.html' ? 'bg-[#1b365d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">person_search</span>
                <span>Tìm kiếm ứng viên</span>
            </a>
            
            <a href="xacthuc.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'xacthuc_cert.html' ? 'bg-[#1b365d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">verified</span>
                <span>Xác thực chứng chỉ</span>
            </a>
            
            <a href="luuhoso.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'saved_candidates.html' ? 'bg-[#1b365d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">bookmark</span>
                <span>Ứng viên đã lưu</span>
            </a>
            
            <a href="caidat.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'caidatDN.html' ? 'bg-[#1b365d] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
                <span class="material-symbols-outlined">settings</span>
                <span>Cài đặt</span>
            </a>
            
        </nav>

        <div class="px-4 mt-auto pt-4 border-t border-slate-100 space-y-3">
            <button class="w-full bg-[#00236f] hover:bg-[#1b365d] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs tracking-wider uppercase border-b-2 border-slate-900">
                Nâng cấp tài khoản
            </button>
            <div class="flex flex-col gap-1 text-slate-500 font-bold">
                <a class="flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm hover:bg-slate-50 hover:text-slate-800 transition-all" href="trungtamhotro.html">
                    <span class="material-symbols-outlined">help</span>
                    <span>Trung tâm hỗ trợ</span>
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