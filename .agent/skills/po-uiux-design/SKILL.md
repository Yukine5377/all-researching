---
name: po-uiux-design
description: |
  Hướng dẫn review và tài liệu hóa UI/UX Design theo quy trình của một Senior Product Owner phối hợp với Designer. Sử dụng skill này khi người dùng muốn: review design đảm bảo đúng requirements, tạo tài liệu design spec cho dev team, kiểm tra design system consistency, hoặc chuẩn bị design handoff. Trigger khi người dùng đề cập đến: "UI/UX design", "thiết kế giao diện", "design review", "wireframe", "prototype", "design system", "design handoff", "Figma review", "usability", hoặc bất kỳ yêu cầu liên quan đến thiết kế giao diện.
---

# PO UI/UX Design Review & Documentation Skill

Hướng dẫn PO và Designer tạo tài liệu UI/UX đầy đủ để handoff sang DEV team, đảm bảo design đáp ứng đúng requirements và có thể implement được.

---

## Tổng quan

**Người thực hiện**: Designer (chính), PO (review)  
**Đối tượng đọc**: DEV Team, Tester  
**Thời điểm thực hiện**: Sau PRD được approve, song song hoặc trước sprint dev

---

## Quy trình Design → Dev Handoff

```
PRD Approved
    ↓
[1] Wireframe (Low-fi)    → PO review: đúng flow chưa?
    ↓
[2] UI Design (High-fi)   → PO review: đúng requirements chưa?
    ↓
[3] Prototype             → Stakeholder review: đúng UX chưa?
    ↓
[4] Design Specs          → DEV nhận: pixel-perfect specs
    ↓
[5] QA Review             → Tester verify vs. design
```

---

## Cấu trúc Tài liệu UI/UX

### 1. Design System Overview

**1.1 Branding**
- Logo usage guidelines
- Primary & Secondary colors (HEX/RGB/HSL)
- Typography scale (heading, body, caption)
- Iconography style

**1.2 Design Tokens**
```
Color Palette:
  Primary:   #[HEX]
  Secondary: #[HEX]
  Success:   #[HEX]
  Error:     #[HEX]
  Warning:   #[HEX]

Typography:
  Font: [Font Name]
  H1: [Size, Weight, Line Height]
  H2: [Size, Weight, Line Height]
  Body: [Size, Weight, Line Height]
  Caption: [Size, Weight, Line Height]

Spacing: 4px base unit (4, 8, 12, 16, 24, 32, 48, 64)
Border Radius: [4px / 8px / 12px / Full]
```

**1.3 Component Library**
Liệt kê các components đã có vs. cần tạo mới:
- Buttons (Primary, Secondary, Ghost, Danger)
- Form elements (Input, Select, Checkbox, Radio)
- Cards, Modals, Toasts
- Navigation (Navbar, Sidebar, Tabs, Breadcrumb)

### 2. Wireframes

**Mỗi screen cần có:**
- Screen name & ID
- User flow context (bước thứ mấy trong flow)
- Annotations giải thích behavior
- States: Default / Loading / Empty / Error

**Wireframe checklist:**
- [ ] Tất cả screens trong user flow đã có wireframe
- [ ] Error states đã được design
- [ ] Empty states đã được design
- [ ] Mobile và Desktop versions (nếu responsive)

### 3. UI Design (High-Fidelity)

**Screen Specifications:** Với mỗi screen:
```
Screen: [Tên screen]
Route: [/path/to/screen]
Dimensions: [375x812 Mobile | 1440x900 Desktop]
Components used: [List components]
Assets: [Icons, images cần export]
```

**Interaction Notes:**
- Hover states
- Active/Focus states
- Transition animations (duration, easing)

### 4. Prototype & Interactions

**Flow documentation:**
```
Screen A → [User clicks Button X] → Screen B (Transition: Slide right, 300ms)
Screen B → [User submits form] → 
  Success: Screen C
  Error: Screen B (show error toast)
```

**Micro-interactions:**
- Loading spinners / skeleton screens
- Form validation feedback
- Success/error animations

### 5. Developer Handoff Specs

**Mỗi component/screen cần export:**
- Exact dimensions (width, height, padding, margin)
- Colors với HEX codes
- Typography với exact specs
- Assets (SVG icons, PNG images tại 1x, 2x, 3x)
- Figma/Zeplin link

**Asset Export Guide:**
| Asset | Format | Sizes | Naming |
|---|---|---|---|
| Icons | SVG | 1x | icon-[name].svg |
| Illustrations | SVG/PNG | 1x, 2x | img-[name]@2x.png |
| App icon | PNG | Multiple | Theo platform guide |

### 6. Usability Checklist (PO Review)

**Functional alignment:**
- [ ] Tất cả user stories trong PRD đã được design
- [ ] Error cases đã có design
- [ ] Acceptance criteria của từng story có thể verify qua design

**UX Quality:**
- [ ] Primary actions rõ ràng (visual hierarchy)
- [ ] Form validation feedback immediate và helpful
- [ ] Loading states exist cho mọi async action
- [ ] Empty states có actionable guidance
- [ ] Error messages human-readable (không phải technical)

**Accessibility (WCAG 2.1 AA):**
- [ ] Color contrast ratio ≥ 4.5:1 cho text thường
- [ ] Focus states visible
- [ ] Alt text cho images
- [ ] Touch targets ≥ 44x44px mobile

### 7. Responsive Breakpoints
```
Mobile:  320px – 767px
Tablet:  768px – 1023px
Desktop: 1024px+
Wide:    1440px+
```

---

## OUTPUT PPTX — UI/UX Design Slide Deck (15 slides)

| Slide | Nội dung |
|---|---|
| 1 | Title & Project Info |
| 2 | Table of Contents |
| 3 | Design Process Overview |
| 4 | Design System — Colors & Typography |
| 5 | Design System — Component Library |
| 6 | Wireframes — Key Screens (Low-fi) |
| 7 | UI Design — Screen 1 (annotated) |
| 8 | UI Design — Screen 2 (annotated) |
| 9 | UI Design — Screen 3 (annotated) |
| 10 | Error & Empty States |
| 11 | Prototype Flow Diagram |
| 12 | Micro-interactions & Animations |
| 13 | Developer Handoff Specs |
| 14 | Accessibility & Responsive Notes |
| 15 | Open Questions & Sign-off |

### Cách tạo PPTX
```bash
node scripts/generate-uiux.js
# Output: outputs/uiux-[tên-feature].pptx
```
