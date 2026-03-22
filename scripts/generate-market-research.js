/**
 * Commiz Market Research — PPTX Generator
 * PptxGenJS — 10-slide deck
 * Audience: Investors & Dev Team
 */

const PptxGenJS = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

const pptx = new PptxGenJS();

// ─── Design System ──────────────────────────────────────────────────────────
const C = {
  navy:    "1E2761",
  iceBlue: "CADCFC",
  white:   "FFFFFF",
  accent:  "4FC3F7",
  light:   "F0F4FF",
  gray:    "64748B",
  green:   "10B981",
  orange:  "F59E0B",
  red:     "EF4444",
};

const makeShadow = () => ({
  type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12
});

pptx.layout = "LAYOUT_WIDE"; // 13.33" x 7.5"

// ─── Helper: Dark Slide BG ────────────────────────────────────────────────────
function darkBg(slide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%", fill: { color: C.navy }
  });
}

function lightBg(slide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%", fill: { color: C.light }
  });
}

// ─── Helper: Section Header Bar (light slides) ───────────────────────────────
function sectionBar(slide, label) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.85, fill: { color: C.navy }
  });
  slide.addText(label, {
    x: 0.4, y: 0, w: 12, h: 0.85, margin: 0,
    fontSize: 13, bold: true, color: C.iceBlue, valign: "middle"
  });
  slide.addText("COMMIZ — MARKET RESEARCH 2026", {
    x: 0, y: 0, w: 12.9, h: 0.85, margin: 0,
    fontSize: 9, color: C.accent, align: "right", valign: "middle"
  });
}

// ─── Helper: Card (light slides) ─────────────────────────────────────────────
function card(slide, x, y, w, h, opts = {}) {
  slide.addShape(pptx.ShapeType.rect, {
    x, y, w, h,
    fill: { color: opts.fill || C.white },
    line: { color: opts.border || C.accent, width: opts.borderWidth || 1.5 },
    shadow: makeShadow(),
    rectRadius: 0.07,
  });
  if (opts.accentBar !== false) {
    slide.addShape(pptx.ShapeType.rect, {
      x, y, w: 0.065, h,
      fill: { color: opts.accentColor || C.accent },
      rectRadius: 0.07,
    });
  }
}

