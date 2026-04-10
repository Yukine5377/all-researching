# Theo dõi câu hỏi: Apex Coach – AI-Powered Personal Fitness Coaching App

**Ngày tạo:** 2026-04-10 | **Nguồn:** BA Research + AI Domain Knowledge

---

## 🔎 Phân tích sơ bộ

> **Vấn đề cốt lõi:** Người dùng fitness (beginner → intermediate) đang dùng nhiều app rời rạc (workout tracker, nutrition app, sleep tracker), không có hệ thống duy nhất giải thích logic và tự động adapt theo progress — dẫn đến plateau, churn, và cảm giác thiếu guidance.
>
> **Ambiguity Zones:**
> - AI "coach" vs AI "tracker" — mức độ tư vấn chủ động (AI explains why) có thực sự implemented không hay chỉ là rule-based?
> - "Periodized programs" (RPE-based, deload weeks) — logic phức tạp, cần confirm ai define và validate các thuật toán training science
> - Boundary giữa Free tier và Premium chưa rõ — tính năng nào lock/unlock cụ thể
>
> **Rủi ro bỏ sót:**
> - AI giải thích program adjustment ("Why") là differentiator lớn nhất — cần hỏi kỹ cơ chế
> - Privacy-first architecture: ai define "on-device processing", đến đâu là cloud?
> - 3 persona rất khác nhau (beginner vs plateau fighter vs lifestyle optimizer) — MVP phục vụ persona nào trước?

---

## PHẦN 1.1: VẤN ĐỀ & MỤC ĐÍCH

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.1.1** | Vấn đề cốt lõi | Vấn đề lớn nhất bạn thấy ở thị trường fitness app hiện tại là gì? (Theo spec: apps quá beginner-focused, thiếu periodization, không giải thích logic, thiếu tích hợp) Bạn xác nhận ưu tiên thứ tự vấn đề này không? | XÁC NHẬN | ⬜ |
| **1.1.2** | Tầm nhìn sản phẩm | "Apex Coach là AI fitness coach đầu tiên kết hợp strength training, nutrition, recovery vào 1 hệ thống" — đây là vision cuối hay MVP? | KHÁM PHÁ | ⬜ |
| **1.1.3** | Persona ưu tiên | 3 persona (Jordan-beginner, Alex-plateau, Sam-optimizer) — MVP sẽ phục vụ persona nào đầu tiên? Tại sao? | KHÁM PHÁ | ⬜ |
| **1.1.4** | Cơ cấu tổ chức | Team xây dựng Apex Coach gồm ai? (Founders, developers, fitness expert advisors, UX designers) | KHÁM PHÁ | ⬜ |
| **1.1.5** | Người ra quyết định | Ai quyết định tính năng nào vào MVP? Ai phê duyệt release? | KHÁM PHÁ | ⬜ |
| **1.1.6** | Revenue model | Monetization plan: freemium subscription? Theo spec $59.99–$99.99/year — model cụ thể như thế nào? (Free tier có gì? Premium unlock gì?) | KHÁM PHÁ | ⬜ |
| **1.1.7** | Cost structure | Chi phí chính dự kiến: AI compute (OpenAI/custom model), video hosting, Apple Watch integration, server infra? | KHÁM PHÁ | ⬜ |
| **1.1.8** | KPI thành công | Metric nào quan trọng nhất năm đầu? (DAU, D30 retention, premium conversion, workouts completed/week, plateau-break rate?) | KHÁM PHÁ | ⬜ |
| **1.1.9** | Market | Target market đầu tiên: US, UK, Australia hay global? Tại sao các thị trường này? | KHÁM PHÁ | ⬜ |
| **1.1.10** | Positioning vs competitors | Theo spec, Apex Coach đối chiếu với Gravl, Planfit, Zing, SHRED, Impakt. Bạn đã dùng thử tất cả chưa? Điểm yếu nào bạn thấy rõ nhất? | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.2: HỆ THỐNG HIỆN TẠI (Prototype / MVP hiện có)

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.2.1** | Status MVP | Hiện tại đã có prototype hay MVP nào chưa? Tính năng nào đã build được? | KHÁM PHÁ | ⬜ |
| **1.2.2** | Tech stack | Tech stack hiện tại là gì? (React Native, Swift, Kotlin? Backend Node/Python? AI model provider?) | KHÁM PHÁ | ⬜ |
| **1.2.3** | AI model | AI coach hiện tại dùng model gì? (Custom ML, GPT wrapper, rule-based logic?) | KHÁM PHÁ | ⬜ |
| **1.2.4** | Testing | Có beta users / testers nào chưa? Feedback gì? | KHÁM PHÁ | ⬜ |
| **1.2.5** | Pain points đã biết | Từ testing, bạn thấy tính năng nào cần cải tiến nhất? | KHÁM PHÁ | ⬜ |
| **1.2.6** | Platform | App target iOS trước hay Android hay cả hai từ đầu? | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.3: QUY TRÌNH & CÔNG VIỆC

