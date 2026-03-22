# BA Activity Rule Specification Skill

## Mô tả

Skill này chuyển đổi **Sequence Diagram** sang **Activity Flowchart** (Draw.io XML format) với focus vào:
- **Validation rules** trên FE và BE
- **Business logic flow** từ góc nhìn nghiệp vụ
- **Error handling** và các nhánh xử lý

## Quy trình thực hiện

### Bước 1: Phân tích Sequence Diagram

1. **Đọc và hiểu sequence diagram**:
   - Xác định các actors (Actor, FE, BE, Đối tác)
   - Xác định các message trao đổi
   - Xác định loại operation (Query, Insert, Update, Delete)

2. **Xác định loại operation**:
   - **Query**: Chỉ đọc dữ liệu, không thay đổi state
   - **Insert/Update/Delete**: Thay đổi dữ liệu, cần validation

3. **Mapping Sequence → Activity**:
   - **Nếu sequence có message FE → BE**: 
     - Activity phải có bước **"Gửi yêu cầu [nghiệp vụ] lên BE"** (Task trong lane FE)
     - Sau đó có bước **"BE xử lý yêu cầu"** (Task trong lane BE)
     - Cuối cùng có bước **"BE trả kết quả về FE"** (Task trong lane BE)
     - FE nhận kết quả và xử lý theo kết quả đó (Decision Node + các nhánh xử lý)
   
   - **Gộp nhiều request thành 1**:
     - Nếu FE cần gọi BE để xử lý **nhiều việc cùng lúc** (không có tương tác người dùng ở giữa)
     - → Gộp thành **1 request duy nhất**: "Gửi yêu cầu lấy xxx, xx, xxx" hoặc "Gửi yêu cầu xử lý xxx, xx, xxx"
     - Ví dụ:
       - ❌ SAI: "Gửi yêu cầu lấy danh sách khóa học" → "Gửi yêu cầu lấy danh sách lớp học" → "Gửi yêu cầu lấy thông tin giảng viên"
       - ✅ ĐÚNG: "Gửi yêu cầu lấy danh sách khóa học, lớp học, thông tin giảng viên"
     - Khi đó trên BE sẽ có **1 bước xử lý tương ứng** với request gộp đó
     - BE có thể thực hiện nhiều thao tác (query DB, tính toán...) nhưng chỉ trả về 1 response cho FE

### Bước 2: Tạo bảng xác nhận Activity Flow

**BẮT BUỘC**: Trước khi vẽ flowchart, phải tạo bảng xác nhận với user.

**Format bảng:**

| Bước | Actor | Mô tả bước | Notation | Ghi chú |
|------|-------|------------|----------|---------|
| 1 | Actor | User nhập/chọn thông tin | Task | |
| 2 | FE | Validate dữ liệu đầu vào | Decision Node | Kiểm tra: [liệt kê các điều kiện có thể sai] |
| 3 | FE | Gửi yêu cầu [nghiệp vụ] | Task | Ví dụ: "Gửi yêu cầu tạo nhân viên" |
| 4 | BE | Validate dữ liệu | Decision Node | Kiểm tra: [các nhóm rule] |
| 5 | BE | [Thực hiện nghiệp vụ] | Task | Ví dụ: "Lưu thông tin nhân viên" |
| 6 | BE | Trả kết quả | Task | |
| 7 | FE | Kiểm tra kết quả | Decision Node | TH: Thành công / Lỗi |
| 8 | FE | [Xử lý phù hợp] | Task | |

**Quy tắc tạo bảng:**

1. **FE Validation (trước khi gửi BE)**:
   - Xác định các tình huống user nhập/chọn có thể sai
   - **Gom nhiều điều kiện thành 1 Decision Node**:
     - Nếu có nhiều điều kiện cần kiểm tra → gom thành 1 Decision Node với nhánh "Hợp lệ" / "Không hợp lệ"
     - Trong **mô tả/ghi chú** của Decision Node phải ghi rõ:
       - **Hợp lệ khi:** [liệt kê các điều kiện hợp lệ]
       - **Không hợp lệ khi:** [liệt kê các điều kiện không hợp lệ]
   - Ví dụ Decision Node "Dữ liệu hợp lệ?":
     - **Hợp lệ khi:** Đầy đủ thông tin bắt buộc, format email/phone đúng, giá trị trong phạm vi cho phép
     - **Không hợp lệ khi:** Thiếu thông tin bắt buộc, format email/phone sai, giá trị ngoài phạm vi (số âm, vượt limit)

