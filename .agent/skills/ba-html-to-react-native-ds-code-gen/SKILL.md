---
name: ba-html-to-react-native-ds-code-gen
description: >
  Chuyển đổi HTML prototype (web) thành code React Native/TypeScript (Expo) cho mobile app,
  tuân thủ Design Tokens và Mobile Design System của bất kỳ brand/dự án nào.
  Kích hoạt khi user paste HTML và yêu cầu: "convert sang React Native", "gen màn mobile từ HTML",
  "refactor HTML thành RN component", "chuyển HTML web → mobile app", hoặc đề cập
  "React Native", "Expo", "mobile screen", "design system mobile" cùng với HTML input.
version: 1.2.0
author: M2MBA
last_updated: 2026-03-10
---

## 1. MỤC TIÊU (OBJECTIVE)

Skill nhận **HTML prototype** (web hoặc mobile web) làm đầu vào và sinh ra:
- **React Native + TypeScript (Expo)** screen component.
- **Design System mobile** (tokens + base components) tuân thủ Brand Guideline của dự án.
- Gợi ý tích hợp navigation (Expo Router hoặc React Navigation).

Skill này áp dụng cho **mọi brand/dự án**, không phụ thuộc vào một codebase cụ thể.

---

## 2. ĐIỀU KIỆN TIÊN QUYẾT & NGUYÊN TẮC ƯU TIÊN STYLE

### 2.1 Nguồn chuẩn về visual (theo thứ tự ưu tiên)

| Ưu tiên | Nguồn | Ghi chú |
|---------|-------|---------|
| 1 | Brand Guideline chính thức của dự án | File `.md` hoặc tài liệu design |
| 2 | HTML prototype do user cung cấp | Coi là nguồn sự thật mới nhất nếu không có guideline |

### 2.2 Khi CHƯA có Design Token / Mobile Design System

Agent **PHẢI HỎI LẠI** user:

> "Anh/chị muốn ưu tiên **Brand Guideline hiện có** hay **style của HTML prototype** làm chuẩn cho màn mobile?"

Sau khi user chọn:

- **Ưu tiên Brand Guideline** → dùng guideline làm gốc, so sánh với HTML để cập nhật nếu HTML thể hiện phiên bản thiết kế mới hơn, rồi sinh Design Tokens.
- **Ưu tiên HTML prototype** → coi HTML là nguồn sự thật mới nhất, cập nhật Brand Guideline + sinh Design Tokens từ HTML.

> ⚠️ Chỉ sau khi đã **xác định xong nguồn chuẩn**, Agent mới bắt đầu gen code.

### 2.3 Khi CHƯA có app Expo/React Native trong repo

Agent **TỰ SCAFFOLD PROJECT MỚI**, nhưng phải hỏi 2 thông tin sau trước khi tạo:

> 1. **Tên project** (ví dụ: `my-app-mobile`, `abc-mobile`) — dùng làm tên thư mục và `package.json`.
> 2. **Navigation pattern** — Expo Router (file-based, mặc định khuyên dùng) hay React Navigation (stack/tab)?

Ngoài ra Agent hỏi thêm để xác định kiểu repo — **nếu user không trả lời hoặc không chắc, mặc định dùng Standalone**:

> 3. "Repo này đã có sẵn code khác (web/backend) chưa, hay đây là repo mới hoàn toàn chỉ dành cho mobile?"

**Giải thích 2 khái niệm cho user:**

| | Standalone *(mặc định)* | Monorepo |
|---|---|---|
| **Là gì?** | Repo chỉ chứa mỗi app mobile, clone về là chạy luôn | Repo đã có nhiều project khác (web, backend…), mobile là một subfolder bên trong |
| **Ví dụ cấu trúc** | `abc-mobile/` → `app/`, `screens/`, `package.json` | `abc-repo/` → `web/`, `backend/`, `mobile/` |
| **Phù hợp khi** | Dự án mới hoàn toàn, hoặc mobile là app độc lập | Mobile cần share code với web/backend trong cùng repo |
| **Config** | Đơn giản | Phức tạp hơn, dev tự điều chỉnh sau |

Sau khi có đủ thông tin, Agent tạo scaffold theo cấu trúc chuẩn:

