# Theo dõi câu hỏi: Fanfic & Webtoon Platform (Đọc + Viết + AI Gen Manga/Webtoon + Research Storage)
**Ngày tạo:** 2026-04-09 | **Cập nhật:** 2026-04-10 | **Nguồn:** BA Research + AI Domain Knowledge

## ud83dudd0e Phân tích sơ bộ
> **Vấn đề cốt lõi:** Người viết fanfic đang phải dùng nhiều công cụ rời rạc (Google Docs, Notion, AO3/Wattpad, Canva/AI tools). Không có nền tảng nào tích hợp cả **đọc + viết truyện + AI gen manga/webtoon** trong một nơi.
> **Kết luận elicitation:**
> - Solo writer là user chính, muốn community public
> - Pain point chính: phải đổi qua lại giữa nhiều app
> - AI chỉ gen minh họa, viết là chính
> - MVP core 3: Editor + Manga panel gen + Research tree

---

## PHẦN 1.1: VẤN ĐỀ & MỤC ĐÍCH
| ID | Mục | Câu hỏi | Loại | Status | Trả lời |
|:--|:--|:--|:--|:--:|:--|
| 1.1.1 | Vấn đề gốc rễ | Điều gì khiến anh/chị xây dựng app này? | KHÁM PHÁ | ✅ | Muốn có web app giúp tổng hợp thông tin để viết truyện, sáng tác |
| 1.1.2 | Tầm nhìn | App hoàn hảo trải nghiệm như thế nào? | KHÁM PHÁ | ✅ | Một trợ lý biết tuốt giúp viết thoải mái + chia sẻ mượt mà + feedback community |
| 1.1.3 | User chính | Solo writer, co-author, cả hai? | KHÁM PHÁ | ✅ | Solo writer muốn nhận feedback cộng đồng |
| 1.1.4 | Tham chiếu Ellipsus | Muốn gì? Muốn khác gì? | KHÁM PHÁ | ✅ | Muốn: trải nghiệm viết + theme + font + webtoon + tổng hợp tài liệu + đa ngôn ngữ + tự động dịch + khóa chương + worldbuilding format |
| 1.1.5 | Fanfic vs novel | Nhu cầu đặc thù? | KHÁM PHÁ | ✅ | Truyện ngắn hơn, cốt đơn giản hơn. Cần market research thêm |
| 1.1.6 | Research storage | Loại nội dung? | KHÁM PHÁ | ✅ | Đủ hết, cả tài liệu tham khảo |
| 1.1.7 | Mô hình kinh doanh | Free/freemium/subscription? | KHÁM PHÁ | ✅ | Trả phí: gen webtoon + đẩy lên market + mua theme |
| 1.1.8 | Team | Ai ra quyết định? | KHÁM PHÁ | ✅ | Tôi (stakeholder) |
| 1.1.9 | KPI | KPI thành công? | KHÁM PHÁ | ✅ | Tất cả (user, retention, stories, manga...) |
| 1.1.10 | Nền tảng đọc | Giống AO3/Wattpad hay xem bản thảo? | KHÁM PHÁ | ✅ | Cộng đồng public |
| 1.1.11 | Reader là ai | Chỉ fanfic hay cả webtoon/manga? | KHÁM PHÁ | ✅ | Tất cả |
| 1.1.12 | AI gen — định vị | Phụ trợ hay luồng riêng? | KHÁM PHÁ | ✅ | Phụ trợ cho writer |
| 1.1.13 | AI gen — luồng | Chọn text hay mô tả chi tiết? | KHÁM PHÁ | ✅ | Writer mô tả chi tiết từng cảnh |
| 1.1.14 | AI gen — chất lượng | Sketch hay webtoon chuyên nghiệp? | KHÁM PHÁ | ✅ | Như webtoon chuyên nghiệp (ảnh màu đầy đủ) |
| 1.1.15 | AI gen — nhất quán | Yêu cầu nhất quán nhân vật? | KHÁM PHÁ | ✅ | Nhất quán theo mô tả của writer |
| 1.1.16 | Monetization reader | Reader trả phí? | KHÁM PHÁ | ✅ | Có, mua VIP |

---

## PHẦN 1.2: HỆ THỐNG HIỆN TẠI
| ID | Mục | Câu hỏi | Loại | Status | Trả lời |
|:--|:--|:--|:--|:--:|:--|
| 1.2.1 | Công cụ viết | Đang dùng gì? | KHÁM PHÁ | ✅ | Note, Notion, Ellipsus, Docs — chỉ là nơi viết |
| 1.2.2 | Công cụ research | Ghi chú bằng gì? | KHÁM PHÁ | ✅ | Notion, Obsidian, sổ giấy, folder ảnh |
| 1.2.3 | Tính năng dùng nhiều | Dùng nhiều nhất gì? Thiếu gì? | KHÁM PHÁ | ✅ | Viết; thiếu tính năng đối chiếu resource |
| 1.2.4 | Bất cập | Than thở nhiều nhất về gì? | KHÁM PHÁ | ✅ | Phải đổi qua lại giữa các app nhiều |
| 1.2.5 | Platform đăng truyện | Đăng ở đâu? Muốn publish trực tiếp? | KHÁM PHÁ | ✅ | AO3, Wattpad, blog; muốn cả 2 |
| 1.2.6 | Gen hình | Ai đang dùng AI gen hình? Khó khăn? | KHÁM PHÁ | ✅ | Bộ phận gen truyện làm TikTok. Model đắt, không đồng nhất |

