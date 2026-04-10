# Theo dõi câu hỏi: Recipe & Mood Food App
**Ngày tạo:** 2026-04-09 | **Nguồn:** BA Research + AI Domain Knowledge

## 🔎 Phân tích sơ bộ

> **Ý tưởng cốt lõi:** App cho phép người dùng lưu công thức nấu ăn / địa điểm ăn uống từ mạng xã hội (TikTok, Facebook, YouTube Shorts/Reels) thông qua nút "Chia sẻ" → AI phân tích nội dung video → Chuẩn hóa nguyên liệu & danh mục → Kết hợp mood/preference để gợi ý món ăn/địa điểm.
>
> **Loại dự án:** Greenfield — xây mới hoàn toàn.
>
> **Thực thể cốt lõi nhận diện được:**
> - **Công thức (Recipe):** Lưu từ video → Tên món, nguyên liệu (chuẩn hóa đơn vị), cách làm, danh mục
> - **Địa điểm (Place/Restaurant):** Lưu từ video review → Tên, địa chỉ, loại hình, menu
> - **Người dùng (User):** Profile, mood, preference, lịch sử tương tác
> - **Nội dung gốc (Source Content):** Link video gốc, nền tảng, metadata
>
> **Vòng đời thực thể chính:**
> - Recipe: Chia sẻ link → AI trích xuất → Phân loại & Chuẩn hóa → Lưu vào thư viện → Gợi ý theo mood → Nấu/Đánh dấu đã nấu
> - Place: Chia sẻ link review → AI nhận diện là review → Trích xuất thông tin → Lưu vào danh sách → Gợi ý theo mood/vị trí → Đi ăn/Đánh dấu
>
> **Ambiguity Zones (Vùng chưa rõ cần khám phá):**
> 1. **Phạm vi AI xử lý video:** AI cần xem video, đọc caption, hay cả hai? Xử lý tiếng Việt nói trong video hay chỉ text? Độ chính xác mong muốn? Chi phí AI xử lý video lớn — budget ra sao?
> 2. **Ranh giới Recipe vs Review:** Một video có thể vừa có công thức vừa là review quán. AI phân loại tự động hay người dùng chọn? Edge case: video mukbang, video "ăn thử"?
> 3. **Mood & Preference engine:** Mood nhập bằng cách nào (text, emoji, slider)? Tần suất cập nhật? Algorithm gợi ý dựa trên logic gì? Có cần ML hay rule-based đủ cho MVP?
>
> **Rủi ro bỏ sót nếu không hỏi kỹ:**
> - Cách xử lý khi AI trích xuất sai (sai nguyên liệu, sai địa chỉ) — UX sửa lỗi?
> - Quyền sở hữu nội dung & bản quyền video khi lưu/hiển thị trong app
> - Giới hạn API của TikTok/YouTube/Facebook khi lấy nội dung qua share link
> - Monetization model — app miễn phí hay freemium?

---

