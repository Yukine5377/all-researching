/**
 * Product Backlog Excel (.xlsx) Generator
 * Dùng ExcelJS — 6 sheets: Dashboard, Epics, User Stories, Bugs, Tech Debt, Spikes
 * Import vào Google Sheets: File → Import → Upload file .xlsx
 */
const ExcelJS = require("exceljs");
const path = require("path");
const fs = require("fs");

const wb = new ExcelJS.Workbook();
wb.creator = "PO Team";
wb.created = new Date();

// ─── Color Palette ─────────────────────────────────────────────────────────
const COLORS = {
  navy:    "FF1E2761", iceBlue: "FFCADCFC", white:   "FFFFFFFF",
  accent:  "FF4FC3F7", light:   "FFF0F4FF", gray:    "FF64748B",
  green:   "FF10B981", orange:  "FFF59E0B", red:     "FFEF4444",
  darkRed: "FFC0392B", yellow:  "FFFFF176", purple:  "FF8B5CF6",
  headerBg: "FF1E2761", headerFg: "FFFFFFFF",
  p0:      "FFEF4444", p1:      "FFFF9800", p2:      "FFFDD835", p3:      "FF9E9E9E",
};

const headerFont = { name:"Calibri", bold:true, size:11, color:{argb:COLORS.headerFg} };
const bodyFont = { name:"Calibri", size:10 };
const headerFill = { type:"pattern", pattern:"solid", fgColor:{argb:COLORS.headerBg} };
const centerAlign = { horizontal:"center", vertical:"middle", wrapText:true };
const leftAlign = { horizontal:"left", vertical:"middle", wrapText:true };

function borderAll(row, colCount) {
  for(let c=1;c<=colCount;c++){
    const cell=row.getCell(c);
    cell.border={top:{style:"thin",color:{argb:COLORS.gray}},left:{style:"thin",color:{argb:COLORS.gray}},bottom:{style:"thin",color:{argb:COLORS.gray}},right:{style:"thin",color:{argb:COLORS.gray}}};
  }
}
function setRowHeight(row, h) { row.height = h; }
function styleHeader(row, count) {
  for(let c=1;c<=count;c++){
    const cell=row.getCell(c);
    cell.fill=headerFill; cell.font=headerFont; cell.alignment=centerAlign;
  }
  borderAll(row, count);
  setRowHeight(row, 22);
}
function addDataRow(ws, values, rowIndex, isEven=false) {
  const row=ws.addRow(values);
  const bg = isEven ? COLORS.light : COLORS.white;
  for(let c=1;c<=values.length;c++){
    const cell=row.getCell(c);
    cell.fill={type:"pattern",pattern:"solid",fgColor:{argb:bg}};
    cell.font=bodyFont; cell.alignment=leftAlign;
    borderAll(row, values.length);
  }
  setRowHeight(row, 36);
  return row;
}
function priorityColor(priority) {
  if(priority==="P0") return COLORS.p0;
  if(priority==="P1") return COLORS.p1;
  if(priority==="P2") return COLORS.p2;
  return COLORS.p3;
}
function colorCell(row, colIndex, argbColor) {
  row.getCell(colIndex).fill={type:"pattern",pattern:"solid",fgColor:{argb:argbColor}};
  if(argbColor===COLORS.p0||argbColor===COLORS.red||argbColor===COLORS.darkRed) {
    row.getCell(colIndex).font={...bodyFont, color:{argb:"FFFFFFFF"}, bold:true};
  }
}

