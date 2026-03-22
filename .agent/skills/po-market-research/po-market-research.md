---
name: po-market-research
description: |
  Hướng dẫn thực hiện Market Research theo quy trình của một Senior Product Owner (PO). Sử dụng skill này khi người dùng muốn: nghiên cứu thị trường cho sản phẩm mới hoặc tính năng mới, phân tích đối thủ cạnh tranh, xác định nhu cầu người dùng, lập báo cáo thị trường, hoặc chuẩn bị dữ liệu để viết PRD/Product Strategy. Trigger khi người dùng đề cập đến: "market research", "nghiên cứu thị trường", "phân tích thị trường", "competitor analysis", "user research", "product discovery", hoặc bất kỳ yêu cầu nào liên quan đến việc hiểu thị trường trước khi xây dựng sản phẩm.
---

# PO Market Research Skill

Quy trình Market Research chuẩn của một Senior Product Owner, từ việc xác định mục tiêu đến xuất ra các deliverable có thể dùng trực tiếp để ra quyết định sản phẩm.

---

## Tổng quan quy trình

```
INPUT → [1. Define] → [2. Desk Research] → [3. User Research] → [4. Competitor Analysis] → [5. Synthesis] → [6. Validate] → OUTPUT
```

Tổng thời gian ước tính: 1–3 tuần tùy scope.

---

## INPUT cần có trước khi bắt đầu

Trước khi làm bất kỳ bước nào, hãy thu thập đủ các thông tin sau:

| Input | Mô tả | Ví dụ |
|---|---|---|
| **Problem Statement** | Vấn đề cần giải quyết là gì? | "Tỉ lệ churn của user sau 7 ngày lên đến 60%" |
| **Business Goal** | Mục tiêu kinh doanh kỳ vọng | "Tăng retention lên 40% trong Q3" |
| **Scope** | Phạm vi nghiên cứu | Thị trường VN, segment SME, ngành F&B |
| **Timeline** | Thời hạn cần kết quả | Báo cáo xong trước 15/4 |
| **Budget/Resource** | Nguồn lực có sẵn | 2 người, không có budget user testing |
| **Key Stakeholders** | Ai cần đọc kết quả này? | CPO, Head of Sales, Engineering Lead |

> ⚠️ **Nếu thiếu Problem Statement hoặc Business Goal, DỪNG LẠI** và làm rõ với stakeholder trước. Đây là lỗi phổ biến nhất khiến market research không có giá trị.

---

## BƯỚC 1 — Define Research Questions (Ngày 1–2)

### Mục tiêu
Chuyển Business Goal thành các câu hỏi nghiên cứu cụ thể, có thể trả lời được.

### Cách thực hiện

**1.1. Xác định Research Objectives**
Dùng framework SMART:
- Specific: Câu hỏi phải rõ ràng, không mơ hồ
- Measurable: Trả lời được bằng số hoặc insight cụ thể
- Actionable: Kết quả dẫn đến quyết định sản phẩm
- Relevant: Liên quan đến Business Goal
- Time-bound: Có thể trả lời trong timeline

**1.2. Phân loại câu hỏi theo 3 nhóm**

```
🏦 MARKET QUESTIONS (Thị trường)
  - Thị trường có quy mô bao nhiêu? (TAM/SAM/SOM)
  - Xu hướng tăng trưởng trong 2–3 năm tới?
  - Các phân khúc khách hàng chính là gì?

👤 USER QUESTIONS (Người dùng)
  - Người dùng đang gặp vấn đề gì?
  - Hành vi hiện tại của họ là gì?
  - Họ sẵn sàng trả bao nhiêu?

🆚 COMPETITIVE QUESTIONS (Cạnh tranh)
  - Ai đang giải quyết vấn đề này?
  - Điểm mạnh/yếu của từng đối thủ?
  - Khoảng trống thị trường (gap) là gì?
```

**1.3. Prioritize Questions**
Sắp xếp theo ma trận: Impact (cao/thấp) × Effort to Answer (dễ/khó). Tập trung vào góc phần tư High Impact + Low Effort trước.