2. **Message trao đổi**:
   - ❌ **SAI**: "Gọi API POST /api/employees"
   - ✅ **ĐÚNG**: "Gửi yêu cầu tạo nhân viên"
   - ✅ **ĐÚNG**: "Gửi yêu cầu đăng ký khóa học"
   - ✅ **ĐÚNG**: "Gửi yêu cầu cập nhật thông tin"
   - ✅ **ĐÚNG**: "Gửi yêu cầu lấy danh sách khóa học, lớp học, thông tin giảng viên" (gộp nhiều request)
   - **Nguyên tắc**: 
     - Ghi theo hướng nghiệp vụ, không ghi technical API call
     - Nếu FE cần lấy/xử lý nhiều thứ cùng lúc (không có tương tác người dùng ở giữa) → gộp thành 1 request

3. **BE Processing**:
   - **Query**: 
     - Bước "Xử lý yêu cầu lấy dữ liệu" (có thể gộp nhiều query trong 1 request)
     - Bước "Trả về kết quả"
   - **Insert/Update/Delete**: 
     - Bắt buộc có bước "Validate dữ liệu" (Decision Node)
     - **Gom nhiều điều kiện validation thành 1 Decision Node**:
       - Nếu có nhiều nhóm rule validation (6 nhóm) → gom thành 1 Decision Node "Dữ liệu hợp lệ?"
       - Trong **mô tả/ghi chú** phải ghi rõ:
         - **Hợp lệ khi:** [liệt kê các điều kiện hợp lệ từ 6 nhóm rule]
         - **Không hợp lệ khi:** [liệt kê các điều kiện không hợp lệ]
     - Sau đó mới thực hiện các bước nghiệp vụ (dựa vào ERD để suy luận)
     - Bước "Trả về kết quả"
   - **Lưu ý**: Nếu FE gửi 1 request gộp (vd: "lấy xxx, xx, xxx"), BE sẽ có **1 bước xử lý tương ứng** với request đó, có thể thực hiện nhiều thao tác bên trong nhưng chỉ trả về 1 response

4. **FE Response Handling**:
   - Sau khi nhận kết quả từ BE, FE cần check và xử lý
   - Decision Node: "Kết quả hợp lệ?" hoặc "Xử lý thành công?" → Nhánh: Thành công / Lỗi
   - Mỗi nhánh có task xử lý tương ứng:
     - Nhánh thành công: "Hiển thị thông báo thành công" hoặc "Cập nhật dữ liệu hiển thị"
     - Nhánh lỗi: "Hiển thị thông báo lỗi" hoặc "Xử lý lỗi [chi tiết]"

5. **Notation**:
   - **Task**: Các bước thực hiện nghiệp vụ
   - **Decision Node**: Các điểm kiểm tra/validate

### Bước 3: Xác nhận với User

- Hiển thị bảng xác nhận
- Chờ user xác nhận "OK" hoặc yêu cầu chỉnh sửa
- Chỉ khi user OK thì mới tiến hành vẽ flowchart

### Bước 4: Xác định vị trí lưu file

**QUAN TRỌNG**: Xác định vị trí lưu file activity diagram trước khi generate.

**Quy tắc xác định vị trí:**

1. **Nếu user cung cấp file sequence diagram**:
   - Lấy thư mục chứa file sequence diagram
   - Lưu file activity diagram vào **cùng thư mục** với sequence diagram
   - Ví dụ: Nếu sequence diagram ở `User stories/Epic 1 - Quản lý Ticket/User Story 33 - ĐTV tạo ticket thủ công và gắn với cuộc gọi/Activity_Diagram_TicketCreate_20260120.md`
   - → Lưu activity diagram vào: `User stories/Epic 1 - Quản lý Ticket/User Story 33 - ĐTV tạo ticket thủ công và gắn với cuộc gọi/[tên-file]_activity_flowchart.drawio`

2. **Nếu không rõ thư mục sequence diagram** (user chỉ mô tả hoặc paste nội dung):
   - **Hỏi user**: "Bạn muốn lưu file activity diagram vào thư mục nào?"
   - **Gợi ý cấu trúc thư mục mong muốn**: `User stories/[Epic]/[User Story]/`
   - Ví dụ: `User stories/Epic 1 - Quản lý Ticket/User Story 33 - ĐTV tạo ticket thủ công và gắn với cuộc gọi/`
   - Chờ user xác nhận hoặc cung cấp đường dẫn cụ thể

