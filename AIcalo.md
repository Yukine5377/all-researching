CaloAI – Product Specification
Ứng dụng theo dõi dinh dưỡng & calo thông minh bằng AI
1. Tổng quan sản phẩm
CaloAI là ứng dụng di động giúp người dùng theo dõi lượng calo và chất dinh dưỡng hàng ngày thông qua AI. Người dùng chỉ cần chụp ảnh bữa ăn, mô tả bằng giọng nói, hoặc quét mã vạch để nhận ngay thông tin dinh dưỡng chi tiết.
Đối tượng mục tiêu
Người muốn giảm cân / tăng cân / duy trì cân nặng
Người tập gym, vận động viên cần kiểm soát macro
Người có chế độ ăn đặc biệt (tiểu đường, keto, low-carb...)
2. Tính năng chính
2.1 🎯 Onboarding cá nhân hóa
Bước	Mô tả
Thông tin cơ bản	Tuổi, giới tính, chiều cao, cân nặng
Mục tiêu	Giảm cân / Tăng cơ / Duy trì
Mức hoạt động	Ít vận động → Rất năng động
Chế độ ăn	Bình thường, Keto, Low-carb, Chay...
Kế hoạch AI	Tính TDEE, đề xuất calo/macro hàng ngày (có thể chỉnh sửa)
2.2 📸 Ghi nhận bữa ăn bằng AI
Phương thức nhập liệu:
├── 📷 Chụp ảnh → AI nhận diện món ăn & ước lượng khẩu phần
├── 🎤 Giọng nói → NLP phân tích mô tả thực phẩm
├── 📊 Quét mã vạch → Tra cứu database thực phẩm đóng gói
├── 🔍 Tìm kiếm → Database 1M+ thực phẩm
└── ✏️ Nhập thủ công → Form chi tiết
Output cho mỗi bữa ăn:
Tổng calories (kcal)
Protein (g), Carbs (g), Fat (g)
Micronutrients (vitamins, minerals) – nếu có
Health Score (1-10)
Ghi chú người dùng
2.3 📊 Dashboard chính
┌─────────────────────────────┐
│  Calories còn lại: 1,250    │
│  ████████████░░░░  68%      │
├─────────────────────────────┤
│  Protein   ██████░░  75g    │
│  Carbs     █████░░░  120g   │
│  Fat       ████░░░░  45g    │
├─────────────────────────────┤
│  Bữa sáng    ☀️  450 kcal  │
│  Bữa trưa    🌤️  620 kcal  │
│  Bữa tối     🌙  ---       │
│  Snack        🍎  180 kcal  │
└─────────────────────────────┘
2.4 📈 Theo dõi tiến trình
Biểu đồ calo, macro theo ngày/tuần/tháng
Cân nặng & số đo cơ thể theo thời gian
BMI tracking
Streak (chuỗi ngày theo dõi liên tục)
Thống kê AI: trung bình calo/ngày, số bữa/ngày, thói quen ăn uống
2.5 💧 Theo dõi nước uống
Mục tiêu nước hàng ngày (tùy chỉnh)
Nút nhanh thêm 250ml / 500ml
Nhắc nhở uống nước
2.6 🏋️ Ghi nhận tập luyện
Log bài tập (cardio, strength, yoga...)
Ước tính calo đốt cháy
Tích hợp calo đốt vào budget hàng ngày
2.7 🤖 AI Coach & Recommendations
Đề xuất bữa ăn lành mạnh hơn dựa trên thói quen
Cảnh báo khi vượt mục tiêu calo/macro
Tips dinh dưỡng cá nhân hóa
Phân tích xu hướng ăn uống
2.8 🔁 Quick Re-log bữa ăn
Hiển thị danh sách "Bữa ăn gần đây" / "Hay ăn nhất" trên màn hình log
Bấm 1 tap để log lại bữa ăn đã từng ăn (giữ nguyên thông tin dinh dưỡng)
Tìm kiếm nhanh từ lịch sử bữa ăn
Gợi ý bữa ăn theo thời gian (sáng gợi ý món sáng hay ăn, v.v.)
2.9 🔥 Streak & Gamification
Đếm chuỗi ngày liên tiếp log bữa ăn (streak counter)
Hiển thị streak trên Dashboard
Hiệu ứng celebration khi đạt milestone (7 ngày, 30 ngày, 100 ngày...)
Badge/huy hiệu thành tích (First meal, 7-day streak, 30-day streak, 100 meals, v.v.)
Weekly summary notification với điểm số tuần
2.10 🔔 Meal Reminders & Push Notifications
Nhắc nhở ghi bữa ăn theo giờ cố định (sáng 7h, trưa 12h, tối 18h30)
Cho phép tùy chỉnh giờ nhắc nhở cho từng bữa
Nhắc nhở uống nước định kỳ
Notification khi chưa log bữa ăn nào trong ngày (cuối ngày)
Tự động clear notification sau khi đã log bữa ăn tương ứng
2.11 📊 Food Database & Autocomplete
Database thực phẩm Việt Nam phổ biến (phở, cơm tấm, bánh mì, bún bò, ...)
Autocomplete khi gõ tên món ăn (từ history + database)
Kết hợp kết quả: lịch sử cá nhân > database > AI suggestion
Lưu món ăn tùy chỉnh vào "Món của tôi"
2.12 📸 Progress Photos
Chụp ảnh cơ thể theo thời gian (trước/sau)
Grid view so sánh ảnh theo tháng
Đánh dấu mốc quan trọng trên timeline ảnh
Chỉ lưu local (bảo mật, không upload server)
2.13 ⚙️ Tích hợp & Cài đặt
Đồng bộ Apple Health / Google Fit
Dark Mode / Light Mode
Push notifications (nhắc nhở bữa ăn, uống nước)
Xuất báo cáo (PDF/CSV)
Đa ngôn ngữ (Tiếng Việt, English)
3. Cấu trúc màn hình (Screen Map)
graph TD
    A[Splash Screen] --> B[Onboarding Flow]
    B --> C[Dashboard]
    C --> D[Log Meal]
    C --> E[Water Tracker]
    C --> F[Exercise Log]
    C --> G[Progress / Analytics]
    C --> H[Profile & Settings]
    D --> D1[Camera / Photo]
    D --> D2[Voice Input]
    D --> D3[Barcode Scanner]
    D --> D4[Search Database]
    D --> D5[Manual Entry]
    D1 --> D6[Meal Analysis Result]
    G --> G1[Daily View]
    G --> G2[Weekly Chart]
    G --> G3[Monthly Report]
