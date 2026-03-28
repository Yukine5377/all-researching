---
stepsCompleted:
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
  - 8
inputDocuments:
  - docs/prd-commiz-platform.md
workflowType: architecture
project_name: Commiz
user_name: Sato Haruki
date: "2026-03-22"
lastStep: 8
status: complete
completedAt: "2026-03-28"
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

The PRD defines five prioritized capabilities that map directly to system boundaries:

- **FR-01 (P0) — Post task + escrow:** Core write path for Requesters (task attributes + budget + platform fee + funds held until resolution). Architecturally this is the **transactional heart** of the product and must stay consistent with payment provider state.
- **FR-02 (P0) — Internal chat:** **Per-task** (or per-match) messaging after accept. Drives need for **conversation scoping**, **authorization** (only participants), and likely **real-time delivery** with history and moderation hooks for disputes.
- **FR-03 (P0) — Completion + release:** Approval flow and **payout** to Commizer wallet net of fees. Requires **clear state machine**, **idempotent payout**, and **reconciliation** with escrow holds.
- **FR-04 (P1) — Ratings & reviews:** Reputation data tied to users/tasks; affects **trust surfaces** and possibly **ranking** of Commizers later.
- **FR-05 (P1) — Disputes:** Exception path over money and task outcome; needs **workflow**, **evidence** (chat, attachments, timestamps), and **admin or policy-driven** resolution without corrupting ledger integrity.

**Non-Functional Requirements:**

- **Latency:** Task **status updates visible within ~2 seconds** — implies efficient **write path**, **caching strategy** where safe, and **push/WebSocket or equivalent** for clients, not only polling.
- **Privacy:** **Phone and address hidden until task is accepted** — enforce at **API and realtime** layers (not only UI), with explicit **field-level** rules for Requester vs Commizer vs system.

**Scale & Complexity:**

- **Primary domain:** **Full-stack marketplace** with **mobile-first** clients (web/app).
- **Complexity level:** **Medium** — single-product scope in the PRD, but **regulated-adjacent** concerns (KYC, money movement, disputes) dominate risk.
- **Estimated architectural components (initial):** **API/backend**, **auth/identity + KYC adapter**, **wallet/ledger + escrow orchestration**, **payment connectors** (e-wallets / bank), **chat service**, **notification service**, **admin/dispute tooling** (even if MVP is minimal), **analytics/event capture**, and **client apps** consuming a cohesive **task state model**.

### Technical Constraints & Dependencies

- **Vietnam payment ecosystem:** MoMo, VNPay, and/or automated bank transfer — **external PSP contracts**, **webhooks**, **sandbox vs prod**, and **currency (VND)** handling including **minimum 20.000 ₫** business rule.
- **KYC:** Third-party or in-house verification — impacts **signup**, **task acceptance** eligibility for “Đã KYC” badge, and **data retention** policies.
- **Task moderation:** PRD allows **auto or manual** task approval before Commizers are notified — workflow engine or simple admin queue is an early fork.
- **No bidding / long-term hiring in scope** — architecture can assume **fixed-price** tasks only for v1.

### Cross-Cutting Concerns Identified

- **Identity, authorization, and KYC state** across all task and chat APIs.
- **Financial correctness:** escrow, fees, payouts, refunds/chargebacks per dispute outcomes.
- **Real-time UX:** chat + notifications + fast status visibility.
- **Dispute-grade auditability:** immutable or append-only **event/audit log** for money and state transitions.
- **PII boundary enforcement** aligned with PRD security rule.

## Starter Template Evaluation

### Primary Technology Domain

**Full-stack marketplace, mobile-first:** React Native (Expo) for the primary client surface (iOS, Android, and web via Expo), plus a **separate backend API** for auth/KYC orchestration, task + wallet/escrow logic, payment webhooks, chat ACLs, and analytics events.

### Starter Options Considered

- **Next.js (`create-next-app`)** — Strong if web is the main product; weaker as the sole answer when the PRD prioritizes **native/mobile** experience and push-friendly workflows.
- **T3 Stack** — Excellent for a **TypeScript web** product with shared types to a single deploy target; less ideal as the **only** foundation when the client is primarily **Expo**.
- **Expo (`create-expo-app`)** — Best alignment with **mobile-first** and shared code for mobile + web; requires an explicit backend project for money and compliance paths.
- **NestJS (backend CLI)** — Opinionated **Node** API layer with modules, DI, and clear boundaries for integrations (MoMo/VNPay/bank webhooks, KYC providers). Pairs naturally with Expo clients over **HTTPS + OpenAPI/REST** (or GraphQL if you standardize later).