### **Phần 1.3A: Xác nhận Stakeholders**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3A.1** | End users | 3 persona (Jordan, Alex, Sam) — còn ai khác không? (VD: competitive athletes, rehab patients, elderly?) | KHÁM PHÁ | ⬜ |
| **1.3A.2** | Professional users | Có personal trainer / coach dùng app để manage clients không? | KHÁM PHÁ | ⬜ |
| **1.3A.3** | Admin/Internal | Team nào manage content (exercise library, nutrition data), support users, moderate? | KHÁM PHÁ | ⬜ |
| **1.3A.4** | Fitness science advisor | Ai validate chất lượng training programs? Có sports scientist / PT on team không? | KHÁM PHÁ | ⬜ |

---

### **Phần 1.3B: Vòng đời thực thể chính**

#### **B1 – User / Onboarding Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B1.1** | Onboarding flow | Onboarding steps dự kiến là gì? (Goal → Fitness level → Equipment → Body metrics → AI program generation?) Xin mẫu | KHÁM PHÁ | ⬜ |
| **1.3B1.2** | Fitness assessment | App có assess fitness level ban đầu không? (Test: max pushups, 1RM estimate, VO2max?) | KHÁM PHÁ | ⬜ |
| **1.3B1.3** | Equipment setup | User nhập equipment như thế nào? (Checkbox: dumbbells, barbell, cables, resistance bands, bodyweight only?) | KHÁM PHÁ | ⬜ |
| **1.3B1.4** | Program generation | Sau onboarding, AI generate program ngay lập tức không? Mất bao lâu? Format là gì? (Weekly schedule, daily workouts?) | KHÁM PHÁ | ⬜ |
| **1.3B1.5** | Profile updates | User cập nhật body weight, strength PRs thường xuyên không? AI sử dụng data này thế nào? | KHÁM PHÁ | ⬜ |

#### **B2 – Workout Session Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B2.1** | Vòng đời workout | Một buổi workout: Open app → View today's plan → Start session → Log sets/reps/weight → AI feedback → Complete → Rest timer → Sync to Health app. Đúng không? | XÁC NHẬN | ⬜ |
| **1.3B2.2** | RPE logging | User log RPE (Rate of Perceived Exertion) sau mỗi set không? Hay chỉ weight + reps? | KHÁM PHÁ | ⬜ |
| **1.3B2.3** | Modify on-the-fly | User có thể swap exercise trong khi đang workout không? (VD: squat rack busy → swap to leg press?) | KHÁM PHÁ | ⬜ |
| **1.3B2.4** | Rest timer | Rest timer có smart không? (Tự adjust theo exercise intensity, RPE logged?) | KHÁM PHÁ | ⬜ |
| **1.3B2.5** | Form cues | Video + form cues được deliver như thế nào? (Before set, during, on-demand?) | KHÁM PHÁ | ⬜ |
| **1.3B2.6** | Missed workout | Nếu user miss workout, AI xử lý thế nào? (Skip, reschedule, adjust volume?) | KHÁM PHÁ | ⬜ |
| **1.3B2.7** | Deload weeks | Deload được schedule như thế nào? (Fixed every 4 weeks? AI-triggered by fatigue signals?) | KHÁM PHÁ | ⬜ |

