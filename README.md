# Bài thực hành: Thuộc tính `grid-row-gap` (và `row-gap`) trong CSS Grid

Dự án thực hành tìm hiểu và áp dụng thuộc tính `grid-row-gap` trong CSS Grid để quy định kích thước khoảng cách giữa các hàng (`grid rows`).

---

## 🎯 Chi tiết các giá trị và ví dụ

### Cú pháp:
```css
grid-row-gap: length | percentage | global-values;
/* Lưu ý: Trong CSS hiện đại, thuộc tính row-gap được khuyến nghị sử dụng thay thế */
```

### 1. Giá trị độ dài cố định (`length`: px, cm, em, rem)
- **Mã nguồn**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 20px;
  }
  .grid-container div {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
  }
  ```
- **Giải thích**: Khoảng cách chiều dọc giữa các hàng của lưới được cố định là `20px`.

### 2. Giá trị phần trăm (`percentage`: %)
- **Mã nguồn**:
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 5%;
      height: 400px;
  }
  .grid-container div {
      background-color: lightgreen;
      padding: 20px;
      text-align: center;
  }
  ```
- **Giải thích**: Khoảng cách hàng được tính toán bằng `5%` chiều cao của khối cha (`400px * 5% = 20px`).

### 3. Các giá trị toàn cục (`global-values`: initial, inherit, unset)
- **Mã nguồn**:
  ```css
  /* initial: trả về mặc định của trình duyệt (0px) */
  .grid-container {
      grid-row-gap: initial;
  }
  /* inherit: kế thừa khoảng cách từ phần tử cha */
  .grid-container {
      grid-row-gap: inherit;
  }
  ```
- **Giải thích**:
  - `initial`: Thiết lập lại về giá trị mặc định (`0px` - các hàng dính liền nhau).
  - `inherit`: Kế thừa giá trị khoảng cách hàng do phần tử cha quy định.

---

## 📁 Cấu trúc thư mục dự án
```
├── index.html                  # Bài thực hành hiện tại: Cả 3 ví dụ grid-row-gap (length, %, global values)
├── style.css                   # File CSS định dạng cho 3 ví dụ grid-row-gap và row-gap
├── grid_row_gap.html           # Bản sao độc lập lưu trữ bài grid-row-gap
├── grid_column_start.html      # Bài thực hành: Thuộc tính grid-column-start (auto, span n, column-line)
├── grid_template_columns.html  # Bài thực hành: Thuộc tính grid-template-columns (1fr 1fr 1fr & 100px 200px 1fr)
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
  - `index.html`: Cấu trúc HTML gồm cả 3 ví dụ về khoảng cách hàng trong Grid
  - `style.css`: Quy tắc định dạng CSS cho `grid-row-gap: 20px`, `grid-row-gap: 5%`, `initial` và `inherit`