3. **Cấu trúc thư mục mong muốn**:
   ```
   User stories/
     └── [Epic]/
         └── [User Story]/
             ├── Activity_Diagram_[tên]_[YYYYMMDD].md (sequence diagram)
             ├── [tên]_activity_flowchart.drawio (activity flowchart)
             └── [các file .md khác liên quan đến user story]
   ```

4. **Tên file output**:
   - Format: `[tên-sequence]_activity_flowchart.drawio`
   - Ví dụ: Nếu sequence diagram là `Activity_Diagram_TicketCreate_20260120.md`
   - → Activity flowchart: `Activity_Diagram_TicketCreate_20260120_activity_flowchart.drawio`
   - Hoặc: `TicketCreate_activity_flowchart.drawio` (nếu user muốn tên ngắn gọn hơn)

### Bước 5: Generate Draw.io XML Flowchart

Tham khảo: `.claude/skills/bpmn_generator/references/drawio-flowchart-generation.md`

#### Lanes Structure

**Lanes theo thứ tự:**
1. **Actor** (nếu có user interaction)
2. **FE** (Frontend)
3. **BE** (Backend)
4. **Đối tác** (nếu có integration với bên thứ 3)

**Layout:**
- Pool: Vertical layout (`horizontal=1`)
- Lanes: Vertical, x tăng dần 400px (0, 400, 800, 1200, ...)
- Width mỗi lane: 400px cố định

#### Task Types

**QUAN TRỌNG**: Trong activity flowchart này, **KHÔNG có task thủ công**. Tất cả tasks đều là:
- **System tasks** (FE hoặc BE thực hiện)
- Dùng **Rectangle** shape (rounded=1)

**Style cho tất cả tasks:**
```xml
style="rounded=1;whiteSpace=wrap;html=1;fontStyle=1;fontSize=14;"
```

#### Decision Nodes (Gateways)

**Khi nào cần Decision Node:**

1. **FE Validation** (trước khi gửi BE):
   - Kiểm tra dữ liệu đầu vào có hợp lệ không
   - Label: "Dữ liệu hợp lệ?" hoặc "Validate thành công?"
   - **Gom nhiều điều kiện:** Nếu có nhiều điều kiện (thiếu thông tin, format sai, giá trị ngoài phạm vi...) → gom thành 1 Decision Node
   - Nhánh: "Hợp lệ" → Tiếp tục gửi BE / "Không hợp lệ" → Hiển thị lỗi
   - **Mô tả chi tiết:** Trong ghi chú/mô tả phải ghi rõ:
     - **Hợp lệ khi:** [liệt kê các điều kiện hợp lệ]
     - **Không hợp lệ khi:** [liệt kê các điều kiện không hợp lệ]

2. **BE Validation** (cho Insert/Update/Delete):
   - Kiểm tra các nhóm rule validation
   - Label: "Dữ liệu hợp lệ?" hoặc "Validation thành công?"
   - **Gom nhiều điều kiện:** Nếu có nhiều nhóm rule (6 nhóm) → gom thành 1 Decision Node
   - Nhánh: "Hợp lệ" → Thực hiện nghiệp vụ / "Không hợp lệ" → Trả lỗi
   - **Mô tả chi tiết:** Trong ghi chú/mô tả phải ghi rõ:
     - **Hợp lệ khi:** [liệt kê các điều kiện hợp lệ từ 6 nhóm rule]
     - **Không hợp lệ khi:** [liệt kê các điều kiện không hợp lệ]

3. **FE Response Handling**:
   - Kiểm tra kết quả từ BE
   - Label: "Kết quả thành công?" hoặc "Xử lý thành công?"
   - Nhánh: "Thành công" → Hiển thị thông báo thành công / "Lỗi" → Hiển thị lỗi