---

## PHẦN 1.3: QUY TRÌNH & CÔNG VIỆC

### A. Stakeholder
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 1.3A.1 | Danh sách | ✅ | Đúng. Beta read không bắt buộc |
| 1.3A.2 | Beta Reader quyền | ✅ | Cần tài khoản |

### B. Vòng đời
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 1.3B.1 | Vòng đời Story | ✅ | Ý tưởng → Outline → Draft → Beta read → Sửa → AI gen manga → Publish → Complete |
| 1.3B.2 | Research Node | ✅ | Tạo trước hoặc trong lúc viết. Có archive |
| 1.3B.3 | Chapter | ✅ | Draft → Revised → Published (bỏ Beta-reviewed) |
| 1.3B.4 | Manga panel | ✅ | Gen → Review → Sửa → Gắn vào chapter → Publish |

### C. Công việc chi tiết
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 1.3C.1 | Buổi viết điển hình | ✅ | Nghĩ ý tưởng → Nghiên cứu → Viết → Sửa → Đăng |
| 1.3C.2 | Research workflow | ✅ | Nhiều lần, đang alt-tab và notebook |
| 1.3C.3 | Hiển thị research | ✅ | Chưa biết, cần tham khảo |
| 1.3C.4 | Loại research | ✅ | Text, PDF, MD, link |
| 1.3C.5 | Outline | ✅ | Có. Muốn tìm hiểu domain research |
| 1.3C.6 | Version/draft | ✅ | Có (giữ bản cũ + nhiều draft) |
| 1.3C.7 | Export & publish | ✅ | Hỗ trợ hết các dạng |
| 1.3C.8 | Template | ✅ | Để thiết kế sau |
| 1.3C.9 | Edge cases | ✅ | Mất data khi chuyển app |
| 1.3C.10 | Co-author merge | ✅ | Khóa tài liệu, viết từng chương rồi merge |
| 1.3C.14 | Beta reader | ✅ | Feedback tổng quan. Tác giả tự set quyền |
| 1.3C.16 | Hành trình reader | ✅ | Mở app → include/exclude tag → đọc → comment |

---

## PHẦN 1.4: TÁC ĐỘNG
| ID | Chiều | Status | Trả lời |
|:--|:--|:--:|:--|
| 1.4.1 | Quy trình | ✅ | Khiến trải nghiệm đọc viết mượt mà hơn |
| 1.4.2 | Tích hợp | ✅ | Tất cả (Google Drive, AO3, Wattpad, AI image API) |
| 1.4.3 | Migration | ✅ | Đúng, hỗ trợ tất cả định dạng |
| 1.4.4 | Con người | ✅ | Người đang dùng sẵn nền tảng khác |
| 1.4.5 | Pháp lý/IP | ✅ | Có thể, cần T&C |

---

## PHẦN 2: ĐỐI THỦ & THỊ TRƯỜNG
| ID | Đối thủ | Status | Trả lời |
|:--|:--|:--:|:--|
| 2.1 | Tool khác | ✅ | Có quan sát |
| 2.2 | Campfire Write | ✅ | Đơn giản hơn, khoảng 7 module |
| 2.3 | Scrivener | ✅ | Research đẩy vào bên phải màn hình viết |
| 2.4 | AO3/Wattpad | ✅ | Tagging tốt + community engagement |
| 2.5 | AI Manga tools | ✅ | Muốn gen khung truyện map với chapter |
| 2.6 | Điểm khác biệt | ✅ | Viết là chính, AI chỉ gen minh họa. Có text-to-speech |

---

## PHẦN 3: MVP & TƯƠNG LAI
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 3.1 | Core 3 MVP | ✅ | Viết + Manga panel + Research tree |
| 3.2 | Must-have | ✅ | Editor, Character profile, Timeline, Version history, Reading platform |
| 3.3 | Phase 2 | ✅ | Marketplace cho truyện |
| 3.4 | Scale | ✅ | 1000 users năm 1 |
| 3.5 | AI mở rộng | ✅ | Tóm tắt chapter (đăng bài) |

---

## PHẦN 4: TÍNH NĂNG

### 4.1 Editor
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 4.1.1 | Loại editor | ✅ | Tất cả. Nhiều font và theme |
| 4.1.2 | Focus mode | ✅ | Có |
| 4.1.3 | Word count goal | ✅ | Không |
| 4.1.4 | Offline | ✅ | Có |
| 4.1.5 | Autosave | ✅ | Mỗi 1 phút |

