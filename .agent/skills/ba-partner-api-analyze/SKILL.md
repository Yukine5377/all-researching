---
name: ba-partner-api-analyze
description: Hỗ trợ BA tìm hiểu luồng tích hợp với đối tác khi đã có đặc tả API (mình gọi sang họ).
allowed-tools: read_url_content, read_browser_page, list_dir, view_file, write_to_file, generate_image
---

Version: 1.0.0
Author: M2MBA
Last Updated: 2026-03-13
Description: Trợ lý chuyên dụng phân tích tài liệu tích hợp đối tác (Outbound API call). Phân tích nguồn dữ liệu gửi đi, mapping dữ liệu trả về và xác định impact tới UI/BE/DB.

# Skill: Phân tích Tài liệu Tích hợp Đối tác (Outbound API)

## 🎯 Mục đích
Hỗ trợ Business Analyst nghiên cứu tài liệu API của đối tác để thiết kế luồng tích hợp cho hệ thống nội bộ.

## 🚀 Quy trình thực hiện

### Bước 1: Tổng quan (Overview) & Luồng E2E
- Xác định mục tiêu nghiệp vụ của việc tích hợp.
- Vẽ luồng tích hợp End-to-End (E2E) từ lúc bắt đầu đến khi kết thúc nghiệp vụ.
- Xác định mô hình tích hợp (REST, SOAP...) và phương thức xác thực (OAuth2, API Key...).

### Bước 2: Phân tích Danh mục API
- Liệt kê các API hiện có trong tài liệu.
- Phân loại API theo mục đích nghiệp vụ.
- Lựa chọn danh sách các API phù hợp với nhu cầu hiện tại.

### Bước 3: Phân tích Chi tiết từng API
Đối với mỗi API được chọn, phân tích các khía cạnh sau:

#### 1. Request Data Mapping
Lập bảng mapping Request với các cột:
- **Trường đối tác**: Tên field trong API request.
- **Ý nghĩa**: Giải thích mục đích của field.
- **Mapping trường nội bộ**: Field tương ứng trong DB hoặc logic xử lý của hệ thống.
- **Đã có/Bổ sung thêm**: Trạng thái của field trong hệ thống hiện tại.

#### 2. Response Data Mapping & Persistence
Lập bảng mapping Response với các cột:
- **Trường đối tác**: Tên field trong API response.
- **Ý nghĩa**: Giải thích dữ liệu nhận về.
- **Mapping/Check dữ liệu**: Luận điểm kiểm tra tính hợp lệ.
- **Cần lưu?**: Có lưu vào Database không?
- **Lưu vào bảng nào**: Tên bảng đích trong ERD.

### Bước 4: Thiết kế & Đánh giá Impact

#### 1. Biểu đồ Sequence Diagram
Vẽ luồng tương tác giữa User, Frontend, Backend và Đối tác.

#### 2. Data Model & ERD Impact
- Xác định các bảng/trường thông tin cần bổ sung trong ERD.
- Thiết kế bảng Data Mapping chi tiết.

#### 3. Chức năng & Giao diện (UI/UX)
- Xác định các màn hình cần thay đổi (thêm input, hiển thị thông tin đối tác trả về).
- Liệt kê các chức năng cần bổ sung hoặc chỉnh sửa.

## 📝 Output
Tạo một file `.md` (định danh: `ba-integration-analyze-[partner-name].md`) dựa trên template tại `reference/template-result.md`.

## ⚠️ Lưu ý quan trọng
- Luôn bám sát tài liệu đặc tả của đối tác.
- Làm rõ "Nguồn dữ liệu" cho mọi trường thông tin bắt buộc trong Request.
- Đảm bảo Sequence Diagram thể hiện rõ điểm phân tách giữa hệ thống nội bộ và hệ thống đối tác.
