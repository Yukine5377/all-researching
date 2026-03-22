/**
 * UI/UX Design PPTX Generator — 15 slides
 */
const PptxGenJS = require("pptxgenjs");
const path = require("path");
const fs = require("fs");
const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";

const C = { navy:"1E2761", iceBlue:"CADCFC", white:"FFFFFF", accent:"4FC3F7", light:"F0F4FF", gray:"64748B", green:"10B981", orange:"F59E0B", red:"EF4444", purple:"8B5CF6" };
const mk = () => ({ type:"outer", color:"000000", blur:8, offset:3, angle:135, opacity:0.12 });
const darkBg = s => s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:"100%",fill:{color:C.navy}});
const lightBg = s => s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:"100%",fill:{color:C.light}});
function hdr(slide, label) {
  slide.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:C.navy}});
  slide.addText(label,{x:0.4,y:0,w:10,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  slide.addText("UI/UX DESIGN",{x:0,y:0,w:12.9,h:0.85,margin:0,fontSize:9,color:C.purple,align:"right",valign:"middle"});
}
function card(s,x,y,w,h,clr) {
  s.addShape(pptx.ShapeType.rect,{x,y,w,h,fill:{color:C.white},line:{color:clr||C.purple,width:1.5},shadow:mk(),rectRadius:0.07});
  s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h,fill:{color:clr||C.purple},rectRadius:0.07});
}

// S1 — TITLE
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:9.6,y:0,w:3.73,h:7.5,fill:{color:"283593"},line:{color:"283593"}});
  s.addShape(pptx.ShapeType.rect,{x:0,y:5.8,w:9.6,h:0.06,fill:{color:C.purple},line:{color:C.purple}});
  s.addShape(pptx.ShapeType.rect,{x:0.5,y:0.55,w:2.8,h:0.52,fill:{color:C.purple},rectRadius:0.08,line:{color:C.purple}});
  s.addText("🎨 UI/UX",{x:0.5,y:0.55,w:2.8,h:0.52,margin:0,fontSize:13,bold:true,color:C.white,align:"center",valign:"middle"});
  s.addText("UI/UX Design Review & Documentation",{x:0.5,y:1.3,w:9,h:0.45,margin:0,fontSize:14,color:C.iceBlue,italic:true});
  s.addText("[Tên Feature / Sản Phẩm]",{x:0.5,y:1.8,w:9,h:1.2,margin:0,fontSize:38,bold:true,color:C.white});
  s.addText("Design System · Wireframes · UI Handoff · Accessibility",{x:0.5,y:3.1,w:9,h:0.45,margin:0,fontSize:13,color:C.iceBlue});
  [["Designer","[Designer Name]"],["Reviewer","PO + DEV"],["Date","[Date]"],["Tool","Figma"]].forEach(([l,v],i)=>{
    const x=0.5+i*2.3;
    s.addShape(pptx.ShapeType.rect,{x,y:6.0,w:2.1,h:1.0,fill:{color:"283593"},rectRadius:0.06,line:{color:C.purple,width:1}});
    s.addText(l,{x,y:6.05,w:2.1,h:0.42,margin:[4,6,0,6],fontSize:8,color:C.iceBlue,valign:"bottom"});
    s.addText(v,{x,y:6.47,w:2.1,h:0.48,margin:[0,6,4,6],fontSize:10,bold:true,color:C.white,valign:"top"});
  });
})();

