/**
 * PRD PPTX Generator — 15 slides
 */
const PptxGenJS = require("pptxgenjs");
const path = require("path");
const fs = require("fs");
const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";

const C = { navy:"1E2761", iceBlue:"CADCFC", white:"FFFFFF", accent:"4FC3F7", light:"F0F4FF", gray:"64748B", green:"10B981", orange:"F59E0B", red:"EF4444" };
const mk = () => ({ type:"outer", color:"000000", blur:8, offset:3, angle:135, opacity:0.12 });
const darkBg = s => s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:"100%",fill:{color:C.navy}});
const lightBg = s => s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:"100%",fill:{color:C.light}});
function hdr(slide, label) {
  slide.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:C.navy}});
  slide.addText(label,{x:0.4,y:0,w:10,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  slide.addText("PRD",{x:0,y:0,w:12.9,h:0.85,margin:0,fontSize:9,color:C.accent,align:"right",valign:"middle"});
}
function card(s,x,y,w,h,clr) {
  s.addShape(pptx.ShapeType.rect,{x,y,w,h,fill:{color:C.white},line:{color:clr||C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
  s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h,fill:{color:clr||C.accent},rectRadius:0.07});
}

// S1 — TITLE
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:9.6,y:0,w:3.73,h:7.5,fill:{color:"283593"},line:{color:"283593"}});
  s.addShape(pptx.ShapeType.rect,{x:0,y:5.8,w:9.6,h:0.06,fill:{color:C.orange},line:{color:C.orange}});
  s.addShape(pptx.ShapeType.rect,{x:0.5,y:0.55,w:2.4,h:0.52,fill:{color:C.orange},rectRadius:0.08,line:{color:C.orange}});
  s.addText("📋 PRD",{x:0.5,y:0.55,w:2.4,h:0.52,margin:0,fontSize:13,bold:true,color:C.white,align:"center",valign:"middle"});
  s.addText("Product Requirements Document",{x:0.5,y:1.3,w:9,h:0.45,margin:0,fontSize:14,color:C.iceBlue,italic:true});
  s.addText("[Tên Feature / Sản Phẩm]",{x:0.5,y:1.8,w:9,h:1.2,margin:0,fontSize:38,bold:true,color:C.white});
  s.addText("Tài liệu trung tâm — Cái gì & Tại sao · Cho UI/UX, DEV, Tester",{x:0.5,y:3.1,w:9,h:0.45,margin:0,fontSize:13,color:C.iceBlue});
  [["Status","Draft"],["Author","[PO Name]"],["Date","[Date]"],["Version","v1.0"]].forEach(([l,v],i)=>{
    const x=0.5+i*2.3;
    s.addShape(pptx.ShapeType.rect,{x,y:6.0,w:2.1,h:1.0,fill:{color:"283593"},rectRadius:0.06,line:{color:C.orange,width:1}});
    s.addText(l,{x,y:6.05,w:2.1,h:0.42,margin:[4,6,0,6],fontSize:8,color:C.iceBlue,valign:"bottom"});
    s.addText(v,{x,y:6.47,w:2.1,h:0.48,margin:[0,6,4,6],fontSize:10,bold:true,color:C.white,valign:"top"});
  });
})();

// S2 — TOC
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"📋  Mục Lục");
  [["01","Problem Statement","Vấn đề và evidence"],["02","Goals & Success Metrics","KPIs đo được"],
   ["03","Target Audience & Personas","Ai sẽ dùng feature này"],["04","Assumptions & Constraints","Giả định và ràng buộc"],
   ["05","Functional Requirements P0/P1","Must have requirements"],["06","Functional Requirements P2/P3","Should/Could have"],
   ["07","User Flow — Happy Path","Luồng chính step-by-step"],["08","Error States & Edge Cases","Xử lý ngoại lệ"],
   ["09","UI/UX Requirements","Design specifications"],["10","Analytics & Tracking","Events và funnel"],
   ["11","Non-functional Requirements","Performance, security"],["12","Revision History & Sign-off","Approval"],
  ].forEach(([n,t,d],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.0+row*1.08;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.95,fill:{color:C.white},line:{color:C.orange,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:0.95,fill:{color:C.orange},rectRadius:0.06});
    s.addText(n,{x:x+0.15,y:y+0.08,w:0.6,h:0.42,margin:0,fontSize:16,bold:true,color:C.orange,align:"center"});
    s.addText(t,{x:x+0.85,y:y+0.08,w:5.3,h:0.3,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(d,{x:x+0.85,y:y+0.42,w:5.3,h:0.35,margin:0,fontSize:9,color:C.gray});
  });
})();

