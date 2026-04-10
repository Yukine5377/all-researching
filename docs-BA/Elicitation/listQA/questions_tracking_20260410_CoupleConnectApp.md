# Theo dõi câu hỏi: Couple & Friends Connect App (Kiểu Widgetable)
**Ngày tạo:** 2026-04-10 | **Nguồn:** BA Research + AI Domain Knowledge

## 🔎 Phân tích sơ bộ

> **Bối cảnh dự án:** App tương tác cho cặp đôi ở xa và bạn bè, lấy cảm hứng từ Widgetable. Đây là dự án **Greenfield** — xây mới hoàn toàn.
>
> **Vấn đề cốt lõi:** Nhu cầu duy trì kết nối cảm xúc giữa các cặp đôi/bạn bè ở xa đang tăng mạnh (61% thanh niên báo cáo cô đơn nghiêm trọng — Tổng Giám đốc Y tế Mỹ gọi là "đại dịch cô đơn"). Các app hiện tại hoặc chỉ phục vụ cặp đôi (Between, Paired) hoặc quá đơn giản (Locket chỉ chia sẻ ảnh). Chưa có app nào kết hợp đủ sâu cả widget + mood sharing + games + shared activities cho CẢ cặp đôi VÀ bạn bè.
>
> **Ambiguity Zones:**
> 1. **Đối tượng chính**: Cặp đôi hay bạn bè là primary? Hay cả hai? (Widgetable phục vụ cả hai, Between chỉ cặp đôi)
> 2. **Mức độ tương tác**: Widget nhẹ nhàng (kiểu Locket — 90M downloads) hay app sâu (kiểu Paired — relationship coaching)? Hay hybrid?
> 3. **Mô hình kiếm tiền**: Freemium + ads (Widgetable) hay subscription-first (Paired $6.99/tháng) hay hoàn toàn miễn phí (Honeydue)?
>
> **Rủi ro bỏ sót:**
> - Bảo mật dữ liệu thân mật (ảnh, tin nhắn, vị trí) — vụ Tea app 2025 bị kiện tập thể do rò rỉ 1.1 triệu tin nhắn riêng tư
> - COPPA compliance nếu nhắm Gen Z/Gen Alpha (cập nhật lớn có hiệu lực 6/2025)
> - Widget technology khác biệt giữa iOS (WidgetKit) và Android — cần xác định strategy rõ

---

## PHẦN 1.1: VẤN ĐỀ & MỤC ĐÍCH

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.1.1 | Vấn đề/Cơ hội | Điều gì khiến anh/chị muốn xây dựng app này? Vấn đề cụ thể nào anh/chị muốn giải quyết cho người dùng? | KHÁM PHÁ | **Cả 3:** Giữ liên lạc + Cảm thấy gần gũi hơn + Giải trí cùng nhau ✅ |
| 1.1.2 | Đối tượng chính | App này nhắm vào **cặp đôi ở xa**, **bạn bè ở xa**, hay **cả hai**? Nếu cả hai, nhóm nào là primary target? | KHÁM PHÁ | **Cặp đôi (60%)** là primary, **bạn bè (40%)** là secondary ✅ |
| 1.1.3 | Mở rộng đối tượng | Ngoài cặp đôi/bạn bè, có muốn phục vụ thêm nhóm nào không? | KHÁM PHÁ | Có: **Gia đình xa** + **Nhóm bạn thân 3-5 người** ✅ |
| 1.1.4 | Cơ cấu tổ chức | Ai là người ra quyết định chính? Có team product/design riêng không? | KHÁM PHÁ | **Sole founder** — chỉ một người ra quyết định ✅ |
| 1.1.5 | Tầm nhìn sản phẩm | App trong 2-3 năm nữa sẽ như thế nào? Công cụ cá nhân hay cộng đồng? | KHÁM PHÁ | **Marketplace bán pet và cây** — nền tảng gamification + economy, không phải mạng xã hội công khai ✅ |
| 1.1.6 | Thị trường mục tiêu | VN trước hay quốc tế ngay? Ngôn ngữ hỗ trợ? | KHÁM PHÁ | **Quốc tế từ đầu**, multi-language có tiếng Việt ✅ |
| 1.1.7 | Nguồn cảm hứng | Ngoài Widgetable, tham khảo app nào khác? Tính năng thích nhất? Thiếu gì? | KHÁM PHÁ | Chưa tham khảo thêm. Thích: **nuôi gà/trồng cây chung** + **theo dõi giấc ngủ nhóm** ✅ |
| 1.1.8 | KPI / Thước đo | Đo lường thành công bằng chỉ số nào? | KHÁM PHÁ | **Tất cả:** Downloads, DAU/MAU, retention, revenue, thời gian tương tác/ngày ✅ |
| 1.1.9 | Thách thức | Thách thức lớn nhất khi xây app này là gì? | KHÁM PHÁ | **Giữ chân người dùng** + **Kiếm người dùng** (acquisition + retention) ✅ |

