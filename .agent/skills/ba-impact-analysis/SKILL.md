---
name: ba-impact-analysis
description: Skill phân tích tính khả thi và phạm vi ảnh hưởng khi có yêu cầu thay đổi từ stakeholder. Tự động phân tích impact theo 6 nhóm, đánh giá mức độ ảnh hưởng, và liệt kê công việc BA cần làm.
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
---

# Skill: Impact Analysis - Phân tích Phạm vi Ảnh hưởng

## 🎯 Mục đích

Phân tích tính khả thi và phạm vi ảnh hưởng khi có yêu cầu thay đổi từ stakeholder. Skill tự động:
- Phân tích impact theo 6 nhóm: Chức năng, Quy trình, Dữ liệu, Giao diện, Tích hợp, Stakeholder
- Đánh giá mức độ ảnh hưởng (Cao/Trung bình/Thấp) với lý do rõ ràng
- Liệt kê công việc BA cần làm nếu change được triển khai
- Ghi lại risk & lưu ý dưới góc nhìn BA
- Tạo list câu hỏi cần làm rõ với stakeholder (lý do, data, process, công thức, quy định)
- Tạo danh sách yêu cầu thay đổi theo template (Add/Modify) và yêu cầu user confirm
- Viết User Story draft cho chức năng mới (Add)
- Tạo file tổng hợp và update User Story cho chức năng cần sửa (Modify)

**Đặc điểm:**
- Tự động hỏi lại BA nếu thiếu thông tin (ERD/UC/flow)
- Cho phép BA "giả định" - AI sẽ ghi rõ "Giả định..."
- Output format chuẩn để copy vào CR/BBH
- Tập trung vào góc nhìn nghiệp vụ, không đi sâu kỹ thuật

---

## 🚀 Quy trình

**Khởi động**: "Phân tích impact" / "Phân tích phạm vi ảnh hưởng" / "Impact analysis" / "/ba-impact-analysis"

### **Bước 0: Thu thập Input từ BA**

**Mục đích**: Thu thập đầy đủ thông tin cần thiết để phân tích impact.

**BA cần cung cấp (hoặc trả lời cho AI) các thông tin sau:**

#### **1. Yêu cầu thay đổi**

**1.1. Stakeholder muốn thay đổi điều gì, mục tiêu là gì:**
- Mô tả yêu cầu thay đổi cụ thể
- Mục tiêu của thay đổi

**1.2. Lý do của yêu cầu:**
- Pain point (vấn đề hiện tại)
- Rủi ro (nếu không thay đổi)
- Cơ hội (nếu thay đổi)

#### **2. Bức tranh hệ thống liên quan**

**2.1. ERD hoặc mô tả entity/field chính:**
- Các entity liên quan tới yêu cầu
- Các field/attribute liên quan
- Relationship giữa các entity

**2.2. Danh sách use case / user story liên quan (nếu biết):**
- UC/US bị ảnh hưởng trực tiếp
- UC/US bị ảnh hưởng gián tiếp

**2.3. Quy trình nghiệp vụ (flow/process) liên quan:**
- Flow/process hiện tại
- Các bước trong flow
- Decision points, approval steps

#### **3. Quy ước làm việc với AI**

**Nếu BA chưa có ERD/UC/flow:**
- AI được phép hỏi lại 1–2 câu để làm rõ
- Nếu BA bảo "cứ giả định giúp", AI tự giả định nhưng **PHẢI ghi rõ "Giả định …"** trong output

**Format hỏi user:**
```markdown
## 📋 Thu thập thông tin cho Impact Analysis

Để phân tích phạm vi ảnh hưởng, tôi cần các thông tin sau:

### 1. Yêu cầu thay đổi

**1.1. Stakeholder muốn thay đổi điều gì, mục tiêu là gì:**
[User input]

**1.2. Lý do của yêu cầu:**
- Pain point: [User input]
- Rủi ro: [User input]
- Cơ hội: [User input]

### 2. Bức tranh hệ thống liên quan

**2.1. ERD hoặc mô tả entity/field chính:**
- Các entity liên quan: [User input hoặc upload file ERD]
- Các field/attribute liên quan: [User input]
- Relationship: [User input]

**2.2. Danh sách use case / user story liên quan:**
[User input - có thể để trống nếu chưa biết]

**2.3. Quy trình nghiệp vụ (flow/process) liên quan:**
[User input - có thể upload file flow hoặc mô tả]

### 3. Thông tin bổ sung (nếu có)**
[User input]
```

**Thực hiện:**
1. **Hỏi user** theo format trên
2. **Nếu thiếu thông tin quan trọng** (ERD/UC/flow):
   - **Hỏi lại 1–2 câu** để làm rõ
   - Nếu user bảo "cứ giả định giúp" → Ghi nhận và sẽ ghi rõ "Giả định..." trong output
3. **Xác nhận lại** với user trước khi chuyển sang bước phân tích

---

### **Bước 1: Tóm tắt yêu cầu**

**Mục đích**: Đọc input và tóm tắt lại yêu cầu thay đổi bằng ngôn ngữ BA.

**Thực hiện:**
1. **Đọc và phân tích** tất cả input từ BA
2. **Tóm tắt yêu cầu** bằng ngôn ngữ BA (1–2 đoạn/bullet)
3. **Nêu rõ**: "thay đổi cái gì – cho ai – để làm gì"