### Selected approach: Expo (client) + NestJS (API)

**Rationale**

- Matches **FR-01–FR-03** flows: rich client, **&lt;2s** status updates via WebSocket/SSE + push, while **financial correctness** stays **server-side**.
- Keeps **PII gating** and **escrow** off the device trust boundary.
- Senior team can own two focused codebases (or later fold into a **monorepo** with shared types package).

**Initialization commands (verify versions on official docs before running):**

```bash
# Client (Expo, TypeScript + Expo Router default template)
npx create-expo-app@latest commiz-mobile

# Backend (NestJS API)
npx @nestjs/cli@latest new commiz-api
```

**Architectural decisions implied by this pair**

| Area | Expo app | NestJS API |
|------|-----------|------------|
| Language & runtime | TypeScript / React Native | TypeScript / Node |
| Routing | Expo Router (file-based) | Module-based routes/controllers |
| Styling / UI | RN StyleSheet / chosen UI lib (not fixed by CLI) | N/A (API) |
| Real-time | WebSocket client to API or managed realtime | WebSocket gateway or SSE; must authorize per task/thread |
| Testing | Jest / Expo defaults (extend as needed) | Jest + Supertest (Nest default) |
| Env & secrets | Public client config only; **no PSP secrets** | All MoMo/VNPay/bank keys, KYC secrets |

**Note:** Running these scaffolds should be treated as the **first implementation story** (or two parallel stories: client shell + API shell), then add DB, auth, and domain modules in subsequent work.

