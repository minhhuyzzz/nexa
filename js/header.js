/**
 * NEXA GLOBAL HEADER SYSTEM (UPDATED MVP VERSION)
 * Tự động tạo và nhúng thanh Navigation cao cấp đồng nhất cho toàn hệ thống
 */

document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.createElement("div");
    
    // Tự động nhận diện cấu trúc thư mục để sửa đường dẫn liên kết cho các trang con
    const isSubPage = window.location.pathname.includes('/pages/') || false; 
    const rootPath = isSubPage ? "../" : "";

    headerContainer.innerHTML = `
    <header id="nexa-global-nav" class="w-full bg-white/90 backdrop-blur-md border-b border-slate-200 h-20 fixed top-0 left-0 z-[100] shadow-sm transition-all duration-300">
        <div class="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            <div class="flex items-center gap-3 cursor-pointer group" onclick="window.location.href='${rootPath}index.html'">
                <div class="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center overflow-hidden shadow-sm p-1 group-hover:scale-105 transition-transform">
                    <img src="https://i.postimg.cc/Vv0HrbfK/anh-logo-nexa.png" alt="NEXA Logo" class="w-full h-full object-contain">
                </div>
                <div class="leading-none">
                    <span class="text-xl font-black text-[#1b365d] tracking-tight block">NEXA</span>
                    <span class="text-[9px] text-[#4f46e5] font-bold uppercase tracking-widest block mt-0.5">Đánh giá MVP</span>
                </div>
            </div>

            <nav class="hidden md:flex items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <a href="${rootPath}index.html#trang-chu" class="hover:text-[#4f46e5] transition-colors">Tổng Quan</a>
                <a href="${rootPath}index.html#mien-nang-luc" class="hover:text-[#4f46e5] transition-colors">6 Miền Tiêu Chí</a>
                <a href="${rootPath}index.html#lo-trinh-dao-tao" class="hover:text-[#4f46e5] transition-colors">Lộ Trình Thang Đo</a>
                <a href="${rootPath}index.html#mien-nhiem-vu" class="hover:text-[#4f46e5] transition-colors">Nhiệm Vụ Đào Tạo</a>
            </nav>

            <div class="flex items-center gap-3">
                
                <button onclick="window.location.href='${rootPath}NEXA_Free_Test.html'" class="hidden xl:inline-flex items-center gap-1.5 text-[10px] font-black text-[#1b365d] bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg border border-blue-200 transition shadow-sm cursor-pointer uppercase tracking-wider">
                    <i class="fa-solid fa-bolt text-[#D4AF37] animate-pulse"></i> kiểm tra năng lực nhanh
                </button>

                <button onclick="window.location.href='${rootPath}NEXA_Login.html'" class="px-5 py-2.5 bg-[#1b365d] hover:bg-[#2a4c7e] text-white text-xs font-black rounded-xl transition shadow-sm border-b-2 border-slate-900 cursor-pointer tracking-wide uppercase flex items-center">
                    Cổng Đăng Nhập SSO <i class="fa-solid fa-arrow-right-to-bracket ml-2 text-[#D4AF37]"></i>
                </button>

            </div>
        </div>
    </header>

    <div class="h-20 w-full"></div>
    `;

    // Hiệu ứng thay đổi độ đổ bóng (shadow) và làm đặc nền khi cuộn trang
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('nexa-global-nav');
        if (nav) {
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md', 'bg-white');
                nav.classList.remove('shadow-sm', 'bg-white/90');
            } else {
                nav.classList.add('shadow-sm', 'bg-white/90');
                nav.classList.remove('shadow-md', 'bg-white');
            }
        }
    });

    // Chèn nguyên khối Header lên trên cùng của trang (trước thẻ body)
    document.body.insertBefore(headerContainer, document.body.firstChild);
});