### 4.2 Research Storage
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 4.2.1 | Cấu trúc | ✅ | Thư mục + database |
| 4.2.2 | Loại nội dung | ✅ | Tất cả (text, ảnh, trích dẫn, link, PDF) |
| 4.2.3 | Hiển thị khi viết | ✅ | Split screen thu phóng được, thay đổi vị trí |
| 4.2.4 | Full-text search | ✅ | Có |
| 4.2.5 | Tag & filter | ✅ | Có |

### 4.3 Publish
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 4.3.1 | Export format | ✅ | Tất cả |
| 4.3.2 | AO3 publish | ✅ | Chưa (phase sau) |
| 4.3.3 | Schedule | ✅ | Chưa, khi làm profile tác giả |

### 4.4 Reading Platform
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 4.4.1 | Browse & filter | ✅ | Đúng, nhiều filter |
| 4.4.2 | UI đọc | ✅ | Tùy tác giả chọn |
| 4.4.3 | Tương tác | ✅ | Có tất cả |
| 4.4.4 | Library cá nhân | ✅ | Có |
| 4.4.5 | Trả phí | ✅ | Coin, từng chương/cả truyện, Apple Pay |
| 4.4.6 | Moderation | ✅ | Duyệt ngẫu nhiên + report system |

### 4.5 AI Gen Manga
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 4.5.1 | Input | ✅ | Chọn từng đoạn |
| 4.5.2 | Style | ✅ | Chọn hoặc import mẫu |
| 4.5.3 | Panel layout | ✅ | Kéo thả chỉnh |
| 4.5.4 | Chỉnh sửa sau gen | ✅ | Phase 2 |
| 4.5.5 | Text bubble & SFX | ✅ | Có |
| 4.5.6 | Character consistency | ✅ | Upload reference/character sheet |
| 4.5.7 | Chi phí AI | ✅ | Writer mua gói hoặc trả theo usage |
| 4.5.8 | Bản quyền AI art | ✅ | Có, đánh dấu là AI |

---

## PHẦN 5: TÍCH HỢP & IMPORT
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 5.1 | Import Docs/Word | ✅ | Có thể, giữ định dạng gốc |
| 5.2 | Import Notion/Obsidian | ✅ | Có nhưng chưa biết cách |
| 5.3 | AO3 API | ✅ | Export HTML |
| 5.4 | Cloud storage | ✅ | Lưu server app |
| 5.5 | AI Image API | ✅ | Thử rồi chọn |

---

## PHẦN 6: KỸ THUẬT
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 6.1 | Nền tảng | ✅ | Web, desktop, máy tính bảng, điện thoại |
| 6.2 | Scale | ✅ | MVP 100, scale 10.000 sau 1 năm |
| 6.3 | Phân quyền | ✅ | Beta reader = Reader premium (tác giả set quyền) |
| 6.4 | Bảo mật | ✅ | Bảo mật, server tối ưu |
| 6.5 | Giao diện | ✅ | Custom font, theme |
| 6.6 | Storage ảnh | ✅ | Nén lưu S3, giới hạn per user |

---

## PHẦN 7: BÁO CÁO
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 7.1 | Thống kê writer | ✅ | GitHub-style calendar + AI token + storage burned |
| 7.2 | Thống kê fic | ✅ | Có |
| 7.3 | Admin report | ✅ | User active, top truyện, revenue, chi phí AI |

---

## PHẦN 8: NGÂN SÁCH & TIMELINE
| ID | Mục | Status | Trả lời |
|:--|:--|:--:|:--|
| 8.1 | Ngân sách | ✅ | Chưa rõ, cần dự toán (xem research file) |
| 8.2 | Timeline | ✅ | Chưa biết |
| 8.3 | Phases | ✅ | Phase 1: MVP, Phase 2: Marketplace |
| 8.4 | PM | ✅ | Tôi (stakeholder) |
| 8.5 | Liên lạc | ✅ | Không cần care |

---

## ud83dudca1 Key Insights

1. **Pain point chính:** Đổi qua lại giữa nhiều app — giải pháp: tích hợp tất cả trong 1 nơi
2. **Viết là chính**, AI chỉ minh họa — không phụ thuộc AI như NovelAI
3. **Beta reader = Reader premium** (thiết kế đơn giản, không cần role riêng)
4. **7 worldbuilding modules** (không 17 như Campfire)
5. **Split screen** viết + research (thu phóng được)
6. **Tính năng mới phát sinh:** Đa ngôn ngữ, tự động dịch, text-to-speech
7. **Monetization:** Writer trả AI gen + theme; Reader trả coin/VIP
8. **Dự toán MVP:** ~$187K (~₫4.5B), không tính AI gen ảnh (writer chịu)

---
*Ghi chú: ⬜ = Chờ. ✅ = Đã xác nhận. | Link research: docs-BA/Research/research-fanfic-webtoon-platform-20260410.md*