> *Loại: `XÁC NHẬN` = Confirming Question | `KHÁM PHÁ` = 5W1H Open Question*

---

## PHẦN 1.2: HIỆN TRẠNG BÊN NGOÀI (Đối thủ & Thị trường)

> **Lưu ý:** Đây là dự án Greenfield — không có hệ thống cũ. Phần này tập trung vào landscape đối thủ và thị trường.

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.2.1 | Đối thủ trực tiếp | Đã dùng hoặc biết Widgetable, Locket, Between, Paired chưa? Đánh giá? | XÁC NHẬN | **Đã dùng hết**, đánh giá cái nào cũng tốt ✅ |
| 1.2.2 | Điểm mạnh đối thủ | Muốn app mình mạnh về mặt nào? Đơn giản? Vui? Đầy đủ? | XÁC NHẬN | **Đầy đủ tính năng** ✅ |
| 1.2.3 | Điểm yếu đối thủ | Muốn khắc phục điểm yếu nào nhất? | XÁC NHẬN | **Ads, paywall, hiệu năng, UX, giá** — khắc phục tất cả ✅ |
| 1.2.4 | Khoảng trống thị trường | Cơ hội nào lớn nhất? | XÁC NHẬN | **Cơ hội 1** (bạn bè ở xa) + **Cơ hội 2** (widget+mood+games+activities) ✅ |
| 1.2.5 | Unique Value | 1 điều duy nhất app phải làm tốt hơn đối thủ? | KHÁM PHÁ | **UI đơn giản nhưng vẫn đầy đủ tính năng** ✅ |
| 1.2.6 | Mô hình kiếm tiền | Mô hình nào? Chấp nhận quảng cáo không? | KHÁM PHÁ | **Trả phí (subscription)** + **Marketplace** + **Quảng cáo một phần nhỏ** ✅ |
| 1.2.7 | Quy mô thị trường | Nhắm phân khúc nào? | KHÁM PHÁ | **Như đã xác định:** Couple 60% + Friends 40% + Gia đình + Nhóm bạn ✅ |

---

## PHẦN 1.3: QUY TRÌNH & TÍNH NĂNG

### A. Xác nhận Stakeholder (Người dùng)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3A.1 | User personas | Dự kiến 4 nhóm: Cặp đôi, Bạn bè, Nhóm bạn thân, Gia đình. Đủ chưa? | XÁC NHẬN | **Đủ** ✅ |
| 1.3A.2 | Độ tuổi mục tiêu | Nhóm tuổi chính? | KHÁM PHÁ | **Gen Z + Gen Alpha** ✅ |
| 1.3A.3 | Ngữ cảnh sử dụng | Tương tác nhanh hay sâu? | KHÁM PHÁ | **Nhanh** (micro-interactions) ✅ |

### B. Vòng đời thực thể (Entity Lifecycle)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3B.1 | Vòng đời Kết nối | Tạo TK → Mời → Chấp nhận → Thiết lập → Tương tác → Tạm dừng → Hủy. Đủ chưa? | XÁC NHẬN | **Đúng, đủ** ✅ |
| 1.3B.2 | Vòng đời Nội dung | Tạo → Hiển thị → React → Lưu → Xóa. Có memories? | KHÁM PHÁ | **Đúng**, có tính năng **memories** ✅ |
| 1.3B.3 | Vòng đời Thú cưng ảo | Ai cho ăn? Có chết không? | KHÁM PHÁ | **Cả 2 cho ăn**. Pet/cây **có chết** nếu user thiếu ngủ, lười ăn, lười hoạt động (tích hợp sleep + activity tracking) ✅ |

### C. Tính năng chi tiết (Core Features)

