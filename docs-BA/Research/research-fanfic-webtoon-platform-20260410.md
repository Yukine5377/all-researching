# Research Tổng Hợp: Fanfic & Webtoon Platform
**Ngày:** 2026-04-10 | **Nguồn:** AI Research + Market Analysis

---

## 1. DỰ TOÁN NGÂN SÁCH

### Team phát triển (12 tháng MVP)
| Role | Lương/tháng | 12 tháng |
|:--|:--|:--|
| Tech Lead / Full-stack | $2,500 | $30,000 |
| Backend Engineer ×2 | $1,500 ×2 | $36,000 |
| Frontend Engineer | $1,500 | $18,000 |
| AI/ML Engineer | $2,000 | $24,000 |
| DevOps Engineer | $1,800 | $21,600 |
| **Tổng dev** | | **$129,600 (~₫3.1B)** |

### Chi phí vận hành

#### AI Gen ảnh (Flux Pro ~$0.055/ảnh)
| Quy mô | Ảnh/tháng | Chi phí/tháng |
|:--|:--|:--|
| MVP (100 users) | ~1,000 | $55 |
| Year 1 (10K users) | ~50,000 | $2,750 |

> **⚠️ Lưu ý:** Chi phí AI gen ảnh do **writer chịu** (mua gói/usage) — không phải platform. Platform chỉ trả hạ tầng.

#### Hạ tầng (AWS/S3/CDN)
| Quy mô | Chi phí/tháng |
|:--|:--|
| MVP (100 users) | ~$112 |
| Year 1 (10K users) | ~$819 |

#### API khác
| Dịch vụ | MVP | Year 1 |
|:--|:--|:--|
| Text-to-Speech (ElevenLabs) | $99/th | ~$720/th |
| Dịch (DeepL) | Free tier | ~$55/th |
| Stripe payment | 2.9% + $0.30/giao dịch | ~2.9% revenue |

### Tổng ngân sách
| Hạng mục | MVP | Year 1 Ops | Tổng Year 1 |
|:--|:--|:--|:--|
| Phát triển | $129,600 | — | $129,600 |
| Hạ tầng | $1,344 | $9,828 | $11,172 |
| API (TTS, Translate) | $1,200 | $8,600 | $9,800 |
| Payment fees | $7,200 | $29,000 | $36,200 |
| **Tổng** | | | **~$187K (~₫4.5B)** |

> **Chi phí AI gen ảnh KHÔNG tính vào** vì do writer chịu. Nếu platform muốn bao AI: +$330K/năm ở scale 10K users.

**Lever giảm chi phí:**
- Host Stable Diffusion local → tiết kiệm hàng trăm ngàn USD
- Google TTS thay ElevenLabs ($1.50/1M ký tự vs $99/tháng)
- Phase 1 bỏ TTS, add sau

---

## 2. DOMAIN RESEARCH: VIẾT FANFIC & WORLDBUILDING

### Phương pháp outline phổ biến
- **Snowflake Method**: Mở rộng từ 1 câu → tóm tắt → cảnh. Phù hợp writer cần cấu trúc
- **Save the Cat** (15 beats): Dễ áp dụng, phổ biến trong fanfic ngắn
- **Three-Act Structure**: Linh hoạt, phù hợp cả plotter và pantser
- **Chapter-by-chapter outline**: Phổ biến nhất trong fanfic (outline từng chương, không outline toàn bộ)

### Chuẩn fanfic
- **Chiều dài chapter**: 1,500–4,500 từ (sweet spot 3k–4k)
- **Tần suất đăng**: Chapter ngắn → đăng thường xuyên; chapter dài → đăng thưa
- **AO3 tag hierarchy**: Relationship (A/B format), Character tags, Archive Warnings, Additional Tags (tropes)
- **Trope phổ biến**: Enemies-to-Lovers, Hurt/Comfort, Fix-It, Soulmates AU, Forced Proximity, Slow Burn

### Worldbuilding cho AU fanfic
- **AU Bible**: Tài liệu ngắn ghi lại chỉnh sửa so với canon (bắt buộc cho nhất quán)
- **Canon baseline vs AU mods**: Mọi module cần 2 lớp: cái gốc + cái thay đổi
- **Character consistency**: Dù thay setting, nhân vật giữ tnh cách canon