**Format output:**
```markdown
## 📝 Tóm tắt yêu cầu thay đổi

[3–7 bullet, nói rõ "cái gì – cho ai – để làm gì – vì sao"]

**Ví dụ:**
- Thay đổi quy trình xử lý ticket: Thêm bước phê duyệt cho Supervisor khi giá trị ticket > 10 triệu VNĐ
- Đối tượng: Supervisor CSKH, Agent CSKH
- Mục đích: Kiểm soát tốt hơn các ticket giá trị cao, giảm rủi ro xử lý sai
- Lý do: Hiện tại Agent có thể tự xử lý ticket giá trị cao mà không cần phê duyệt, dẫn đến rủi ro nghiệp vụ
```

**Lưu ý:**
- **PHẢI** nêu rõ "thay đổi cái gì – cho ai – để làm gì"
- **PHẢI** ghi rõ "Giả định..." nếu có giả định từ BA
- Tóm tắt ngắn gọn, tập trung vào nghiệp vụ

---

### **Bước 2: Phân tích phạm vi ảnh hưởng theo 6 nhóm**

**Mục đích**: Phân tích impact theo 6 nhóm để xác định đối tượng bị ảnh hưởng.

**6 nhóm cần phân tích:**

#### **Nhóm 1: Chức năng / Use Case / User Story**
- UC/US bị ảnh hưởng trực tiếp
- UC/US bị ảnh hưởng gián tiếp
- UC/US mới cần tạo

#### **Nhóm 2: Quy trình nghiệp vụ (Process/Flow)**
- Flow/process bị ảnh hưởng
- Các bước trong flow cần thay đổi
- Decision points, approval steps mới

#### **Nhóm 3: Dữ liệu & Báo cáo (Field, Entity, Báo cáo, KPI)**
- Entity/field cần thêm/sửa/xóa
- Báo cáo/KPI bị ảnh hưởng
- Logic tính toán cần thay đổi

#### **Nhóm 4: Giao diện màn hình & Trải nghiệm người dùng**
- Màn hình cần thay đổi
- Form/control cần thêm/sửa/xóa
- User flow trên giao diện

#### **Nhóm 5: Tích hợp hệ thống khác (API, Batch, Message)**
- API cần thay đổi
- API mới cần tạo
- Batch job, message queue bị ảnh hưởng
- Tích hợp với hệ thống đối tác

#### **Nhóm 6: Stakeholder / Bộ phận bị tác động**
- Stakeholder bị ảnh hưởng trực tiếp
- Bộ phận cần thay đổi cách làm việc
- Training, communication cần thiết

**Thực hiện:**
1. **Phân tích từng nhóm** dựa trên input từ BA
2. **Xác định đối tượng bị ảnh hưởng** trong mỗi nhóm
3. **Mô tả chi tiết** cho từng đối tượng (xem Bước 3)

**Lưu ý:**
- **PHẢI** phân tích đầy đủ 6 nhóm
- **PHẢI** dựa trên input từ BA (ERD, UC, flow)
- **PHẢI** ghi rõ "Giả định..." nếu có giả định

---

### **Bước 3: Mô tả chi tiết cho từng đối tượng bị ảnh hưởng**

**Mục đích**: Với mỗi UC/flow/entity/màn hình… mà AI xác định, mô tả chi tiết impact.

**Với mỗi đối tượng bị ảnh hưởng, yêu cầu AI nêu:**

1. **Ảnh hưởng cụ thể:**
   - Thêm/sửa/xóa gì
   - Rule nào đổi
   - Bước nào thêm/bớt
   - Field nào thay đổi

2. **Mức độ:**
   - **Cao**: Ảnh hưởng lớn, thay đổi nhiều, ảnh hưởng đến nhiều stakeholder
   - **Trung bình**: Ảnh hưởng vừa phải, thay đổi một phần
   - **Thấp**: Ảnh hưởng nhỏ, thay đổi ít

3. **Lý do:**
   - Vì sao đánh giá mức độ như vậy (1–2 câu)
   - Giải thích rõ ràng dựa trên nghiệp vụ

**Format output (sẽ được tổng hợp vào bảng ở Bước 4):**
```markdown
### Nhóm: Chức năng
- **UC-01: Tạo ticket**
  - Ảnh hưởng: Cần thêm field "Giá trị ticket", đổi rule SLA khi giá trị > 10 triệu
  - Mức độ: Cao
  - Lý do: Ảnh hưởng toàn bộ flow tạo ticket, mọi Agent đều phải nhập thêm field mới

### Nhóm: Quy trình
- **Flow xử lý khiếu nại**
  - Ảnh hưởng: Thêm bước phê duyệt khi giá trị > 10 triệu VNĐ
  - Mức độ: Trung bình
  - Lý do: Chỉ áp dụng cho 1 nhánh quy trình (ticket giá trị cao), không ảnh hưởng ticket thường
```

**Lưu ý:**
- **PHẢI** mô tả cụ thể, không chung chung
- **PHẢI** đánh giá mức độ với lý do rõ ràng
- **PHẢI** tập trung vào nghiệp vụ, không đi sâu kỹ thuật

---

### **Bước 4: Tạo bảng Impact Analysis**

**Mục đích**: Tổng hợp tất cả impact vào bảng để dễ copy vào CR/BBH.

**Format bảng:**