#### **B3 – Nutrition Tracking Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B3.1** | Nutrition input | User log meals bằng cách nào? (Photo AI, text search, barcode scan, voice?) | KHÁM PHÁ | ⬜ |
| **1.3B3.2** | Macro targets | Macro targets (protein, carbs, fat) được tính từ đâu? (Training load + goal + body composition?) | KHÁM PHÁ | ⬜ |
| **1.3B3.3** | Training-nutrition link | Spec nói "nutrition AI adjusts macro targets based on training volume" — cụ thể algorithm này là gì? (VD: heavy leg day → +100g carbs) | KHÁM PHÁ | ⬜ |
| **1.3B3.4** | Meal timing | App có guide meal timing không? (Pre/post workout meals, carb cycling?) | KHÁM PHÁ | ⬜ |
| **1.3B3.5** | Food database | Food database từ đâu? (USDA, OpenFoodFacts, custom, Nutritionix API?) | KHÁM PHÁ | ⬜ |

#### **B4 – Recovery Tracking Lifecycle**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3B4.1** | Recovery inputs | App track recovery qua gì? (Sleep from Apple Health/Oura, HRV, subjective feel?) | KHÁM PHÁ | ⬜ |
| **1.3B4.2** | Recovery score | Có recovery score / readiness metric không? Tính thế nào? | KHÁM PHÁ | ⬜ |
| **1.3B4.3** | Training load adjust | Nếu recovery score thấp, AI có tự giảm training load hôm nay không? | KHÁM PHÁ | ⬜ |
| **1.3B4.4** | Sleep data | Sleep data import từ Apple Health, Oura Ring hay manual entry? | XÁC NHẬN | ⬜ |

---

### **Phần 1.3C: Chi tiết công việc từng Stakeholder**

#### **UC1 – Jordan (Beginner): First workout experience**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C1.1** | Day 1 experience | Jordan mở app lần đầu → flow như thế nào? Bao lâu đến lúc xem được workout plan? | KHÁM PHÁ | ⬜ |
| **1.3C1.2** | Form guidance | Video form cues: hosted on server hay embedded? Offline available không? | KHÁM PHÁ | ⬜ |
| **1.3C1.3** | Progression | AI tăng weight/reps cho beginner như thế nào? (Linear progression? % body weight?) | KHÁM PHÁ | ⬜ |
| **1.3C1.4** | Confusion handling | Nếu Jordan bị confused, có in-app chat/help không? | KHÁM PHÁ | ⬜ |
| **1.3C1.5** | 30-day result** | Spec nói "see results in 30 days" → App định nghĩa "results" là gì measurably? | KHÁM PHÁ | ⬜ |
| **1.3C1.6** | Template | Onboarding UI xin mẫu | XÁC NHẬN | ⬜ |

#### **UC2 – Alex (Plateau Fighter): Advanced program management**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C2.1** | Import history | Alex có thể import lifting history từ app cũ không? (Strong app export, Hevy CSV, manual entry?) | KHÁM PHÁ | ⬜ |
| **1.3C2.2** | Periodization | Periodization model nào dùng? (Linear, Block, Undulating, Conjugate?) AI chọn model tự động hay user chọn? | KHÁM PHÁ | ⬜ |
| **1.3C2.3** | RPE-based loading | RPE-based loading: App gợi ý weight dựa trên 1RM estimate + RPE target không? (VD: "Target 3 sets @ RPE 8") | XÁC NHẬN | ⬜ |
| **1.3C2.4** | AI explains why | "AI explains every program adjustment" — cụ thể AI sẽ nói gì? Xin ví dụ cụ thể format output | KHÁM PHÁ | ⬜ |
| **1.3C2.5** | Deload trigger | Deload được trigger bởi gì? (Fixed schedule? Fatigue score? User self-report?) | KHÁM PHÁ | ⬜ |
| **1.3C2.6** | Plateau detection | Plateau được define thế nào technically? (No 1RM progress in 3 weeks? HRV trend?) | KHÁM PHÁ | ⬜ |
| **1.3C2.7** | Program change | Khi AI thay đổi program, user có phải approve không hay auto-apply? | KHÁM PHÁ | ⬜ |

