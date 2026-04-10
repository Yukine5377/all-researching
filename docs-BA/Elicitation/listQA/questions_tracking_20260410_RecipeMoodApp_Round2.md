# Theo dõi câu hỏi: Recipe & Mood Food App — Vòng 2
**Ngày tạo:** 2026-04-10 | **Nguồn:** Market Research + Domain Research + AI Analysis

## 🔎 Phân tích sơ bộ (cập nhật sau research)

> **Bối cảnh:** Đã hoàn thành Market Research và Domain Research. Các câu hỏi dưới đây dựa trên kết quả nghiên cứu để xác nhận với stakeholder/product owner.
>
> **Kết quả research chính:**
> - Thị trường recipe apps: $5.8-6.7 tỷ (CAGR 10-12%)
> - AI trong F&B: $8.45 tỷ → $84.75 tỷ (2030), CAGR 39.1%
> - Đối thủ chính: Flavorish ($4.99/tháng), ReciMe ($9.99/tháng), Paprika ($4.99 mua 1 lần)
> - Khoảng trống: Chưa có app nào kết hợp recipe + mood + restaurant review
> - Công nghệ: Gemini 2.5 Pro (9.2/10 food extraction), Whisper (98.5% tiếng Việt)
> - Chi phí AI: ~$0.50-3.00/user/tháng
>
> **Mục đích vòng 2:** Xác nhận các quyết định product cụ thể dựa trên dữ liệu research.

---

## PHẦN 1.1: VẤN ĐỀ & MỤC ĐÍCH (Xác nhận sau research)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-1.1 | Đối tượng chính | Theo research, 4 phân khúc khách hàng tiềm năng: **(1) Social Foodies** (Gen Z 18-27, TikTok-heavy), **(2) Busy Planners** (Millennials 28-40, nấu ăn tại nhà), **(3) Health-Conscious Explorers** (25-45, quan tâm dinh dưỡng), **(4) Foodie Explorers VN** (22-35, thành thị, thích khám phá quán ăn). **Anh/chị muốn tập trung vào phân khúc nào làm primary target?** | XÁC NHẬN | **Gen Z (Social Foodies)** là primary target ✅ |
| R2-1.2 | Thị trường | App nhắm vào **thị trường Việt Nam trước** (người Việt chi $2.1 tỷ cho food app, TikTok rất phổ biến), rồi mở rộng quốc tế sau. Đúng không? Hay anh/chị muốn nhắm quốc tế ngay từ đầu? | XÁC NHẬN | **Global luon** từ đầu, không chỉ VN ✅ |
| R2-1.3 | Mô hình kiếm tiền | Research cho thấy mô hình **Freemium** phổ biến nhất (60% dùng free, 35% sẵn sàng trả phí). Tôi đề xuất: **Free** (10 lượt lưu/ngày, 100 công thức) + **Premium $3.99/tháng** (không giới hạn, mood, grocery list, offline). Anh/chị đồng ý không? Muốn điều chỉnh gì? | XÁC NHẬN | Điều chỉnh: **Free 3 lượt/ngày**, **Premium $4.99/tháng** ✅ |
| R2-1.4 | KPI | Mục tiêu 3 tháng đầu: **10,000 downloads**, **DAU/MAU 20%**, **3 công thức lưu/user/tuần**, **AI accuracy 85%**, **Free→Premium 3%**. Các con số này có hợp lý với kỳ vọng của anh/chị không? | XÁC NHẬN | Yêu cầu **so sánh với chuẩn ngành** — xem bảng benchmark bên dưới ✅ |

---

## PHẦN 1.2: PHẠM VI MVP (Quyết định tính năng)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-2.1 | MVP scope | Tôi đề xuất MVP chia 3 phase: **Phase 1 (3 tháng):** Share Extension + AI trích xuất + Chuẩn hóa nguyên liệu VN + Phân loại + Thư viện. **Phase 2 (3-6 tháng):** Mood + Địa điểm + Grocery list. **Phase 3 (6-12 tháng):** Cộng đồng + ML recommendation + Meal planning. Anh/chị đồng ý với cách chia này không? Có tính năng nào muốn đưa lên sớm hơn? | XÁC NHẬN | **Đồng ý** 3 phases ✅ |
| R2-2.2 | Nền tảng ưu tiên | Research cho thấy **56% Gen Z dùng TikTok** cho ẩm thực, **66% Millennials dùng YouTube**. MVP nên hỗ trợ **TikTok + YouTube** trước, thêm Facebook/Instagram ở Phase 2. Đúng không? | XÁC NHẬN | Điều chỉnh: **TikTok, Reels, Facebook, Instagram** trước, **YouTube** sau ✅ |
| R2-2.3 | iOS vs Android | App chạy trên **cả iOS và Android** ngay từ đầu (dùng Flutter/React Native), hay **chỉ 1 nền tảng** trước? Nếu chỉ 1, chọn iOS hay Android? (Lưu ý: Share Extension hoạt động khác nhau trên 2 nền tảng) | KHÁM PHÁ | **Cả 2** (iOS + Android) ngay từ đầu ✅ |