```
[project-name]/
├── app/                        # Expo Router routes (nếu dùng Expo Router)
│   ├── (tabs)/                 # Tab screens
│   └── _layout.tsx             # Root layout
├── design-system/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── radius.ts
│   │   └── shadow.ts
│   └── components/             # Button, Card, Badge, BottomSheet, Header, BottomNav, ...
├── screens/                    # Screen components gen từ HTML
├── mock/                       # Mock data
├── assets/                     # Fonts, images, icons
├── app.json                    # Expo config
├── package.json
└── tsconfig.json
```

**Thư viện khởi tạo mặc định** (Agent thêm vào `package.json`):

| Package | Mục đích |
|---------|---------|
| `expo` | Core Expo SDK |
| `expo-router` | File-based navigation (nếu chọn Expo Router) |
| `@react-navigation/native` + `@react-navigation/bottom-tabs` | Nếu chọn React Navigation |
| `react-native-safe-area-context` | SafeAreaView |
| `@expo/vector-icons` | Icon set |
| `expo-font` | Custom fonts |
| `react-native-reanimated` | Animation |

> ✅ Agent tạo đủ file scaffold + sinh ngay Design Tokens từ Brand Guideline/HTML, sau đó tiếp tục pipeline gen screen.

### 2.4 Khi ĐÃ có app Expo/React Native trong repo

- Ghi code **trực tiếp vào app hiện có**, KHÔNG tạo project RN/Expo mới.
- Ưu tiên tái sử dụng Design System + tokens hiện có.

**Nguyên tắc áp dụng style:**

| Trường hợp | Hành động |
|-----------|-----------|
| Đã có trong Design Tokens/DS | Tuân thủ hoàn toàn, KHÔNG override theo HTML |
| Chưa có trong tokens/DS | Lấy từ HTML → trích thành token mới hoặc component mới |

---

## 3. QUY TRÌNH THỰC THI (PIPELINE – BẮT BUỘC 6 BƯỚC)

### Bước 1 – Đọc Brand Guideline & Tokens

1. Tìm và đọc Brand Guideline của dự án (thường ở `Prototype/Brand Guideline/` hoặc do user cung cấp).
2. Trích xuất:
   - Màu sắc (primary, secondary, neutral, semantic colors).
   - Typography (font family, size scale, weight, line-height).
   - Spacing system (thường base 4px hoặc 8px).
   - Border radius, shadows/elevation, component specs.
3. Kiểm tra tokens mobile đã có trong project (nếu có).
4. **Không tự bịa** màu, spacing, font-size ngoài guideline/tokens.

---

### Bước 2 – Phân tích HTML đầu vào (từ trên xuống dưới, KHÔNG bỏ sót)

> ⚠️ **Nguyên tắc bắt buộc**: Agent phải đọc toàn bộ HTML từ thẻ đầu tiên đến thẻ cuối cùng theo đúng thứ tự DOM. **Không được bỏ qua bất kỳ block nào**, kể cả block nhỏ, ẩn, hoặc trông có vẻ không quan trọng.

**Trước khi gen code, Agent PHẢI liệt kê ra toàn bộ các tầng layout theo thứ tự từ trên xuống:**

```
[Tầng 1] StatusBar / Safe Area top
[Tầng 2] Header (back button, title, action icons, v.v.)
[Tầng 3] Sub-header / Tab bar / Segment control (nếu có)
[Tầng 4] Content chính (ScrollView / FlatList / Map / Form...)
  └─ Block A: ...
  └─ Block B: ...
  └─ Block C: ...
[Tầng 5] Floating button / FAB (nếu có)
[Tầng 6] Bottom sheet / Drawer (nếu có)
[Tầng 7] Bottom navigation / Tab bar
[Tầng 8] Safe Area bottom
```

**Với mỗi tầng, ghi nhận đầy đủ:**

| Thông tin | Cần ghi nhận |
|-----------|-------------|
| **Nội dung** | Text, label, icon, badge, image — y chang HTML gốc |
| **Layout** | flex direction, alignment, spacing giữa các phần tử |
| **Style** | màu nền, màu text, border, border-radius, shadow |
| **Typography** | font-size, font-weight, line-height của từng Text element |
| **Trạng thái** | active/inactive tab, selected/unselected, enabled/disabled |
| **Icon** | tên icon (từ text node `<span>`, attribute `class`, `data-icon`...) |
| **Tương tác** | tap → đi đâu, swipe, scroll, expand/collapse |

