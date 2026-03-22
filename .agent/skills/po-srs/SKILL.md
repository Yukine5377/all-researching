---
name: po-srs
description: |
  Hướng dẫn viết Software Requirements Specification (SRS) theo quy trình của một Senior Product Owner phối hợp với Technical Lead. Sử dụng skill này khi người dùng muốn: viết đặc tả kỹ thuật cho hệ thống, định nghĩa functional và non-functional requirements ở mức technical, mô tả tech stack và architecture, hoặc chuẩn bị tài liệu cho dev team bắt đầu implementation. Trigger khi người dùng đề cập đến: "SRS", "software requirements", "đặc tả kỹ thuật", "technical spec", "system requirements", "non-functional requirements", "tech stack", "system architecture", hoặc bất kỳ yêu cầu kỹ thuật chi tiết nào.
---

# PO Software Requirements Specification (SRS) Skill

SRS là tài liệu kỹ thuật chi tiết – đi sâu vào **"Như thế nào"** về mặt hệ thống. Là cầu nối giữa PRD (business) và actual implementation.

---

## Tổng quan

**Người viết**: Product Owner + Technical Lead  
**Đối tượng đọc**: DEV Team, Tester/QA, DevOps  
**Thời điểm viết**: Sau PRD được approve, trước khi bắt đầu sprint

---

## SRS vs. PRD — Phân biệt rõ

| PRD | SRS |
|---|---|
| "User có thể đăng nhập bằng email" | "API POST /auth/login nhận {email, password}, trả JWT trong 200ms" |
| Business perspective | Technical perspective |
| PO viết | PO + Tech Lead viết |
| UI/UX, Business đọc | DEV, Tester đọc |

---

## Cấu trúc SRS

### 1. Document Header
- System name, version, date
- Authors (PO + Tech Lead)
- Reviewers (Dev Lead, QA Lead, Security)
- Status và distribution list

### 2. Introduction
**1.1 System Overview**: Mô tả ngắn hệ thống làm gì  
**1.2 Scope**: Trong scope / ngoài scope ở cấp technical  
**1.3 Definitions & Acronyms**: Glossary các thuật ngữ kỹ thuật  
**1.4 References**: Liệt kê PRD, BRD, và docs liên quan

### 3. Tech Stack & Architecture
```
Frontend:  [Framework, version]
Backend:   [Language, Framework, version]
Database:  [Type, version]
Cache:     [Redis / Memcached]
Queue:     [Kafka / RabbitMQ]
Cloud:     [AWS / GCP / Azure / On-prem]
CI/CD:     [Jenkins / GitHub Actions]
```
Kèm diagram kiến trúc (mô tả bằng text nếu không có diagram tool).

### 4. Assumptions & Dependencies
- Technical assumptions (browser support, device support)
- External service dependencies (third-party APIs, SDKs)
- Infrastructure dependencies (load balancer, CDN)
- Data dependencies (migration, existing DB schema)

### 5. Functional Requirements
Viết ở mức system behavior, không phải user action:

```
FR-001: Authentication
  Description: System shall authenticate users via email/password
  Input: {email: string, password: string}
  Output: {access_token: JWT, refresh_token: JWT, expires_in: number}
  Business Rule: Password must be hashed with bcrypt, salt rounds >= 12
  Error Cases: 
    - 401 if credentials invalid
    - 429 if >5 failed attempts in 15 minutes (rate limiting)
  Priority: P0
```

### 6. Non-functional Requirements

**6.1 Performance**
- API response time: P95 < 500ms, P99 < 1s
- Page load time: < 3s trên 4G connection
- Throughput: X requests/second peak load

**6.2 Security**
- Authentication: JWT với expiry
- Authorization: RBAC model
- Data encryption: At rest (AES-256), In transit (TLS 1.3)
- PII handling: Mask/encrypt sensitive fields
- OWASP Top 10 compliance

**6.3 Reliability**
- Uptime SLA: 99.9% (8.76 hours downtime/year max)
- RTO (Recovery Time Objective): < 4 hours
- RPO (Recovery Point Objective): < 1 hour
- Error rate: < 0.1%

**6.4 Scalability**
- Horizontal scaling strategy
- Database sharding plan (nếu cần)
- CDN for static assets
- Target: X concurrent users

**6.5 Usability**
- API response format: JSON (consistent structure)
- Error messages: Meaningful, localized
- Logging: Structured logs với correlation ID

### 7. Interface Requirements

**7.1 User Interface**
- Browser support: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+
- Mobile: iOS 14+, Android 10+
- Resolution: min 320px width

**7.2 API Interface**
- Protocol: RESTful HTTP/HTTPS
- Data format: JSON
- Versioning: /api/v1/
- Authentication: Bearer Token

**7.3 External System Interfaces**
| System | Protocol | Auth Method | Data Format |
|---|---|---|---|
| [Payment Gateway] | HTTPS REST | API Key | JSON |
| [Email Service] | SMTP / API | OAuth2 | JSON |

### 8. Database Schema (High-level)
```sql
-- ví dụ
Table: users
  id: UUID PK
  email: VARCHAR(255) UNIQUE
  password_hash: VARCHAR(255)
  created_at: TIMESTAMP
  ...
```

### 9. Error Handling & Logging
- Error response format chuẩn
- Log levels: DEBUG / INFO / WARN / ERROR / FATAL
- Monitoring alerts thresholds
- Audit log requirements

### 10. Deployment & Environment
| Environment | Purpose | URL | Deploy frequency |
|---|---|---|---|
| Development | Dev testing | dev.example.com | Mỗi commit |
| Staging | QA testing | staging.example.com | Mỗi PR merge |
| Production | Live users | example.com | Mỗi release |

---

## OUTPUT PPTX — SRS Slide Deck (15 slides)

| Slide | Nội dung |
|---|---|
| 1 | Title & Document Header |
| 2 | Table of Contents |
| 3 | System Overview & Scope |
| 4 | Tech Stack & Architecture |
| 5 | Assumptions & Dependencies |
| 6 | Functional Requirements — Authentication & Core |
| 7 | Functional Requirements — Business Logic |
| 8 | Functional Requirements — Integrations |
| 9 | Non-functional: Performance & Reliability |
| 10 | Non-functional: Security |
| 11 | Non-functional: Scalability & Usability |
| 12 | Interface Requirements (UI + API + External) |
| 13 | Database Schema (High-level) |
| 14 | Error Handling, Logging & Deployment |
| 15 | Open Issues & Sign-off |

### Cách tạo PPTX
```bash
node scripts/generate-srs.js
# Output: outputs/srs-[tên-system].pptx
```

---

## Tips từ Senior PO

> "SRS không phải code comment. Nếu developer đọc SRS và không cần hỏi thêm gì, bạn đã viết tốt."

> "Non-functional requirements thường bị bỏ qua nhưng là thứ gây ra production incident nhiều nhất."