// S2 — TOC
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"📋  Mục Lục");
  [["01","Design Process","Quy trình design → handoff"],["02","Design System — Colors","Bảng màu và tokens"],
   ["03","Design System — Typography","Font scale và usage"],["04","Component Library","Components existing vs. new"],
   ["05","Wireframes — Key Screens","Low-fi screens với annotations"],["06","UI Design — Screen 1","High-fi annotated"],
   ["07","UI Design — Screen 2","High-fi annotated"],["08","UI Design — Screen 3","High-fi annotated"],
   ["09","Error & Empty States","All edge state designs"],["10","Responsive Breakpoints","Mobile, Tablet, Desktop"],
   ["11","Interaction & Animations","Micro-interactions specs"],["12","Accessibility & Handoff","WCAG + DEV specs"],
  ].forEach(([n,t,d],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.0+row*1.08;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.95,fill:{color:C.white},line:{color:C.purple,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:0.95,fill:{color:C.purple},rectRadius:0.06});
    s.addText(n,{x:x+0.15,y:y+0.08,w:0.6,h:0.42,margin:0,fontSize:16,bold:true,color:C.purple,align:"center"});
    s.addText(t,{x:x+0.85,y:y+0.08,w:5.3,h:0.3,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(d,{x:x+0.85,y:y+0.42,w:5.3,h:0.35,margin:0,fontSize:9,color:C.gray});
  });
})();

// S3 — DESIGN PROCESS
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("01  DESIGN PROCESS OVERVIEW",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  [["1\nPRD\nApproved",C.accent],["2\nWireframe\nLow-fi",C.purple],["3\nUI Design\nHigh-fi",C.orange],["4\nPrototype\nInteractions",C.green],["5\nHandoff\nDEV Specs",C.iceBlue]].forEach(([t,clr],i)=>{
    const x=0.5+i*2.55;
    s.addShape(pptx.ShapeType.rect,{x,y:1.1,w:2.3,h:2.2,fill:{color:"253480"},line:{color:clr,width:2},shadow:mk(),rectRadius:0.08});
    s.addText(t,{x:x+0.05,y:1.2,w:2.2,h:2.0,margin:0,fontSize:11,bold:true,color:clr,align:"center",valign:"middle",lineSpacingMultiple:1.4});
    if(i<4) s.addText("→",{x:x+2.32,y:1.9,w:0.22,h:0.5,margin:0,fontSize:18,bold:true,color:C.iceBlue,align:"center"});
  });
  [["✅  PO Review Checkpoints",["Design đúng user flow trong PRD","Acceptance Criteria có thể verify qua design","Error states đã cover đủ"],C.green],
   ["📋  DEV Handoff Requirements",["Exact dimensions, spacing, colors","Assets exported (SVG, PNG @1x @2x)","Figma link với inspect mode"],C.accent],
  ].forEach(([title,items,clr],i)=>{
    const x=0.4+i*6.55;
    s.addShape(pptx.ShapeType.rect,{x,y:3.55,w:6.3,h:3.65,fill:{color:"1A2566"},line:{color:clr,width:1.5},rectRadius:0.07});
    s.addText(title,{x:x+0.2,y:3.65,w:6,h:0.38,margin:0,fontSize:11,bold:true,color:clr});
    items.forEach((it,ii)=>s.addText(`• ${it}`,{x:x+0.3,y:4.12+ii*0.98,w:5.8,h:0.88,margin:0,fontSize:10.5,color:C.white,lineSpacingMultiple:1.25}));
  });
})();

