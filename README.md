# Bài thực hành: Thuộc tính `grid-template-columns` trong CSS Grid

Dự án thực hành tìm hiểu và áp dụng thuộc tính `grid-template-columns` trong CSS Grid để quy định số lượng cột và kích thước cụ thể của từng cột trong bố cục lưới.

---

## 🎯 Chi tiết các ví dụ

### 1. Ví dụ 1: Tạo 3 cột có kích thước bằng nhau
- **Mã CSS**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
  }
  .grid-container div {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
  }
  ```
- **Giải thích**:
  - `1fr`: Đại diện cho một phần phân số không gian còn trống của container Grid.
  - Cung cấp 3 giá trị `1fr 1fr 1fr` tạo ra 3 cột có bề rộng chia đều bằng nhau.
  - Khi có 6 phần tử con (`Ô 1` đến `Ô 6`), CSS Grid tự động phân bố thành 2 hàng, mỗi hàng 3 cột.

### 2. Ví dụ 2: Tạo các cột có kích thước khác nhau
- **Mã CSS**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: 100px 200px 1fr;
      gap: 10px;
  }
  .grid-container div {
      background-color: lightgreen;
      padding: 20px;
      text-align: center;
  }
  ```
- **Giải thích**:
  - `100px`: Cột thứ nhất có kích thước cố định là 100 pixel.
  - `200px`: Cột thứ hai có kích thước cố định là 200 pixel.
  - `1fr`: Cột thứ ba linh hoạt co giãn chiếm toàn bộ phần diện tích còn lại của lưới.

---