**Các phần dễ bị bỏ sót — Agent PHẢI kiểm tra kỹ:**
- Divider / separator line giữa các section.
- Badge / dot notification trên icon.
- Label phụ (sub-label, caption) bên dưới text chính.
- Padding / margin của container ngoài cùng.
- Safe Area top/bottom (notch, home indicator).
- Empty state (nếu HTML có render màn trống).
- Loading / skeleton state (nếu HTML có).
- Sticky header khi scroll.

> ✅ Chỉ sau khi đã liệt kê xong toàn bộ tầng layout, Agent mới bắt đầu Bước 3.

---

### Bước 3 – Map HTML → React Native Primitives + Design System

**Mapping HTML tag → RN component:**

| HTML | React Native |
|------|-------------|
| `div`, `section`, `main` | `View` |
| `p`, `span`, `h1`–`h6` | `Text` (style từ tokens) |
| `button`, clickable `div` | `Pressable` (ưu tiên) hoặc `TouchableOpacity` |
| `img` | `Image` hoặc `ImageBackground` |
| Scrollable area | `ScrollView` hoặc `FlatList` |
| Full-screen wrapper | `SafeAreaView` |

**Icon mapping:**
- Nếu đã có component `Icon` trong DS (dùng `@expo/vector-icons`) → map toàn bộ icon HTML về `<Icon name="..." />`.
- Nếu chưa có → dùng trực tiếp từ `@expo/vector-icons`:
  ```tsx
  import { MaterialIcons } from '@expo/vector-icons';
  <MaterialIcons name="arrow-back" size={24} color={colors.neutral[900]} />
  ```

**Phân lớp component:**
- **Screen component**: `[FeatureName]Screen.tsx` — layout tổng, không có logic phức tạp.
- **DS components**: tách các block lặp lại/độc lập ra `design-system/components/`.
- **Không để JSX "rừng rậm"** trong screen — block UI lặp lại → component riêng.

---

### Bước 4 – Map Style HTML → StyleSheet (theo Tokens)

- **Không dùng Tailwind web class** trực tiếp trên React Native.
- Style phải dùng `StyleSheet.create({...})` hoặc utility (ví dụ `nativewind`) nhưng **map về tokens**:

```tsx
// ❌ KHÔNG làm
style={{ marginTop: 13, color: '#00bdb6' }}

// ✅ NÊN làm
style={{ marginTop: spacing[3], color: colors.primary[500] }}
```

**Mapping tokens:**

| CSS property | Token category |
|-------------|---------------|
| `color`, `background-color` | `colors.*` |
| `margin`, `padding`, `gap` | `spacing.*` |
| `border-radius` | `radius.*` |
| `font-size`, `font-weight`, `line-height` | `typography.*` |
| `box-shadow` | `shadows.*` / RN `elevation` |

---

### Bước 5 – Sinh Code React Native + TypeScript

**Cấu trúc file screen:**
```tsx
// screens/[FeatureName]Screen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, radius } from '@/design-system/tokens';
import { Button, Card } from '@/design-system/components';

interface Props {
  // define props
}

const [FeatureName]Screen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* content */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
});

export default [FeatureName]Screen;
```

**Cấu trúc component DS:**
```tsx
// design-system/components/[ComponentName].tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '@/design-system/tokens';

export interface [ComponentName]Props {
  // typed props — KHÔNG dùng `any`
}

const [ComponentName]: React.FC<[ComponentName]Props> = (props) => {
  return <View style={styles.container}>{/* ... */}</View>;
};

const styles = StyleSheet.create({ ... });

export default [ComponentName];
```

**Navigation (gợi ý, không bắt buộc implement):**
- Expo Router:
  ```tsx
  // app/(tabs)/[feature].tsx
  import [FeatureName]Screen from '@/screens/[FeatureName]Screen';
  export default [FeatureName]Screen;
  ```
- React Navigation: gợi ý tên route + stack/tab structure.