#### **UC3 – Sam (Lifestyle Optimizer): Multi-source data integration**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3C3.1** | Data sources | Sam sync data từ: Apple Watch, Oura Ring, Strava. App pull data gì từ mỗi source? | KHÁM PHÁ | ⬜ |
| **1.3C3.2** | Unified view | "Unified data picture" trông như thế nào? Dashboard show gì? Xin mẫu | KHÁM PHÁ | ⬜ |
| **1.3C3.3** | Cross-data AI | Cụ thể AI sử dụng sleep + nutrition + workout data combined như thế nào? Cho ví dụ 1 insight thực tế | KHÁM PHÁ | ⬜ |
| **1.3C3.4** | Cardio + strength | App hỗ trợ cả cardio planning không? (Running program, cycling?) AI balance strength + cardio thế nào? | KHÁM PHÁ | ⬜ |
| **1.3C3.5** | Privacy control | "Privacy-first, on-device where possible" — user có control được gì on/off không? (VD: opt out of cloud processing?) | KHÁM PHÁ | ⬜ |

---

### **Phần 1.3D: AI Coach — Core Logic Deep Dive**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3D.1** | AI architecture | AI Coach là: (A) LLM wrapper (GPT-4), (B) Fine-tuned model, hay (C) Rule-based engine + AI layer? | KHÁM PHÁ | ⬜ |
| **1.3D.2** | Explanation engine | "AI explains itself" — technically là prompt engineering hay structured output từ model? | KHÁM PHÁ | ⬜ |
| **1.3D.3** | Adaptive learning | AI có học từ từng user theo thời gian không? (Personalized model hay shared model?) | KHÁM PHÁ | ⬜ |
| **1.3D.4** | Feedback loop | User có thể feedback AI suggestions ("This was too hard/easy") để AI adjust không? | KHÁM PHÁ | ⬜ |
| **1.3D.5** | Science validation | Training science logic (periodization, RPE, volume landmarks) được validate bởi ai? (Sports science advisor, published research?) | KHÁM PHÁ | ⬜ |
| **1.3D.6** | Injury prevention | App có injury prevention logic không? (VD: detect overtraining, cảnh báo junk volume?) | KHÁM PHÁ | ⬜ |
| **1.3D.7** | Medical disclaimer | Có medical/injury disclaimer không? (App không thay thế physical therapist...) | KHÁM PHÁ | ⬜ |

---

### **Phần 1.3E: Edge Cases**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **1.3E.1** | No equipment | User chỉ có bodyweight (no gym access) — app vẫn hoạt động tốt không? | KHÁM PHÁ | ⬜ |
| **1.3E.2** | Travel mode | User đang travel, chỉ có hotel gym — app adapt không? | KHÁM PHÁ | ⬜ |
| **1.3E.3** | Injury/sick | User bị chấn thương nhẹ hoặc ốm — app xử lý thế nào? (Pause, modify, alternative program?) | KHÁM PHÁ | ⬜ |
| **1.3E.4** | Offline mode | Workout có thể thực hiện offline không? (Không có internet trong gym?) | KHÁM PHÁ | ⬜ |
| **1.3E.5** | Multiple goals | User có thể có nhiều goals đồng thời không? (VD: lose fat AND gain muscle — body recomp?) | KHÁM PHÁ | ⬜ |
| **1.3E.6** | Age range | App có phục vụ user trên 50 tuổi không? Logic training có khác không? | KHÁM PHÁ | ⬜ |

---

## PHẦN 1.4: PHÂN TÍCH TÁC ĐỘNG THAY ĐỔI

