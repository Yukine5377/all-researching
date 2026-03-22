---
name: ba-user-story-spec
description: Skill viết tài liệu đặc tả User Story/Use Case hoàn chỉnh, tích hợp thông tin từ UI Spec, Sequence Diagram, và Activity Diagram. Tự động thu thập thông tin từ các skill liên quan nếu chưa có.
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
---

# Skill: User Story/Use Case Documentation

## 🎯 Mục đích

Tạo tài liệu đặc tả User Story/Use Case hoàn chỉnh, tích hợp thông tin từ:
- UI Specification (mô tả màn hình)
- Sequence Diagram (luồng tương tác)
- Activity Diagram (luồng xử lý và validation)

**Đặc điểm:**
- Tự động kiểm tra và thu thập thông tin từ các file đã có
- Tự động gọi các skill liên quan nếu thiếu thông tin
- Tạo tài liệu hoàn chỉnh theo cấu trúc chuẩn
- Lưu file .md vào thư mục User Story tương ứng

---

## 🚀 Quy trình

**Khởi động**: "Viết tài liệu User Story" / "Tạo đặc tả Use Case" / "Tổng hợp tài liệu UC" / "/ba-user-story-spec"

### **Bước 0: Thu thập thông tin cơ bản và xác định vị trí lưu file**

**BẮT BUỘC hỏi ngay:**

1. **Thông tin cơ bản:**
   - Tên chức năng / Use Case
   - Actor (Ai sử dụng)
   - Mục đích chức năng
   - **Epic** (nếu chưa có → hỏi)
   - **User Story** (nếu chưa có → hỏi)

2. **Vị trí lưu file (BẮT BUỘC):**
   - **BẮT BUỘC user chỉ ra** thư mục lưu file
   - Format: `User stories/[Epic]/[User Story]/`
   - Ví dụ: `User stories/Epic 1 - Quản lý Ticket/User Story 33 - ĐTV tạo ticket thủ công và gắn với cuộc gọi/`
   - Nếu thư mục chưa tồn tại → **tự động tạo**

3. **Ngữ cảnh Use Case:**
   - Mô tả ngắn về Use Case (để hiểu ngữ cảnh nếu thiếu thông tin)

**Quy tắc:**
- **KHÔNG ĐƯỢC** tự động suy đoán thư mục lưu file
- **PHẢI** hỏi user chỉ rõ thư mục lưu file
- Nếu user không chỉ rõ → **hỏi lại đến khi có**

**Ví dụ câu hỏi:**
> "Để tạo tài liệu User Story, bạn vui lòng cung cấp:
> 1. Tên chức năng / Use Case: [User input]
> 2. Actor (Ai sử dụng): [User input]
> 3. Mục đích: [User input]
> 4. Epic: [User input hoặc hỏi nếu chưa có]
> 5. User Story: [User input hoặc hỏi nếu chưa có]
> 6. **Thư mục lưu file (BẮT BUỘC):** Bạn muốn lưu file vào thư mục nào? (ví dụ: `User stories/Epic 1/US 33/`)
> 7. Mô tả ngắn về Use Case (ngữ cảnh): [User input]"

---

### **Bước 1: Kiểm tra các file đầu vào**

**Mục đích**: Kiểm tra xem đã có các file cần thiết chưa.

**Các file cần kiểm tra (theo thứ tự ưu tiên):**

1. **UI Specification** (`UI_Spec_*.md`)
   - Vị trí: Thư mục User Story đã chỉ định
   - Nội dung: Mô tả màn hình, các control, validation rules

2. **Sequence Diagram** (`Sequence_*.md`)
   - Vị trí: Thư mục User Story đã chỉ định
   - Nội dung: Sequence diagram (Mermaid), đặc tả API

3. **Activity Diagram** (`*_activity_flowchart.drawio` hoặc `Activity_*.md`)
   - Vị trí: Thư mục User Story đã chỉ định
   - Nội dung: Activity flowchart (Draw.io XML) hoặc mô tả activity flow

4. **Màn hình (MH)**
   - Hình ảnh màn hình hoặc code FE
   - Có thể user cung cấp trực tiếp

**Thực hiện:**

1. **Kiểm tra thư mục User Story:**
   - List files trong thư mục đã chỉ định
   - Tìm các file liên quan (UI_Spec, Sequence, Activity)

