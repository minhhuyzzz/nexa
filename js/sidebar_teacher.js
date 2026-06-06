/**
 * NEXA GLOBAL SIDEBAR - TEACHER PORTAL (EXACT VISUAL MATCH)
 */
document.addEventListener("DOMContentLoaded", function() {
    // Tự động tìm tên file HTML đang chạy để xử lý trạng thái Active Tab
    const currentPath = window.location.pathname.split("/").pop();

    const sidebarHTML = `
    <aside class="hidden md:flex flex-col h-screen fixed left-0 top-0 py-6 border-r border-slate-200 bg-white w-64 z-50">
        <div class="mb-6 px-4 flex flex-col items-center pt-2">
            <div class="w-20 h-20 rounded-full border-2 border-[#1b365d] overflow-hidden p-0.5 shadow-sm mb-4">
                <img alt="Hồ sơ giảng viên" class="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSLJhSQKsDQhv_OVj9aGS1xjLxGK5d28yldyR0WSHVbuFFikW72q2TaiXHXOWDalV-vv3ygcl4-xuTqCuaLPhIWq3IVt2LSESSGwm5pcxO1nqUWlAldCrXv8KW_jYXzThFs3djDoHSAy9YZjGDthQQlOFpYbU-UhY_0vgHJqr_CV0AXA6QPaK88294NnycnA91fMw47n1WeI0r7XgDQ8ZPbbW-WG4JY10An34lCYkyolKlzEGctC5AsgcEt_I9B4BD-pyacaDMuhQ"/>
            </div>
            <h2 class="text-xl font-extrabold text-[#1b365d] tracking-tight text-center">NEXA Teacher</h2>
            <p class="text-xs text-slate-400 font-bold mt-1 text-center">Hệ thống quản lý năng lực</p>
        </div>
        
        <nav class="flex-grow px-4 space-y-1.5 overflow-y-auto">
            
            <a href="dashboard_teacher.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'dashboard_teacher.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'dashboard_teacher.html' ? 1 : 0};">dashboard</span>
                <span>Tổng quan</span>
            </a>
            
            <a href="lophoc.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'lophoc.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'lophoc.html' ? 1 : 0};">groups</span>
                <span>Danh sách lớp</span>
            </a>
            
            <a href="nganhangcauhoi.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'nganhangcauhoi.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'nganhangcauhoi.html' ? 1 : 0};">library_books</span>
                <span>Ngân hàng câu hỏi</span>
            </a>
            
            <a href="danhgia.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'danhgia.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'danhgia.html' ? 1 : 0};">assignment</span>
                <span>Quản lý bài đánh giá</span>
            </a>
            
            <a href="nhiemvuthuchanh.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'nhiemvuthuchanh.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'nhiemvuthuchanh.html' ? 1 : 0};">task</span>
                <span>Nhiệm vụ thực hành</span>
            </a>
            
            <a href="chambaiketqua.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'chambaiketqua.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'chambaiketqua.html' ? 1 : 0};">grading</span>
                <span>Chấm bài & Kết quả</span>
            </a>
            
            <a href="baocaophantich.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'baocaophantich.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'baocaophantich.html' ? 1 : 0};">insights</span>
                <span>Báo cáo & Phân tích</span>
            </a>
            
            <a href="caidatGV.html" class="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-slate-50 ${currentPath === 'caidatGV.html' ? 'bg-[#8fa7fe]/40 text-[#1d3989]' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${currentPath === 'caidatGV.html' ? 1 : 0};">settings</span>
                <span>Cài đặt</span>
            </a>
            
        </nav>

        <div class="px-4 mt-auto pt-4 border-t border-slate-100 space-y-4">
            <button class="w-full bg-[#00236f] hover:bg-[#1d3989] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs tracking-wider uppercase border-b-2 border-slate-900">
                Tạo Bài Mới
            </button>
            <div class="flex justify-between px-2 text-xs font-bold text-slate-500">
                <a class="hover:text-primary flex items-center gap-1.5 transition-colors" href="trogiup.html">
                    <span class="material-symbols-outlined text-lg">help</span> Trợ giúp
                </a>
                <a class="hover:text-red-600 flex items-center gap-1.5 transition-colors" href="../index.html">
                    <span class="material-symbols-outlined text-lg">logout</span> Đăng xuất
                </a>
            </div>
        </div>
    </aside>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
});