---

## PHẦN 1.3: AI & CÔNG NGHỆ (Quyết định kỹ thuật)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-3.1 | Mức độ AI | Research cho thấy 3 mức xử lý AI với chi phí rất khác nhau: **(a) Chỉ caption/mô tả** (~$0.01/lượt, nhanh, nhưng nhiều video không có caption đầy đủ), **(b) Caption + Audio** (~$0.02-0.04/lượt, Whisper 98.5% tiếng Việt, bao phủ hơn), **(c) Caption + Audio + Hình ảnh** (~$0.10-0.50/lượt, chính xác nhất nhưng đắt). **Anh/chị chọn mức nào cho MVP?** | KHÁM PHÁ | **(b) Caption + Audio** ✅ |
| R2-3.2 | Chuẩn hóa đơn vị | Công thức Việt Nam hay dùng đơn vị mơ hồ: "một ít", "vừa ăn", "1 lóng bàn tay", "vài lát". **Anh/chị muốn AI xử lý thế nào?** (a) Giữ nguyên đơn vị gốc, (b) Quy đổi sang gram/ml với ước lượng, (c) Giữ gốc + hiển thị gợi ý gram/ml bên cạnh? | KHÁM PHÁ | **(c)** Giữ gốc + gợi ý gram/ml bên cạnh ✅ |
| R2-3.3 | Sửa lỗi AI | Khi AI trích xuất sai, **luồng UX** nên là: (a) Hiển preview để user xác nhận trước khi lưu (chậm hơn nhưng chính xác), hay (b) Lưu ngay, user chỉnh sửa sau (nhanh hơn nhưng có thể sai)? | KHÁM PHÁ | **(a)** Hiển preview xác nhận trước ✅ |
| R2-3.4 | AI provider | Tôi đề xuất dùng **Whisper** (self-hosted, speech-to-text tiếng Việt 98.5%) + **GPT-4o-mini** (trích xuất nguyên liệu, rẻ) cho MVP. Chuyển sang **Gemini 2.5 Flash** (multimodal, 9.2/10 food) ở Phase 2. Anh/chị có ưu tiên AI provider nào khác không? Yếu tố nào quan trọng nhất: **chính xác, nhanh, hay rẻ**? | XÁC NHẬN | Ưu tiên: **chính xác > nhanh**. Đồng ý Whisper + GPT-4o-mini ✅ |

---

## PHẦN 1.4: MOOD & PREFERENCE (Lõi sản phẩm độc đáo)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-4.1 | Cách nhập mood | Research cho thấy mood ảnh hưởng trực tiếp đến lựa chọn thực phẩm (tích cực → healthy, tiêu cực → comfort food). **Anh/chị muốn người dùng nhập mood bằng cách nào?** (a) Chọn emoji (vui/buồn/mệt/phấn khích), (b) Nhập text tự do ("hôm nay mệt, muốn ăn gì đó ấm"), (c) Cả hai, (d) AI tự động detect từ ngữ cảnh (thời gian, thời tiết)? | KHÁM PHÁ | **(a) Emoji** ✅ |
| R2-4.2 | Phạm vi gợi ý | Khi gợi ý theo mood, app gợi ý từ đâu? **(a)** Chỉ từ thư viện đã lưu của user (an toàn, nhưng hạn chế khi mới dùng), **(b)** Từ database chung của app (phong phú hơn, nhưng cần xây content), **(c)** Kết hợp cả hai? | KHÁM PHÁ | **(a)** Chỉ từ thư viện user. Database cộng đồng để Phase sau ✅ |
| R2-4.3 | Preference | Thông tin preference cần thu thập khi onboarding: **(1)** Dị ứng thực phẩm, **(2)** Chế độ ăn (chay/keto/low-carb), **(3)** Ẩm thực yêu thích (Hàn/Nhật/Việt/Âu), **(4)** Mức độ cay, **(5)** Trình độ nấu ăn. **Còn thông tin nào khác anh/chị muốn hỏi người dùng không?** | XÁC NHẬN | Thêm **(6) Giá tiền trung bình bữa ăn**. Còn lại đồng ý ✅ |
| R2-4.4 | Tần suất mood | Người dùng cập nhật mood **khi nào**? (a) Mỗi lần mở app, (b) Mỗi ngày 1 lần, (c) Khi được hỏi (push notification), (d) Chỉ khi tự muốn? | KHÁM PHÁ | **(a) Mỗi lần mở app** + **(d) AI auto-detect** từ ngữ cảnh ✅ |

