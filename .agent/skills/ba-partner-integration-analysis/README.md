# Skill: Phân tích Tích hợp Đối tác

## 📖 Mô tả

Skill hỗ trợ Business Analyst phân tích nhu cầu tích hợp với đối tác, xác định dữ liệu đã có/chưa có trong hệ thống, phân tích các chức năng cần thay đổi, và tạo tài liệu đặc tả API tích hợp.

## 🚀 Cách sử dụng

### Khởi động skill

Sử dụng một trong các câu lệnh sau:
- "Phân tích tích hợp đối tác"
- "Tạo API tích hợp"
- "Phân tích dữ liệu đối tác"
- "/ba-partner-integration-analysis"

### Quy trình làm việc

1. **Thu thập thông tin đầu vào**
   - Hệ thống đối tác cần tích hợp
   - Nhu cầu tích hợp và dữ liệu đối tác cần lấy
   - ERD (Entity Relationship Diagram) của hệ thống

2. **Phân tích dữ liệu đã có/chưa có**
   - So sánh dữ liệu đối tác cần với ERD
   - Tạo bảng mapping dữ liệu
   - Xác định dữ liệu đã có/chưa có

3. **Phân tích chức năng cần thay đổi**
   - Xác định thực thể cần update
   - Liệt kê các chức năng cần thay đổi
   - Xác định trường dữ liệu liên quan

4. **Vẽ luồng tích hợp**
   - Tạo sequence diagram bằng Mermaid
   - Thể hiện luồng gọi API giữa 2 hệ thống

5. **Đặc tả API tích hợp**
   - Đặc tả chi tiết từng API
   - Request/Response/Error/Status Code
   - Security considerations

6. **Xuất tài liệu Word**
   - Tổng hợp toàn bộ phân tích
   - Xuất file Word (.docx) chuẩn BA

## 📋 Ví dụ Input

### Hệ thống đối tác
- Tên: Shopee
- Mục đích: Tích hợp để đồng bộ đơn hàng từ hệ thống của mình lên Shopee

### Nhu cầu tích hợp
- Đối tác cần lấy thông tin đơn hàng: Mã đơn hàng, Tên khách hàng, Số điện thoại, Địa chỉ giao hàng, Trạng thái đơn hàng, Thời gian giao hàng dự kiến

### ERD
- Thực thể Order: order_id, order_code, customer_id, shipping_address, status, created_at
- Thực thể Customer: customer_id, full_name, phone, email
- Thực thể Shipping: shipping_id, order_id, shipping_method

## 📊 Ví dụ Output

### Bảng phân tích dữ liệu
| Tên trường thông tin | Mapping dữ liệu bên mình | Đã có/Chưa có |
|---------------------|-------------------------|---------------|
| Mã đơn hàng | Order.order_code | Đã có |
| Tên khách hàng | Customer.full_name | Đã có |
| Thời gian giao hàng dự kiến | Tính toán từ Order.created_at + Shipping.delivery_days | Chưa có |

### Bảng phân tích chức năng
| Tên chức năng | Loại thay đổi | Nội dung thay đổi | Thực thể liên quan |
|---------------|---------------|-------------------|-------------------|
| Quản lý vận chuyển | M | Thêm trường delivery_days | Shipping |

## 🔧 Scripts

### Xuất file Word
```bash
python .claude/skills/ba-partner-integration-analysis/scripts/export_integration_spec_to_docx.py <integration_spec_file>
```

## 📚 Tài liệu tham khảo

- Xem chi tiết quy trình trong file `SKILL.md`
