# Dự án UI/UX: Thiết Kế Giao Diện Trang Đăng Ký Người Dùng (Registration & Success Flow)

Dự án thực hành chuyên sâu các nguyên tắc cơ bản và nâng cao của **UI/UX (User Interface / User Experience)**, tập trung vào tính khả dụng (Usability), tính dễ hiểu (Clarity) và thiết kế lấy người dùng làm trung tâm (User-Centered Design).

---

## 🎯 1. Nghiên cứu trải nghiệm người dùng (UX Research)
- **Tham khảo các mẫu chuẩn ngành (Google, Spotify, Facebook, Twitter/X)**:
  - Tối giản số lượng trường thông tin nhập liệu, chỉ giữ lại những trường cốt lõi nhất.
  - Cung cấp nút đăng ký nhanh qua mạng xã hội (Social Login) để giảm ma sát nhận thức.
  - Dòng chảy thị giác tự nhiên từ trên xuống dưới (Z-pattern / F-pattern).
  - Phản hồi trạng thái nhập liệu tức thì (Inline Validation) thay vì chờ bấm submit mới báo lỗi.

---

## 🎨 2. Các nguyên tắc UI/UX cốt lõi được áp dụng

| Nguyên tắc / Định luật | Ứng dụng cụ thể trong thiết kế | Lợi ích trải nghiệm người dùng |
| :--- | :--- | :--- |
| **Định luật Fitts (Fitts' Law)** | Nút CTA *"Đăng Ký Tài Khoản"* cao `50px`, độ rộng full-width `100%`, đặt ở cuối form. | Giảm thời gian di chuyển chuột/ngón tay, dễ bấm trúng trên cả Mobile & Desktop. |
| **Định luật Hick (Hick's Law)** | Giới hạn chính xác 4 trường: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu. | Giảm tải nhận thức, giúp người dùng ra quyết định nhanh hơn, tăng tỷ lệ hoàn tất form. |
| **Định luật Jakob (Jakob's Law)** | Đặt nút đăng ký bằng Google & Facebook ở đầu form theo mô thức quen thuộc. | Tận dụng thói quen có sẵn của người dùng từ các nền tảng lớn trên thế giới. |
| **Visual Feedback & Error Prevention** | Thanh đo độ mạnh mật khẩu (Yếu/Trung bình/Mạnh), nút ẩn/hiện mật khẩu (Eye toggle), viền đỏ/xanh thời gian thực. | Giúp người dùng biết ngay mật khẩu có an toàn hay không và tự sửa lỗi trước khi gửi form. |
| **Khả năng tiếp cận (Accessibility - a11y)** | Nhãn `<label>` rõ ràng, độ tương phản văn bản đạt chuẩn WCAG AA, focus ring nổi bật khi dùng phím `Tab`. | Hỗ trợ thân thiện cho mọi đối tượng người dùng, bao gồm người dùng chỉ dùng bàn phím. |
| **Responsive (Mobile-First)** | Container co giãn tối đa `480px`, font chữ tối thiểu `16px` trên mobile chống zoom Safari. | Hiển thị hoàn hảo, không bị tràn hay gãy layout trên smartphone, tablet và PC. |

---

## 📑 3. Luồng người dùng (User Flow) qua 2 trang

```
[BƯỚC 1: TRANG 1 - FORM ĐĂNG KÝ]
   ├── Người dùng nhập Họ và tên (tối thiểu 3 ký tự)
   ├── Nhập Email hợp lệ (kiểm tra định dạng Regex thời gian thực)
   ├── Nhập Mật khẩu (thanh đo màu Yếu -> Trung bình -> Rất mạnh hiển thị)
   ├── Nhập Xác nhận mật khẩu (kiểm tra trùng khớp)
   ├── Checkbox đồng ý Điều khoản & Chính sách bảo mật
   └── Nhấn nút lớn "Đăng Ký Tài Khoản" (Fitts' Law)
              │
              ▼ (Validation hợp lệ)
[BƯỚC 2: TRANG 2 - XÁC NHẬN THÀNH CÔNG]
   ├── Biểu tượng Checkmark xanh lá chúc mừng
   ├── Hiển thị cá nhân hóa Tên người dùng và Email đã đăng ký
   ├── Hướng dẫn kiểm tra hộp thư đến (Inbox / Spam) để kích hoạt trong 24h
   ├── Nút CTA "Mở Hòm Thư Email Ngay"
   └── Nút "Tạo thêm tài khoản khác" để quay lại form ban đầu
```

---

## 📁 Cấu trúc thư mục dự án
```
├── index.html                  # Giao diện chính: Chuyển đổi linh hoạt giữa Trang 1, Trang 2 và Báo cáo UI/UX
├── style.css                   # File CSS thiết kế hiện đại, gradient, responsive, validation styles
├── script.js                   # Xử lý logic validation thời gian thực, đo độ mạnh mật khẩu, ẩn/hiện pass, chuyển view
├── success.html                # Trang độc lập: Xác nhận đăng ký thành công (Trang 2)
├── uiux_registration.html      # Bản sao độc lập tích hợp đầy đủ HTML, CSS, JS cho dự án UI/UX
├── adobe_color_palette.html    # Bài thực hành: Khám phá & Ứng dụng Adobe Color (Color Harmony, Extract Theme)
├── grid_row_gap.html           # Bài thực hành: Thuộc tính grid-row-gap (length, %, global values)
├── grid_column_start.html      # Bài thực hành: Thuộc tính grid-column-start (auto, span n, column-line)
├── grid_template_columns.html  # Bài thực hành: Thuộc tính grid-template-columns (1fr 1fr 1fr & 100px 200px 1fr)
├── responsive_navbar.html      # Bài thực hành: Thanh điều hướng Responsive Navbar (Flexbox, Media Query, JS)
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
- **Trang trực tiếp**:
  - `index.html`: Giao diện tương tác đăng ký & xác nhận thành công & báo cáo UI/UX
  - `success.html`: Trang độc lập xác nhận đăng ký thành công
  - `style.css`: Bộ quy tắc CSS thiết kế giao diện
  - `script.js`: Xử lý tương tác, validation và chuyển đổi trang
