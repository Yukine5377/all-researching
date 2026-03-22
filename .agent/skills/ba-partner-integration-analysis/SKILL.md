---
name: ba-partner-integration-analysis
description: Trợ lý chuyên dụng cho Business Analyst trong việc phân tích tích hợp với đối tác. Skill hỗ trợ xác định dữ liệu đã có/chưa có, phân tích chức năng cần thay đổi, vẽ luồng tích hợp và đặc tả API cho đối tác.
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
---

# Skill: Phân tích Tích hợp Đối tác cho Business Analyst

## 🎯 Mục đích

Hỗ trợ BA phân tích nhu cầu tích hợp với đối tác, xác định dữ liệu đã có/chưa có trong hệ thống nội bộ, phân tích các chức năng cần thay đổi, và tạo tài liệu đặc tả API tích hợp chi tiết.

**Đặc điểm:**
- Phân tích dữ liệu đối tác cần lấy và mapping với dữ liệu nội bộ
- Xác định dữ liệu đã có/chưa có trong hệ thống
- Phân tích các chức năng cần thay đổi để cung cấp dữ liệu
- Phân tích thực thể cần update và các trường dữ liệu liên quan
- Vẽ luồng tích hợp giữa 2 hệ thống bằng sequence diagram
- Đặc tả chi tiết các API cần mở cho đối tác
- Xuất tài liệu Word (.docx) chuẩn BA

---

## 🚀 Quy trình

**Khởi động**: "Phân tích tích hợp đối tác" / "Tạo API tích hợp" / "Phân tích dữ liệu đối tác" / "/ba-partner-integration-analysis"

### 🔹 **Bước 1: Thu thập thông tin đầu vào**

**Input cần thu thập từ user:**

1. **Hệ thống đối tác**
   - Tên hệ thống đối tác cần tích hợp
   - Mô tả ngắn về đối tác và mục đích tích hợp

2. **Nhu cầu tích hợp**
   - Mô tả chi tiết nhu cầu tích hợp
   - Dữ liệu bên đối tác cần lấy từ hệ thống của mình
   - Danh sách các trường thông tin đối tác cần (có thể liệt kê dạng bảng hoặc mô tả)

3. **ERD (Entity Relationship Diagram)**
   - File ERD hoặc mô tả ERD hiện tại của hệ thống
   - Các thực thể, thuộc tính, và quan hệ trong hệ thống

**Format hỏi user:**
```markdown
## 📋 Thu thập thông tin tích hợp đối tác

Để phân tích tích hợp với đối tác, tôi cần các thông tin sau:

### 1. Thông tin hệ thống đối tác
- **Tên hệ thống đối tác**: [User input]
- **Mô tả về đối tác và mục đích tích hợp**: [User input]

### 2. Nhu cầu tích hợp
- **Mô tả chi tiết nhu cầu tích hợp**: [User input]
- **Dữ liệu đối tác cần lấy**: [User input] (có thể liệt kê dạng bảng)

### 3. ERD (Entity Relationship Diagram)
- Bạn có thể upload file ERD hoặc mô tả ERD hiện tại của hệ thống
- Hoặc mô tả các thực thể, thuộc tính, và quan hệ trong hệ thống
```

**Sau khi thu thập đủ thông tin, TỰ ĐỘNG HỎI user confirm** trước khi chuyển sang bước tiếp theo.

**Ví dụ câu hỏi confirm:**
> "Bạn vui lòng xác nhận thông tin trên có chính xác không? Nếu có điều chỉnh, vui lòng cho tôi biết."

---

### 🔹 **Bước 2: Phân tích dữ liệu đã có/chưa có**

**Khi user xác nhận thông tin đầu vào**, skill sẽ phân tích và so sánh dữ liệu đối tác cần với dữ liệu hiện có trong hệ thống (dựa trên ERD).

**Xử lý:**
1. **Phân tích từng trường thông tin** đối tác cần:
   - So sánh với ERD để xác định dữ liệu đã có trong hệ thống
   - Xác định mapping giữa dữ liệu đối tác cần và dữ liệu nội bộ
   - Xác định dữ liệu chưa có trong hệ thống

2. **Tạo bảng phân tích:**