2. **Đánh giá mức độ đầy đủ:**
   - ✅ **Đầy đủ**: Có UI Spec + Sequence + Activity → Chuyển Bước 2
   - ⚠️ **Thiếu một phần**: Có một số file, thiếu một số file → Chuyển Bước 1.1
   - ❌ **Thiếu nhiều**: Chỉ có MH hoặc không có gì → Chuyển Bước 1.2

3. **Báo cáo cho user:**
   ```markdown
   ## 📋 Kiểm tra file đầu vào
   
   **Đã tìm thấy:**
   - ✅ UI Specification: `UI_Spec_*.md`
   - ✅ Sequence Diagram: `Sequence_*.md`
   - ✅ Activity Diagram: `*_activity_flowchart.drawio`
   - ✅ Màn hình: [Mô tả]
   
   **Thiếu:**
   - ❌ [Tên file còn thiếu]
   
   **Kế hoạch:**
   - [Mô tả cách xử lý]
   ```

---

### **Bước 1.1: Thu thập thông tin từ file đã có**

**Nếu đã có một số file:**

1. **Đọc và extract thông tin từ các file đã có:**
   - UI Spec → Lấy: Tên chức năng, Actor, Mục đích, Mô tả màn hình
   - Sequence Diagram → Lấy: Sequence diagram, Danh sách API
   - Activity Diagram → Lấy: Activity flowchart, Bảng mô tả luồng

2. **Xác định phần còn thiếu:**
   - Liệt kê các phần còn thiếu
   - Đề xuất cách bổ sung (gọi skill tương ứng hoặc user cung cấp)

3. **Hỏi user:**
   > "Tôi đã tìm thấy [danh sách file đã có]. Còn thiếu [danh sách file còn thiếu]. Bạn muốn tôi:
   > 1. Tự động tạo các file còn thiếu bằng cách gọi các skill tương ứng?
   > 2. Bạn sẽ cung cấp file sau?
   > 3. Bỏ qua phần thiếu và tạo tài liệu với thông tin hiện có?"

---

### **Bước 1.2: Tạo các file còn thiếu (nếu user đồng ý)**

**Nếu user đồng ý tự động tạo:**

**Tối thiểu cần có:**
- **MH (Màn hình)**: Hình ảnh hoặc code FE
- **Ngữ cảnh Use Case**: Mô tả ngắn để hiểu nghiệp vụ

**Quy trình tạo tự động:**

1. **Nếu thiếu UI Spec:**
   - Gọi skill `ba-ui-spec` với input: MH, Actor, Mục đích, Epic, User Story
   - Skill sẽ tạo file `UI_Spec_*.md`
   - **Lưu ý**: Skill `ba-ui-spec` sẽ tự động hỏi user về các thông tin cần thiết

2. **Nếu thiếu Sequence Diagram:**
   - Gọi skill `ba-sequence-spec` với input: UI Spec (nếu có), MH, User Flow, ERD
   - Skill sẽ tạo file `Sequence_*.md`
   - **Lưu ý**: Skill `ba-sequence-spec` sẽ tự động hỏi user về các đầu vào cần thiết

3. **Nếu thiếu Activity Diagram:**
   - Gọi skill `ba-activity-rule-spec` với input: Sequence Diagram (nếu có), ERD
   - Skill sẽ tạo file `*_activity_flowchart.drawio`
   - **Lưu ý**: Skill `ba-activity-rule-spec` sẽ tự động hỏi user về các thông tin cần thiết

**Lưu ý quan trọng:**
- **KHÔNG ĐƯỢC** tự động gọi skill mà không hỏi user
- **PHẢI** hỏi user xác nhận trước khi gọi skill
- Mỗi skill sẽ tự động hỏi user về thông tin cần thiết
- Sau khi skill tạo xong file → Quay lại Bước 1 để kiểm tra lại

**Ví dụ câu hỏi:**
> "Bạn có muốn tôi tự động tạo file UI Specification bằng skill `ba-ui-spec` không? Tôi sẽ hỏi bạn một số thông tin cần thiết."

---

### **Bước 2: Thu thập và tổng hợp thông tin**

**Mục đích**: Thu thập đầy đủ thông tin từ các file đã có để tạo tài liệu.

**Thực hiện:**

1. **Đọc các file đã có:**
   - UI Spec → Extract: Tên chức năng, Actor, Mục đích, Mô tả màn hình (bảng đặc tả)
   - Sequence Diagram → Extract: Sequence diagram (Mermaid code), Danh sách API (từ phần "Đặc tả API")
   - Activity Diagram → Extract: Activity flowchart (nếu có file .drawio hoặc mô tả), Bảng mô tả luồng (nếu có)