---

## PHẦN 1.5: ĐỊA ĐIỂM & REVIEW (Tính năng độc đáo thứ 2)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-5.1 | Thông tin địa điểm | Khi AI nhận diện video là review quán ăn, cần trích xuất những gì? Tôi đề xuất: **(1)** Tên quán, **(2)** Địa chỉ (đối chiếu Google Maps), **(3)** Món được review, **(4)** Khoảng giá, **(5)** Đánh giá của reviewer. **Còn thông tin nào khác không?** (giờ mở cửa? chỗ đỗ xe? phù hợp nhóm bao nhiêu người?) | XÁC NHẬN | **Thế thôi**, 5 thông tin đề xuất là đủ ✅ |
| R2-5.2 | Google Maps | Có cần tích hợp Google Maps để **(a)** xác minh địa chỉ, **(b)** hiển thị bản đồ, **(c)** dẫn đường, **(d)** tìm quán gần? Hay chỉ lưu địa chỉ dạng text là đủ cho MVP? | KHÁM PHÁ | **Chỉ lưu text** cho MVP ✅ |
| R2-5.3 | Recipe vs Review | Khi video vừa có công thức vừa là review quán (ví dụ: "hôm nay mình làm thử món này ở quán X"), AI xử lý thế nào? **(a)** Lưu vào cả 2 (recipe + place), **(b)** Hỏi user chọn, **(c)** AI tự phân loại chính, user sửa sau? | KHÁM PHÁ | **(c)** AI tự phân loại, user sửa sau ✅ |

---

## PHẦN 1.6: UX & GIAO DIỆN

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-6.1 | Luồng chia sẻ | Khi user ấn "Chia sẻ" từ TikTok → chọn app, UX nên là: **(a)** Lưu ngầm + notification "Lưu thành công!" (nhanh nhất, kiểu Pocket/Instapaper), **(b)** Mở app, hiển preview để xác nhận rồi lưu (chậc chắn hơn), **(c)** Lưu ngầm + cho chỉnh sửa bất cứ lúc nào sau? **Anh/chị thích trải nghiệm nào?** | KHÁM PHÁ | **(c)** Lưu ngầm + cho sửa sau (chưa rõ lắm nhưng chọn c) ✅ |
| R2-6.2 | Giao diện thư viện | Thư viện công thức hiển thị kiểu: **(a)** Pinterest-style grid (ảnh lớn, trực quan), **(b)** Instagram-style feed (cuộn dọc), **(c)** Card-based (gọn, thông tin đầy đủ), **(d)** List view (đơn giản, nhiều item)? | KHÁM PHÁ | **(d) List view** ✅ |
| R2-6.3 | Xem video gốc | Có muốn xem được video gốc ngay trong app không? Hay chỉ cần link ra ngoài TikTok/YouTube? (Xem trong app thì UX tốt hơn nhưng có rủi ro về bản quyền và API) | KHÁM PHÁ | **Link ra ngoài** TikTok/YouTube ✅ |
| R2-6.4 | Đăng nhập | Đăng nhập bằng cách nào? **(a)** Google + Apple ID (tiêu chuẩn), **(b)** Thêm SĐT/Zalo (phổ biến tại VN), **(c)** Cho dùng không cần đăng ký (guest mode), **(d)** Kết hợp? | KHÁM PHÁ | **(a) Google + Apple ID** ✅ |

---

