---
name: po-prd
description: |
  Hướng dẫn viết Product Requirements Document (PRD) theo quy trình của một Senior Product Owner. Đây là tài liệu trung tâm trong vòng đời sản phẩm. Sử dụng skill này khi người dùng muốn: mô tả chi tiết một tính năng hoặc sản phẩm, viết requirements cho UI/UX designer và dev team, định nghĩa acceptance criteria, hoặc chuẩn bị nền tảng cho Sprint Planning. Trigger khi người dùng đề cập đến: "PRD", "product requirements", "tài liệu sản phẩm", "feature spec", "đặc tả tính năng", "functional requirements", "user story", "acceptance criteria", hoặc bất kỳ yêu cầu về mô tả chi tiết sản phẩm/tính năng.
---

# PO Product Requirements Document (PRD) Skill

PRD là tài liệu trung tâm – cầu nối giữa business vision và technical execution. Trả lời **"Cái gì"** và **"Tại sao"**, KHÔNG phải **"Như thế nào"** (đó là SRS).

---

## Tổng quan

**Người viết**: Product Owner  
**Đối tượng đọc**: UI/UX Designer, DEV Team, Tester, QA  
**Thời điểm viết**: Sau khi BRD được approve, trước Sprint Planning

---

## INPUT cần có

| Input | Nguồn |
|---|---|
| BRD đã approve | Business team |
| User Research insights | Market research / interviews |
| Tech constraints sơ bộ | Engineering Lead |
| Design guidelines | Brand team / Designer |

> ⚠️ KHÔNG bắt đầu viết PRD khi chưa có BRD hoặc chưa có user research. Đây là sai lầm phổ biến nhất.

---

## Cấu trúc PRD

### 1. Document Header & Status
```
Product: [Tên sản phẩm]
Feature: [Tên tính năng cụ thể]
Status: Draft | In Review | Approved | Deprecated
Version: [X.X]
Author: [PO Name]
Last Updated: [Date]
Reviewers: [UI/UX, Tech Lead, QA Lead]
```

### 2. Problem Statement
- Vấn đề user đang gặp là gì?
- Evidence: data, quotes từ research
- Tại sao cần giải quyết ngay bây giờ?

### 3. Goals & Success Metrics
```
Goal: [Mục tiêu của feature]
Success Metrics:
  - Primary: [KPI chính, ví dụ: tăng conversion 20%]
  - Secondary: [KPI phụ]
  - Counter: [Metric cần watch out, ví dụ: không được giảm retention]
```

### 4. Target Audience & User Personas
- Persona nào sẽ dùng feature này?
- Tần suất sử dụng?
- Use case chính vs. edge case?

### 5. Assumptions & Constraints
**Assumptions:**
- Giả định về user behavior
- Giả định về technical feasibility

**Constraints:**
- Timeline cứng
- Budget limit
- Technical constraints (platform, API limits)
- Legal/compliance requirements

### 6. Functional Requirements
Dùng format User Story:
```
As a [user type],
I want to [action],
So that [benefit/outcome].

Acceptance Criteria:
  GIVEN [context]
  WHEN [action]
  THEN [expected result]
```

Phân loại theo priority:
- **P0 (Must)**: Blocking, không có không launch
- **P1 (Should)**: Quan trọng, nên có trong release
- **P2 (Could)**: Tốt hơn nếu có, không blocking
- **P3 (Won't)**: Explicitly không làm lần này

### 7. User Flow & Navigation
- Happy path flow (step-by-step)
- Error states
- Edge cases cần handle
- Entry points và exit points

### 8. UI/UX Requirements
- Design principles cần tuân thủ
- Component specifications
- Responsive requirements (mobile/desktop)
- Accessibility requirements (WCAG level)
- Phần nào cần new design vs. reuse components

### 9. Analytics & Tracking Requirements
- Events cần track
- Funnel steps
- A/B test plan (nếu có)
```
Event: [tên event]
Trigger: [khi nào fire]
Properties: [data cần capture]
```

### 10. Non-functional Requirements
(Phần này overlap PRD/SRS — liệt kê ở mức cao)
- Performance: Load time < X seconds
- Reliability: Uptime X%
- Scalability: Support X concurrent users

### 11. Localization & Internationalization
- Ngôn ngữ hỗ trợ
- Date/time/currency format
- RTL support nếu cần

### 12. Dependencies
- Features khác cần hoàn thành trước
- Third-party services / APIs
- Team dependencies (design phải xong trước dev)

### 13. Out of Scope
Liệt kê rõ những gì KHÔNG bao gồm trong scope lần này để tránh scope creep.

### 14. Open Questions
Các vấn đề chưa được quyết định, cần resolution trước khi dev bắt đầu:
```
[Q1] [Câu hỏi] | Owner: [Tên] | Due: [Date] | Status: Open/Resolved
```

### 15. Revision History
```
Version | Date | Author | Changes
```

---

## OUTPUT PPTX — PRD Slide Deck (15 slides)

| Slide | Nội dung |
|---|---|
| 1 | Title & Document Status |
| 2 | Table of Contents |
| 3 | Problem Statement + Evidence |
| 4 | Goals & Success Metrics |
| 5 | Target Audience & Personas |
| 6 | Assumptions & Constraints |
| 7 | Functional Requirements — P0/P1 |
| 8 | Functional Requirements — P2/P3 |
| 9 | User Flow (Happy Path) |
| 10 | Error States & Edge Cases |
| 11 | UI/UX Requirements |
| 12 | Analytics & Tracking Plan |
| 13 | Non-functional Requirements |
| 14 | Open Questions & Dependencies |
| 15 | Revision History & Sign-off |

### Cách tạo PPTX
```bash
node scripts/generate-prd.js
# Output: outputs/prd-[tên-feature].pptx
```

---

## Dấu hiệu PRD tốt vs. kém

| ✅ PRD tốt | ❌ PRD kém |
|---|---|
| Developer đọc xong biết làm gì | Developer phải hỏi PO liên tục |
| Mỗi requirement có acceptance criteria | Requirements mơ hồ, không đo được |
| Out of scope được liệt kê rõ | Scope creep không control được |
| Open questions có owner & deadline | Issues kéo dài không resolve |
| Designer có đủ context để design | Designer phải đoán ý PO |