// ══════════════════════════════════════════════════════════════
// SHEET 1 — 📋 OVERVIEW DASHBOARD
// ══════════════════════════════════════════════════════════════
(()=>{
  const ws = wb.addWorksheet("📋 Dashboard", { properties:{tabColor:{argb:COLORS.navy}} });
  ws.columns=[{width:30},{width:20},{width:20},{width:20},{width:20},{width:20}];

  // Title Row
  ws.mergeCells("A1:F1");
  const titleCell = ws.getCell("A1");
  titleCell.value = "PRODUCT BACKLOG DASHBOARD";
  titleCell.font = { name:"Calibri", bold:true, size:16, color:{argb:COLORS.headerFg} };
  titleCell.fill = headerFill;
  titleCell.alignment = centerAlign;
  ws.getRow(1).height = 32;

  // Product info rows
  const infoRows = [["Product","[Tên Sản Phẩm]"],["Version","v1.0"],["Last Updated","[Date]"],["PO","[PO Name]"],["Sprint","Sprint [N]"]];
  infoRows.forEach(([label, val]) => {
    ws.mergeCells(`B${ws.rowCount+1}:F${ws.rowCount+1}`);
    const row=ws.addRow([label,val]);
    row.getCell(1).font={...bodyFont,bold:true,color:{argb:COLORS.navy}};
    row.getCell(2).font=bodyFont;
    setRowHeight(row, 18);
  });

  ws.addRow([]);

  // Summary table header
  const sumHdr = ws.addRow(["Loại PBI","Backlog","In Progress","Done","Total","% Done"]);
  styleHeader(sumHdr, 6);

  const types=[
    ["User Stories","=COUNTA('📖 User Stories'!A3:A200)","=COUNTIF('📖 User Stories'!H3:H200,\"In Progress\")","=COUNTIF('📖 User Stories'!H3:H200,\"Done\")"],
    ["Bugs","=COUNTA('🐛 Bugs'!A3:A200)","=COUNTIF('🐛 Bugs'!J3:J200,\"In Progress\")","=COUNTIF('🐛 Bugs'!J3:J200,\"Fixed\")"],
    ["Tech Debt","=COUNTA('🔧 Tech Debt'!A3:A200)","=COUNTIF('🔧 Tech Debt'!G3:G200,\"In Progress\")","=COUNTIF('🔧 Tech Debt'!G3:G200,\"Done\")"],
    ["Spikes","=COUNTA('🔍 Spikes'!A3:A200)","=COUNTIF('🔍 Spikes'!F3:F200,\"In Progress\")","=COUNTIF('🔍 Spikes'!F3:F200,\"Done\")"],
  ];
  types.forEach(([type,total,wip,done],i) => {
    const row=ws.addRow([type,total,wip,done,`=B${ws.rowCount}+C${ws.rowCount}+D${ws.rowCount}`,`=IF(E${ws.rowCount}=0,0,D${ws.rowCount}/E${ws.rowCount})`]);
    row.getCell(6).numFmt="0%";
    addDataRow; borderAll(row,6); setRowHeight(row,20);
    row.getCell(1).font={...bodyFont,bold:true};
    for(let c=1;c<=6;c++) row.getCell(c).fill={type:"pattern",pattern:"solid",fgColor:{argb:i%2===0?COLORS.white:COLORS.light}};
  });

  // Priority breakdown
  ws.addRow([]);
  const priHdr = ws.addRow(["Priority Breakdown","P0 (Critical)","P1 (High)","P2 (Medium)","P3 (Low)",""]);
  styleHeader(priHdr, 6);
  const priRow = ws.addRow(["User Stories",
    "=COUNTIF('📖 User Stories'!G3:G200,\"P0\")",
    "=COUNTIF('📖 User Stories'!G3:G200,\"P1\")",
    "=COUNTIF('📖 User Stories'!G3:G200,\"P2\")",
    "=COUNTIF('📖 User Stories'!G3:G200,\"P3\")","",
  ]);
  borderAll(priRow,6); setRowHeight(priRow,20);
  [COLORS.p0,COLORS.p1,COLORS.p2,COLORS.p3].forEach((clr,ci)=>colorCell(priRow,ci+2,clr));
})();

// ══════════════════════════════════════════════════════════════
// SHEET 2 — 🎯 EPICS
// ══════════════════════════════════════════════════════════════
(()=>{
  const ws = wb.addWorksheet("🎯 Epics", { properties:{tabColor:{argb:COLORS.purple}} });
  ws.columns=[{key:"id",width:12},{key:"name",width:32},{key:"goal",width:40},{key:"value",width:30},{key:"quarter",width:14},{key:"status",width:16},{key:"total",width:14},{key:"done",width:14},{key:"pct",width:12}];

  ws.mergeCells("A1:I1");
  const t=ws.getCell("A1"); t.value="EPIC LIST"; t.font={name:"Calibri",bold:true,size:14,color:{argb:COLORS.headerFg}}; t.fill=headerFill; t.alignment=centerAlign; ws.getRow(1).height=28;

  const hdr=ws.addRow(["Epic ID","Epic Name","Goal","Business Value","Target Quarter","Status","Total Stories","Done Stories","% Complete"]);
  styleHeader(hdr,9);

  const epics=[
    ["E-001","[Tên Epic 1]","[Mục tiêu epic — outcome cho user]","[Giá trị kinh doanh]","Q2 2026","In Progress",8,3],
    ["E-002","[Tên Epic 2]","[Mục tiêu epic]","[Giá trị kinh doanh]","Q2 2026","Backlog",5,0],
    ["E-003","[Tên Epic 3]","[Mục tiêu epic]","[Giá trị kinh doanh]","Q3 2026","Backlog",6,0],
    ["E-004","[Tên Epic 4]","[Mục tiêu epic]","[Giá trị kinh doanh]","Q3 2026","Backlog",4,0],
  ];
  epics.forEach(([id,name,goal,val,q,status,total,done],i)=>{
    const pct=total>0?done/total:0;
    const row=ws.addRow([id,name,goal,val,q,status,total,done,pct]);
    row.getCell(9).numFmt="0%";
    const bg=i%2===0?COLORS.white:COLORS.light;
    for(let c=1;c<=9;c++) row.getCell(c).fill={type:"pattern",pattern:"solid",fgColor:{argb:bg}};
    row.getCell(1).font={...bodyFont,bold:true,color:{argb:COLORS.purple}};
    borderAll(row,9); setRowHeight(row,36);
    const sc=row.getCell(6); sc.alignment=centerAlign;
    if(status==="Done") sc.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.green}};
    if(status==="In Progress") sc.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.orange}};
  });

  ws.autoFilter={from:"A2",to:"I2"};
  ws.views=[{state:"frozen",ySplit:2}];
})();