2. **Tổng hợp thông tin:**
   - Tạo bảng tổng hợp các thông tin đã thu thập
   - Xác định phần nào còn thiếu hoặc chưa rõ

3. **Hiển thị bảng tổng hợp cho user:**
   ```markdown
   ## 📊 Tổng hợp thông tin
   
   **Đã thu thập:**
   - ✅ Mô tả chung: Tên chức năng, Actor, Mục đích
   - ✅ Mô tả màn hình: [Số lượng control, loại chức năng]
   - ✅ Sequence diagram: [Số lượng API]
   - ✅ Activity diagram: [Có/Không]
   - ✅ Danh sách API: [Số lượng API]
   
   **Còn thiếu hoặc chưa rõ:**
   - ⚠️ [Phần còn thiếu]
   ```

4. **Hỏi user xác nhận:**
   > "Bạn vui lòng xác nhận thông tin tổng hợp trên có đầy đủ và chính xác không? Nếu có điều chỉnh, vui lòng cho tôi biết."

---

### **Bước 3: Tạo bảng mô tả luồng theo Activity Diagram**

**Mục đích**: Tạo bảng mô tả chi tiết luồng xử lý dựa trên Activity Diagram.

**Nếu đã có Activity Diagram:**

1. **Đọc Activity Diagram:**
   - Nếu là file `.drawio` → Đọc XML và parse các elements (Tasks, Decision Nodes, Flows)
   - Nếu là file `.md` → Đọc mô tả activity flow

2. **Tạo bảng mô tả luồng:**
   - Format bảng: `Bước | Actor | Mô tả bước | Điều kiện | Kết quả`
   - Dựa trên các Tasks và Decision Nodes trong Activity Diagram
   - Mô tả rõ ràng từng bước xử lý

**Nếu chưa có Activity Diagram:**

1. **Hỏi user:**
   > "Bạn có muốn tôi tạo Activity Diagram và bảng mô tả luồng không? Tôi sẽ sử dụng Sequence Diagram và UI Spec để tạo."

2. **Nếu user đồng ý:**
   - Gọi skill `ba-activity-rule-spec` với input: Sequence Diagram, ERD (nếu có)
   - Sau khi có Activity Diagram → Tạo bảng mô tả luồng

**Format bảng mô tả luồng:**

```markdown
| Bước | Actor | Mô tả bước | Điều kiện | Kết quả |
|------|-------|------------|-----------|---------|
| 1 | Actor | Nhập thông tin ticket | - | Dữ liệu đã nhập |
| 2 | FE | Validate dữ liệu đầu vào | - | Dữ liệu hợp lệ/Không hợp lệ |
| 3 | FE | Gửi yêu cầu tạo ticket | Dữ liệu hợp lệ | Request gửi lên BE |
| 4 | BE | Validate dữ liệu | - | Dữ liệu hợp lệ/Không hợp lệ |
| 5 | BE | Lưu thông tin ticket | Dữ liệu hợp lệ | Ticket được tạo |
| 6 | BE | Trả kết quả | - | Response trả về FE |
| 7 | FE | Kiểm tra kết quả | - | Thành công/Lỗi |
| 8 | FE | Hiển thị thông báo | Thành công | Thông báo thành công |
| 9 | FE | Hiển thị lỗi | Lỗi | Thông báo lỗi |
```

---

### **Bước 4: Tạo tài liệu User Story/Use Case**

**Mục đích**: Tạo file `.md` hoàn chỉnh với cấu trúc chuẩn.

**Cấu trúc tài liệu:**