| Tên trường thông tin | Mapping dữ liệu bên mình | Đã có/Chưa có | Ghi chú |
|---------------------|-------------------------|---------------|---------|
| [Tên trường đối tác cần] | [Mapping với thực thể/thuộc tính trong ERD] | Đã có/Chưa có | [Ghi chú nếu cần] |

**Lưu ý:**
- **Mapping dữ liệu**: Mô tả rõ ràng dữ liệu nội bộ tương ứng (tên thực thể, thuộc tính, hoặc cách tính toán)
- **Đã có**: Dữ liệu đã tồn tại trong ERD, có thể cung cấp ngay
- **Chưa có**: Dữ liệu chưa có trong ERD, cần bổ sung hoặc tính toán

**Sau khi hiển thị bảng phân tích, TỰ ĐỘNG HỎI user confirm** trước khi chuyển sang bước tiếp theo.

**Ví dụ câu hỏi confirm:**
> "Bạn vui lòng xác nhận bảng phân tích dữ liệu trên có chính xác không? Đặc biệt là phần mapping và xác định dữ liệu đã có/chưa có. Nếu có điều chỉnh, vui lòng cho tôi biết."

---

### 🔹 **Bước 3: Phân tích chức năng cần thay đổi**

**Khi user xác nhận bảng phân tích dữ liệu**, skill sẽ phân tích các chức năng cần thay đổi để cung cấp dữ liệu chưa có.

**Xử lý:**
1. **Với các dữ liệu chưa có**, skill sẽ:
   - Xác định thực thể nào cần update để có thể cung cấp dữ liệu đó
   - Xác định các trường dữ liệu liên quan cần thêm/sửa
   - Xác định các chức năng hiện tại cần thay đổi

2. **Tạo bảng phân tích chức năng:**

| Tên chức năng | Loại thay đổi (A/M) | Nội dung thay đổi | Thực thể liên quan | Trường dữ liệu liên quan |
|---------------|---------------------|------------------|-------------------|-------------------------|
| [Tên chức năng] | A (Add) / M (Modify) | [Mô tả chi tiết nội dung thay đổi] | [Tên thực thể] | [Danh sách trường dữ liệu] |

**Lưu ý:**
- **Loại thay đổi**:
  - **A (Add)**: Thêm chức năng mới
  - **M (Modify)**: Sửa đổi chức năng hiện có
- **Nội dung thay đổi**: Mô tả chi tiết những gì cần thay đổi trong chức năng
- **Thực thể liên quan**: Thực thể trong ERD cần update
- **Trường dữ liệu liên quan**: Các trường/thuộc tính cần thêm/sửa trong thực thể

**Sau khi hiển thị bảng phân tích chức năng, TỰ ĐỘNG HỎI user confirm** trước khi chuyển sang bước tiếp theo.

**Ví dụ câu hỏi confirm:**
> "Bạn vui lòng xác nhận bảng phân tích chức năng cần thay đổi trên có chính xác không? Nếu có điều chỉnh, vui lòng cho tôi biết."

---

### 🔹 **Bước 4: Vẽ luồng tích hợp giữa 2 hệ thống**

**Khi user xác nhận bảng phân tích chức năng**, skill sẽ vẽ luồng tích hợp giữa hệ thống nội bộ và hệ thống đối tác.

**Xử lý:**
1. **Phân tích luồng tích hợp**:
   - Xác định các bước trong quá trình tích hợp
   - Xác định các API cần thiết
   - Xác định luồng dữ liệu giữa 2 hệ thống

2. **Tạo sequence diagram bằng Mermaid:**

**Yêu cầu:**
- Sequence thể hiện rõ các actor: **Hệ thống đối tác, API Gateway (nếu có), Backend, Database**
- **KHÔNG đưa object Database vào** sequence diagram (chỉ thể hiện Backend tương tác với DB)
- Thể hiện rõ luồng gọi API và response

**Format Mermaid:**
```mermaid
sequenceDiagram
    participant Partner as Hệ thống Đối tác
    participant API as API Gateway
    participant BE as Backend
    participant DB as Database
    
    Partner->>API: [API Call 1]
    API->>BE: [Forward Request]
    BE->>DB: [Query Data]
    DB-->>BE: [Data]
    BE-->>API: [Response]
    API-->>Partner: [Response]
    
    Partner->>API: [API Call 2]
    ...
```