// ══════════════════════════════════════════════════════════════
// SHEET 3 — 📖 USER STORIES
// ══════════════════════════════════════════════════════════════
(()=>{
  const ws = wb.addWorksheet("📖 User Stories", { properties:{tabColor:{argb:COLORS.green}} });
  ws.columns=[{width:12},{width:10},{width:32},{width:55},{width:50},{width:14},{width:10},{width:16},{width:14},{width:30},{width:20},{width:18},{width:18}];

  ws.mergeCells("A1:M1");
  const t=ws.getCell("A1"); t.value="USER STORIES"; t.font={name:"Calibri",bold:true,size:14,color:{argb:COLORS.headerFg}}; t.fill=headerFill; t.alignment=centerAlign; ws.getRow(1).height=28;

  const hdr=ws.addRow(["Story ID","Epic ID","Title","User Story","Acceptance Criteria","Story Pts","Priority","Status","Sprint","Labels","Assignee","Created","Updated"]);
  styleHeader(hdr,13);

  const stories=[
    ["US-001","E-001","[Tên user story ngắn gọn]","As a [commissioner], I want to [create a commission quickly] so that [I can get help without leaving what I'm doing].","GIVEN [user is logged in]\nWHEN [user taps 'Create Commission']\nTHEN [form appears with location, task type, budget fields]",3,"P0","Backlog","Sprint 1","commission,core","[Dev Name]","2026-03-15","2026-03-15"],
    ["US-002","E-001","[Tên user story 2]","As a [tasker], I want to [see available commissions near me] so that [I can accept relevant jobs].","GIVEN [user is a verified tasker]\nWHEN [user opens the app]\nTHEN [list of nearby commissions shown within 5km radius]",5,"P0","Backlog","Sprint 1","tasker,map,core","[Dev Name]","2026-03-15","2026-03-15"],
    ["US-003","E-001","[Tên user story 3]","As a [user], I want to [pay via e-wallet when creating commission] so that [money is held securely until task complete].","GIVEN [user has linked e-wallet]\nWHEN [user confirms commission]\nTHEN [payment is held in escrow account]",8,"P0","Backlog","Sprint 2","payment,escrow","[Dev Name]","2026-03-15","2026-03-15"],
    ["US-004","E-002","[Tên user story 4]","As a [user], I want to [...] so that [...].","GIVEN [...]\nWHEN [...]\nTHEN [...]",3,"P1","Backlog","Sprint 2","","","2026-03-15","2026-03-15"],
    ["US-005","E-002","[Tên user story 5]","As a [user], I want to [...] so that [...].","GIVEN [...]\nWHEN [...]\nTHEN [...]",2,"P1","Backlog","Sprint 3","","","2026-03-15","2026-03-15"],
  ];
  stories.forEach((row,i)=>{
    const r=ws.addRow(row);
    const bg=i%2===0?COLORS.white:COLORS.light;
    for(let c=1;c<=row.length;c++) r.getCell(c).fill={type:"pattern",pattern:"solid",fgColor:{argb:bg}};
    r.getCell(1).font={...bodyFont,bold:true,color:{argb:COLORS.green}};
    colorCell(r,7,priorityColor(row[6]));
    borderAll(r,13); setRowHeight(r,50);
    r.getCell(4).alignment={...leftAlign,wrapText:true};
    r.getCell(5).alignment={...leftAlign,wrapText:true};
  });

  ws.autoFilter={from:"A2",to:"M2"};
  ws.views=[{state:"frozen",ySplit:2}];
})();