```markdown
## 📊 Bảng Impact Analysis

| Nhóm | Đối tượng bị ảnh hưởng | Ảnh hưởng cụ thể (BA view) | Mức độ | Lý do |
|------|------------------------|----------------------------|--------|-------|
| Chức năng | UC-01: Tạo ticket | Cần thêm field "Giá trị ticket", đổi rule SLA khi giá trị > 10 triệu | Cao | Ảnh hưởng toàn bộ flow tạo ticket |
| Quy trình | Flow xử lý khiếu nại | Thêm bước phê duyệt khi giá trị > X | Trung bình | Chỉ áp dụng cho 1 nhánh quy trình |
| Dữ liệu | Entity Ticket, báo cáo SLA | Thêm field mới, chỉnh lại logic tính SLA | Cao | Tác động đến KPI, dashboard hiện có |
| Giao diện | Màn hình tạo ticket | Thêm trường mới, chỉnh layout | Trung bình | Thay đổi thao tác user |
| Tích hợp | API tạo ticket từ tổng đài | Thêm tham số bắt buộc, chỉnh mapping | Cao | Mọi ticket từ tổng đài đều bị ảnh hưởng |
| Stakeholder | CSKH, Supervisor CSKH | Thay đổi cách làm việc, cách đọc báo cáo | Trung bình | Cần thông báo & training |
```

**Thực hiện:**
1. **Tổng hợp** tất cả đối tượng bị ảnh hưởng từ Bước 3
2. **Tạo bảng** theo format trên
3. **Sắp xếp** theo nhóm và mức độ ảnh hưởng (Cao → Trung bình → Thấp)

**Lưu ý:**
- **PHẢI** bao gồm đầy đủ 6 nhóm
- **PHẢI** mô tả "Ảnh hưởng cụ thể" ở góc nhìn BA (nghiệp vụ)
- **PHẢI** đánh giá mức độ với lý do rõ ràng

---

### **Bước 5: Liệt kê việc BA phải làm nếu change được triển khai**

**Mục đích**: Liệt kê công việc BA cần làm để triển khai change.

**Các loại công việc BA cần làm:**

#### **1. Cập nhật tài liệu hiện có:**
- BRD/SRS/Use Case
- Flow nghiệp vụ
- Rule business
- Báo cáo/KPI definition

#### **2. Soạn/bổ sung tài liệu mới:**
- Form mới
- Guideline cho user
- Training material
- Communication plan

#### **3. Chuẩn bị nội dung hỗ trợ các bên khác (Dev/Test/Ops):**
- Danh sách chức năng/API/flow cần chỉnh (ở mức BA nhìn)
- Các case nghiệp vụ mới, edge case mới BA cần mô tả
- Business rules mới cần implement

**Format output:**
```markdown
## ✅ Danh sách "việc của BA"

### 1. Cập nhật tài liệu hiện có
- Cập nhật BRD/SRS phần [Tên phần]
- Cập nhật UC-01, UC-02 với luồng chính/phụ mới
- Vẽ/điều chỉnh lại process [Tên process]
- Cập nhật định nghĩa field mới + impact lên báo cáo X, Y

### 2. Soạn/bổ sung tài liệu mới
- Soạn form mới cho [Mục đích]
- Viết guideline cho user về [Nội dung]
- Chuẩn bị training material cho [Đối tượng]

### 3. Chuẩn bị nội dung hỗ trợ Dev/Test/Ops
- Danh sách chức năng cần chỉnh: [Liệt kê]
- Danh sách API cần chỉnh: [Liệt kê]
- Các case nghiệp vụ mới cần mô tả: [Liệt kê]
- Edge case mới: [Liệt kê]
```

**Thực hiện:**
1. **Dựa trên bảng Impact Analysis** (Bước 4) để xác định công việc
2. **Liệt kê cụ thể** từng công việc BA cần làm
3. **Phân loại** theo 3 nhóm trên

**Lưu ý:**
- **PHẢI** liệt kê cụ thể, không chung chung
- **PHẢI** tập trung vào công việc BA, không đi sâu kỹ thuật
- **PHẢI** dựa trên impact đã phân tích

---

### **Bước 6: Ghi lại Risk & Lưu ý dưới góc nhìn BA**

**Mục đích**: Ghi lại rủi ro và lưu ý để BA quản lý và báo cáo cho PM/Stakeholder.

**Các loại risk cần ghi lại:**

#### **1. Rủi ro về nghiệp vụ nếu thay đổi:**
- Conflict rule (mâu thuẫn với rule hiện tại)
- Ảnh hưởng KPI
- Compliance risk
- Ảnh hưởng đến quy trình khác

#### **2. Rủi ro về hiểu nhầm yêu cầu:**
- Terminology (thuật ngữ không rõ)
- Scope mơ hồ (phạm vi không rõ ràng)
- Requirement không đầy đủ

#### **3. Phụ thuộc mà BA cần quản lý:**
- Phải chốt với bộ phận nào
- Tài liệu nào cần có trước
- Quyết định nào cần chốt
- Timeline dependency

**Format output:**
```markdown
## ⚠️ Risk & Lưu ý (BA note cho PM/Stakeholder)

### 1. Rủi ro về nghiệp vụ
- [Mô tả risk] - [Impact] - [Cách xử lý đề xuất]
- ...

### 2. Rủi ro về hiểu nhầm yêu cầu
- [Mô tả risk] - [Cần làm rõ gì]
- ...

### 3. Phụ thuộc cần quản lý
- [Phụ thuộc] - [Cần chốt với ai] - [Timeline]
- ...
```