## 📁 Cấu trúc thư mục dự án
```
├── index.html                  # Bài thực hành hiện tại: Cả 2 ví dụ grid-template-columns trong CSS Grid
├── style.css                   # File CSS định dạng cho cả 2 ví dụ Grid (1fr 1fr 1fr & 100px 200px 1fr)
├── grid_template_columns.html  # Bản sao độc lập tích hợp đầy đủ HTML và CSS nội bộ
├── responsive_navbar.html      # Bài thực hành: Thanh điều hướng Responsive Navbar (Flexbox, Media Query, JS)
├── script.js                   # File JavaScript điều khiển toggle active cho navbar
├── float_overflow_layout.html  # Bài thực hành: Bố cục trang với Float và Overflow
├── display_layout.html         # Bài thực hành: Bố cục trang web với thuộc tính Display (block, inline-block)
├── html5_layout.html           # Bài thực hành: Tạo bố cục trang web bằng các thẻ HTML5
├── basic_layout_div.html       # Bài thực hành: Tạo bố cục cơ bản bằng thẻ DIV và CSS (#main, #head, #left, #content, #right, #footer)
├── float_layout.html           # Bài thực hành: Tạo bố cục 2 cột bằng Float và Clear trong CSS (60% / 38%)
├── overflow_management.html    # Bài thực hành: Quản lý Overflow trong CSS (overflow: auto)
├── cartoon_website.html        # Dự án: Website Phim Hoạt Hình Thiếu Nhi (HTML5, Video, Iframe, Responsive)
├── simplified_homepage.html    # Bài thực hành: Xây dựng bố cục Trang Chủ Giản Lược (Fixed Header + Flexbox)
├── sticky_navigation.html      # Bài thực hành: Sử dụng position: sticky trong CSS (Sticky Navigation)
├── dropdown_menu.html          # Bài thực hành: Tạo Menu ngang Dropdown bằng HTML và CSS
├── fixed_menu.html             # Bài thực hành: Hướng dẫn tạo Fixed Menu (Menu cố định khi cuộn)
├── open_source_records.html    # Bài thực hành: Model 2 (Open Source Records - CSS Box Model)
├── box_model_layout.html       # Bài thực hành: Xây dựng bố cục với Mô hình hộp CSS (content-box vs border-box)
├── box_model_layout.css        # File CSS định dạng cho 3 thẻ card (content-box vs border-box)
├── box_sizing_flex.html        # Bài thực hành: CSS box-shadow, box-sizing, border-radius và Flexbox
├── box_shadow_radius.html      # Bài thực hành: CSS box-shadow và border-radius (inset shadow)
├── box_model.html              # Bài thực hành: CSS Box Model (width, padding, border, margin)
├── background_styling.html     # Bài thực hành: Sử dụng màu nền (background-color) và ảnh nền (background-image)
├── background_style.css        # File CSS định dạng cho bài màu nền & ảnh nền
├── background.jpg              # Ảnh nền chất lượng cao dùng cho khối div quan trọng
├── css_selectors.html          # Bản sao lưu trữ bài tập các bộ chọn CSS (class, id, element, grouping, pseudo-classes)
├── selectors_style.css         # File CSS cho bài tập các bộ chọn CSS
├── css_embedding.html          # Bài thực hành: Nhúng CSS vào trang web (Inline, Internal, External)
├── personal_page.html          # Bài thực hành: Trang web cá nhân (header, avatar, profile, hobbies, goals, footer)
├── personal_style.css          # File CSS cho trang web cá nhân
├── avatar.jpg                  # Ảnh đại diện cho trang web cá nhân
├── table_styling.html          # Bài thực hành: Định kiểu bảng trong CSS (border, collapse, width, height, align, padding, color)
├── list_styling.html           # Bài thực hành: Định kiểu cho danh sách HTML bằng CSS (8 mục)
├── list_style.css              # File CSS định kiểu cho danh sách (list-style, position, image, color)
├── bullet.png                  # Icon hình ảnh đánh dấu cho list-style-image
├── meeting_schedule.html       # Bài tập: Lịch họp công ty (gộp ô với rowspan và colspan)
├── product_list.html           # Bài tập: Bảng danh sách sản phẩm (table, tr, th, td)
├── survey.html                 # Bài tập: Form survey khách hàng (Market Research Survey theo mẫu Wufoo)
├── registration_form.html      # Bài tập: Form đăng ký người dùng gửi POST lên server CodeGym
├── forms_codegym.html          # Bài thực hành: Tổng hợp đầy đủ 2 form (Phần 1 & Phần 2) CodeGym
├── form_part1.html             # Bài thực hành: Phần 1 - Form thông tin cá nhân (yourname, email, hobby)
├── form_part2.html             # Bài thực hành: Phần 2 - Form đăng ký học viên (fullname, email, phone, gender, course,...)
├── timetable.html              # Bài tập: Bảng gộp ô thời khóa biểu (rowspan, colspan)
├── simple_table.html           # Bài tập: Bảng đơn giản danh sách học sinh (table, tr, th, td)
├── image_display.html          # Bài tập: Thẻ hiển thị hình ảnh (img) với thuộc tính alt
├── search_form.html            # Bài tập: Gửi dữ liệu từ form lên server (Google & Bing search với GET)
├── simpleform.html             # Bài tập: Tạo form Order với select, radio, textfield, button và font wufoo
├── inline_styles.html          # Bài tập: CSS nội tuyến (style) định dạng văn bản, màu sắc, font, căn giữa
├── favorite_links.html         # Bài tập: Thẻ liên kết (a), target="_blank", mailto:
├── about.html                  # Bài tập: File liên kết nội bộ trong cùng thư mục
├── favorite_food_travel.html   # Bài tập: Danh sách món ăn (ul) và các bước du lịch (ol)
├── headings_paragraphs.html    # Bài tập: Thẻ tiêu đề (h1, h2) và các đoạn văn (p)
├── lists.html                  # Bài tập: Các loại thẻ danh sách (ul, ol, li, nested list)
├── text_formatting.html        # Bài tập: Định dạng văn bản và thuộc tính CSS nội tuyến
├── halong_bay.html             # Bài tập: Vịnh Hạ Long - Kỳ quan Thiên nhiên (thẻ h1, p, img, a)
└── README.md                   # Hướng dẫn và thông tin bài nộp
```

---

## 🔗 Liên kết nộp bài GitHub
- **Repository URL**: [https://github.com/dtc245180132-create/test](https://github.com/dtc245180132-create/test)
- **File bài nộp trực tiếp**:
  - `index.html`: Cấu trúc HTML trực quan gồm cả Ví dụ 1 và Ví dụ 2
  - `style.css`: Quy tắc định dạng lưới CSS Grid `grid-template-columns: 1fr 1fr 1fr` và `grid-template-columns: 100px 200px 1fr`