// S3 — PROBLEM & GOALS (dark)
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("01  PROBLEM STATEMENT",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  [["⚠️  Vấn đề","[Mô tả vấn đề user đang gặp — cụ thể, không chung chung]",C.red],
   ["📊  Evidence","[Data, user quotes, analytics xác nhận vấn đề tồn tại]",C.orange],
   ["❓  Why Now?","[Tại sao phải giải quyết lúc này — urgency, opportunity window]",C.accent],
  ].forEach(([lbl,val,clr],i)=>{
    const y=1.05+i*1.95;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:1.75,fill:{color:"253480"},line:{color:clr,width:1.5},rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:0.065,h:1.75,fill:{color:clr},rectRadius:0.07});
    s.addText(lbl,{x:0.62,y:y+0.1,w:12,h:0.35,margin:0,fontSize:10,bold:true,color:clr});
    s.addText(val,{x:0.62,y:y+0.5,w:12,h:1.05,margin:0,fontSize:11,color:C.white,lineSpacingMultiple:1.3});
  });
})();

// S4 — GOALS & METRICS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"02  🎯  GOALS & SUCCESS METRICS");
  [["Goal","[Mục tiêu của feature này — 1 câu rõ ràng]"],
   ["Primary Metric","[KPI chính — ví dụ: Tăng conversion rate 20%]"],
   ["Secondary Metric","[KPI phụ — ví dụ: Giảm support tickets 30%]"],
   ["Counter Metric","[Metric cần watch out — ví dụ: Không được giảm retention]"],
  ].forEach(([lbl,val],i)=>{
    const y=1.05+i*1.55; card(s,0.4,y,12.5,1.38);
    s.addText(lbl,{x:0.62,y:y+0.1,w:12,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(val,{x:0.62,y:y+0.46,w:12,h:0.75,margin:0,fontSize:11,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S5 — PERSONAS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"03  👤  TARGET AUDIENCE & PERSONAS");
  [[C.navy,"Persona A — [Primary User]","[Tuổi, nghề, location, tech level]",["Goal 1: [...]","Goal 2: [...]"],["Pain 1: [...]","Pain 2: [...]"],"[Quote đại diện từ research]"],
   [C.accent,"Persona B — [Secondary User]","[Tuổi, nghề, location, tech level]",["Goal 1: [...]","Goal 2: [...]"],["Pain 1: [...]","Pain 2: [...]"],"[Quote đại diện từ research]"],
  ].forEach(([clr,name,demo,goals,pains,quote],i)=>{
    const x=0.35+i*6.55;
    s.addShape(pptx.ShapeType.rect,{x,y:1.0,w:6.3,h:6.2,fill:{color:C.white},line:{color:clr,width:2},shadow:mk(),rectRadius:0.08});
    s.addShape(pptx.ShapeType.rect,{x,y:1.0,w:6.3,h:0.85,fill:{color:clr},line:{color:clr},rectRadius:0.08});
    s.addText(name,{x:x+0.15,y:1.05,w:6,h:0.42,margin:0,fontSize:12,bold:true,color:C.white});
    s.addText(demo,{x:x+0.15,y:1.55,w:6,h:0.32,margin:0,fontSize:9,color:C.gray});
    s.addText("🎯 Goals",{x:x+0.15,y:1.95,w:6,h:0.32,margin:0,fontSize:10,bold:true,color:clr});
    goals.forEach((g,gi)=>s.addText(`• ${g}`,{x:x+0.25,y:2.3+gi*0.4,w:5.8,h:0.38,margin:0,fontSize:9.5,color:C.gray}));
    s.addText("⚡ Pain Points",{x:x+0.15,y:3.2,w:6,h:0.32,margin:0,fontSize:10,bold:true,color:C.red});
    pains.forEach((p,pi)=>s.addText(`• ${p}`,{x:x+0.25,y:3.55+pi*0.4,w:5.8,h:0.38,margin:0,fontSize:9.5,color:C.gray}));
    s.addShape(pptx.ShapeType.rect,{x:x+0.12,y:4.55,w:5.9,h:1.5,fill:{color:C.light},line:{color:clr,width:1},rectRadius:0.05});
    s.addText(quote,{x:x+0.22,y:4.63,w:5.7,h:1.35,margin:0,fontSize:9.5,color:C.navy,italic:true,lineSpacingMultiple:1.35});
  });
})();

// S6 — ASSUMPTIONS & CONSTRAINTS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"04  🔗  ASSUMPTIONS & CONSTRAINTS");
  [["Business Assumptions","[Giả định về user behavior, market, willingness to pay]",C.accent],
   ["Technical Assumptions","[Giả định về feasibility, APIs, third-party availability]",C.green],
   ["Timeline Constraints","[Hard deadlines, launch window, dependencies phải xong trước]",C.orange],
   ["Budget & Scope Constraints","[Resource limits, what's explicitly out of scope]",C.red],
  ].forEach(([lbl,val,clr],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.75;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.5,fill:{color:C.white},line:{color:clr,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.62,fill:{color:clr},line:{color:clr},rectRadius:0.07});
    s.addText(lbl,{x:x+0.15,y:y+0.08,w:6,h:0.45,margin:0,fontSize:12,bold:true,color:C.white,valign:"middle"});
    s.addText(val,{x:x+0.15,y:y+0.75,w:6,h:1.55,margin:0,fontSize:10.5,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S7 — FUNC REQUIREMENTS P0/P1
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"05  📝  FUNCTIONAL REQUIREMENTS — P0 / P1");
  [["🔴 P0 — US-001","[Title]","As a [user], I want to [action] so that [benefit].\nAC: GIVEN [...] WHEN [...] THEN [...]","Story Points: [X]"],
   ["🔴 P0 — US-002","[Title]","As a [user], I want to [action] so that [benefit].\nAC: GIVEN [...] WHEN [...] THEN [...]","Story Points: [X]"],
   ["🟠 P1 — US-003","[Title]","As a [user], I want to [action] so that [benefit].\nAC: GIVEN [...] WHEN [...] THEN [...]","Story Points: [X]"],
   ["🟠 P1 — US-004","[Title]","As a [user], I want to [action] so that [benefit].\nAC: GIVEN [...] WHEN [...] THEN [...]","Story Points: [X]"],
  ].forEach(([priority,title,story,pts],i)=>{
    const y=1.05+i*1.5; card(s,0.4,y,12.5,1.32,i<2?C.red:C.orange);
    s.addText(`${priority} — ${title}`,{x:0.62,y:y+0.08,w:9,h:0.3,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(pts,{x:10.5,y:y+0.08,w:2.3,h:0.3,margin:0,fontSize:9,color:C.gray,align:"right"});
    s.addText(story,{x:0.62,y:y+0.42,w:12,h:0.72,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.25});
  });
})();

// S8 — FUNC REQUIREMENTS P2/P3
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"06  📝  FUNCTIONAL REQUIREMENTS — P2 / P3");
  [["🟡 P2 — US-005","[Title]","As a [user], I want to [action] so that [benefit].\nAC: GIVEN [...] WHEN [...] THEN [...]","Story Points: [X]"],
   ["🟡 P2 — US-006","[Title]","As a [user], I want to [action] so that [benefit].\nAC: GIVEN [...] WHEN [...] THEN [...]","Story Points: [X]"],
   ["⚪ P3 — US-007","[Title]","Won't have this release — scheduled for Phase 2","Story Points: N/A"],
   ["⚪ P3 — US-008","[Title]","Won't have this release — scheduled for Phase 2","Story Points: N/A"],
  ].forEach(([priority,title,story,pts],i)=>{
    const y=1.05+i*1.5; card(s,0.4,y,12.5,1.32,i<2?C.orange:C.gray);
    s.addText(`${priority} — ${title}`,{x:0.62,y:y+0.08,w:9,h:0.3,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(pts,{x:10.5,y:y+0.08,w:2.3,h:0.3,margin:0,fontSize:9,color:C.gray,align:"right"});
    s.addText(story,{x:0.62,y:y+0.42,w:12,h:0.72,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.25});
  });
})();

// S9 — USER FLOW
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"07  🔄  USER FLOW — HAPPY PATH");
  const steps=[["1","Entry Point","[User vào từ đâu — notification, home screen, link]"],["2","Screen A","[Mô tả màn hình, action user thực hiện]"],
   ["3","Screen B","[Kết quả sau action — state thay đổi gì]"],["4","Confirmation","[Success state — user biết đã hoàn thành]"],["5","Exit","[User đi đâu tiếp theo]"]];
  steps.forEach(([n,sc,desc],i)=>{
    const x=0.3+i*2.55;
    s.addShape(pptx.ShapeType.rect,{x,y:1.1,w:2.3,h:2.5,fill:{color:C.navy},line:{color:C.accent,width:1.5},shadow:mk(),rectRadius:0.08});
    s.addShape(pptx.ShapeType.rect,{x:x+0.75,y:3.7,w:0.8,h:1.2,fill:{color:C.iceBlue},line:{color:C.iceBlue}});
    s.addText(n,{x,y:1.2,w:2.3,h:0.55,margin:0,fontSize:22,bold:true,color:C.accent,align:"center"});
    s.addText(sc,{x:x+0.1,y:1.78,w:2.1,h:0.45,margin:0,fontSize:11,bold:true,color:C.white,align:"center"});
    s.addText(desc,{x:x+0.1,y:2.28,w:2.1,h:1.18,margin:0,fontSize:9,color:C.iceBlue,align:"center",lineSpacingMultiple:1.3});
    if(i<4) s.addText("→",{x:x+2.32,y:2.1,w:0.22,h:0.5,margin:0,fontSize:18,bold:true,color:C.accent,align:"center"});
  });
  s.addText("ERROR PATHS",{x:0.4,y:5.1,w:3,h:0.32,margin:0,fontSize:10,bold:true,color:C.red});
  [["Validation Error","[Field X — show inline error message immediately]"],["Auth Error","[Redirect to login, preserve form state]"],["Server Error","[Show toast, offer retry CTA]"]].forEach(([t,d],i)=>{
    s.addShape(pptx.ShapeType.rect,{x:0.4+i*4.2,y:5.45,w:4.0,h:1.7,fill:{color:C.white},line:{color:C.red,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x:0.4+i*4.2,y:5.45,w:0.065,h:1.7,fill:{color:C.red},rectRadius:0.06});
    s.addText(t,{x:0.62+i*4.2,y:5.53,w:3.8,h:0.32,margin:0,fontSize:10,bold:true,color:C.red});
    s.addText(d,{x:0.62+i*4.2,y:5.88,w:3.8,h:1.05,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.25});
  });
})();

// S10 — EDGE CASES
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"08  ⚡  ERROR STATES & EDGE CASES");
  [["Empty State","[Khi chưa có data — show guidance, CTA]",C.accent],
   ["Loading State","[Skeleton screen / spinner khi fetch data]",C.gray],
   ["Network Error","[Offline state — show error, offer retry]",C.red],
   ["Edge Case 1","[Mô tả edge case cụ thể và cách xử lý]",C.orange],
   ["Edge Case 2","[Mô tả edge case cụ thể và cách xử lý]",C.orange],
   ["Permission Edge","[User không có quyền — redirect hoặc disable với explanation]",C.red],
  ].forEach(([t,d,clr],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.05;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:1.85,fill:{color:C.white},line:{color:clr,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:1.85,fill:{color:clr},rectRadius:0.07});
    s.addText(t,{x:x+0.2,y:y+0.1,w:6,h:0.35,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(d,{x:x+0.2,y:y+0.5,w:6,h:1.2,margin:0,fontSize:10,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S11 — UI/UX REQUIREMENTS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"09  🎨  UI/UX REQUIREMENTS");
  [["Design Principles","[Nguyên tắc thiết kế — simplicity, mobile-first, accessibility]"],
   ["Components to Use","[List Figma components cần dùng — Button/Input/Card/Modal]"],
   ["Components to Create","[Components mới cần designer tạo với spec cụ thể]"],
   ["Responsive","[Mobile: 375px | Tablet: 768px | Desktop: 1440px]"],
  ].forEach(([lbl,val],i)=>{
    const y=1.05+i*1.55; card(s,0.4,y,12.5,1.38);
    s.addText(lbl,{x:0.62,y:y+0.1,w:12,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(val,{x:0.62,y:y+0.46,w:12,h:0.75,margin:0,fontSize:11,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S12 — ANALYTICS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"10  📊  ANALYTICS & TRACKING PLAN");
  const hdrs=[{text:"Event Name",options:{bold:true,color:C.white,fill:C.navy}},{text:"Trigger",options:{bold:true,color:C.white,fill:C.navy}},{text:"Properties",options:{bold:true,color:C.white,fill:C.navy}},{text:"Tool",options:{bold:true,color:C.white,fill:C.navy}}];
  const rows=[
    [{text:"[feature]_viewed",options:{align:"left"}},{text:"Khi screen load",options:{}},{text:"user_id, session_id, source",options:{}},{text:"Mixpanel",options:{}}],
    [{text:"[feature]_started",options:{align:"left"}},{text:"Khi user bắt đầu flow",options:{}},{text:"user_id, feature_variant",options:{}},{text:"Mixpanel",options:{}}],
    [{text:"[feature]_completed",options:{align:"left"}},{text:"Khi user hoàn thành",options:{}},{text:"user_id, duration_ms, variant",options:{}},{text:"Mixpanel",options:{}}],
    [{text:"[feature]_error",options:{align:"left"}},{text:"Khi có lỗi",options:{}},{text:"user_id, error_code, step",options:{}},{text:"Mixpanel + Sentry",options:{}}],
    [{text:"[feature]_abandoned",options:{align:"left"}},{text:"Khi user drop-off",options:{}},{text:"user_id, step_reached, duration",options:{}},{text:"Mixpanel",options:{}}],
  ];
  s.addTable([hdrs,...rows],{x:0.35,y:1.05,w:12.6,h:3.2,fontSize:10,border:{type:"solid",color:C.iceBlue,pt:0.5},align:"center",valign:"middle",colW:[3.5,2.8,4.3,2.0],rowH:[0.48,0.5,0.5,0.5,0.5,0.5]});
  s.addText("A/B TEST PLAN (nếu có)",{x:0.4,y:4.35,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["Variant A (Control)","[Baseline — hiện tại]","50% traffic"],["Variant B (Test)","[Thay đổi cần test]","50% traffic"],["Success Criteria","[Variant B tốt hơn nếu: primary metric > X%]","Min 2 tuần"]].forEach(([t,d,pct],i)=>{
    const x=0.4+i*4.25;
    card(s,x,4.72,4.1,2.5);
    s.addText(t,{x:x+0.2,y:4.82,w:3.8,h:0.35,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(d,{x:x+0.2,y:5.2,w:3.8,h:1.4,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.3});
    s.addText(pct,{x:x+0.2,y:6.6,w:3.8,h:0.4,margin:0,fontSize:9,color:C.accent,bold:true});
  });
})();

// S13 — NON-FUNCTIONAL
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"11  ⚙️  NON-FUNCTIONAL REQUIREMENTS");
  [["⚡ Performance","API response P95 < 500ms · Page load < 3s trên 4G · 99.9% uptime"],
   ["🔒 Security","JWT auth · HTTPS only · Input sanitization · Rate limiting: 100 req/min"],
   ["📱 Compatibility","iOS 14+ · Android 10+ · Chrome/Safari/Firefox/Edge latest-2"],
   ["♿ Accessibility","WCAG 2.1 AA · Color contrast ≥ 4.5:1 · Touch targets ≥ 44px"],
  ].forEach(([lbl,val],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*3.0;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.75,fill:{color:C.white},line:{color:C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.65,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.07});
    s.addText(lbl,{x:x+0.15,y:y+0.08,w:6,h:0.48,margin:0,fontSize:13,bold:true,color:C.white,valign:"middle"});
    s.addText(val,{x:x+0.15,y:y+0.78,w:6,h:1.75,margin:0,fontSize:10.5,color:C.gray,lineSpacingMultiple:1.4});
  });
})();

// S14 — OPEN QUESTIONS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"12  ❓  OPEN QUESTIONS & DEPENDENCIES");
  s.addText("OPEN QUESTIONS — cần resolve trước khi dev bắt đầu",{x:0.4,y:0.9,w:12,h:0.32,margin:0,fontSize:10,bold:true,color:C.red});
  [["Q1","[Câu hỏi chưa được quyết định]","[Owner Name]","[Due Date]","Open"],
   ["Q2","[Câu hỏi về tech approach]","[Tech Lead]","[Due Date]","Open"],
   ["Q3","[Câu hỏi về business rule]","[PO Name]","[Due Date]","Resolved"],
  ].forEach(([id,q,owner,due,status],i)=>{
    const y=1.28+i*1.1; const clr=status==="Resolved"?C.green:C.red;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.95,fill:{color:C.white},line:{color:clr,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:0.065,h:0.95,fill:{color:clr},rectRadius:0.06});
    s.addText(id,{x:0.6,y:y+0.12,w:0.5,h:0.35,margin:0,fontSize:10,bold:true,color:clr,align:"center"});
    s.addText(q,{x:1.2,y:y+0.1,w:7,h:0.38,margin:0,fontSize:10,color:C.navy,bold:true});
    s.addText(`Owner: ${owner}  ·  Due: ${due}`,{x:1.2,y:y+0.52,w:6,h:0.3,margin:0,fontSize:8.5,color:C.gray});
    s.addShape(pptx.ShapeType.rect,{x:10.5,y:y+0.22,w:2.2,h:0.42,fill:{color:status==="Resolved"?"0A3D20":"3D1010"},line:{color:clr,width:1},rectRadius:0.1});
    s.addText(status,{x:10.5,y:y+0.22,w:2.2,h:0.42,margin:0,fontSize:9,bold:true,color:clr,align:"center",valign:"middle"});
  });
  s.addText("FEATURE DEPENDENCIES",{x:0.4,y:4.62,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["⬆️ Phụ thuộc bởi","[Feature/System cần hoàn thành trước feature này]"],["➡️ Phụ thuộc vào","[Feature này cần gì từ team/system khác]"]].forEach(([t,d],i)=>{
    card(s,0.4+i*6.55,4.98,6.3,2.18);
    s.addText(t,{x:0.62+i*6.55,y:5.07,w:6,h:0.35,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(d,{x:0.62+i*6.55,y:5.46,w:5.9,h:1.55,margin:0,fontSize:10,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S15 — REVISION & SIGN-OFF
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("13  REVISION HISTORY & SIGN-OFF",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  const hdrs=[{text:"Version",options:{bold:true,color:C.white,fill:"253480"}},{text:"Date",options:{bold:true,color:C.white,fill:"253480"}},{text:"Author",options:{bold:true,color:C.white,fill:"253480"}},{text:"Changes",options:{bold:true,color:C.white,fill:"253480"}}];
  const rows=[[{text:"v0.1"},{text:"[Date]"},{text:"[PO Name]"},{text:"Initial draft",options:{align:"left"}}],[{text:"v0.2"},{text:"[Date]"},{text:"[PO Name]"},{text:"Added Acceptance Criteria for US-001-004",options:{align:"left"}}],[{text:"v1.0"},{text:"[Date]"},{text:"[PO Name]"},{text:"Final version — approved for development",options:{align:"left"}}]];
  s.addTable([hdrs,...rows],{x:0.4,y:1.05,w:12.5,h:2.2,fontSize:10,border:{type:"solid",color:"3D4E8C",pt:0.5},align:"center",valign:"middle",colW:[1.6,2.0,2.5,6.4],rowH:[0.5,0.52,0.52,0.52],color:C.white});
  [["UI/UX Designer","Đã review, design đúng requirements","[Designer Name]"],["Tech Lead","Technically feasible, no blockers","[Tech Lead Name]"],["QA Lead","Test plan sẵn sàng","[QA Lead Name]"],["Product Owner","Approved for Sprint","[PO Name]"]].forEach(([role,note,name],i)=>{
    const y=3.55+i*0.92;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.8,fill:{color:"1A2566"},line:{color:C.green,width:1},rectRadius:0.06});
    s.addText(role,{x:0.6,y:y+0.12,w:3,h:0.35,margin:0,fontSize:10,bold:true,color:C.green});
    s.addText(note,{x:3.7,y:y+0.12,w:6,h:0.35,margin:0,fontSize:9.5,color:C.white});
    s.addText(`✅ ${name}`,{x:9.8,y:y+0.12,w:3,h:0.35,margin:0,fontSize:9.5,color:C.green,align:"right"});
  });
})();

const out = path.join(__dirname,"..","outputs","prd-[tên-feature].pptx");
if(!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out),{recursive:true});
pptx.writeFile({fileName:out}).then(()=>console.log(`✅ PPTX saved to: ${out}`)).catch(e=>{console.error(e);process.exit(1);});
