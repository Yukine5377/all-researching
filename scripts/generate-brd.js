/**
 * BRD PPTX Generator — 15 slides
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
  slide.addText("BRD",{x:0,y:0,w:12.9,h:0.85,margin:0,fontSize:9,color:C.accent,align:"right",valign:"middle"});
}
function card(s,x,y,w,h,clr) {
  s.addShape(pptx.ShapeType.rect,{x,y,w,h,fill:{color:C.white},line:{color:clr||C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
  s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h,fill:{color:clr||C.accent},rectRadius:0.07});
}

// S1 — TITLE
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:9.6,y:0,w:3.73,h:7.5,fill:{color:"283593"},line:{color:"283593"}});
  s.addShape(pptx.ShapeType.rect,{x:0,y:5.8,w:9.6,h:0.06,fill:{color:C.accent},line:{color:C.accent}});
  s.addShape(pptx.ShapeType.rect,{x:0.5,y:0.55,w:2.4,h:0.52,fill:{color:C.accent},rectRadius:0.08,line:{color:C.accent}});
  s.addText("📄 BRD",{x:0.5,y:0.55,w:2.4,h:0.52,margin:0,fontSize:13,bold:true,color:C.navy,align:"center",valign:"middle"});
  s.addText("Business Requirements Document",{x:0.5,y:1.3,w:9,h:0.45,margin:0,fontSize:14,color:C.iceBlue,italic:true});
  s.addText("[Tên Sản Phẩm]",{x:0.5,y:1.8,w:9,h:1.2,margin:0,fontSize:38,bold:true,color:C.white});
  s.addText("Cơ hội thị trường · Tầm nhìn sản phẩm · Business Goals",{x:0.5,y:3.1,w:9,h:0.45,margin:0,fontSize:13,color:C.iceBlue});
  [["Prepared for","BOD / CEO"],["Author","[PO Name]"],["Date","[Date]"],["Version","v1.0 Draft"]].forEach(([l,v],i)=>{
    const x=0.5+i*2.3;
    s.addShape(pptx.ShapeType.rect,{x,y:6.0,w:2.1,h:1.0,fill:{color:"283593"},rectRadius:0.06,line:{color:C.accent,width:1}});
    s.addText(l,{x,y:6.05,w:2.1,h:0.42,margin:[4,6,0,6],fontSize:8,color:C.iceBlue,valign:"bottom"});
    s.addText(v,{x,y:6.47,w:2.1,h:0.48,margin:[0,6,4,6],fontSize:10,bold:true,color:C.white,valign:"top"});
  });
})();

// S2 — TOC
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"📋  Mục Lục");
  [["01","Executive Summary","Tóm tắt cơ hội và giải pháp"],["02","Problem Statement","Vấn đề thị trường & cost of inaction"],
   ["03","Business Goals & OKRs","Mục tiêu kinh doanh đo được"],["04","Market Analysis","TAM/SAM/SOM · Trends"],
   ["05","Competitive Landscape","Analysis đối thủ"],["06","Product Vision & Scope","Tầm nhìn, in/out scope"],
   ["07","Stakeholder Analysis","Mapping stakeholders"],["08","Requirements (MoSCoW)","Business requirements"],
   ["09","Assumptions & Risks","Giả định và rủi ro"],["10","Financial Overview","Investment, ROI, break-even"],
   ["11","Proposed Solution","High-level solution"],["12","Next Steps & Sign-off","Quyết định từ BOD"],
  ].forEach(([n,t,d],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.0+row*1.08;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.95,fill:{color:C.white},line:{color:C.accent,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:0.95,fill:{color:C.accent},rectRadius:0.06});
    s.addText(n,{x:x+0.15,y:y+0.08,w:0.6,h:0.42,margin:0,fontSize:16,bold:true,color:C.accent,align:"center"});
    s.addText(t,{x:x+0.85,y:y+0.08,w:5.3,h:0.3,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(d,{x:x+0.85,y:y+0.42,w:5.3,h:0.35,margin:0,fontSize:9,color:C.gray});
  });
})();

// S3 — EXEC SUMMARY (dark)
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("01  EXECUTIVE SUMMARY",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  [[C.accent,"🎯","Cơ hội thị trường","[Quy mô thị trường, tăng trưởng, timing]"],
   [C.green,"💡","Giải pháp đề xuất","[Sản phẩm làm gì, cho ai, khác biệt thế nào]"],
   [C.orange,"📈","Expected Outcome","[Doanh thu, users, market share kỳ vọng]"]].forEach(([clr,ic,ti,bo],i)=>{
    const x=0.4+i*4.3;
    s.addShape(pptx.ShapeType.rect,{x,y:1.1,w:4.1,h:3.0,fill:{color:"253480"},line:{color:clr,width:1.5},shadow:mk(),rectRadius:0.08});
    s.addText(ic,{x,y:1.2,w:4.1,h:0.55,margin:0,fontSize:22,align:"center"});
    s.addText(ti,{x:x+0.15,y:1.8,w:3.8,h:0.42,margin:0,fontSize:13,bold:true,color:clr,align:"center"});
    s.addText(bo,{x:x+0.15,y:2.26,w:3.8,h:1.65,margin:0,fontSize:10.5,color:C.white,align:"center",lineSpacingMultiple:1.3});
  });
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:4.28,w:12.5,h:1.35,fill:{color:"253480"},line:{color:C.green,width:1.5},rectRadius:0.07});
  s.addText("✅  BOD DECISION NEEDED",{x:0.65,y:4.36,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.green});
  s.addText("[Quyết định cần từ BOD — Go/No-go, Budget approval, Resource allocation]",{x:0.65,y:4.7,w:12,h:0.78,margin:0,fontSize:11,color:C.white,lineSpacingMultiple:1.3});
})();

// S4-S13 — CONTENT SLIDES
[
  {n:"02",ic:"⚠️",t:"Business Problem Statement",f:[["Vấn đề hiện tại","[Mô tả vấn đề — ai bị ảnh hưởng, scale, frequency]"],["Evidence & Data","[Số liệu xác nhận vấn đề tồn tại]"],["Cost of Inaction","[Nếu không giải quyết — doanh thu bỏ lỡ, competitive risk]"],["Root Cause","[5 Whys analysis]"]]},
  {n:"03",ic:"🎯",t:"Business Goals & OKRs",f:[["Objective","[Mục tiêu cấp cao của dự án]"],["KR1 — Growth","[Đạt X MAU trong Q...]"],["KR2 — Revenue","[GMV / ARR đạt $X]"],["KR3 — Quality","[NPS > X | Error rate < X%]"]]},
  {n:"04",ic:"📊",t:"Market Analysis",f:[["TAM","[$XB — Source, Year]"],["SAM","[$XM — Phân khúc target cụ thể]"],["SOM","[$XM — Realistic capture Year 1-2]"],["Key Trends","[Top 3 xu hướng ủng hộ sản phẩm]"]]},
  {n:"05",ic:"🆚",t:"Competitive Landscape",f:[["Direct Competitors","[A, B, C — điểm mạnh/yếu]"],["Indirect Competitors","[X, Y — thay thế gián tiếp]"],["Our Differentiation","[Điều chúng ta làm khác/tốt hơn]"],["Strategic Gap","[Blue ocean opportunity]"]]},
  {n:"06",ic:"🔭",t:"Product Vision & Scope",f:[["Vision Statement",'For [target], [Product] is [category] that [benefit]. Unlike [competitor], we [differentiator].'],["In Scope","[Features A, B, C — lần này làm]"],["Out of Scope","[X, Y — explicitly không làm lần này]"],["Future Phases","[Giai đoạn 2, 3 — long-term vision]"]]},
  {n:"07",ic:"👥",t:"Stakeholder Analysis",f:[["BOD / CEO","Interest: ROI, Strategy | Influence: High | Cần: Financials, decision"],["Engineering Lead","Interest: Feasibility | Influence: High | Cần: SRS, timeline"],["Design Lead","Interest: UX quality | Influence: Med | Cần: PRD, research"],["Sales / Marketing","Interest: GTM | Influence: Med | Cần: Roadmap, positioning"]]},
  {n:"08",ic:"📝",t:"High-level Requirements (MoSCoW)",f:[["Must Have (M)","[Requirements tuyệt đối cần — không có không launch]"],["Should Have (S)","[Quan trọng nhưng có thể workaround]"],["Could Have (C)","[Nice to have — không ảnh hưởng core value]"],["Won't Have (this phase)","[Explicitly excluded — manage expectations]"]]},
  {n:"09",ic:"⚡",t:"Assumptions & Risk Assessment",f:[["Business Assumptions","[Giả định về user behavior, market, willingness to pay]"],["Technical Assumptions","[Giả định về feasibility, third-party availability]"],["Risk 1","[Mô tả risk] | Prob: High | Impact: High | Mitigation: [action]"],["Risk 2","[Mô tả risk] | Prob: Med | Impact: Med | Mitigation: [action]"]]},
  {n:"10",ic:"💰",t:"Financial Overview",f:[["Investment Required","[Capex + Opex — nhân lực, cloud, tools, marketing]"],["Revenue Projection","Year 1: $X | Year 2: $X | Year 3: $X"],["Break-even","Tháng thứ X kể từ launch"],["ROI Estimate","X% trong Y tháng"]]},
  {n:"11",ic:"💡",t:"Proposed Solution Overview",f:[["Product Concept","[Mô tả high-level sản phẩm đề xuất]"],["Key Capabilities","[3–5 capabilities core phải có trong MVP]"],["Tech Direction","[Stack sơ bộ, delivery model — App/Web/API]"],["Go-to-Market","[Kênh, target segment đầu tiên, launch strategy]"]]},
].forEach(({n,ic,t,f})=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,`${n}  ${ic}  ${t.toUpperCase()}`);
  f.forEach(([lbl,val],i)=>{
    const y=1.05+i*1.5; card(s,0.4,y,12.5,1.32);
    s.addText(lbl,{x:0.62,y:y+0.08,w:12,h:0.3,margin:0,fontSize:10,bold:true,color:C.navy});
    s.addText(val,{x:0.62,y:y+0.42,w:12,h:0.72,margin:0,fontSize:10.5,color:C.gray,lineSpacingMultiple:1.25});
  });
});

// S14 — DEPENDENCIES & CONSTRAINTS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"12  🔗  DEPENDENCIES & CONSTRAINTS");
  [["Internal Dependencies","[Team readiness, existing systems, data migrations]","3D0000"],
   ["External Dependencies","[Third-party APIs, legal approvals, partner contracts]","0D3D00"],
   ["Budget Constraints","[Approved budget ceiling, headcount freeze, vendor limits]","1A1A4D"],
   ["Timeline Constraints","[Hard deadlines, market windows, regulatory dates]","4D3000"],
  ].forEach(([lbl,val,bg],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.75;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.55,fill:{color:C.white},line:{color:C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.68,fill:{color:bg},line:{color:bg},rectRadius:0.07});
    s.addText(lbl,{x:x+0.15,y:y+0.08,w:6,h:0.5,margin:0,fontSize:12,bold:true,color:C.white,valign:"middle"});
    s.addText(val,{x:x+0.15,y:y+0.78,w:6,h:1.6,margin:0,fontSize:10.5,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S15 — NEXT STEPS & SIGN-OFF
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("13  NEXT STEPS & APPROVAL",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  [["Tuần 1–2","BOD Review & Go/No-go decision","BOD + CPO"],
   ["Tuần 3–4","Kick-off User Research & Product Discovery","PO + Designer"],
   ["Tuần 5–6","Viết PRD chi tiết","PO"],
   ["Tuần 7–8","Tech scoping & team formation","Tech Lead + HR"],
   ["Tuần 9","Sprint 1 Kick-off","Toàn team"],
  ].forEach(([w,a,o],i)=>{
    const y=1.05+i*1.1;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.92,fill:{color:"253480"},line:{color:C.accent,width:1},rectRadius:0.06});
    s.addText(w,{x:0.6,y:y+0.12,w:1.8,h:0.35,margin:0,fontSize:10,bold:true,color:C.accent});
    s.addText(a,{x:2.5,y:y+0.1,w:7.5,h:0.4,margin:0,fontSize:11,color:C.white});
    s.addText(`Owner: ${o}`,{x:10.1,y:y+0.14,w:2.6,h:0.3,margin:0,fontSize:9,color:C.iceBlue,italic:true});
  });
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:6.6,w:12.5,h:0.6,fill:{color:"3D1010"},line:{color:C.green,width:1},rectRadius:0.06});
  s.addText("SIGN-OFF  ·  BOD: _____________  ·  CPO: _____________  ·  Date: _____________",{x:0.6,y:6.65,w:12.2,h:0.48,margin:0,fontSize:10,color:C.green,align:"center",valign:"middle"});
})();

const out = path.join(__dirname,"..","outputs","brd-[tên-sản-phẩm].pptx");
if(!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out),{recursive:true});
pptx.writeFile({fileName:out}).then(()=>console.log(`✅ PPTX saved to: ${out}`)).catch(e=>{console.error(e);process.exit(1);});