#### C1. Widget & Home Screen

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.1 | Widget-first? | Widget là trải nghiệm chính hay bổ sung? | KHÁM PHÁ | **Bổ sung** (không phải widget-first) ✅ |
| 1.3C.2 | Loại widget | Những loại widget nào? | KHÁM PHÁ | **Tất cả:** Ảnh, Mood, Đếm ngược, Khoảng cách, Thú cưng, Cây, Nhật ký/Quote ✅ |
| 1.3C.3 | Widget platform | Ưu tiên nền tảng nào? | KHÁM PHÁ | **Cả hai** (iOS + Android) ✅ |
| 1.3C.4 | Lock screen | Widget trên màn hình khóa? | KHÁM PHÁ | **Có** ✅ |

#### C2. Chia sẻ cảm xúc (Mood Sharing)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.5 | Cách nhập mood | Chia sẻ tâm trạng bằng cách nào? | KHÁM PHÁ | **(a)** Emoji + **(b)** Text tự do + **(c)** Mood+text + **(d)** Selfie+mood ✅ |
| 1.3C.6 | Tần suất mood | Cập nhật mood khi nào? | KHÁM PHÁ | **Push notification nhắc** hoặc **tự mở** ✅ |
| 1.3C.7 | Phản hồi mood | Khi thấy người yêu/bạn buồn, làm gì? | KHÁM PHÁ | **(a)** React emoji + **(b)** Voice note + **(c)** Hug ảo + **(d)** Gợi ý hành động ✅ |

#### C3. Ảnh & Kỷ niệm

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.8 | Chia sẻ ảnh | Chia sẻ ảnh kiểu Locket? | KHÁM PHÁ | **Không** (không làm kiểu Locket) ✅ |
| 1.3C.9 | Memories | Có tính năng Kỷ niệm? | KHÁM PHÁ | **Có** ✅ |
| 1.3C.10 | Lưu trữ | Lưu ở đâu? Giới hạn? | KHÁM PHÁ | **Lưu server app**, có **giới hạn dung lượng** (free vs premium) ✅ |

#### C4. Game & Hoạt động cùng nhau

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.11 | Game | Có mini-game? Loại gì? Bao nhiêu cho MVP? | KHÁM PHÁ | Có: **Quiz về nhau** + **Drawing game** ✅ |
| 1.3C.12 | Challenge | Có Thách thức hàng ngày? | KHÁM PHÁ | **Có**, cả **app gợi ý** và **người dùng tự tạo** ✅ |
| 1.3C.13 | Shared activities | Tính năng làm cùng nhau? | KHÁM PHÁ | **(b)** Nghe nhạc Spotify sync + **(c)** Vẽ/Tô màu + **(d)** To-do list chung ✅ |

#### C5. Gamification & Thú cưng ảo

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.14 | Thú cưng ảo | Có cây trồng chung cơ chế tương tự? | KHÁM PHÁ | **Có** cây trồng chung, cơ chế tương tự pet ✅ |
| 1.3C.15 | Streak & Reward | Hệ thống streak + reward? | KHÁM PHÁ | **(a)** Unlock items trang trí + **(d)** Cột mốc (100 ngày, 1 năm...) ✅ |
| 1.3C.16 | Personalization | Mức customize? | KHÁM PHÁ | **Tất cả:** Pet/avatar, widget theme, giao diện, hình nền, emoji/sticker ✅ |

#### C6. Giao tiếp & Chat

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.17 | Chat | Có chat riêng? Loại gì? | KHÁM PHÁ | **Có**, có thể gửi **voice memo** ✅ |
| 1.3C.18 | Notification | Loại thông báo và tần suất? | KHÁM PHÁ | **Push notification**, tối đa **3 lần/ngày** ✅ |

#### C7. Lịch & Sự kiện

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.3C.19 | Lịch chung | Có lịch chia sẻ? Tích hợp Calendar? | KHÁM PHÁ | **Có** ✅ |
| 1.3C.20 | Đếm ngược | Có đếm ngược trên widget? | KHÁM PHÁ | **Có** ✅ |

---

