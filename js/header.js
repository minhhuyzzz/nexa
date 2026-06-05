/**
 * NEXA GLOBAL HEADER SYSTEM
 * Tự động tạo và nhúng thanh Navigation cao cấp đồng nhất cho toàn hệ thống
 */

document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.createElement("div");
    
    // Tự động nhận diện cấu trúc thư mục để sửa đường dẫn liên kết cho các trang con
    const isSubPage = window.location.pathname.includes('/pages/') || false; 
    const rootPath = isSubPage ? "../" : "";

    headerContainer.innerHTML = `
    <nav id="nexa-global-nav" class="bg-white/95 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-slate-200 shadow-sm transition-all duration-300">
        <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="flex justify-between items-center h-16 gap-4">
                
                <div onclick="window.location.href='${rootPath}index.html'" class="flex items-center gap-3 group cursor-pointer flex-shrink-0">
                    <div class="w-9 h-9 rounded-md flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm bg-white transition-transform group-hover:scale-105">
                        <img src="https://i.postimg.cc/Vv0HrbfK/anh-logo-nexa.png" alt="NEXA" class="w-full h-full object-contain p-0.5" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span class="hidden text-[#003366] font-black text-xl">NX</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-black text-xl tracking-tight text-[#003366] leading-none">NEXA</span>
                        <span class="text-[8px] uppercase tracking-widest font-bold text-[#D4AF37] mt-0.5">Intelligence Core</span>
                    </div>
                </div>

                <div class="hidden lg:flex items-center space-x-5 xl:space-x-6 pl-2 flex-shrink-0">
                    <a href="${rootPath}index.html#trang-chu" class="text-[#003366] font-bold border-b-2 border-[#003366] pb-1 text-xs uppercase tracking-wide">Trang chủ</a>
                    
                    <div class="relative group/menu">
                        <button class="text-slate-600 hover:text-[#003366] font-bold text-xs uppercase tracking-wide flex items-center gap-1 py-2 cursor-pointer">
                            Giải pháp <i class="fa-solid fa-chevron-down text-[9px] transition-transform group-hover/menu:rotate-180"></i>
                        </button>
                        <div class="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-4 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all duration-200 mt-1">
                            <div class="space-y-2">
                                <a href="${rootPath}index.html#he-sinh-thai" class="block p-2.5 rounded-lg hover:bg-slate-50 transition">
                                    <strong class="text-xs font-bold text-[#003366] block">Dành cho Đại học/Doanh nghiệp</strong>
                                    
                                </a>
                                <a href="${rootPath}index.html#he-sinh-thai" class="block p-2.5 rounded-lg hover:bg-slate-50 transition">
                                    <strong class="text-xs font-bold text-[#003366] block">Dành cho Cá Nhân/ Sinh viên</strong>
                                   
                                </a>
                                <a href="${rootPath}NEXA_Free_Test.html" class="block p-2.5 rounded-lg hover:bg-slate-50 border border-dashed border-[#003366]/20 bg-blue-50/20 transition">
                                    <strong class="text-xs font-bold text-[#003366] block flex items-center gap-1.5">
                                        <i class="fa-solid fa-bolt text-[#D4AF37]"></i> Khảo Thí Tự Do (Free Test)
                                    </strong>
                                    <span class="text-[11px] text-slate-500 block mt-0.5">Đo lường phản xạ thích nghi và định vị nhanh level năng lực cá nhân.</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="relative group/menu">
                        <button class="text-slate-600 hover:text-[#003366] font-bold text-xs uppercase tracking-wide flex items-center gap-1 py-2 cursor-pointer">
                            6 Miền Năng Lực <i class="fa-solid fa-chevron-down text-[9px] transition-transform group-hover/menu:rotate-180"></i>
                        </button>
                        <div class="absolute top-full left-0 w-[580px] bg-white border border-slate-200 rounded-xl shadow-xl p-4 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all duration-200 mt-1">
                            <div class="grid grid-cols-2 gap-2 text-[11px]">
                                <div class="p-2.5 border border-slate-100 flex justify-between items-center hover:bg-slate-50 hover:border-slate-200 rounded-lg transition">
                                    <span class="font-bold text-[#003366] pr-2">D1 - Khai thác thông tin & dữ liệu</span>
                                    <span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium flex-shrink-0">Data</span>
                                </div>
                                <div class="p-2.5 border border-slate-100 flex justify-between items-center hover:bg-slate-50 hover:border-slate-200 rounded-lg transition">
                                    <span class="font-bold text-[#003366] pr-2">D2 - Giao tiếp & Hợp tác số</span>
                                    <span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium flex-shrink-0">Connect</span>
                                </div>
                                <div class="p-2.5 border border-slate-100 flex justify-between items-center hover:bg-slate-50 hover:border-slate-200 rounded-lg transition">
                                    <span class="font-bold text-[#003366] pr-2">D3 - Sáng tạo nội dung số</span>
                                    <span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium flex-shrink-0">Create</span>
                                </div>
                                <div class="p-2.5 border border-slate-100 flex justify-between items-center hover:bg-slate-50 hover:border-slate-200 rounded-lg transition">
                                    <span class="font-bold text-[#003366] pr-2">D4 - An toàn & Bảo mật số</span>
                                    <span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium flex-shrink-0">Security</span>
                                </div>
                                <div class="p-2.5 border border-slate-100 flex justify-between items-center hover:bg-slate-50 hover:border-slate-200 rounded-lg transition">
                                    <span class="font-bold text-[#003366] pr-2">D5 - Giải quyết vấn đề qua công nghệ</span>
                                    <span class="text-[9px] bg-blue-50 text-[#003366] px-1.5 py-0.5 rounded font-bold flex-shrink-0">Tech</span>
                                </div>
                                <div class="p-2.5 border border-amber-100 bg-amber-50/10 flex justify-between items-center hover:bg-amber-50/30 rounded-lg transition">
                                    <span class="font-bold text-amber-700 flex items-center gap-1 pr-1">
                                        <i class="fa-solid fa-star text-[#D4AF37] animate-pulse"></i> D6 - Phản xạ & Thích nghi AI
                                    </span>
                                    <span class="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-bold flex-shrink-0">Focus</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="${rootPath}index.html#lo-trinh-dao-tao" class="text-slate-600 hover:text-[#003366] font-bold text-xs uppercase tracking-wide transition">Lộ trình phát triển</a>
                    <a href="${rootPath}index.html#cho-nhiem-vu" class="text-slate-600 hover:text-[#003366] font-bold text-xs uppercase tracking-wide transition">Khoá học</a>
                </div>

                <div class="hidden sm:block flex-grow max-w-xs md:max-w-md relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-xs pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" placeholder="Tìm kiếm nhiệm vụ, kỹ năng số..." class="w-full bg-[#F3F4F6] text-xs text-slate-700 pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#003366] transition-all">
                </div>

                <div class="flex items-center space-x-2.5 xl:space-x-3 flex-shrink-0">
                    <button onclick="window.location.href='${rootPath}NEXA_Free_Test.html'" class="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-bold text-[#003366] bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200 transition shadow-sm cursor-pointer">
                        <i class="fa-solid fa-bolt text-[#D4AF37] animate-bounce"></i> Test Nhanh Free
                    </button>
                    
                    <a href="${rootPath}NEXA_Login.html" class="inline-flex items-center gap-2 bg-[#0B2559] hover:bg-[#003366] text-white px-4 py-2 rounded-md font-bold text-xs transition shadow-md border-b-2 border-blue-950 whitespace-nowrap">
                        <i class="fa-solid fa-arrow-right-to-bracket text-[#D4AF37]"></i>
                        <span>Đăng nhập/ Đăng ký</span>
                    </a>
                </div>

            </div>
        </div>
    </nav>
    <div class="h-16 w-full"></div>
    `;

    // Điều khiển hiệu ứng đổ bóng khi cuộn trang
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('nexa-global-nav');
        if (window.scrollY > 20) {
            nav.classList.add('shadow-md', 'bg-white');
            nav.classList.remove('shadow-sm', 'bg-white/95');
        } else {
            nav.classList.add('shadow-sm', 'bg-white/95');
            nav.classList.remove('shadow-md', 'bg-white');
        }
    });

    document.body.insertBefore(headerContainer, document.body.firstChild);
});