**Sau khi hiển thị sequence diagram, TỰ ĐỘNG HỎI user confirm** trước khi chuyển sang bước tiếp theo.

**Ví dụ câu hỏi confirm:**
> "Bạn vui lòng xác nhận sequence diagram tích hợp trên có chính xác không? Nếu có điều chỉnh, vui lòng cho tôi biết."

---

### 🔹 **Bước 5: Đặc tả chi tiết từng API tích hợp**

**Sau khi user xác nhận sequence diagram**, skill sẽ chuyển sang **đặc tả chi tiết API** cho từng API được liệt kê trong sequence diagram.

**Mỗi API sẽ có mô tả dạng bảng gồm:**

#### **1. Thông tin cơ bản:**
- **Tên API**
- **Mục đích API** (mô tả ngắn gọn chức năng, dữ liệu cung cấp cho đối tác)
- **Method** (GET/POST/PUT/DELETE)
- **Endpoint**
- **Authentication/Authorization** (cách đối tác xác thực)

#### **2. Request Data:**
| Field | Type | Description | Required | Example |
|-------|------|-------------|----------|---------|
| [Field] | string/number/boolean/... | [Mô tả] | Yes/No | [Ví dụ] |

#### **3. Response Data:**
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| [Field] | [Type] | [Mô tả] | [Ví dụ] |

**Lưu ý:** Response data **PHẢI** mapping với dữ liệu đối tác cần (từ bước 2)

#### **4. Các trường hợp lỗi (Error Case):**
- Mô tả các tình huống lỗi có thể xảy ra với nguyên nhân và hướng xử lý

#### **5. Status Code:**
| Code | Meaning | Description | Example |
|------|---------|-------------|---------|
| 200 | Success | [Mô tả] | [Ví dụ response] |
| 400 | Bad Request | [Mô tả] | [Ví dụ] |
| 401 | Unauthorized | [Mô tả] | [Ví dụ] |
| 403 | Forbidden | [Mô tả] | [Ví dụ] |
| 404 | Not Found | [Mô tả] | [Ví dụ] |
| 500 | Internal Server Error | [Mô tả] | [Ví dụ] |

#### **6. Rate Limiting (nếu có):**
- Giới hạn số lượng request trong một khoảng thời gian
- Quota cho đối tác

#### **7. Security Considerations:**
- Cách bảo mật API (API Key, OAuth, JWT, etc.)
- Cách xử lý sensitive data

**Sau khi hoàn thành đặc tả từng API, TỰ ĐỘNG HỎI user confirm** để đảm bảo API mô tả đúng nghiệp vụ.

**Ví dụ câu hỏi confirm:**
> "Bạn vui lòng xác nhận đặc tả API [Tên API] trên có chính xác không? Nếu có điều chỉnh, vui lòng cho tôi biết."

---

### 🔹 **Bước 6: Tổng hợp và xuất file Word**

**Khi user xác nhận toàn bộ đặc tả API**, skill sẽ hỏi người dùng có muốn **xuất toàn bộ tài liệu** thành **file Word (.docx)** hay không.

**File Word được tạo theo template chuẩn cho BA**, dễ dùng cho tài liệu nghiệp vụ. **Viết bằng tiếng Việt.**

**Cấu trúc tài liệu Word:**

1. **Tên tích hợp, mô tả về mục đích tích hợp**
2. **Thông tin hệ thống đối tác**
3. **Nhu cầu tích hợp và dữ liệu đối tác cần**
4. **Bảng phân tích dữ liệu đã có/chưa có**
5. **Bảng phân tích chức năng cần thay đổi**
6. **Luồng tích hợp (Sequence diagram)**
7. **Đặc tả API** (tất cả các API đã phân tích)

**⚠️ Lưu ý:** Skill đừng confirm quá nhiều với user, chỉ confirm ở các bước quan trọng như đã nêu ở trên.

**Script xuất Word:**
```bash
python .claude/skills/ba-partner-integration-analysis/scripts/export_integration_spec_to_docx.py <integration_spec_file>
```

---

## 📋 Phong cách và tương tác

