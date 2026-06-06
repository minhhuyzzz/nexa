/**
 * NEXA GLOBAL FOOTER SYSTEM
 * Tự động tạo và nhúng thanh Corporate Footer đồng nhất cho toàn hệ thống
 */

document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.createElement("div");
    
    // Tự động nhận diện cấu trúc thư mục để sửa đường dẫn liên kết tĩnh cho các trang con
    const isSubPage = window.location.pathname.includes('/pages/') || false; 
    const rootPath = isSubPage ? "../" : "";

    footerContainer.innerHTML = `
    <footer class="bg-slate-950 text-slate-400 pt-16 pb-8 border-t-4 border-[#003366]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
            
            <div class="space-y-4">
                <div class="flex items-center gap-2 cursor-pointer" onclick="window.location.href='${rootPath}index.html'">
                    <div class="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-[#D4AF37]">
                        <img src="https://i.postimg.cc/Vv0HrbfK/anh-logo-nexa.png" alt="NX" class="w-full h-full object-contain p-0.5" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span class="hidden font-bold text-[#003366]">NX</span>
                    </div>
                    <span class="font-black text-xl text-white tracking-tight">NEXA PLATFORM</span>
                </div>
                <p class="text-slate-500 leading-relaxed text-justify">
                    Hệ thống kiểm chuẩn, đánh giá và định vị năng lực số thực tế quy mô lớn. Ứng dụng động cơ AI Core phân tích hành vi phản xạ và công nghệ bảo chứng số phi tập trung hỗ trợ người học làm chủ công nghệ.
                </p>
                <div class="flex space-x-4 text-base pt-2">
                    <a href="#" class="text-slate-600 hover:text-[#D4AF37] transition"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#" class="text-slate-600 hover:text-[#D4AF37] transition"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#" class="text-slate-600 hover:text-[#D4AF37] transition"><i class="fa-brands fa-square-youtube"></i></a>
                    <a href="#" class="text-slate-600 hover:text-[#D4AF37] transition"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>

            <div class="space-y-3">
                <h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Hệ Sinh Thái Phát Triển</h4>
                <ul class="space-y-2 text-slate-500 font-medium">
                    <li><a href="${rootPath}index.html#he-sinh-thai" class="hover:text-[#D4AF37] transition">Định vị năng lực số cá nhân</a></li>
                    <li><a href="${rootPath}index.html#he-sinh-thai" class="hover:text-[#D4AF37] transition">Khảo thí số hóa cho nhà trường</a></li>
                    <li><a href="${rootPath}NEXA_Free_Test.html" class="hover:text-[#D4AF37] transition">Khảo thí nhanh phản xạ số (kiểm tra miễn phí)</a></li>
                    <li><a href="${rootPath}index.html#cho-nhiem-vu" class="hover:text-[#D4AF37] transition">Chợ nhiệm vụ thực hành số</a></li>
                    <li><a href="${rootPath}index.html#lo-trinh-dao-tao" class="hover:text-[#D4AF37] transition">Lộ trình rèn luyện kỹ năng số</a></li>
                </ul>
            </div>

            <div class="space-y-3">
                <h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Tiêu Chuẩn Công Nghệ</h4>
                <ul class="space-y-2.5 text-slate-500 leading-relaxed">
                    <li><strong class="text-slate-400 block">Khung Đối Chiếu:</strong> Hoàn toàn bám sát Khung tiêu chuẩn Năng lực số Châu Âu DigComp 2.2 dành cho người công dân số.</li>
                    <li><strong class="text-slate-400 block">Bảo Chứng Minh Bạch:</strong> Kiến trúc ghi nhận kết quả bất biến, chống gian lận thông tin đánh giá.</li>
                    <li><strong class="text-slate-400 block">Đo Lường AI Core:</strong> Tập trung phân tích tốc độ thích nghi công nghệ mới (D6) thay vì lý thuyết ghi nhớ thao tác.</li>
                </ul>
            </div>

            <div class="space-y-3">
                <h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Thông Tin Trụ Sở</h4>
                <ul class="space-y-2 text-slate-500">
                    <li><strong class="text-slate-400 block">NEXA Intelligence Global Corp.</strong></li>
                    <li><i class="fa-solid fa-location-dot mr-1.5 text-[10px]"></i> Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh</li>
                    <li><i class="fa-solid fa-phone mr-1.5 text-[10px]"></i> Tổng đài CSKH: 1900 6868</li>
                    <li><i class="fa-solid fa-envelope mr-1.5 text-[10px]"></i> Email vận hành: corporate@nexa.io</li>
                    <li><i class="fa-solid fa-globe mr-1.5 text-[10px]"></i> Cổng thông tin: nexa.io / nexa.vn</li>
                </ul>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-600 flex flex-col sm:flex-row justify-between gap-4">
            <span>&copy; 2026 NEXA Intelligence Core Engine. All rights reserved. Nền tảng được bảo hộ quyền tác giả và sở hữu trí tuệ toàn cầu.</span>
            <div class="flex space-x-4">
                <a href="#" class="hover:underline hover:text-slate-400">Điều khoản dịch vụ SaaS</a>
                <span>|</span>
                <a href="#" class="hover:underline hover:text-slate-400">Chính sách bảo mật dữ liệu & an toàn thông tin (GDPR/PDPL)</a>
            </div>
        </div>
    </footer>
    `;

    document.body.appendChild(footerContainer);
});