// ═══════════════════════════════════════════════════════════════════
// SLIDE 1 — TITLE (dark)
// ═══════════════════════════════════════════════════════════════════
(function slide1() {
  const slide = pptx.addSlide();
  darkBg(slide);

  // Accent geometric decoration
  slide.addShape(pptx.ShapeType.rect, {
    x: 9.6, y: 0, w: 3.73, h: 7.5, fill: { color: "283593" }, line: { color: "283593" }
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 10.9, y: 0, w: 2.43, h: 7.5, fill: { color: "1565C0" }, line: { color: "1565C0" }
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 5.8, w: 9.6, h: 0.06, fill: { color: C.accent }, line: { color: C.accent }
  });

  // Logo / Product name badge
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 0.6, w: 2.1, h: 0.52,
    fill: { color: C.accent }, rectRadius: 0.08, line: { color: C.accent }
  });
  slide.addText("⚡ COMMIZ", {
    x: 0.5, y: 0.6, w: 2.1, h: 0.52, margin: 0,
    fontSize: 13, bold: true, color: C.navy, align: "center", valign: "middle"
  });

  slide.addText("Market Research Report", {
    x: 0.5, y: 1.45, w: 9, h: 0.5, margin: 0,
    fontSize: 14, color: C.iceBlue, italic: true
  });

  slide.addText("Commission Marketplace\nfor Vietnam & Southeast Asia", {
    x: 0.5, y: 2.0, w: 9, h: 1.6, margin: 0,
    fontSize: 38, bold: true, color: C.white,
    lineSpacingMultiple: 1.15
  });

  slide.addText(
    "Phân tích thị trường · Landscape cạnh tranh · Cơ hội & Rủi ro · Pháp lý",
    { x: 0.5, y: 3.7, w: 9, h: 0.5, margin: 0, fontSize: 13, color: C.iceBlue }
  );

  // Meta
  const metaItems = [
    { label: "Prepared for", value: "Investors & Dev Team" },
    { label: "Date", value: "March 2026" },
    { label: "Version", value: "v1.0 — Internal" },
    { label: "Scope", value: "Vietnam, Southeast Asia" },
  ];
  metaItems.forEach((m, i) => {
    const x = 0.5 + i * 2.3;
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 6.05, w: 2.1, h: 0.95,
      fill: { color: "283593" }, rectRadius: 0.06, line: { color: C.accent, width: 1 }
    });
    slide.addText(m.label, {
      x, y: 6.05, w: 2.1, h: 0.45, margin: [4, 6, 0, 6],
      fontSize: 8, color: C.iceBlue, valign: "bottom"
    });
    slide.addText(m.value, {
      x, y: 6.5, w: 2.1, h: 0.5, margin: [0, 6, 4, 6],
      fontSize: 10, bold: true, color: C.white, valign: "top"
    });
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 2 — TABLE OF CONTENTS (light)
// ═══════════════════════════════════════════════════════════════════
(function slide2() {
  const slide = pptx.addSlide();
  lightBg(slide);
  sectionBar(slide, "📋  Table of Contents");

  const sections = [
    { num: "01", title: "Executive Summary", desc: "3 key insights + top recommendation cho Commiz" },
    { num: "02", title: "Market Overview", desc: "TAM/SAM/SOM · Key trends · PESTLE highlights" },
    { num: "03", title: "User Personas", desc: "2 persona cards với goals, pains, JTBD" },
    { num: "04", title: "JTBD & Key Insights", desc: "Jobs-to-be-done + 6 findings từ desk research" },
    { num: "05", title: "Competitive Landscape", desc: "Competitor canvas · Matrix · Strategic gaps" },
    { num: "06", title: "Opportunities & Next Steps", desc: "ICE scores · Roadmap gợi ý · Rủi ro pháp lý" },
  ];

  sections.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.4;
    const y = 1.05 + row * 1.85;

    card(slide, x, y, 6.2, 1.6, {});
    slide.addText(s.num, {
      x: x + 0.18, y: y + 0.1, w: 0.78, h: 0.78, margin: 0,
      fontSize: 22, bold: true, color: C.accent, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 1.0, y: y + 0.12, w: 5, h: 0.45, margin: 0,
      fontSize: 14, bold: true, color: C.navy
    });
    slide.addText(s.desc, {
      x: x + 1.0, y: y + 0.58, w: 5, h: 0.6, margin: 0,
      fontSize: 10, color: C.gray
    });
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 3 — EXECUTIVE SUMMARY (dark)
// ═══════════════════════════════════════════════════════════════════
(function slide3() {
  const slide = pptx.addSlide();
  darkBg(slide);

  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.85, fill: { color: "0D1B6E" }, line: { color: "0D1B6E" }
  });
  slide.addText("03  EXECUTIVE SUMMARY", {
    x: 0.4, y: 0, w: 12, h: 0.85, margin: 0,
    fontSize: 13, bold: true, color: C.iceBlue, valign: "middle"
  });

  const findings = [
    {
      icon: "🌏",
      title: "Thị trường SEA bùng nổ",
      body: "Gig economy SEA đạt $8.9B năm 2024, CAGR 20.2%. Vietnam có 7M+ gig workers — tăng mạnh hậu COVID.",
      color: C.accent
    },
    {
      icon: "📱",
      title: "Hành vi số sẵn sàng",
      body: "77% urban user VN 18–45 tuổi dùng mobile payment hàng tháng. 50M e-wallets active năm 2024. Nền tảng hành vi phù hợp với Commiz.",
      color: C.green
    },
    {
      icon: "🔓",
      title: "Market gap rõ ràng",
      body: "Chưa có nền tảng nào tại VN cho phép tạo micro-commission linh hoạt (không chỉ home services). Commiz có cơ hội định nghĩa category.",
      color: C.orange
    },
  ];

  findings.forEach((f, i) => {
    const x = 0.4 + i * 4.3;
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 1.1, w: 4.1, h: 3.5,
      fill: { color: "253480" }, line: { color: f.color, width: 1.5 },
      shadow: makeShadow(), rectRadius: 0.08
    });
    slide.addText(f.icon, {
      x, y: 1.25, w: 4.1, h: 0.65, margin: 0,
      fontSize: 26, align: "center"
    });
    slide.addText(f.title, {
      x: x + 0.2, y: 1.95, w: 3.7, h: 0.55, margin: 0,
      fontSize: 13, bold: true, color: f.color, align: "center"
    });
    slide.addText(f.body, {
      x: x + 0.2, y: 2.55, w: 3.7, h: 1.8, margin: 0,
      fontSize: 10.5, color: C.white, align: "center", lineSpacingMultiple: 1.3
    });
  });

  // Top recommendation
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.4, y: 4.85, w: 12.5, h: 1.1,
    fill: { color: C.green + "22" }, line: { color: C.green, width: 1.5 }, rectRadius: 0.07
  });
  slide.addText("✅  TOP RECOMMENDATION", {
    x: 0.65, y: 4.9, w: 3.5, h: 0.35, margin: 0,
    fontSize: 10, bold: true, color: C.green
  });
  slide.addText(
    "Ra mắt tại TP.HCM & Hà Nội trước, tập trung micro-commission use-case (mua hộ, làm hộ, giao hộ) để build GMV nhanh. Xin giấy phép Intermediary Payment Service (Decree 52/2024) ngay từ đầu.",
    { x: 0.65, y: 5.2, w: 12, h: 0.65, margin: 0, fontSize: 11, color: C.white }
  );
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 4 — MARKET OVERVIEW (light)
// ═══════════════════════════════════════════════════════════════════
(function slide4() {
  const slide = pptx.addSlide();
  lightBg(slide);
  sectionBar(slide, "02  MARKET OVERVIEW");

  // TAM/SAM/SOM funnel-style boxes
  const markets = [
    { label: "TAM", sub: "SEA Gig Economy", val: "$8.9B", note: "2024, CAGR 20.2%", color: C.navy, tw: 3.5 },
    { label: "SAM", sub: "VN + ASEAN Task Platforms", val: "$389M", note: "Freelance platform segment, CAGR 23.8%", color: "2855A0", tw: 2.9 },
    { label: "SOM", sub: "VN Addressable (Year 3)", val: "$15–25M", note: "~1M users @ $15–25 avg GMV/user/yr", color: C.accent, tw: 2.3 },
  ];

  let sx = 0.4;
  markets.forEach((m, i) => {
    const boxW = 3.8;
    const boxX = 0.4 + i * 4.1;
    slide.addShape(pptx.ShapeType.rect, {
      x: boxX, y: 1.05, w: boxW, h: 2.7,
      fill: { color: m.color }, shadow: makeShadow(), rectRadius: 0.08,
      line: { color: m.color }
    });
    slide.addText(m.label, {
      x: boxX, y: 1.15, w: boxW, h: 0.65, margin: 0,
      fontSize: 28, bold: true, color: C.white, align: "center"
    });
    slide.addText(m.sub, {
      x: boxX, y: 1.78, w: boxW, h: 0.4, margin: 0,
      fontSize: 9.5, color: C.iceBlue, align: "center"
    });
    slide.addText(m.val, {
      x: boxX, y: 2.18, w: boxW, h: 0.75, margin: 0,
      fontSize: 24, bold: true, color: C.accent, align: "center"
    });
    slide.addText(m.note, {
      x: boxX + 0.15, y: 2.95, w: boxW - 0.3, h: 0.6, margin: 0,
      fontSize: 9, color: C.iceBlue, align: "center", italic: true
    });
    sx += boxW + 0.3;
  });

  // Key Stats row
  const stats = [
    { val: "7M+", label: "Gig workers VN\n(Sep 2023)" },
    { val: "50M", label: "E-wallets active\n(end 2024)" },
    { val: "77%", label: "Urban user dùng\nmobile payment" },
    { val: "100M+", label: "Smartphone users\nVN (2024)" },
  ];
  stats.forEach((s, i) => {
    const x = 0.4 + i * 3.1;
    card(slide, x, 3.95, 2.95, 1.5, { accentBar: false, border: C.accent });
    slide.addText(s.val, {
      x, y: 4.02, w: 2.95, h: 0.72, margin: 0,
      fontSize: 26, bold: true, color: C.navy, align: "center"
    });
    slide.addText(s.label, {
      x, y: 4.68, w: 2.95, h: 0.65, margin: 0,
      fontSize: 9.5, color: C.gray, align: "center"
    });
  });

  // Key trends
  const trends = [
    "📈 Gig economy SEA tăng >30%/năm, driven by Gen Z & Millennial",
    "💳 CAGR mobile payment VN vượt 100%/5 năm liên tiếp",
    "🏛️ Regulatory sandbox fintech VN mở rộng 2025 (Decree 94/2025)",
    "🌐 Digital economy VN → $39B năm 2025, mục tiêu 20% GDP",
  ];
  slide.addText("KEY TRENDS", {
    x: 0.4, y: 5.6, w: 3, h: 0.35, margin: 0,
    fontSize: 10, bold: true, color: C.navy
  });
  trends.forEach((t, i) => {
    slide.addText(t, {
      x: 0.4 + (i < 2 ? 0 : 6.5), y: 5.9 + (i % 2) * 0.42, w: 6.2, h: 0.38, margin: 0,
      fontSize: 9.5, color: C.gray
    });
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 5 — USER PERSONAS (light)
// ═══════════════════════════════════════════════════════════════════
(function slide5() {
  const slide = pptx.addSlide();
  lightBg(slide);
  sectionBar(slide, "03  USER PERSONAS  —  Dựa trên Desk Research & Behavioral Data");

  const personas = [
    {
      name: "Minh — Người tạo Commission",
      role: "Sinh viên / Nhân viên văn phòng trẻ",
      age: "20–30 tuổi · TP.HCM / Hà Nội · Thu nhập 8–15M/tháng",
      goals: [
        "Hoàn thành việc nhỏ mà không cần bỏ lỡ công việc đang làm",
        "Trả tiền nhanh, an toàn, không lo lừa đảo",
        "Tìm người tin cậy trong khu vực gần",
      ],
      pains: [
        "Không có người tin tưởng để nhờ việc bất ngờ",
        "Facebook/Zalo không có cơ chế payment an toàn",
        "Phải tự làm những việc mất thời gian, chi phí cơ hội cao",
      ],
      quote: '"Mình chỉ cần ai đó mua giúp cốc trà sữa khi đang họp, nhưng không biết nhờ ai."',
      color: C.navy,
    },
    {
      name: "Hoa — Người nhận Commission",
      role: "Freelancer / Sinh viên cần thêm thu nhập",
      age: "18–28 tuổi · Linh hoạt thời gian · Thu nhập bổ sung 3–8M/tháng",
      goals: [
        "Kiếm thêm thu nhập theo giờ rảnh, không ràng buộc",
        "Được đánh giá tốt để nhận nhiều commission hơn",
        "Nhận tiền nhanh về tài khoản ngân hàng",
      ],
      pains: [
        "Không có nền tảng bảo vệ quyền lợi khi bị quỵt tiền",
        "Nền tảng freelance hiện tại chỉ có việc dài hạn, không có micro-task",
        "Khó chứng minh năng lực cho stranger",
      ],
      quote: '"Mình hay đi ngang qua BigC, nếu có app để nhận việc mua hộ lúc đó thì hay lắm."',
      color: "2855A0",
    },
  ];

  personas.forEach((p, i) => {
    const x = 0.35 + i * 6.55;
    card(slide, x, 1.0, 6.3, 6.15, { fill: C.white, border: i === 0 ? C.navy : C.accent, borderWidth: 2 });

    // Header
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 1.0, w: 6.3, h: 1.05,
      fill: { color: p.color }, line: { color: p.color }, rectRadius: 0.07
    });
    slide.addText(p.name, {
      x: x + 0.15, y: 1.08, w: 6, h: 0.45, margin: 0,
      fontSize: 13, bold: true, color: C.white
    });
    slide.addText(p.role, {
      x: x + 0.15, y: 1.52, w: 6, h: 0.35, margin: 0,
      fontSize: 9.5, color: C.iceBlue, italic: true
    });

    slide.addText(p.age, {
      x: x + 0.15, y: 2.15, w: 6, h: 0.35, margin: 0,
      fontSize: 9, color: C.gray
    });

    slide.addText("🎯  Goals", {
      x: x + 0.15, y: 2.52, w: 5.8, h: 0.32, margin: 0,
      fontSize: 10, bold: true, color: p.color
    });
    p.goals.forEach((g, gi) => {
      slide.addText(`• ${g}`, {
        x: x + 0.25, y: 2.82 + gi * 0.36, w: 5.8, h: 0.34, margin: 0,
        fontSize: 9.5, color: C.gray
      });
    });

    slide.addText("⚡  Pain Points", {
      x: x + 0.15, y: 3.94, w: 5.8, h: 0.32, margin: 0,
      fontSize: 10, bold: true, color: C.red
    });
    p.pains.forEach((pa, pi) => {
      slide.addText(`• ${pa}`, {
        x: x + 0.25, y: 4.24 + pi * 0.36, w: 5.8, h: 0.34, margin: 0,
        fontSize: 9.5, color: C.gray
      });
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: x + 0.12, y: 5.62, w: 6.0, h: 0.85,
      fill: { color: C.light }, line: { color: C.accent, width: 1 }, rectRadius: 0.05
    });
    slide.addText(p.quote, {
      x: x + 0.22, y: 5.66, w: 5.8, h: 0.75, margin: 0,
      fontSize: 9.5, color: C.navy, italic: true, lineSpacingMultiple: 1.3
    });
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 6 — JTBD + KEY INSIGHTS (light)
// ═══════════════════════════════════════════════════════════════════
(function slide6() {
  const slide = pptx.addSlide();
  lightBg(slide);
  sectionBar(slide, "04  JOBS-TO-BE-DONE & KEY INSIGHTS");

  // JTBD
  const jtbds = [
    { when: "Khi đang bận ở nơi khác", want: "Nhờ người thực hiện việc nhỏ ngay lập tức", outcome: "Không bị gián đoạn công việc chính" },
    { when: "Khi có thời gian rảnh gần địa điểm nào đó", want: "Nhận commission để kiếm thêm thu nhập", outcome: "Tối ưu hóa thời gian và thu nhập" },
  ];

  slide.addText("JOBS-TO-BE-DONE", {
    x: 0.4, y: 0.95, w: 5, h: 0.35, margin: 0,
    fontSize: 10, bold: true, color: C.navy
  });

  jtbds.forEach((j, i) => {
    const y = 1.3 + i * 1.45;
    card(slide, 0.4, y, 12.5, 1.3, { accentBar: true });
    slide.addText(`When: ${j.when}`, {
      x: 0.62, y: y + 0.08, w: 12, h: 0.32, margin: 0,
      fontSize: 9.5, color: C.gray, italic: true
    });
    slide.addText(`➤ I want to: ${j.want}`, {
      x: 0.62, y: y + 0.38, w: 12, h: 0.32, margin: 0,
      fontSize: 10, bold: true, color: C.navy
    });
    slide.addText(`So I can: ${j.outcome}`, {
      x: 0.62, y: y + 0.68, w: 12, h: 0.32, margin: 0,
      fontSize: 9.5, color: C.green
    });
  });

  // Key Insights
  const insights = [
    { icon: "📊", text: "7M+ gig workers VN — supply side sẵn sàng, cần platform kết nối linh hoạt hơn bTaskee" },
    { icon: "💰", text: "Competitors thu 15–20% commission fee — Commiz có room để positioning giá thấp hơn để chiếm thị phần" },
    { icon: "⚖️", text: "Pháp lý VN yêu cầu license IPS (50B VND vốn điều lệ) — cần hoạch định ngay từ đầu" },
    { icon: "📱", text: "77% urban user 18–45 đã dùng mobile payment — adoption barrier thấp cho Commiz payment flow" },
  ];

  slide.addText("KEY INSIGHTS  (từ Desk Research)", {
    x: 0.4, y: 4.3, w: 8, h: 0.35, margin: 0,
    fontSize: 10, bold: true, color: C.navy
  });

  insights.forEach((ins, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 6.5;
    const y = 4.65 + row * 0.8;
    slide.addShape(pptx.ShapeType.rect, {
      x, y, w: 6.2, h: 0.68,
      fill: { color: C.white }, line: { color: C.iceBlue, width: 1 },
      shadow: makeShadow(), rectRadius: 0.05
    });
    slide.addText(`${ins.icon}  ${ins.text}`, {
      x: x + 0.15, y, w: 5.9, h: 0.68, margin: 0,
      fontSize: 9.5, color: C.gray, valign: "middle"
    });
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 7 — COMPETITIVE ANALYSIS (light)
// ═══════════════════════════════════════════════════════════════════
(function slide7() {
  const slide = pptx.addSlide();
  lightBg(slide);
  sectionBar(slide, "05  COMPETITIVE LANDSCAPE");

  // Competitor profiles — top strip
  const comps = [
    { name: "bTaskee", country: "🇻🇳 VN", type: "Direct", model: "Home services marketplace", fee: "~20% commission", ux: "Mobile-first", gap: "Chỉ home services, không phải micro-task", color: C.red },
    { name: "GoGet", country: "🇲🇾 MY", type: "Direct", model: "On-demand workforce", fee: "15% access fee", ux: "B2C + B2B", gap: "Chưa có mặt ở VN", color: C.orange },
    { name: "mykuya", country: "🇵🇭 PH", type: "Direct", model: "Errand & personal assist", fee: "8.9–20%", ux: "Mobile-first", gap: "Chỉ Philippines", color: "8B5CF6" },
    { name: "Grab/Gojek", country: "🇸🇬 SEA", type: "Indirect", model: "Super app (delivery, rides)", fee: "Delivery fee", ux: "Super app", gap: "Không làm custom task", color: C.green },
  ];

  comps.forEach((c, i) => {
    const x = 0.35 + i * 3.22;
    card(slide, x, 1.0, 3.1, 2.85, { fill: C.white, border: c.color, borderWidth: 1.5, accentBar: false });
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 1.0, w: 3.1, h: 0.52,
      fill: { color: c.color }, line: { color: c.color }, rectRadius: 0.06
    });
    slide.addText(`${c.country}  ${c.name}`, {
      x: x + 0.1, y: 1.0, w: 3, h: 0.52, margin: 0,
      fontSize: 11, bold: true, color: C.white, valign: "middle"
    });
    const rows = [
      ["Type", c.type],
      ["Model", c.model],
      ["Fee", c.fee],
      ["UX", c.ux],
      ["Gap vs Commiz", c.gap],
    ];
    rows.forEach((r, ri) => {
      slide.addText(r[0] + ":", {
        x: x + 0.1, y: 1.56 + ri * 0.39, w: 1.1, h: 0.36, margin: 0,
        fontSize: 8.5, bold: true, color: c.color
      });
      slide.addText(r[1], {
        x: x + 1.15, y: 1.56 + ri * 0.39, w: 1.85, h: 0.36, margin: 0,
        fontSize: 8.5, color: C.gray
      });
    });
  });

  // Competitive matrix table
  slide.addText("COMPETITIVE MATRIX", {
    x: 0.35, y: 3.98, w: 6, h: 0.35, margin: 0,
    fontSize: 10, bold: true, color: C.navy
  });

  const tableData = [
    [
      { text: "Tiêu chí", options: { bold: true, color: C.white, fill: C.navy } },
      { text: "COMMIZ", options: { bold: true, color: C.white, fill: C.navy } },
      { text: "bTaskee", options: { bold: true, color: C.white, fill: C.navy } },
      { text: "GoGet", options: { bold: true, color: C.white, fill: C.navy } },
      { text: "mykuya", options: { bold: true, color: C.white, fill: C.navy } },
    ],
    [
      { text: "Micro-task (mua hộ)", options: {} },
      { text: "✅", options: { color: C.green, bold: true } },
      { text: "❌", options: { color: C.red } },
      { text: "⚠️", options: {} },
      { text: "⚠️", options: {} },
    ],
    [
      { text: "Market VN", options: {} },
      { text: "✅", options: { color: C.green, bold: true } },
      { text: "✅", options: { color: C.green } },
      { text: "❌", options: { color: C.red } },
      { text: "❌", options: { color: C.red } },
    ],
    [
      { text: "Commission fee", options: {} },
      { text: "TBD (< 15%)", options: { color: C.accent, bold: true } },
      { text: "~20%", options: {} },
      { text: "15%", options: {} },
      { text: "8.9–20%", options: {} },
    ],
    [
      { text: "Escrow payment", options: {} },
      { text: "✅ Plan", options: { color: C.green, bold: true } },
      { text: "⚠️", options: {} },
      { text: "✅", options: { color: C.green } },
      { text: "✅", options: { color: C.green } },
    ],
    [
      { text: "Any category", options: {} },
      { text: "✅", options: { color: C.green, bold: true } },
      { text: "❌ Home", options: { color: C.red } },
      { text: "⚠️ Partial", options: {} },
      { text: "⚠️ Partial", options: {} },
    ],
  ];

  slide.addTable(tableData, {
    x: 0.35, y: 4.35, w: 12.6, h: 2.75,
    fontSize: 9.5,
    border: { type: "solid", color: C.iceBlue, pt: 0.5 },
    align: "center", valign: "middle",
    colW: [2.6, 2.4, 2.4, 2.4, 2.4],
    rowH: [0.38, 0.38, 0.38, 0.38, 0.38, 0.38],
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 8 — OPPORTUNITY PRIORITIZATION (light)
// ═══════════════════════════════════════════════════════════════════
(function slide8() {
  const slide = pptx.addSlide();
  lightBg(slide);
  sectionBar(slide, "05  OPPORTUNITY PRIORITIZATION  —  ICE Score");

  const opportunities = [
    { opp: "Micro-task marketplace VN (mua hộ, giao hộ, làm hộ)", impact: 9, conf: 8, ease: 7, score: "8.0", priority: "🔴 P0" },
    { opp: "Escrow payment + rút tiền ngân hàng cho tasker", impact: 9, conf: 9, ease: 6, score: "8.0", priority: "🔴 P0" },
    { opp: "Rating & Trust system cho tasker", impact: 8, conf: 8, ease: 7, score: "7.7", priority: "🔴 P0" },
    { opp: "Expand sang Hà Nội sau TP.HCM (giai đoạn 2)", impact: 8, conf: 7, ease: 7, score: "7.3", priority: "🟠 P1" },
    { opp: "B2B: Doanh nghiệp thuê tasker theo giờ", impact: 7, conf: 6, ease: 5, score: "6.0", priority: "🟠 P1" },
    { opp: "Expand SEA (Thailand, Philippines)", impact: 8, conf: 6, ease: 4, score: "6.0", priority: "🟡 P2" },
    { opp: "AI matching tasker–commissioner", impact: 7, conf: 5, ease: 4, score: "5.3", priority: "🟡 P2" },
  ];

  slide.addText("ICE = (Impact × Confidence × Ease) / 3  —  thang điểm 1–10", {
    x: 0.4, y: 0.9, w: 12.5, h: 0.35, margin: 0,
    fontSize: 9, color: C.gray, italic: true
  });

  const headers = [
    { text: "Opportunity", options: { bold: true, color: C.white, fill: C.navy } },
    { text: "Impact", options: { bold: true, color: C.white, fill: C.navy } },
    { text: "Confidence", options: { bold: true, color: C.white, fill: C.navy } },
    { text: "Ease", options: { bold: true, color: C.white, fill: C.navy } },
    { text: "ICE Score", options: { bold: true, color: C.white, fill: C.navy } },
    { text: "Priority", options: { bold: true, color: C.white, fill: C.navy } },
  ];

  const rows = opportunities.map(o => [
    { text: o.opp, options: { align: "left" } },
    { text: String(o.impact), options: {} },
    { text: String(o.conf), options: {} },
    { text: String(o.ease), options: {} },
    { text: o.score, options: { bold: true, color: C.accent } },
    { text: o.priority, options: {} },
  ]);

  slide.addTable([headers, ...rows], {
    x: 0.35, y: 1.25, w: 12.6, h: 5.85,
    fontSize: 9.5,
    border: { type: "solid", color: C.iceBlue, pt: 0.5 },
    align: "center", valign: "middle",
    colW: [5.2, 1.2, 1.5, 1.2, 1.5, 2.0],
    rowH: [0.42, 0.72, 0.72, 0.62, 0.62, 0.62, 0.62, 0.62],
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 9 — KEY FINDINGS & RECOMMENDATIONS (dark)
// ═══════════════════════════════════════════════════════════════════
(function slide9() {
  const slide = pptx.addSlide();
  darkBg(slide);

  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.85, fill: { color: "0D1B6E" }, line: { color: "0D1B6E" }
  });
  slide.addText("06  KEY FINDINGS & RECOMMENDATIONS", {
    x: 0.4, y: 0, w: 12, h: 0.85, margin: 0,
    fontSize: 13, bold: true, color: C.iceBlue, valign: "middle"
  });

  const findings = [
    {
      insight: "Thị trường VN chưa có micro-task platform",
      evidence: "bTaskee chỉ home services. Grab/Gojek chỉ delivery. Không ai làm 'mua hộ tự do'.",
      implication: "First-mover advantage rất lớn nếu ra mắt đúng thời điểm.",
      rec: "Build MVP tập trung micro-task category, không cố gắng làm tất cả.",
      recColor: C.green
    },
    {
      insight: "Payment & Trust là barrier lớn nhất",
      evidence: "Lý do Facebook/Zalo không scale: không có escrow, dễ bị quỵt tiền.",
      implication: "Commiz phải solve payment trust trước khi scale user.",
      rec: "Integrate ví điện tử (MoMo/ZaloPay) + giữ tiền escrow, release khi tasker hoàn thành.",
      recColor: C.orange
    },
    {
      insight: "Pháp lý là risk lớn nhất nếu bỏ qua",
      evidence: "Decree 52/2024 yêu cầu 50B VND vốn & license IPS. Decree 117/2025 yêu cầu khấu trừ thuế.",
      implication: "Ra mắt không phép → risk bị shutdown. Phải xử lý từ đầu.",
      rec: "Hợp tác ngay với ví điện tử có sẵn license (MoMo, ZaloPay) thay vì tự xin phép.",
      recColor: C.red
    },
  ];

  findings.forEach((f, i) => {
    const y = 1.05 + i * 2.05;
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4, y, w: 12.5, h: 1.88,
      fill: { color: "253480" }, line: { color: f.recColor, width: 1.5 },
      shadow: makeShadow(), rectRadius: 0.07
    });
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4, y, w: 0.06, h: 1.88,
      fill: { color: f.recColor }, rectRadius: 0.07
    });

    const cols = [
      { label: "INSIGHT", val: f.insight, x: 0.6 },
      { label: "EVIDENCE", val: f.evidence, x: 3.7 },
      { label: "IMPLICATION", val: f.implication, x: 7.1 },
    ];
    cols.forEach((col) => {
      slide.addText(col.label, {
        x: col.x, y: y + 0.1, w: 3.2, h: 0.28, margin: 0,
        fontSize: 8, bold: true, color: C.iceBlue
      });
      slide.addText(col.val, {
        x: col.x, y: y + 0.36, w: 3.1, h: 0.9, margin: 0,
        fontSize: 9.5, color: C.white, lineSpacingMultiple: 1.2
      });
    });
    slide.addText("→ REC:", {
      x: 0.6, y: y + 1.3, w: 0.85, h: 0.35, margin: 0,
      fontSize: 9, bold: true, color: f.recColor
    });
    slide.addText(f.rec, {
      x: 1.4, y: y + 1.3, w: 11.2, h: 0.35, margin: 0,
      fontSize: 9.5, color: f.recColor, italic: true
    });
  });
})();

// ═══════════════════════════════════════════════════════════════════
// SLIDE 10 — NEXT STEPS (dark)
// ═══════════════════════════════════════════════════════════════════
(function slide10() {
  const slide = pptx.addSlide();
  darkBg(slide);

  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.85, fill: { color: "0D1B6E" }, line: { color: "0D1B6E" }
  });
  slide.addText("07  NEXT STEPS  —  Roadmap 12 Tuần", {
    x: 0.4, y: 0, w: 12, h: 0.85, margin: 0,
    fontSize: 13, bold: true, color: C.iceBlue, valign: "middle"
  });

  const phases = [
    {
      phase: "Phase 1", weeks: "Tuần 1–4", title: "Foundation",
      owner: "Founder + Legal",
      tasks: [
        "Hoàn thiện Product Brief & Tech Spec cho MVP",
        "Tư vấn pháp lý: cấu trúc công ty & lộ trình license IPS",
        "Đàm phán partnership với MoMo hoặc ZaloPay",
        "Kickoff thiết kế UI/UX — user flow chính",
      ],
      color: C.accent
    },
    {
      phase: "Phase 2", weeks: "Tuần 5–8", title: "MVP Build",
      owner: "Dev Team",
      tasks: [
        "Build app mobile (React Native / Flutter) — 2 role: commissioner & tasker",
        "Integrate payment escrow với ví điện tử partner",
        "Rating & trust system cơ bản",
        "Internal testing với 50 beta users tại TP.HCM",
      ],
      color: C.green
    },
    {
      phase: "Phase 3", weeks: "Tuần 9–12", title: "Soft Launch",
      owner: "Founder + Growth",
      tasks: [
        "Soft launch TP.HCM — target 500 active users đầu tiên",
        "Chạy growth hack: referral program, social seeding",
        "Thu thập feedback thực tế → iterate product",
        "Chuẩn bị deck fundraising với data traction thực",
      ],
      color: C.orange
    },
  ];

  phases.forEach((ph, i) => {
    const x = 0.35 + i * 4.35;
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 1.0, w: 4.2, h: 5.8,
      fill: { color: "1A2566" }, line: { color: ph.color, width: 1.5 },
      shadow: makeShadow(), rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
      x, y: 1.0, w: 4.2, h: 0.95,
      fill: { color: "1E3855" }, line: { color: ph.color }, rectRadius: 0.08
    });
    slide.addText(`${ph.phase}  ·  ${ph.weeks}`, {
      x: x + 0.15, y: 1.06, w: 3.9, h: 0.32, margin: 0,
      fontSize: 9, bold: true, color: ph.color
    });
    slide.addText(ph.title, {
      x: x + 0.15, y: 1.36, w: 3.9, h: 0.42, margin: 0,
      fontSize: 15, bold: true, color: C.white
    });
    slide.addText(`Owner: ${ph.owner}`, {
      x: x + 0.15, y: 2.0, w: 3.9, h: 0.32, margin: 0,
      fontSize: 9, color: C.iceBlue, italic: true
    });
    ph.tasks.forEach((t, ti) => {
      slide.addText(`${ti + 1}.  ${t}`, {
        x: x + 0.2, y: 2.36 + ti * 0.95, w: 3.8, h: 0.88, margin: 0,
        fontSize: 9.5, color: C.white, lineSpacingMultiple: 1.25
      });
    });
  });

  // Footer legal note
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.35, y: 6.9, w: 12.6, h: 0.4,
    fill: { color: "3D1010" }, line: { color: C.red, width: 1 }, rectRadius: 0.05
  });
  slide.addText(
    "⚠️  Legal Priority: Cần tư vấn pháp lý về Decree 52/2024 (IPS License) & Decree 117/2025 (Tax withholding) trước khi nhận thanh toán thực từ user.",
    { x: 0.5, y: 6.92, w: 12.3, h: 0.36, margin: 0, fontSize: 8.5, color: C.red }
  );
})();

// ─── Export ─────────────────────────────────────────────────────────────────
const outputDir = path.join(__dirname, "..", "outputs");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, "commiz-market-research.pptx");
pptx.writeFile({ fileName: outputPath }).then(() => {
  console.log(`✅ PPTX saved to: ${outputPath}`);
}).catch(err => {
  console.error("❌ Error:", err);
  process.exit(1);
});
