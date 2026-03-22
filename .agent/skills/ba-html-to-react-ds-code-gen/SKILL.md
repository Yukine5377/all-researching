---
name: ba-html-to-react-ds-code-gen
description: >
  Chuyển đổi HTML prototype thành code React/TypeScript + Tailwind cho web app,
  tuân thủ Design Tokens và Design System của bất kỳ brand/dự án nào.
  Kích hoạt khi user paste HTML và yêu cầu: "convert sang React + Tailwind",
  "gen component React từ HTML", "refactor HTML thành React component dùng Design System",
  "chuyển HTML → code React TypeScript chuẩn Brand Guideline", hoặc đề cập
  "React", "Tailwind", "Design System web", "component web" cùng với HTML input.
version: 1.1.0
author: M2MBA
last_updated: 2026-03-10
---

## 1. MỤC TIÊU (OBJECTIVE)

Skill nhận **HTML prototype** (export từ Figma, template, legacy code...) làm đầu vào và sinh ra:
- **React + TypeScript + Tailwind** page/component sạch, chuẩn Design System.
- **Design Tokens** (colors, typography, spacing, radius, shadow) đồng bộ Brand Guideline.
- **Base Components & Layout Components** tái sử dụng được.

Skill này áp dụng cho **mọi brand/dự án web**, không phụ thuộc vào một codebase cụ thể.

---

## 2. ĐIỀU KIỆN TIÊN QUYẾT & NGUYÊN TẮC ƯU TIÊN STYLE

### 2.1 Nguồn chuẩn về visual (theo thứ tự ưu tiên)

| Ưu tiên | Nguồn | Ghi chú |
|---------|-------|---------|
| 1 | Brand Guideline chính thức của dự án | File `.md` hoặc tài liệu design |
| 2 | HTML prototype do user cung cấp | Coi là nguồn sự thật mới nhất nếu không có guideline |

### 2.2 Khi CHƯA có Design Token / Design System

Agent **PHẢI HỎI LẠI** user:

> "Anh/chị muốn ưu tiên **Brand Guideline hiện có** hay **style của HTML prototype** làm chuẩn cho web?"

Sau khi user chọn:

- **Ưu tiên Brand Guideline** → dùng guideline làm gốc, so sánh với HTML để cập nhật nếu HTML thể hiện phiên bản thiết kế mới hơn, rồi sinh Design Tokens + Tailwind config.
- **Ưu tiên HTML prototype** → coi HTML là nguồn sự thật mới nhất, cập nhật Brand Guideline + sinh Design Tokens từ HTML.

> ⚠️ Chỉ sau khi đã **xác định xong nguồn chuẩn**, Agent mới bắt đầu gen code.

### 2.3 Khi CHƯA có project React trong repo

Agent **TỰ SCAFFOLD PROJECT MỚI**, nhưng phải hỏi 2 thông tin sau trước khi tạo:

> 1. **Tên project** (ví dụ: `my-app-web`, `abc-portal`) — dùng làm tên thư mục và `package.json`.
> 2. **Build tool** — Vite (mặc định, khuyên dùng) hay Create React App / Next.js?

Ngoài ra Agent hỏi thêm để xác định kiểu repo — **nếu user không trả lời hoặc không chắc, mặc định dùng Standalone**:

> 3. "Repo này đã có sẵn code khác (mobile/backend) chưa, hay đây là repo mới hoàn toàn chỉ dành cho web?"

**Giải thích 2 khái niệm cho user:**

| | Standalone *(mặc định)* | Monorepo |
|---|---|---|
| **Là gì?** | Repo chỉ chứa mỗi web app, clone về là chạy luôn | Repo đã có nhiều project khác (mobile, backend…), web app là một subfolder bên trong |
| **Ví dụ cấu trúc** | `abc-web/` → `src/`, `public/`, `package.json` | `abc-repo/` → `web/`, `mobile/`, `backend/` |
| **Phù hợp khi** | Dự án mới hoàn toàn, hoặc web là app độc lập | Web cần share code với mobile/backend trong cùng repo |
| **Config** | Đơn giản | Phức tạp hơn, dev tự điều chỉnh sau |

Sau khi có đủ thông tin, Agent tạo scaffold theo cấu trúc chuẩn:

```
[project-name]/
├── src/
│   ├── design-system/
│   │   ├── tokens/
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   ├── spacing.ts
│   │   │   ├── radius.ts
│   │   │   ├── shadow.ts
│   │   │   └── index.ts
│   │   ├── components/
│   │   │   ├── ui/          # Button, Input, Card, Badge, Tag, Table, Modal, Tabs...
│   │   │   └── layout/      # AppLayout, PageHeader, Sidebar, Section, Content...
│   │   ├── utils/           # cn.ts, format.ts...
│   │   └── constants/       # status.ts, categories.ts...
│   ├── pages/               # Page components gen từ HTML
│   └── mock/                # Mock data
├── tailwind.config.ts        # Extend từ design tokens
├── index.html
├── package.json
└── tsconfig.json
```