## PHẦN 1.1: VẤN ĐỀ & MỤC ĐÍCH

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.1.1 | Vấn đề cốt lõi | Vấn đề cụ thể mà anh/chị gặp phải khi xem video nấu ăn/review đồ ăn trên mạng xã hội là gì? Ví dụ: quên mất video, không tìm lại được, hay không nhớ nguyên liệu cần mua? | KHÁM PHÁ | ⬜ |
| 1.1.2 | Đối tượng người dùng | Anh/chị hình dung người dùng chính của app là ai? (Người nội trợ, sinh viên, dân văn phòng, người thích khám phá ẩm thực...?) Độ tuổi và thói quen dùng mạng xã hội của họ như thế nào? | KHÁM PHÁ | ⬜ |
| 1.1.3 | Mục tiêu kinh doanh | Mục tiêu kinh doanh chính của app là gì? (Xây user base lớn rồi kiếm tiền sau, hay cần doanh thu ngay từ đầu?) Anh/chị đã nghĩ đến mô hình kiếm tiền nào chưa? (Freemium, quảng cáo, affiliate với nhà hàng, bán subscription?) | KHÁM PHÁ | ⬜ |
| 1.1.4 | Quy mô & Thị trường | App nhắm đến thị trường Việt Nam hay quốc tế? Ngôn ngữ hỗ trợ ban đầu? Nếu Việt Nam, anh/chị có biết thói quen lưu công thức hiện tại của người Việt là gì không — screenshot, bookmark, hay ghi sổ tay? | KHÁM PHÁ | ⬜ |
| 1.1.5 | Khác biệt cạnh tranh | Theo tôi research, hiện đã có các app tương tự như **Flavorish** (lưu công thức từ TikTok/YouTube, AI trích xuất nguyên liệu, $4.99/tháng), **ReciMe** (10 triệu user, lưu từ Instagram/TikTok/YouTube). Tuy nhiên, tôi thấy app của anh/chị có 2 điểm khác biệt tiềm năng: **(1) kết hợp mood/preference để gợi ý** và **(2) hỗ trợ cả review địa điểm ăn uống, không chỉ công thức**. Anh/chị xác nhận đây có đúng là điểm khác biệt chính không? Còn điểm nào khác không? | XÁC NHẬN | ⬜ |
| 1.1.6 | Tầm nhìn dài hạn | Anh/chị hình dung app sẽ phát triển như thế nào trong 1-3 năm tới? Chỉ là công cụ cá nhân lưu công thức, hay muốn xây dựng thành cộng đồng ẩm thực (chia sẻ, bình luận, follow nhau)? | KHÁM PHÁ | ⬜ |
| 1.1.7 | Cơ cấu team | Ai là người ra quyết định chính cho dự án này? Có team kỹ thuật sẵn hay cần outsource? Có designer không? | KHÁM PHÁ | ⬜ |
| 1.1.8 | KPI thành công | Anh/chị đo lường thành công của app bằng chỉ số gì? (Số lượng user, DAU/MAU, số công thức được lưu, tỷ lệ retention...?) Có con số mục tiêu cụ thể cho 3-6 tháng đầu không? | KHÁM PHÁ | ⬜ |

> *Loại: `XÁC NHẬN` = Confirming Question | `KHÁM PHÁ` = 5W1H Open Question*

---

## PHẦN 1.2: HỆ THỐNG HIỆN TẠI

*Dự án Greenfield — không có hệ thống cũ, nhưng cần hiểu cách người dùng đang "xử lý" vấn đề này bằng công cụ hiện có.*

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.2.1 | Cách lưu hiện tại | Hiện tại khi thấy video nấu ăn/review hay trên mạng xã hội, anh/chị (hoặc người dùng mục tiêu) lưu lại bằng cách nào? (Bookmark trên TikTok, lưu vào collection, screenshot, gửi cho bạn bè qua Zalo, ghi vào Notes...?) | KHÁM PHÁ | ⬜ |
| 1.2.2 | Bất cập hiện tại | Vấn đề lớn nhất của cách lưu hiện tại là gì? (Không tìm lại được, không phân loại được, không lọc theo nguyên liệu, lẫn lộn giữa các nền tảng...?) Cho ví dụ cụ thể? | KHÁM PHÁ | ⬜ |
| 1.2.3 | App đã thử | Anh/chị hoặc người dùng mục tiêu đã thử dùng app lưu công thức nào chưa? (Flavorish, ReciMe, Paprika, hoặc app khác?) Nếu rồi, điểm gì tốt và điểm gì chưa hài lòng? Nếu chưa, tại sao không? | KHÁM PHÁ | ⬜ |
| 1.2.4 | Nền tảng chia sẻ | Trong các nền tảng TikTok, Facebook (Reels), YouTube (Shorts), Instagram (Reels) — anh/chị thấy người dùng mục tiêu xem nội dung ẩm thực nhiều nhất ở đâu? Có nền tảng nào ưu tiên hơn cho MVP không? | KHÁM PHÁ | ⬜ |
| 1.2.5 | App review địa điểm | Về phần lưu địa điểm ăn uống, hiện tại người dùng có dùng app nào không? (Google Maps lưu địa điểm, Foody, ShopeeFood, TikTok bookmark...?) Điểm gì chưa được đáp ứng? | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.3: QUY TRÌNH & CÔNG VIỆC

### A. Xác nhận Stakeholder

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.3A.1 | Stakeholder | Dự kiến các bên liên quan đến app gồm: **(1) Người dùng cuối (end-user)** — xem video, lưu công thức/địa điểm, nhận gợi ý; **(2) Content Creator** — người tạo video gốc (có liên quan không?); **(3) Nhà hàng/Quán ăn** — nếu app có tính năng gợi ý địa điểm; **(4) Admin/Moderator** — quản lý nội dung. Danh sách này đã đủ chưa? Có bên nào khác không? | XÁC NHẬN | ⬜ |

