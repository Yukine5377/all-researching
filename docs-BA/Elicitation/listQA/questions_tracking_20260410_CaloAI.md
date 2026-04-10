# Theo dõi câu hỏi: CaloAI - Ứng dụng Tracking Dinh dưỡng & Calo thông minh

**Ngày tạo:** 2026-04-10 | **Nguồn:** BA Research + AI Domain Knowledge

---

## 🔎 Phân tích sơ bộ

> **Vấn đề cốt lõi:** CaloAI cần xác nhận rõ đối tượng người dùng chính, động lực sử dụng hàng ngày, và pain point thực tế khi follow-up (không chỉ là nhập dữ liệu, mà là compliance & habit formation).
>
> **Ambiguity Zones:**
> - Ai là stakeholder chính: người dùng cuối (health-conscious users), fitness trainer, dietician, hay healthcare provider?
> - Cơ chế retention & engagement (gamification, streak) có liên kết nào với các bề ngoài (social, challenge group) không?
> - Dữ liệu người dùng lưu trữ ở đâu, có cần tuân thủ GDPR/quy định bảo vệ dữ liệu cá nhân không?
>
> **Rủi ro bỏ sót:**
> - Cơ chế AI nhận diện ảnh thực tế: độ chính xác trong môi trường Việt (các bữa ăn phổ biến), khó khăn khi phần ăn không rõ ràng.
> - Quy trình onboarding: có cần tư vấn từ chuyên gia dinh dưỡng hay tự động dựa AI?
> - Quản lý multiple profiles: một user có thể tracking cho cả gia đình (trẻ em, bà mẹ) không?

---