// S4 — COLOR SYSTEM
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"02  🎨  DESIGN SYSTEM — COLOR PALETTE");
  s.addText("BRAND COLORS",{x:0.4,y:0.9,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["Primary","#[HEX]","[Tên màu — VD: Ocean Blue]","CTA buttons, headers, links"],
   ["Secondary","#[HEX]","[Tên màu]","Supporting elements, hover"],
   ["Accent","#[HEX]","[Tên màu]","Highlights, badges, icons"],
   ["Neutral Dark","#[HEX]","[Gray scale]","Body text, borders"],
  ].forEach(([name,hex,tone,use],i)=>{
    const x=0.4+i*3.15;
    s.addShape(pptx.ShapeType.rect,{x,y:1.28,w:3.0,h:1.2,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.08,shadow:mk()});
    s.addText(hex,{x,y:1.28,w:3.0,h:1.2,margin:0,fontSize:13,bold:true,color:C.white,align:"center",valign:"middle"});
    s.addText(name,{x,y:2.52,w:3.0,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy,align:"center"});
    s.addText(`${tone}\n${use}`,{x,y:2.86,w:3.0,h:0.65,margin:0,fontSize:8.5,color:C.gray,align:"center",lineSpacingMultiple:1.3});
  });
  s.addText("SEMANTIC COLORS",{x:0.4,y:3.65,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [[C.green,"Success","#10B981","Confirm, done, positive"],[C.red,"Error","#EF4444","Errors, destructive actions"],[C.orange,"Warning","#F59E0B","Alerts, non-blocking issues"],[C.accent,"Info","#4FC3F7","Informational, neutral"]].forEach(([clr,name,hex,use],i)=>{
    const x=0.4+i*3.15;
    s.addShape(pptx.ShapeType.rect,{x,y:4.02,w:3.0,h:0.88,fill:{color:clr},line:{color:clr},rectRadius:0.06,shadow:mk()});
    s.addText(`${name}\n${hex}`,{x,y:4.02,w:3.0,h:0.88,margin:0,fontSize:10.5,bold:true,color:C.white,align:"center",valign:"middle",lineSpacingMultiple:1.3});
    s.addText(use,{x,y:4.94,w:3.0,h:0.4,margin:0,fontSize:8.5,color:C.gray,align:"center"});
  });
  s.addText("CONTRAST RATIOS (WCAG 2.1 AA)",{x:0.4,y:5.45,w:7,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["Primary on White","[X.XX]:1","✅ Pass AA"],["White on Primary","[X.XX]:1","✅ Pass AA"],["Gray on White","[X.XX]:1","✅ Pass AA"],["Error on White","[X.XX]:1","✅ Pass AA"]].forEach(([combo,ratio,status],i)=>{
    const x=0.4+i*3.15;
    s.addShape(pptx.ShapeType.rect,{x,y:5.82,w:3.0,h:1.3,fill:{color:C.white},line:{color:C.green,width:1},shadow:mk(),rectRadius:0.06});
    s.addText(combo,{x,y:5.9,w:3.0,h:0.42,margin:0,fontSize:9,color:C.gray,align:"center"});
    s.addText(ratio,{x,y:6.32,w:3.0,h:0.4,margin:0,fontSize:12,bold:true,color:C.navy,align:"center"});
    s.addText(status,{x,y:6.72,w:3.0,h:0.32,margin:0,fontSize:9,color:C.green,align:"center",bold:true});
  });
})();

// S5 — TYPOGRAPHY
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"03  🔤  DESIGN SYSTEM — TYPOGRAPHY");
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:1.0,w:12.5,h:0.75,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.07});
  s.addText("Font Family: [Font Name] (Google Fonts / System Font)",{x:0.62,y:1.05,w:12,h:0.62,margin:0,fontSize:13,bold:true,color:C.white,valign:"middle"});
  [["H1","[32–40px]","Bold 700","[Line height: 1.2]","Page titles, hero sections"],
   ["H2","[24–28px]","SemiBold 600","[Line height: 1.3]","Section headings"],
   ["H3","[18–22px]","SemiBold 600","[Line height: 1.4]","Sub-sections, card titles"],
   ["Body L","[16px]","Regular 400","[Line height: 1.6]","Main body text"],
   ["Body S","[14px]","Regular 400","[Line height: 1.5]","Supporting text, labels"],
   ["Caption","[12px]","Regular 400","[Line height: 1.4]","Metadata, timestamps"],
   ["Button","[14–16px]","SemiBold 600","[Letter-spacing: 0.02em]","CTAs, interactive elements"],
   ["Code","[13px]","Mono Regular","[Line height: 1.5]","Code blocks, technical text"],
  ].forEach(([style,size,weight,lh,use],i)=>{
    const y=1.85+i*0.69;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.6,fill:{color:i%2===0?C.white:C.light},line:{color:C.iceBlue,width:0.5},rectRadius:0.04});
    s.addText(style,{x:0.55,y:y+0.08,w:1.3,h:0.42,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(size,{x:1.95,y:y+0.08,w:1.4,h:0.42,margin:0,fontSize:9.5,color:C.accent});
    s.addText(weight,{x:3.45,y:y+0.08,w:1.8,h:0.42,margin:0,fontSize:9.5,color:C.gray});
    s.addText(lh,{x:5.3,y:y+0.08,w:2.1,h:0.42,margin:0,fontSize:9.5,color:C.gray});
    s.addText(use,{x:7.5,y:y+0.08,w:5.2,h:0.42,margin:0,fontSize:9.5,color:C.gray});
  });
})();

