# Bài thực hành: Luyện tập thao tác Clone dự án có sẵn từ GitHub

Dự án thực hành thao tác cơ bản và quan trọng nhất khi làm việc với hệ thống quản lý phiên bản Git: **sao chép (clone) một Repository có sẵn từ GitHub về máy tính cá nhân**.

---

## 🎯 1. Các bước thực hành đã thực hiện

1. **Truy cập Repository nguồn**: [https://github.com/codegym-vn/wf-hello](https://github.com/codegym-vn/wf-hello)
2. **Lấy đường dẫn sao chép**: `https://github.com/codegym-vn/wf-hello.git`
3. **Thực thi lệnh clone trên Terminal**:
   ```bash
   git clone https://github.com/codegym-vn/wf-hello.git
   ```
4. **Kiểm tra các tệp tin trong thư mục `wf-hello`**:
   - `hello.txt` (64 bytes): Nội dung `"Hello the world. This file was fetched from a Git repository."`
   - `README.md` (151 bytes): Tài liệu giới thiệu mã nguồn của CodeGym.
   - Thư mục ẩn `.git/`: Chứa toàn bộ lịch sử commit và siêu dữ liệu của kho lưu trữ.

---

## 📖 2. Cú pháp và Ý nghĩa của câu lệnh `git clone`

### Cú pháp:
```bash
git clone <repository_url> [tên_thư_mục_tùy_chọn]
```

### Ý nghĩa cốt lõi:
1. **Tạo bản sao cục bộ hoàn chỉnh**: Sao chép 100% mã nguồn, toàn bộ nhánh (`branches`), thẻ (`tags`) và toàn bộ cây lịch sử commit từ remote server về máy tính.
2. **Tự động cấu hình Remote `origin`**: Git tự động gán nhãn `origin` trỏ về URL ban đầu, giúp lập trình viên có thể thực hiện ngay các lệnh `git pull` và `git push` mà không cần lệnh `git remote add`.
3. **Tự động khởi tạo và Checkout**: Khởi tạo thư mục làm việc, thiết lập kho dữ liệu `.git` ngầm và tự động checkout ra nhánh mặc định (`main` hoặc `master`).

### Các tùy chọn nâng cao thường dùng:
- `git clone <url> my-custom-name`: Clone và đổi tên thư mục thành `my-custom-name`.
- `git clone -b <branch_name> <url>`: Chỉ checkout trực tiếp một nhánh cụ thể.
- `git clone --depth 1 <url>`: **Shallow Clone** - Chỉ lấy commit mới nhất (bỏ qua lịch sử cũ), giúp tải dự án dung lượng lớn siêu tốc.

---

## 🔍 3. Phân biệt `git clone` với các lệnh thông dụng khác

| Thao tác | Mục đích | Thời điểm sử dụng |
| :--- | :--- | :--- |
| **`git clone`** | Tải toàn bộ repository về máy chưa có mã nguồn | Bắt đầu tham gia dự án lần đầu tiên |
| **`git pull`** | Kéo và gộp các commit mới từ server về repo đã có trên máy | Hàng ngày trước khi bắt đầu code |
| **`git init`** | Khởi tạo repo Git mới từ thư mục cục bộ trống | Bắt đầu viết một dự án mới hoàn toàn |
| **`Fork` (GitHub)**| Nhân bản repo của người khác vào tài khoản cá nhân trên GitHub | Đóng góp Open Source hoặc tùy biến riêng |

---

## 📁 Cấu trúc thư mục dự án
```
├── index.html                  # Giao diện trực quan mô phỏng Terminal và bài học Git Clone
├── style.css                   # File CSS định dạng giao diện Terminal, bảng so sánh và thẻ kiến thức
├── git_clone_practice.html     # Bản sao độc lập tích hợp đầy đủ HTML và CSS nội bộ
├── uiux_registration.html      # Dự án UI/UX: Thiết Kế Giao Diện Trang Đăng Ký Người Dùng
├── success.html                # Trang độc lập: Xác nhận đăng ký thành công (Trang 2)
├── adobe_color_palette.html    # Bài thực hành: Khám phá & Ứng dụng Adobe Color (Color Harmony, Extract Theme)
├── grid_row_gap.html           # Bài thực hành: Thuộc tính grid-row-gap (length, %, global values)
├── grid_column_start.html      # Bài thực hành: Thuộc tính grid-column-start (auto, span n, column-line)
├── grid_template_columns.html  # Bài thực hành: Thuộc tính grid-template-columns (1fr 1fr 1fr & 100px 200px 1fr)
├── responsive_navbar.html      # Bài thực hành: Thanh điều hướng Responsive Navbar (Flexbox, Media Query, JS)
├── script.js                   # File JavaScript tương tác cho các dự án trước
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
├── .gitignore                  # Bỏ qua các repository clone cục bộ (cloned_projects/)
└── README.md                   # Hướng dẫn và thông tin bài nộp
```

---

## 🔗 Liên kết nộp bài GitHub
- **Repository URL**: [https://github.com/dtc245180132-create/test](https://github.com/dtc245180132-create/test)
- **Trang trực tiếp**:
  - `index.html`: Giao diện trực quan mô phỏng Terminal và bài học Git Clone
  - `git_clone_practice.html`: File lưu trữ độc lập bài học Git Clone
  - `style.css`: Bộ quy tắc CSS giao diện Terminal
