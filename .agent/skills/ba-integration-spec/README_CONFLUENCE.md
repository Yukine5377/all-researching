# Hướng dẫn cấu hình Confluence

Hướng dẫn chi tiết cách lấy từng thông tin trong file `confluence.config.json` để đẩy tài liệu tích hợp lên Confluence.

---

## 📋 Cấu trúc file config

File `confluence.config.json` có cấu trúc:

```json
{
  "confluence": {
    "url": "https://your-company.atlassian.net/wiki",
    "space_key": "PROJ",
    "username": "your-email@company.com",
    "api_token": "your-confluence-api-token",
    "parent_id": ""
  }
}
```

---

## 🔧 Hướng dẫn lấy từng thông tin

### 1. `url` - Confluence URL

**Mô tả:** URL base của Confluence instance.

**Cách lấy:**
- Mở Confluence trong trình duyệt
- Copy URL từ thanh địa chỉ, bỏ phần sau `/wiki` (nếu có)
- **Confluence Cloud:** Thường có dạng `https://your-company.atlassian.net/wiki`
- **Confluence Server/Data Center:** Có thể là `https://confluence.your-company.com` hoặc `https://your-company.com/confluence`

**Ví dụ:**
- Cloud: `https://m2mba.atlassian.net/wiki`
- Server: `https://confluence.company.com`

**Lưu ý:** 
- Confluence Cloud **bắt buộc** có `/wiki` ở cuối
- Server/DC có thể không có `/wiki`, tùy cấu hình

---

### 2. `space_key` - Space Key

**Mô tả:** Mã định danh của Space trong Confluence (nơi sẽ tạo page).

**Cách lấy:**
1. Vào Confluence → chọn Space cần dùng
2. Vào **Space Settings** (⚙️ Settings) → **Space details**
3. Tìm **Space Key** (thường là chữ in hoa, ví dụ: `PROJ`, `DOCS`, `ENG`)

**Hoặc:**
- Xem URL của Space: `https://your-company.atlassian.net/wiki/spaces/PROJ/...`
- Phần `PROJ` sau `/spaces/` chính là **Space Key**

**Ví dụ:**
- `PROJ` (Project Documentation)
- `DOCS` (Documentation)
- `ENG` (Engineering)

---

### 3. `username` - Email đăng nhập

**Mô tả:** Email dùng để đăng nhập Atlassian/Confluence.

**Cách lấy:**
- Dùng **email** bạn dùng để đăng nhập Confluence
- Không phải username, mà là **email đầy đủ**

**Ví dụ:**
- `your-email@company.com`
- `ba.team@company.com`

**Lưu ý:** Email này phải có quyền tạo page trong Space đã chọn.

---

### 4. `api_token` - API Token

**Mô tả:** Token để xác thực khi gọi Confluence REST API.

**Cách tạo:**
1. Truy cập: https://id.atlassian.com/manage-profile/security/api-tokens
2. Click **Create API token**
3. Đặt tên token (vd: "BA Integration Spec Skill")
4. Click **Create**
5. **Copy token ngay** (chỉ hiện 1 lần, không xem lại được!)

**Lưu ý:**
- Token dài khoảng 24-30 ký tự
- Nếu quên/mất token → tạo token mới và cập nhật lại config
- Token có quyền tương đương với user sở hữu (email ở `username`)

**Ví dụ:** token là một chuỗi dài do Atlassian cấp khi bạn bấm Create; dán vào `api_token` trong `confluence.config.json` **chỉ trên máy local**, không commit file chứa token thật.

---

### 5. `parent_id` - Parent Page ID (Tùy chọn)

**Mô tả:** ID của page cha nếu muốn tạo page con. Để trống nếu tạo page gốc trong Space.

**Cách lấy (nếu muốn tạo page con):**
1. Vào page cha trên Confluence
2. Xem URL: `https://your-company.atlassian.net/wiki/spaces/PROJ/pages/123456789/Page+Title`
3. Số `123456789` sau `/pages/` chính là **Page ID**

**Hoặc:**
1. Vào page cha
2. Click **...** (More actions) → **Page information**
3. Tìm **Page ID** trong thông tin

**Ví dụ:**
- Để trống: `""` → Tạo page gốc trong Space
- Có parent: `"123456789"` → Tạo page con dưới page có ID 123456789

**Lưu ý:** 
- Để trống (`""`) nếu muốn tạo page ở cấp gốc của Space
- Chỉ điền khi muốn tạo page con dưới một page cụ thể

---

## 📝 Các bước cấu hình

1. **Copy file mẫu:**
   ```bash
   cp confluence.config.example.json confluence.config.json
   ```

2. **Mở file `confluence.config.json`** và điền từng trường theo hướng dẫn trên:
   - `url`: URL Confluence
   - `space_key`: Mã Space
   - `username`: Email đăng nhập
   - `api_token`: API token (tạo mới)
   - `parent_id`: Để trống `""` hoặc điền Page ID

3. **Lưu file** và kiểm tra:
   - File nằm cùng thư mục với `SKILL.md`
   - File đã được thêm vào `.gitignore` (không commit lên Git)

4. **Test cấu hình:**
   ```bash
   python .claude/skills/ba-integration-spec/scripts/push_to_confluence.py <file.md>
   ```

---

## ⚠️ Lưu ý bảo mật

- **KHÔNG commit** file `confluence.config.json` lên Git (đã có trong `.gitignore`)
- **KHÔNG chia sẻ** API token với người khác
- Nếu token bị lộ → xóa token cũ và tạo token mới ngay
- Mỗi BA nên có file config riêng (local, không share)

---

## 🔍 Kiểm tra cấu hình

Sau khi điền config, chạy script để test:

```bash
python .claude/skills/ba-integration-spec/scripts/push_to_confluence.py Integration/<Tên hệ thống>/Integration_<Tên hệ thống>_YYYYMMDD.md
```

Nếu thành công, script sẽ:
- Convert markdown sang Confluence format
- Tạo page mới trên Confluence
- In ra link page vừa tạo

Nếu lỗi, kiểm tra:
- URL đúng format (Cloud có `/wiki`)
- Space Key đúng (chữ in hoa, không có khoảng trắng)
- Email và API token đúng
- User có quyền tạo page trong Space

---

## 📚 Tài liệu tham khảo

- [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
- [Confluence REST API](https://developer.atlassian.com/cloud/confluence/rest/)
- [Confluence Space Settings](https://support.atlassian.com/confluence-cloud/docs/view-space-settings/)

---

**Version:** 1.0.0 | **Ngày:** 2026-01-20