### B. Vòng đời thực thể

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.3B.1 | Vòng đời Recipe | Tôi hình dung vòng đời của một công thức trong app như sau: **Chia sẻ link từ MXH → AI trích xuất nội dung → Người dùng xác nhận/chỉnh sửa → Lưu vào thư viện (phân loại) → Được gợi ý theo mood → Đánh dấu đã nấu/yêu thích**. Đúng không? Có trạng thái nào thiếu không? (Ví dụ: chia sẻ cho người khác? Xóa? Lưu trữ?) | XÁC NHẬN | ⬜ |
| 1.3B.2 | Vòng đời Place | Với địa điểm, tôi hình dung: **Chia sẻ link review → AI nhận diện là review quán → Trích xuất tên/địa chỉ/món đặc sắc → Lưu vào danh sách địa điểm → Gợi ý theo mood + vị trí → Đánh dấu đã đi/muốn đi**. Đúng không? Có gì thiếu không? | XÁC NHẬN | ⬜ |
| 1.3B.3 | Vòng đời Mood | Mood của người dùng thay đổi thường xuyên. Anh/chị hình dung người dùng cập nhật mood khi nào? (Mỗi lần mở app? Mỗi ngày? Khi được hỏi?) Và mood bao gồm những gì? (Vui/buồn, mệt/khỏe, muốn ăn nhẹ/nặng, thèm cái gì đó cụ thể?) | KHÁM PHÁ | ⬜ |

### C. Công việc chi tiết từng Stakeholder

#### C1. Người dùng cuối (End User)

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.3C.1 | Luồng chia sẻ | Khi người dùng đang xem TikTok/YouTube/Facebook và thấy video hay, họ ấn "Chia sẻ" rồi chọn app mình. Vậy sau khi chia sẻ, anh/chị muốn UX diễn ra như thế nào? (App mở lên ngay? Chỉ lưu ngầm? Hiển preview để xác nhận? Cho chỉnh sửa trước khi lưu?) | KHÁM PHÁ | ⬜ |
| 1.3C.2 | Xử lý AI | Sau khi nhận link, AI cần trích xuất những thông tin gì cụ thể từ video? Anh/chị muốn AI xử lý: **(a)** chỉ caption/mô tả video, **(b)** nghe audio/giọng nói trong video, hay **(c)** cả phân tích hình ảnh từ video? (Mỗi mức độ có chi phí và độ phức tạp rất khác nhau) | KHÁM PHÁ | ⬜ |
| 1.3C.3 | Chuẩn hóa nguyên liệu | Anh/chị nói AI "quy nguyên liệu ra các đơn vị đo đếm phổ biến". Cụ thể, đơn vị nào là "phổ biến"? (gram, ml, muỗng cà phê, chén...?) Có muốn người dùng tùy chỉnh hệ đơn vị không? (Ví dụ: người Việt hay dùng "chén", "bát", "lóng" — khác với cup/tbsp của phương Tây) | KHÁM PHÁ | ⬜ |
| 1.3C.4 | Phân loại danh mục | AI tự động phân loại món ăn vào danh mục. Anh/chị hình dung danh mục như thế nào? (Theo loại món: món chính/tráng miệng/đồ uống? Theo ẩm thực vùng miền? Theo mức độ khó? Theo thời gian nấu? Theo chế độ ăn: healthy, keto, chay...?) Người dùng có được tạo danh mục riêng không? | KHÁM PHÁ | ⬜ |
| 1.3C.5 | Nhập Mood | Khi người dùng nhập mood và preference, anh/chị hình dung giao diện như thế nào? (Chọn emoji? Slider thanh trượt? Trả lời câu hỏi như quiz? Nhập tự do bằng text?) | KHÁM PHÁ | ⬜ |
| 1.3C.6 | Preference | "Preference" của người dùng bao gồm những gì cụ thể? Ví dụ: dị ứng thực phẩm, chế độ ăn (chay, keto, low-carb), ẩm thực yêu thích (Hàn, Nhật, Việt...), mức độ cay, ngân sách... Còn gì khác không? Người dùng nhập 1 lần hay cập nhật thường xuyên? | KHÁM PHÁ | ⬜ |
| 1.3C.7 | Gợi ý món | Khi gợi ý món ăn/địa điểm, AI gợi ý dựa trên những yếu tố nào? Chỉ từ thư viện đã lưu của người dùng, hay có thể gợi ý từ nguồn bên ngoài? Ví dụ: người dùng chưa lưu món nào về "phở" nhưng mood hôm nay là "thèm đồ nóng" — app có gợi ý phở từ nguồn cộng đồng/database chung không? | KHÁM PHÁ | ⬜ |
| 1.3C.8 | Lưu địa điểm | Khi AI nhận diện video là review địa điểm, các thông tin cần trích xuất là gì? (Tên quán, địa chỉ, giờ mở cửa, món đặc sắc, khoảng giá, rating của reviewer...?) Làm sao xác minh địa chỉ chính xác — có tích hợp Google Maps không? | KHÁM PHÁ | ⬜ |
| 1.3C.9 | Tìm kiếm & Lọc | Người dùng tìm lại công thức/địa điểm đã lưu bằng cách nào? (Tìm theo tên món, theo nguyên liệu, theo danh mục, theo tag, theo vị trí gần...?) Anh/chị có hình dung tính năng tìm kiếm nào đặc biệt không? (Ví dụ: "tìm món nào có trứng và bơ mà nấu dưới 30 phút") | KHÁM PHÁ | ⬜ |
| 1.3C.10 | Sửa lỗi AI | Khi AI trích xuất sai (sai tên nguyên liệu, sai địa chỉ, thiếu bước...), người dùng sửa lại như thế nào? Chỉnh sửa trực tiếp? Báo lỗi cho hệ thống học lại? Hay chấp nhận và bỏ qua? | KHÁM PHÁ | ⬜ |

