/**
 * NEXA GLOBAL SIDEBAR - ADMIN PORTAL (FIXED SYNTAX)
 */
document.addEventListener("DOMContentLoaded", function() {
    // Tự động tìm tên file HTML đang chạy để xử lý trạng thái Active Tab
    const currentPath = window.location.pathname.split("/").pop();

    const sidebarHTML = `
    <aside class="hidden md:flex flex-col h-screen fixed left-0 top-0 py-6 border-r border-slate-200 bg-white w-64 z-50">
        <div class="mb-6 px-6 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-[#ffdad6]/60 flex items-center justify-center border border-[#ffdad6]">
                <span class="material-symbols-outlined text-[#F43F5E]" style="font-variation-settings: 'FILL' 1;">admin_panel_settings</span>
            </div>
            <div class="leading-none">
                <h1 class="font-extrabold text-base text-[#F43F5E] tracking-tight uppercase">NEXA Admin</h1>
                <p class="text-[10px] text-slate-400 font-bold mt-1">Hệ thống quản trị</p>
            </div>
        </div>
        
        <nav class="flex-grow px-4 space-y-1 overflow-y-auto">
            
            <a href="dashboard_admin.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'dashboard_admin.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'dashboard_admin.html' ? 1 : 0};">dashboard</span>
                <span>Tổng quan</span>
            </a>
            
            <a href="quanlinguoidung.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_users.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">group</span>
                <span>Quản lý người dùng</span>
            </a>
            
            <a href="quanlivaitro.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_roles.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">rule_folder</span>
                <span>Quản lý vai trò</span>
            </a>
            
            <a href="khungnanglucso.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_framework.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">psychology</span>
                <span>Khung năng lực số</span>
            </a>
            
            <a href="quanlicauhoi.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_questions.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">quiz</span>
                <span>Quản lý câu hỏi</span>
            </a>
            
            <a href="quanlibaidanhgia.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_assessments.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">assessment</span>
                <span>Quản lý bài đánh giá</span>
            </a>
            
            <a href="quanlinhiemvu.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_tasks.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">assignment</span>
                <span>Quản lý nhiệm vụ</span>
            </a>
            
            <a href="quanlichungnhan.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_certificates.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">verified</span>
                <span>Quản lý chứng chỉ</span>
            </a>
            
            <a href="quanlidoanhnghiep.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_companies.html' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">business</span>
                <span>Quản lý đơn vị</span>
            </a>
            
        </nav>

        <div class="px-4 mt-auto pt-4 border-t border-slate-100 flex flex-col gap-1">
            <a href="caidatadmin.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'admin_settings.html' ? 'bg-[#1e3a8a] text-white' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined">settings</span>
                <span>Cài đặt</span>
            </a>
            <a href="../index.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
                <span class="material-symbols-outlined">logout</span>
                <span>Đăng xuất</span>
            </a>
        </div>
    </aside>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
});