**Version note:** Confirm current CLI flags and SDK lines on [Expo docs](https://docs.expo.dev/more/create-expo) and [NestJS docs](https://docs.nestjs.com/) at implementation time; versions were not web-verified in this session.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical (block implementation if undefined):**

- Primary **OLTP database** for tasks, users, wallets, ledger, and outbox-friendly events.
- **AuthN/AuthZ** model for Requester vs Commizer vs Admin and **KYC-gated** actions.
- **API shape** consumable from mobile (REST + OpenAPI as contract source).
- **Real-time** transport for chat and task status (authorized per task/conversation).

**Important (shape quality and ops):**

- Caching and **rate limiting** at the edge/API.
- **Observability** (structured logs, correlation IDs, traces TBD).
- **CI/CD** and environment separation (dev/stage/prod).

**Deferred (post-MVP / optional):**

- Multi-region active-active, full **event sourcing** read models, advanced fraud ML, separate **data warehouse** (can start with DB replicas + batch export).

### Data Architecture

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Primary database | **PostgreSQL** | ACID + constraints for **wallet/escrow**; strong JSON support if needed. |
| ORM / migrations | **Prisma** or **TypeORM** with Nest (team picks one; both support migrations) | Type-safe schema evolution; avoid ad-hoc SQL for money tables. |
| Modeling | **Relational** core; explicit **ledger / balance** tables; **immutable financial event** rows | Disputes, reconciliation, audits (FR-05). |
| Validation | **class-validator** + DTOs (Nest); **Zod** (or similar) on client for forms | Same invariants, different layers. |
| Caching | **Redis** (optional MVP: start without; add for sessions, rate limits, hot reads) | Keeps early stack smaller; plan hooks in API. |

### Authentication & Security

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Authentication | **OIDC-ready** email/phone flow; **short-lived access JWT** + **rotating refresh** (httpOnly cookie or secure storage strategy per platform) | Mobile + future web; minimize long-lived bearer tokens on device. |
| Authorization | **RBAC** + **resource rules** (task participant, owner, admin) | Enforce PII visibility **after accept** at API. |
| KYC | **Provider adapter** interface; store **verification state + level**, not raw vendor payloads in app logs | “Đã KYC” badge; swap vendors. |
| API security | **TLS**, **input validation**, **idempotency-Key** on payment/escrow mutations, **webhook signature** verification for PSPs | Double spend / replay resistance. |
| Secrets | **Server-only** env/secret manager; **no PSP keys in Expo** | Clear trust boundary. |

### API & Communication Patterns

| Decision | Choice | Rationale |
|----------|--------|-----------|
| API style | **REST**, **versioned** (`/api/v1/...`), **OpenAPI 3** generated from decorators or schema | Best default for Expo + codegen. |
| Errors | **Problem+JSON**-style envelope (type, title, detail, `instance`, optional `errors[]`) | Predictable client handling. |
| Rate limiting | **Nest Throttler** (or gateway) per IP + per user | Abuse and brute-force mitigation. |
| Real-time | **WebSocket** (or **SSE** for one-way status) **namespaced by task/conversation** with **auth handshake** | Chat (FR-02) and **&lt;2s** status perception. |
| Internal async | **Outbox** table + worker (or queue later) for notifications, webhooks side effects | Reliable side effects without losing money state. |

### Frontend Architecture (Expo)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Navigation | **Expo Router** (per starter) | File-based, deep links for task screens. |
| Server state | **TanStack Query** | Cache, retries, optimistic updates for task list/detail. |
| Client state | **Minimal** (e.g. **Zustand** or React Context) for session/UI | Avoid over-centralized global state. |
| Lists / perf | **FlashList** (or equivalent) for task feeds; image pipeline tuned for RN | Mobile-first responsiveness. |
| Real-time UI | Dedicated hook **per task** channel; unsubscribe on blur | Battery and security. |

### Infrastructure & Deployment

| Decision | Choice | Rationale |
|----------|--------|-----------|
| API hosting | **Container** (Docker) on cloud of choice (**AWS ECS/Fargate**, **GCP Cloud Run**, **Railway**, **Fly.io**, etc.) | Portable; Nest fits container model. |
| Expo | **EAS Build / Submit** for stores; **EAS Update** for OTA where policy allows | Matches Expo ecosystem. |
| Environments | **dev / staging / prod**; separate **PSP sandbox vs live** keys | Safe payment testing. |
| Logging | **Structured JSON** (e.g. **pino**), **request correlation ID** | Debug escrow/chat issues. |
| CI/CD | **GitHub Actions** (or equivalent): lint, test, build API image, EAS build on tags | Repeatable releases. |

### Decision Impact Analysis

**Implementation sequence (suggested):**

1. API shell + Postgres + auth + OpenAPI.
2. Task aggregate + state machine + PII fields gated by status.
3. Wallet/escrow tables + idempotent payment intents + PSP webhook module.
4. WebSocket chat + notification outbox.
5. Expo screens wired to API + real-time hooks.
6. Admin/dispute minimal tools + audit export.

**Cross-component dependencies:**

- **Ledger** choices constrain **dispute** refunds and **fee** logic.
- **Auth/KYC** gates **accept task** and **badge** display.
- **OpenAPI** should lead **client** types (or shared package in monorepo later).
- **WebSocket** auth must reuse same **task participation** rules as REST.

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical conflict points identified (8):** DB vs API naming, JSON field casing, REST path shape, error envelope vs Problem+JSON, date/time in payloads, event/log naming, test layout, loading/error UX contracts between Expo and API.

### Naming Patterns

**Database naming conventions (PostgreSQL):**

- Tables: **plural `snake_case`** — `users`, `tasks`, `wallet_ledger_entries`.
- Columns: **`snake_case`** — `user_id`, `created_at`, `kyc_level`.
- Primary keys: **`id`** (UUID preferred for public refs; document if bigint is used).
- Foreign keys: **`<table_singular>_id`** — `requester_id`, `task_id`.
- Indexes: **`idx_<table>_<column(s)>`** — `idx_tasks_status_created_at`.
- Constraints: **`fk_<from_table>_<to_table>`** / **`chk_<table>_<rule>`** where helpful.

**API naming conventions (REST `/api/v1`):**

- Resources: **plural nouns** — `/tasks`, `/users/me`, `/conversations/{id}/messages`.
- Path params: **`{id}`** in OpenAPI; Nest route params as `:id` aligned to the same contract.
- Query params: **`camelCase`** globally for Expo/TS ergonomy (e.g. `pageSize`, `sortBy`). Database remains **`snake_case`** only.
- Headers: standard names; custom headers without legacy `X-` prefix where possible (e.g. `Idempotency-Key`, `Request-Id`).

**Code naming conventions:**

- **NestJS backend:** files **`kebab-case.*.ts`** (e.g. `tasks.module.ts`); classes **PascalCase**; methods and variables **camelCase**.
- **Expo:** components **PascalCase**; routes under **`app/`** per Expo Router; hooks **`useTaskList`**; shared **`lib/`** and **`hooks/`** with **camelCase** `.ts` files unless a file exports a single component (then **PascalCase** filename optional—pick one convention per folder and document).
- **DTOs / Zod:** TypeScript properties **camelCase**; map to DB **snake_case** in Prisma via `@map` or a single documented mapping policy.

### Structure Patterns

**Project organization:**

- **Backend:** Nest **feature modules** (`auth/`, `users/`, `tasks/`, `wallets/`, `payments/`, `chat/`, `notifications/`, `admin/`) each with `*.module.ts`, `*.controller.ts`, `*.service.ts`, optional `dto/`.
- **Tests:** **co-located** `*.spec.ts` for units; **e2e** under `test/` with Supertest.
- **Expo:** **feature-oriented** `app/` routes, `components/`, `hooks/`, `lib/`; **no** PSP or KYC secrets in client bundles.

**File / config:**

- **Env:** `.env.example` in repo only; secrets via host/EAS.
- **OpenAPI:** single contract for mobile codegen (generate in CI or commit artifact—one source of truth).

### Format Patterns

**API response formats:**

- **Success:** **direct resource** body for single resources; **lists** as `{ data: T[], meta: { page, pageSize, total } }` with **camelCase** keys.
- **Errors:** **Problem+JSON** (`application/problem+json`): `type`, `title`, `status`, `detail`, `instance`, optional `errors[]` for validation.

**Data exchange:**

- **JSON body:** **camelCase** between API and Expo.
- **Dates:** **ISO-8601 UTC strings** in JSON (e.g. `2026-03-28T12:00:00.000Z`).
- **Money:** **integer VND** (minor unit = VND whole đồng) with explicit field names such as `amountVnd`, `platformFeeVnd`—document if a future decimal type is introduced.
- **Booleans:** JSON **`true` / `false`** only.

### Communication Patterns

**Domain / outbox events (internal):**

- Names: **`domain.<aggregate>.<past_tense>`** with **dot + snake** segments — e.g. `domain.task.accepted`, `domain.wallet.payout_completed`.
- Payloads: include **`eventId`**, **`occurredAt`**, **`correlationId`**; optional **`schemaVersion`**.

**Logs:**

- **Structured JSON**; levels `error`, `warn`, `info`, `debug`; **never** log PSP secrets, raw KYC payloads, or full PII; attach **correlation ID** per request.

**Realtime (WebSocket):**

- Rooms/namespaces scoped by **`taskId`** / **`conversationId`**; event names **lowercase with underscores** (e.g. `task.status_changed`).

**Client state (Expo):**

- **TanStack Query** keys as **tuple arrays** `['tasks', 'list', filters]`; **immutable** cache updates only.

### Process Patterns

**Error handling:**

- **API:** map domain failures to **Problem+JSON** and correct **HTTP status**; payment paths support **idempotency** and documented retry semantics.
- **Expo:** centralized Query error handling; **Vietnamese** user-facing strings in UI; technical `detail` only in dev if needed.

**Loading states:**

- Prefer Query **`isPending` / `isFetching`** over ad-hoc global `"loading"` flags unless a full-screen gate is required.

### Enforcement Guidelines

**All implementers MUST:**

- Keep **money and PII rules** on the server; **no PSP secrets** in Expo.
- Treat **OpenAPI** as the REST contract; do not add undocumented parallel APIs.
- Use **Problem+JSON** for errors and **one** JSON casing convention end-to-end.
- Attach **correlation ID** to logs for **escrow, webhooks, and payouts**.

**Pattern enforcement:**

- CI: **lint**, **typecheck**, **OpenAPI diff** on API changes; optional ESLint boundaries for forbidden imports.
- Exceptions: record in **architecture** or **ADR**; update this section when patterns change.

### Pattern Examples

**Good examples:**

- `GET /api/v1/tasks?status=open&page=1&pageSize=20` → `{ "data": [...], "meta": { "page": 1, "pageSize": 20, "total": 42 } }`
- DB: `tasks.status = 'accepted'`, `tasks.requester_id = …`
- Problem+JSON: `{ "type": "https://api.example/problems/insufficient-balance", "title": "Insufficient balance", "status": 409, "detail": "…" }`

**Anti-patterns:**

- Inconsistent **`userId`** (API) vs **`user_id`** (DB) without an explicit mapping layer.
- Returning **stack traces** to mobile clients.
- Relying on **polling alone** for chat or sub–2s task status when **WebSocket/SSE** is the chosen transport.

## Project Structure & Boundaries

### Complete project directory structure

Recommended layout for the **Commiz** repository (Expo + NestJS + PostgreSQL, plus existing **`frontend/`** Stitch reference). Names at repo root may be adjusted (e.g. `apps/api` monorepo style) but boundaries below stay the same.

```
Commiz/
├── README.md
├── .gitignore
├── .github/
│   └── workflows/
│       └── ci.yml                    # lint, test, API image build, optional OpenAPI check
├── docs/
├── _bmad-output/
├── frontend/                         # Vite/React Stitch demos — no production secrets
│   ├── package.json
│   ├── src/
│   └── ...
├── commiz-api/                       # NestJS (nest new)
│   ├── package.json
│   ├── nest-cli.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── prisma/                       # if Prisma
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── config/
│   │   ├── common/                   # guards, pipes, Problem+JSON filter
│   │   ├── auth/
│   │   ├── users/
│   │   ├── kyc/
│   │   ├── tasks/
│   │   ├── wallets/
│   │   ├── payments/
│   │   ├── chat/
│   │   ├── notifications/
│   │   ├── disputes/
│   │   ├── ratings/
│   │   ├── analytics/
│   │   └── admin/
│   └── test/
│       └── e2e/
├── commiz-mobile/                    # Expo (create-expo-app)
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── assets/
│   ├── app.config.ts
│   └── package.json
└── docker-compose.yml                # optional: local Postgres (+ Redis later)
```

### Architectural boundaries

**API boundaries**

- **Public mobile:** `/api/v1/*` and **WebSocket** namespaces per OpenAPI / WS contract.
- **PSP webhooks:** dedicated routes (e.g. `/webhooks/momo`, `/webhooks/vnpay`) with **signature verification**, no cookie session auth.
- **Admin:** `/api/v1/admin/*` (or future split) with **stricter RBAC** and audit logging.

**Component boundaries (Expo)**

- **Screens** in `app/`; **reusable UI** in `components/`; **no direct database**; state via **API + TanStack Query**.
- **Realtime:** one module (e.g. `lib/realtime.ts`) for connect/auth/disconnect.

**Service boundaries (Nest)**

- **Tasks** owns task state machine; **Wallets/Ledger** owns balances; **Payments** owns PSP mapping; cross-module logic via **services**, not cross-module DB writes.
- **Outbox** written in the same transaction as domain changes; **Notifications** consumes outbox.

**Data boundaries**

- **PostgreSQL** single OLTP source of truth; **ledger**/**wallet** rows mutated only through **Wallets/Payments** services.
- **Redis** (later): cache/rate limit — not financial source of truth.
- **PII** (phone, address) exposed only through gated DTOs on **Tasks** (and related) APIs.

### Requirements to structure mapping

| Area | Modules / paths |
|------|------------------|
| FR1 Auth/session | `commiz-api/src/auth/`, `users/` · `commiz-mobile/app/(auth)/` |
| FR2 KYC | `kyc/` · profile + badge UI |
| FR3–FR5 Tasks + escrow | `tasks/`, `payments/`, `wallets/` |
| FR6–FR8 Accept, chat, complete | `tasks/`, `chat/` · task screens + WS hooks |
| FR9 Payout | `wallets/`, `payments/` |
| FR10 Ratings | `ratings/` |
| FR11–FR12 Disputes / Admin | `disputes/`, `admin/` |
| FR13–FR15 Wallet UX | `wallets/` + mobile wallet flows |
| FR16 Platform ops | `admin/` + moderation in `tasks/` |
| FR17 PII | DTOs + guards in `tasks/`, `chat/` |
| FR18 Analytics | `analytics/` emits from task/payment flows |
| NFR realtime | `chat/` gateway + `commiz-mobile/lib/realtime.ts` |
| Stitch / design reference | `frontend/` (non-production backend) |

### Integration points

- **Internal:** REST + WS; **outbox** → notification worker; **OpenAPI** → client types.
- **External:** MoMo / VNPay / bank **webhooks** → `payments/`; **KYC provider** → `kyc/`.
- **Data flow:** Client → **API** → **Postgres**; side effects → **outbox** → workers; **PSP** ↔ **payments** ↔ **wallets**.

### File organization patterns

- **Config:** `commiz-api/src/config/`; **Problem+JSON** in `common/filters/`.
- **Tests:** co-located `*.spec.ts`; **e2e** under `commiz-api/test/e2e/`.
- **Assets:** Expo `assets/`; API minimal static hosting if any.

### Development workflow integration

- **Local:** `docker-compose` for Postgres; run **Nest** + **Expo** separately; Expo env points to API base URL.
- **Build:** API **Docker image**; Expo **EAS Build**; **CI:** tests, lint, OpenAPI check.
- **Deploy:** container host + managed DB; env-specific secrets; **PSP sandbox** outside production.

## Architecture Validation Results

### Coherence validation

**Decision compatibility:** Client/server split, financial logic on the API, PostgreSQL OLTP, optional Redis, and Vietnam PSP/KYC constraints are consistent. No conflicting second-stack choices are documented.

**Pattern consistency:** Naming (DB `snake_case`, API `camelCase`), Problem+JSON errors, ISO dates, integer VND, and WebSocket event naming align with NestJS and Expo.

**Structure alignment:** Module list supports escrow, chat, webhooks, outbox, disputes, and admin APIs; `frontend/` is explicitly non-authoritative for money.

### Requirements coverage validation

**Epic/FR coverage:** FR1–FR18 from planning epics map to `auth`, `users`, `kyc`, `tasks`, `wallets`, `payments`, `chat`, `notifications`, `disputes`, `ratings`, `analytics`, and `admin` as in **Requirements to structure mapping**.

**NFR coverage:** Sub–2s perception via WebSocket/SSE and efficient writes; security via TLS, RBAC, PII gating, idempotency, webhook signatures; scalability via stateless API and DB-first design with optional Redis; audit via ledger and append-only-style financial events.

### Implementation readiness validation

**Decisions:** Critical choices are documented; runtime/SDK versions should be pinned when scaffolds are created.

**Structure:** Concrete tree and boundaries are defined for API and mobile.

**Patterns:** High-conflict areas (naming, errors, money, realtime) have explicit rules and examples.

### Gap analysis results

- **Important:** Formal UX spec when available; choose **Prisma vs TypeORM**; pin Node/Nest/Expo SDK versions at bootstrap.
- **Nice:** Decide whether **admin** is API-only first vs a separate **admin-web** app; optional **`packages/shared-types`** from OpenAPI.

### Validation issues addressed

Gaps are recorded above; none block starting **API shell + Postgres + auth + OpenAPI** per the implementation sequence.

### Architecture completeness checklist

**Requirements analysis** — context, scale, constraints, cross-cutting concerns: **complete**  
**Architectural decisions** — stack, integrations, performance posture: **complete**  
**Implementation patterns** — naming, structure, communication, process: **complete**  
**Project structure** — tree, boundaries, FR mapping, integrations: **complete**

### Architecture readiness assessment

**Overall status:** **READY FOR IMPLEMENTATION** (with UX / ORM / version follow-ups).  
**Confidence:** **High** for backend/mobile split and money/chat paths; **medium** until UX and ORM are fixed.

**Strengths:** Clear trust boundary, ledger-friendly data model, OpenAPI-led clients, explicit PII and webhook rules.

**Future enhancement:** Data warehouse, advanced fraud, multi-region — deferred in core decisions.

### Implementation handoff

**AI agent guidelines:** Treat this document and **Implementation Patterns** as source of truth; respect module boundaries; never place PSP secrets on mobile.

**First implementation priority:** Scaffold **commiz-api** and **commiz-mobile**, provision **PostgreSQL**, add **authentication** and **OpenAPI**, then implement the **tasks** state machine and PII gates.
