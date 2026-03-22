# Hướng dẫn cấu hình Confluence

Hướng dẫn chi tiết cách lấy từng thông tin trong file `confluence.config.json` để đẩy tài liệu User Story/Use Case lên Confluence.

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
2. Xem URL: `https://your-company.atlassian.net/wiki/spaces/SPACE_KEY/...`
3. `SPACE_KEY` là phần sau `/spaces/` và trước `/` tiếp theo

**Ví dụ:**
- URL: `https://m2mba.atlassian.net/wiki/spaces/PROJ/overview`
- Space Key: `PROJ`

---

### 3. `username` - Confluence Username

**Mô tả:** Email dùng để đăng nhập Atlassian/Confluence.

**Cách lấy:**
- Dùng **email** bạn dùng để đăng nhập Confluence
- Ví dụ: `your-email@company.com`

**Lưu ý:**
- Không phải display name
- Phải là email đã đăng ký với Atlassian account

---

### 4. `api_token` - Confluence API Token

**Mô tả:** Token để xác thực khi gọi Confluence REST API.

**Cách lấy:**

1. **Đăng nhập Atlassian:**
   - Vào: https://id.atlassian.com/manage-profile/security/api-tokens
   - Hoặc: Atlassian Account Settings → Security → API tokens

2. **Tạo token mới:**
   - Click "Create API token"
   - Đặt tên token (ví dụ: "Confluence User Story Script")
   - Click "Create"
   - **Copy token ngay** (chỉ hiển thị 1 lần, không xem lại được)

3. **Lưu token:**
   - Paste vào file `confluence.config.json` → `api_token`
   - **KHÔNG commit** token lên Git

**Lưu ý:**
- Token chỉ hiển thị 1 lần khi tạo
- Nếu quên → phải tạo token mới
- Token có quyền tương đương với user tạo token

---

### 5. `parent_id` - Parent Page ID (Optional)

**Mô tả:** ID của page cha trên Confluence (nơi sẽ tạo page con).

**Cách lấy:**

1. Vào page cha trên Confluence
2. Xem URL: `https://your-company.atlassian.net/wiki/spaces/SPACE_KEY/pages/123456789/Page+Title`
3. `123456789` là `parent_id`

**Ví dụ:**
- URL: `https://m2mba.atlassian.net/wiki/spaces/PROJ/pages/123456789/User+Stories`
- Parent ID: `123456789`

**Lưu ý:**
- **Optional:** Nếu để trống (`""`), page sẽ được tạo ở root của Space
- Nếu có `parent_id`, page sẽ được tạo làm con của page đó

---

## 🚀 Cách sử dụng

### Bước 1: Tạo file config

```bash
# Copy file example
cp confluence.config.example.json confluence.config.json
```

### Bước 2: Điền thông tin

1. **Mở file `confluence.config.json`** và điền từng trường theo hướng dẫn trên:
   - `url`: URL Confluence
   - `space_key`: Space Key
   - `username`: Email đăng nhập
   - `api_token`: API Token (từ Atlassian)
   - `parent_id`: ID page cha (optional)

### Bước 3: Chạy script

```bash
python .claude/skills/ba-user-story-spec/scripts/push_to_confluence.py <file.md>
```

**Ví dụ:**
```bash
python .claude/skills/ba-user-story-spec/scripts/push_to_confluence.py "User stories/Epic 1/US 33/User_Story_TaoTicket_20260120.md"
```

---

## ✅ Kết quả

Sau khi chạy script thành công:

- Convert markdown sang Confluence format
- Tạo page mới trên Confluence
- **Title:** `User Story - [Tên chức năng] - [YYYY-MM-DD]`
- **Nội dung:** Toàn bộ tài liệu User Story (7 mục)
- **Labels:** `user-story`, `use-case`, `[epic-name]` (nếu có)
- **Parent:** Theo `parent_id` trong config (nếu có)

---

## 🔒 Bảo mật

- **KHÔNG commit** file `confluence.config.json` lên Git (đã có trong `.gitignore`)
- **KHÔNG chia sẻ** API token với người khác
- **KHÔNG** hardcode token trong code

---

## 🐛 Troubleshooting

### Lỗi: "Invalid credentials"
- Kiểm tra lại `username` và `api_token`
- Đảm bảo token chưa hết hạn hoặc bị revoke

### Lỗi: "Space not found"
- Kiểm tra lại `space_key`
- Đảm bảo user có quyền truy cập Space

### Lỗi: "Parent page not found"
- Kiểm tra lại `parent_id`
- Đảm bảo page cha tồn tại và user có quyền truy cập

### Lỗi: "Network error"
- Kiểm tra kết nối mạng
- Kiểm tra lại `url` (đảm bảo đúng format)

---

## 📚 Tham khảo

- [Confluence REST API](https://developer.atlassian.com/cloud/confluence/rest/)
- [Confluence Space Settings](https://support.atlassian.com/confluence-cloud/docs/view-space-settings/)
- [Atlassian API Tokens](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)