**Mock data:**
- **Luôn extract data trực tiếp từ HTML** — tên, số tiền, ngày giờ, trạng thái, hình ảnh, v.v. phải giống y chang HTML gốc, không tự bịa hay thay bằng placeholder như `"Lorem ipsum"`, `"Item 1"`, `"$0.00"`.
- Nếu HTML có nhiều item lặp lại (list, card...) → extract **tất cả** các item đó vào mock array, không rút gọn.
- Tách mock data vào file riêng: `mock/[feature].ts`, export dưới dạng typed array/object.
- UI component **không gọi API trực tiếp**, chỉ nhận data qua props hoặc import từ mock.

```ts
// ✅ mock/rides.ts — data lấy thẳng từ HTML
export const mockRides: Ride[] = [
  {
    id: '1',
    type: 'Taxi',
    from: '23 Lý Tự Trọng, Q.1',
    to: 'Sân bay Tân Sơn Nhất',
    date: '12/03/2026 - 08:30',
    amount: 85000,
    status: 'completed',
  },
  // ... các item khác từ HTML
];

// ❌ KHÔNG làm
export const mockRides = [
  { id: '1', type: 'Type A', from: 'Address 1', to: 'Address 2', amount: 0 },
];
```

---

### Bước 6 – Refactor & Kiểm tra Mobile UX

**Checklist bắt buộc trước khi output:**

- [ ] Đã liệt kê đủ tất cả tầng layout từ header → footer trước khi gen code.
- [ ] Không bỏ sót divider, badge, caption, safe area, empty/loading state trong HTML.
- [ ] Touch target ≥ 44×44pt cho mọi interactive element.
- [ ] Icon trong container (ô tròn/vuông) được căn giữa bằng `alignItems: 'center'` + `justifyContent: 'center'`.
- [ ] Text size ≥ 12pt cho caption, ≥ 14pt cho body.
- [ ] Layout không tràn trên màn nhỏ (375px width – iPhone SE).
- [ ] Không có hardcode màu hex hoặc spacing pixel.
- [ ] Mọi component có `Props` interface với TypeScript.
- [ ] Screen không quá ~200 LOC (nếu dài hơn, tách component).
- [ ] Có gợi ý navigation route (Expo Router hoặc React Navigation).
- [ ] Mock data extract từ HTML gốc, không có placeholder hay data bịa.

---

## 4. QUY TẮC CHẤT LƯỢNG (NON-NEGOTIABLE)

| Rule | Chi tiết |
|------|---------|
| **Brand Guideline First** | Màu, spacing, typography phải đồng bộ với guideline đã xác định |
| **Design System First** | Tái sử dụng tokens + base components, không tạo DS song song |
| **No hardcode** | Không dùng inline hex, pixel không từ tokens |
| **Type Safety** | 100% TypeScript, không dùng `any` |
| **Separation of Concerns** | UI ở components/screens; logic, API, state global tách ra hooks/store |
| **Mobile Native Patterns** | `FlatList` cho list dài, `SafeAreaView` khi cần notch, `Pressable` cho tap |
| **No platform-specific assumptions** | Dùng `Platform.OS` khi behavior khác nhau giữa iOS/Android |

---

## 5. VÍ DỤ TƯƠNG TÁC

**User:**
> Đây là HTML màn Activity (web), hãy convert thành màn Activity cho mobile app (React Native/Expo) theo brand guideline của dự án ABC.

**Agent thực hiện:**
1. Đọc Brand Guideline của dự án ABC → trích tokens.
2. Phân tích HTML: header, segment control, danh sách card, bottom nav.
3. Map sang:
   - `ActivityScreen.tsx` với `ScrollView` + `ActivityCard` component.
   - `BottomNav` dùng tokens.
4. Sinh code:
   - `design-system/tokens/*` (nếu chưa có).
   - `design-system/components/ActivityCard.tsx`.
   - `screens/ActivityScreen.tsx`.
5. Gợi ý route: `app/(tabs)/activity.tsx` → `export default ActivityScreen`.

---

## 6. QUAN HỆ VỚI CÁC SKILL KHÁC

| Skill | Khi nào dùng |
|-------|-------------|
| `ba-mobile-frontend-code-gen` | Gen mobile UI từ **yêu cầu chức năng** + design guideline (không có HTML sẵn) |
| `ba-html-to-react-native-ds-code-gen` *(skill này)* | Gen mobile UI từ **HTML prototype có sẵn** (refactor/convert web → mobile) |