## PHẦN 1.4: TÁC ĐỘNG & BẢO MẬT

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 1.4.1 | Bảo mật dữ liệu | Yêu cầu bảo mật đặc biệt? (E2E, SOC 2, GDPR?) | KHÁM PHÁ | **Tuân thủ hết** (E2E encryption, SOC 2, GDPR, COPPA) ✅ |
| 1.4.2 | Độ tuổi & COPPA | Người dùng tối thiểu bao nhiêu tuổi? Xác minh tuổi? | KHÁM PHÁ | **Không cần xác minh tuổi** ✅ |
| 1.4.3 | Quyền riêng tư | Khi hủy kết nối, dữ liệu chung xử lý thế nào? | KHÁM PHÁ | **(d) Cho chọn** — user tự quyết định giữ hay xóa ✅ |
| 1.4.4 | Content moderation | Có cần kiểm duyệt nội dung? | KHÁM PHÁ | **Có** ✅ |

---

## PHẦN 2: ĐỐI THỦ & THỊ TRƯỜNG (Research-based)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 2.1 | Tính năng đối thủ | Widgetable có nuôi thú cưng ảo cùng nhau rất thành công (10M+). Muốn tương tự? Khác biệt gì? | XÁC NHẬN | **Có**, nhưng pet/cây **chết nếu người dùng có lối sống không lành mạnh** (thiếu ngủ, lười hoạt động) ✅ |
| 2.2 | Locket model | Đơn giản-1-việc hay đa năng? | XÁC NHẬN | **Đa năng nhiều tính năng** ✅ |
| 2.3 | Paired coaching | Muốn yếu tố coaching? AI hay chuyên gia thật? | XÁC NHẬN | **Chưa cần** — không có trong scope hiện tại ✅ |
| 2.4 | Bạn bè gap | Friendship apps là cơ hội chính? | XÁC NHẬN | **Đúng, là cơ hội chính** ✅ |
| 2.5 | VR/AR trend | Muốn virtual date / phòng chung ảo trong tương lai? | KHÁM PHÁ | **Có thể** — xem xét sau ✅ |

---

## PHẦN 3: NHU CẦU TƯƠNG LAI & MVP

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 3.1 | MVP scope | 3 tính năng cho MVP? | KHÁM PHÁ | **Lịch + Mood + Thú cưng ảo** ✅ |
| 3.2 | Phasing | Chia bao nhiêu phase? | KHÁM PHÁ | **3 phases** ✅ |
| 3.3 | Must-have vs Nice-to-have | Tính năng MUST-HAVE? | KHÁM PHÁ | **MUST-HAVE: Lịch + Mood + Thú cưng** (như 3.1) ✅ |
| 3.4 | Community | Mở rộng thành cộng đồng? | KHÁM PHÁ | **Có, marketplace** bán pet/cây/items ✅ |

---

## PHẦN 6: YÊU CẦU KỸ THUẬT

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| 6.1 | Nền tảng | iOS, Android, hay cả hai? Framework? | KHÁM PHÁ | **Flutter, cả hai** (iOS + Android) ✅ |
| 6.2 | Real-time | Tính năng nào cần real-time? | KHÁM PHÁ | **Notification khi tương tác với thú cưng/cây** ✅ |
| 6.3 | Backend/Cloud | Ưu tiên cloud nào? | KHÁM PHÁ | **AWS** ✅ |
| 6.4 | Số lượng user | Dự kiến bao nhiêu người dùng ban đầu? | KHÁM PHÁ | **100 users** (giai đoạn đầu) ✅ |
| 6.5 | Đăng nhập | Phương thức đăng nhập? | KHÁM PHÁ | **(a) Google + Apple ID** ✅ |
| 6.6 | Offline | Cần hoạt động offline? | KHÁM PHÁ | **Không** ✅ |

---

## PHẦN 8: NGÂN SÁCH & TIMELINE

> **Không cần** — Stakeholder không yêu cầu trả lời phần này.

---

*Ghi chú: ⬜ = Chờ xác nhận. ✅ = Stakeholder đã xác nhận.*

## 💡 Lưu ý khi phỏng vấn
> 1. **Đối tượng này thường là founder/product owner có ý tưởng nhưng chưa rõ chi tiết** — cần giúp họ cụ thể hóa bằng các lựa chọn rõ ràng (a/b/c) thay vì hỏi mở.
> 2. **Show đối thủ cụ thể**: Khi hỏi về tính năng, luôn dẫn chứng đối thủ đã làm gì để stakeholder có frame of reference.
> 3. **Nhấn mạnh privacy**: Với app thân mật kiểu này, **bảo mật phải là selling point**, không chỉ là compliance.