**Thư viện khởi tạo mặc định** (Agent thêm vào `package.json`):

| Package | Mục đích |
|---------|---------|
| `react` + `react-dom` | Core React |
| `typescript` | Type safety |
| `tailwindcss` + `postcss` + `autoprefixer` | Styling |
| `vite` + `@vitejs/plugin-react` | Build tool (nếu chọn Vite) |
| `clsx` + `tailwind-merge` | Utility cho `cn()` helper |
| `lucide-react` | Icon set |
| `react-router-dom` | Routing (nếu multi-page) |

> ✅ Agent tạo đủ file scaffold + sinh ngay Design Tokens + `tailwind.config.ts` từ Brand Guideline/HTML, sau đó tiếp tục pipeline gen component/page.

### 2.4 Khi ĐÃ có project React trong repo

- Ghi code **trực tiếp vào project hiện có**, KHÔNG tạo project mới.
- Ưu tiên tái sử dụng Design System + tokens hiện có.

**Nguyên tắc áp dụng style:**

| Trường hợp | Hành động |
|-----------|-----------|
| Đã có trong Design Tokens / DS | Tuân thủ hoàn toàn, KHÔNG override theo HTML |
| Chưa có trong tokens / DS | Lấy từ HTML → trích thành token mới hoặc component mới trong `design-system/` |

---

## 3. QUY TRÌNH THỰC THI (PIPELINE – BẮT BUỘC 6 BƯỚC)

### Bước 1 – Đọc Brand Guideline & Tokens

1. Tìm và đọc Brand Guideline của dự án (do user cung cấp hoặc có trong repo).
2. Trích xuất:
   - Màu sắc (primary, secondary, neutral, semantic: success/warning/error/info).
   - Typography (font family, size scale, weight, line-height).
   - Spacing system (thường base 4px hoặc 8px).
   - Border radius, shadows, border, layout grid.
3. Kiểm tra `tailwind.config.ts` và `tokens/` đã có trong project (nếu có).
4. **Không tự bịa** màu, spacing, font-size ngoài guideline/tokens.

---

### Bước 2 – Phân tích HTML đầu vào (từ trên xuống dưới, KHÔNG bỏ sót)

> ⚠️ **Nguyên tắc bắt buộc**: Agent phải đọc toàn bộ HTML từ thẻ đầu tiên đến thẻ cuối cùng theo đúng thứ tự DOM. **Không được bỏ qua bất kỳ block nào**, kể cả block nhỏ, ẩn, hoặc trông có vẻ không quan trọng.

**Trước khi gen code, Agent PHẢI liệt kê ra toàn bộ các tầng layout theo thứ tự từ trên xuống:**

```
[Tầng 1] Top bar / Announcement bar (nếu có)
[Tầng 2] Header / Navbar (logo, navigation, actions)
[Tầng 3] Sub-header / Breadcrumb / Page title bar (nếu có)
[Tầng 4] Content chính
  └─ Sidebar (nếu có)
  └─ Main content
     └─ Section A: ...
     └─ Section B: ...
     └─ Section C: ...
[Tầng 5] Sticky bar / Floating action (nếu có)
[Tầng 6] Footer
```

**Với mỗi tầng, ghi nhận đầy đủ:**

| Thông tin | Cần ghi nhận |
|-----------|-------------|
| **Nội dung** | Text, label, icon, badge, image — y chang HTML gốc |
| **Layout** | flex/grid direction, alignment, gap, column count |
| **Style** | màu nền, màu text, border, border-radius, shadow |
| **Typography** | font-size, font-weight, line-height của từng text element |
| **Trạng thái** | active/inactive tab, hover, selected, disabled |
| **Icon** | tên icon (từ class `fa-*`, `heroicon-*`, text node trong `<span>`, SVG path...) |
| **Tương tác** | click → đi đâu, hover effect, expand/collapse, open modal |
| **Responsive** | breakpoint ẩn/hiện, stack từ row → column trên mobile |

**Các phần dễ bị bỏ sót — Agent PHẢI kiểm tra kỹ:**
- Divider / separator giữa các section.
- Badge / notification dot trên icon.
- Tooltip, helper text, error message dưới input.
- Label phụ (sub-label, caption, description) bên dưới heading.
- Padding / margin của wrapper ngoài cùng.
- Empty state (khi không có dữ liệu).
- Loading / skeleton state (nếu HTML có).
- Sticky header / sticky sidebar khi scroll.
- Mobile hamburger menu / responsive nav (nếu HTML có).