4. **Decision Node kiểm tra điều kiện cụ thể** (ví dụ: trạng thái, loại, ...):
   - Nếu cần kiểm tra điều kiện cụ thể (vd: trạng thái ticket, loại đơn hàng, ...)
   - Label: Ghi rõ điều kiện cần kiểm tra, ví dụ: "Kiểm tra trạng thái ticket?" hoặc "Kiểm tra loại đơn hàng?"
   - **Mỗi nhánh ứng với một giá trị/điều kiện cụ thể và có cách xử lý riêng:**
     - Nhánh 1: "Trạng thái = Mới" → Task xử lý cho trạng thái Mới
     - Nhánh 2: "Trạng thái = Đang xử lý" → Task xử lý cho trạng thái Đang xử lý
     - Nhánh 3: "Trạng thái = Đã đóng" → Task xử lý cho trạng thái Đã đóng
   - **Lưu ý:** Phải có đủ tất cả các nhánh ứng với các giá trị/điều kiện có thể xảy ra

**Style cho Decision Node:**
```xml
style="strokeWidth=2;html=1;shape=mxgraph.flowchart.decision;whiteSpace=wrap;"
```

**QUAN TRỌNG - Phải vẽ đủ TẤT CẢ các nhánh:**
- ✅ Mỗi Decision Node phải có **TẤT CẢ các nhánh** được mô tả
- ✅ Mỗi nhánh phải có task/end event tương ứng
- ✅ Mỗi nhánh phải có label rõ ràng (vd: "Hợp lệ", "Không hợp lệ", "Trạng thái = Mới", ...)
- ❌ Không được bỏ sót nhánh nào

#### Start Event và End Event

- ✅ **BẮT BUỘC** có Start Event (icon riêng, label "Start")
- ✅ **BẮT BUỘC** có End Event (icon riêng, label "End")
- Start Event nối tới bước đầu tiên
- End Event nhận kết nối từ các bước cuối cùng (có thể có nhiều end event nếu có nhiều nhánh)

#### Sequence Flow

- ❌ **KHÔNG generate edges tự động**
- ✅ Chỉ generate elements (Pool, Lanes, Tasks, Decision Nodes, Start/End Events)
- ✅ User tự nối các elements trong Draw.io sau khi import

#### Task Naming

- ✅ **Có số thứ tự**: `"1. [Tên]"`, `"2. [Tên]"`, ...
- ✅ **Tên nghiệp vụ**, không phải technical:
  - ❌ "Gọi API POST /api/employees"
  - ✅ "Gửi yêu cầu tạo nhân viên"
  - ✅ "Lưu thông tin nhân viên vào database"
  - ✅ "Hiển thị thông báo thành công"

## Quy tắc Validation trên BE

Khi tạo bảng xác nhận và flowchart, cần áp dụng **6 nhóm rule validation** cho các operation Insert/Update/Delete:

### Nhóm 1: Rule theo quy trình nghiệp vụ

**Ví dụ:**
- Lớp học phải còn slot
- Số dư >= số tiền giao dịch + phí giao dịch
- Thời gian đăng ký phải trong thời gian cho phép
- Số lượng không được vượt quá limit

**Cách xác định:**
- Dựa vào business rules trong sequence diagram
- Dựa vào context nghiệp vụ
- Dựa vào ERD nếu có

### Nhóm 2: Rule data có thể bị fake qua API

**Ví dụ:**
- Mã ID phải tồn tại trong database
- Foreign key phải hợp lệ
- Reference data phải tồn tại

**Cách xác định:**
- Kiểm tra các ID/reference trong request data
- Đảm bảo các entity được reference phải tồn tại

### Nhóm 3: Rule data thay đổi trong quá trình thực hiện

**Ví dụ:**
- Tồn kho thay đổi (có thể đã hết hàng)
- Trạng thái tài khoản thay đổi (có thể đã bị khóa)
- Khuyến mãi còn hiệu lực (có thể đã hết hạn)
- Trạng thái đơn hàng thay đổi (có thể đã bị hủy)

**Cách xác định:**
- Kiểm tra lại state của các entity liên quan tại thời điểm xử lý
- So sánh với state ban đầu khi user load form

### Nhóm 4: Rule mapping dữ liệu

**Ví dụ:**
- Nếu gửi `course_id` và `classroom_id`, thì `classroom_id` phải thuộc `course_id` tương ứng
- Bảo lưu đăng ký: `register_id` và `classroom_id` → `classroom_id` phải thuộc `course_id` gắn với `register_id`
- Các thông tin phải mapping logic với nhau

**Cách xác định:**
- Dựa vào ERD để xác định relationships
- Kiểm tra tính nhất quán giữa các fields trong request
- Đảm bảo foreign key relationships hợp lệ

### Nhóm 5: Rule data duplicate