## PHẦN 1.1: VẤN ĐỀ & MỤC ĐÍCH

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.1.1** | Vấn đề cốt lõi | Tại sao cần xây dựng CaloAI? Vấn đề lớn nhất bạn đang gặp là gì — mọi người khó tuân thủ diet, hay khó theo dõi chi tiết, hay khó có tư vấn cá nhân? | KHÁM PHÁ | ⬜ |
| **1.1.2** | Động lực sản phẩm | Theo bạn, khoảng trống thị trường là gì? Ứng dụng hiện tại (MyFitnessPal, Cronometer, Carb Manager...) thiếu gì mà CaloAI sẽ cải thiện? | KHÁM PHÁ | ⬜ |
| **1.1.3** | Mô hình tổ chức | Ai là chủ sở hữu/CEO dự án này? Có team nào khác liên quan (Tech, Design, Marketing)? Cơ cấu tổ chức như thế nào? | KHÁM PHÁ | ⬜ |
| **1.1.4** | Người ra quyết định | Ai quyết định ưu tiên tính năng? Ai phê duyệt release? | KHÁM PHÁ | ⬜ |
| **1.1.5** | Mô hình kinh doanh - Revenue | Bạn định kiếm tiền như thế nào? (Subscription tier, ads, data monetization, professional subscriptions) Mục tiêu revenue năm 1? | KHÁM PHÁ | ⬜ |
| **1.1.6** | Mô hình kinh doanh - Cost | Chi phí chính là gì? (Hosting, AI model fees - Google Vision/OpenAI, database, customer support) | KHÁM PHÁ | ⬜ |
| **1.1.7** | Đối tác chính | Cần tích hợp với ai? (Apple Health, Google Fit, payment gateway, push notification service) | XÁC NHẬN | ⬜ |
| **1.1.8** | KPI thành công | Metric nào quan trọng nhất năm 1? (DAU, retention D7/D30, ARPU, meals logged/day, hay AI accuracy?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.2: HỆ THỐNG HIỆN TẠI

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.2.1** | MVP hiện tại | CaloAI hiện tại đã có những tính năng nào? (Theo spec: Onboarding, Dashboard, Log meal via photo/text, Water/Exercise tracker đã done, còn Quick re-log, Streak, Reminders chưa làm) Có app nào chạy thực tế chưa? | KHÁM PHÁ | ⬜ |
| **1.2.2** | Tính năng dùng nhiều nhất | Trong MVP hiện tại, user dùng tính năng nào nhất? (Photo log? Text search? Manual entry?) | KHÁM PHÁ | ⬜ |
| **1.2.3** | Người dùng beta | Có bao nhiêu beta user/testers? Loại nào? (Friends, fitness enthusiasts, diabetic patients...) | KHÁM PHÁ | ⬜ |
| **1.2.4** | Feedback từ beta | Beta users nói gì? Tính năng nào họ yêu thích? Vấn đề chính họ gặp? | KHÁM PHÁ | ⬜ |
| **1.2.5** | Bất cập hiện tại | Bạn biết được tính năng nào cần sửa hoặc cải tiến không? Ví dụ cụ thể? | KHÁM PHÁ | ⬜ |
| **1.2.6** | Accuracy AI | AI nhận diện ảnh bữa ăn chính xác bao nhiêu %? Loại món ăn nào mà AI nhầm lẫn? | KHÁM PHÁ | ⬜ |
| **1.2.7** | Database thực phẩm | Database thực phẩm hiện tại có bao nhiêu entry? Che phủ những loại món ăn nào? (Phở, bánh mì, cơm tấm, các món quốc tế?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.3: QUY TRÌNH & CÔNG VIỆC

### **Phần 1.3A: Xác nhận Stakeholders**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3A.1** | Người dùng chính | Đối tượng mục tiêu chính là ai? (Theo spec: người giảm cân, người tập gym, người có chế độ ăn đặc biệt — nhưng ưu tiên nào nhất?) | KHÁM PHÁ | ⬜ |
| **1.3A.2** | Secondary users | Có nhóm người dùng phụ không? (VD: trainer cảm sát client, dietician tư vấn cho patient?) | KHÁM PHÁ | ⬜ |
| **1.3A.3** | Admin/Internal | Team nào sẽ quản lý app (moderation, support, content)? | KHÁM PHÁ | ⬜ |

---

### **Phần 1.3B: Vòng đời thực thể chính**

#### **B1 – User / Account Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B1.1** | Trạng thái user | Vòng đời user là: Sign-up → Onboarding → Active → Premium/Free tier → Churn. Đúng không? Có trạng thái nào khác không? | KHÁM PHÁ | ⬜ |
| **1.3B1.2** | Profile changes | User có thể cập nhật profile (cân nặng, mục tiêu, activity level) nhiều lần không? Bao giờ nên update? | KHÁM PHÁ | ⬜ |

#### **B2 – Meal / Food Log Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B2.1** | Vòng đời meal | Vòng đời một bữa ăn: Capture (photo/voice/search) → AI Analysis → Result → Edit → Save → Visible on Dashboard/History. Đúng không? | XÁC NHẬN | ⬜ |
| **1.3B2.2** | Edit meal | User có thể sửa (adjust portion, swap food item) sau khi log không? Mấy lần? Có lịch sử version không? | KHÁM PHÁ | ⬜ |
| **1.3B2.3** | Delete meal | Xóa meal có cần confirm không? Xóa có affect streak/total không? | KHÁM PHÁ | ⬜ |

#### **B3 – Tracking Session Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B3.1** | Daily tracking | User expected flow: Mở app → Xem dashboard → Log meals (multiple times) → Xem tiến trình. Đúng không? | XÁC NHẬN | ⬜ |
| **1.3B3.2** | Session length | User sẽ dùng app bao lâu mỗi lần? (5 phút? 30 phút?) | KHÁM PHÁ | ⬜ |

---

### **Phần 1.3C: Chi tiết công việc từng Stakeholder**

#### **Nhóm 1: End User (Người dùng cuối)**

**UC1 – User logs meal via photo (Trường hợp chính)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C1.1** | Quy trình | User chụp ảnh bữa ăn như thế nào? (Từ trên xuống, từ một góc cụ thể, kèm ruler để đo kích thước?) | KHÁM PHÁ | ⬜ |
| **1.3C1.2** | Input đầu vào | Ngoài ảnh, user cần cung cấp gì? (Số người ăn, mức độ bắp cay, công thức nấu nướng?) | KHÁM PHÁ | ⬜ |
| **1.3C1.3** | AI output | AI trả về gì sau khi phân tích? (Tên món, khẩu phần được detect, calories, macros) | XÁC NHẬN | ⬜ |
| **1.3C1.4** | Confirm AI | User có confirm kết quả AI không, hay AI tự lưu? | KHÁM PHÁ | ⬜ |
| **1.3C1.5** | Edit result | Nếu AI sai (detect sai món hoặc khẩu phần), user sửa thế nào? (Dropdown list, manual entry, new photo?) | KHÁM PHÁ | ⬜ |
| **1.3C1.6** | Template | Có template/form mẫu để user nhập không? Xin mẫu UI/wireframe | XÁC NHẬN | ⬜ |
| **1.3C1.7** | Storage | Ảnh được lưu ở đâu? (Local phone, cloud server, chỉ lưu metadata?) | KHÁM PHÁ | ⬜ |
| **1.3C1.8** | Lỗi handling | Nếu AI fail (không nhận diện được), user có thể search thủ công được không? Workflow? | KHÁM PHÁ | ⬜ |
| **1.3C1.9** | Time | Từ chụp ảnh → nhận kết quả, mất bao lâu? (Spec nói < 3 giây — hiện tại có đạt được không?) | KHÁM PHÁ | ⬜ |

**UC2 – User logs meal via text search**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C2.1** | Search | User gõ tên món ăn, autocomplete trả về gì? (Top 10? Top 100? Có history + database + AI suggestion không?) | KHÁM PHÁ | ⬜ |
| **1.3C2.2** | Khẩu phần | Sau khi select item, user adjust khẩu phần như thế nào? (Dropdown: 1/2 serving, 1 serving, 1.5 serving...?) | KHÁM PHÁ | ⬜ |
| **1.3C2.3** | Custom meal | User có thể tạo custom meal (mix nhiều items) được không? | KHÁM PHÁ | ⬜ |
| **1.3C2.4** | Form search | Hiện tại có gì trên UI search? Xin mẫu | XÁC NHẬN | ⬜ |

**UC3 – User tracks water & exercise**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C3.1** | Water | User add water thế nào? (Quick button 250ml/500ml? Manual input liters?) | KHÁM PHÁ | ⬜ |
| **1.3C3.2** | Water goal | Mục tiêu nước được tính như thế nào? (Formula: weight * 30ml? Fixed 2L? User custom?) | KHÁM PHÁ | ⬜ |
| **1.3C3.3** | Water history | Có lịch sử nước uống (Timeline) không? | KHÁM PHÁ | ⬜ |
| **1.3C3.4** | Exercise log | User log exercise với thông tin gì? (Loại exercise, duration, intensity, notes?) | KHÁM PHÁ | ⬜ |
| **1.3C3.5** | Calorie burn | Calo đốt cháy được tính như thế nào? (Age, weight, gender factor? Database exercise calories?) | KHÁM PHÁ | ⬜ |
| **1.3C3.6** | Calorie adjustment | Calo đốt cháy có tự động cộng vào "calorie remaining" không, hay chỉ hiển thị không? | KHÁM PHÁ | ⬜ |

**UC4 – View Dashboard & Progress**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C4.1** | Dashboard daily | Dashboard hôm nay hiển thị gì? (Calories remaining, macros breakdown, bữa ăn theo timeline, water, exercise?) Xin mẫu | XÁC NHẬN | ⬜ |
| **1.3C4.2** | Dashboard data | Dữ liệu trên dashboard được tính như thế nào? (TDEE formula? Calorie goal từ onboarding? Có thay đổi hàng ngày không?) | KHÁM PHÁ | ⬜ |
| **1.3C4.3** | Macros target | Protein/Carbs/Fat target được tính từ đâu? (AI từ goal + activity level? User custom?) | KHÁM PHÁ | ⬜ |
| **1.3C4.4** | Visual | Progress bar (calorie ring), số liệu (g), hay cả hai? Có threshold alert không? (Vd: nếu protein < 80% target lúc 6pm) | KHÁM PHÁ | ⬜ |
| **1.3C4.5** | History view | User xem lịch sử meal/water/exercise như thế nào? (List, calendar grid, chart?) Xin mẫu | XÁC NHẬN | ⬜ |
| **1.3C4.6** | Analytics | Biểu đồ calo/macro theo ngày/tuần/tháng? Có API để export không? | KHÁM PHÁ | ⬜ |
| **1.3C4.7** | Body measurement | Body weight & measurement được track như thế nào? (Manual entry weekly? Integration với smart scale?) | KHÁM PHÁ | ⬜ |

**UC5 – AI Coach & Notifications**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C5.1** | AI advice | AI Coach đề xuất gì? (Bữa ăn suggestion, macro rebalancing, habit tips?) | KHÁM PHÁ | ⬜ |
| **1.3C5.2** | Advice timing | Advice được đẩy khi nào? (Daily? Weekly? On-demand?) | KHÁM PHÁ | ⬜ |
| **1.3C5.3** | Alert threshold | Cảnh báo khi nào? (Vượt calorie? Macro imbalance? Exceed water goal?) | KHÁM PHÁ | ⬜ |
| **1.3C5.4** | Notification | Có push notification không? Loại nào? (Meal reminders 7am/12pm/6pm? Daily summary?) | KHÁM PHÁ | ⬜ |
| **1.3C5.5** | Notification setting | User có tùy chỉnh notification (time, frequency, type) được không? | KHÁM PHÁ | ⬜ |

**UC6 – Streak & Gamification**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C6.1** | Streak definition | Streak được tính từ gì? (Có ít nhất 1 meal logged/day? Calo on target? Activity?) | KHÁM PHÁ | ⬜ |
| **1.3C6.2** | Streak reset | Streak reset khi nào? (Miss 1 day? Hoặc có grace period?) | KHÁM PHÁ | ⬜ |
| **1.3C6.3** | Streak display | Streak hiển thị ở đâu? (Dashboard, profile, notification khi break streak?) | KHÁM PHÁ | ⬜ |
| **1.3C6.4** | Badges | Milestone badges là gì? (Spec nói: First meal, 7-day streak, 30-day streak, 100 meals — đủ rồi hay thêm?) | KHÁM PHÁ | ⬜ |
| **1.3C6.5** | Celebration | Celebration effect khi đạt milestone như thế nào? (Animation, notification, badge on profile?) | KHÁM PHÁ | ⬜ |
| **1.3C6.6** | Weekly summary | Weekly summary notification có gì? (Meals logged, calo average, macro balance, streak count, badges earned?) | KHÁM PHÁ | ⬜ |

**UC7 – Onboarding**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C7.1** | Onboarding flow | Onboarding steps: Basic info → Goal → Activity level → Diet preference → AI plan. Đúng không? Có step nào khác không? | XÁC NHẬN | ⬜ |
| **1.3C7.2** | Basic info | Nhập những gì? (Age, gender, height, weight, location, allergies?) | KHÁM PHÁ | ⬜ |
| **1.3C7.3** | Goal | Goals available: Lose weight, gain muscle, maintain. Còn gì khác? (Improve energy, manage condition như diabetic?) | KHÁM PHÁ | ⬜ |
| **1.3C7.4** | Activity level | Activity options: Sedentary, lightly active, moderate, very active, extra active. Bạn define thế nào? (Activity example cho user hiểu?) | XÁC NHẬN | ⬜ |
| **1.3C7.5** | Diet preference | Diet options: Normal, keto, low-carb, vegan, vegetarian, paleo. Còn gì? (Halal? Low-sodium?) | KHÁM PHÁ | ⬜ |
| **1.3C7.6** | TDEE calculation | Công thức TDEE bạn dùng là gì? (Mifflin-St Jeor? Harris-Benedict? Custom?) | XÁC NHẬN | ⬜ |
| **1.3C7.7** | Calorie goal | Calorie goal được đặt là TDEE hay offset? (VD: -500 kcal/day cho giảm 0.5kg/week) | KHÁM PHÁ | ⬜ |
| **1.3C7.8** | Macro target | Macro target được tính từ goal + diet preference. Công thức? | KHÁM PHÁ | ⬜ |
| **1.3C7.9** | Adjustable | Sau onboarding, user có thể adjust calorie goal hay macro target không? | KHÁM PHÁ | ⬜ |
| **1.3C7.10** | Onboarding time | Onboarding mất bao lâu? (2-3 phút? Có skip được không?) | KHÁM PHÁ | ⬜ |

---

#### **Nhóm 2: Business Admin / Support Team (Nếu có)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C8.1** | Admin tasks | Admin cần làm gì? (Manage users, moderate food database, respond to feedback, generate reports?) | KHÁM PHÁ | ⬜ |
| **1.3C8.2** | Food database mgmt | Ai quản lý/update food database? (Manual entries, phía BA add, community crowdsourced?) | KHÁM PHÁ | ⬜ |
| **1.3C8.3** | User support | User support có qua channel nào? (In-app chat, email, FAQ?) | KHÁM PHÁ | ⬜ |

---

### **Phần 1.3D: Quy định & Edge Cases**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3D.1** | Medical disclaimer | Có cảnh báo gì về y tế không? (VD: "Ứng dụng này không phải lời tư vấn y tế") | KHÁM PHÁ | ⬜ |
| **1.3D.2** | Data accuracy | Người dùng chịu trách nhiệm không chính xác của dữ liệu hay CaloAI chịu? | KHÁM PHÁ | ⬜ |
| **1.3D.3** | Child safety | Có hỗ trợ tracking cho trẻ em không? (COPPA compliance nếu < 13 tuổi?) | KHÁM PHÁ | ⬜ |
| **1.3D.4** | Edge case - unusual diet | Những trường hợp khác như nên ăn Y nhưng app gợi ý X? (VD: allergy, religious reasons, intolerance) | KHÁM PHÁ | ⬜ |
| **1.3D.5** | Edge case - low phone storage | User phone storage < 1GB, còn có thể dùng app không? | KHÁM PHÁ | ⬜ |
| **1.3D.6** | Offline mode | Offline có thể log meal, view history, edit không? Sync khi online? | XÁC NHẬN | ⬜ |

---

## PHẦN 1.4: PHÂN TÍCH TÁC ĐỘNG THAY ĐỔI (CHANGE IMPACT ANALYSIS)

| Chiều tác động | Câu hỏi khơi gợi | Ghi chú cho BA | Status |
| :--- | :--- | :--- | :--:|
| **Quy trình** | "Nếu CaloAI thay thế các app khác (MyFitnessPal, Fitbit app), user workflow có thay đổi hoàn toàn không?" | Cần vẽ so sánh current experience vs. CaloAI | ⬜ |
| **Tích hợp** | "CaloAI cần liên kết với Apple Health, Google Fit, hay payment gateway để hoạt động được không? Có rủi ro integr nào không?" | Xác định integration touchpoints | ⬜ |
| **Dữ liệu** | "Nếu user từ ứng dụng khác chuyển sang CaloAI, dữ liệu cũ (history meals, weight tracking) có cần migrate không? Bao nhiêu năm data?" | Xin schema/file mẫu dữ liệu migration | ⬜ |
| **Con người** | "Ai sẽ support user khi gặp vấn đề? Có cần training team support không?" | Stakeholder Management | ⬜ |
| **Pháp lý** | "CaloAI lưu dữ liệu nhạy cảm (cân nặng, thói quen ăn). Cần tuân thủ GDPR, PDPA, hay quy định bảo vệ dữ liệu cá nhân nào không?" | Compliance check | ⬜ |

---

## PHẦN 1.5: THU THẬP ARTIFACTS ⭐

> **TRIGGER CHƯA TÌM THẤY:** Hiện tại BA/user chưa cung cấp kết quả elicitation thực tế (meeting notes, transcript, stakeholder feedback) nên phần này để trống. Khi có bất kỳ elicitation session nào ghi chép được, sẽ update phần này với các questions về:
> - Mẫu Dashboard UI hiện tại
> - Mẫu Meal log form
> - Mẫu Analytics reports mà user muốn
> - API schemas từ Apple Health / Google Fit
> - Onboarding UI flows

---

## PHẦN 2: HIỆN TRẠNG BÊN NGOÀI

### 🔍 **BƯỚC 1: RESEARCH TRƯỚC - Đối thủ & Thị trường**

> *(AI sẽ thực hiện domain research + market research trong phần sau)* 

Các competitor chính cần research:
- **MyFitnessPal** (Mỹ, 1M+ foods, free + premium)
- **Cronometer** (Canada, focus dinh dưỡng chuyên sâu)
- **Carb Manager** (Mỹ, focus keto/low-carb)
- **MacroFactor** (AI-powered, focus macro balance)
- **Lifesum** (Thụy Điển, focus lifestyle change)
- **Vietnam local**: Có app nào hay không? (Fitness app Việt?)

Thị trường hiện tại:
- Health & Wellness App market
- AI/Computer Vision adoption
- Subscription SaaS trend
- Gamification in health tracking

---

### **PHẦN 2.1: XÁC NHẬN VỀ ĐỐI THỦ (sau khi research)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **2.1.1** | Đối thủ chính | Theo bạn, đối thủ chính là ai? (Spec nói MyFitnessPal là leader — đúng không?) Có đối thủ mới nào không? | KHÁM PHÁ | ⬜ |
| **2.1.2** | Điểm mạnh đối thủ | Research tôi thấy: MyFitnessPal mạnh về database (1M+ foods) và community. Bạn đánh giá sao? KH chọn họ vì lý do gì? | XÁC NHẬN | ⬜ |
| **2.1.3** | Điểm yếu đối thủ | Nhưng MyFitnessPal bị phàn nàn vì: UI cũ, quảng cáo nhiều, AI recognition chưa tốt. Bạn thấy không? Cơ hội cạnh tranh? | XÁC NHẬN | ⬜ |
| **2.1.4** | Tính năng nổi bật | Tôi thấy Cronometer chi tiết hơn (micronutrients), Carb Manager focus keto, MacroFactor dùng AI adapt macro. Bạn muốn differentiate thế nào? | KHÁM PHÁ | ⬜ |
| **2.1.5** | Pricing strategy | Competitor pricing: MyFitnessPal $9.99/mo, Cronometer $3.99/mo, Carb Manager $13/mo. CaloAI mong muốn bao nhiêu? | KHÁM PHÁ | ⬜ |
| **2.1.6** | Market gap | Research thấy thị trường thiếu app nào? (VD: Vietnamese food DB comprehensive, integration local health platform?) | KHÁM PHÁ | ⬜ |

---

### **PHẦN 2.2: PHÂN TÍCH THỊ TRƯỜNG (sau khi research)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **2.2.1** | Market size | Health & Fitness app market size (globally, SEA) là bao nhiêu? Tăng trưởng rate? | KHÁM PHÁ | ⬜ |
| **2.2.2** | Target segment | CaloAI focus segment nào? (All health-conscious, hay niche: fitness enthusiasts, diabetics, keto users?) | KHÁM PHÁ | ⬜ |
| **2.2.3** | TAM/SAM/SOM | TAM (Total market), SAM (Serviceable market — Việt Nam), SOM (Serviceable obtainable — first year target) là bao nhiêu? | KHÁM PHÁ | ⬜ |
| **2.2.4** | User behaviors | Thói quen user: sử dụng app cái nào lâu nhất? Retention rate bình thường là bao nhiêu? | KHÁM PHÁ | ⬜ |
| **2.2.5** | Barriers to entry | Barrier nào lớn? (High development cost AI, user acquisition, network effect?) | KHÁM PHÁ | ⬜ |
| **2.2.6** | Regulatory | Có quy định nào về health claims, data storage, payment processing (Việt Nam) không? | KHÁM PHÁ | ⬜ |

---

## PHẦN 3: NHU CẦU TƯƠNG LAI

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **3.1** | Kế hoạch mở rộng | Kế hoạch 1 năm, 3 năm là gì? (Expand to countries khác? New verticals như fitness coaching?) | KHÁM PHÁ | ⬜ |
| **3.2** | Sản phẩm tương lai | Tính năng mới nào được plan? (Meal plan recommendations, community forum, professional tier cho trainer?) | KHÁM PHÁ | ⬜ |
| **3.3** | Tech upgrade | Công nghệ nào plan upgrade? (Better AI model, wearable integration, cloud migration?) | KHÁM PHÁ | ⬜ |
| **3.4** | Market expansion | Sẽ mở rộng sang market nào tiếp? (Quốc tế như Indonesia, Philippines? Hay focus Việt Nam trước?) | KHÁM PHÁ | ⬜ |
| **3.5** | Partnership | Plan partnership nào? (Health platforms, insurance companies, corporate wellness programs?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 4: TÍNH NĂNG - TEMPLATE MODULE

### **Module 4.0 – MEAL LOGGING (Trọng tâm)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.0.1** | Hiện tại | Hiện tại user log meal bằng cách nào? (Photo là chính, hay text search, hay mix?) | KHÁM PHÁ | ⬜ |
| **4.0.2** | Pain point | Vấn đề chính khi log meal là gì? (Mất thời gian, AI không chính xác, khẩu phần khó adjust?) | KHÁM PHÁ | ⬜ |
| **4.0.3** | Frequency | User log bao nhiêu bữa ăn/ngày? Peak time là khi nào? (Ngay sau khi ăn hay cuối ngày?) | KHÁM PHÁ | ⬜ |
| **4.0.4** | Batch entry | User có log nhiều items cùng lúc (combo meal) không? | KHÁM PHÁ | ⬜ |
| **4.0.5** | Accuracy | Calo/macro accuracy có quan trọng không? Mức độ tolerance? | KHÁM PHÁ | ⬜ |
| **4.0.6** | Tracking | Có tracking được "meal completed on time" không? (VD: breakfast before 9am?) | KHÁM PHÁ | ⬜ |
| **4.0.7** | Automation | Automation nào? (Auto-suggest based on history, quick re-log, meal templates?) | KHÁM PHÁ | ⬜ |
| **4.0.8** | Integration | Integrate với hệ thống nào? (Recipes from Food app, restaurant nutrition data?) | KHÁM PHÁ | ⬜ |
| **4.0.9** | Documents | Có template/form nào? Xin mẫu UI | XÁC NHẬN | ⬜ |
| **4.0.10** | Edge case | Tình huống khác lệ nào? (Mixed bowl không rõ cấu thành, restaurant dishes không có nutritional info?) | KHÁM PHÁ | ⬜ |

**User Story & AC Harvest – Meal Logging:**

| Aspect | Câu hỏi | Status |
|:--|:--|:--:|
| **Happy Path** | Khi mọi thứ bình thường: User chụp ảnh bữa ăn → AI nhận diện → User adjust nếu cần → Save. Kết quả cuối cùng là gì? (Calories added to daily total, appeared on dashboard, part of streak?) | ⬜ |
| **Error Handling** | Khi nào hành động log meal bị reject? (Photo quá mờ, timeout, no internet?) Hệ thống báo gì? | ⬜ |
| **Validation Rules** | Constraints nào? (Calorie range realistic?, max portion size?, food DB categories?) | ⬜ |
| **Business Rule** | Vì sao feature này cần? (Increase logging frequency từ <1x/day to 3x/day để improve retention?) | ⬜ |
| **UI/UX** | User muốn nhìn thấy meal log item ở đâu? Highlight gì? (Dashboard top, history list, separate Meal tab?) | ⬜ |

---

### **Module 4.1 – DASHBOARD & PROGRESS ANALYTICS**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.1.1** | Current view | Dashboard hiện tại hiển thị gì? (Calorie ring, macro breakdown, water, exercise, streak?) Xin mẫu | XÁC NHẬN | ⬜ |
| **4.1.2** | Pain point | User phàn nàn gì về dashboard? (Quá nhiều thông tin? Quá ít? Bất tiện scroll?) | KHÁM PHÁ | ⬜ |
| **4.1.3** | Glance metrics | Metrics nào user cần nhìn ngay (top priority)? (Calorie remaining, macro balance, streak?) | KHÁM PHÁ | ⬜ |
| **4.1.4** | Customization | User có tùy chỉnh dashboard (reorder, hide widget) được không? | KHÁM PHÁ | ⬜ |
| **4.1.5** | Historical view | View history meal/progress: calendar, list, or chart? | KHÁM PHÁ | ⬜ |
| **4.1.6** | Analytics report | Report nào user xem thường xuyên? (Weekly summary, monthly trend, 90-day forecast?) | KHÁM PHÁ | ⬜ |
| **4.1.7** | Export | User muốn export report dưới format nào? (PDF, CSV, image?) | KHÁM PHÁ | ⬜ |
| **4.1.8** | Benchmarking | User muốn compare với benchmark không? (VD: avg calo bạn vs. recommended) | KHÁM PHÁ | ⬜ |

---

### **Module 4.2 – NOTIFICATIONS & REMINDERS**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.2.1** | Current | Hiện tại có push notification nào không? (Spec nói chưa làm) | KHÁM PHÁ | ⬜ |
| **4.2.2** | Reminders | Meal reminder cần không? Giờ nào? (Spec: 7am, 12pm, 6pm) | KHÁM PHÁ | ⬜ |
| **4.2.3** | Water reminder | Water reminder cần không? Interval? (VD: mỗi 2 giờ) | KHÁM PHÁ | ⬜ |
| **4.2.4** | Streak break | Notification khi break streak (miss 1 ngày)? | KHÁM PHÁ | ⬜ |
| **4.2.5** | Summary | Weekly summary notification có gì? (Stats, badges earned, motivational message?) | KHÁM PHÁ | ⬜ |
| **4.2.6** | Opt-out | User có thể turn off notification được không? | KHÁM PHÁ | ⬜ |
| **4.2.7** | Smart timing | Notification có biết user đang bận không? (Not send during meeting, late night?) | KHÁM PHÁ | ⬜ |

---

### **Module 4.3 – QUICK RE-LOG & FAVORITES**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.3.1** | Pain point | Vấn đề gì? (User dùng thực phẩm/bữa ăn lặp đi lặp lại, mỗi lần phải tìm kiếm lại?) | KHÁM PHÁ | ⬜ |
| **4.3.2** | Quick re-log | Quick re-log cần thiết không? Nhất là những bữa ăn user thường dùng? | KHÁM PHÁ | ⬜ |
| **4.3.3** | What captures? | Khi quick re-log, giữ nguyên gì? (Meal name, portion size, timestamp (log as today hay original time?)) | KHÁM PHÁ | ⬜ |
| **4.3.4** | Access point** | Ui quick re-log ở đâu? (Widget, favorite button on meal log screen, separate favorites tab?) | KHÁM PHÁ | ⬜ |
| **4.3.5** | Favorites limit | Có limit bao nhiêu favorites? | KHÁM PHÁ | ⬜ |
| **4.3.6** | Organization | Favorites sắp xếp như thế nào? (By meal type, frequency, manual order?) | KHÁM PHÁ | ⬜ |

---

### **Module 4.4 – AI COACH & SMART RECOMMENDATIONS**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.4.1** | What is AI Coach | AI Coach cần gợi ý gì? (Meal suggestions, macro rebalancing advice, habit tips?) | KHÁM PHÁ | ⬜ |
| **4.4.2** | Data input | AI Coach dựa trên data nào? (7-day average, goal, history patterns?) | KHÁM PHÁ | ⬜ |
| **4.4.3** | Frequency | Advice được deliver khi nào? (Daily morning, weekly summary, on-demand?) | KHÁM PHÁ | ⬜ |
| **4.4.4** | Content** | Advice format: text, suggestions with images, or interactive (user choose from options)? | KHÁM PHÁ | ⬜ |
| **4.4.5** | Personalization** | Advice có khác nhau per user profile (goal, diet, activity level) không? | KHÁM PHÁ | ⬜ |
| **4.4.6** | Accuracy feedback** | User có feedback AI coach được không? (Helpful, not relevant?) → improve recommendations? | KHÁM PHÁ | ⬜ |

---

### **Module 4.5 – GAMIFICATION & STREAK SYSTEM**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.5.1** | Streak impact** | Streak có impact behavior không? (User log more meal? Higher retention?) | KHÁM PHÁ | ⬜ |
| **4.5.2** | Streak criteria** | Streak counted as: day user logged ≥1 meal? Calo on target? All macros hit?) | KHÁM PHÁ | ⬜ |
| **4.5.3** | Grace period** | Nếu miss 1 ngày, streak reset ngay hay có grace period (khi log ngày hôm sau)? | KHÁM PHÁ | ⬜ |
| **4.5.4** | Badges list** | Badge mocking có đủ motivation không? (Current: First meal, 7/30/100-day streaks, 100 meals) Thêm gì? | KHÁM PHÁ | ⬜ |
| **4.5.5** | Badge rarity** | Badge nào user muốn achieve nhất? (Rarest hay most relatable?) | KHÁM PHÁ | ⬜ |
| **4.5.6** | Social sharing** | User muốn share badges/streak với bạn bè không? (Screenshot, link, leaderboard?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 5: TÍCH HỢP VÀ ĐỒNG BỘ DỮ LIỆU

### **PHẦN 5.1: Hệ thống hiện có**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **5.1.1** | Health platform integrate | Cần integrate Apple Health / Google Fit không? Để import weight, activity data? | KHÁM PHÁ | ⬜ |
| **5.1.2** | Wearable | Support smartwatch, fitness band không? (Apple Watch, Fitbit, Garmin?) | KHÁM PHÁ | ⬜ |
| **5.1.3** | Food data sources | Food database integrate từ đâu? (USDA, local Vietnam DB, crowdsourced?) | KHÁM PHÁ | ⬜ |
| **5.1.4** | AI model provider | AI vision model từ đâu? (Google Cloud Vision, Azure Computer Vision, OpenAI, custom trained?) | XÁC NHẬN | ⬜ |
| **5.1.5** | Payment | Payment gateway nào? (Stripe, Momo, 2Checkout?) | KHÁM PHÁ | ⬜ |
| **5.1.6** | Notification service** | Push notification service nào? (Firebase, OneSignal, custom?) | KHÁM PHÁ | ⬜ |

---

### **PHẦN 5.2: Yêu cầu tích hợp (Top priorities)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **5.2.1** | Apple Health | Integrate Apple Health để: import steps/exercise từ other apps, write weight history? Lợi ích? | KHÁM PHÁ | ⬜ |
| **5.2.2** | Google Fit | Same for Google Fit (Android equivalent)? | KHÁM PHÁ | ⬜ |
| **5.2.3** | Recipe apps | Integrate với recipe apps (VD: Yummly, AllRecipes) để auto-log complex meals? | KHÁM PHÁ | ⬜ |
| **5.2.4** | Social login** | User sign-up via Google, Facebook, Apple? | KHÁM PHÁ | ⬜ |

---

### **PHẦN 5.3: Data Import (First-time setup)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **5.3.1** | Historical data** | Nếu user từ MyFitnessPal chuyển sang, có import history (meals, weight, macros) không? | KHÁM PHÁ | ⬜ |
| **5.3.2** | Import format** | Import từ format nào? (CSV export, direct API, JSON?) | KHÁM PHÁ | ⬜ |
| **5.3.3** | Data mapping** | Mapping fields: "Calories from MyFitnessPal" → "Calories in CaloAI"? Có công thức chuyển đổi không? | KHÁM PHÁ | ⬜ |
| **5.3.4** | Data quality** | Dữ liệu import có sạch không? (Duplicates, missing values, inconsistent formats?) | KHÁM PHÁ | ⬜ |
| **5.3.5** | Timeline** | Import mất bao lâu? (Realtime hay batch process?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 6: YÊU CẦU KỸ THUẬT

### **PHẦN 6.1: Hạ tầng & Deployment**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **6.1.1** | Backend hosting** | Backend host ở đâu? (AWS, Google Cloud, Azure, custom server?) | KHÁM PHÁ | ⬜ |
| **6.1.2** | Database** | Database nào? (PostgreSQL, MongoDB, Firebase?) | KHÁM PHÁ | ⬜ |
| **6.1.3** | Security** | Authentication: JWT, OAuth? 2FA needed? | KHÁM PHÁ | ⬜ |
| **6.1.4** | Data privacy** | GDPR/PDPA compliance? Dữ liệu nhạy cảm mã hóa? Data retention policy? | KHÁM PHÁ | ⬜ |
| **6.1.5** | Backup & recovery** | Backup frequency? RTO/RPO? | KHÁM PHÁ | ⬜ |
| **6.1.6** | Scalability** | Expected concurrent users? Scaling strategy (auto-scale, load balancing)? | KHÁM PHÁ | ⬜ |

---

### **PHẦN 6.2: Platform & Client**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **6.2.1** | iOS version** | iOS support từ version nào? (Spec nói iOS 15+) | XÁC NHẬN | ⬜ |
| **6.2.2** | Android version** | Android support từ version nào? (Spec nói Android 10+) | XÁC NHẬN | ⬜ |
| **6.2.3** | Web app** | Có web version không? (For weaker phones, desktop access?) | KHÁM PHÁ | ⬜ |
| **6.2.4** | Offline support** | Offline: có thể log meal, view history không? Sync when online? | XÁC NHẬN | ⬜ |
| **6.2.5** | Performance** | Target load time? (Spec nói AI photo analysis < 3 giây) | XÁC NHẬN | ⬜ |

---

### **PHẦN 6.3: AI & Computer Vision**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **6.3.1** | Model training** | AI model trained on? (USDA food images, custom Vietnamese food dataset?) | KHÁM PHÁ | ⬜ |
| **6.3.2** | Accuracy target** | Target accuracy (Spec nói ≥ 85% cho phổ biến dishes)? | XÁC NHẬN | ⬜ |
| **6.3.3** | Edge cases** | Model handle nào: partially eaten meal, mixed bowls, unknown cuisines? | KHÁM PHÁ | ⬜ |
| **6.3.4** | On-device vs cloud** | AI processing: on-device (faster but limited) or cloud (slower but powerful)? | KHÁM PHÁ | ⬜ |
| **6.3.5** | Fallback** | Nếu AI fail, user có thể manual search/entry không? | XÁC NHẬN | ⬜ |

---

## PHẦN 7: BÁO CÁO VÀ THIẾT KẾ DỮ LIỆU

### **PHẦN 7.1: Báo cáo hiện tại**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.1.1** | Current reports** | Báo cáo nào user hiện view? (Daily summary, weekly analytics, progress chart?) Xin mẫu | XÁC NHẬN | ⬜ |
| **7.1.2** | Report frequency** | Report nào generate automatic? (Daily, weekly, monthly?) | KHÁM PHÁ | ⬜ |
| **7.1.3** | Report consumers** | Ai xem report? (End user, trainer, health coach?) | KHÁM PHÁ | ⬜ |
| **7.1.4** | Export formats** | Report export dạng nào? (PDF, CSV, image, shareable link?) | KHÁM PHÁ | ⬜ |

---

### **PHẦN 7.2: Chi tiết từng báo cáo**

#### **Report A: Daily Dashboard**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.2A.1** | Purpose | Purpose: Quick glance at day progress? | XÁC NHẬN | ⬜ |
| **7.2A.2** | Metrics | Show metrics: Calories (actual vs target), Macros (g and %), Water (ml and %), Exercise (kcal burned)? Xin mẫu | XÁC NHẬN | ⬜ |
| **7.2A.3** | Format | Format: Rings/progress bars, numbers, or both? | KHÁM PHÁ | ⬜ |
| **7.2A.4** | Frequency | Frequency: Real-time as user logs meals? | XÁC NHẬN | ⬜ |

#### **Report B: Weekly Summary**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.2B.1** | Purpose | Purpose: Review week progress, trends? | KHÁM PHÁ | ⬜ |
| **7.2B.2** | Metrics | Metrics: Avg daily calo, macro balance, compliance %, streak count, badges earned? Xin mẫu | XÁC NHẬN | ⬜ |
| **7.2B.3** | Format | Format: Charts (line, bar), tables, or narrative summary? | KHÁM PHÁ | ⬜ |
| **7.2B.4** | Timing | Timing: Generate every Sunday? Or on-demand? | KHÁM PHÁ | ⬜ |

#### **Report C: Monthly Progress Report**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.2C.1** | Purpose | Purpose: Long-term trend analysis, goal progress? | KHÁM PHÁ | ⬜ |
| **7.2C.2** | Metrics | Metrics: Avg daily calo/macros, weight change, BMI change, compliance %, top meals, habits discovered? Xin mẫu | XÁC NHẬN | ⬜ |
| **7.2C.3** | Format | Format: Multi-page PDF, interactive dashboard? | KHÁM PHÁ | ⬜ |
| **7.2C.4** | Insights** | Insights included? (VD: "You typically overeat carbs on weekends") | KHÁM PHÁ | ⬜ |

---

### **PHẦN 7.3: Database Entities & Schema**

*Dựa trên các báo cáo, features, xác định entities cần thiết:*

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.3.1** | Entities | Core entities: User, Meal, MealItem, Water, Exercise, Weight, Badge? Còn gì nữa? | KHÁM PHÁ | ⬜ |
| **7.3.2** | User fields | User table fields: username, password hash, email, age, gender, height, current_weight, goal, activity_level, diet_preference, created_at, updated_at, last_login, subscription_tier? Xin schema | XÁC NHẬN | ⬜ |
| **7.3.3** | Meal fields | Meal table fields: user_id, meal_type (breakfast/lunch/dinner/snack), total_calories, protein_g, carbs_g, fat_g, logged_at, edited_at? Xin schema | XÁC NHẬN | ⬜ |
| **7.3.4** | Relationships | Relationships: User (1) → Meals (many), Meal (1) → MealItems (many), User (1) → Weights (many), User (1) → Badges (many)? | KHÁM PHÁ | ⬜ |
| **7.3.5** | Indexes | Indexes on: user_id, logged_at (for filtering by date), meal_type, created_at (pagination)? | KHÁM PHÁ | ⬜ |
| **7.3.6** | Constraints | Constraints: meal.calories > 0, user.weight > 0, meal.logged_at ≤ now()? | KHÁM PHÁ | ⬜ |

---

### **PHẦN 7.4: Dashboard & Reporting Preferences**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.4.1** | Real-time updates** | Dashboard update real-time as user logs meals? Or refresh on app open? | KHÁM PHÁ | ⬜ |
| **7.4.2** | Custom date range** | User có thể select custom date range cho analytics không? | KHÁM PHÁ | ⬜ |
| **7.4.3** | Comparison** | User muốn compare 2 weeks/months? | KHÁM PHÁ | ⬜ |
| **7.4.4** | Predictions** | Có predict trend (trajectory) không? (VD: "If you maintain this, you'll reach goal in 12 weeks") | KHÁM PHÁ | ⬜ |
| **7.4.5** | Alerts** | Alert rules nào? (Vd: Exceed calo 20%, skipped lunch, break streak) | KHÁM PHÁ | ⬜ |

---

## PHẦN 8: NGÂN SÁCH, TIMELINE & QUY TRÌNH LÀM VIỆC

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **8.1** | Budget | Tổng budget cho MVP? Cho phase 1 (6 months)? | KHÁM PHÁ | ⬜ |
| **8.2** | Timeline** | Timeline launch MVP: bao lâu? (3 months, 6 months, 1 year?) | KHÁM PHÁ | ⬜ |
| **8.3** | Team structure** | Team size & skills: Backend devs, frontend devs, AI/ML engineers, designers, BA, QA? | KHÁM PHÁ | ⬜ |
| **8.4** | Development process** | Agile (2-week sprint), Waterfall, other? | KHÁM PHÁ | ⬜ |
| **8.5** | Testing strategy** | QA approach: Manual, automation, beta testing? | KHÁM PHÁ | ⬜ |
| **8.6** | Go-to-market** | GTM strategy: Beta launch → Public → Marketing? | KHÁM PHÁ | ⬜ |
| **8.7** | Success criteria** | MVP success = bao nhiêu DAU? Retention D7? Revenue? | KHÁM PHÁ | ⬜ |

---

## 📌 NEXT STEPS

1. ✅ **Phase 1 (This Q&A)**: Sinh câu hỏi khơi gợi từ SKILL.md + context AIcalo.md
2. ⏳ **Phase 2 (Domain Research)**: Nghiên cứu lĩnh vực Health Tech, Nutrition Science, AI Vision
3. ⏳ **Phase 3 (Market Research)**: Phân tích competitor, market size, user behaviors

---

**File này sẽ được cập nhật incremental sau mỗi elicitation session.**

---

**Status Legend:** ⬜ = Chưa hỏi | ⚙️ = Đang chờ trả lời | ✅ = Đã confirm | ❌ = Không áp dụng