> ✅ Chỉ sau khi đã liệt kê xong toàn bộ tầng layout, Agent mới bắt đầu Bước 3.

---

### Bước 3 – Map HTML → Layout Components & Base UI Components

**Mapping HTML tag → Component:**

| HTML pattern | React Component |
|-------------|----------------|
| `<header>`, top nav | `AppLayout` > `Header` hoặc `Navbar` |
| `<aside>`, sidebar | `Sidebar` component |
| `<main>`, content area | `Content` / `Section` component |
| `<footer>` | `Footer` component |
| `<button>`, `<a class="btn">` | `Button` DS component |
| `<input>`, `<textarea>` | `Input` DS component |
| `<select>` | `Select` DS component |
| `<table>` | `Table` DS component |
| Card pattern (`div` với shadow/border) | `Card` DS component |
| Badge / pill / tag | `Badge` / `Tag` DS component |
| Status indicator | `StatusBadge` với `status.ts` |
| Modal / dialog | `Modal` DS component |
| Tabs / segment | `Tabs` DS component |

**Nguyên tắc phân lớp:**
- **Không sinh HTML thuần** nếu trong Design System đã có component phù hợp.
- **Page component** (`pages/`): layout tổng + lắp ghép từ DS components, không có business logic phức tạp.
- **DS components** (`design-system/components/`): tách mọi block lặp lại / dùng nhiều nơi.
- Nếu chưa có component phù hợp → **đề xuất tạo Base Component mới** (ví dụ: `StatCard`, `InfoBanner`, `EmptyState`) với props tối thiểu, sinh code vào `design-system/components/ui/`.

---

### Bước 4 – Map Style HTML → Tailwind + Design Tokens

- **Không hardcode hex hay pixel tự do** trong Tailwind class.
- Style phải dùng class Tailwind đã được map từ tokens trong `tailwind.config.ts`:

```tsx
// ❌ KHÔNG làm
<div className="bg-[#00bdb6] mt-[13px] text-[13px]" />

// ✅ NÊN làm
<div className="bg-primary-500 mt-3 text-sm" />
```

**Mapping tokens → Tailwind:**

| Token category | Tailwind class pattern |
|---------------|----------------------|
| `colors.primary.*` | `bg-primary-*`, `text-primary-*`, `border-primary-*` |
| `colors.neutral.*` | `bg-neutral-*`, `text-neutral-*` |
| `colors.semantic.*` | `bg-success-*`, `bg-warning-*`, `bg-error-*` |
| `spacing.*` | `p-*`, `m-*`, `gap-*` theo scale |
| `radius.*` | `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full` |
| `shadow.*` | `shadow-sm`, `shadow-md`, `shadow-lg` |
| `typography.size.*` | `text-xs`, `text-sm`, `text-base`, `text-lg`... |
| `typography.weight.*` | `font-normal`, `font-medium`, `font-semibold`, `font-bold` |

**Status semantic** — dùng `StatusBadge` hoặc class semantic thay vì hardcode màu:
```tsx
// ❌ KHÔNG làm
<span className="bg-green-500 text-white">Active</span>

// ✅ NÊN làm
<StatusBadge status="success" label="Active" />
```

---

### Bước 5 – Sinh Code React + TypeScript

**Cấu trúc file page:**
```tsx
// pages/[FeatureName]Page.tsx
import React from 'react';
import { AppLayout, PageHeader, Section } from '@/design-system/components/layout';
import { Button, Card, Badge } from '@/design-system/components/ui';
import { mockFeatureData } from '@/mock/[feature]';

const [FeatureName]Page: React.FC = () => {
  return (
    <AppLayout>
      <PageHeader title="..." breadcrumb={[...]} />
      <Section>
        {/* content */}
      </Section>
    </AppLayout>
  );
};

export default [FeatureName]Page;
```

**Cấu trúc DS component:**
```tsx
// design-system/components/ui/[ComponentName].tsx
import React from 'react';
import { cn } from '@/design-system/utils/cn';

export interface [ComponentName]Props {
  // typed props — KHÔNG dùng `any`
  className?: string;
}

const [ComponentName]: React.FC<[ComponentName]Props> = ({ className, ...props }) => {
  return (
    <div className={cn('base-classes', className)}>
      {/* ... */}
    </div>
  );
};

export default [ComponentName];
```

