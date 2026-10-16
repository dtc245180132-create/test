document.addEventListener("DOMContentLoaded", function () {
    // 1. Quản lý chuyển đổi Tab (Trang 1, Trang 2, Phân tích UI/UX)
    const btnTabRegister = document.getElementById("btnTabRegister");
    const btnTabSuccess = document.getElementById("btnTabSuccess");
    const btnTabReport = document.getElementById("btnTabReport");

    const viewRegister = document.getElementById("viewRegister");
    const viewSuccess = document.getElementById("viewSuccess");
    const viewReport = document.getElementById("viewReport");

    function switchView(targetView, targetBtn) {
        [viewRegister, viewSuccess, viewReport].forEach(v => v.classList.remove("active-view"));
        [btnTabRegister, btnTabSuccess, btnTabReport].forEach(b => b.classList.remove("active"));

        targetView.classList.add("active-view");
        targetBtn.classList.add("active");
    }

    btnTabRegister.addEventListener("click", () => switchView(viewRegister, btnTabRegister));
    btnTabSuccess.addEventListener("click", () => switchView(viewSuccess, btnTabSuccess));
    btnTabReport.addEventListener("click", () => switchView(viewReport, btnTabReport));

    // Nút quay lại từ Trang thành công
    const btnBackToForm = document.getElementById("btnBackToForm");
    if (btnBackToForm) {
        btnBackToForm.addEventListener("click", () => {
            switchView(viewRegister, btnTabRegister);
        });
    }

    // 2. Ẩn / Hiện mật khẩu (Show / Hide Password)
    function setupTogglePassword(toggleBtnId, inputId) {
        const toggleBtn = document.getElementById(toggleBtnId);
        const input = document.getElementById(inputId);

        if (toggleBtn && input) {
            toggleBtn.addEventListener("click", function () {
                const isPassword = input.getAttribute("type") === "password";
                input.setAttribute("type", isPassword ? "text" : "password");
                toggleBtn.textContent = isPassword ? "🙈" : "👁️";
            });
        }
    }

    setupTogglePassword("togglePassword", "password");
    setupTogglePassword("toggleConfirmPassword", "confirmPassword");

    // 3. Validation thời gian thực (Inline Validation)
    const form = document.getElementById("registrationForm");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("termsCheckbox");

    const strengthMeter = document.getElementById("strengthMeter");
    const strengthLabel = document.getElementById("strengthLabel");

    // Kiểm tra độ mạnh mật khẩu
    password.addEventListener("input", function () {
        const val = password.value;
        let score = 0;

        if (val.length >= 8) score++;
        if (/[A-Z]/.test(val) || /[a-z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        strengthMeter.className = "strength-meter";

        if (val.length === 0) {
            strengthLabel.textContent = "Độ mạnh mật khẩu: Chưa nhập";
            strengthLabel.style.color = "#64748b";
        } else if (score <= 2) {
            strengthMeter.classList.add("weak");
            strengthLabel.textContent = "Độ mạnh: Yếu (cần thêm chữ, số hoặc ký tự đặc biệt)";
            strengthLabel.style.color = "#ef4444";
        } else if (score === 3) {
            strengthMeter.classList.add("medium");
            strengthLabel.textContent = "Độ mạnh: Trung bình (an toàn)";
            strengthLabel.style.color = "#f59e0b";
        } else {
            strengthMeter.classList.add("strong");
            strengthLabel.textContent = "Độ mạnh: Rất mạnh! 💪";
            strengthLabel.style.color = "#10b981";
        }

        validateField(password, val.length >= 8 && /[0-9]/.test(val));
        if (confirmPassword.value) {
            validateField(confirmPassword, confirmPassword.value === val);
        }
    });

    fullname.addEventListener("input", function () {
        validateField(fullname, fullname.value.trim().length >= 3);
    });

    email.addEventListener("input", function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(email, emailRegex.test(email.value.trim()));
    });

    confirmPassword.addEventListener("input", function () {
        validateField(confirmPassword, confirmPassword.value === password.value && confirmPassword.value.length > 0);
    });

    terms.addEventListener("change", function () {
        const parent = terms.closest(".terms-group");
        if (terms.checked) {
            parent.classList.remove("has-error");
        }
    });

    function validateField(inputElement, isValid) {
        const formGroup = inputElement.closest(".form-group");
        if (isValid) {
            formGroup.classList.remove("has-error");
            formGroup.classList.add("is-valid");
        } else {
            formGroup.classList.add("has-error");
            formGroup.classList.remove("is-valid");
        }
        return isValid;
    }

    // 4. Xử lý gửi Form
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const isNameValid = validateField(fullname, fullname.value.trim().length >= 3);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = validateField(email, emailRegex.test(email.value.trim()));
        const isPassValid = validateField(password, password.value.length >= 8 && /[0-9]/.test(password.value));
        const isConfirmValid = validateField(confirmPassword, confirmPassword.value === password.value && confirmPassword.value.length > 0);

        const termsGroup = terms.closest(".terms-group");
        const isTermsValid = terms.checked;
        if (!isTermsValid) {
            termsGroup.classList.add("has-error");
        } else {
            termsGroup.classList.remove("has-error");
        }

        if (isNameValid && isEmailValid && isPassValid && isConfirmValid && isTermsValid) {
            // Cập nhật thông tin vào Trang 2
            document.getElementById("successUser").textContent = fullname.value.trim();
            document.getElementById("successEmail").textContent = email.value.trim();

            // Chuyển sang Trang 2: Xác nhận thành công
            switchView(viewSuccess, btnTabSuccess);

            // Reset form cho lần kế tiếp
            form.reset();
            strengthMeter.className = "strength-meter";
            strengthLabel.textContent = "Độ mạnh mật khẩu: Chưa nhập";
            document.querySelectorAll(".form-group").forEach(fg => {
                fg.classList.remove("is-valid", "has-error");
            });
        }
    });
});