## PHẦN 2: PHÁP LÝ & RỦI RO (Cần quyết định)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-7.1 | Bản quyền | Research cho thấy công thức (danh sách nguyên liệu + chi dẫn cơ bản) thường KHÔNG được bảo hộ copyright. App sẽ **chỉ lưu structured data** (nguyên liệu, bước làm) và **luôn link về video gốc** (để credit creator). Anh/chị đồng ý với cách tiếp cận này không? | XÁC NHẬN | **Đồng ý** ✅ |
| R2-7.2 | API fallback | TikTok cấm scraping. Phương án: **(a)** Nhận URL qua Share Extension → lấy public metadata/caption (không scrape nội dung private), **(b)** Nếu API bị chặn, fallback cho user **copy-paste caption** + **upload screenshot**. Anh/chị chấp nhận fallback này không? | XÁC NHẬN | **OK, chấp nhận** ✅ |
| R2-7.3 | Chi phí AI | Ước tính chi phí AI: Free user ~**$0.50-1.50/tháng**, Premium user ~**$1.00-3.00/tháng**. Với Premium $3.99/tháng → margin ~**25-75%**. Anh/chị có ngân sách cho giai đoạn đốt cháy (burn) ban đầu không? Dự kiến bao nhiêu tháng? | KHÁM PHÁ | Chưa rõ, dùng **tiêu chuẩn ngành** (~6-12 tháng burn) ✅ |

---

## PHẦN 3: TEAM & TIMELINE

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-8.1 | Team | Anh/chị có team kỹ thuật sẵn hay cần outsource? Team có kinh nghiệm với Flutter/React Native, AI/ML APIs không? | KHÁM PHÁ | **Team sẵn** ✅ |
| R2-8.2 | Timeline | Khi nào cần ra mắt MVP? Có deadline cụ thể không? (sự kiện, nhà đầu tư, mùa lễ...) | KHÁM PHÁ | **Chưa có** deadline cụ thể |
| R2-8.3 | Ngân sách | Ngân sách dự kiến cho toàn bộ Phase 1 (phát triển + 3 tháng vận hành)? Bao gồm cả chi phí AI API không? | KHÁM PHÁ | **Chưa có** |
| R2-8.4 | Quy trình | Muốn làm việc với team như thế nào? (Sprint 2 tuần? Tần suất họp? Kênh liên lạc: Slack, Zalo, Email?) | KHÁM PHÁ | **Không quan tâm** — linh hoạt |

---

## PHẦN 4: CÂU HỎI MỞ (Tầm nhìn sản phẩm)

| ID | Mục | Câu hỏi | Loại | Trả lời |
|:--|:--|:--|:--|:--|
| R2-9.1 | Cộng đồng | App chỉ là công cụ cá nhân, hay muốn xây thành cộng đồng ẩm thực? (chia sẻ công thức giữa users, follow nhau, bình luận, xếp hạng...) | KHÁM PHÁ | **Chỉ công cụ cá nhân** ✅ |
| R2-9.2 | Grocery | Có muốn tích hợp đặt hàng nguyên liệu online không? (GrabMart, Bạch Hóa Xanh, Lazada...) Nếu có, đây là nguồn doanh thu tiềm năng (affiliate). | KHÁM PHÁ | **Chưa** — không ưu tiên |
| R2-9.3 | Mở rộng | Ngoài ẩm thực, tương lai có muốn mở rộng sang lĩnh vực khác không? (review cà phê, khách sạn, công thức pha chế, DIY...) | KHÁM PHÁ | **Chưa** — tập trung ẩm thực trước |
| R2-9.4 | Điều gì quan trọng nhất | Nếu chỉ được chọn **1 điều duy nhất** mà app phải làm tốt nhất, đó là gì? (Lưu nhanh? AI chính xác? Gợi ý hay? Giao diện đẹp? Nhiều nền tảng?) | KHÁM PHÁ | **Lưu được công thức từ video** — đây là core value #1 ✅ |

---

*Ghi chú: Đây là bộ câu hỏi Vòng 2, dựa trên kết quả Market Research + Domain Research đã hoàn thành. Các câu hỏi loại "XÁC NHẬN" có đề xuất cụ thể dựa trên data. Các câu hỏi loại "KHÁM PHÁ" cần stakeholder quyết định.*

## 💡 Lưu ý
> 1. **Những câu XÁC NHẬN** đều dựa trên data research thực tế — anh/chị có thể đồng ý hoặc điều chỉnh.
> 2. **Những câu KHÁM PHÁ** cần anh/chị quyết định vì đây là product decisions không thể suy ra từ data.
> 3. Anh/chị có thể trả lời tất cả cùng lúc hoặc từng phần.

---