| Chiều tác động | Câu hỏi khơi gợi | Status |
| :--- | :--- | :--: |
| **Quy trình** | Nếu user đang dùng Gravl/Planfit → chuyển sang Apex Coach: workflow thay đổi gì? AI replace việc gì họ đang làm thủ công? | ⬜ |
| **Tích hợp** | Apple Health, Strava, Oura — integration có cần authentication flow riêng không? Data sync frequency? | ⬜ |
| **Dữ liệu** | User import lifting history từ Strong/Hevy: data format, field mapping, clean-up strategy? | ⬜ |
| **Con người** | Ai sẽ handle user support khi AI coach recommend sai? (Escalation path?) | ⬜ |
| **Pháp lý** | Health/biometric data (HRV, sleep, body composition) — GDPR/CCPA compliance? On-device processing scope? | ⬜ |

---

## PHẦN 1.5: THU THẬP ARTIFACTS ⭐

> **TRIGGER CHƯA ACTIVE:** Phần này sẽ được kích hoạt khi có kết quả elicitation thực tế từ stakeholder. Artifacts cần xin:
> - Mẫu AI program output (weekly schedule format)
> - Mẫu workout logging UI (set/rep/weight/RPE entry)
> - Mẫu AI explanation text ("Why this change")
> - Mẫu progress/analytics dashboard
> - API documentation từ Apple Health, Strava, Oura
> - Exercise video sample và format spec

---

## PHẦN 2: HIỆN TRẠNG BÊN NGOÀI — ĐỐI THỦ & THỊ TRƯỜNG

### **2.1 Xác nhận đối thủ (sau research)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **2.1.1** | Gravl / Planfit | Spec nói Apex vượt Gravl/Planfit ở "grows past beginner stage." Research thấy Planfit phục vụ tốt beginner nhưng dừng ở intermediate. Bạn đồng ý không? KH chọn họ vì gì? | XÁC NHẬN | ⬜ |
| **2.1.2** | Zing (Pricing issue) | Zing bị khiếu nại về surprise billing. Apex nhấn mạnh "transparent pricing" — bạn có plans cụ thể để show pricing clearly không? | KHÁM PHÁ | ⬜ |
| **2.1.3** | SHRED | SHRED có periodized programs nhưng bị review là có risk of injury. Apex muốn differentiate bằng injury prevention logic — cụ thể là gì? | KHÁM PHÁ | ⬜ |
| **2.1.4** | Impakt | Impakt (NFT/crypto angle) có friction trong signup. Apex có friction nào trong onboarding không? | KHÁM PHÁ | ⬜ |
| **2.1.5** | MacroFactor / Cronometer | MacroFactor nổi về adaptive macros. Apex có nutrition AI tương đương không? | KHÁM PHÁ | ⬜ |
| **2.1.6** | Whoop | Whoop strong về recovery analytics (HRV, strain). Apex có compete trực tiếp không hay complement? | KHÁM PHÁ | ⬜ |

---

### **2.2 Phân tích thị trường**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **2.2.1** | Market size | AI fitness app market size: bạn biết số liệu nào? Tự estimate TAM/SAM/SOM? | KHÁM PHÁ | ⬜ |
| **2.2.2** | Target geography | US, UK, Australia first — tại sao không SEA hay global? Cultural specifics? | KHÁM PHÁ | ⬜ |
| **2.2.3** | App Store dynamics | Organic app store growth có trong kế hoạch không? (Keywords, reviews, ASO strategy?) | KHÁM PHÁ | ⬜ |
| **2.2.4** | User acquisition | Kế hoạch get first 1,000 users: influencer, fitness communities, referral? | KHÁM PHÁ | ⬜ |

---

## PHẦN 3: NHU CẦU TƯƠNG LAI

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **3.1** | Phase 2 features | Tính năng nào không vào MVP nhưng plan cho Phase 2? (Social/community, coach marketplace, AR form check?) | KHÁM PHÁ | ⬜ |
| **3.2** | B2B / PT tier | Có plan cho "Coach tier" — PT dùng để manage clients không? Timeline? | KHÁM PHÁ | ⬜ |
| **3.3** | AI model upgrade | Plan upgrade AI model (VD: custom fine-tuned vs GPT) khi có more user data? | KHÁM PHÁ | ⬜ |
| **3.4** | Wearable expansion | Ngoài Apple Watch: Garmin, Fitbit, Whoop integration plan? | KHÁM PHÁ | ⬜ |
| **3.5** | Geographic expansion | Sau US/UK/AUS: SEA, Europe, LatAm? Localization needs? | KHÁM PHÁ | ⬜ |

