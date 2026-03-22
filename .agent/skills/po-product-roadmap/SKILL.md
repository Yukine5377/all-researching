---
name: po-product-roadmap
description: |
  Hướng dẫn lập Product Roadmap theo quy trình của một Senior Product Owner. Sử dụng skill này khi người dùng muốn: lập kế hoạch phát triển sản phẩm dài hạn, trình bày roadmap cho stakeholders hoặc dev team, prioritize features theo thời gian, hoặc chuẩn bị quarterly planning. Trigger khi người dùng đề cập đến: "product roadmap", "lộ trình sản phẩm", "roadmap", "quarterly plan", "feature planning", "kế hoạch phát triển", "OKR roadmap", hoặc bất kỳ yêu cầu về lập kế hoạch tính năng theo timeline.
---

# PO Product Roadmap Skill

Quy trình lập Product Roadmap chuẩn – công cụ chiến lược thể hiện hướng đi sản phẩm theo thời gian, align giữa business goals và technical execution.

---

## Tổng quan

Product Roadmap trả lời câu hỏi **"Chúng ta sẽ xây dựng gì, theo thứ tự nào, và tại sao?"**

**Người viết**: Product Owner  
**Đối tượng đọc**: Stakeholders (BOD, CPO), DEV Team, Sales, Marketing  
**Thời điểm viết**: Sau BRD, trước sprint planning

---

## Các loại Roadmap

| Loại | Horizon | Audience | Độ chi tiết |
|---|---|---|---|
| **Strategic Roadmap** | 12–18 tháng | BOD, Investors | Cao cấp, themes |
| **Product Roadmap** | 3–6 tháng | Stakeholders | Features + timelines |
| **Release Roadmap** | 4–8 tuần | DEV, Tester | Epics + stories |

---

## Framework ưu tiên

### Framework 1: RICE Score
```
Reach × Impact × Confidence / Effort
```

### Framework 2: MoSCoW
- **M**ust Have: Core features, MVP không thể thiếu
- **S**hould Have: Quan trọng nhưng không blocking
- **C**ould Have: Nice to have
- **W**on't Have (this quarter): Explicitly excluded

### Framework 3: Now / Next / Later
```
NOW (0–2 tháng)  → Đang làm / sắp làm
NEXT (2–4 tháng) → Đã commit, đang chuẩn bị
LATER (4+ tháng) → Đã plan, chưa commit
```

---

## Cấu trúc Roadmap Document

### 1. Roadmap Header
- Product name, version, last updated
- Quarter/Year scope
- Author & reviewers

### 2. Vision & Strategy Context
- Product vision (1 câu)
- Business goals Q này phục vụ
- Key OKRs được support

### 3. Theme-based Organization
Tổ chức features theo themes (không phải danh sách rời):
```
Theme 1: Acquisition (thu hút user mới)
  Feature A, Feature B
Theme 2: Retention (giữ chân user)
  Feature C, Feature D
Theme 3: Revenue (tăng doanh thu)
  Feature E
```

### 4. Timeline View
Chia theo quarters hoặc months:
```
Q1  Q2  Q3  Q4
[Feature A   ]
      [Feature B   ]
            [Feature C   ]
```

### 5. Feature Detail Card
Với mỗi feature lớn:
```
Feature: [Tên]
Theme: [Theme nào]
Objective: [Tại sao cần làm]
Success Metric: [Đo bằng gì]
Estimated Effort: [S/M/L/XL]
Dependencies: [Cần gì trước]
Owner: [Team/Person]
```

### 6. Dependencies & Milestones
- Các dependencies giữa features
- Key milestones (launch dates, reviews)
- External dependencies (partners, APIs)

### 7. Resource Allocation
- Team bandwidth per quarter
- Resource gaps cần hire/contract

### 8. Risks & Assumptions
- Assumption lớn trong roadmap
- Risk nếu features bị delay

---

## OUTPUT PPTX — Roadmap Slide Deck (15 slides)

| Slide | Nội dung |
|---|---|
| 1 | Title Slide |
| 2 | Table of Contents |
| 3 | Vision & Strategy Context |
| 4 | Business Goals & OKRs |
| 5 | Roadmap Overview (Now/Next/Later) |
| 6 | Theme 1: [Acquisition / Core Feature] |
| 7 | Theme 2: [Retention / UX] |
| 8 | Theme 3: [Revenue / Growth] |
| 9 | Timeline View (Q by Q) |
| 10 | Feature Prioritization (RICE/MoSCoW) |
| 11 | Resource Allocation |
| 12 | Dependencies & Milestones |
| 13 | Risks & Assumptions |
| 14 | Out of Scope (Won't Do) |
| 15 | Next Steps & Review Cadence |

### Cách tạo PPTX
```bash
node scripts/generate-roadmap.js
# Output: outputs/roadmap-[tên-sản-phẩm].pptx
```

---

## Nguyên tắc Roadmap của Senior PO

> "Roadmap là cam kết về hướng đi, KHÔNG phải hứa hẹn về ngày ship."

> "Nếu không thể nói NO với một feature, roadmap của bạn không có giá trị."

> "Review roadmap ít nhất mỗi sprint. Roadmap stale là roadmap vô dụng."