**Thực hiện:**
1. **Phân tích risk** dựa trên impact đã phân tích
2. **Ghi lại 3–5 bullet** tập trung vào: risk nghiệp vụ, risk về scope, dependency cần chốt
3. **Đề xuất cách xử lý** (nếu có)

**Lưu ý:**
- **PHẢI** tập trung vào góc nhìn BA (nghiệp vụ)
- **PHẢI** ghi rõ phụ thuộc cần quản lý
- **PHẢI** đề xuất cách xử lý (nếu có)

---

### **Bước 6.5: Tạo list câu hỏi cần làm rõ với Stakeholder**

**Mục đích**: Đưa ra list câu hỏi cần phải làm rõ thêm với stakeholder để hiểu rõ yêu cầu và đảm bảo không bỏ sót thông tin quan trọng.

**Các nhóm câu hỏi cần tạo:**

#### **1. Câu hỏi về Lý do và Vấn đề cần giải quyết:**
- Hiểu rõ lý do vì sao lại có yêu cầu đó
- Vấn đề cụ thể cần giải quyết là gì
- Pain point hiện tại là gì
- Kết quả mong đợi sau khi thay đổi

#### **2. Câu hỏi về Thông tin Data:**
- **Input data:**
  - Dữ liệu đầu vào cần có là gì?
  - Nguồn dữ liệu từ đâu?
  - Format dữ liệu như thế nào?
  - Dữ liệu có sẵn hay cần thu thập?
  
- **Output data:**
  - Dữ liệu đầu ra cần có là gì?
  - Format dữ liệu đầu ra như thế nào?
  - Ai sẽ sử dụng dữ liệu đầu ra?
  - Dữ liệu đầu ra có cần lưu trữ không?

#### **3. Câu hỏi về Process/Quy trình:**
- Process để thực hiện công việc liên quan tới yêu cầu thay đổi
- Các bước trong process là gì?
- Ai thực hiện từng bước?
- Điều kiện để chuyển sang bước tiếp theo?
- Approval/Phê duyệt ở đâu?

#### **4. Câu hỏi về Công thức tính toán:**
- Có công thức tính toán nào liên quan không?
- Công thức tính toán cụ thể như thế nào?
- Các tham số đầu vào của công thức?
- Điều kiện áp dụng công thức?
- Có exception/edge case nào không?

#### **5. Câu hỏi về Quy định tuân thủ:**
- Có quy định, chính sách, compliance nào cần tuân thủ không?
- Quy định cụ thể là gì?
- Ai ban hành quy định?
- Có tài liệu quy định không?
- Có audit/kiểm tra tuân thủ không?

**Thực hiện:**
1. **Dựa trên yêu cầu thay đổi** và **bảng Impact Analysis** (Bước 4) để xác định các điểm cần làm rõ
2. **Tạo câu hỏi cụ thể** cho từng nhóm trên
3. **Sắp xếp câu hỏi** theo mức độ quan trọng (câu hỏi bắt buộc phải có trước khi triển khai → câu hỏi làm rõ thêm)

**Format output:**
```markdown
## ❓ Danh sách câu hỏi cần làm rõ với Stakeholder

### 1. Câu hỏi về Lý do và Vấn đề cần giải quyết
- [Câu hỏi 1] - [Mục đích hỏi]
- [Câu hỏi 2] - [Mục đích hỏi]
- ...

### 2. Câu hỏi về Thông tin Data

#### 2.1. Input Data
- [Câu hỏi về input data] - [Mục đích hỏi]
- ...

#### 2.2. Output Data
- [Câu hỏi về output data] - [Mục đích hỏi]
- ...

### 3. Câu hỏi về Process/Quy trình
- [Câu hỏi về process] - [Mục đích hỏi]
- ...

### 4. Câu hỏi về Công thức tính toán
- [Câu hỏi về công thức] - [Mục đích hỏi]
- ...

### 5. Câu hỏi về Quy định tuân thủ
- [Câu hỏi về quy định] - [Mục đích hỏi]
- ...
```

**Lưu ý:**
- **PHẢI** tạo câu hỏi cụ thể, không chung chung
- **PHẢI** giải thích mục đích hỏi (vì sao cần câu hỏi này)
- **PHẢI** tập trung vào thông tin cần thiết để hiểu rõ yêu cầu và triển khai
- **PHẢI** ưu tiên câu hỏi bắt buộc (phải có trước khi triển khai)
- **PHẢI** dựa trên yêu cầu thay đổi và impact đã phân tích