// S6 — COMPONENT LIBRARY
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"04  🧩  COMPONENT LIBRARY");
  s.addText("EXISTING COMPONENTS (reuse)",{x:0.4,y:0.9,w:6,h:0.32,margin:0,fontSize:10,bold:true,color:C.green});
  [["Buttons","Primary, Secondary, Ghost, Danger, Icon"],["Form Elements","Input, Textarea, Select, Checkbox, Radio, Toggle"],["Cards","Default, Elevated, Flat, Interactive"],["Navigation","Top Nav, Sidebar, Tabs, Breadcrumb, Pagination"]].forEach(([t,d],i)=>{
    const x=0.4+i%2*6.55,y=1.28+Math.floor(i/2)*1.22;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:1.05,fill:{color:C.white},line:{color:C.green,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:1.05,fill:{color:C.green},rectRadius:0.06});
    s.addText(`✅ ${t}`,{x:x+0.2,y:y+0.1,w:6,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(d,{x:x+0.2,y:y+0.45,w:6,h:0.42,margin:0,fontSize:9.5,color:C.gray});
  });
  s.addText("NEW COMPONENTS (need design)",{x:0.4,y:3.82,w:7,h:0.32,margin:0,fontSize:10,bold:true,color:C.orange});
  [["[New Component 1]","[Mô tả, khi nào dùng, variants cần thiết]"],["[New Component 2]","[Mô tả, behavior, states: default/hover/active/disabled]"],["[New Component 3]","[Mô tả, responsive behavior, animation spec]"],["[New Component 4]","[Mô tả, data requirements, empty state]"]].forEach(([t,d],i)=>{
    const x=0.4+i%2*6.55,y=4.18+Math.floor(i/2)*1.55;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:1.35,fill:{color:C.white},line:{color:C.orange,width:1.5},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:1.35,fill:{color:C.orange},rectRadius:0.06});
    s.addText(`🆕 ${t}`,{x:x+0.2,y:y+0.1,w:6,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(d,{x:x+0.2,y:y+0.48,w:6,h:0.72,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S7-S9 — WIREFRAMES & UI SCREENS
["05  📐  WIREFRAMES — KEY SCREENS (Low-fi)","06  🖥️  UI DESIGN — SCREEN 1 (High-fi, Annotated)","07  🖥️  UI DESIGN — SCREEN 2 (High-fi, Annotated)"].forEach((title,idx)=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,title);
  [["Screen Name","[Tên màn hình — ví dụ: Commission Detail Screen]"],
   ["Route / URL","[/path/to/screen hoặc screen name trong app]"],
   ["User Flow Context","[Bước thứ mấy trong flow — đến từ đâu, đi đến đâu]"],
   ["Key Components Used","[List components: Header, Card, Button CTA, Form, ...]"],
  ].forEach(([lbl,val],i)=>{
    const y=1.05+i*0.95; card(s,0.4,y,12.5,0.82,C.purple);
    s.addText(lbl,{x:0.62,y:y+0.1,w:3,h:0.28,margin:0,fontSize:9,bold:true,color:C.navy});
    s.addText(val,{x:3.7,y:y+0.1,w:9,h:0.52,margin:0,fontSize:10,color:C.gray,valign:"middle"});
  });
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:4.92,w:8.5,h:2.35,fill:{color:C.white},line:{color:C.iceBlue,width:1.5},shadow:mk(),rectRadius:0.07});
  s.addText("[📸 Wireframe / UI Screenshot]\nChèn hình từ Figma hoặc attach file PNG",{x:0.4,y:4.92,w:8.5,h:2.35,margin:0,fontSize:11,color:C.gray,align:"center",valign:"middle",italic:true});
  s.addShape(pptx.ShapeType.rect,{x:9.1,y:4.92,w:3.8,h:2.35,fill:{color:C.white},line:{color:C.purple,width:1.5},shadow:mk(),rectRadius:0.07});
  s.addText("📝 ANNOTATIONS\n\n1. [Annotation 1]\n2. [Annotation 2]\n3. [Annotation 3]",{x:9.2,y:5.0,w:3.6,h:2.15,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.4});
});

// S10 — STATES
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"08  ⚡  UI DESIGN — SCREEN 3 + KEY STATES");
  [["🖥️ Screen 3","[Tên màn hình 3]\n[Route, context, components]"],
   ["📭 Empty State","[Design khi chưa có data — icon, headline, CTA hướng dẫn user làm gì tiếp]"],
   ["⏳ Loading State","[Skeleton screen hoặc spinner — không dùng generic loading bars]"],
   ["❌ Error State","[Error message human-readable + retry CTA + support link]"],
  ].forEach(([t,d],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.95;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.72,fill:{color:C.white},line:{color:C.purple,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.55,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.07});
    s.addText(t,{x:x+0.15,y:y+0.06,w:6,h:0.42,margin:0,fontSize:12,bold:true,color:C.iceBlue,valign:"middle"});
    s.addText(d,{x:x+0.15,y:y+0.65,w:6,h:1.95,margin:0,fontSize:10,color:C.gray,lineSpacingMultiple:1.35});
  });
})();