```markdown
# [Tên chức năng / Use Case]

## 1. Mô tả chung

**Tên chức năng:** [Tên chức năng]
**Actor:** [Ai sử dụng]
**Mục đích:** [Mục đích chức năng]

## 2. Màn hình

*[Lưu ý: User sẽ tự chèn ảnh màn hình vào đây]*

## 3. Mô tả màn hình

[Bảng đặc tả UI Spec - lấy từ file UI_Spec_*.md]

## 4. Sequence Diagram

```mermaid
[Sequence diagram code - lấy từ file Sequence_*.md]
```

## 5. Danh sách các API

[Danh sách API với đặc tả chi tiết - lấy từ file Sequence_*.md]

### API 1: [Tên API]

**Thông tin cơ bản:**
- **Tên API:** [Tên]
- **Mục đích:** [Mục đích]
- **Method:** [GET/POST/PUT/DELETE]
- **Endpoint:** [Endpoint]

**Request Data:**
[Bảng Request Data]

**Response Data:**
[Bảng Response Data]

**Các trường hợp lỗi:**
[Mô tả error cases]

**Status Code:**
[Bảng Status Code]

### API 2: [Tên API]
[Similar structure]

## 6. Activity Diagram

*[Lưu ý: Nếu có file .drawio, user sẽ mở trong Draw.io để xem]*

[Mô tả activity flow hoặc reference đến file .drawio]

## 7. Bảng mô tả luồng theo Activity Diagram

[Bảng mô tả luồng - tạo ở Bước 3]

| Bước | Actor | Mô tả bước | Điều kiện | Kết quả |
|------|-------|------------|-----------|---------|
| ... | ... | ... | ... | ... |
```

**Thực hiện:**

1. **Tạo file `.md`** với cấu trúc trên
2. **Điền thông tin** từ các file đã thu thập:
   - Mô tả chung: Từ UI Spec hoặc thông tin user cung cấp
   - Mô tả màn hình: Từ UI Spec
   - Sequence Diagram: Từ file Sequence_*.md
   - Danh sách API: Từ file Sequence_*.md (phần "Đặc tả API")
   - Activity Diagram: Reference đến file .drawio hoặc mô tả
   - Bảng mô tả luồng: Từ Bước 3

3. **Lưu file:**
   - Tên file: `User_Story_[Tên_chức_năng]_[YYYYMMDD].md` hoặc `UC_[Tên]_[YYYYMMDD].md`
   - Vị trí: Thư mục User Story đã chỉ định ở Bước 0
   - **PHẢI** tạo thư mục nếu chưa có

4. **Hiển thị thông báo:**
   > "✅ Đã tạo tài liệu User Story tại: `[đường dẫn file]`"

5. **Hỏi user về format AC:**
   > "Bạn có muốn viết tài liệu theo dạng AC (Acceptance Criteria) với scenarios base và rule base không?
   > 
   > **Dạng AC sẽ có cấu trúc:**
   > 1. Mô tả chung về user story: Là ai, tôi muốn làm gì, vì sao
   > 2. Màn hình và Mô tả MH
   > 3. AC:
   >    - 3.1. AC theo dạng rule base
   >    - 3.2. AC theo dạng Scenarios base
   > 
   > **Lưu ý:** Phần AC sẽ bỏ qua các rule/case về xử lý giao diện.
   > 
   > Bạn muốn:
   > 1. **Giữ nguyên** dạng hiện tại (7 mục đầy đủ)
   > 2. **Viết theo dạng AC** (theo cấu trúc trên)
   > 3. **Cả hai** - Tạo cả 2 file (dạng hiện tại và dạng AC)
   > 
   > Vui lòng chọn (1/2/3):"

6. **Xử lý theo lựa chọn của user:**
   - **Chọn 1 (Giữ nguyên)**: Chuyển sang **Bước 5**
   - **Chọn 2 (Dạng AC)**: Chuyển sang **Bước 4.1** để tạo file AC, sau đó chuyển sang **Bước 5**
   - **Chọn 3 (Cả hai)**: Thực hiện **Bước 4.1** để tạo file AC, sau đó chuyển sang **Bước 5**

---

### **Bước 4.1: Tạo tài liệu User Story theo dạng AC**

**Mục đích**: Tạo file `.md` theo cấu trúc AC với rule base và scenarios base.

**Điều kiện**: User đã chọn viết theo dạng AC (chọn 2 hoặc 3 ở Bước 4).

**Cấu trúc tài liệu AC:**