**Ví dụ:**
- Đăng ký khóa học: Nếu học viên gọi API 2 lần với cùng `classroom_id`, chỉ cho phép khi yêu cầu cũ đã hủy
- Đăng ký user: Email trong request này không được trùng với email trong request khác đã gửi (đang xử lý)

**Cách xác định:**
- Kiểm tra xem có request tương tự đang xử lý không
- Kiểm tra xem có record duplicate không (theo business rule)
- Xác định điều kiện cho phép duplicate (nếu có)

### Nhóm 6: Rule so sánh xác nhận / tính toán lại trên server

**Ví dụ:**
- Tổng tiền xác nhận với KH = tổng tiền server tính lại
- Số lượng xác nhận = số lượng server tính lại
- Các giá trị tính toán phải được verify lại trên server

**Cách xác định:**
- Nếu có giá trị tính toán từ FE, phải tính lại trên BE
- So sánh và đảm bảo khớp nhau
- Tránh manipulation từ client

## Workflow tổng thể

1. **User cung cấp Sequence Diagram**
2. **Phân tích Sequence Diagram**:
   - Xác định actors, messages, operations
   - Xác định loại operation (Query vs Insert/Update/Delete)
3. **Tạo bảng xác nhận Activity Flow**:
   - Liệt kê các bước với Actor, Mô tả, Notation
   - Áp dụng 6 nhóm rule validation cho BE
   - Xác định các Decision Nodes cần thiết
4. **Hiển thị bảng và chờ user xác nhận**
5. **Xác định vị trí lưu file**:
   - Nếu có file sequence diagram → Lưu vào cùng thư mục
   - Nếu không rõ → Hỏi user muốn lưu ở đâu (gợi ý: `User stories/[Epic]/[User Story]/`)
6. **Nếu user OK → Generate Draw.io XML**:
   - Tạo Pool và Lanes (Actor, FE, BE, Đối tác)
   - Tạo Start Event
   - Tạo các Tasks (Rectangle, không có task thủ công)
   - Tạo các Decision Nodes với đầy đủ nhánh
   - Tạo End Events
   - **KHÔNG tạo edges** (user tự nối)
7. **Output file**: 
   - Tên file: `[tên-sequence]_activity_flowchart.drawio`
   - Vị trí: Cùng thư mục với sequence diagram (hoặc thư mục user chỉ định)
   - Cấu trúc mong muốn: `User stories/[Epic]/[User Story]/[tên-file]_activity_flowchart.drawio`

## Ví dụ

### Sequence Diagram Input:
```
Actor -> FE: Nhập thông tin đăng ký khóa học
FE -> BE: Gọi API POST /api/registrations
BE -> Database: Lưu registration
BE -> FE: Trả về kết quả
FE -> Actor: Hiển thị thông báo
```

**Mapping Sequence → Activity:**
- `Actor -> FE: Nhập thông tin` → Activity: Task "Nhập thông tin đăng ký khóa học" (lane Actor)
- `FE -> BE: Gọi API` → Activity: Task "Gửi yêu cầu đăng ký khóa học" (lane FE)
- `BE -> Database: Lưu` → Activity: Task "Lưu thông tin đăng ký" (lane BE)
- `BE -> FE: Trả về kết quả` → Activity: Task "Trả kết quả" (lane BE)
- `FE -> Actor: Hiển thị` → Activity: Decision Node "Kết quả thành công?" → Task "Hiển thị thông báo thành công" / "Hiển thị thông báo lỗi" (lane FE)

**Ví dụ gộp nhiều request:**
Sequence:
```
FE -> BE: Gọi API GET /api/courses
FE -> BE: Gọi API GET /api/classrooms  
FE -> BE: Gọi API GET /api/instructors
```
→ Activity: **1 request gộp**: "Gửi yêu cầu lấy danh sách khóa học, lớp học, thông tin giảng viên" (lane FE)
→ BE: **1 bước xử lý**: "Xử lý yêu cầu lấy danh sách khóa học, lớp học, thông tin giảng viên" (lane BE)

### Bảng xác nhận Activity Flow:

| Bước | Actor | Mô tả bước | Notation | Ghi chú |
|------|-------|------------|----------|---------|
| 1 | Actor | Nhập thông tin đăng ký khóa học | Task | |
| 2 | FE | Validate dữ liệu đầu vào | Decision Node | **Hợp lệ khi:** Đầy đủ thông tin bắt buộc (course_id, classroom_id), format email/phone đúng<br>**Không hợp lệ khi:** Thiếu thông tin bắt buộc, format email/phone sai |
| 3 | FE | Gửi yêu cầu đăng ký khóa học | Task | |
| 4 | BE | Validate dữ liệu | Decision Node | **Hợp lệ khi:** Lớp còn slot, classroom_id thuộc course_id, không duplicate đăng ký<br>**Không hợp lệ khi:** Lớp hết slot, classroom_id không thuộc course_id, đã đăng ký trước đó |
| 5 | BE | Lưu thông tin đăng ký | Task | |
| 6 | BE | Trả kết quả | Task | |
| 7 | FE | Kiểm tra kết quả | Decision Node | Nhánh: "Thành công" / "Lỗi" |
| 8 | FE | Hiển thị thông báo thành công | Task | |
| 9 | FE | Hiển thị thông báo lỗi | Task | |

**Ví dụ Decision Node kiểm tra điều kiện cụ thể:**

| Bước | Actor | Mô tả bước | Notation | Ghi chú |
|------|-------|------------|----------|---------|
| 10 | BE | Kiểm tra trạng thái ticket | Decision Node | Nhánh: "Trạng thái = Mới" / "Trạng thái = Đang xử lý" / "Trạng thái = Đã đóng" |
| 11 | BE | Xử lý ticket mới | Task | Chỉ khi trạng thái = Mới |
| 12 | BE | Cập nhật ticket đang xử lý | Task | Chỉ khi trạng thái = Đang xử lý |
| 13 | BE | Trả lỗi ticket đã đóng | Task | Chỉ khi trạng thái = Đã đóng |

### Flowchart Output:
- Pool với 3 lanes: Actor, FE, BE
- Start Event → Task 1 (Actor) → Decision Node 2 (FE) → Task 3 (FE) → Decision Node 4 (BE) → Task 5 (BE) → Task 6 (BE) → Decision Node 7 (FE) → Task 8 (FE) / Task 9 (FE) → End Events

## Lưu ý quan trọng

1. **Mapping Sequence → Activity**: 
   - Mỗi message FE → BE trong sequence phải có bước "Gửi yêu cầu [nghiệp vụ]" trong Activity
   - BE phải có bước xử lý và trả kết quả
   - FE phải có Decision Node và xử lý theo kết quả
2. **Gộp nhiều request**: 
   - Nếu FE gọi BE nhiều lần liên tiếp (không có tương tác người dùng ở giữa) → gộp thành 1 request
   - BE sẽ có 1 bước xử lý tương ứng với request gộp đó
3. **Gom nhiều điều kiện validation**: 
   - Nếu có nhiều điều kiện cần kiểm tra → gom thành 1 Decision Node với nhánh "Hợp lệ" / "Không hợp lệ"
   - Trong mô tả/ghi chú phải ghi rõ: **Hợp lệ khi:** [chi tiết] và **Không hợp lệ khi:** [chi tiết]
4. **Decision Node kiểm tra điều kiện cụ thể**: 
   - Nếu cần kiểm tra điều kiện cụ thể (vd: trạng thái, loại, ...) → Label ghi rõ điều kiện đó
   - Mỗi nhánh ứng với một giá trị/điều kiện cụ thể và có cách xử lý riêng
   - Ví dụ: "Kiểm tra trạng thái ticket?" → Nhánh: "Trạng thái = Mới" → Xử lý A, "Trạng thái = Đang xử lý" → Xử lý B, ...
5. **Message naming**: Luôn dùng ngôn ngữ nghiệp vụ, không dùng technical API call
6. **Validation**: Áp dụng đầy đủ 6 nhóm rule cho BE operations
7. **Decision Nodes**: Phải vẽ đủ TẤT CẢ các nhánh, mỗi nhánh có label rõ ràng
8. **Task types**: Chỉ có system tasks (Rectangle), không có task thủ công
9. **Bảng xác nhận**: BẮT BUỘC phải có và được user xác nhận trước khi vẽ
10. **ERD**: Sử dụng ERD để suy luận validation rules và business logic nếu được cung cấp
11. **Vị trí lưu file**: 
    - Lưu vào cùng thư mục với sequence diagram (nếu có)
    - Nếu không rõ → Hỏi user (gợi ý: `User stories/[Epic]/[User Story]/`)
    - Cấu trúc mong muốn: `User stories/[Epic]/[User Story]/[các file .md liên quan]`