- **Ngôn ngữ thân thiện, rõ ràng**, có ví dụ minh họa.
- **Tự động xác nhận giữa các bước** (không confirm quá nhiều).
- **Các bảng hiển thị dạng bảng thông thường**, dễ đọc, không dùng Markdown trong bảng.
- **Trình bày tập trung vào nghiệp vụ**, tránh thuật ngữ kỹ thuật.
- **Viết bằng tiếng Việt**.

---

## ✅ BẮT BUỘC

1. **Bước 1:** Thu thập đầy đủ thông tin đầu vào (hệ thống đối tác, nhu cầu tích hợp, ERD), **TỰ ĐỘNG HỎI confirm** trước khi chuyển bước.
2. **Bước 2:** Phân tích dữ liệu đã có/chưa có, tạo bảng với mapping rõ ràng, **TỰ ĐỘNG HỎI confirm**.
3. **Bước 3:** Phân tích chức năng cần thay đổi, tạo bảng với đầy đủ thông tin (tên chức năng, loại thay đổi, nội dung, thực thể, trường dữ liệu), **TỰ ĐỘNG HỎI confirm**.
4. **Bước 4:** Vẽ sequence diagram tích hợp bằng Mermaid, **KHÔNG đưa Database object vào**, **TỰ ĐỘNG HỎI confirm**.
5. **Bước 5:** Đặc tả chi tiết từng API với đầy đủ Request/Response/Error/Status Code/Security, **TỰ ĐỘNG HỎI confirm**.
6. **Bước 6:** Hỏi user có muốn xuất Word không, nếu có thì gọi script xuất.
7. **Sequence diagram:** Không bao gồm Database object, chỉ Hệ thống đối tác, API Gateway (nếu có), Backend.
8. **Mapping dữ liệu:** PHẢI mapping rõ ràng giữa dữ liệu đối tác cần và dữ liệu nội bộ (dựa trên ERD).
9. **Response data:** PHẢI mapping với dữ liệu đối tác cần (từ bước 2).

---

## ❌ KHÔNG ĐƯỢC

1. Bỏ qua bước confirm ở các bước quan trọng.
2. Đưa Database object vào sequence diagram.
3. Confirm quá nhiều với user (chỉ confirm ở các bước đã nêu).
4. Bỏ qua phân tích mapping dữ liệu giữa đối tác và nội bộ.
5. Bỏ qua phân tích chức năng cần thay đổi cho dữ liệu chưa có.
6. Dùng thuật ngữ kỹ thuật quá nhiều, không tập trung vào nghiệp vụ.
7. Viết bằng tiếng Anh (phải viết tiếng Việt).
8. Bỏ qua việc phân tích ERD để xác định dữ liệu đã có/chưa có.
9. Tạo API mà không mapping với dữ liệu đối tác cần.

---

## 🔧 Script

**Xuất file Word:**
```bash
python .claude/skills/ba-partner-integration-analysis/scripts/export_integration_spec_to_docx.py <integration_spec_file>
```

---

## 📝 Ví dụ Output

### Bảng phân tích dữ liệu đã có/chưa có:
| Tên trường thông tin | Mapping dữ liệu bên mình | Đã có/Chưa có | Ghi chú |
|---------------------|-------------------------|---------------|---------|
| Mã đơn hàng | Order.order_code | Đã có | - |
| Tên khách hàng | Customer.full_name | Đã có | - |
| Số điện thoại | Customer.phone | Đã có | - |
| Địa chỉ giao hàng | Order.shipping_address | Đã có | - |
| Trạng thái đơn hàng | Order.status | Đã có | - |
| Thời gian giao hàng dự kiến | Tính toán từ Order.created_at + Shipping.delivery_days | Chưa có | Cần thêm trường delivery_days vào Shipping |

### Bảng phân tích chức năng cần thay đổi:
| Tên chức năng | Loại thay đổi | Nội dung thay đổi | Thực thể liên quan | Trường dữ liệu liên quan |
|---------------|---------------|-------------------|-------------------|-------------------------|
| Quản lý vận chuyển | M | Thêm trường thời gian giao hàng dự kiến vào form tạo/sửa vận chuyển | Shipping | delivery_days |
| API Lấy danh sách đơn hàng | A | Tạo API mới để đối tác lấy danh sách đơn hàng với đầy đủ thông tin | Order, Customer | - |

---

**Version:** 1.0.0 | **Ngày:** 2026-01-24
