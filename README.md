# Bài thực hành: Tạo bố cục cơ bản bằng thẻ DIV và CSS

Dự án thực hành dàn trang (Layout) hoàn chỉnh cho website bằng thẻ `<div>` và các bộ chọn CSS theo chuẩn bài học CodeGym.

## 🎯 Mục tiêu & Ý nghĩa các phân vùng (ID Selectors)
1. **`#main`**: Khung bao bọc toàn bộ nội dung của trang (`width: 1000px; margin: 0 auto;`), căn giữa màn hình.
2. **`#head`**: Phân vùng đầu trang (`height: 100px; border: 1px solid #CDCDCD; margin-bottom: 5px;`), chứa logo thương hiệu và biểu ngữ banner.
3. **`#head-link`**: Phân vùng chứa các liên kết đầu trang (`height: 35px; line-height: 35px; clear: both;`), liên kết tới các mục Home, Students, Courses,...
4. **`#left`**: Phân vùng nội dung bên trái (`width: 150px; min-height: 450px; float: left; background-color: #004C00;`), chứa menu danh mục điều hướng.
5. **`#content`**: Phân vùng nội dung chính ở giữa (`width: 600px; min-height: 450px; float: left; margin: 0 5px;`), chứa tin nổi bật, slide ảnh và các bài viết tin tức.
6. **`#right`**: Phân vùng thông tin bên phải (`width: 234px; min-height: 450px; float: right;`), chứa lịch sự kiện, biểu đồ tiến độ học tập và bản đồ địa chỉ.
7. **`#footer`**: Phân vùng cuối trang (`clear: both; min-height: 60px;`), chứa thông tin bản quyền và các liên kết hỗ trợ.

## 📁 Cấu trúc thư mục
```
├── index.html               # Bài thực hành hiện tại: Tạo bố cục cơ bản bằng thẻ DIV và CSS
├── style.css                # File CSS định nghĩa các selector (#main, #head, #head-link, #left, #content, #right, #footer)
├── basic_layout_div.html    # File lưu trữ độc lập cho bài Tạo bố cục cơ bản bằng thẻ DIV
├── float_layout.html        # Bài thực hành: Tạo bố cục 2 cột bằng Float và Clear trong CSS
├── overflow_management.html # Bài thực hành: Quản lý Overflow trong CSS (overflow: auto)
├── cartoon_website.html     # Dự án: Website Phim Hoạt Hình Thiếu Nhi (HTML5, Video, Iframe, Responsive)
├── simplified_homepage.html # Bài thực hành: Xây dựng bố cục Trang Chủ Giản Lược (Fixed Header + Flexbox)
├── sticky_navigation.html   # Bài thực hành: Sử dụng position: sticky trong CSS (Sticky Navigation)
├── dropdown_menu.html       # Bài thực hành: Tạo Menu ngang Dropdown bằng HTML và CSS
├── fixed_menu.html          # Bài thực hành: Hướng dẫn tạo Fixed Menu (Menu cố định khi cuộn)
├── open_source_records.html # Bài thực hành: Model 2 (Open Source Records - CSS Box Model)
├── box_model_layout.html    # Bài thực hành: Xây dựng bố cục với Mô hình hộp CSS (content-box vs border-box)
├── box_model_layout.css     # File CSS định dạng cho 3 thẻ card (content-box vs border-box)
├── box_sizing_flex.html     # Bài thực hành: CSS box-shadow, box-sizing, border-radius và Flexbox
├── box_shadow_radius.html   # Bài thực hành: CSS box-shadow và border-radius (inset shadow)
├── box_model.html           # Bài thực hành: CSS Box Model (width, padding, border, margin)
├── background_styling.html  # Bài thực hành: Sử dụng màu nền (background-color) và ảnh nền (background-image)
├── background_style.css     # File CSS định dạng cho bài màu nền & ảnh nền
├── background.jpg           # Ảnh nền chất lượng cao dùng cho khối div quan trọng
├── css_selectors.html       # Bản sao lưu trữ bài tập các bộ chọn CSS (class, id, element, grouping, pseudo-classes)
├── selectors_style.css      # File CSS cho bài tập các bộ chọn CSS
├── css_embedding.html       # Bài thực hành: Nhúng CSS vào trang web (Inline, Internal, External)
├── personal_page.html       # Bài thực hành: Trang web cá nhân (header, avatar, profile, hobbies, goals, footer)
├── personal_style.css       # File CSS cho trang web cá nhân
├── avatar.jpg               # Ảnh đại diện cho trang web cá nhân
├── table_styling.html       # Bài thực hành: Định kiểu bảng trong CSS (border, collapse, width, height, align, padding, color)
├── list_styling.html        # Bài thực hành: Định kiểu cho danh sách HTML bằng CSS (8 mục)
├── list_style.css           # File CSS định kiểu cho danh sách (list-style, position, image, color)
├── bullet.png               # Icon hình ảnh đánh dấu cho list-style-image
├── meeting_schedule.html    # Bài tập: Lịch họp công ty (gộp ô với rowspan và colspan)
├── product_list.html        # Bài tập: Bảng danh sách sản phẩm (table, tr, th, td)
├── survey.html              # Bài tập: Form survey khách hàng (Market Research Survey theo mẫu Wufoo)
├── registration_form.html   # Bài tập: Form đăng ký người dùng gửi POST lên server CodeGym
├── forms_codegym.html       # Bài thực hành: Tổng hợp đầy đủ 2 form (Phần 1 & Phần 2) CodeGym
├── form_part1.html          # Bài thực hành: Phần 1 - Form thông tin cá nhân (yourname, email, hobby)
├── form_part2.html          # Bài thực hành: Phần 2 - Form đăng ký học viên (fullname, email, phone, gender, course,...)
├── timetable.html           # Bài tập: Bảng gộp ô thời khóa biểu (rowspan, colspan)
├── simple_table.html        # Bài tập: Bảng đơn giản danh sách học sinh (table, tr, th, td)
├── image_display.html       # Bài tập: Thẻ hiển thị hình ảnh (img) với thuộc tính alt
├── search_form.html         # Bài tập: Gửi dữ liệu từ form lên server (Google & Bing search với GET)
├── simpleform.html          # Bài tập: Tạo form Order với select, radio, textfield, button và font wufoo
├── inline_styles.html       # Bài tập: CSS nội tuyến (style) định dạng văn bản, màu sắc, font, căn giữa
├── favorite_links.html      # Bài tập: Thẻ liên kết (a), target="_blank", mailto:
├── about.html               # Bài tập: File liên kết nội bộ trong cùng thư mục
├── favorite_food_travel.html# Bài tập: Danh sách món ăn (ul) và các bước du lịch (ol)
├── headings_paragraphs.html # Bài tập: Thẻ tiêu đề (h1, h2) và các đoạn văn (p)
├── lists.html               # Bài tập: Các loại thẻ danh sách (ul, ol, li, nested list)
├── text_formatting.html     # Bài tập: Định dạng văn bản và thuộc tính CSS nội tuyến
├── halong_bay.html          # Bài tập: Vịnh Hạ Long - Kỳ quan Thiên nhiên (thẻ h1, p, img, a)
└── README.md                # Hướng dẫn và thông tin bài nộp
```