**Ví dụ câu hỏi:**
```markdown
### 1. Câu hỏi về Lý do và Vấn đề cần giải quyết
- Vấn đề cụ thể hiện tại là gì khiến cần thêm bước phê duyệt? - Để hiểu rõ pain point và đảm bảo giải pháp phù hợp
- Có trường hợp nào đã xảy ra sự cố do thiếu bước phê duyệt không? - Để đánh giá mức độ nghiêm trọng và ưu tiên

### 2. Câu hỏi về Thông tin Data
#### 2.1. Input Data
- Field "Giá trị ticket" được lấy từ đâu? (User nhập hay tính tự động?) - Để xác định nguồn dữ liệu và validation rule
- Format của "Giá trị ticket" là gì? (Số nguyên, số thập phân, có đơn vị không?) - Để xác định kiểu dữ liệu và validation

#### 2.2. Output Data
- Sau khi phê duyệt, thông tin phê duyệt có cần lưu vào DB không? - Để xác định data model và audit trail
- Ai có thể xem thông tin phê duyệt? - Để xác định permission và security

### 3. Câu hỏi về Process/Quy trình
- Quy trình phê duyệt cụ thể như thế nào? (Supervisor tự phê duyệt hay cần approval từ cấp cao hơn?) - Để vẽ flow chính xác
- Thời gian phê duyệt tối đa là bao lâu? - Để xác định SLA và notification rule

### 4. Câu hỏi về Công thức tính toán
- Công thức tính "Giá trị ticket" như thế nào? (Nếu có) - Để xác định logic tính toán
- Có trường hợp nào "Giá trị ticket" thay đổi sau khi tạo ticket không? - Để xác định edge case

### 5. Câu hỏi về Quy định tuân thủ
- Có quy định nào về việc phê duyệt ticket giá trị cao không? - Để đảm bảo compliance
- Có audit trail nào cần thiết cho việc phê duyệt không? - Để đảm bảo traceability
```

---

### **Bước 7: Tổng hợp Output và lưu file**

**Mục đích**: Tổng hợp tất cả output vào file để BA copy vào CR/BBH.

**Cấu trúc Output:**

```markdown
# Impact Analysis - [Tên yêu cầu thay đổi]

## Phần A – Tóm tắt yêu cầu thay đổi

[3–7 bullet, nói rõ "cái gì – cho ai – để làm gì – vì sao"]

## Phần B – Bảng Impact Analysis

[Bảng Impact Analysis từ Bước 4]

## Phần C – Danh sách "việc của BA"

[Danh sách công việc từ Bước 5]

## Phần D – Risk & Lưu ý (BA note cho PM/Stakeholder)

[Risk & lưu ý từ Bước 6]

## Phần E – Danh sách câu hỏi cần làm rõ với Stakeholder

[Danh sách câu hỏi từ Bước 6.5]

---

## Lưu ý
- Nếu có giả định, đã được ghi rõ trong từng phần
- Output này dùng để copy vào CR/BBH
- Phần E (câu hỏi) dùng để BA chuẩn bị cho meeting với stakeholder
```

**Thực hiện:**
1. **Tổng hợp** tất cả output từ các bước trước
2. **Tạo file `.md`** với cấu trúc trên
3. **Lưu file:**
   - Tên file: `Impact_Analysis_[Tên_yêu_cầu]_[YYYYMMDD].md`
   - Vị trí: Thư mục do BA chỉ định (hoặc thư mục `Impact Analysis/` nếu không chỉ định)
   - **PHẢI** tạo thư mục nếu chưa có

4. **Hiển thị thông báo:**
   > "✅ Đã tạo Impact Analysis tại: `[đường dẫn file]`"

**Lưu ý:**
- **PHẢI** tổng hợp đầy đủ 5 phần (A, B, C, D, E)
- **PHẢI** ghi rõ "Giả định..." nếu có
- **PHẢI** format rõ ràng để dễ copy vào CR/BBH

---

### **Bước 8: Tạo danh sách chức năng thay đổi và yêu cầu User confirm**

**Mục đích**: Tạo danh sách các chức năng thay đổi theo template chuẩn và yêu cầu user confirm trước khi xử lý.
**Chức năng**: Bạn cần phân biệt rõ chức năng và step của 1 chức năng nhé, tôi cần bạn đưa ra các chức năng thay đổi, Chức năng ở đây có actor là user, hoặc tiến trình hoặc API mở ra cho bên khác call vào 

**Thực hiện:**
1. **Dựa trên bảng Impact Analysis** (Bước 4) và **danh sách việc BA** (Bước 5) để xác định các yêu cầu thay đổi
2. **Phân loại** từng yêu cầu thành:
   - **Add**: Chức năng mới cần thêm
   - **Modify**: Chức năng hiện có cần sửa đổi
3. **Tạo bảng** theo template chuẩn

**Format bảng:**

```markdown
## 📋 Danh sách Yêu cầu Thay đổi

| Tên chức năng | Loại thay đổi | Hiện trạng | Thay đổi cần thực hiện |
|---------------|---------------|------------|------------------------|
| [Tên chức năng 1] | Add | [Mô tả hiện trạng - có thể là "Chưa có"] | [Mô tả chi tiết thay đổi cần thực hiện] |
| [Tên chức năng 2] | Modify | [Mô tả hiện trạng hiện tại] | [Mô tả chi tiết thay đổi cần thực hiện] |
| ... | ... | ... | ... |
```

**Ví dụ:**

```markdown
| Tên chức năng | Loại thay đổi | Hiện trạng | Thay đổi cần thực hiện |
|---------------|---------------|------------|------------------------|
| Phê duyệt ticket giá trị cao | Add | Chưa có chức năng phê duyệt ticket | Thêm chức năng phê duyệt ticket cho Supervisor khi giá trị ticket > 10 triệu VNĐ |
| Tạo ticket | Modify | Hiện tại không có field "Giá trị ticket" | Thêm field "Giá trị ticket" vào form tạo ticket, thêm validation rule |
| Flow xử lý ticket | Modify | Flow hiện tại không có bước phê duyệt | Thêm bước phê duyệt vào flow khi giá trị ticket > 10 triệu VNĐ |
```