### OUTPUT của Bước 1
- [ ] Research Question List (5–10 câu hỏi đã ưu tiên)
- [ ] Research Plan: ai làm gì, dùng phương pháp nào, timeline
- [ ] Sign-off từ stakeholder chính

---

## BƯỚC 2 — Desk Research / Secondary Research (Ngày 3–6)

### Mục tiêu
Thu thập dữ liệu có sẵn để trả lời nhanh các Market Questions và xây nền tảng trước khi làm primary research.

### Nguồn dữ liệu theo thứ tự ưu tiên

**Tier 1 — Internal Data (luôn bắt đầu đây)**
- Analytics: Google Analytics, Mixpanel, Amplitude
- CRM data: Salesforce, HubSpot
- Support tickets, NPS surveys đã có
- Sales call recordings / notes

**Tier 2 — Industry Reports**
- Báo cáo từ: Statista, Nielsen, McKinsey, Gartner, IDC
- Báo cáo ngành VN: FiinGroup, Vietnam Report, VIRAC
- Nghiên cứu từ VC/PE: Jungle Ventures, Do Ventures, Mekong Capital

**Tier 3 — Open Sources**
- Google Trends, SimilarWeb, App Annie/data.ai
- LinkedIn insights, Facebook Audience Insights
- Reddit, Quora, ProductHunt reviews
- App Store / Play Store reviews của đối thủ
- Job postings của đối thủ (tiết lộ hướng đi sản phẩm)

### Cách phân tích

Dùng framework **PESTLE** để cấu trúc insight:
- **P**olitical: Chính sách, quy định pháp lý liên quan
- **E**conomic: Tình hình kinh tế, sức mua, lạm phát
- **S**ocial: Xu hướng hành vi, nhân khẩu học
- **T**echnological: Công nghệ mới, adoption rate
- **L**egal: Luật bảo vệ dữ liệu, giấy phép ngành
- **E**nvironmental: Yếu tố môi trường nếu liên quan

### OUTPUT của Bước 2
- [ ] Market Sizing document (TAM/SAM/SOM với nguồn dẫn chứng)
- [ ] PESTLE Analysis
- [ ] Key Trends Report (top 5–7 xu hướng quan trọng)
- [ ] Data gaps list (câu hỏi nào chưa trả lời được, cần primary research)

---

## BƯỚC 3 — User Research / Primary Research (Ngày 5–12)

### Mục tiêu
Hiểu sâu nhu cầu, hành vi, và pain points thực sự của người dùng mục tiêu.

### Chọn phương pháp phù hợp

| Phương pháp | Khi nào dùng | Số lượng | Thời gian |
|---|---|---|---|
| **In-depth Interview** | Cần hiểu sâu "why" | 8–12 người | 30–60 phút/người |
| **Survey** | Cần validate ở scale lớn | 100–500+ | 5–10 phút/survey |
| **Usability Test** | Đánh giá prototype/flow | 5–8 người | 45–60 phút |
| **Contextual Inquiry** | Quan sát hành vi thực tế | 4–6 người | 1–2 giờ |
| **Diary Study** | Nghiên cứu hành vi theo thời gian | 10–20 người | 1–2 tuần |

