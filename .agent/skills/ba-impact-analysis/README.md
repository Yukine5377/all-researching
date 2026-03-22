# Skill: Impact Analysis - Phân tích Phạm vi Ảnh hưởng

## 📖 Mô tả

Skill hỗ trợ BA phân tích tính khả thi và phạm vi ảnh hưởng khi có yêu cầu thay đổi từ stakeholder. Skill tự động phân tích impact theo 6 nhóm, đánh giá mức độ ảnh hưởng, liệt kê công việc BA cần làm, và tạo list câu hỏi cần làm rõ với stakeholder.

## 🚀 Cách sử dụng

### Khởi động skill:
```
"Phân tích impact"
"Phân tích phạm vi ảnh hưởng"
"Impact analysis"
"/ba-impact-analysis"
```

### Quy trình:

1. **Thu thập Input từ BA:**
   - Yêu cầu thay đổi (mục tiêu, lý do)
   - ERD hoặc mô tả entity/field
   - Danh sách UC/US liên quan
   - Quy trình nghiệp vụ liên quan

2. **Phân tích Impact:**
   - Tóm tắt yêu cầu
   - Phân tích 6 nhóm impact
   - Mô tả chi tiết từng đối tượng bị ảnh hưởng
   - Tạo bảng Impact Analysis

3. **Liệt kê công việc BA:**
   - Cập nhật tài liệu hiện có
   - Soạn tài liệu mới
   - Chuẩn bị nội dung hỗ trợ Dev/Test/Ops

4. **Ghi lại Risk & Lưu ý:**
   - Rủi ro về nghiệp vụ
   - Rủi ro về hiểu nhầm yêu cầu
   - Phụ thuộc cần quản lý

5. **Tạo list câu hỏi cho Stakeholder:**
   - Câu hỏi về Lý do và Vấn đề cần giải quyết
   - Câu hỏi về Thông tin Data (Input/Output)
   - Câu hỏi về Process/Quy trình
   - Câu hỏi về Công thức tính toán
   - Câu hỏi về Quy định tuân thủ

6. **Tổng hợp Output:**
   - Phần A: Tóm tắt yêu cầu
   - Phần B: Bảng Impact Analysis
   - Phần C: Danh sách việc BA
   - Phần D: Risk & Lưu ý
   - Phần E: Danh sách câu hỏi cần làm rõ với stakeholder

## 📋 6 Nhóm Impact

1. **Chức năng / Use Case / User Story**
2. **Quy trình nghiệp vụ (Process/Flow)**
3. **Dữ liệu & Báo cáo (Field, Entity, Báo cáo, KPI)**
4. **Giao diện màn hình & Trải nghiệm người dùng**
5. **Tích hợp hệ thống khác (API, Batch, Message)**
6. **Stakeholder / Bộ phận bị tác động**

## 📊 Mức độ ảnh hưởng

- **Cao**: Ảnh hưởng lớn, thay đổi nhiều, ảnh hưởng đến nhiều stakeholder
- **Trung bình**: Ảnh hưởng vừa phải, thay đổi một phần
- **Thấp**: Ảnh hưởng nhỏ, thay đổi ít

## ❓ 5 Nhóm Câu hỏi cho Stakeholder

1. **Lý do và Vấn đề cần giải quyết:** Hiểu rõ tại sao có yêu cầu, vấn đề cụ thể là gì
2. **Thông tin Data (Input/Output):** Nguồn dữ liệu, format, ai sử dụng
3. **Process/Quy trình:** Các bước thực hiện, ai làm, điều kiện chuyển bước
4. **Công thức tính toán:** Logic tính toán, tham số, điều kiện áp dụng
5. **Quy định tuân thủ:** Compliance, chính sách, audit trail

## ⚠️ Lưu ý

- Skill tập trung vào góc nhìn nghiệp vụ, không đi sâu kỹ thuật
- Nếu BA bảo "cứ giả định giúp", AI sẽ ghi rõ "Giả định..." trong output
- Output format chuẩn để copy vào CR/BBH

## 📁 Cấu trúc Output

File output: `Impact_Analysis_[Tên_yêu_cầu]_[YYYYMMDD].md`

Cấu trúc:
- Phần A: Tóm tắt yêu cầu thay đổi
- Phần B: Bảng Impact Analysis
- Phần C: Danh sách "việc của BA"
- Phần D: Risk & Lưu ý
- Phần E: Danh sách câu hỏi cần làm rõ với stakeholder

## 🔗 Liên quan

Skill này thường được sử dụng cùng với:
- `ba-user-story-spec`: Để cập nhật UC/US sau khi phân tích impact
- `ba-api-spec`: Để xác định API cần thay đổi
- `ba-activity-rule-spec`: Để cập nhật flow/process sau khi phân tích impact

---

**Version:** 1.0.0 | **Ngày:** 2026-01-20