**Lưu ý:**
- **PHẢI** dựa trên bảng Impact Analysis để xác định các yêu cầu thay đổi
- **PHẢI** phân loại rõ ràng Add/Modify
- **PHẢI** mô tả "Hiện trạng" và "Thay đổi cần thực hiện" cụ thể, không chung chung
- **PHẢI** liệt kê đầy đủ tất cả các yêu cầu thay đổi từ impact analysis

**Sau khi tạo bảng:**
1. **Hiển thị bảng** cho user
2. **Yêu cầu user confirm:**
   > "Bạn vui lòng xem lại danh sách yêu cầu thay đổi trên. Nếu có điều chỉnh, vui lòng cho tôi biết. Nếu đúng, vui lòng xác nhận để tôi tiếp tục xử lý."

**Chờ user confirm:**
- Nếu user **chưa confirm** → Chờ và hỏi lại
- Nếu user **yêu cầu điều chỉnh** → Cập nhật bảng và hỏi lại
- Nếu user **confirm đúng** → Chuyển sang **Bước 9**

---

### **Bước 9: Xử lý yêu cầu thay đổi sau khi User confirm**

**Mục đích**: Xử lý các yêu cầu thay đổi sau khi user đã confirm, bao gồm viết user story draft cho Add và file tổng hợp + update cho Modify.

**Điều kiện**: User đã confirm danh sách yêu cầu thay đổi ở Bước 8.

**Thực hiện:**

#### **9.1. Xử lý yêu cầu loại Add (Chức năng mới)**

**Với mỗi yêu cầu loại Add:**
1. **Viết bản User Story draft** theo format chuẩn
2. **Nội dung User Story draft bao gồm:**
   - Tên chức năng
   - Actor
   - Mục đích
   - Mô tả ngắn về chức năng
   - Các thông tin từ Impact Analysis liên quan

**Format User Story draft:**

```markdown
## User Story Draft: [Tên chức năng]

**Actor:** [Ai sử dụng]
**Mục đích:** [Mục đích chức năng]
**Loại:** Add (Chức năng mới)

### Mô tả
[Mô tả ngắn về chức năng mới]

### Thông tin từ Impact Analysis
- **Ảnh hưởng:** [Từ bảng Impact Analysis]
- **Mức độ:** [Cao/Trung bình/Thấp]
- **Lý do:** [Lý do cần thêm chức năng này]

### Ghi chú
- Đây là bản draft, cần review và bổ sung thêm thông tin
- Reference: [Link đến file Impact Analysis]
```

**Lưu file:**
- Tên file: `User_Story_Draft_[Tên_chức_năng]_[YYYYMMDD].md`
- Vị trí: Cùng thư mục với file Impact Analysis hoặc thư mục `User Stories/Draft/`
- **PHẢI** tạo thư mục nếu chưa có

#### **9.2. Xử lý yêu cầu loại Modify (Chức năng cần sửa đổi)**

**Bước 9.2.1: Tạo file tổng hợp yêu cầu thay đổi cho Modify**

1. **Tạo file tổng hợp** tất cả các yêu cầu Modify
2. **File này bao gồm:**
   - Danh sách tất cả các chức năng cần Modify
   - Chi tiết thay đổi cho từng chức năng
   - Reference đến file Impact Analysis

**Format file tổng hợp:**

```markdown
# Tổng hợp Yêu cầu Thay đổi - Modify

**Ngày tạo:** [YYYY-MM-DD]
**Reference:** [Link đến file Impact Analysis]

## Danh sách chức năng cần Modify

### 1. [Tên chức năng 1]

**Hiện trạng:**
[Mô tả hiện trạng hiện tại]

**Thay đổi cần thực hiện:**
[Mô tả chi tiết thay đổi cần thực hiện]

**Ảnh hưởng từ Impact Analysis:**
- [Thông tin từ bảng Impact Analysis]
- Mức độ: [Cao/Trung bình/Thấp]

---

### 2. [Tên chức năng 2]

[Similar structure]

---

## Lưu ý
- File này tổng hợp tất cả các yêu cầu Modify từ Impact Analysis
- Các file User Story tương ứng sẽ được update và reference đến file này
```

**Lưu file:**
- Tên file: `Change_Request_Modify_[Tên_yêu_cầu]_[YYYYMMDD].md`
- Vị trí: Cùng thư mục với file Impact Analysis hoặc thư mục `Change Requests/`
- **PHẢI** tạo thư mục nếu chưa có

**Bước 9.2.2: Tìm và update các file User Story tương ứng**

1. **Với mỗi chức năng cần Modify:**
   - **Tìm file User Story tương ứng** trong workspace
   - **Nếu tìm thấy:**
     - Đọc file User Story hiện tại
     - **Update file** theo yêu cầu thay đổi
     - **Thêm section "Change Log"** hoặc "Lịch sử thay đổi" vào đầu file với thông tin:
       - **Ngày thay đổi:** [YYYY-MM-DD]
       - **Lý do thay đổi:** [Lý do từ Impact Analysis]
       - **Reference:** [Link đến file tổng hợp yêu cầu thay đổi]
       - **Nội dung thay đổi:** [Tóm tắt thay đổi]
   - **Nếu không tìm thấy:**
     - Thông báo cho user: "Không tìm thấy file User Story cho chức năng [Tên chức năng]. Bạn có muốn tôi tạo file mới không?"