**Mock data — extract y chang từ HTML:**
- **Luôn extract data trực tiếp từ HTML** — tên, số liệu, ngày giờ, trạng thái, link ảnh... phải giống y chang HTML gốc, không tự bịa hay thay bằng placeholder như `"Lorem ipsum"`, `"Item 1"`, `"$0"`.
- Nếu HTML có nhiều item lặp lại (list, table row, card...) → extract **tất cả** các item đó vào mock array, không rút gọn.
- Tách mock data vào file riêng: `mock/[feature].ts`, export dưới dạng typed array/object.
- Page/Component **không hardcode data inline**, chỉ import từ mock hoặc nhận qua props.

```ts
// ✅ mock/courses.ts — data lấy thẳng từ HTML
export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Kỹ năng phân tích yêu cầu',
    instructor: 'Nguyễn Văn A',
    price: 1200000,
    rating: 4.8,
    category: 'BA',
    status: 'published',
  },
  // ... các item khác từ HTML
];

// ❌ KHÔNG làm
export const mockCourses = [
  { id: '1', title: 'Course Title', instructor: 'Instructor', price: 0 },
];
```

**Navigation / Routing:**
- Dùng `react-router-dom` nếu multi-page, gợi ý route path cho từng page.
- Nếu dùng Next.js, gợi ý file path trong `app/` hoặc `pages/`.

---

### Bước 6 – Refactor & Kiểm tra

**Checklist bắt buộc trước khi output:**

- [ ] Đã liệt kê đủ tất cả tầng layout từ header → footer trước khi gen code.
- [ ] Không bỏ sót divider, badge, tooltip, caption, empty/loading state trong HTML.
- [ ] Không có hardcode hex color hoặc pixel spacing tự do.
- [ ] Không có HTML wrapper thừa (`div` không có semantic/style).
- [ ] Mọi component có `Props` interface với TypeScript, không dùng `any`.
- [ ] Dùng DS component thay vì HTML thuần khi có thể.
- [ ] Mock data extract từ HTML gốc, không có placeholder hay data bịa.
- [ ] Page không quá ~200 LOC (nếu dài hơn, tách component).
- [ ] Responsive được xử lý (breakpoint Tailwind: `sm:`, `md:`, `lg:`).
- [ ] `Platform.select()` → không áp dụng web; thay bằng kiểm tra Tailwind responsive class đủ chưa.

---

## 4. QUY TẮC CHẤT LƯỢNG (NON-NEGOTIABLE)

| Rule | Chi tiết |
|------|---------|
| **Brand Guideline First** | Màu, spacing, typography phải đồng bộ với guideline đã xác định |
| **Design System First** | Tái sử dụng tokens + base/layout components, không code inline chỉ trong 1 page |
| **No hardcode** | Không dùng hex, `text-[13px]`, `mt-[17px]` ngoài token scale |
| **Type Safety** | 100% TypeScript, props rõ ràng, không dùng `any` |
| **Separation of Concerns** | UI ở components/pages; business logic, API call, state global tách ra hooks/store |
| **Incremental Output** | HTML lớn → chia nhỏ: Base Components trước, Page sau — không dump toàn bộ 1 lần |
| **Responsive** | Luôn kiểm tra breakpoint Tailwind, không bỏ sót layout mobile |

---

## 5. VÍ DỤ TƯƠNG TÁC

**User:**
> Đây là HTML trang danh sách khóa học, hãy convert thành React page + Tailwind theo brand guideline của dự án ABC.

**Agent thực hiện:**
1. Đọc Brand Guideline dự án ABC → trích tokens + Tailwind config.
2. Liệt kê tầng layout: Navbar → Breadcrumb → Filter bar → Grid khóa học → Pagination → Footer.
3. Map sang:
   - `CourseListPage.tsx` dùng `AppLayout` + `PageHeader`.
   - `CourseCard.tsx` trong `design-system/components/ui/`.
   - `StatusBadge` cho trạng thái khóa học.
4. Sinh code:
   - `design-system/tokens/*` (nếu chưa có).
   - `design-system/components/ui/CourseCard.tsx`.
   - `pages/CourseListPage.tsx`.
   - `mock/courses.ts` với data y chang HTML gốc.
5. Gợi ý route: `/courses` → `<Route path="/courses" element={<CourseListPage />} />`.

---

## 6. QUAN HỆ VỚI CÁC SKILL KHÁC

| Skill | Khi nào dùng |
|-------|-------------|
| `ba-frontend-code-gen` | Gen web UI từ **yêu cầu chức năng** + design guideline (không có HTML sẵn) |
| `ba-html-to-react-ds-code-gen` *(skill này)* | Gen web UI từ **HTML prototype có sẵn** (refactor/convert HTML → React) |
| `ba-html-to-react-native-ds-code-gen` | Gen **mobile UI** (React Native/Expo) từ HTML prototype có sẵn |