```markdown
# [Tên chức năng / Use Case]

## 1. Mô tả chung về User Story

**Là ai (Actor):** [Ai sử dụng]
**Tôi muốn làm gì:** [Mục đích chức năng - mô tả hành động]
**Vì sao:** [Lý do, giá trị mang lại]

## 2. Màn hình và Mô tả MH

### 2.1. Màn hình

*[Lưu ý: User sẽ tự chèn ảnh màn hình vào đây]*

### 2.2. Mô tả màn hình

[Bảng đặc tả UI Spec - lấy từ file UI_Spec_*.md]

## 3. Acceptance Criteria (AC)

### 3.1. AC theo dạng Rule Base

[Danh sách các rule nghiệp vụ, validation rules, business rules]

**Format:**
- **Rule 1:** [Mô tả rule] - [Điều kiện áp dụng] - [Kết quả mong đợi]
- **Rule 2:** [Mô tả rule] - [Điều kiện áp dụng] - [Kết quả mong đợi]
- ...

**Nguồn thông tin:**
- Từ Activity Diagram (validation rules, business logic)
- Từ Sequence Diagram (API validation rules)
- Từ UI Spec (validation rules - **BỎ QUA các rule về xử lý giao diện**)

**Lưu ý:** 
- **BỎ QUA** các rule/case về xử lý giao diện (ví dụ: hiển thị tooltip, màu sắc, animation, responsive, v.v.)
- **CHỈ BAO GỒM** các rule nghiệp vụ, validation dữ liệu, business logic

### 3.2. AC theo dạng Scenarios Base

[Danh sách các scenarios/test cases]

**Format:**

#### Scenario 1: [Tên scenario - Happy path]

**Given:** [Điều kiện ban đầu]
**When:** [Hành động thực hiện]
**Then:** [Kết quả mong đợi]

#### Scenario 2: [Tên scenario - Error case]

**Given:** [Điều kiện ban đầu]
**When:** [Hành động thực hiện]
**Then:** [Kết quả mong đợi - lỗi]

#### Scenario 3: [Tên scenario - Edge case]

**Given:** [Điều kiện ban đầu]
**When:** [Hành động thực hiện]
**Then:** [Kết quả mong đợi]

**Nguồn thông tin:**
- Từ Activity Diagram (các luồng xử lý, decision points)
- Từ Sequence Diagram (các luồng tương tác, error cases)
- Từ bảng mô tả luồng (các bước xử lý)

**Lưu ý:**
- **BỎ QUA** các scenarios về xử lý giao diện (ví dụ: click button hiển thị tooltip, hover effect, v.v.)
- **CHỈ BAO GỒM** các scenarios về nghiệp vụ, xử lý dữ liệu, tương tác với API
```

**Thực hiện:**

1. **Tạo file `.md`** với cấu trúc AC trên

2. **Điền thông tin từ các file đã thu thập:**
   - **Mô tả chung:** Format "Là ai, Tôi muốn làm gì, Vì sao" từ thông tin Actor, Mục đích
   - **Màn hình và Mô tả MH:** Từ UI Spec
   - **AC Rule Base:** 
     - Extract từ Activity Diagram (validation rules, business logic)
     - Extract từ Sequence Diagram (API validation rules từ phần "Rule validate")
     - Extract từ UI Spec (validation rules - **BỎ QUA các rule về xử lý giao diện**)
   - **AC Scenarios Base:**
     - Extract từ Activity Diagram (các luồng xử lý, decision points)
     - Extract từ Sequence Diagram (các luồng tương tác, error cases)
     - Extract từ bảng mô tả luồng (các bước xử lý)

3. **Lọc bỏ các rule/case về xử lý giao diện:**
   - **BỎ QUA:** Tooltip, hover effect, animation, màu sắc, responsive, layout, icon alignment, button alignment (chỉ về visual)
   - **CHỈ BAO GỒM:** Validation dữ liệu, business rules, logic nghiệp vụ, xử lý API, error handling

4. **Lưu file:**
   - Tên file: `User_Story_[Tên_chức_năng]_AC_[YYYYMMDD].md` hoặc `UC_[Tên]_AC_[YYYYMMDD].md`
   - Vị trí: Thư mục User Story đã chỉ định ở Bước 0
   - **PHẢI** tạo thư mục nếu chưa có

5. **Hiển thị thông báo:**
   > "✅ Đã tạo tài liệu User Story (dạng AC) tại: `[đường dẫn file]`"

**Lưu ý quan trọng:**
- **PHẢI** bỏ qua các rule/case về xử lý giao diện trong phần AC
- **PHẢI** chỉ tập trung vào nghiệp vụ, validation, business logic
- **PHẢI** format rõ ràng theo cấu trúc Rule Base và Scenarios Base
- **PHẢI** extract thông tin từ các file đã có (Activity Diagram, Sequence Diagram, UI Spec)

---

### **Bước 5: Hỏi user về format output (DOCX hoặc Confluence)**

**Sau khi tạo tài liệu `.md`:**