// S11 — RESPONSIVE
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"09  📱  RESPONSIVE BREAKPOINTS");
  [["📱 Mobile","320–767px","Stack layout · Bottom nav · Large touch targets (≥44px) · Full-width cards"],
   ["📟 Tablet","768–1023px","2-column layout · Side drawer nav · Condensed tables"],
   ["🖥️ Desktop","1024–1439px","Multi-column · Top nav · Sidebar optional · Hover states active"],
   ["🖥️ Wide","1440px+","Max-width container: 1280px centered · Extra whitespace"],
  ].forEach(([device,bp,notes],i)=>{
    const y=1.05+i*1.55; card(s,0.4,y,12.5,1.38,C.purple);
    s.addText(device,{x:0.62,y:y+0.1,w:2,h:0.35,margin:0,fontSize:12,bold:true,color:C.navy});
    s.addText(bp,{x:2.75,y:y+0.1,w:2.5,h:0.35,margin:0,fontSize:11,color:C.purple,bold:true});
    s.addText(notes,{x:5.3,y:y+0.1,w:7.5,h:1.1,margin:0,fontSize:10,color:C.gray,lineSpacingMultiple:1.3,valign:"middle"});
  });
})();

// S12 — INTERACTIONS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"10  ✨  INTERACTIONS & MICRO-ANIMATIONS");
  [["Button Press","Scale: 0.96 · Duration: 100ms · Easing: ease-out","All interactive buttons"],
   ["Page Transition","Slide right (navigate deeper) · Slide left (go back) · 300ms ease-in-out","All screen transitions"],
   ["Modal Open","Fade + scale from 0.92 to 1.0 · 200ms ease-out · Backdrop fade","All modals, drawers"],
   ["Toast Notification","Slide up from bottom · 250ms · Auto-dismiss: 3s · 200ms fade-out","Success/error feedback"],
   ["Loading Skeleton","Shimmer animation · Background: #E2E8F0 → #F1F5F9 · 1.5s loop","All async content loads"],
   ["Form Validation","Inline, immediate · Red border + icon + message below · 150ms","All form inputs"],
  ].forEach(([element,spec,when],i)=>{
    const y=1.05+i*1.05; card(s,0.4,y,12.5,0.9,C.purple);
    s.addText(element,{x:0.62,y:y+0.08,w:2.5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(spec,{x:3.2,y:y+0.08,w:6.3,h:0.65,margin:0,fontSize:9.5,color:C.gray,fontFace:"Courier New",lineSpacingMultiple:1.25,valign:"middle"});
    s.addText(when,{x:9.6,y:y+0.08,w:3.2,h:0.65,margin:0,fontSize:9,color:C.purple,align:"right",valign:"middle"});
  });
})();