---

## PHẦN 4: TÍNH NĂNG – TEMPLATE MODULES

### **Module 4.1 – AI PROGRAM GENERATION (Core)**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.1.1** | Program output | AI generate program dạng gì? (7-day weekly schedule? Block 4-week mesocycle? Daily template?) | KHÁM PHÁ | ⬜ |
| **4.1.2** | Exercise selection | AI chọn exercises dựa trên gì? (Equipment + goal + fitness level + injury history?) | KHÁM PHÁ | ⬜ |
| **4.1.3** | Volume & intensity | Volume (sets×reps) và intensity (% 1RM, RPE) được define thế nào per user? | KHÁM PHÁ | ⬜ |
| **4.1.4** | Progressive overload | Overload logic: tăng weight khi nào? (RIR ≤ 1 on last set? Consecutive sessions?) | KHÁM PHÁ | ⬜ |
| **4.1.5** | Deload auto | Deload trigger: sau X weeks? Sau Y signals (HRV drop, RPE creep, performance plateau)? | KHÁM PHÁ | ⬜ |
| **4.1.6** | Program regeneration | User có thể request program update không? (Bored with program, change goal?) | KHÁM PHÁ | ⬜ |
| **4.1.7** | Error handling | Nếu AI không đủ data để generate → fallback? | KHÁM PHÁ | ⬜ |

**User Story Harvest – AI Program Generation:**

| Aspect | Câu hỏi | Status |
|:--|:--|:--:|
| **Happy Path** | Onboarding complete → AI generates 4-week mesocycle → User starts Day 1 workout. Kết quả mong muốn? | ⬜ |
| **Error Handling** | Khi nào program generation bị fail? (Thiếu equipment data? Conflicting goals?) Báo lỗi gì? | ⬜ |
| **Validation** | Constraints: program không được có 2 consecutive heavy lower body days? Max volume/week by fitness level? | ⬜ |
| **Business Rule** | Tại sao feature này cần thiết theo cách này? (Alex's pain: existing apps don't explain why) | ⬜ |
| **UI/UX** | Program xem ở đâu? (Weekly calendar view? List? Can preview before commit?) | ⬜ |

---

### **Module 4.2 – WORKOUT LOGGING & SESSION TRACKING**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.2.1** | Set logging | Log mỗi set: weight + reps + RPE (optional?) hay bắt buộc RPE? | KHÁM PHÁ | ⬜ |
| **4.2.2** | Weight suggestions | App suggest weight cho set tiếp theo không? (Based on previous session + RPE target?) | KHÁM PHÁ | ⬜ |
| **4.2.3** | Rest timer | Rest timer: manual start hay auto-start sau khi log set? Smart duration? | KHÁM PHÁ | ⬜ |
| **4.2.4** | Video integration | Video form cues: play inline hay full screen? Offline cached? | KHÁM PHÁ | ⬜ |
| **4.2.5** | Exercise swap | Swap exercise: search from DB hay AI suggest alternatives? Filter by equipment? | KHÁM PHÁ | ⬜ |
| **4.2.6** | Session summary | End of session: summary hiển thị gì? (Total volume, PRs hit, AI feedback, recovery advice?) | KHÁM PHÁ | ⬜ |
| **4.2.7** | Apple Watch** | Apple Watch companion: log sets from wrist? Start/stop timer? | KHÁM PHÁ | ⬜ |

---