1. **Hiển thị thông báo:**
   > "✅ Đã tạo tài liệu User Story tại: `[đường dẫn file]`"

2. **Hỏi user về format output:**
   > "Bạn muốn xuất tài liệu theo định dạng nào?
   > 1. **Xuất file Word (.docx)** - Tạo file Word từ tài liệu Markdown
   > 2. **Đẩy lên Confluence** - Tạo page mới trên Confluence với nội dung tài liệu
   > 3. **Cả hai** - Vừa xuất Word vừa đẩy lên Confluence
   > 4. **Không cần** - Chỉ giữ file Markdown
   > 
   > Vui lòng chọn (1/2/3/4):"

3. **Xử lý theo lựa chọn của user:**
   - **Chọn 1 (DOCX)**: Chuyển sang **Bước 5.1**
   - **Chọn 2 (Confluence)**: Chuyển sang **Bước 5.2**
   - **Chọn 3 (Cả hai)**: Thực hiện cả **Bước 5.1** và **Bước 5.2**
   - **Chọn 4 (Không cần)**: Kết thúc, chỉ giữ file Markdown

---

### **Bước 5.1: Xuất file Word (.docx)**

**Nếu user chọn xuất DOCX:**

1. **Xác định file cần xuất:**
   - Nếu user chọn "Giữ nguyên" (chọn 1 ở Bước 4) → Chỉ xuất file dạng hiện tại
   - Nếu user chọn "Dạng AC" (chọn 2 ở Bước 4) → Chỉ xuất file dạng AC
   - Nếu user chọn "Cả hai" (chọn 3 ở Bước 4) → Xuất cả 2 file (dạng hiện tại và dạng AC)

2. **Thông báo:**
   > "Đang xuất file Word từ tài liệu Markdown..."

3. **Chạy script xuất DOCX:**
   - Với mỗi file `.md` cần xuất:
     ```bash
     python .claude/skills/ba-user-story-spec/scripts/export_user_story_to_docx.py <user_story_file>
     ```

4. **Kiểm tra kết quả:**
   - Nếu thành công → Thông báo: "✅ Đã xuất file Word tại: `[đường dẫn file .docx]`"
   - Nếu có nhiều file → Thông báo từng file đã xuất
   - Nếu lỗi → Hiển thị lỗi và hướng dẫn user

5. **Lưu ý:**
   - File `.docx` sẽ được lưu cùng thư mục với file `.md`
   - Tên file: 
     - `User_Story_[Tên]_[YYYYMMDD].docx` (dạng hiện tại)
     - `User_Story_[Tên]_AC_[YYYYMMDD].docx` (dạng AC)

---

### **Bước 5.2: Đẩy lên Confluence**

**Nếu user chọn đẩy lên Confluence:**

1. **Xác định file cần đẩy:**
   - Nếu user chọn "Giữ nguyên" (chọn 1 ở Bước 4) → Chỉ đẩy file dạng hiện tại
   - Nếu user chọn "Dạng AC" (chọn 2 ở Bước 4) → Chỉ đẩy file dạng AC
   - Nếu user chọn "Cả hai" (chọn 3 ở Bước 4) → Đẩy cả 2 file (dạng hiện tại và dạng AC)

2. **Kiểm tra cấu hình Confluence:**
   - Kiểm tra file `confluence.config.json` trong thư mục skill
   - Nếu **chưa có** → Hướng dẫn user cấu hình (xem phần "Cấu hình Confluence" bên dưới)

3. **Nếu đã có cấu hình:**
   - **Thông báo:**
     > "Đang đẩy tài liệu lên Confluence..."

   - **Chạy script push lên Confluence:**
     - Với mỗi file `.md` cần đẩy:
       ```bash
       python .claude/skills/ba-user-story-spec/scripts/push_to_confluence.py <user_story_file>
       ```

   - **Kiểm tra kết quả:**
     - Nếu thành công → Thông báo: "✅ Đã tạo page trên Confluence: [URL page]"
     - Nếu có nhiều file → Thông báo từng page đã tạo
     - Nếu lỗi → Hiển thị lỗi và hướng dẫn user

3. **Nếu chưa có cấu hình:**
   - **Hướng dẫn user:**
     > "Bạn chưa có cấu hình Confluence. Để đẩy tài liệu lên Confluence, bạn cần:
     > 1. Copy file `confluence.config.example.json` → `confluence.config.json` (trong thư mục skill)
     > 2. Sửa file `confluence.config.json`, điền: url, space_key, username, api_token, parent_id
     > 3. Chạy lại: `python .claude/skills/ba-user-story-spec/scripts/push_to_confluence.py <file>`
     > 
     > Xem hướng dẫn chi tiết: `README_CONFLUENCE.md`"