// S13 — ERROR & EMPTY STATES
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"11  📋  ERROR & EMPTY STATE SPECS + USABILITY REVIEW");
  [["Functional PO Review","• Tất cả user stories có thể verify qua design\n• Error cases đã có design\n• AC testable qua màn hình",C.green],
   ["UX Quality Check","• Primary action rõ ràng (visual hierarchy)\n• Empty states có actionable CTA\n• Error messages human-readable (không phải error codes)",C.accent],
   ["Accessibility","• Contrast ≥ 4.5:1 cho text thường\n• Focus states visible (keyboard nav)\n• Alt text cho mọi image\n• Touch targets ≥ 44×44px",C.orange],
   ["Performance UX","• No layout shift (CLS < 0.1)\n• Skeleton screens thay cho spinners\n• Optimistic updates cho writes",C.purple],
  ].forEach(([t,d,clr],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.98;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.72,fill:{color:C.white},line:{color:clr,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.58,fill:{color:clr},line:{color:clr},rectRadius:0.07});
    s.addText(t,{x:x+0.15,y:y+0.06,w:6,h:0.45,margin:0,fontSize:12,bold:true,color:C.white,valign:"middle"});
    s.addText(d,{x:x+0.15,y:y+0.68,w:6,h:1.9,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.4});
  });
})();