#### C2. Admin/Moderator

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.3C.11 | Admin cần thiết? | App có cần vai trò Admin/Moderator không? Nếu có, admin cần làm gì? (Quản lý danh mục món ăn, kiểm duyệt nội dung, quản lý địa điểm, xem thống kê user...?) | KHÁM PHÁ | ⬜ |
| 1.3C.12 | Quản lý địa điểm | Với địa điểm nhà hàng/quán ăn được lưu từ video review — ai xác minh thông tin đúng? (AI tự động, admin kiểm duyệt, hay người dùng tự chịu trách nhiệm?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.4: PHÂN TÍCH TÁC ĐỘNG

| ID | Chiều tác động | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 1.4.1 | Tích hợp MXH | Việc lấy nội dung từ TikTok/YouTube/Facebook qua share link có thể bị hạn chế bởi API/policy của các nền tảng (ví dụ: TikTok hạn chế scraping, YouTube có Terms of Service nghiêm ngặt). Anh/chị đã tìm hiểu về các giới hạn này chưa? Có phương án dự phòng không? (Ví dụ: người dùng copy-paste caption thay vì app tự lấy?) | KHÁM PHÁ | ⬜ |
| 1.4.2 | Bản quyền nội dung | Khi lưu công thức từ video của người khác vào app, có vấn đề bản quyền không? App sẽ hiển thị link về video gốc (credit) hay trích xuất nội dung hoàn toàn? Anh/chị đã tư vấn pháp lý về vấn đề này chưa? | KHÁM PHÁ | ⬜ |
| 1.4.3 | Dữ liệu cá nhân | App lưu mood, preference, lịch sử xem của người dùng — đây là dữ liệu cá nhân. Anh/chị có yêu cầu gì về bảo mật dữ liệu? Cần tuân thủ quy định nào không? (PDPA Việt Nam, GDPR nếu có user quốc tế?) | KHÁM PHÁ | ⬜ |
| 1.4.4 | Chi phí AI | Việc dùng AI để phân tích video/audio/text có chi phí đáng kể (API calls, compute). Anh/chị đã tính đến chi phí AI cho mỗi lần người dùng lưu công thức chưa? Có giới hạn số lượng lưu mỗi ngày không? | KHÁM PHÁ | ⬜ |
| 1.4.5 | Đa nền tảng | App chạy trên iOS, Android, hay cả hai? Có cần web version không? (Lưu ý: chức năng "Chia sẻ" từ MXH sang app hoạt động khác nhau trên iOS và Android) | KHÁM PHÁ | ⬜ |

---

## PHẦN 2: ĐỐI THỦ & THỊ TRƯỜNG

*Theo research, thị trường recipe-saving app đang rất sôi động với các đối thủ chính và xu hướng AI-powered.*

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 2.1 | Đối thủ trực tiếp | Theo tôi research, các đối thủ trực tiếp gồm: **(1) Flavorish** — AI trích xuất công thức từ TikTok/YouTube/Instagram, free 5 lượt/ngày, Premium $4.99/tháng; **(2) ReciMe** — 10M+ user, meal planner + grocery list; **(3) Honeydew** — AI trích xuất nguyên liệu, tự sắp xếp grocery list theo kệ. Anh/chị có biết các app này không? Đã dùng thử chưa? Có đối thủ nào khác không? | XÁC NHẬN | ⬜ |
| 2.2 | Đối thủ mood-based | Về phần gợi ý theo mood, tôi thấy có: **(1) DoorDash Zesty** — app mới của DoorDash, gợi ý nhà hàng theo mood/prompt tự nhiên; **(2) Paire** — quiz personality để match với nhà hàng; **(3) MoodieFoodie** (open-source) — recommend đồ ăn theo mood. Tuy nhiên, chưa có app nào kết hợp cả **lưu công thức + mood + review địa điểm**. Anh/chị có đồng ý đây là khoảng trống thị trường không? | XÁC NHẬN | ⬜ |
| 2.3 | Điểm yếu đối thủ | Tôi thấy các app hiện tại có một số điểm yếu: **(a)** Flavorish giới hạn 5 lượt free/ngày; **(b)** Hầu hết chỉ hỗ trợ tiếng Anh, chưa tốt cho tiếng Việt; **(c)** Không có app nào kết hợp recipe + restaurant review. Anh/chị có thấy điểm yếu nào khác không mà app mình có thể khai thác? | XÁC NHẬN | ⬜ |
| 2.4 | Thị trường Việt Nam | Ở Việt Nam, người dùng thường dùng Foody, ShopeeFood để tìm quán ăn, và TikTok/Facebook để xem review. Anh/chị thấy app mình định vị ở đâu so với các app này? Bổ sung cho họ hay cạnh tranh trực tiếp? | KHÁM PHÁ | ⬜ |
| 2.5 | Tính năng đối thủ | Flavorish và ReciMe có tính năng **grocery list tự động** (từ công thức → sinh danh sách đi chợ). Anh/chị có muốn app mình có tương tự không? Còn tính năng nào của đối thủ mà anh/chị muốn có hoặc làm tốt hơn? | XÁC NHẬN | ⬜ |

---

## PHẦN 3: NHU CẦU TƯƠNG LAI & MVP

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 3.1 | MVP scope | Nếu chỉ được chọn 3 tính năng cho phiên bản đầu tiên (MVP), anh/chị chọn gì? Ví dụ: (a) Lưu công thức từ MXH, (b) AI phân tích & chuẩn hóa, (c) Lưu địa điểm, (d) Gợi ý theo mood, (e) Grocery list, (f) Cộng đồng chia sẻ... | KHÁM PHÁ | ⬜ |
| 3.2 | Pha phát triển | Anh/chị có muốn chia giai đoạn phát triển không? Ví dụ: **Phase 1** — lưu công thức + AI trích xuất; **Phase 2** — thêm mood/preference; **Phase 3** — thêm địa điểm + cộng đồng? Hay muốn tất cả trong 1 lần? | KHÁM PHÁ | ⬜ |
| 3.3 | Tính năng tương lai | Ngoài các tính năng đã nêu, anh/chị còn hình dung tính năng nào khác trong tương lai không? (Ví dụ: meal planning theo tuần, theo dõi dinh dưỡng/calo, kết nối với dịch vụ giao đồ ăn, chia sẻ công thức giữa các thành viên trong gia đình?) | KHÁM PHÁ | ⬜ |
| 3.4 | Mở rộng nội dung | App có chỉ hỗ trợ nội dung ẩm thực không, hay tương lai có thể mở rộng sang các loại nội dung khác? (Ví dụ: review cà phê, review khách sạn, công thức pha chế đồ uống...?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 4: TÍNH NĂNG CẦN THIẾTT (User Story Harvest)

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 4.1 | Happy Path — Lưu recipe | Khi mọi thứ diễn ra bình thường: người dùng chia sẻ link → AI trích xuất đúng → lưu thành công. Kết quả cuối cùng người dùng thấy là gì? (Màn hình hiển thị công thức gồm những gì: ảnh, tên món, nguyên liệu, cách làm, video gốc, thời gian nấu...?) | KHÁM PHÁ | ⬜ |
| 4.2 | Negative Path — AI thất bại | Điều gì xảy ra khi AI không trích xuất được? (Video không có công thức, video bị xóa, link hết hạn, video bằng ngôn ngữ không hỗ trợ?) App thông báo gì cho người dùng? Có cho nhập thủ công không? | KHÁM PHÁ | ⬜ |
| 4.3 | Negative Path — Nội dung mơ hồ | Nếu video vừa là công thức vừa là review quán (ví dụ: "hôm nay mình làm thử món này ở quán X"), AI xử lý thế nào? Lưu vào cả 2 danh mục? Hỏi người dùng chọn? | KHÁM PHÁ | ⬜ |
| 4.4 | Validation — Nguyên liệu | Nguyên liệu AI trích xuất có ràng buộc gì không? (Phải thuộc danh mục nguyên liệu chuẩn? Cho phép nguyên liệu tự do? Xử lý nguyên liệu trùng lặp/synonym như thế nào — "hành tây" vs "củ hành"?) | KHÁM PHÁ | ⬜ |
| 4.5 | Permissions | Ai được xem công thức/địa điểm đã lưu? Chỉ người lưu (private), hay có thể chia sẻ với bạn bè/gia đình? Có tính năng "công khai" để người khác xem không? | KHÁM PHÁ | ⬜ |
| 4.6 | UI/UX | Anh/chị có app nào làm tham khảo về mặt giao diện không? (Pinterest-style grid? Instagram-style feed? Card-based? Minimalist?) Có muốn xem được video gốc ngay trong app không? | KHÁM PHÁ | ⬜ |
| 4.7 | Offline | App có cần hoạt động offline không? (Xem công thức đã lưu khi không có mạng — ví dụ đang ở chợ/siêu thị?) | KHÁM PHÁ | ⬜ |
| 4.8 | Notification | App có gửi thông báo không? Loại thông báo nào? (Gợi ý món theo mood hôm nay? Nhắc lịch nấu ăn? Quán mới gần bạn? Tần suất?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 5: TÍCH HỢP & DỮ LIỆU

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 5.1 | Tích hợp MXH APIs | App cần tích hợp với các nền tảng MXH (TikTok, YouTube, Facebook, Instagram). Anh/chị muốn app chỉ nhận link chia sẻ (deep link), hay cần tích hợp sâu hơn (ví dụ: đăng nhập bằng TikTok, đồng bộ bookmark)? | KHÁM PHÁ | ⬜ |
| 5.2 | Google Maps | Để lưu và gợi ý địa điểm, app có cần tích hợp Google Maps / Apple Maps không? (Hiển thị bản đồ, xác minh địa chỉ, tính khoảng cách, dẫn đường...?) | KHÁM PHÁ | ⬜ |
| 5.3 | Grocery/E-commerce | Có cần tích hợp với dịch vụ đi chợ online không? (Ví dụ: từ danh sách nguyên liệu → đặt hàng trên GrabMart, Bạch Hóa Xanh, Lazada...?) | KHÁM PHÁ | ⬜ |
| 5.4 | Đăng nhập | Người dùng đăng ký/đăng nhập bằng cách nào? (Email, số điện thoại, Google, Facebook, Apple ID, TikTok...?) Có cho dùng không cần đăng ký (guest mode) không? | KHÁM PHÁ | ⬜ |
| 5.5 | Import dữ liệu ban đầu | Khi mới cài app, người dùng có thể import công thức từ đâu? (Bookmark cũ trên TikTok? Dán nhiều link cùng lúc? Import từ app khác như Paprika/Flavorish?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 6: YÊU CẦU KỸ THUẬT

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 6.1 | Hạ tầng | Anh/chị có ưu tiên về hạ tầng triển khai không? (AWS, GCP, Azure, hoặc không có yêu cầu cụ thể?) Có sẵn tài khoản cloud nào chưa? | KHÁM PHÁ | ⬜ |
| 6.2 | AI Provider | Anh/chị có yêu cầu về AI provider không? (OpenAI, Claude, Google Gemini, hoặc self-hosted model?) Yếu tố nào quan trọng hơn: chính xác, nhanh, hay rẻ? | KHÁM PHÁ | ⬜ |
| 6.3 | Số lượng user | Dự kiến số lượng người dùng ban đầu? Dự kiến tăng trưởng trong 6-12 tháng? (Để ước tính chi phí server và AI) | KHÁM PHÁ | ⬜ |
| 6.4 | Mobile tech | App native (Swift/Kotlin), cross-platform (Flutter/React Native), hay không có yêu cầu cụ thể? Team hiện có kinh nghiệm với công nghệ nào? | KHÁM PHÁ | ⬜ |
| 6.5 | Đa ngôn ngữ | App cần hỗ trợ ngôn ngữ nào? Chỉ tiếng Việt? Tiếng Việt + Anh? AI cần hiểu công thức bằng tiếng Việt (khá thách thức với các đơn vị đo lường địa phương như "1 lóng bàn tay", "vài lát"...) | KHÁM PHÁ | ⬜ |

---

## PHẦN 7: BÁO CÁO & DASHBOARD

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 7.1 | User analytics | Cần theo dõi số liệu người dùng gì? (Số công thức lưu/ngày, tỷ lệ trích xuất thành công, nền tảng được chia sẻ nhiều nhất, loại món phổ biến, mood phổ biến...?) | KHÁM PHÁ | ⬜ |
| 7.2 | Admin dashboard | Có cần admin dashboard không? Nếu có, cần xem những gì? (Tổng user, DAU/MAU, tổng công thức, AI usage/cost, top món ăn, top địa điểm...?) | KHÁM PHÁ | ⬜ |
| 7.3 | Export | Người dùng có cần xuất dữ liệu không? (Export công thức ra PDF, chia sẻ dưới dạng ảnh đẹp, in ra giấy...?) | KHÁM PHÁ | ⬜ |

---

## PHẦN 8: NGÂN SÁCH & TIMELINE

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| 8.1 | Ngân sách | Ngân sách dự kiến cho dự án này là bao nhiêu? Ngân sách có bao gồm chi phí vận hành hàng tháng (server, AI API) không? | KHÁM PHÁ | ⬜ |
| 8.2 | Timeline | Khi nào cần ra mắt MVP? Có deadline cụ thể không? (Sự kiện, mùa lễ, nhà đầu tư yêu cầu...?) Thời gian có linh hoạt không? | KHÁM PHÁ | ⬜ |
| 8.3 | Quy trình làm việc | Anh/chị muốn làm việc với team phát triển như thế nào? (Sprint 2 tuần? Tần suất họp? Kênh liên lạc: Slack, Zalo, Email?) Ai là đầu mối liên hệ chính? | KHÁM PHÁ | ⬜ |
| 8.4 | Chi phí AI dài hạn | App phụ thuộc nhiều vào AI (trích xuất, gợi ý, phân loại). Anh/chị đã tính chi phí AI dài hạn chưa? Ví dụ: nếu có 10,000 user, mỗi người lưu 5 công thức/ngày = 50,000 AI calls/ngày. Chi phí này ai chịu? (Người dùng trả subscription? App chịu?) | KHÁM PHÁ | ⬜ |

---

*Ghi chú: ⬜ = Chờ xác nhận. ✅ = Stakeholder đã xác nhận.*

## Lưu ý khi phỏng vấn
> 1. **Ưu tiên demo thực tế:** Yêu cầu stakeholder mở TikTok/YouTube và cho xem cách họ đang lưu công thức, để hiểu rõ pain point thực tế.
> 2. **Hỏi về edge case AI:** Công thức Việt Nam thường mơ hồ về đơn vị ("một ít", "vừa ăn", "1 muỗng cà phê đầy") — cần làm rõ mức độ chuẩn hóa mong muốn.
> 3. **Chi phí AI là rủi ro lớn:** Với mô hình freemium, cần tính kỹ bao nhiêu free AI calls/người dùng là bền vững.
