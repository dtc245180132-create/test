# Dự án: Website Phim Hoạt Hình Thiếu Nhi (KidsToon TV)

Dự án website chuyên biệt về phim hoạt hình chọn lọc, an toàn cho trẻ em được xây dựng bằng **HTML5 (`<div>`, `<video>`, `<iframe>`)** kết hợp **CSS Layout Hiện Đại (Fixed Header, Flexbox & Responsive Design)**.

## 🎯 Tiêu chuẩn & Tính năng đáp ứng đầy đủ đề bài

### 1. Mức cơ bản:
- **Header**: Logo nhận diện bên trái (`KidsToon TV`), thanh tìm kiếm phim theo tên và bộ lọc sắp xếp (Mới cập nhật / Nhiều lượt xem nhất).
- **Head-link**: Thanh liên kết danh mục trang phong phú (*Trang chủ*, *Doraemon*, *Tom & Jerry*, *Shin*, *Pokémon*, *Cổ tích*, *Yêu thích*).
- **Content (2 cột)**:
  - **Left Content (Menu Playlist)**: Danh sách các tập phim hoạt hình có sẵn với ảnh thumbnail, thời lượng, số lượt xem, nhãn thuyết minh.
  - **Right Content (Video Player)**: Khu vực phát video chính, mặc định hiển thị video đầu tiên (*Chú Thỏ Thông Minh - Big Buck Bunny*), kèm tiêu đề, mô tả và các nhãn tiêu chuẩn.
- **Footer**: Hiển thị thông tin bản quyền, tiêu chuẩn nội dung sạch và thông tin liên hệ.

### 2. Mức trung bình:
- **Loại bỏ gạch chân**: Áp dụng `text-decoration: none;` cho tất cả các thẻ liên kết `<a>`.
- **Hiệu ứng hover tương tác**: Rê chuột vào liên kết sẽ **bôi đậm** (`font-weight: bold;`) và **đổi màu chữ** sang vàng tươi `#ffea00`.
- **Header cố định**: `position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;` giữ thanh điều hướng luôn nổi cố định khi người dùng cuộn xem nội dung.

### 3. Mức nâng cao:
- **Thẻ `<video>` & `<iframe>` YouTube**:
  - Hỗ trợ phát video trực tiếp qua thẻ `<video controls poster="...">` với nguồn video Full HD.
  - Hỗ trợ nhúng video YouTube chất lượng cao an toàn qua thẻ `<iframe>`.
  - Có tab chuyển đổi trực tiếp giữa 2 chế độ phát và JavaScript hỗ trợ click đổi phim ngay lập tức trên playlist.
- **Responsive Design (Đa thiết bị)**:
  - **PC / Màn hình lớn**: Bố cục 2 cột cân đối, thanh cuộn playlist tiện lợi.
  - **Tablet**: Co giãn kích thước cột và padding linh hoạt.
  - **Mobile / Điện thoại**: Tự động đảo thứ tự đưa khung phát video lên đầu trang (`flex-direction: column-reverse;`) để bé có thể xem ngay, danh sách phim xếp gọn bên dưới; thanh tìm kiếm và header co giãn tự nhiên.

## 📁 Cấu trúc thư mục
```
├── index.html               # Website Phim Hoạt Hình Thiếu Nhi hoàn chỉnh (HTML5 + Video + Iframe)
├── style.css                # Toàn bộ CSS định dạng giao diện, fixed header, hover effect và responsive
├── cartoon_website.html     # Bản sao lưu trữ độc lập cho Website Phim Hoạt Hình
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