// S14 — DEVELOPER HANDOFF
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"12  🔧  DEVELOPER HANDOFF SPECS");
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:1.05,w:12.5,h:0.82,fill:{color:C.navy},line:{color:C.purple,width:1.5},rectRadius:0.07});
  s.addText("🔗  Figma Link:",{x:0.62,y:1.1,w:1.8,h:0.7,margin:0,fontSize:10,bold:true,color:C.purple,valign:"middle"});
  s.addText("[Paste Figma file URL hoặc prototype URL tại đây]",{x:2.5,y:1.1,w:10,h:0.7,margin:0,fontSize:11,color:C.iceBlue,valign:"middle",italic:true});
  s.addText("SPACING & SIZING",{x:0.4,y:2.0,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["Base Unit","4px — tất cả spacing là bội số của 4"],["Spacing Scale","4 · 8 · 12 · 16 · 24 · 32 · 48 · 64px"],["Border Radius","[4px small / 8px medium / 12px large / 9999px pill]"],["Shadows","Level 1: 0 1px 3px rgba(0,0,0,0.12) | Level 2: 0 4px 12px rgba(0,0,0,0.12)"]].forEach(([t,v],i)=>{
    const y=2.38+i*0.72; card(s,0.4,y,12.5,0.62,C.accent);
    s.addText(t,{x:0.62,y:y+0.12,w:2.5,h:0.32,margin:0,fontSize:9.5,bold:true,color:C.navy});
    s.addText(v,{x:3.2,y:y+0.12,w:9.5,h:0.32,margin:0,fontSize:9.5,color:C.gray,valign:"middle"});
  });
  s.addText("ASSET EXPORT GUIDE",{x:0.4,y:5.3,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  const hdrs=[{text:"Asset",options:{bold:true,color:C.white,fill:C.navy}},{text:"Format",options:{bold:true,color:C.white,fill:C.navy}},{text:"Sizes",options:{bold:true,color:C.white,fill:C.navy}},{text:"Naming",options:{bold:true,color:C.white,fill:C.navy}}];
  const rows=[[{text:"Icons"},{text:"SVG"},{text:"24×24px"},{text:"icon-[name].svg"}],[{text:"Images"},{text:"PNG/WebP"},{text:"1x, 2x, 3x"},{text:"img-[name]@2x.png"}],[{text:"Illustrations"},{text:"SVG/PNG"},{text:"1x, 2x"},{text:"illustration-[name].svg"}]];
  s.addTable([hdrs,...rows],{x:0.4,y:5.66,w:12.5,h:1.65,fontSize:10,border:{type:"solid",color:C.iceBlue,pt:0.5},align:"center",valign:"middle",colW:[2.5,2.2,2.5,5.3],rowH:[0.45,0.4,0.4,0.4]});
})();

// S15 — OPEN QUESTIONS & SIGN-OFF
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("13  OPEN QUESTIONS & DESIGN SIGN-OFF",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  s.addText("OPEN DESIGN QUESTIONS",{x:0.4,y:0.95,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.orange});
  [["DQ-001","[Design decision pending — ví dụ: Dùng Bottom Sheet hay Full Modal cho iOS?]","Designer","Open"],
   ["DQ-002","[Copy/content chưa được confirm — ví dụ: CTA button text]","PO + Copywriter","Open"],
   ["DQ-003","[Animation spec chưa được approve]","Designer","In Review"],
  ].forEach(([id,q,owner,status],i)=>{
    const y=1.32+i*1.05; const clr=status==="In Review"?C.orange:C.red;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.9,fill:{color:"253480"},line:{color:clr,width:1},rectRadius:0.06});
    s.addText(id,{x:0.6,y:y+0.1,w:0.9,h:0.35,margin:0,fontSize:9.5,bold:true,color:clr});
    s.addText(q,{x:1.6,y:y+0.1,w:8,h:0.35,margin:0,fontSize:9.5,color:C.white});
    s.addText(`${owner} · ${status}`,{x:9.7,y:y+0.1,w:3,h:0.35,margin:0,fontSize:8.5,color:clr,align:"right"});
  });
  s.addText("DESIGN APPROVAL",{x:0.4,y:4.52,w:4,h:0.32,margin:0,fontSize:10,bold:true,color:C.green});
  [["PO Review","Design đúng PRD requirements, user flow approved"],["Tech Lead","Technically implementable, no blocking concerns"],["QA Lead","Test cases prepared based on this design"],["Designer","Design ready for handoff, Figma specs complete"]].forEach(([role,note],i)=>{
    const y=4.88+i*0.62;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.52,fill:{color:"1A2566"},line:{color:C.purple,width:1},rectRadius:0.05});
    s.addText(role,{x:0.6,y:y+0.08,w:2.5,h:0.35,margin:0,fontSize:9.5,bold:true,color:C.purple});
    s.addText(note,{x:3.2,y:y+0.08,w:6.5,h:0.35,margin:0,fontSize:9.5,color:C.iceBlue});
    s.addText("✅ Approved: ___________",{x:9.8,y:y+0.08,w:3,h:0.35,margin:0,fontSize:8.5,color:C.green});
  });
})();

const out = path.join(__dirname,"..","outputs","uiux-[tên-feature].pptx");
if(!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out),{recursive:true});
pptx.writeFile({fileName:out}).then(()=>console.log(`✅ PPTX saved to: ${out}`)).catch(e=>{console.error(e);process.exit(1);});