### **Module 4.3 – NUTRITION AI**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.3.1** | Nutrition scope | Nutrition trong MVP hay Phase 2? (Spec mentions it but unclear which phase) | KHÁM PHÁ | ⬜ |
| **4.3.2** | Macro calculation | Algorithm tính macro target: body weight + goal + training volume? Công thức cụ thể? | KHÁM PHÁ | ⬜ |
| **4.3.3** | Dynamic macros | "Macros adjust based on training volume" — adjust hàng ngày hay hàng tuần? | KHÁM PHÁ | ⬜ |
| **4.3.4** | Meal logging | Photo-based logging hay text search hay both? Integration với CaloAI/MyFitnessPal API? | KHÁM PHÁ | ⬜ |
| **4.3.5** | Nutrition education | App explain tại sao macro targets change không? ("Today is leg day — +100g carbs because...") | KHÁM PHÁ | ⬜ |

---

### **Module 4.4 – RECOVERY & ANALYTICS DASHBOARD**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.4.1** | Recovery score | Recovery score display ở đâu? (Dashboard top? Separate recovery tab?) | KHÁM PHÁ | ⬜ |
| **4.4.2** | Inputs | Recovery inputs: sleep duration, sleep quality, HRV, subjective soreness? | KHÁM PHÁ | ⬜ |
| **4.4.3** | Readiness recommendation | App recommend: "Train hard / Train light / Rest today" based on recovery? | KHÁM PHÁ | ⬜ |
| **4.4.4** | Long-term trends | Analytics: strength progression curves, volume load over time, body composition trend? | KHÁM PHÁ | ⬜ |
| **4.4.5** | Export | Analytics export: PDF, CSV, share to trainer? | KHÁM PHÁ | ⬜ |

---

### **Module 4.5 – GAMIFICATION & RETENTION**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **4.5.1** | Streak | Workout streak: count chỉ planned workouts hay cả bonus sessions? | KHÁM PHÁ | ⬜ |
| **4.5.2** | PR celebrations | Khi user hit PR (personal record), app celebrate như thế nào? | KHÁM PHÁ | ⬜ |
| **4.5.3** | Milestones | Milestone tracking: first workout, 10 workouts, 100 workouts, first deload, first plateau broken? | KHÁM PHÁ | ⬜ |
| **4.5.4** | Social | Có social features (share PRs, challenges) trong MVP không? | KHÁM PHÁ | ⬜ |
| **4.5.5** | Notifications | Reminder notifications: workout reminders, streak at risk, weekly summary? | KHÁM PHÁ | ⬜ |

---

## PHẦN 5: TÍCH HỢP VÀ ĐỒNG BỘ DỮ LIỆU

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **5.1** | Apple Health | Write: workout sessions, active calories, body weight. Read: steps, sleep, HRV? | KHÁM PHÁ | ⬜ |
| **5.2** | Apple Watch | Companion app: set logging, rest timer, heart rate during session? | KHÁM PHÁ | ⬜ |
| **5.3** | Strava | Import: cardio activities (runs, rides). Show in recovery dashboard? | KHÁM PHÁ | ⬜ |
| **5.4** | Oura Ring | Import: HRV, sleep score, readiness score. OAuth flow? | KHÁM PHÁ | ⬜ |
| **5.5** | Payment gateway | Subscription: Stripe, Apple IAP, Google Play Billing? | KHÁM PHÁ | ⬜ |
| **5.6** | AI model API | OpenAI, Anthropic, Google AI — hay custom hosted model? Cost per inference? | KHÁM PHÁ | ⬜ |
| **5.7** | Video CDN | Exercise video hosting: AWS S3 + CloudFront? Vimeo? YouTube? Offline download? | KHÁM PHÁ | ⬜ |
| **5.8** | Data import | Import từ Strong App (CSV), Hevy, Gravl — supported format? | KHÁM PHÁ | ⬜ |

---

## PHẦN 6: YÊU CẦU KỸ THUẬT

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **6.1** | Platform | iOS + Android từ đầu (React Native/Flutter) hay iOS-first? | KHÁM PHÁ | ⬜ |
| **6.2** | On-device AI | Spec nói "on-device where possible" — cụ thể tính năng nào on-device vs cloud? | KHÁM PHÁ | ⬜ |
| **6.3** | Data privacy | Biometric data (HRV, body metrics) — lưu server hay chỉ local? Encryption? | KHÁM PHÁ | ⬜ |
| **6.4** | Offline | Workout session có thể complete offline không? Sync khi có internet? | XÁC NHẬN | ⬜ |
| **6.5** | Performance | Load time cho AI program generation? (< 5 seconds? Real-time?) | KHÁM PHÁ | ⬜ |
| **6.6** | Security | Auth: Social login (Apple, Google)? 2FA? | KHÁM PHÁ | ⬜ |
| **6.7** | GDPR/CCPA | Data deletion on request? Data portability export? Right to be forgotten? | KHÁM PHÁ | ⬜ |