> 💡 **Rule of thumb của Senior PO:** Luôn bắt đầu với 5–8 in-depth interviews. Sau 5 cuộc phỏng vấn, 80% pattern đã lộ ra (Nielsen's Law). Đừng phỏng vấn 50 người trước khi có insight.

### Thiết kế Interview Guide (cho In-depth Interview)

**Cấu trúc 60 phút:**
```
[0–5 phút]   Warm-up: Giới thiệu, context, xin phép ghi âm
[5–15 phút]  Background: Công việc, thói quen liên quan đến domain
[15–40 phút] Core questions: Khai thác pain points, hành vi hiện tại
[40–55 phút] Reaction: Show solution/concept (nếu có), lấy feedback
[55–60 phút] Wrap-up: Câu hỏi họ muốn hỏi lại, referral
```

**5 câu hỏi vàng không thể thiếu:**
1. "Hãy kể cho tôi nghe lần gần nhất bạn gặp vấn đề [X]?"
2. "Hiện tại bạn đang xử lý vấn đề đó như thế nào?"
3. "Điều gì khiến bạn khó chịu nhất với cách đang làm hiện tại?"
4. "Nếu có một giải pháp lý tưởng, nó sẽ trông như thế nào?"
5. "Bạn sẵn sàng trả bao nhiêu cho giải pháp đó? Tại sao?"

**Những sai lầm cần tránh:**
- ❌ Hỏi "Bạn có thích tính năng X không?" → Leading question
- ❌ Hỏi về tương lai: "Bạn sẽ dùng sản phẩm này không?" → Không đáng tin
- ✅ Hỏi về quá khứ và hiện tại: "Bạn đã làm gì khi..."

### Phân tích kết quả User Research

**Affinity Mapping:**
1. Ghi mỗi insight ra sticky note riêng biệt
2. Nhóm các sticky note có liên quan lại với nhau
3. Đặt tên cho từng nhóm (themes)
4. Đếm frequency: theme nào xuất hiện nhiều nhất = pain point lớn nhất

**Tạo User Personas (2–3 personas tối đa):**
```
Persona Template:
- Tên & ảnh đại diện (fictional nhưng realistic)
- Demographics: tuổi, nghề nghiệp, thu nhập, location
- Goals: họ muốn đạt gì?
- Pain points: đang bị cản trở bởi gì?
- Behaviors: thói quen liên quan đến domain
- Quote đại diện (từ interview thực tế)
- Technology comfort level
```

**Jobs-to-be-Done (JTBD) Framework:**
```
When [situation],
I want to [motivation/goal],
So I can [expected outcome].

Ví dụ:
When tôi cần gửi báo cáo tháng cho sếp,
I want to tổng hợp data từ nhiều nguồn nhanh chóng,
So I can có thêm thời gian phân tích thay vì copy-paste.
```

### OUTPUT của Bước 3
- [ ] Interview notes/recordings (đã được xử lý, ẩn danh nếu cần)
- [ ] Affinity Map
- [ ] 2–3 User Personas
- [ ] JTBD Statements (top 3–5)
- [ ] Key Insights summary (top 10 insights có evidence)

---

## BƯỚC 4 — Competitor Analysis (Ngày 7–10)

### Mục tiêu
Hiểu rõ competitive landscape, tìm differentiation opportunity.

### Xác định đối thủ theo 3 tầng

```
Direct Competitors    → Cùng giải quyết vấn đề, cùng segment
                         (e.g., Grab vs. Gojek)

Indirect Competitors  → Giải quyết cùng vấn đề, khác cách
                         (e.g., Grab vs. xe ôm truyền thống)

Potential Disruptors  → Chưa cạnh tranh trực tiếp, nhưng có thể
                         (e.g., Grab vs. xe tự lái)
```

Chọn 3–5 direct competitors và 2–3 indirect để phân tích sâu.

### Framework phân tích: Competitor Canvas

Với mỗi đối thủ, đánh giá theo 8 chiều:

**1. Product & Features**
- Tính năng core là gì?
- USP (Unique Selling Proposition) của họ?
- Tính năng nào đang beta/roadmap? (xem job postings, changelog, blog)

**2. Pricing Model**
- Freemium / Subscription / Usage-based / One-time?
- Pricing tiers và target segment của từng tier?
- Có free trial không? Điều kiện gì?

**3. User Experience**
- Onboarding flow mất bao lâu?
- Mobile-first hay Desktop-first?
- Điểm gây friction lớn nhất là gì? (đọc 1-star reviews)

**4. Go-to-Market**
- Kênh acquisition chính: SEO, paid ads, sales-led, PLG?
- Target segment rõ nhất của họ?

**5. Traction & Scale**
- Monthly active users (ước tính từ SimilarWeb, app ranking)
- Tốc độ tăng trưởng (Google Trends, LinkedIn employee count)
- Funding stage và investors

**6. Strengths (từ góc nhìn user)**
- Đọc 4–5 star reviews: user khen điều gì nhiều nhất?

**7. Weaknesses (từ góc nhìn user)**
- Đọc 1–2 star reviews: user phàn nàn điều gì?
- Xem câu hỏi trên Reddit, forum: gap nào chưa được giải quyết?

**8. Strategic Direction**
- Họ đang đi về đâu? (xem keynote, blog CEO, job postings tech stack)

### Tổng hợp: Competitive Matrix

Tạo bảng so sánh theo các tiêu chí quan trọng nhất với người dùng:

| Tiêu chí | Sản phẩm của mình | Competitor A | Competitor B | Competitor C |
|---|---|---|---|---|
| Ease of use | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Pricing | Free | $29/mo | $19/mo | Free |
| Mobile app | ✅ | ✅ | ❌ | ✅ |
| Vietnamese language | ✅ | ❌ | ❌ | ✅ |
| ... | ... | ... | ... | ... |

### Tìm Strategic Gap

Sau khi có matrix, tìm:
- **Blue Ocean opportunity**: Điều gì chưa ai làm mà user cần?
- **Table stakes**: Điều gì mọi người đều có, mình PHẢI có?
- **Differentiator**: Điều gì mình có thể làm tốt hơn hẳn?

### OUTPUT của Bước 4
- [ ] Competitor Profile cho từng đối thủ (1 trang/đối thủ)
- [ ] Competitive Matrix
- [ ] Strategic Gap Analysis
- [ ] Positioning Map (2×2 matrix với 2 trục quan trọng nhất)

---

## BƯỚC 5 — Synthesis & Insight Generation (Ngày 11–14)

### Mục tiêu
Kết hợp tất cả dữ liệu thành insights có thể dẫn đến quyết định sản phẩm.

### Framework tổng hợp: Opportunity Canvas

Với mỗi opportunity được xác định, trả lời:

```
PROBLEM
└── Vấn đề là gì? (từ User Research)
└── Ai đang gặp vấn đề này? (Persona nào?)
└── Severity: 1–5 (bao nhiêu người, bao thường xuyên, bao đau?)

SOLUTION SPACE
└── Cách giải quyết hiện tại của user là gì?
└── Competitor giải quyết ra sao?
└── Gap còn lại là gì?

BUSINESS FIT
└── Phù hợp với strategy công ty không?
└── Tiềm năng doanh thu / growth?
└── Khả thi về mặt kỹ thuật?

RISK
└── Assumption lớn nhất chưa được validate?
└── Điều gì có thể sai?
```

### Prioritization: ICE Score

Với mỗi opportunity, chấm điểm 1–10:
- **I**mpact: Nếu giải quyết được, tác động lớn thế nào?
- **C**onfidence: Mình tự tin thế nào về impact dự đoán?
- **E**ase: Dễ thực hiện thế nào?

**ICE Score = (Impact × Confidence × Ease) / 3**

Rank và chọn top 3–5 opportunities để đưa vào roadmap.

### Viết Key Findings

Mỗi finding phải có cấu trúc:
```
[INSIGHT]: Câu phát biểu ngắn gọn
[EVIDENCE]: Số liệu hoặc quote từ research
[IMPLICATION]: Điều này có nghĩa gì cho sản phẩm?
[RECOMMENDATION]: Hành động đề xuất cụ thể
```

Ví dụ:
```
[INSIGHT]: 70% SME owner tại VN quản lý kho hàng bằng Excel
[EVIDENCE]: 7/10 interviews; SimilarWeb cho thấy search "excel quản lý kho" tăng 45% YoY
[IMPLICATION]: User đã quen workflow Excel, migration barrier cao
[RECOMMENDATION]: Cần có tính năng import từ Excel trong MVP
```

### OUTPUT của Bước 5
- [ ] Top 10 Key Findings (theo format trên)
- [ ] Opportunity List với ICE Score
- [ ] Prioritized Recommendation List
- [ ] Updated Personas (nếu có thông tin mới)

---

## BƯỚC 6 — Validate & Share (Ngày 13–15)

### Mục tiêu
Đảm bảo kết quả research đáng tin cậy và được stakeholder đồng thuận.

### Checklist validation trước khi present

**Data Quality:**
- [ ] Mỗi insight có ít nhất 2 nguồn độc lập xác nhận (triangulation)
- [ ] Sample size đủ (ít nhất 5 interviews; survey ít nhất 100 responses)
- [ ] Không có selection bias rõ ràng trong sample
- [ ] Nguồn dữ liệu thứ cấp không quá 2 năm tuổi

**Logic Quality:**
- [ ] Kết luận xuất phát từ data, không phải từ giả thuyết ban đầu
- [ ] Đã xem xét alternative explanations
- [ ] Recommendations phù hợp với Business Goal ban đầu

**Completeness:**
- [ ] Đã trả lời tất cả Research Questions từ Bước 1
- [ ] Các câu hỏi chưa trả lời được đã được note rõ ràng
- [ ] Risk và uncertainty đã được acknowledge

### Cấu trúc Market Research Report

```
1. Executive Summary (1 trang)
   - 3 insights quan trọng nhất
   - Top recommendation
   - Next steps

2. Research Methodology
   - Câu hỏi nghiên cứu
   - Phương pháp và sample
   - Limitations

3. Market Overview
   - Market size (TAM/SAM/SOM)
   - Key trends
   - PESTLE highlights

4. User Insights
   - Personas
   - Key pain points và JTBD
   - Behavioral insights

5. Competitive Landscape
   - Competitor profiles
   - Competitive matrix
   - Strategic gaps

6. Synthesis & Opportunities
   - Key findings
   - Opportunity prioritization
   - Recommendations

7. Appendix
   - Raw data, interview notes
   - Full methodology
   - Sources và references
```

### Presenting to Stakeholders

**Nguyên tắc BLUF (Bottom Line Up Front):**
Mở đầu bằng kết luận, không kể câu chuyện từ đầu. Stakeholder bận, họ cần biết "so what?" trước.

**Anticipate pushback:**
- "Data này có đại diện không?" → Chuẩn bị methodology defense
- "Competitor X thì sao?" → Đảm bảo đã cover đủ
- "Budget để làm theo recommendation là bao nhiêu?" → Có rough estimate

### OUTPUT cuối cùng (Deliverables)
- [ ] **Market Research Report PPTX** (slide deck đầy đủ — xem hướng dẫn bên dưới)
- [ ] **One-pager Summary** cho leadership (không quá 1 trang A4)
- [ ] **Opportunity Backlog** (import được vào Jira/Linear/Notion)
- [ ] **Research Repository** (lưu raw data để reference sau)
- [ ] **Next Steps Document** (ai làm gì, deadline cụ thể)

---

## OUTPUT PPTX — Market Research Slide Deck

Khi được yêu cầu tạo file PPTX Market Research, hãy tạo một slide deck **10 slides** theo cấu trúc chuẩn dưới đây bằng PptxGenJS.

### Cấu trúc 10 slides

| Slide | Nội dung | Mục đích |
|---|---|---|
| 1 | **Title Slide** | Tên sản phẩm/thị trường, author, date, version |
| 2 | **Table of Contents** | 6 sections với mô tả ngắn |
| 3 | **Executive Summary** | 3 key findings + top recommendation |
| 4 | **Market Overview** | TAM/SAM/SOM + key trends + growth rate |
| 5 | **User Personas** | 2–3 persona cards với goals, pains, quote |
| 6 | **Jobs-to-be-Done + Key Insights** | JTBD statements + top insights |
| 7 | **Competitive Analysis** | Competitive matrix + strategic gap |
| 8 | **Opportunity Prioritization** | ICE Score table + prioritized opportunities |
| 9 | **Key Findings & Recommendations** | Finding cards (Insight → Evidence → Implication → Recommendation) |
| 10 | **Next Steps** | Timeline hành động theo tuần + owner |

### Design System (màu palette chuẩn)

```javascript
const C = {
  navy:    "1E2761",   // Màu chủ đạo — header, dark slides
  iceBlue: "CADCFC",  // Màu phụ — subtitle, muted text
  white:   "FFFFFF",
  accent:  "4FC3F7",  // Accent xanh nhạt — highlight, borders
  light:   "F0F4FF",  // Background card sáng
  gray:    "64748B",  // Body text muted
  green:   "10B981",  // Positive / Recommendation
  orange:  "F59E0B",  // Warning / Medium priority
  red:     "EF4444",  // High priority / Pain points
};
```

**Nguyên tắc layout:**
- Dark slides (navy background): Title, Executive Summary, Key Findings, Next Steps
- Light slides (white/light background): TOC, Market Overview, Personas, Competitive
- Header bar navy (`h: 0.9"`) với section label trên mỗi slide
- Left accent bar (`w: 0.06–0.07"`) dùng màu accent cho cards
- Shadow nhẹ (`opacity: 0.12`) cho tất cả cards

### Lưu ý kỹ thuật PptxGenJS

```javascript
// LUÔN dùng factory function cho shadow — không reuse object
const makeShadow = () => ({
  type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12
});

// KHÔNG dùng # trong hex color
color: "1E2761"   // ✅
color: "#1E2761"  // ❌

// Dùng margin: 0 khi cần align text với shapes
slide.addText("Title", { x: 0.4, y: 0.2, w: 9, h: 0.5, margin: 0 });
```

### Placeholder convention

Tất cả nội dung cần user điền vào dùng format `[Mô tả placeholder]`, ví dụ:
- `[Tên Sản Phẩm / Thị Trường]`
- `[Insight quan trọng nhất từ research]`
- `[Data/quote từ interview]`

### Cách tạo PPTX

1. Đọc skill này và nội dung research đã có
2. Dùng PptxGenJS để generate file (cài với `npm install -g pptxgenjs`)
3. Output file vào thư mục phù hợp trong project (ví dụ: `./outputs/market-research-[tên].pptx`)
4. Convert sang PDF để QA visual nếu có LibreOffice
5. Check từng slide, fix issues nếu có

---

## Quick Reference: Khi nào dùng phương pháp nào?

| Tình huống | Phương pháp ưu tiên |
|---|---|
| Idea mới hoàn toàn, chưa biết gì | Desk Research + 5–8 Interviews |
| Có hypothesis cần validate | Survey 100+ người |
| Muốn hiểu tại sao churn cao | Exit interviews + Data analysis |
| Chuẩn bị launch sang market mới | PESTLE + Competitor Analysis + Interviews |
| Roadmap planning Q | ICE Scoring + Stakeholder alignment |
| Design đang có, cần feedback | Usability Testing |

---

## Dấu hiệu Market Research tốt vs. kém

| ✅ Research tốt | ❌ Research kém |
|---|---|
| Kết luận có thể sai được (falsifiable) | Kết luận kiểu "user muốn sản phẩm tốt hơn" |
| Có evidence cụ thể cho từng insight | Insight dựa trên cảm tính |
| Acknowledge limitations rõ ràng | Overpromise về độ chắc chắn |
| Dẫn đến quyết định cụ thể | Stakeholder đọc xong không biết làm gì |
| Hoàn thành đúng timeline | Kéo dài vô thời hạn vì "cần thêm data" |

---

## Lưu ý quan trọng của Senior PO

> "Research không có nghĩa là tìm bằng chứng để confirm ý tưởng của mình. Research là tìm sự thật — kể cả khi sự thật đó là ý tưởng của mình sai."

> "Done is better than perfect. Một research 70% tốt hoàn thành đúng hạn có giá trị hơn research 100% hoàn thành sau khi team đã code xong."

> "Luôn hỏi: Nếu research này cho ra kết quả ngược lại, chúng ta có thay đổi quyết định không? Nếu không → đừng làm research đó."
