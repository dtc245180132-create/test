# Bài thực hành: Bố cục trang web với thuộc tính Display

Dự án thực hành sử dụng các giá trị của thuộc tính `display` (`block`, `inline-block`), kết hợp với `width`, `max-width`, và `box-sizing: border-box` để xây dựng bố cục trang web cơ bản gồm thanh điều hướng, các cột nội dung và chân trang.

## 🎯 Mục tiêu bài học
1. **`display: block`**: Hiểu và sử dụng các phần tử cấp khối như `<h1>`, `<nav>`, `<section>`, `<footer>` chiếm trọn 100% chiều rộng dòng.
2. **`display: inline-block`**: Áp dụng cho các thẻ liên kết `<a>` trong thanh menu và các hộp `.box` nội dung để có thể vừa thiết lập kích thước (`width`, `padding`, `margin`) vừa nằm cùng một hàng ngang.
3. **`box-sizing: border-box`**: Đảm bảo kích thước padding không làm tràn chiều rộng tính toán của 3 cột, giúp các cột hiển thị cân đối và thẳng hàng.
4. **`max-width` & Căn giữa tự động**: Giới hạn độ rộng tối đa và căn giữa khối chứa (`margin-left: auto; margin-right: auto;`).

---

## 📁 Cấu trúc thư mục dự án
```
├── index.html               # Bài thực hành hiện tại: Bố cục trang web với display (block, inline-block)
├── style.css                # File CSS định dạng cho display (body, nav a, section, .box, footer)
├── display_layout.html      # Bản sao độc lập cho bài Bố cục trang web với display
├── html5_layout.html        # Bài thực hành: Tạo bố cục trang web bằng các thẻ HTML5
├── basic_layout_div.html    # Bài thực hành: Tạo bố cục cơ bản bằng thẻ DIV và CSS (#main, #head, #left, #content, #right, #footer)
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

---

## 🔗 Liên kết nộp bài GitHub
- **Repository URL**: [https://github.com/dtc245180132-create/test](https://github.com/dtc245180132-create/test)
- **File bài nộp trực tiếp**:
  - `index.html`: Cấu trúc HTML với `<h1>`, `<nav>`, `<section>` (3 cột `.box`), `<footer>`
  - `style.css`: Quy tắc định dạng CSS với `display: block`, `display: inline-block`, `width: 30%`, `box-sizing: border-box`