---

## 3. MARKET RESEARCH: PHÂN TÍCH ĐỐI THỦ

| Platform | Core Features | Pricing | Điểm mạnh | Điểm yếu |
|:--|:--|:--|:--|:--|
| **Ellipsus** | Viết cộng tác, AO3 export, version control | Free | AI-free, bảo mật writer | Không có community/publish |
| **Wattpad** | Reading/writing community, paid stories | Freemium ($4.99–7.49/th) | 94M users, community mạnh | Chất lượng curation giảm, tool viết yếu |
| **AO3** | Fanfic archive, tagging, EPUB/PDF download | Free (nonprofit) | 17.2M+ works, no ads | Chỉ là archive, không có writing tools |
| **Webtoon** | Vertical scroll comics, monetization | Freemium | 170M+ MAU, creator payout | Chỉ visual, không có text writing |
| **Dashtoon** | Script-to-comic AI, character consistency | Free (100 img/day) + paid | Panel control tốt, 50/50 revenue | Chỉ gen visual, cần story input riêng |
| **NovelAI** | AI co-writing + image gen, Lorebook | $10–25/th | Privacy, anime-focused | Đắt, phụ thuộc AI |
| **Campfire Write** | 17 worldbuilding modules | $2–12/th | Sâu về canon management | Chỉ worldbuilding, không có community |

### Khoảng trống thị trường
**Không ai hiện tại kết hợp:**
1. Viết + Research storage + AI gen manga + Reading community trong 1 nơi
2. Worldbuilding tối ưu cho fanfic (không quá phức tạp như Campfire)
3. Pipeline: Viết → Nghiên cứu → AI gen manga → Đăng cộng đồng
4. Dual monetization: text (Wattpad-style) + visual (Webtoon-style)

### Target user
**Gen-Z/Millennial fanfic writers muốn:**
- Viết với worldbuilding tích hợp
- Lưu research mà không cần rời app
- AI gen minh họa manga/webtoon cho truyện
- Kiếm tiền từ cả text lJến visual
- Xây cộng đồng quanh tác phẩm

---

## 4. 7 MODULE WORLDBUILDING — SPEC CHI TIẾT

### Module 1: Characters
**Fields:** Canon name, source/fandom, canon traits, AU modifications, appearance, visual reference, linked ships
**Template:**
```
Ten: [Canon name]
Fandom: [Fandom]
Canon Traits: [bullet list]
AU Changes: [thay dổi trong fic nay]
Ships: [link sang Relationships]
Visual: [anh/link]
```
**UI:** Card + expandable panel + relationship web graph
**Link sang:** Relationships, Settings, Tags

---

### Module 2: Relationships
**Fields:** Character A + B, canon dynamic, AU shift, plot significance, tropes
**Template:**
```
Pairing: [A] + [B]
Canon Dynamic: [description]
Fic Development: [arc timeline]
Key Moments: [scene list]
Tension/Resolution: [conflict + resolve]
```
**UI:** Relationship matrix/graph, card view, timeline slider
**Link sang:** Characters, Timeline, Tags (ship tags cho AO3 export)

---

### Module 3: Settings/Locations
**Fields:** Tên, mô tả canon, AU rules, nhân vật hiện diện, institutions, lore
**Template:**
```
Location: [Ten]
Canon Version: [description]
AU Version: [thay dổi]
Key Scenes: [chuong/canh set o day]
World Rules: [magic, tech level, hierarchy]
```
**UI:** Cây phân cấp (continent → city → building), wiki-style, gallery mood board
**Link sang:** Characters, Magic/Rules, Timeline

---

### Module 4: Magic/Rules System
**Fields:** Tên hệ thống, canon rules, AU modifications, hard limits, power levels per character, consequences
**Template:**
```
System: [Ten]
Core Mechanic: [how it works]
Cost/Limitation: [restriction]
Canon vs AU: [difference]
Character Applications: [link profiles]
Banned/Allowed: [forbidden in fic]
```
**UI:** Decision tree / flowchart, reference card (rules at-a-glance)
**Link sang:** Characters, Settings, Timeline

---