4. **Thông tin page Confluence:**
   - **Title (dạng hiện tại):** `User Story - [Tên chức năng] - [YYYY-MM-DD]`
   - **Title (dạng AC):** `User Story - [Tên chức năng] - AC - [YYYY-MM-DD]`
   - **Nội dung:** 
     - Dạng hiện tại: Toàn bộ tài liệu User Story (7 mục)
     - Dạng AC: Toàn bộ tài liệu User Story theo cấu trúc AC (3 mục chính)
   - **Labels:** `user-story`, `use-case`, `[epic-name]` (nếu có)
   - **Parent:** Theo `parent_id` trong config

---

### **Bước 6: Xác nhận và chỉnh sửa (tùy chọn)**

**Sau khi xuất DOCX hoặc đẩy Confluence:**

1. **Hỏi user xác nhận:**
   > "Bạn vui lòng xem lại tài liệu User Story đã tạo. Nếu có điều chỉnh, vui lòng cho tôi biết."

2. **Nếu user yêu cầu chỉnh sửa:**
   - Cập nhật file `.md` theo yêu cầu
   - Lưu lại file
   - **Hỏi lại** có muốn xuất lại DOCX hoặc đẩy lại Confluence không

---

## ✅ BẮT BUỘC

1. **Bước 0:**
   - **BẮT BUỘC hỏi user chỉ rõ** thư mục lưu file
   - **KHÔNG ĐƯỢC** tự động suy đoán thư mục
   - Hỏi đầy đủ: Tên chức năng, Actor, Mục đích, Epic, User Story
   - Nếu thiếu → hỏi lại đến khi có

2. **Bước 1:**
   - **PHẢI** kiểm tra thư mục User Story trước
   - **PHẢI** báo cáo rõ ràng file nào đã có, file nào còn thiếu
   - **PHẢI** hỏi user trước khi tự động gọi skill tạo file

3. **Bước 1.2:**
   - **KHÔNG ĐƯỢC** tự động gọi skill mà không hỏi user
   - **PHẢI** hỏi user xác nhận trước khi gọi skill
   - Mỗi skill sẽ tự động hỏi user về thông tin cần thiết

4. **Bước 2:**
   - **PHẢI** đọc và extract thông tin từ các file đã có
   - **PHẢI** hiển thị bảng tổng hợp cho user xác nhận

5. **Bước 3:**
   - **PHẢI** tạo bảng mô tả luồng dựa trên Activity Diagram
   - Nếu chưa có Activity Diagram → hỏi user có muốn tạo không

6. **Bước 4:**
   - **PHẢI** tạo file `.md` với đầy đủ 7 mục theo cấu trúc
   - **PHẢI** lưu file vào thư mục User Story đã chỉ định
   - **PHẢI** tạo thư mục nếu chưa có
   - **PHẢI** hỏi user về format AC (giữ nguyên, dạng AC, hoặc cả hai) sau khi tạo file

7. **Bước 4.1:**
   - **PHẢI** tạo file `.md` theo cấu trúc AC nếu user chọn
   - **PHẢI** bỏ qua các rule/case về xử lý giao diện trong phần AC
   - **PHẢI** chỉ tập trung vào nghiệp vụ, validation, business logic
   - **PHẢI** format rõ ràng theo cấu trúc Rule Base và Scenarios Base
   - **PHẢI** extract thông tin từ các file đã có (Activity Diagram, Sequence Diagram, UI Spec)

8. **Bước 5:**
   - **PHẢI** hỏi user về format output (DOCX, Confluence, Cả hai, hoặc Không cần)
   - **PHẢI** xử lý theo lựa chọn của user
   - Nếu chọn Confluence → **PHẢI** kiểm tra cấu hình trước

8. **Tài liệu:**
   - **PHẢI** bao gồm đầy đủ 7 mục: Mô tả chung, Màn hình, Mô tả MH, Sequence diagram, Danh sách API, Activity diagram, Bảng mô tả luồng
   - **PHẢI** lấy thông tin từ các file đã có (không tự suy đoán)

---

## ❌ KHÔNG ĐƯỢC