## 📈 KPI BENCHMARKS SO SÁNH CHUẨN NGÀNH (theo yêu cầu R2-1.4)

| KPI | Mục tiêu App | Chuẩn ngành (Lifestyle/Food App) | Đánh giá |
|:--|:--:|:--:|:--|
| **Downloads 3 tháng** | 10,000 | 5,000-20,000 (new app) | ✅ Hợp lý, nằm trong khoảng trung bình |
| **DAU/MAU** | 20% | 20-25% (good), 40%+ (excellent) | ✅ Mức "good", phù hợp app mới |
| **Retention D1** | - | ~25% (chuẩn ngành) | ⚠️ Nên đặt mục tiêu D1 ~25% |
| **Retention D7** | 30% | 15-25% (trung bình lifestyle) | ⬆ Cao hơn chuẩn nhưng khả thi nếu onboarding tốt |
| **Retention D30** | - | 10-15% (trung bình) | ⚠️ Nên đặt mục tiêu D30 ~12% |
| **Free → Premium** | 3% | 2-5% (freemium median ~2.18%) | ✅ Hợp lý, trên median |
| **AI Accuracy** | 85% | 85-95% (tùy độ phức tạp) | ✅ Phù hợp cho MVP, mục tiêu 90%+ Phase 2 |
| **Công thức lưu/user/tuần** | 3 | 2-5 (ước lượng từ data các app) | ✅ Hợp lý |

_Sources: [Enable3](https://enable3.io/blog/app-retention-benchmarks-2025), [UXCam](https://uxcam.com/blog/mobile-app-retention-benchmarks/), [RevenueCat](https://www.revenuecat.com/state-of-subscription-apps-2025/), [First Page Sage](https://firstpagesage.com/seo-blog/saas-freemium-conversion-rates/), [Business of Apps](https://www.businessofapps.com/data/app-retention-rates/)_

**Khuyến nghị bổ sung:**
- Thêm KPI **Retention D1 (~25%)** và **Retention D30 (~12%)** vào danh sách theo dõi
- Free → Premium 3% là trên median ngành (2.18%) — khả thi nếu app tạo được "aha moment" rõ ràng
- Với Premium $4.99/tháng (điều chỉnh từ $3.99): cần ~2,000 premium users để có ~$10K MRR
- Personalized onboarding có thể cải thiện retention lên **30-50%** so với onboarding chung

---

## 📝 TÓM TẮT QUYẼT ĐỊNH ĐÃ XÁC NHẬN

| Mục | Quyết định |
|:--|:--|
| **Target** | Gen Z (Social Foodies), global từ đầu |
| **Pricing** | Free 3 lượt/ngày, Premium $4.99/tháng |
| **MVP Phases** | 3 phases đồng ý |
| **Nền tảng MXH** | TikTok > Reels > Facebook > Instagram > YouTube |
| **Mobile** | cả iOS + Android (cross-platform) |
| **AI MVP** | Caption + Audio (Whisper + GPT-4o-mini) |
| **Đơn vị** | Giữ gốc + gợi ý gram/ml bên cạnh |
| **UX lưu** | Hiển preview xác nhận trước khi lưu |
| **AI priority** | Chính xác > Nhanh |
| **Mood** | Emoji, mỗi lần mở app + AI auto-detect |
| **Gợi ý** | Chỉ từ thư viện user (phase 1) |
| **Preference** | 6 mục (thêm giá tiền trung bình bữa) |
| **Địa điểm** | Lưu text, AI tự phân loại |
| **Chia sẻ UX** | Lưu ngầm + sửa sau |
| **Thư viện UI** | List view (đơn giản) |
| **Video gốc** | Link ra ngoài (không embed) |
| **Đăng nhập** | Google + Apple ID |
| **Bản quyền** | Chỉ lưu structured data + link gốc ✅ |
| **API fallback** | Copy-paste caption + screenshot ✅ |
| **Burn period** | Theo chuẩn ngành (~6-12 tháng) |
| **Team** | Sẵn |
| **Timeline** | Chưa có deadline cụ thể |
| **Product type** | Công cụ cá nhân (không cộng đồng) |
| **Grocery** | Chưa ưu tiên |
| **Mở rộng** | Tập trung ẩm thực trước |
| **Core value #1** | **Lưu được công thức từ video** |

**✅ TOÀN BỘ 22 CÂU HỌeI ĐÃ ĐƯỢC TRẢ LỜI**