// ══════════════════════════════════════════════════════════════
// SHEET 4 — 🐛 BUGS
// ══════════════════════════════════════════════════════════════
(()=>{
  const ws = wb.addWorksheet("🐛 Bugs", { properties:{tabColor:{argb:COLORS.red}} });
  ws.columns=[{width:12},{width:36},{width:16},{width:16},{width:45},{width:30},{width:14},{width:10},{width:16},{width:14},{width:20},{width:18}];

  ws.mergeCells("A1:L1");
  const t=ws.getCell("A1"); t.value="BUG LIST"; t.font={name:"Calibri",bold:true,size:14,color:{argb:COLORS.headerFg}}; t.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.darkRed}}; t.alignment=centerAlign; ws.getRow(1).height=28;

  const hdr=ws.addRow(["Bug ID","Title","Environment","Severity","Steps to Reproduce","Expected / Actual","Story Pts","Priority","Status","Sprint","Reporter","Date Found"]);
  ws.getRow(2).eachCell(cell=>{cell.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.darkRed}};cell.font=headerFont;cell.alignment=centerAlign;});
  borderAll(ws.getRow(2),12); setRowHeight(ws.getRow(2),22);

  const bugs=[
    ["BUG-001","[Mô tả bug ngắn gọn — ví dụ: App crash khi accept commission]","Production","Critical","1. Mở app\n2. Login\n3. Tap Accept trên commission #123\n4. App crash","Expected: Commission accepted\nActual: App crashes with error",3,"P0","Open","Sprint 1","[Reporter]","2026-03-15"],
    ["BUG-002","[Payment không được refund khi tasker từ chối]","Staging","High","1. Tạo commission\n2. Tasker decline\n3. Kiểm tra balance","Expected: Refund trong 1 phút\nActual: Balance không thay đổi",5,"P0","In Progress","Sprint 1","[Reporter]","2026-03-15"],
    ["BUG-003","[Map lag khi có >50 commissions hiển thị]","Staging","Medium","1. Enable 50 test commissions\n2. Open map view","Expected: Smooth 60fps\nActual: Stutters at 15fps",2,"P1","Open","Sprint 2","[Reporter]","2026-03-15"],
  ];
  bugs.forEach((row,i)=>{
    const r=ws.addRow(row);
    const bg=i%2===0?COLORS.white:"FFFFF0F0";
    for(let c=1;c<=row.length;c++) r.getCell(c).fill={type:"pattern",pattern:"solid",fgColor:{argb:bg}};
    r.getCell(1).font={...bodyFont,bold:true,color:{argb:COLORS.red}};
    colorCell(r,8,priorityColor(row[7]));
    const sev=row[3]; const sevCell=r.getCell(4);
    if(sev==="Critical") sevCell.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.darkRed}};
    if(sev==="High") sevCell.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.red}};
    sevCell.alignment=centerAlign;
    borderAll(r,12); setRowHeight(r,50);
  });

  ws.autoFilter={from:"A2",to:"L2"};
  ws.views=[{state:"frozen",ySplit:2}];
})();