1. **Tự động suy đoán** thư mục lưu file (phải hỏi user)
2. **Tự động gọi skill** mà không hỏi user xác nhận
3. **Bỏ qua bước kiểm tra** file đầu vào
4. **Tự suy đoán thông tin** nếu không có trong file (phải hỏi user)
5. **Bỏ qua mục nào** trong 7 mục của tài liệu
6. **Lưu file** vào thư mục khác với thư mục user chỉ định
7. **Tạo tài liệu** mà không có tối thiểu MH và ngữ cảnh UC
8. **Bỏ qua hỏi user** về format AC sau khi tạo file `.md` (Bước 4)
9. **Bỏ qua hỏi user** về format output (DOCX/Confluence) sau khi tạo file `.md`
10. **Tự động xuất DOCX hoặc đẩy Confluence** mà không hỏi user
11. **Bao gồm các rule/case về xử lý giao diện** trong phần AC (phải bỏ qua)

---

## 📋 Lưu ý quan trọng

1. **Tích hợp với các skill khác:**
   - Skill này **KHÔNG thay thế** các skill `ba-ui-spec`, `ba-sequence-spec`, `ba-activity-rule-spec`
   - Skill này **tổng hợp** thông tin từ các skill trên
   - Nếu thiếu file → **hỏi user** có muốn gọi skill tương ứng không

2. **Thứ tự ưu tiên:**
   - Ưu tiên sử dụng file đã có sẵn
   - Chỉ tạo file mới khi user đồng ý
   - Mỗi skill sẽ tự động hỏi user về thông tin cần thiết

3. **Format file:**
   - File output: `.md` (Markdown) - **BẮT BUỘC**
   - Có thể xuất `.docx` nếu user yêu cầu (Bước 5.1)
   - Có thể đẩy lên Confluence nếu user yêu cầu (Bước 5.2)
   - **PHẢI** hỏi user về format output sau khi tạo file `.md`

4. **Cấu trúc thư mục:**
   ```
   User stories/
     └── [Epic]/
         └── [User Story]/
             ├── User_Story_[Tên]_[YYYYMMDD].md  (tài liệu tổng hợp - dạng hiện tại)
             ├── User_Story_[Tên]_AC_[YYYYMMDD].md  (tài liệu dạng AC - nếu user chọn)
             ├── UI_Spec_[Tên]_[YYYYMMDD].md
             ├── Sequence_[Tên]_[YYYYMMDD].md
             └── [Tên]_activity_flowchart.drawio
   ```

---

## 🔧 Scripts

### **Xuất file Word (.docx):**
```bash
python .claude/skills/ba-user-story-spec/scripts/export_user_story_to_docx.py <user_story_file>
```

### **Đẩy lên Confluence:**
```bash
python .claude/skills/ba-user-story-spec/scripts/push_to_confluence.py <user_story_file>
```

**Lưu ý:**
- Script Confluence đọc config từ `confluence.config.json` trong thư mục skill
- Dùng `--config <path>` nếu đặt file config ở đường dẫn khác
- Xem hướng dẫn cấu hình: `README_CONFLUENCE.md`

---

## 🔐 Cấu hình Confluence

Để đẩy tài liệu lên Confluence, cấu hình qua **file config**. Xem hướng dẫn chi tiết: **[README_CONFLUENCE.md](README_CONFLUENCE.md)**

**Cách cấu hình:**

1. Copy `confluence.config.example.json` → `confluence.config.json` (cùng thư mục với `SKILL.md`).

2. Sửa file `confluence.config.json`, điền thông tin:
   ```json
   {
     "confluence": {
       "url": "https://your-company.atlassian.net/wiki",
       "space_key": "YOUR_SPACE_KEY",
       "username": "your-email@company.com",
       "api_token": "your-confluence-api-token",
       "parent_id": "123456789"
     }
   }
   ```

3. **Lưu ý:**
   - **url:** Confluence Cloud dùng `...atlassian.net/wiki`; Server/DC có thể chỉ `.../confluence` tùy cài đặt.
   - **api_token:** Lấy từ Atlassian Account Settings → Security → API tokens
   - **parent_id:** ID của page cha trên Confluence (optional, nếu không có sẽ tạo ở root của Space)

File `confluence.config.json` **đã được thêm vào .gitignore** (không commit). Dùng `--config <path>` nếu đặt config ở đường dẫn khác.

---

**Version:** 1.0.0 | **Ngày:** 2026-01-20
