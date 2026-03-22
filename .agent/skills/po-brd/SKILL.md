---
name: po-brd
description: |
  Hướng dẫn viết Business Requirements Document (BRD) theo quy trình của một Senior Product Owner. Sử dụng skill này khi người dùng muốn: tạo tài liệu yêu cầu kinh doanh, trình bày cơ hội thị trường cho BOD/CEO, định nghĩa tầm nhìn sản phẩm, hoặc chuẩn bị nền tảng trước khi viết PRD/SRS. Trigger khi người dùng đề cập đến: "BRD", "business requirements", "yêu cầu kinh doanh", "market analysis", "product vision", "trình BOD", "pitch sản phẩm", hoặc bất kỳ yêu cầu nào về tài liệu trình bày cơ hội kinh doanh.
---

# PO Business Requirements Document (BRD) Skill

Quy trình viết BRD chuẩn – tài liệu đầu tiên trong vòng đời sản phẩm, dùng để thuyết phục BOD/leadership về cơ hội thị trường và tầm nhìn sản phẩm.

---

## Tổng quan

BRD (Business Requirements Document) là tài liệu cấp cao nhất, trả lời câu hỏi **"Tại sao chúng ta nên làm sản phẩm này?"** trước khi bắt đầu bất kỳ hoạt động kỹ thuật nào.

**Người viết**: Product Owner  
**Đối tượng đọc**: BOD, CEO, CPO, Investors  
**Thời điểm viết**: Giai đoạn Discovery, trước PRD

---

## INPUT cần có

| Input | Mô tả |
|---|---|
| **Problem Statement** | Vấn đề thị trường cần giải quyết |
| **Business Goal** | Mục tiêu kinh doanh kỳ vọng (KPIs) |
| **Market Data** | Số liệu thị trường, competitor insights |
| **Stakeholder Input** | Góc nhìn từ Sales, Marketing, Leadership |

---

## Cấu trúc BRD (15 sections)

### 1. Title & Document Info
- Tên sản phẩm / dự án
- Version, Author, Date, Status
- Người review & approve

### 2. Executive Summary (1 trang)
- Tóm tắt cơ hội thị trường
- Giải pháp đề xuất
- Expected business outcome

### 3. Business Problem Statement
- Vấn đề hiện tại là gì?
- Ai đang bị ảnh hưởng? Scale?
- Cost of inaction (nếu không làm thì sao?)

### 4. Business Goals & Success Metrics
Dùng framework OKR:
```
Objective: [Mục tiêu cấp cao]
  KR1: [Kết quả đo được 1]
  KR2: [Kết quả đo được 2]
  KR3: [Kết quả đo được 3]
```

### 5. Market Analysis
- Market size (TAM/SAM/SOM)
- Target segments
- Key trends (PESTLE nếu cần)

### 6. Competitive Analysis
- Direct competitors
- Indirect competitors
- Competitive advantage / differentiation

### 7. Product Vision & Scope
- Vision Statement: "For [target user] who [need], [Product] is a [category] that [key benefit]. Unlike [competitor], our product [differentiator]."
- In Scope vs. Out of Scope

### 8. Stakeholder Analysis
| Stakeholder | Role | Interest | Influence |
|---|---|---|---|

### 9. High-level Requirements
- Business requirements (KHÔNG phải technical)
- Dùng format: "The system shall..."
- Phân loại: Must Have / Should Have / Nice to Have

### 10. Assumptions & Dependencies
- Giả định kinh doanh
- Phụ thuộc vào team/hệ thống nào

### 11. Constraints
- Budget, Timeline, Resource
- Regulatory / Legal
- Technical constraints đã biết

### 12. Risk Assessment
| Risk | Probability | Impact | Mitigation |
|---|---|---|---|

### 13. Financial Overview
- Investment required (rough estimate)
- Expected ROI / Revenue impact
- Break-even timeline

### 14. Proposed Solution Overview
- High-level solution description
- Key capabilities cần có
- Technology direction (nếu đã biết)

### 15. Next Steps & Approval
- Decision needed từ BOD
- Timeline để bắt đầu
- Sign-off section

---

## OUTPUT PPTX — BRD Slide Deck (15 slides)

Khi được yêu cầu tạo file PPTX BRD, tạo 15 slides:

| Slide | Nội dung |
|---|---|
| 1 | Title & Document Info |
| 2 | Table of Contents |
| 3 | Executive Summary |
| 4 | Business Problem Statement |
| 5 | Business Goals & OKRs |
| 6 | Market Analysis (TAM/SAM/SOM + Trends) |
| 7 | Competitive Landscape |
| 8 | Product Vision & Scope |
| 9 | Stakeholder Map |
| 10 | High-level Requirements (MoSCoW) |
| 11 | Assumptions & Dependencies |
| 12 | Risk Assessment Matrix |
| 13 | Financial Overview |
| 14 | Proposed Solution Overview |
| 15 | Next Steps & Approval |

### Cách tạo PPTX
```bash
node scripts/generate-brd.js
# Output: outputs/brd-[tên-sản-phẩm].pptx
```

---

## Checklist trước khi submit BRD

- [ ] Problem được định nghĩa rõ, có evidence
- [ ] Goals có KPIs đo được
- [ ] Competitor analysis có ít nhất 3 đối thủ
- [ ] ROI estimate có số cụ thể (dù approximate)
- [ ] Risk assessment có mitigation plan
- [ ] Đã review với Sales/Marketing
- [ ] BOD có đủ thông tin để ra quyết định Go/No-go
