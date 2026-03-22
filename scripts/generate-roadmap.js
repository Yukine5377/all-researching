/**
 * Product Roadmap PPTX Generator — 15 slides
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
  slide.addText("PRODUCT ROADMAP",{x:0,y:0,w:12.9,h:0.85,margin:0,fontSize:9,color:C.accent,align:"right",valign:"middle"});
}
function card(s,x,y,w,h,clr) {
  s.addShape(pptx.ShapeType.rect,{x,y,w,h,fill:{color:C.white},line:{color:clr||C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
  s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h,fill:{color:clr||C.accent},rectRadius:0.07});
}

// S1 — TITLE
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:9.6,y:0,w:3.73,h:7.5,fill:{color:"283593"},line:{color:"283593"}});
  s.addShape(pptx.ShapeType.rect,{x:0,y:5.8,w:9.6,h:0.06,fill:{color:C.green},line:{color:C.green}});
  s.addShape(pptx.ShapeType.rect,{x:0.5,y:0.55,w:2.6,h:0.52,fill:{color:C.green},rectRadius:0.08,line:{color:C.green}});
  s.addText("🗺️ ROADMAP",{x:0.5,y:0.55,w:2.6,h:0.52,margin:0,fontSize:12,bold:true,color:C.navy,align:"center",valign:"middle"});
  s.addText("Product Roadmap",{x:0.5,y:1.3,w:9,h:0.45,margin:0,fontSize:14,color:C.iceBlue,italic:true});
  s.addText("[Tên Sản Phẩm]",{x:0.5,y:1.8,w:9,h:1.2,margin:0,fontSize:38,bold:true,color:C.white});
  s.addText("Kế hoạch phát triển sản phẩm · Prioritization · Timeline",{x:0.5,y:3.1,w:9,h:0.45,margin:0,fontSize:13,color:C.iceBlue});
  [["Audience","Stakeholders & DEV"],["Author","[PO Name]"],["Quarter","[Q / Year]"],["Version","v1.0"]].forEach(([l,v],i)=>{
    const x=0.5+i*2.3;
    s.addShape(pptx.ShapeType.rect,{x,y:6.0,w:2.1,h:1.0,fill:{color:"283593"},rectRadius:0.06,line:{color:C.green,width:1}});
    s.addText(l,{x,y:6.05,w:2.1,h:0.42,margin:[4,6,0,6],fontSize:8,color:C.iceBlue,valign:"bottom"});
    s.addText(v,{x,y:6.47,w:2.1,h:0.48,margin:[0,6,4,6],fontSize:10,bold:true,color:C.white,valign:"top"});
  });
})();

// S2 — TOC
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"📋  Mục Lục");
  [["01","Vision & Strategy","Product vision và business goals"],["02","Now / Next / Later","Roadmap overview 3 horizons"],
   ["03","Theme 1 — Acquisition","Features thu hút user mới"],["04","Theme 2 — Retention","Features giữ chân user"],
   ["05","Theme 3 — Revenue","Features tăng doanh thu"],["06","Q1 Timeline","Chi tiết Q1 features & milestones"],
   ["07","Q2 Timeline","Chi tiết Q2 features & milestones"],["08","Q3–Q4 Preview","Horizon xa hơn"],
   ["09","Feature Prioritization","RICE / MoSCoW scoring"],["10","Resource Allocation","Team bandwidth per quarter"],
   ["11","Dependencies & Milestones","Inter-feature dependencies"],["12","Out of Scope","Won't Do this year"],
  ].forEach(([n,t,d],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.0+row*1.08;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.95,fill:{color:C.white},line:{color:C.green,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:0.95,fill:{color:C.green},rectRadius:0.06});
    s.addText(n,{x:x+0.15,y:y+0.08,w:0.6,h:0.42,margin:0,fontSize:16,bold:true,color:C.green,align:"center"});
    s.addText(t,{x:x+0.85,y:y+0.08,w:5.3,h:0.3,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(d,{x:x+0.85,y:y+0.42,w:5.3,h:0.35,margin:0,fontSize:9,color:C.gray});
  });
})();

// S3 — VISION & GOALS (dark)
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("01  VISION & STRATEGY",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:1.05,w:12.5,h:1.4,fill:{color:"253480"},line:{color:C.green,width:1.5},rectRadius:0.07});
  s.addText("🔭  PRODUCT VISION",{x:0.6,y:1.12,w:5,h:0.35,margin:0,fontSize:10,bold:true,color:C.green});
  s.addText('"[Vision statement — For [target users] who [need], [Product] is a [category] that [key benefit]. Unlike [alternative], our product [primary differentiator].]"',
    {x:0.6,y:1.48,w:12,h:0.85,margin:0,fontSize:11,color:C.white,italic:true});
  [["🎯  Objective Q","[Mục tiêu cấp cao cho quarter này]",C.accent],
   ["KR1 — Growth","[User / MAU target]",C.green],
   ["KR2 — Revenue","[Revenue / GMV target]",C.orange],
   ["KR3 — Quality","[NPS / retention / error rate target]",C.iceBlue],
  ].forEach(([lbl,val,clr],i)=>{
    const y=2.65+i*1.1;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.92,fill:{color:"1A2566"},line:{color:clr,width:1},rectRadius:0.06});
    s.addText(lbl,{x:0.6,y:y+0.1,w:3.5,h:0.35,margin:0,fontSize:10,bold:true,color:clr});
    s.addText(val,{x:4.2,y:y+0.1,w:8.5,h:0.35,margin:0,fontSize:11,color:C.white});
  });
})();

// S4 — NOW / NEXT / LATER
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"02  🗺️  NOW / NEXT / LATER OVERVIEW");
  [["NOW\n(0–2 tháng)",["[Feature A — đang build]","[Feature B — gần xong]","[Bug fix critical]"],C.green,"Đã commit, sprint đang chạy"],
   ["NEXT\n(2–4 tháng)",["[Feature C — design done]","[Feature D — estimation done]","[Tech debt priority]"],C.orange,"Đã plan, sắp bắt đầu"],
   ["LATER\n(4+ tháng)",["[Feature E — concept]","[Feature F — research phase]","[Integration X]"],C.gray,"Đã identify, chưa commit"],
  ].forEach(([title,items,clr,sub],i)=>{
    const x=0.4+i*4.32;
    s.addShape(pptx.ShapeType.rect,{x,y:1.0,w:4.1,h:5.8,fill:{color:C.white},line:{color:clr,width:2},shadow:mk(),rectRadius:0.08});
    s.addShape(pptx.ShapeType.rect,{x,y:1.0,w:4.1,h:1.1,fill:{color:clr},line:{color:clr},rectRadius:0.08});
    s.addText(title,{x:x+0.1,y:1.05,w:3.9,h:0.95,margin:0,fontSize:18,bold:true,color:C.white,align:"center",valign:"middle"});
    s.addText(sub,{x:x+0.15,y:2.15,w:3.8,h:0.4,margin:0,fontSize:9,color:C.gray,italic:true});
    items.forEach((it,ii)=>{
      const iy=2.62+ii*0.95;
      s.addShape(pptx.ShapeType.rect,{x:x+0.2,y:iy,w:3.7,h:0.8,fill:{color:C.light},line:{color:clr,width:1},rectRadius:0.05});
      s.addText(it,{x:x+0.35,y:iy+0.08,w:3.4,h:0.62,margin:0,fontSize:10,color:C.navy,valign:"middle"});
    });
  });
})();

// S5-S7 — THEME SLIDES
[["03","🚀","Theme 1 — Acquisition","Features thu hút & onboard user mới",
  [["Feature A","[Mô tả feature]","[Business value]","M","L","Q1"],["Feature B","[Mô tả feature]","[Business value]","S","M","Q1"],
   ["Feature C","[Mô tả feature]","[Business value]","S","S","Q2"]]],
 ["04","💎","Theme 2 — Retention","Features giữ chân và tăng engagement",
  [["Feature D","[Mô tả feature]","[Business value]","M","M","Q1"],["Feature E","[Mô tả feature]","[Business value]","S","L","Q2"],
   ["Feature F","[Mô tả feature]","[Business value]","C","M","Q3"]]],
 ["05","💰","Theme 3 — Revenue","Features tăng doanh thu và monetization",
  [["Feature G","[Mô tả feature]","[Business value]","M","L","Q2"],["Feature H","[Mô tả feature]","[Business value]","S","M","Q3"],
   ["Feature I","[Mô tả feature]","[Business value]","C","S","Q4"]]],
].forEach(([n,ic,t,sub,rows])=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,`${n}  ${ic}  ${t.toUpperCase()}`);
  s.addText(sub,{x:0.4,y:0.9,w:12,h:0.35,margin:0,fontSize:10,color:C.gray,italic:true});
  [["Feature","Description","Business Value","MoSCoW","Effort","ETA"],...rows].forEach((r,ri)=>{
    const y=1.32+ri*0.92; const iHdr=ri===0;
    [8,0,0,0,0,0].forEach((_,ci)=>{});
    const xs=[0.35,2.0,5.0,8.1,9.3,10.9]; const ws=[1.6,2.95,3.05,1.15,1.55,2.1];
    s.addShape(pptx.ShapeType.rect,{x:0.35,y,w:12.6,h:0.8,fill:{color:iHdr?C.navy:C.white},line:{color:iHdr?C.navy:C.iceBlue,width:0.5},rectRadius:iHdr?0.06:0.04});
    r.forEach((cell,ci)=>{
      s.addText(cell,{x:xs[ci]+0.08,y:y+0.08,w:ws[ci]-0.12,h:0.62,margin:0,fontSize:iHdr?9:10,bold:iHdr,color:iHdr?C.white:C.gray,valign:"middle"});
    });
  });
});

// S8-S9 — Q1 & Q2 TIMELINE
["06","07"].forEach((n,qi)=>{
  const s=pptx.addSlide(); lightBg(s);
  hdr(s,`${n}  📅  ${qi===0?"Q1":"Q2"} TIMELINE & MILESTONES`);
  const months=qi===0?["Tháng 1","Tháng 2","Tháng 3"]:["Tháng 4","Tháng 5","Tháng 6"];
  months.forEach((m,mi)=>{
    const x=0.35+mi*4.32;
    s.addShape(pptx.ShapeType.rect,{x,y:1.0,w:4.1,h:5.8,fill:{color:C.white},line:{color:C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y:1.0,w:4.1,h:0.65,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.07});
    s.addText(m,{x:x+0.1,y:1.0,w:3.9,h:0.65,margin:0,fontSize:13,bold:true,color:C.white,align:"center",valign:"middle"});
    [[C.green,"🚀",`Feature ${qi*6+mi*2+1} launch`],[C.orange,"🎨",`Design review Sprint ${mi+1}`],[C.accent,"🔧",`Tech debt: [area]`]].forEach(([clr,ic,txt],ti)=>{
      const ty=1.75+ti*1.6;
      s.addShape(pptx.ShapeType.rect,{x:x+0.15,y:ty,w:3.8,h:1.38,fill:{color:C.light},line:{color:clr,width:1.5},rectRadius:0.06});
      s.addText(ic,{x:x+0.25,y:ty+0.1,w:0.4,h:0.4,margin:0,fontSize:14});
      s.addText(txt,{x:x+0.7,y:ty+0.1,w:3.1,h:1.1,margin:0,fontSize:9.5,color:C.navy,lineSpacingMultiple:1.3});
    });
  });
});

// S10 — Q3-Q4 PREVIEW
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"08  🔮  Q3–Q4 PREVIEW (Horizon)");
  s.addText("Những items này chưa commit — có thể thay đổi dựa trên learnings từ Q1/Q2",{x:0.4,y:0.9,w:12,h:0.35,margin:0,fontSize:9.5,color:C.gray,italic:true});
  [["Q3",C.orange,["[Feature X — Research phase]","[Feature Y — Concept]","[Integration Z — TBD]"]],
   ["Q4",C.gray,["[Feature AA — Later]","[Feature BB — Later]","[Platform expansion — Later]"]],
  ].forEach(([q,clr,items],qi)=>{
    const x=0.4+qi*6.55;
    s.addShape(pptx.ShapeType.rect,{x,y:1.35,w:6.3,h:5.5,fill:{color:C.white},line:{color:clr,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y:1.35,w:6.3,h:0.7,fill:{color:clr},line:{color:clr},rectRadius:0.07});
    s.addText(q,{x:x+0.1,y:1.35,w:6.1,h:0.7,margin:0,fontSize:20,bold:true,color:C.white,align:"center",valign:"middle"});
    items.forEach((it,ii)=>{
      s.addShape(pptx.ShapeType.rect,{x:x+0.2,y:2.2+ii*1.5,w:5.9,h:1.2,fill:{color:C.light},line:{color:clr,width:1},rectRadius:0.05});
      s.addText(it,{x:x+0.35,y:2.2+ii*1.5+0.1,w:5.5,h:0.95,margin:0,fontSize:10.5,color:C.gray,valign:"middle"});
    });
  });
})();

// S11 — FEATURE PRIORITIZATION
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"09  ⚡  FEATURE PRIORITIZATION — RICE SCORE");
  s.addText("RICE = (Reach × Impact × Confidence) / Effort — thang 1–10",{x:0.4,y:0.9,w:12,h:0.3,margin:0,fontSize:9,color:C.gray,italic:true});
  const headers=[{text:"Feature",options:{bold:true,color:C.white,fill:C.navy}},{text:"Reach",options:{bold:true,color:C.white,fill:C.navy}},{text:"Impact",options:{bold:true,color:C.white,fill:C.navy}},{text:"Conf.",options:{bold:true,color:C.white,fill:C.navy}},{text:"Effort",options:{bold:true,color:C.white,fill:C.navy}},{text:"RICE",options:{bold:true,color:C.white,fill:C.navy}},{text:"Priority",options:{bold:true,color:C.white,fill:C.navy}}];
  const rows=[[{text:"[Feature A]",options:{align:"left"}},{text:"9",options:{}},{text:"8",options:{}},{text:"9",options:{}},{text:"5",options:{}},{text:"12.9",options:{bold:true,color:C.green}},{text:"🔴 P0",options:{}}],
   [{text:"[Feature B]",options:{align:"left"}},{text:"8",options:{}},{text:"7",options:{}},{text:"8",options:{}},{text:"5",options:{}},{text:"8.9",options:{bold:true,color:C.accent}},{text:"🔴 P0",options:{}}],
   [{text:"[Feature C]",options:{align:"left"}},{text:"7",options:{}},{text:"8",options:{}},{text:"7",options:{}},{text:"6",options:{}},{text:"6.5",options:{bold:true,color:C.orange}},{text:"🟠 P1",options:{}}],
   [{text:"[Feature D]",options:{align:"left"}},{text:"6",options:{}},{text:"6",options:{}},{text:"7",options:{}},{text:"5",options:{}},{text:"5.0",options:{}},{text:"🟡 P2",options:{}}],
   [{text:"[Feature E]",options:{align:"left"}},{text:"5",options:{}},{text:"5",options:{}},{text:"6",options:{}},{text:"7",options:{}},{text:"2.1",options:{}},{text:"🟡 P2",options:{}}],
  ];
  s.addTable([headers,...rows],{x:0.35,y:1.25,w:12.6,h:5.5,fontSize:10,border:{type:"solid",color:C.iceBlue,pt:0.5},align:"center",valign:"middle",colW:[4.2,1.2,1.2,1.1,1.1,1.5,2.3],rowH:[0.5,0.78,0.78,0.78,0.78,0.78]});
})();

// S12 — RESOURCE ALLOCATION
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"10  👥  RESOURCE ALLOCATION");
  [["Q1",["PO: 1 FTE — Discovery + PRD","Design: 1 FTE — UI/UX Feature A, B","Dev: 3 FTE — Feature A build","QA: 1 FTE — Test planning"],C.green],
   ["Q2",["PO: 1 FTE — Backlog grooming","Design: 1 FTE — Feature C, D","Dev: 3 FTE — Feature B, C","QA: 1 FTE — Regression + Feature A"],C.orange],
   ["Q3",["PO: 0.5 FTE — Roadmap planning","Design: 0.5 FTE — Q4 designs","Dev: 3 FTE — Feature D, E","QA: 1 FTE — Full regression"],C.accent],
  ].forEach(([q,items,clr],qi)=>{
    const x=0.35+qi*4.32;
    card(s,x,1.05,4.1,5.8,clr);
    s.addShape(pptx.ShapeType.rect,{x,y:1.05,w:4.1,h:0.7,fill:{color:clr},line:{color:clr},rectRadius:0.07});
    s.addText(q,{x:x+0.1,y:1.05,w:3.9,h:0.7,margin:0,fontSize:18,bold:true,color:C.white,align:"center",valign:"middle"});
    items.forEach((it,ii)=>{
      s.addShape(pptx.ShapeType.rect,{x:x+0.18,y:1.88+ii*1.18,w:3.75,h:1.0,fill:{color:C.light},line:{color:clr,width:1},rectRadius:0.05});
      s.addText(it,{x:x+0.3,y:1.88+ii*1.18+0.1,w:3.5,h:0.8,margin:0,fontSize:9.5,color:C.navy,valign:"middle",lineSpacingMultiple:1.25});
    });
  });
})();

// S13 — DEPENDENCIES
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"11  🔗  DEPENDENCIES & MILESTONES");
  [["Feature A → Feature B","Feature B depends on Feature A backend API",C.red,"Q1 W4"],
   ["Feature C → Design System update","Cần update Design System trước khi build C",C.orange,"Q1 W6"],
   ["Payment Gateway integration","External partner contract cần sign trước Q2",C.orange,"Q1 W8"],
   ["Feature D → Feature B","Feature D cần Feature B data layer",C.accent,"Q2 W2"],
   ["App Store Review","Apple review time: 5–7 ngày trước launch",C.gray,"Q2 W11"],
  ].forEach(([dep,desc,clr,due],i)=>{
    const y=1.05+i*1.2;
    card(s,0.4,y,12.5,1.05,clr);
    s.addText(dep,{x:0.62,y:y+0.08,w:7,h:0.32,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(desc,{x:0.62,y:y+0.44,w:9,h:0.38,margin:0,fontSize:9.5,color:C.gray});
    s.addText(`Due: ${due}`,{x:10.5,y:y+0.2,w:2.3,h:0.35,margin:0,fontSize:10,bold:true,color:clr,align:"right"});
  });
})();

// S14 — OUT OF SCOPE
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"12  🚫  OUT OF SCOPE — WON'T DO THIS YEAR");
  s.addText("Những items này được EXPLICITLY EXCLUDED để quản lý kỳ vọng của stakeholders",{x:0.4,y:0.9,w:12,h:0.32,margin:0,fontSize:9.5,color:C.gray,italic:true});
  [["[Feature X]","[Lý do không làm — quá sớm, resource, dependency]","2026"],
   ["[Feature Y]","[Complexity quá cao so với impact ở giai đoạn này]","Phase 3"],
   ["[Integration Z]","[Partner chưa sẵn sàng, API chưa stable]","After launch"],
   ["[Feature AA]","[Nice to have nhưng không đủ user demand hiện tại]","TBD"],
  ].forEach(([feat,reason,when],i)=>{
    const y=1.32+i*1.45;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:1.28,fill:{color:C.white},line:{color:C.red,width:1},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:0.065,h:1.28,fill:{color:C.red},rectRadius:0.07});
    s.addText("🚫",{x:0.58,y:y+0.1,w:0.55,h:0.5,margin:0,fontSize:18});
    s.addText(feat,{x:1.2,y:y+0.08,w:7.5,h:0.35,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(reason,{x:1.2,y:y+0.46,w:8.5,h:0.6,margin:0,fontSize:9.5,color:C.gray});
    s.addText(when,{x:10.5,y:y+0.35,w:2.3,h:0.4,margin:0,fontSize:11,bold:true,color:C.red,align:"right"});
  });
})();

// S15 — NEXT STEPS & REVIEW CADENCE
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("13  NEXT STEPS & REVIEW CADENCE",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  [["📅  Sprint Bi-weekly","Roadmap review nhẹ — adjust priorities nếu cần","Scrum Master + PO"],
   ["📊  Monthly Stakeholder","Share progress vs. roadmap — 30 min","PO + CPO"],
   ["📋  Quarterly Planning","Full roadmap refresh dựa trên data & feedback","PO + Leadership"],
   ["🔄  Annual Strategy","Long-term vision & strategy alignment","CPO + BOD"],
  ].forEach(([ev,desc,owner],i)=>{
    const y=1.05+i*1.45;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:1.28,fill:{color:"253480"},line:{color:C.green,width:1},rectRadius:0.06});
    s.addText(ev,{x:0.6,y:y+0.1,w:4,h:0.38,margin:0,fontSize:11,bold:true,color:C.green});
    s.addText(desc,{x:0.6,y:y+0.52,w:9,h:0.52,margin:0,fontSize:10.5,color:C.white});
    s.addText(`Owner: ${owner}`,{x:9.8,y:y+0.35,w:3,h:0.35,margin:0,fontSize:9,color:C.iceBlue,italic:true});
  });
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:6.8,w:12.5,h:0.4,fill:{color:"3D1010"},line:{color:C.orange,width:1},rectRadius:0.05});
  s.addText("⚠️ Roadmap là cam kết về hướng đi, KHÔNG phải hứa hẹn về ngày ship. Review và adjust khi cần.",{x:0.6,y:6.82,w:12.2,h:0.35,margin:0,fontSize:9,color:C.orange,align:"center"});
})();

const out = path.join(__dirname,"..","outputs","roadmap-[tên-sản-phẩm].pptx");
if(!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out),{recursive:true});
pptx.writeFile({fileName:out}).then(()=>console.log(`✅ PPTX saved to: ${out}`)).catch(e=>{console.error(e);process.exit(1);});