// ══════════════════════════════════════════════════════════════
// SHEET 5 — 🔧 TECH DEBT
// ══════════════════════════════════════════════════════════════
(()=>{
  const ws = wb.addWorksheet("🔧 Tech Debt", { properties:{tabColor:{argb:COLORS.orange}} });
  ws.columns=[{width:12},{width:36},{width:18},{width:45},{width:35},{width:12},{width:10},{width:16},{width:14},{width:20}];

  ws.mergeCells("A1:J1");
  const t=ws.getCell("A1"); t.value="TECH DEBT"; t.font={name:"Calibri",bold:true,size:14,color:{argb:COLORS.headerFg}}; t.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF7B3B00"}}; t.alignment=centerAlign; ws.getRow(1).height=28;

  const hdr=ws.addRow(["TD ID","Title","Area","Description","Impact if not fixed","Effort","Priority","Status","Sprint","Assignee"]);
  styleHeader(hdr,10);

  const debts=[
    ["TD-001","Refactor payment service — spaghetti code","Backend","Payment service hiện tại >800 LOC, no unit tests, hard to change","High risk mỗi lần sửa payment. Bug rate cao","L","P1","Backlog","Sprint 3","[Dev Name]"],
    ["TD-002","Replace deprecated React Native libraries","Frontend","react-native-maps v0.28 sắp EOL, react-native-camera deprecated","Build fail trên Xcode 16+ sau 6 tháng","M","P1","Backlog","Sprint 2","[Dev Name]"],
    ["TD-003","Add database indexes cho query thường dùng","Database","Query users table full scan — no index on email, status columns","Response time tăng khi >10K users","S","P2","Backlog","Sprint 2","[Dev Name]"],
    ["TD-004","Setup centralized error logging (Sentry)","Infrastructure","Hiện tại không có structured logging, khó debug production issues","Blind spot cho production errors","S","P1","Backlog","Sprint 1","[Dev Name]"],
  ];
  debts.forEach((row,i)=>{
    const r=ws.addRow(row);
    const bg=i%2===0?COLORS.white:"FFFFF8E1";
    for(let c=1;c<=row.length;c++) r.getCell(c).fill={type:"pattern",pattern:"solid",fgColor:{argb:bg}};
    r.getCell(1).font={...bodyFont,bold:true,color:{argb:COLORS.orange}};
    colorCell(r,7,priorityColor(row[6]));
    borderAll(r,10); setRowHeight(r,50);
  });

  ws.autoFilter={from:"A2",to:"J2"};
  ws.views=[{state:"frozen",ySplit:2}];
})();

// ══════════════════════════════════════════════════════════════
// SHEET 6 — 🔍 SPIKES
// ══════════════════════════════════════════════════════════════
(()=>{
  const ws = wb.addWorksheet("🔍 Spikes", { properties:{tabColor:{argb:COLORS.accent}} });
  ws.columns=[{width:12},{width:36},{width:45},{width:16},{width:35},{width:16},{width:18},{width:18}];

  ws.mergeCells("A1:H1");
  const t=ws.getCell("A1"); t.value="SPIKES (RESEARCH TASKS)"; t.font={name:"Calibri",bold:true,size:14,color:{argb:COLORS.headerFg}}; t.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF004D87"}}; t.alignment=centerAlign; ws.getRow(1).height=28;

  const hdr=ws.addRow(["Spike ID","Title","Question to Answer","Time-box","Expected Output","Status","Owner","Due Date"]);
  styleHeader(hdr,8);

  const spikes=[
    ["SP-001","Payment gateway comparison","So sánh MoMo vs ZaloPay vs VNPay cho escrow use case — fee structure, API quality, compliance","3 ngày","Decision doc: chọn provider + contract negotiation checklist","Open","[PO Name]","2026-03-22"],
    ["SP-002","Realtime commission listing tech","Evaluate WebSocket vs SSE vs Polling cho realtime commission updates — latency, battery impact mobile","2 ngày","Tech recommendation doc + POC code","Open","[Tech Lead]","2026-03-20"],
    ["SP-003","Trust & Safety mechanisms","Research cách Airtasker, GoGet handle user trust/safety — rating system, ID verification, dispute resolution","4 ngày","Feature spec cho Trust & Safety module v1","Open","[PO Name]","2026-03-25"],
  ];
  spikes.forEach((row,i)=>{
    const r=ws.addRow(row);
    const bg=i%2===0?COLORS.white:"FFF0FAFF";
    for(let c=1;c<=row.length;c++) r.getCell(c).fill={type:"pattern",pattern:"solid",fgColor:{argb:bg}};
    r.getCell(1).font={...bodyFont,bold:true,color:{argb:COLORS.accent}};
    borderAll(r,8); setRowHeight(r,50);
    const sc=r.getCell(6);
    if(row[5]==="Done") sc.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.green}};
    if(row[5]==="In Progress") sc.fill={type:"pattern",pattern:"solid",fgColor:{argb:COLORS.orange}};
    sc.alignment=centerAlign;
  });

  ws.autoFilter={from:"A2",to:"H2"};
  ws.views=[{state:"frozen",ySplit:2}];
})();

// ─── Save ─────────────────────────────────────────────────────
const outDir = path.join(__dirname, "..", "outputs");
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
const outPath = path.join(outDir, "backlog-[tên-sản-phẩm].xlsx");
wb.xlsx.writeFile(outPath).then(()=>{
  console.log(`✅ Excel saved to: ${outPath}`);
  console.log("📌 Import vào Google Sheets: File → Import → Upload → chọn file .xlsx");
}).catch(e=>{console.error(e);process.exit(1);});
