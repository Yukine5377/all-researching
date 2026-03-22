---
name: po-product-backlog
description: |
  Hướng dẫn tạo và quản lý Product Backlog theo quy trình của một Senior Product Owner. Output của skill này là file Google Sheet (.xlsx) có cấu trúc chuẩn, sẵn sàng import vào Jira/Linear/Notion hoặc dùng trực tiếp trên Google Sheets. Sử dụng skill này khi người dùng muốn: tạo product backlog mới, export backlog sang spreadsheet, tổ chức user stories theo Epic, hoặc chuẩn bị cho sprint planning. Trigger khi người dùng đề cập đến: "product backlog", "backlog", "user story", "sprint planning", "PBI", "epic", "bug list", "tech debt", "sprint backlog", "Jira", hoặc bất kỳ yêu cầu về danh sách công việc cần làm cho sản phẩm.
---

# PO Product Backlog Skill

Quy trình tạo và quản lý Product Backlog chuẩn. Output là file **Google Sheet (.xlsx)** với nhiều sheets được cấu trúc theo loại PBI (Product Backlog Item).

---

## Tổng quan

Product Backlog là danh sách ưu tiên **tất cả** công việc cần làm cho sản phẩm, ordered theo business value.

**Người quản lý**: Product Owner  
**Đối tượng đọc**: BOD (overview), DEV Team (implementation), Scrum Master (planning)  
**Output**: File `.xlsx` — import được vào Google Sheets, Jira, Linear, Notion

---

## Các loại PBI (Product Backlog Items)

### 1. Epic
Container lớn nhất, nhóm nhiều User Stories lại:
```
Epic: [Tên Epic]
Goal: [Mục tiêu của Epic]
Business Value: [Tại sao quan trọng]
Target Quarter: [Q1/Q2/...]
Status: [Backlog | In Progress | Done]
```

### 2. User Story
```
ID: US-001
Epic: [Epic ID]
Title: [Tên ngắn gọn]
As a [user type],
I want to [action],
So that [benefit].

Acceptance Criteria:
  GIVEN [context]
  WHEN [action]  
  THEN [expected result]

Story Points: [1/2/3/5/8/13]
Priority: [P0/P1/P2/P3]
Status: [Backlog/Ready/In Progress/Done]
Sprint: [Số sprint hoặc "Unassigned"]
Labels: [List tags]
```

### 3. Bug
```
ID: BUG-001
Title: [Mô tả ngắn bug]
Environment: [Dev/Staging/Prod]
Severity: [Critical/High/Medium/Low]
Steps to Reproduce:
  1. [Step 1]
  2. [Step 2]
Expected: [Kết quả mong đợi]
Actual: [Kết quả thực tế]
Reporter: [Tên]
Story Points: [Estimate]
Status: [Open/In Progress/Fixed/Closed]
```

### 4. Tech Debt
```
ID: TD-001
Title: [Mô tả tech debt]
Area: [Frontend/Backend/Database/Infrastructure]
Description: [Vấn đề kỹ thuật cụ thể]
Impact if not fixed: [Hậu quả]
Effort: [S/M/L/XL]
Priority: [P0/P1/P2/P3]
Status: [Backlog/In Progress/Done]
```

### 5. Spike (Research Task)
```
ID: SP-001
Title: [Câu hỏi cần trả lời]
Question: [Cụ thể cần research gì?]
Time-box: [X giờ / X ngày]
Output: [Deliverable mong đợi — report, POC, decision]
Status: [Open/In Progress/Done]
```

---

## Cấu trúc Google Sheet (6 sheets)

### Sheet 1: 📋 Overview Dashboard
- Tổng số PBI theo loại và status
- Sprint velocity average
- Burndown summary
- Key metrics

### Sheet 2: 🎯 Epics
Columns: ID | Epic Name | Goal | Business Value | Target Quarter | Status | Total Stories | Done Stories | % Complete

### Sheet 3: 📖 User Stories
Columns: ID | Epic ID | Title | User Story | Acceptance Criteria | Story Points | Priority | Status | Sprint | Labels | Assignee | Created Date | Updated Date

### Sheet 4: 🐛 Bugs
Columns: ID | Title | Environment | Severity | Steps | Expected | Actual | Story Points | Priority | Status | Reporter | Sprint | Fixed Date

### Sheet 5: 🔧 Tech Debt
Columns: ID | Title | Area | Description | Impact | Effort | Priority | Status | Sprint | Assignee

### Sheet 6: 🔍 Spikes
Columns: ID | Title | Question | Time-box | Output | Status | Owner | Due Date

---

## Quy tắc quản lý Backlog

### Backlog Grooming (hàng tuần)
- [ ] Tất cả stories P0/P1 có Acceptance Criteria đầy đủ
- [ ] Stories trong 2 sprint tới đã có Story Points
- [ ] Bugs Critical/High được estimate và có Sprint
- [ ] Tech Debt được review và prioritize mỗi quý

### Definition of Ready (story sẵn sàng để sprint)
- [ ] AC (Acceptance Criteria) rõ ràng và testable
- [ ] Story Points đã estimate (team đồng thuận)
- [ ] Dependencies đã identify
- [ ] Design mockup đã có (nếu cần)
- [ ] Technical feasibility đã confirm với Dev Lead

### Definition of Done (story hoàn thành)
- [ ] Code đã merge vào main branch
- [ ] Unit tests pass
- [ ] QA verify theo AC
- [ ] Không có blocking bugs mới
- [ ] Technical documentation updated (nếu cần)

---

## OUTPUT FILE — Product Backlog Excel (.xlsx)

Khi được yêu cầu tạo file Backlog, tạo file `.xlsx` với đầy đủ 6 sheets:

### Cách tạo Excel
```bash
node scripts/generate-backlog.js
# Dùng exceljs để tạo file .xlsx
# Output: outputs/backlog-[tên-sản-phẩm].xlsx
# Import vào Google Sheets: File → Import → Upload
```

### Tính năng của file Excel
- **Conditional Formatting**: Màu theo Priority (P0=đỏ, P1=cam, P2=vàng, P3=xanh)
- **Data Validation**: Dropdown cho Status, Priority, Sprint
- **Auto-filter**: Mỗi sheet có filter sẵn
- **Formula**: Dashboard tự tính tổng từ các sheets
- **Frozen headers**: Row 1 frozen để scroll dễ

---

## Tips từ Senior PO

> "Backlog không có nghĩa là bạn sẽ làm hết — đó là danh sách cơ hội có thứ tự ưu tiên."

> "Nếu backlog của bạn không fit trên 1 màn hình khi filter P0+P1, backlog của bạn quá lớn và cần tỉnh lọc."

> "Groom backlog thường xuyên. Backlog stale = team wasted time trong sprint planning."
