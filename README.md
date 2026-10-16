# Bài tập: Xây dựng bố cục với Mô hình hộp CSS (Box Model)

Dự án thực hành tìm hiểu và so sánh sự khác biệt trực quan giữa `box-sizing: content-box` và `box-sizing: border-box`.

## 🎯 Mục tiêu & So sánh kích thước thực tế
Áp dụng các thuộc tính `width`, `height`, `padding`, `border`, `margin` và `box-sizing` cho 3 thẻ `.card`:
- **Khai báo chung:**
  - `width: 280px;`
  - `height: 150px;`
  - `padding: 20px;` (ở tất cả 4 cạnh)
  - `border: 5px solid #3498db;` (ở tất cả 4 cạnh)
  - `margin: 20px;` (ở tất cả 4 cạnh)

| Thuộc tính | Thẻ 1 (`content-box`) - Xanh lá (`#2ecc71`) | Thẻ 2 & 3 (`border-box`) - Vàng (`#f1c40f`) / Đỏ (`#e74c3c`) |
| :--- | :--- | :--- |
| **box-sizing** | `content-box` (mặc định) | `border-box` |
| **Chiều rộng nội dung (content width)** | `280px` | `280 - (20*2) - (5*2) = 230px` |
| **Chiều cao nội dung (content height)** | `150px` | `150 - (20*2) - (5*2) = 100px` |
| **Tổng chiều rộng hiển thị (Element Width)** | **`330px`** ($280 + 40 + 10$) | **`280px`** (cố định theo khai báo) |
| **Tổng chiều cao hiển thị (Element Height)** | **`200px`** ($150 + 40 + 10$) | **`150px`** (cố định theo khai báo) |
| **Tổng không gian chiếm chỗ (kèm margin)** | **`370px × 240px`** | **`320px × 190px`** |

> **Nhận xét quan trọng:** Với `border-box`, kích thước phần tử luôn cố định đúng bằng giá trị `width` và `height` đã đặt, padding và border sẽ tự động co vào trong thay vì nở ra ngoài như `content-box`. Đây là lý do tại sao `box-sizing: border-box` được xem là chuẩn mực trong thiết kế web hiện đại.

## 📁 Cấu trúc thư mục
```
├── index.html               # Bài thực hành hiện tại: Xây dựng bố cục với Mô hình hộp CSS
├── style.css                # File CSS định dạng cho 3 thẻ card (content-box vs border-box)
├── box_model_layout.html    # Bản sao lưu trữ độc lập cho bài Xây dựng bố cục Box Model
├── box_model_layout.css     # Bản sao CSS độc lập cho bài Xây dựng bố cục Box Model
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