**Format Change Log trong file User Story:**

```markdown
## 📝 Lịch sử thay đổi

### [YYYY-MM-DD] - Update theo yêu cầu thay đổi

**Lý do thay đổi:** [Lý do từ Impact Analysis]
**Reference:** [Link đến file Change_Request_Modify_*.md]
**Nội dung thay đổi:**
- [Mô tả thay đổi 1]
- [Mô tả thay đổi 2]
- ...

---

[Phần nội dung User Story cũ - giữ nguyên hoặc update theo yêu cầu]
```

**Cách tìm file User Story:**
- Tìm trong thư mục `User stories/` hoặc thư mục do user chỉ định
- Tìm file có tên liên quan đến tên chức năng
- Hỏi user nếu không tìm thấy

**Lưu ý:**
- **PHẢI** giữ nguyên nội dung cũ, chỉ thêm Change Log và update phần cần thay đổi
- **PHẢI** reference đến file tổng hợp yêu cầu thay đổi
- **PHẢI** ghi rõ ngày thay đổi và lý do
- **PHẢI** hỏi user nếu không tìm thấy file User Story

**Sau khi hoàn thành:**
1. **Thông báo cho user:**
   > "✅ Đã xử lý yêu cầu thay đổi:
   > - Đã tạo [số lượng] User Story draft cho chức năng Add
   > - Đã tạo file tổng hợp yêu cầu Modify: `[đường dẫn file]`
   > - Đã update [số lượng] file User Story cho chức năng Modify"

2. **Liệt kê các file đã tạo/cập nhật:**
   - Danh sách file User Story draft đã tạo
   - File tổng hợp yêu cầu Modify
   - Danh sách file User Story đã update

---

## ✅ BẮT BUỘC

1. **Bước 0:**
   - **PHẢI** hỏi đầy đủ thông tin: Yêu cầu thay đổi, ERD/entity, UC/US, Flow/process
   - **PHẢI** hỏi lại 1–2 câu nếu thiếu thông tin quan trọng
   - **PHẢI** ghi nhận nếu BA bảo "cứ giả định giúp" và ghi rõ "Giả định..." trong output

2. **Bước 1:**
   - **PHẢI** tóm tắt rõ ràng: "thay đổi cái gì – cho ai – để làm gì"
   - **PHẢI** ghi rõ "Giả định..." nếu có

3. **Bước 2:**
   - **PHẢI** phân tích đầy đủ 6 nhóm: Chức năng, Quy trình, Dữ liệu, Giao diện, Tích hợp, Stakeholder
   - **PHẢI** dựa trên input từ BA (ERD, UC, flow)

4. **Bước 3:**
   - **PHẢI** mô tả chi tiết: Ảnh hưởng cụ thể, Mức độ, Lý do
   - **PHẢI** đánh giá mức độ với lý do rõ ràng

5. **Bước 4:**
   - **PHẢI** tạo bảng Impact Analysis đầy đủ với 6 nhóm
   - **PHẢI** mô tả "Ảnh hưởng cụ thể" ở góc nhìn BA (nghiệp vụ)

6. **Bước 5:**
   - **PHẢI** liệt kê cụ thể công việc BA cần làm
   - **PHẢI** phân loại theo 3 nhóm: Cập nhật tài liệu, Soạn tài liệu mới, Chuẩn bị nội dung hỗ trợ

7. **Bước 6:**
   - **PHẢI** ghi lại risk về nghiệp vụ, risk về scope, dependency cần chốt
   - **PHẢI** tập trung vào góc nhìn BA

8. **Bước 6.5:**
   - **PHẢI** tạo list câu hỏi cần làm rõ với stakeholder
   - **PHẢI** bao gồm đầy đủ 5 nhóm: Lý do/Vấn đề, Data (Input/Output), Process, Công thức, Quy định
   - **PHẢI** giải thích mục đích hỏi cho từng câu hỏi
   - **PHẢI** ưu tiên câu hỏi bắt buộc (phải có trước khi triển khai)

9. **Bước 7:**
   - **PHẢI** tổng hợp đầy đủ 5 phần (A, B, C, D, E)
   - **PHẢI** lưu file với format chuẩn

10. **Bước 8:**
    - **PHẢI** tạo danh sách yêu cầu thay đổi theo template (Tên chức năng, Loại thay đổi, Hiện trạng, Thay đổi cần thực hiện)
    - **PHẢI** phân loại rõ ràng Add/Modify
    - **PHẢI** yêu cầu user confirm trước khi tiếp tục
    - **PHẢI** chờ user confirm hoặc điều chỉnh

11. **Bước 9:**
    - **PHẢI** viết User Story draft cho tất cả yêu cầu loại Add
    - **PHẢI** tạo file tổng hợp yêu cầu Modify
    - **PHẢI** tìm và update các file User Story tương ứng cho yêu cầu Modify
    - **PHẢI** thêm Change Log vào file User Story đã update với: ngày thay đổi, lý do, reference đến file tổng hợp

---

## ❌ KHÔNG ĐƯỢC

