/**
 * SRS PPTX Generator — 15 slides
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
  slide.addText("SRS",{x:0,y:0,w:12.9,h:0.85,margin:0,fontSize:9,color:C.accent,align:"right",valign:"middle"});
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
  s.addShape(pptx.ShapeType.rect,{x:0.5,y:0.55,w:2.4,h:0.52,fill:{color:C.green},rectRadius:0.08,line:{color:C.green}});
  s.addText("⚙️ SRS",{x:0.5,y:0.55,w:2.4,h:0.52,margin:0,fontSize:13,bold:true,color:C.white,align:"center",valign:"middle"});
  s.addText("Software Requirements Specification",{x:0.5,y:1.3,w:9,h:0.45,margin:0,fontSize:14,color:C.iceBlue,italic:true});
  s.addText("[Tên Hệ Thống / Module]",{x:0.5,y:1.8,w:9,h:1.2,margin:0,fontSize:38,bold:true,color:C.white});
  s.addText("Đặc tả kỹ thuật · Functional & Non-functional · Cho DEV & Tester",{x:0.5,y:3.1,w:9,h:0.45,margin:0,fontSize:13,color:C.iceBlue});
  [["Authors","PO + Tech Lead"],["Audience","DEV, Tester"],["Date","[Date]"],["Version","v1.0"]].forEach(([l,v],i)=>{
    const x=0.5+i*2.3;
    s.addShape(pptx.ShapeType.rect,{x,y:6.0,w:2.1,h:1.0,fill:{color:"283593"},rectRadius:0.06,line:{color:C.green,width:1}});
    s.addText(l,{x,y:6.05,w:2.1,h:0.42,margin:[4,6,0,6],fontSize:8,color:C.iceBlue,valign:"bottom"});
    s.addText(v,{x,y:6.47,w:2.1,h:0.48,margin:[0,6,4,6],fontSize:10,bold:true,color:C.white,valign:"top"});
  });
})();

// S2 — TOC
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"📋  Mục Lục");
  [["01","System Overview & Scope","Tổng quan hệ thống, glossary"],["02","Tech Stack & Architecture","Framework, infra, diagram"],
   ["03","Functional Req — Auth & Core","Login, auth, core flows"],["04","Functional Req — Business Logic","Domain-specific logic"],
   ["05","Functional Req — Integrations","Third-party APIs, webhooks"],["06","Non-functional — Performance","SLA, throughput, latency"],
   ["07","Non-functional — Security","Auth, encryption, OWASP"],["08","Non-functional — Scalability","Horizontal scaling, CDN"],
   ["09","Interface Requirements","UI, API, external systems"],["10","Database Schema","High-level ERD, tables"],
   ["11","Error Handling & Logging","Error codes, structured logs"],["12","Deployment & Environments","Dev/Staging/Prod, CI/CD"],
  ].forEach(([n,t,d],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.0+row*1.08;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.95,fill:{color:C.white},line:{color:C.green,width:1},shadow:mk(),rectRadius:0.06});
    s.addShape(pptx.ShapeType.rect,{x,y,w:0.065,h:0.95,fill:{color:C.green},rectRadius:0.06});
    s.addText(n,{x:x+0.15,y:y+0.08,w:0.6,h:0.42,margin:0,fontSize:16,bold:true,color:C.green,align:"center"});
    s.addText(t,{x:x+0.85,y:y+0.08,w:5.3,h:0.3,margin:0,fontSize:11,bold:true,color:C.navy});
    s.addText(d,{x:x+0.85,y:y+0.42,w:5.3,h:0.35,margin:0,fontSize:9,color:C.gray});
  });
})();

// S3 — SYSTEM OVERVIEW
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("01  SYSTEM OVERVIEW & SCOPE",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  [["🖥️  System Overview","[Mô tả hệ thống làm gì — 2–3 câu. Ai dùng, dùng như thế nào, business context]",C.accent],
   ["✅  In Scope","[Modules, features, APIs nằm trong SRS này]",C.green],
   ["🚫  Out of Scope","[Modules không được cover — và đang ở SRS nào]",C.red],
  ].forEach(([lbl,val,clr],i)=>{
    const y=1.05+i*2.05;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:1.85,fill:{color:"253480"},line:{color:clr,width:1.5},rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:0.065,h:1.85,fill:{color:clr},rectRadius:0.07});
    s.addText(lbl,{x:0.62,y:y+0.1,w:12,h:0.35,margin:0,fontSize:10,bold:true,color:clr});
    s.addText(val,{x:0.62,y:y+0.5,w:12,h:1.1,margin:0,fontSize:11,color:C.white,lineSpacingMultiple:1.3});
  });
})();

// S4 — TECH STACK
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"02  💻  TECH STACK & ARCHITECTURE");
  const stack=[["Frontend","[Framework] v[X.X] · [Styling: Tailwind/CSS Modules]"],["Backend","[Language] · [Framework] v[X.X] · [ORM]"],
   ["Database","[DB Type] v[X.X] · [Caching: Redis v[X.X]]"],["Queue/Events","[Kafka/RabbitMQ] · [Event-driven patterns]"],
   ["Cloud/Infra","[AWS/GCP] · [Container: Docker/K8s] · [Load Balancer]"],["CI/CD","[GitHub Actions/Jenkins] · [Registry: ECR/DockerHub]"]];
  stack.forEach(([t,v],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.1;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:1.88,fill:{color:C.white},line:{color:C.green,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.55,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.07});
    s.addText(t,{x:x+0.15,y:y+0.06,w:6,h:0.42,margin:0,fontSize:12,bold:true,color:C.iceBlue,valign:"middle"});
    s.addText(v,{x:x+0.15,y:y+0.66,w:6,h:1.05,margin:0,fontSize:10.5,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S5-S7 — FUNCTIONAL REQUIREMENTS
[["03","🔐","Functional Req — Authentication & Core",
  ["FR-001: Authentication\n  POST /auth/login → {access_token, refresh_token}\n  Business Rule: bcrypt salt≥12 · Rate limit: 5 fails/15min → 429",
   "FR-002: Authorization\n  RBAC model: [Role A, Role B, Role C]\n  Resource ownership check on all write operations",
   "FR-003: Core Flow #1\n  [Mô tả flow chính — input, output, business rules, error cases]",
   "FR-004: Core Flow #2\n  [Mô tả flow chính #2]"]],
 ["04","⚙️","Functional Req — Business Logic",
  ["FR-010: [Business Rule 1]\n  [Input/Output/Validation/Error handing]",
   "FR-011: [Business Rule 2]\n  [Input/Output/Validation/Error handling]",
   "FR-012: [Calculation Logic]\n  Formula: [mô tả công thức] · Precision: [X decimal places]",
   "FR-013: [State Machine]\n  States: [A→B→C→D] · Transitions: [conditions]"]],
 ["05","🔌","Functional Req — Integrations",
  ["FR-020: Payment Gateway Integration\n  Provider: [MoMo/VNPay/Stripe] · Webhook: POST /webhooks/payment\n  Payload validation: HMAC-SHA256 signature",
   "FR-021: Email Service\n  Provider: [SendGrid/SES] · Template IDs: [welcome, reset_pw, notification]\n  Retry: 3 attempts with exponential backoff",
   "FR-022: Push Notification\n  Provider: [Firebase FCM] · Topics: [user_id, broadcast]\n  Silent push for background sync",
   "FR-023: Storage\n  Provider: [S3/GCS] · File types: [jpg, png, pdf] max [X]MB\n  CDN: CloudFront/Cloudflare delivery"]],
].forEach(([n,ic,t,fields])=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,`${n}  ${ic}  ${t.toUpperCase()}`);
  fields.forEach((f,i)=>{
    const y=1.05+i*1.55; card(s,0.4,y,12.5,1.38,C.green);
    s.addText(f,{x:0.62,y:y+0.12,w:12,h:1.1,margin:0,fontSize:9.5,color:C.gray,lineSpacingMultiple:1.3,fontFace:"Courier New"});
  });
});

// S8 — NFR PERFORMANCE
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"06  ⚡  NON-FUNCTIONAL — PERFORMANCE");
  [["API Response Time","P50 < 200ms · P95 < 500ms · P99 < 1000ms",C.green],
   ["Page Load","< 3s trên 4G · First Contentful Paint < 1.5s · LCP < 2.5s",C.accent],
   ["Throughput","Peak: [X] requests/second · Max concurrent users: [X]",C.orange],
   ["Uptime SLA","99.9% (max 8.76 hours downtime/year) · RTO < 4h · RPO < 1h",C.red],
  ].forEach(([t,v,clr],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.85;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.6,fill:{color:C.white},line:{color:clr,width:2},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.62,fill:{color:clr},line:{color:clr},rectRadius:0.07});
    s.addText(t,{x:x+0.15,y:y+0.08,w:6,h:0.45,margin:0,fontSize:13,bold:true,color:C.white,valign:"middle"});
    s.addText(v,{x:x+0.15,y:y+0.75,w:6,h:1.65,margin:0,fontSize:11,color:C.gray,lineSpacingMultiple:1.4});
  });
})();

// S9 — SECURITY
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"07  🔒  NON-FUNCTIONAL — SECURITY");
  [["Authentication","JWT (HS256/RS256) · Access token: 15min TTL · Refresh: 7 days · Revocation via Redis blacklist"],
   ["Authorization","RBAC · Resource-level permissions · Principle of least privilege"],
   ["Data Encryption","At rest: AES-256 · In transit: TLS 1.3 minimum · PII: field-level encryption for [fields]"],
   ["OWASP Top 10","SQL Injection: Parameterized queries · XSS: CSP headers + input sanitization · CSRF: SameSite cookies"],
   ["Rate Limiting","Auth endpoints: 5 req/15min · API: 100 req/min per user · DDoS: WAF + Cloudflare"],
   ["Audit Logging","All create/update/delete operations logged with: user_id, timestamp, IP, before/after state"],
  ].forEach(([t,v],i)=>{
    const y=1.05+i*1.05; card(s,0.4,y,12.5,0.9,C.red);
    s.addText(t,{x:0.62,y:y+0.08,w:3,h:0.32,margin:0,fontSize:9.5,bold:true,color:C.navy});
    s.addText(v,{x:3.7,y:y+0.08,w:9,h:0.68,margin:0,fontSize:9.5,color:C.gray,valign:"middle",lineSpacingMultiple:1.2});
  });
})();

// S10 — SCALABILITY & USABILITY
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"08  📈  NON-FUNCTIONAL — SCALABILITY & USABILITY");
  [["Horizontal Scaling","Stateless services deployable behind load balancer · Session stored in Redis (not server memory)"],
   ["Database Scaling","Read replicas for query-heavy ops · Connection pooling: max [X] connections · Sharding trigger: > [X]M rows"],
   ["CDN Strategy","Static assets: [CloudFront/Cloudflare] · Cache TTL: 1 year (content-hash filenames) · Image optimization: WebP"],
   ["API Design","RESTful · Versioning: /api/v1/ · Response format: JSON · Pagination: cursor-based for large datasets"],
   ["Error Messages","Human-readable, localized ([vi/en]) · Error code scheme: [domain]-[code] e.g. AUTH-001"],
   ["Logging Format","Structured JSON logs · Fields: timestamp, level, service, trace_id, user_id, message, duration_ms"],
  ].forEach(([t,v],i)=>{
    const y=1.05+i*1.05; card(s,0.4,y,12.5,0.9,C.accent);
    s.addText(t,{x:0.62,y:y+0.08,w:3.2,h:0.32,margin:0,fontSize:9.5,bold:true,color:C.navy});
    s.addText(v,{x:3.9,y:y+0.08,w:8.9,h:0.7,margin:0,fontSize:9.5,color:C.gray,valign:"middle",lineSpacingMultiple:1.2});
  });
})();

// S11 — INTERFACE REQUIREMENTS
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"09  🔌  INTERFACE REQUIREMENTS");
  s.addText("USER INTERFACE",{x:0.4,y:0.9,w:4,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["Browser Support","Chrome 90+ · Safari 14+ · Firefox 88+ · Edge 90+"],["Mobile","iOS 14+ · Android 10+ · React Native / Flutter"],["Min Resolution","320px width · Responsive breakpoints: 320/768/1024/1440px"]].forEach(([t,v],i)=>{
    const y=1.28+i*0.6; card(s,0.4,y,12.5,0.52,C.accent);
    s.addText(t,{x:0.62,y:y+0.1,w:3,h:0.32,margin:0,fontSize:9.5,bold:true,color:C.navy});
    s.addText(v,{x:3.7,y:y+0.1,w:9,h:0.32,margin:0,fontSize:9.5,color:C.gray,valign:"middle"});
  });
  s.addText("API INTERFACE",{x:0.4,y:3.15,w:4,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["Protocol","HTTPS RESTful · JSON data format · Bearer token auth"],["Versioning","/api/v1/ prefix · Deprecation notice: 6 months before removal"],["Standard Response",'{"data": {...}, "meta": {"page": 1, "total": 100}, "error": null}']].forEach(([t,v],i)=>{
    const y=3.52+i*0.6; card(s,0.4,y,12.5,0.52,C.green);
    s.addText(t,{x:0.62,y:y+0.1,w:3,h:0.32,margin:0,fontSize:9.5,bold:true,color:C.navy});
    s.addText(v,{x:3.7,y:y+0.1,w:9,h:0.32,margin:0,fontSize:9.5,color:C.gray,valign:"middle"});
  });
  s.addText("EXTERNAL SYSTEMS",{x:0.4,y:5.35,w:4,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  const hdrs=[{text:"System",options:{bold:true,color:C.white,fill:C.navy}},{text:"Protocol",options:{bold:true,color:C.white,fill:C.navy}},{text:"Auth",options:{bold:true,color:C.white,fill:C.navy}},{text:"Data Format",options:{bold:true,color:C.white,fill:C.navy}}];
  const rows=[[{text:"[Payment GW]"},{text:"HTTPS REST"},{text:"API Key"},{text:"JSON"}],[{text:"[Email SVC]"},{text:"SMTP / API"},{text:"OAuth2"},{text:"JSON"}],[{text:"[Push Notif]"},{text:"FCM API"},{text:"Service Account"},{text:"JSON"}]];
  s.addTable([hdrs,...rows],{x:0.4,y:5.72,w:12.5,h:1.55,fontSize:9.5,border:{type:"solid",color:C.iceBlue,pt:0.5},align:"center",valign:"middle",colW:[3.5,2.8,2.7,3.5],rowH:[0.42,0.36,0.36,0.36]});
})();

// S12 — DATABASE SCHEMA
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"10  🗄️  DATABASE SCHEMA (High-level)");
  const tables=[["users","id: UUID PK\nemail: VARCHAR(255) UNIQUE NOT NULL\npassword_hash: VARCHAR(255) NOT NULL\nrole: ENUM('admin','user','guest')\ncreated_at: TIMESTAMP\nupdated_at: TIMESTAMP"],
   ["[table_2]","id: UUID PK\nuser_id: UUID FK → users.id\n[field_1]: [type] [constraint]\n[field_2]: [type] [constraint]\nstatus: ENUM('[A]','[B]','[C]')\ncreated_at: TIMESTAMP"],
   ["[table_3]","id: UUID PK\n[relation_id]: UUID FK → [table].id\n[amount]: DECIMAL(15,2)\n[status]: VARCHAR(50)\nmetadata: JSONB\ncreated_at: TIMESTAMP"],
   ["[table_4]","id: UUID PK\n[field_1]: [type]\n[field_2]: [type]\nindexes: [field_1, status]\ncreated_at: TIMESTAMP\nupdated_at: TIMESTAMP"],
  ];
  tables.forEach(([name,schema],i)=>{
    const col=i%2,row=Math.floor(i/2),x=0.4+col*6.55,y=1.05+row*2.98;
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:2.75,fill:{color:C.white},line:{color:C.accent,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x,y,w:6.3,h:0.55,fill:{color:C.navy},line:{color:C.navy},rectRadius:0.07});
    s.addText(`📊  ${name}`,{x:x+0.15,y:y+0.06,w:6,h:0.42,margin:0,fontSize:12,bold:true,color:C.iceBlue,valign:"middle"});
    s.addText(schema,{x:x+0.15,y:y+0.65,w:6,h:2.0,margin:0,fontSize:8.5,color:C.gray,fontFace:"Courier New",lineSpacingMultiple:1.35});
  });
})();

// S13 — ERROR HANDLING & LOGGING
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"11  📋  ERROR HANDLING & LOGGING");
  s.addText("STANDARD ERROR RESPONSE FORMAT",{x:0.4,y:0.9,w:8,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  s.addShape(pptx.ShapeType.rect,{x:0.4,y:1.25,w:12.5,h:1.38,fill:{color:"1A1A3E"},line:{color:C.accent,width:1.5},rectRadius:0.06});
  s.addText('{ "error": { "code": "AUTH-001", "message": "Token expired", "details": null },\n  "data": null, "meta": { "request_id": "uuid", "timestamp": "ISO8601" } }',{x:0.6,y:1.32,w:12.2,h:1.22,margin:0,fontSize:9.5,color:C.green,fontFace:"Courier New",lineSpacingMultiple:1.4});
  s.addText("HTTP STATUS CODE GUIDE",{x:0.4,y:2.72,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  const hdrs=[{text:"Code",options:{bold:true,color:C.white,fill:C.navy}},{text:"Meaning",options:{bold:true,color:C.white,fill:C.navy}},{text:"When to use",options:{bold:true,color:C.white,fill:C.navy}}];
  const rows=[[{text:"200"},{text:"OK"},{text:"Successful GET, PUT, PATCH"}],[{text:"201"},{text:"Created"},{text:"Successful POST creating resource"}],[{text:"400"},{text:"Bad Request"},{text:"Validation error, malformed request"}],[{text:"401"},{text:"Unauthorized"},{text:"Missing or invalid token"}],[{text:"403"},{text:"Forbidden"},{text:"Valid token, insufficient permission"}],[{text:"429"},{text:"Too Many Requests"},{text:"Rate limit exceeded"}],[{text:"500"},{text:"Internal Server Error"},{text:"Unhandled exception — log & alert"}]];
  s.addTable([hdrs,...rows],{x:0.4,y:3.08,w:7,h:3.75,fontSize:9.5,border:{type:"solid",color:C.iceBlue,pt:0.5},align:"center",valign:"middle",colW:[1.2,2.2,3.6],rowH:[0.42,...new Array(7).fill(0.43)]});
  s.addText("LOG LEVELS",{x:7.7,y:2.72,w:4,h:0.32,margin:0,fontSize:10,bold:true,color:C.navy});
  [["DEBUG","Dev detail, không log production"],["INFO","Lifecycle events: request start/end"],["WARN","Non-critical issues, rate limit near"],["ERROR","Exception caught, operation failed"],["FATAL","System cannot continue, alert triggered"]].forEach(([lvl,desc],i)=>{
    const clr=[C.gray,C.green,C.orange,C.red,"EF4444"][i];
    s.addShape(pptx.ShapeType.rect,{x:7.7,y:3.08+i*0.72,w:5.0,h:0.62,fill:{color:C.white},line:{color:clr,width:1},shadow:mk(),rectRadius:0.05});
    s.addText(lvl,{x:7.85,y:3.08+i*0.72+0.1,w:1.2,h:0.42,margin:0,fontSize:9.5,bold:true,color:clr,align:"center"});
    s.addText(desc,{x:9.1,y:3.08+i*0.72+0.1,w:3.5,h:0.4,margin:0,fontSize:9,color:C.gray,valign:"middle"});
  });
})();

// S14 — DEPLOYMENT
(()=>{
  const s=pptx.addSlide(); lightBg(s); hdr(s,"12  🚀  DEPLOYMENT & ENVIRONMENTS");
  const envs=[["Development",C.accent,"dev.[domain].com","Mỗi commit","Developers","Auto-deploy on push · Feature flags ON"],
   ["Staging",C.orange,"staging.[domain].com","Mỗi PR merge","QA Team","Full integration test suite · Mirror prod data (anonymized)"],
   ["Production",C.green,"[domain].com","Weekly release","All users","Blue-green deployment · Rollback < 5 min · APM monitoring"]];
  envs.forEach(([name,clr,url,freq,users,notes],i)=>{
    const y=1.05+i*1.98;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:1.8,fill:{color:C.white},line:{color:clr,width:1.5},shadow:mk(),rectRadius:0.07});
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:0.065,h:1.8,fill:{color:clr},rectRadius:0.07});
    s.addText(name,{x:0.62,y:y+0.1,w:2,h:0.38,margin:0,fontSize:14,bold:true,color:clr});
    s.addText(url,{x:2.75,y:y+0.1,w:4,h:0.38,margin:0,fontSize:10,color:C.gray,italic:true});
    s.addText(`Deploy: ${freq} · Users: ${users}`,{x:7.0,y:y+0.1,w:5.8,h:0.38,margin:0,fontSize:9.5,color:C.gray,align:"right"});
    s.addText(notes,{x:0.62,y:y+0.55,w:12,h:1.0,margin:0,fontSize:10.5,color:C.gray,lineSpacingMultiple:1.3});
  });
})();

// S15 — OPEN ISSUES & SIGN-OFF
(()=>{
  const s=pptx.addSlide(); darkBg(s);
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:"100%",h:0.85,fill:{color:"0D1B6E"},line:{color:"0D1B6E"}});
  s.addText("13  OPEN ISSUES & SIGN-OFF",{x:0.4,y:0,w:12,h:0.85,margin:0,fontSize:13,bold:true,color:C.iceBlue,valign:"middle"});
  s.addText("OPEN TECHNICAL ISSUES",{x:0.4,y:0.95,w:5,h:0.32,margin:0,fontSize:10,bold:true,color:C.orange});
  [["TI-001","[Technical issue / decision pending — ví dụ: DB schema cho audit log]","Tech Lead","Open"],
   ["TI-002","[Scalability concern — ví dụ: Queue strategy cho high volume events]","Backend Dev","Open"],
   ["TI-003","[Security review item — ví dụ: PII handling for EU users]","Security","In Review"],
  ].forEach(([id,q,owner,status],i)=>{
    const y=1.32+i*1.05; const clr=status==="In Review"?C.orange:C.red;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.9,fill:{color:"253480"},line:{color:clr,width:1},rectRadius:0.06});
    s.addText(id,{x:0.6,y:y+0.12,w:0.9,h:0.35,margin:0,fontSize:9.5,bold:true,color:clr});
    s.addText(q,{x:1.6,y:y+0.12,w:8,h:0.35,margin:0,fontSize:9.5,color:C.white});
    s.addText(`Owner: ${owner}  ·  ${status}`,{x:9.7,y:y+0.12,w:3,h:0.35,margin:0,fontSize:8.5,color:clr,align:"right"});
  });
  s.addText("SIGN-OFF",{x:0.4,y:4.52,w:3,h:0.32,margin:0,fontSize:10,bold:true,color:C.green});
  [["Product Owner","Requirements complete & approved"],["Technical Lead","Architecture approved"],["Security","Security requirements reviewed"],["QA Lead","Test plan will be based on this SRS"]].forEach(([role,note],i)=>{
    const y=4.88+i*0.62;
    s.addShape(pptx.ShapeType.rect,{x:0.4,y,w:12.5,h:0.52,fill:{color:"1A2566"},line:{color:C.green,width:1},rectRadius:0.05});
    s.addText(role,{x:0.6,y:y+0.08,w:2.5,h:0.35,margin:0,fontSize:9.5,bold:true,color:C.green});
    s.addText(note,{x:3.2,y:y+0.08,w:6.5,h:0.35,margin:0,fontSize:9.5,color:C.iceBlue});
    s.addText("Signature: _______________",{x:9.8,y:y+0.08,w:3,h:0.35,margin:0,fontSize:8.5,color:C.gray});
  });
})();

const out = path.join(__dirname,"..","outputs","srs-[tên-system].pptx");
if(!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out),{recursive:true});
pptx.writeFile({fileName:out}).then(()=>console.log(`✅ PPTX saved to: ${out}`)).catch(e=>{console.error(e);process.exit(1);});