---

## PHẦN 7: BÁO CÁO & ANALYTICS

### **Report A: Daily Dashboard**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.1A.1** | Content | Dashboard show: Today's workout, macros remaining, recovery score, streak counter? Xin mẫu | XÁC NHẬN | ⬜ |
| **7.1A.2** | AI coaching feed | Có "AI tip of the day" hoặc coaching message trên dashboard không? | KHÁM PHÁ | ⬜ |

### **Report B: Progress Analytics**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.1B.1** | Strength progress | Chart: 1RM estimate trend per lift (squat, bench, deadlift, OHP) over time? | KHÁM PHÁ | ⬜ |
| **7.1B.2** | Volume load | Weekly volume load (sets × reps × weight) per muscle group? | KHÁM PHÁ | ⬜ |
| **7.1B.3** | Body composition | Body weight, body fat %, measurements — chart over time? | KHÁM PHÁ | ⬜ |
| **7.1B.4** | Nutrition compliance | Macro compliance % week over week? | KHÁM PHÁ | ⬜ |
| **7.1B.5** | Recovery trend | HRV trend, sleep quality over time? | KHÁM PHÁ | ⬜ |

### **Database Entities**

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **7.2.1** | Core entities | User, Program, Mesocycle, Workout, Exercise, Set, Nutrition Log, Recovery Log, Badge? Còn gì? | KHÁM PHÁ | ⬜ |
| **7.2.2** | Exercise DB | Exercise database: exercise_id, name, muscle_groups, equipment, difficulty, video_url, cues? Xin schema | KHÁM PHÁ | ⬜ |
| **7.2.3** | Program schema | Program: program_id, user_id, ai_generated, periodization_type, duration_weeks, created_at? | KHÁM PHÁ | ⬜ |
| **7.2.4** | Set logging | Set: set_id, workout_id, exercise_id, weight_kg, reps, rpe, completed_at, note? | KHÁM PHÁ | ⬜ |

---

## PHẦN 8: NGÂN SÁCH, TIMELINE & QUY TRÌNH

| ID | Mục | Câu hỏi | Loại | Status |
|:--|:--|:--|:--|:--:|
| **8.1** | Budget | Total budget cho MVP? Monthly burn rate estimate? | KHÁM PHÁ | ⬜ |
| **8.2** | Timeline | Target launch date? Public beta khi nào? | KHÁM PHÁ | ⬜ |
| **8.3** | Team | Team hiện tại: founder, dev, designer, fitness expert? Hire thêm gì? | KHÁM PHÁ | ⬜ |
| **8.4** | Dev process | Agile sprints? Sprint length? | KHÁM PHÁ | ⬜ |
| **8.5** | App Store | App store review time (Apple ≈ 1-2 days, Google < 1 day) có trong timeline không? | XÁC NHẬN | ⬜ |
| **8.6** | Launch strategy | Beta via TestFlight? Invite-only beta → public launch? | KHÁM PHÁ | ⬜ |
| **8.7** | Success metrics | MVP success = X downloads? Y paid conversions? Z retention? | KHÁM PHÁ | ⬜ |

---

## 📌 NEXT STEPS

1. ✅ **Q&A Gen hoàn thành** — 130+ câu hỏi cho Apex Coach elicitation
2. ⏳ **Domain Research** — Fitness tech, training science, AI model landscape
3. ⏳ **Market Research** — Competitor deep-dive, market size, user acquisition

---

**Status Legend:** ⬜ = Chưa hỏi | ⚙️ = Đang chờ trả lời | ✅ = Đã confirm | ❌ = Không áp dụng