1. **Bỏ qua hỏi user** về thông tin quan trọng (ERD/UC/flow)
2. **Tự suy đoán** mà không ghi rõ "Giả định..."
3. **Bỏ qua nhóm nào** trong 6 nhóm impact
4. **Mô tả chung chung** - phải cụ thể từng đối tượng bị ảnh hưởng
5. **Đánh giá mức độ** mà không có lý do
6. **Đi sâu kỹ thuật** - chỉ tập trung vào nghiệp vụ
7. **Bỏ qua risk & dependency** - phải ghi đầy đủ
8. **Bỏ qua tạo list câu hỏi** cho stakeholder - phải tạo đầy đủ 5 nhóm câu hỏi
9. **Tạo câu hỏi chung chung** - phải cụ thể và có mục đích hỏi rõ ràng
10. **Tạo output** mà không có đầy đủ 5 phần (A, B, C, D, E)
11. **Bỏ qua tạo danh sách yêu cầu thay đổi** - phải tạo bảng theo template và yêu cầu user confirm
12. **Xử lý yêu cầu thay đổi** mà chưa có user confirm
13. **Update file User Story** mà không thêm Change Log với đầy đủ thông tin (ngày, lý do, reference)

---

## 📋 Lưu ý quan trọng

1. **Góc nhìn BA:**
   - Skill tập trung vào góc nhìn nghiệp vụ, không đi sâu kỹ thuật
   - Mô tả impact ở mức BA có thể hiểu và làm việc với stakeholder

2. **Giả định:**
   - Nếu BA bảo "cứ giả định giúp", AI tự giả định nhưng **PHẢI ghi rõ "Giả định …"** trong output
   - Giả định phải hợp lý, dựa trên best practices

3. **Format output:**
   - Output format chuẩn để BA copy vào CR/BBH
   - 5 phần rõ ràng: Tóm tắt, Bảng Impact, Danh sách việc BA, Risk & Lưu ý, Danh sách câu hỏi

4. **Mức độ ảnh hưởng:**
   - **Cao**: Ảnh hưởng lớn, thay đổi nhiều, ảnh hưởng đến nhiều stakeholder
   - **Trung bình**: Ảnh hưởng vừa phải, thay đổi một phần
   - **Thấp**: Ảnh hưởng nhỏ, thay đổi ít
   - **PHẢI** có lý do rõ ràng cho mỗi mức độ

5. **6 nhóm impact:**
   - Chức năng / Use Case / User Story
   - Quy trình nghiệp vụ (Process/Flow)
   - Dữ liệu & Báo cáo (Field, Entity, Báo cáo, KPI)
   - Giao diện màn hình & Trải nghiệm người dùng
   - Tích hợp hệ thống khác (API, Batch, Message)
   - Stakeholder / Bộ phận bị tác động

6. **5 nhóm câu hỏi cho stakeholder:**
   - **Lý do và Vấn đề cần giải quyết:** Hiểu rõ tại sao có yêu cầu, vấn đề cụ thể là gì
   - **Thông tin Data (Input/Output):** Nguồn dữ liệu, format, ai sử dụng
   - **Process/Quy trình:** Các bước thực hiện, ai làm, điều kiện chuyển bước
   - **Công thức tính toán:** Logic tính toán, tham số, điều kiện áp dụng
   - **Quy định tuân thủ:** Compliance, chính sách, audit trail
   - **PHẢI** tạo câu hỏi cụ thể với mục đích hỏi rõ ràng
   - **PHẢI** ưu tiên câu hỏi bắt buộc (phải có trước khi triển khai)

7. **Danh sách yêu cầu thay đổi:**
   - **PHẢI** tạo bảng theo template: Tên chức năng, Loại thay đổi (Add/Modify), Hiện trạng, Thay đổi cần thực hiện
   - **PHẢI** yêu cầu user confirm trước khi xử lý
   - **PHẢI** phân loại rõ ràng Add/Modify

8. **Xử lý yêu cầu thay đổi:**
   - **Với Add:** Viết User Story draft với đầy đủ thông tin từ Impact Analysis
   - **Với Modify:** 
     - Tạo file tổng hợp tất cả yêu cầu Modify
     - Tìm và update file User Story tương ứng
     - **PHẢI** thêm Change Log với: ngày thay đổi, lý do, reference đến file tổng hợp
     - **PHẢI** giữ nguyên nội dung cũ, chỉ thêm Change Log và update phần cần thay đổi

---

## 🔧 Ví dụ minh họa

### **Input:**
- **Yêu cầu:** Thêm bước phê duyệt cho Supervisor khi giá trị ticket > 10 triệu VNĐ
- **Lý do:** Kiểm soát tốt hơn các ticket giá trị cao, giảm rủi ro xử lý sai
- **ERD:** Entity Ticket có field `value`, `status`, `assigned_to`
- **UC liên quan:** UC-01: Tạo ticket, UC-02: Xử lý ticket
- **Flow:** Flow xử lý ticket hiện tại không có bước phê duyệt

### **Output:**
- **Phần A:** Tóm tắt yêu cầu (3–7 bullet)
- **Phần B:** Bảng Impact Analysis với 6 nhóm
- **Phần C:** Danh sách việc BA cần làm
- **Phần D:** Risk & lưu ý
- **Phần E:** Danh sách câu hỏi cần làm rõ với stakeholder (5 nhóm câu hỏi)
- **Bước 8:** Danh sách yêu cầu thay đổi theo template (Add/Modify)
- **Bước 9:** 
  - User Story draft cho chức năng Add
  - File tổng hợp yêu cầu Modify
  - Update User Story cho chức năng Modify với Change Log

---

**Version:** 1.0.0 | **Ngày:** 2026-01-20