### Module 5: Timelines
**Fields:** Canon events, fic divergence point, fic events, character ages, chapter-to-timeline map
**Template:**
```
Canon Baseline: [timeline nguyen tac]
Divergence: [diem re nhanh]
Fic Timeline:
  Nam X: [su kien]
  Chapter 5: [su kien fic]
Age Reference: [tuoi nhan vat]
```
**UI:** Horizontal scrolling timeline, parallel canon/fic tracks, branching tree at divergence
**Link sang:** Canon Reference, Relationships, Characters

---

### Module 6: Canon Reference
**Fields:** Fandom name, source links, canon character profiles, plot summary, key quotes, visual references
**Template:**
```
Fandom: [Ten + wiki link]
Source: [quyen/season]
Canon Summary: [overview]
Key Rules: [worldbuilding elements]
Important Scenes: [pivotal moments]
```
**UI:** Read-only wiki layout, diff view (canon vs fic side-by-side), PDF/link storage
**Link sang:** Tất cả modules (làm baseline reference)

---

### Module 7: Tags/Metadata
**Fields:** Tên fic, status, fandom tags, ship tags, content warnings, trope tags, rating (AO3 standard: G/T/M/E), summary 200 words
**Template:**
```
Title: [Ten fic]
Status: [Draft/Revised/Published]
Fandom: [tags]
Ships: [A/B format]
Content: [warnings]
Tropes: [freeform tags]
Rating: M
Summary: [200 words]
```
**UI:** Tag cloud, card metadata, bulk-export sang AO3/Wattpad format
**Link sang:** Tất cả modules (metadata tổng hợp)

---

### MVP vs Phase 2
| Phase | Modules |
|:--|:--|
| **MVP** | Characters, Timeline, Tags/Metadata |
| **Phase 2** | Relationships, Magic/Rules System, Settings, Canon Reference |

### Research Sidebar Integration
- Split screen trái (editor) + phải (research panel) thu phóng được
- Panel hiển thị: Character card, Timeline snippet, Magic rules, Settings description
- Full-text search + tag filter trong panel
- Màu tag: #character = xanh, #setting = lục, #magic = tím

---

## 5. IMPORT TỪ NOTION & OBSIDIAN

### Notion Import
**Phương thức:** OAuth 2.0 (user authorize app → exchange code → access token)
**Thư viện:** `@notionhq/client` (chính thức), `@interactive-inc/notion-client` (blocks-to-markdown)

**Luồng thực hiện:**
1. User click “Connect Notion” → OAuth flow
2. Fetch pages/databases đệ quy vía API
3. Queue import nếu nhiều trang (tránh rate limit 3 req/s)
4. Download ảnh ngay (URL Notion expire sau thời gian)
5. Transform blocks → Markdown → lưu vào research storage

**Giới hạn:**
- Notion API chỉ hỗ trợ 2 lớp nested pages
- Màu sắc, alignment bị mất khi convert
- Database relations/rollups cần fetch riêng

---

### Obsidian Import
**Phương thức:** Upload file `.zip` chứa vault → giải nén server-side → parse markdown
**Thư viện:** `gray-matter` (frontmatter), custom regex cho wikilinks

**Parse wikilinks:**
```js
/\[\[([^\[\]]+)\]\]/g  // bắt wikilink
// convert: [[NhanVat A]] → [NhanVat A](path/to/NhanVat-A.md)
```

**Luồng thực hiện:**
1. User upload `.zip` vault
2. Server giải nén, list tất cả `.md` files
3. Parse frontmatter (tags, aliases) bằng `gray-matter`
4. Convert wikilinks → standard markdown links
5. Preserve cấu trúc folder → tạo research tree tương ứng
6. Import ảnh kèm theo (nếu có trong zip)

**Giới hạn:**
- Wikilink resolve có thể sai khi có file trùng tên
- Plugin-specific syntax (Dataview, Kanban) không parse được
- Embedded queries bị loại bỏ

---

### Ưu tiên triển khai
| Giai đoạn | Feature |
|:--|:--|
| MVP | Obsidian import (upload zip, đơn giản hơn) |
| Phase 2 | Notion import (OAuth, phức tạp hơn) |

---

*File này tổng hợp kết quả research cho dự án Fanfic & Webtoon Platform. Cập nhật: 2026-04-10.*