4. Yêu cầu phi chức năng
Yêu cầu	Mô tả
Hiệu suất	Phân tích ảnh < 3 giây, UI mượt 60fps
Bảo mật	JWT auth, mã hóa dữ liệu nhạy cảm, HTTPS
Offline	Xem lịch sử & nhập thủ công khi offline, sync khi online
Accuracy	AI nhận diện chính xác ≥ 85% cho món ăn phổ biến
Scalability	Hỗ trợ 100K+ users đồng thời
Platform	iOS 15+ & Android 10+
5. Monetization (Mô hình kinh doanh)
Tier	Tính năng
Free	3 lần scan ảnh/ngày, dashboard cơ bản, nhập thủ công không giới hạn
Premium	Scan không giới hạn, AI Coach, báo cáo chi tiết, xuất dữ liệu, không quảng cáo
6. KPIs (Chỉ số đánh giá)
DAU/MAU – Tỷ lệ người dùng hoạt động
Retention D1/D7/D30 – Tỷ lệ giữ chân
Meals logged/day – Số bữa ăn được log trung bình
AI accuracy rate – Độ chính xác nhận diện
Conversion rate – Free → Premium
Churn rate – Tỷ lệ rời bỏ
7. Trạng thái triển khai
 
#	Tính năng	Status	Ghi chú
2.1	Onboarding cá nhân hóa	✅ Done	4-step wizard, TDEE calculation
2.2	Ghi nhận bữa ăn bằng AI	✅ Done	Photo + Text, thiếu barcode & voice
2.3	Dashboard chính	✅ Done	Calorie ring, macros, water, exercise
2.4	Theo dõi tiến trình	✅ Done	Charts, body measurements
2.5	Theo dõi nước uống	✅ Done	Quick add 250ml/500ml
2.6	Ghi nhận tập luyện	✅ Done	Log exercise, calories burned
2.7	AI Coach	✅ Done	Daily advice, weekly analysis
2.8	Quick Re-log bữa ăn	⬜ TODO	Ưu tiên cao - giảm friction daily use
2.9	Streak & Gamification	⬜ TODO	Ưu tiên cao - tăng retention
2.10	Meal Reminders	⬜ TODO	Ưu tiên cao - tăng engagement
2.11	Food Database & Autocomplete	⬜ TODO	Ưu tiên trung bình
2.12	Progress Photos	⬜ TODO	Ưu tiên thấp
2.13	Tích hợp & Cài đặt	🔶 Partial	Health sync done, thiếu push notif, export, i18n
 