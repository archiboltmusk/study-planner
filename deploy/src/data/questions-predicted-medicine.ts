import type { Question } from "./questions";
export const PREDICTED_MEDICINE_QUESTIONS: Question[] = [
  // CARDIOLOGY (IDs 7201-7220)
  {
    id: 7201,
    subject: "Medicine",
    stem: "A 68-year-old woman presents with exertional dyspnoea and bilateral ankle oedema. Echocardiography shows left ventricular ejection fraction of 55% with evidence of diastolic dysfunction. Which of the following best defines her diagnosis?",
    options: [
      "Heart failure with reduced ejection fraction (HFrEF) — EF <40%",
      "Heart failure with mildly reduced ejection fraction (HFmrEF) — EF 41-49%",
      "Heart failure with preserved ejection fraction (HFpEF) — EF ≥50%",
      "Hypertrophic obstructive cardiomyopathy (HOCM)"
    ],
    answer: 2,
    explanation: "HFpEF is defined as symptomatic heart failure with left ventricular ejection fraction ≥50%. It accounts for approximately 50% of all heart failure cases and is characterised by diastolic dysfunction, impaired LV relaxation, and increased filling pressures. HFrEF is EF <40%, and HFmrEF is EF 41-49%."
  },
  {
    id: 7202,
    subject: "Medicine",
    stem: "A 72-year-old hypertensive obese man with HFpEF is seen in the cardiology clinic. His symptoms remain poorly controlled on loop diuretics alone. According to the latest evidence-based guidelines, which additional agent has demonstrated reduction in hospitalisation for heart failure and cardiovascular death in HFpEF?",
    options: [
      "Spironolactone",
      "Carvedilol",
      "Empagliflozin",
      "Digoxin"
    ],
    answer: 2,
    explanation: "SGLT-2 inhibitors, specifically empagliflozin (EMPEROR-Preserved trial) and dapagliflozin (DELIVER trial), have demonstrated statistically significant reductions in hospitalisation for heart failure and cardiovascular death in patients with HFpEF (EF ≥40-50%). They are now considered first-line evidence-based therapy in HFpEF alongside loop diuretics for symptomatic relief."
  },
  {
    id: 7203,
    subject: "Medicine",
    stem: "A 58-year-old man with HFrEF (EF 30%) is being optimised on medical therapy. Which combination represents the four evidence-based pillars of treatment for HFrEF that have been shown to reduce mortality?",
    options: [
      "ACEi/ARB/ARNi + Beta-blocker + MRA + SGLT-2 inhibitor",
      "ACEi + Beta-blocker + Digoxin + Loop diuretic",
      "ARB + Calcium channel blocker + Nitrate + Ivabradine",
      "Beta-blocker + MRA + Loop diuretic + Hydralazine"
    ],
    answer: 0,
    explanation: "The four pillars of evidence-based HFrEF treatment are: (1) ACEi/ARB or ARNi (sacubitril-valsartan), (2) Beta-blocker (bisoprolol, carvedilol, metoprolol succinate), (3) Mineralocorticoid receptor antagonist/MRA (spironolactone, eplerenone), and (4) SGLT-2 inhibitor (dapagliflozin - DAPA-HF; empagliflozin - EMPEROR-Reduced). All four reduce mortality and HHF. Loop diuretics treat symptoms but do not reduce mortality."
  },
  {
    id: 7204,
    subject: "Medicine",
    stem: "A patient with HFrEF (EF 28%) is already on enalapril, bisoprolol, and spironolactone. His NYHA class remains II-III with persistent symptoms. He has eGFR 45 mL/min and no significant hypotension. What is the most appropriate next step to further reduce mortality?",
    options: [
      "Switch enalapril to sacubitril-valsartan (ARNi)",
      "Add digoxin for rate control",
      "Add amlodipine for vasodilation",
      "Increase loop diuretic dose"
    ],
    answer: 0,
    explanation: "Sacubitril-valsartan (ARNi) should replace ACEi in symptomatic HFrEF patients already on optimal therapy. The PARADIGM-HF trial showed a 20% relative risk reduction in CV death and HHF compared with enalapril. Sacubitril inhibits neprilysin (increases natriuretic peptides) while valsartan blocks the RAAS. ACEi must be stopped 36 hours before starting ARNi to avoid angioedema risk."
  },
  {
    id: 7205,
    subject: "Medicine",
    stem: "In acute STEMI, which cardiac biomarker is most specific, first becomes detectable approximately 3-6 hours after onset, peaks at 12-24 hours, and remains elevated for 7-14 days?",
    options: [
      "CK-MB",
      "Myoglobin",
      "High-sensitivity Troponin I or T",
      "LDH"
    ],
    answer: 2,
    explanation: "High-sensitivity Troponin I and T are the most specific and sensitive biomarkers for myocardial necrosis. They become detectable 3-6 hours after onset, peak at 12-24 hours, and remain elevated for 7-14 days (troponin T slightly longer). Myoglobin rises earliest (1-3h) but is non-specific. CK-MB rises at 4-6h but normalises by 48-72h (useful for reinfarction detection). LDH rises later and remains elevated longest (7-14 days)."
  },
  {
    id: 7206,
    subject: "Medicine",
    stem: "A 65-year-old man is admitted with acute pulmonary oedema. His BNP is markedly elevated at 1200 pg/mL. Which of the following statements about BNP/NT-proBNP is CORRECT?",
    options: [
      "BNP is primarily secreted by atrial myocytes in response to atrial pressure",
      "BNP and NT-proBNP are secreted by ventricular myocytes in response to increased wall stress, and both diagnose and provide prognosis in heart failure",
      "BNP levels are falsely elevated in obesity",
      "NT-proBNP levels are lower in renal failure due to reduced production"
    ],
    answer: 1,
    explanation: "BNP (B-type natriuretic peptide) and its inactive fragment NT-proBNP are primarily secreted by ventricular myocytes (not atrial) in response to increased wall stress, volume overload, and pressure overload. Both serve diagnostic and prognostic roles in heart failure. BNP levels are paradoxically LOWER in obesity (obese paradox). Both BNP and NT-proBNP are HIGHER in renal failure (reduced clearance), requiring higher diagnostic cutoffs. NT-proBNP has a longer half-life and is preferred in renal impairment for trending."
  },
  {
    id: 7207,
    subject: "Medicine",
    stem: "A 52-year-old man with high cardiovascular risk (diabetes + hypertension + prior MI) has LDL-C of 2.8 mmol/L on maximum-dose statin. According to current ESC lipid guidelines for very high-risk patients, what is the LDL-C target and what should be added if not achieved on statin alone?",
    options: [
      "LDL <2.6 mmol/L; add fibrate",
      "LDL <1.8 mmol/L with ≥50% reduction; add niacin",
      "LDL <1.4 mmol/L with ≥50% reduction; add ezetimibe, then PCSK9 inhibitor if needed",
      "LDL <1.0 mmol/L; add omega-3 fatty acids"
    ],
    answer: 2,
    explanation: "ESC/EAS 2019 guidelines for very high-risk patients (established ASCVD, diabetes with target organ damage, severe CKD, FH with ASCVD, or 10-year risk ≥10%) set LDL-C target <1.4 mmol/L (<55 mg/dL) with ≥50% reduction from baseline. Step-up approach: maximise statin → add ezetimibe (inhibits intestinal cholesterol absorption at NPC1L1) → add PCSK9 inhibitor (evolocumab or alirocumab, monoclonal antibodies that prevent LDL receptor degradation, reducing LDL by 50-60%)."
  },
  {
    id: 7208,
    subject: "Medicine",
    stem: "A 78-year-old woman is brought to the emergency department with blood pressure 220/130 mmHg, severe headache, confusion, and papilloedema. Her creatinine is acutely elevated. This presentation is best classified as:",
    options: [
      "Hypertensive urgency — treat with oral antihypertensives and discharge",
      "Hypertensive emergency — requires immediate IV therapy targeting MAP reduction of 10-15% in the first hour",
      "Hypertensive emergency — blood pressure should be reduced to normal within 30 minutes",
      "Hypertensive urgency — admit and monitor, no immediate treatment needed"
    ],
    answer: 1,
    explanation: "Hypertensive emergency is defined as severely elevated BP (typically >180/120 mmHg) WITH evidence of acute target organ damage (TOD). TOD includes: hypertensive encephalopathy, acute stroke, acute MI, acute LV failure/pulmonary oedema, aortic dissection, eclampsia, acute renal failure, or retinal changes. This patient has encephalopathy and acute renal injury. IV agents (labetalol, sodium nitroprusside, nicardipine) are used; MAP should be reduced by 10-15% in the first hour — overly rapid reduction risks ischaemia due to reset autoregulation."
  },
  {
    id: 7209,
    subject: "Medicine",
    stem: "A 70-year-old woman with atrial fibrillation has the following profile: CHF (1), hypertension (1), age 70 (1), diabetes (1), and no prior stroke or vascular disease. Her CHA2DS2-VASc score is 4. What is the appropriate management?",
    options: [
      "No anticoagulation needed as score <5",
      "Antiplatelet therapy with aspirin only",
      "Anticoagulation with a NOAC (dabigatran, rivaroxaban, apixaban, or edoxaban) — preferred over warfarin",
      "Warfarin with target INR 2-3 — preferred over NOACs in elderly"
    ],
    answer: 2,
    explanation: "CHA2DS2-VASc scoring: CHF/HF=1, Hypertension=1, Age≥75=2, Diabetes=1, Stroke/TIA=2, Vascular disease=1, Age 65-74=1, Female sex=1. Anticoagulation is recommended for men with score ≥2 and women with score ≥3. This patient scores 4 (CHF+HTN+Age 65-74+DM). NOACs (dabigatran-direct thrombin inhibitor; rivaroxaban/apixaban/edoxaban-factor Xa inhibitors) are preferred over warfarin in non-valvular AF due to superior efficacy, safety profile, no INR monitoring, and fewer drug-food interactions."
  },
  {
    id: 7210,
    subject: "Medicine",
    stem: "A 25-year-old man presents with sharp pleuritic chest pain radiating to the left shoulder, relieved by leaning forward. ECG shows diffuse ST elevation in multiple leads with PR depression. There are no reciprocal changes. What is the most likely diagnosis and treatment?",
    options: [
      "STEMI — urgent primary PCI",
      "Pericarditis — NSAIDs plus colchicine for 3 months",
      "Aortic dissection — urgent CT aortography",
      "Pulmonary embolism — anticoagulation"
    ],
    answer: 1,
    explanation: "This is classic acute pericarditis: pleuritic chest pain relieved by leaning forward (pericardial friction rub), and ECG showing DIFFUSE ST elevation (not localised to a territory) with PR depression in multiple leads and NO reciprocal changes (differentiates from STEMI which has reciprocal changes). The most common cause is idiopathic/viral. Treatment is NSAIDs (aspirin or ibuprofen) plus colchicine for 3 months — colchicine reduces recurrence rate by 50% (COPE and ICAP trials). Activity restriction and treating underlying cause are also important."
  },
  {
    id: 7211,
    subject: "Medicine",
    stem: "A 45-year-old presents with pericarditis 4 weeks after an acute MI. He has fever, pleurisy, and pericardial rub. This is most consistent with:",
    options: [
      "Acute fibrinous pericarditis — occurs within 24-48h of STEMI",
      "Dressler syndrome — autoimmune pericarditis occurring weeks after MI",
      "Infective endocarditis",
      "Constrictive pericarditis"
    ],
    answer: 1,
    explanation: "Dressler syndrome (post-MI pericarditis) is an autoimmune phenomenon occurring typically 2-10 weeks after MI, characterised by fever, pleuritic chest pain, pericardial and pleural effusions, and elevated ESR/CRP. It is thought to be due to immune complex deposition triggered by cardiac antigens released during necrosis. Treatment is NSAIDs and colchicine. Acute fibrinous pericarditis (early post-MI pericarditis) occurs within 1-3 days of transmural MI due to direct pericardial inflammation."
  },
  {
    id: 7212,
    subject: "Medicine",
    stem: "The PARADIGM-HF trial established sacubitril-valsartan as superior to enalapril in HFrEF. What is the mechanism of action of sacubitril in this combination?",
    options: [
      "Inhibits angiotensin-converting enzyme, reducing angiotensin II formation",
      "Inhibits neprilysin, preventing breakdown of natriuretic peptides, bradykinin, and angiotensin II",
      "Blocks angiotensin II type 1 receptor directly",
      "Inhibits aldosterone synthesis"
    ],
    answer: 1,
    explanation: "Sacubitril is a prodrug converted to LBQ657, which inhibits neprilysin — an endopeptidase responsible for degrading natriuretic peptides (ANP, BNP), bradykinin, adrenomedullin, and angiotensin II. Neprilysin inhibition increases levels of these protective peptides promoting natriuresis, diuresis, and vasodilation. Sacubitril must be combined with an ARB (valsartan) because neprilysin inhibition alone increases angiotensin II. ACEi cannot be used with neprilysin inhibitor due to angioedema risk (both increase bradykinin)."
  },
  {
    id: 7213,
    subject: "Medicine",
    stem: "A 66-year-old man with known atrial fibrillation on warfarin (INR 2.5) presents with acute ischaemic stroke. Which of the following regarding NOAC vs warfarin in AF is MOST accurate?",
    options: [
      "Warfarin is preferred in patients with mechanical heart valves and non-valvular AF alike",
      "NOACs are preferred in non-valvular AF — they have superior or non-inferior stroke prevention with significantly less intracranial haemorrhage",
      "Dabigatran cannot be reversed if bleeding occurs",
      "NOACs require routine INR monitoring every 4 weeks"
    ],
    answer: 1,
    explanation: "In non-valvular AF, NOACs (dabigatran, rivaroxaban, apixaban, edoxaban) are preferred over warfarin due to: comparable or superior stroke/SE prevention, significantly reduced intracranial haemorrhage risk (~50% reduction), no routine INR monitoring required, fewer drug-food interactions, and predictable pharmacokinetics. However, warfarin remains the only evidence-based anticoagulant for AF with rheumatic mitral stenosis or mechanical heart valves. Dabigatran can be reversed with idarucizumab; factor Xa inhibitors reversed with andexanet alfa."
  },
  {
    id: 7214,
    subject: "Medicine",
    stem: "A patient with HFrEF and sinus rhythm at 78 bpm is already on maximum tolerated doses of bisoprolol, sacubitril-valsartan, spironolactone, and dapagliflozin. He remains symptomatic with LVEF 30%. What additional therapy may be considered?",
    options: [
      "Ivabradine — if heart rate remains ≥70 bpm despite maximum tolerated beta-blocker",
      "Digoxin as the next mortality-reducing agent",
      "Amiodarone for rhythm control",
      "Verapamil for additional rate reduction"
    ],
    answer: 0,
    explanation: "Ivabradine is a selective If (funny current) channel inhibitor in the sinoatrial node, reducing heart rate without affecting contractility. The SHIFT trial showed that ivabradine reduces CV death and HHF in HFrEF patients in sinus rhythm with HR ≥70 bpm despite maximum tolerated beta-blocker. It is an adjunct (not a replacement) to beta-blockers. Digoxin reduces HHF but not mortality. Verapamil is contraindicated in HFrEF due to negative inotropy."
  },
  {
    id: 7215,
    subject: "Medicine",
    stem: "A 55-year-old obese woman is found to have blood pressure 170/100 mmHg on three separate occasions. She has no diabetes or CKD. Which first-line antihypertensive combination is most appropriate for stage 2 hypertension according to current guidelines?",
    options: [
      "ACEi or ARB + calcium channel blocker (CCB) — preferred dual combination",
      "Beta-blocker + thiazide diuretic",
      "Alpha-blocker monotherapy",
      "Central sympatholytic (methyldopa) monotherapy"
    ],
    answer: 0,
    explanation: "Current hypertension guidelines (ESC 2018, JNC-8, ISH 2020) recommend starting dual combination therapy for stage 2 hypertension (BP ≥160/100). The preferred first-line combination is ACEi/ARB + CCB (amlodipine) due to complementary mechanisms, cardiovascular protection, and tolerability. Adding a thiazide diuretic (ACEi/ARB + CCB + thiazide) is the standard triple combination. Beta-blockers are not preferred as first-line unless there is a specific indication (HF, post-MI, angina, AF rate control)."
  },
  {
    id: 7216,
    subject: "Medicine",
    stem: "Which of the following is the MOST common identifiable cause of secondary hypertension in young adults?",
    options: [
      "Primary hyperaldosteronism (Conn syndrome)",
      "Renal artery stenosis (renovascular hypertension)",
      "Phaeochromocytoma",
      "Cushing syndrome"
    ],
    answer: 0,
    explanation: "Primary hyperaldosteronism (Conn syndrome) is the most common identifiable cause of secondary hypertension, accounting for 5-10% of all hypertensive patients and up to 20% of resistant hypertension. Characterised by hypertension, hypokalaemia (though 50% are normokalaemic), metabolic alkalosis, and suppressed renin with elevated aldosterone. Aldosterone-to-renin ratio (ARR) >30 is the screening test. Causes include bilateral adrenal hyperplasia (most common, treated medically with spironolactone) and aldosterone-producing adenoma (treated surgically)."
  },
  {
    id: 7217,
    subject: "Medicine",
    stem: "A 48-year-old with long-standing hypertension is found to have aldosterone-to-renin ratio of 45 (normal <30). CT adrenal shows a 1.8 cm right adrenal adenoma. Which definitive treatment is most appropriate?",
    options: [
      "Spironolactone lifelong — treats both adenoma and bilateral hyperplasia",
      "Adrenal venous sampling followed by laparoscopic adrenalectomy of the adenoma",
      "Surgical bilateral adrenalectomy",
      "Fludrocortisone suppression test and repeat imaging"
    ],
    answer: 1,
    explanation: "In primary hyperaldosteronism, adrenal venous sampling (AVS) is mandatory to confirm unilateral vs bilateral disease before surgery, as CT can miss small adenomas and bilateral disease. If AVS confirms unilateral hypersecretion (lateralisation ratio >4:1), laparoscopic adrenalectomy of the affected adrenal is curative in 30-60% of patients (BP normalises) and improves BP control in the rest. Spironolactone (MRA) is the preferred medical treatment for bilateral adrenal hyperplasia or for patients who cannot undergo surgery."
  },
  {
    id: 7218,
    subject: "Medicine",
    stem: "A 60-year-old man presents with sudden severe chest pain radiating to the back, described as 'tearing'. BP is 190/100 in right arm and 160/85 in left arm. CT shows intimal flap in the ascending aorta. Which of the following is CORRECT?",
    options: [
      "This is Stanford Type B dissection — managed medically with beta-blockers",
      "This is Stanford Type A dissection — requires emergency surgical intervention",
      "IV sodium nitroprusside alone is sufficient without surgery",
      "Thrombolysis should be given immediately"
    ],
    answer: 1,
    explanation: "Stanford classification: Type A involves the ascending aorta (regardless of origin) — emergency surgical repair is mandated as mortality increases by 1-2% per hour due to risk of aortic regurgitation, coronary ostia occlusion, cardiac tamponade, and stroke. Type B involves only the descending aorta — usually managed medically with IV beta-blockers (labetalol) targeting heart rate <60 and SBP 100-120 mmHg. The differential arm BP and tearing back pain are classic features. Thrombolysis is absolutely contraindicated in aortic dissection."
  },
  {
    id: 7219,
    subject: "Medicine",
    stem: "Regarding the DAPA-HF trial with dapagliflozin in HFrEF, which of the following statements is CORRECT?",
    options: [
      "Dapagliflozin benefit was restricted to patients with type 2 diabetes only",
      "Dapagliflozin reduced the composite of worsening heart failure and cardiovascular death in both diabetic and non-diabetic HFrEF patients",
      "Dapagliflozin primarily works via osmotic diuresis and glycosuria only",
      "DAPA-HF excluded patients with eGFR <45 mL/min"
    ],
    answer: 1,
    explanation: "The DAPA-HF trial (McMurray 2019, NEJM) demonstrated that dapagliflozin significantly reduced the composite of worsening heart failure events (HHF or urgent IV therapy) and CV death in HFrEF patients — crucially, this benefit was EQUAL in patients with and without type 2 diabetes (42% had diabetes, 58% did not). This established SGLT-2 inhibitors as a heart failure therapy independent of glucose lowering. The mechanisms in HF include: reduced preload/afterload, anti-inflammatory, anti-fibrotic, improved myocardial energetics, and possible direct cardiac effects."
  },
  {
    id: 7220,
    subject: "Medicine",
    stem: "Which of the following ECG findings most reliably differentiates acute pericarditis from ST-elevation myocardial infarction (STEMI)?",
    options: [
      "ST elevation in pericarditis is localised to a coronary territory with reciprocal depression",
      "PR depression with diffuse ST elevation in multiple leads and no reciprocal changes — characteristic of pericarditis",
      "ST elevation in pericarditis is only seen in V1-V4",
      "Q waves develop within 6 hours in pericarditis confirming infarction"
    ],
    answer: 1,
    explanation: "Key ECG differences: Pericarditis shows (1) DIFFUSE ST elevation in multiple leads (not limited to one coronary territory), (2) PR segment DEPRESSION (due to atrial epicarditis), (3) NO reciprocal ST depression (except in aVR and V1), (4) concave/saddle-shaped ST elevation, (5) no Q wave formation. STEMI shows (1) LOCALISED ST elevation in specific coronary territory, (2) RECIPROCAL ST depression in opposite leads, (3) Q wave formation, (4) convex/dome-shaped ST elevation. PR depression is the most specific ECG sign for pericarditis."
  },

  // RESPIRATORY (IDs 7221-7235)
  {
    id: 7221,
    subject: "Medicine",
    stem: "A 65-year-old ex-smoker with COPD has FEV1 58% predicted, CAT score 14, and had 2 exacerbations last year (1 hospitalisation). According to GOLD 2023 classification, what group is he in and what is the recommended initial pharmacotherapy?",
    options: [
      "GOLD Group A — LAMA monotherapy",
      "GOLD Group B — LAMA or LABA monotherapy; LAMA+LABA if high symptom burden",
      "GOLD Group E — LAMA+LABA; consider adding ICS if blood eosinophils ≥300/µL or frequent exacerbations",
      "GOLD Group C — ICS+LABA dual therapy"
    ],
    answer: 2,
    explanation: "GOLD 2023 updated the ABCDe assessment to ABCE (removing Group D, creating Group E for 'Exacerbator'). Group E = ≥2 exacerbations/year OR ≥1 hospitalisation. This patient has 2 exacerbations (1 hospitalisation) → Group E. Recommended initial therapy for Group E: LAMA+LABA dual bronchodilation. If blood eosinophils ≥300/µL or frequent exacerbations despite LAMA+LABA, add ICS (triple therapy: LAMA+LABA+ICS). Eosinophil count ≥100/µL suggests possible benefit from ICS (higher threshold = stronger response)."
  },
  {
    id: 7222,
    subject: "Medicine",
    stem: "GINA 2023 guidelines recommend a fundamental change to asthma reliever therapy. Which statement accurately reflects this update?",
    options: [
      "SABA (salbutamol) remains the preferred reliever at all steps of asthma management",
      "ICS-formoterol (low-dose) is the preferred reliever from Step 1, replacing SABA — used as anti-inflammatory reliever (AIR) therapy",
      "LABA monotherapy is recommended as reliever from Step 2",
      "Anticholinergics (ipratropium) are now first-line relievers in all asthma patients"
    ],
    answer: 1,
    explanation: "GINA 2023 made a paradigm shift: ICS-formoterol (budesonide-formoterol or beclomethasone-formoterol) is now the preferred reliever from Step 1 in track 1 (anti-inflammatory reliever/AIR strategy). Formoterol is a fast-onset long-acting beta-2 agonist that can be used as needed. Each reliever puff delivers ICS, addressing the underlying inflammation. SABA-only reliever is associated with increased severe asthma attacks and death. SABA remains an alternative but is no longer preferred. This change is based on the SYGMA, Novel START, and PRACTICAL trials."
  },
  {
    id: 7223,
    subject: "Medicine",
    stem: "A 45-year-old asthmatic woman with severe persistent asthma, total serum IgE of 650 IU/mL, and positive skin prick tests to house dust mite and cat hair fails maximum conventional therapy. Which biologic therapy is most appropriate?",
    options: [
      "Mepolizumab — anti-IL-5 for eosinophilic asthma",
      "Benralizumab — anti-IL-5 receptor alpha",
      "Omalizumab — anti-IgE monoclonal antibody for allergic/IgE-mediated severe asthma",
      "Dupilumab — anti-IL-4/IL-13 for type-2 inflammation"
    ],
    answer: 2,
    explanation: "Omalizumab (anti-IgE humanised monoclonal antibody) is indicated for severe allergic asthma with: confirmed IgE-mediated sensitisation (positive skin test/RAST), total serum IgE 30-1500 IU/mL, and age ≥6 years. It reduces IgE-FcεRI interaction, decreasing mast cell/basophil degranulation. Mepolizumab/benralizumab target IL-5 (eosinophilic asthma with blood eos ≥300). Dupilumab targets IL-4/IL-13 signalling (type-2 asthma, also approved for atopic dermatitis and CRS with nasal polyps). Biologic choice depends on phenotype."
  },
  {
    id: 7224,
    subject: "Medicine",
    stem: "A 55-year-old man presents with fever, productive cough, and consolidation on chest X-ray. CURB-65 score assessment reveals: confusion (1), urea 9 mmol/L (1), RR 32/min (1), BP 85/60 mmHg (1), age 55 (0). His score is 4. What does this indicate?",
    options: [
      "Score 4 — low risk, suitable for home treatment",
      "Score 4 — moderate risk, consider hospital admission and IV antibiotics",
      "Score 4 — high risk (≥3), requires consideration of ICU/HDU admission",
      "CURB-65 is not applicable for community-acquired pneumonia severity"
    ],
    answer: 2,
    explanation: "CURB-65 scoring for CAP severity: Confusion (acute, 1pt), Urea >7 mmol/L (1pt), Respiratory rate ≥30/min (1pt), Blood pressure <90 systolic or ≤60 diastolic (1pt), Age ≥65 years (1pt). Scoring: 0-1 = low risk (30-day mortality 1-3%), treat as outpatient; 2 = moderate risk, consider hospital admission; ≥3 = severe, requires hospitalisation with consideration of ICU/HDU (30-day mortality 22%). Score 4 indicates very high risk with haemodynamic compromise — ICU review is appropriate."
  },
  {
    id: 7225,
    subject: "Medicine",
    stem: "A 40-year-old hotel worker presents with severe pneumonia, hyponatraemia (Na 128 mEq/L), relative bradycardia (pulse 58/min despite high fever), diarrhoea, and confusion. The chest X-ray shows multilobar infiltrates. Which organism is most likely and what is the appropriate diagnostic test?",
    options: [
      "Mycoplasma pneumoniae — cold agglutinins and serology",
      "Legionella pneumophila — urinary antigen test",
      "Streptococcus pneumoniae — blood culture and urinary antigen",
      "Klebsiella pneumoniae — sputum culture (currant jelly sputum)"
    ],
    answer: 1,
    explanation: "This presentation is classic Legionnaires' disease (Legionella pneumophila): severe CAP + hyponatraemia (SIADH) + relative bradycardia (Faget's sign — pulse-temperature dissociation) + GI symptoms + neurological features + exposure to water-cooling towers/air conditioning/hotel/hospital water systems. The urinary Legionella antigen test detects serogroup 1 (responsible for 80% of Legionnaires' disease) with sensitivity 70-90% and near 100% specificity. Treatment: fluoroquinolones (levofloxacin) or azithromycin."
  },
  {
    id: 7226,
    subject: "Medicine",
    stem: "Regarding Mycoplasma pneumoniae pneumonia, which of the following is MOST characteristic?",
    options: [
      "Rapid lobar consolidation, high fever, pleuritic pain, and bacteraemia",
      "Insidious onset with dry cough, bullous myringitis, positive cold agglutinins (IgM), and extrapulmonary manifestations",
      "Rusty sputum, Gram-positive diplococci, and urinary antigen positivity",
      "Cavitating lesion with Gram-negative rods in an alcoholic patient"
    ],
    answer: 1,
    explanation: "Mycoplasma pneumoniae (walking pneumonia/atypical pneumonia): Insidious onset over 1-2 weeks, dry hacking cough, low-grade fever, bilateral patchy infiltrates on CXR (worse than clinical picture), bullous myringitis (10%), and positive cold agglutinins (IgM anti-I red cell antibodies, seen in ~50%). Extrapulmonary: haemolytic anaemia, erythema multiforme, Stevens-Johnson syndrome, meningitis, transverse myelitis. Diagnosis: Mycoplasma-specific IgM serology, PCR. Treatment: macrolides (azithromycin) or tetracyclines (doxycycline) — not beta-lactams (no cell wall)."
  },
  {
    id: 7227,
    subject: "Medicine",
    stem: "A 68-year-old woman presents with massive haemoptysis, progressive dyspnoea, and a history of 40 pack-years smoking. CTPA is performed urgently. Which CTPA finding is diagnostic of massive pulmonary embolism?",
    options: [
      "Bilateral ground-glass opacities",
      "Saddle embolus straddling the pulmonary artery bifurcation with right heart strain signs",
      "Honeycombing in bilateral lower lobes",
      "Mediastinal widening with left hilar mass"
    ],
    answer: 1,
    explanation: "CTPA is the gold-standard investigation for PE. Findings of massive PE include: saddle embolus at the pulmonary artery bifurcation, bilateral central filling defects, and signs of right heart strain (RV > LV diameter, D-sign/septal flattening, contrast reflux into IVC/hepatic veins, enlargement of main pulmonary artery). Massive PE is defined by haemodynamic instability (hypotension/cardiac arrest) and requires thrombolysis (alteplase 100mg over 2h) or surgical embolectomy/catheter-directed therapy. CTPA has 83% sensitivity and 96% specificity for PE."
  },
  {
    id: 7228,
    subject: "Medicine",
    stem: "A 55-year-old woman presents with progressive dyspnoea over 2 years. HRCT shows honeycombing with traction bronchiectasis in a bilateral basal and peripheral distribution. Lung biopsy demonstrates a UIP (usual interstitial pneumonia) pattern. What is the diagnosis and appropriate treatment?",
    options: [
      "Sarcoidosis — treat with steroids",
      "Idiopathic Pulmonary Fibrosis (IPF) — antifibrotic therapy with pirfenidone or nintedanib",
      "Hypersensitivity pneumonitis — identify and avoid antigen",
      "Non-specific interstitial pneumonia (NSIP) — treat with steroids and azathioprine"
    ],
    answer: 1,
    explanation: "IPF is diagnosed when UIP pattern on HRCT (honeycombing ± traction bronchiectasis, bilateral basal peripheral distribution) is found in the absence of other causes (CTD, drugs, HP). If HRCT pattern is 'typical UIP', surgical lung biopsy is not required. IPF has median survival 3-5 years. Antifibrotic therapy: pirfenidone (TGF-β pathway inhibitor, antioxidant, anti-inflammatory — ASCEND/CAPACITY trials) or nintedanib (tyrosine kinase inhibitor blocking VEGFR, FGFR, PDGFRα/β — INPULSIS trials) both slow decline in FVC. Neither reverses fibrosis. Lung transplantation is definitive."
  },
  {
    id: 7229,
    subject: "Medicine",
    stem: "A patient with a Wells score of 6 points (high probability of PE) has a D-dimer of 3200 ng/mL. What is the most appropriate immediate investigation?",
    options: [
      "D-dimer alone is sufficient to diagnose PE — start anticoagulation immediately",
      "Ventilation-perfusion (V/Q) scan only if CTPA is unavailable",
      "CTPA — investigation of choice to confirm PE in high-probability patients",
      "Lower limb Doppler ultrasound as the first investigation"
    ],
    answer: 2,
    explanation: "D-dimer has HIGH sensitivity but LOW specificity — useful to EXCLUDE PE in low/intermediate probability patients (if negative, PE ruled out with >95% NPV), but not to diagnose it. In high-probability patients (Wells ≥5 or ≥7 in simplified score), CTPA is performed regardless of D-dimer result. CTPA provides direct visualisation of clot, assessment of right heart strain, and alternative diagnoses. D-dimer is elevated in many conditions (surgery, infection, cancer, pregnancy, age). Age-adjusted D-dimer cutoff = age × 10 ng/mL (for patients >50 years) increases specificity."
  },
  {
    id: 7230,
    subject: "Medicine",
    stem: "A 30-year-old non-smoker with newly diagnosed asthma is started on GINA Step 2 therapy. According to GINA 2023, what is the preferred Step 2 controller therapy?",
    options: [
      "LABA monotherapy (salmeterol) — long-acting bronchodilator",
      "Low-dose ICS daily controller + low-dose ICS-formoterol as reliever",
      "LTRA (montelukast) monotherapy as controller",
      "SABA as needed only — no controller required at Step 2"
    ],
    answer: 1,
    explanation: "GINA 2023 Step 2 (Track 1, preferred): Daily low-dose ICS (e.g., budesonide 200 mcg/day) as controller AND as-needed low-dose ICS-formoterol as reliever (anti-inflammatory reliever/AIR). This ensures that every time the patient uses a reliever, they also receive an anti-inflammatory dose. Alternative Step 2 options include LTRA alone (less effective) or SABA with low-dose ICS taken together as needed (not preferred). LABA must NEVER be used as monotherapy in asthma — only combined with ICS."
  },
  {
    id: 7231,
    subject: "Medicine",
    stem: "A 72-year-old man presents with gradual onset progressive dyspnoea, finger clubbing, and bilateral fine inspiratory ('Velcro') crackles at lung bases. PFTs show a restrictive pattern (FVC 58%, FEV1/FVC 0.92). What is the most likely diagnosis?",
    options: [
      "COPD — obstructive pattern with low FEV1/FVC",
      "Idiopathic pulmonary fibrosis — restrictive pattern with clubbing and basal crackles",
      "Bronchiectasis — productive cough and recurrent infections",
      "Sarcoidosis — bilateral hilar lymphadenopathy and granulomas"
    ],
    answer: 1,
    explanation: "IPF presents with: progressive exertional dyspnoea, dry cough, bilateral basal fine inspiratory crackles ('Velcro' or 'Scotch tape' crackles), finger clubbing (25-50%), and restrictive PFTs (reduced FVC, TLC, DLCO; normal or elevated FEV1/FVC ratio). Average age at diagnosis 60-70 years, predominantly male, smoking history common. HRCT showing UIP pattern is diagnostic without biopsy. Clubbing occurs in IPF, NSIP less common, sarcoidosis rarely. Prognosis is poor without treatment — accelerated decline episodes occur."
  },
  {
    id: 7232,
    subject: "Medicine",
    stem: "A 28-year-old asthmatic man is brought to A&E with severe wheeze, unable to speak in full sentences, SpO2 88% on air, PEFR 35% predicted, and heart rate 120/min. Which of the following is the MOST appropriate immediate management?",
    options: [
      "Oral prednisolone and nebulised SABA — send home with asthma plan",
      "IV aminophylline as first-line bronchodilator",
      "High-flow oxygen, nebulised SABA (salbutamol) + ipratropium, IV hydrocortisone, consider IV magnesium sulphate",
      "Nebulised ICS (budesonide) and SABA — no systemic steroids needed"
    ],
    answer: 2,
    explanation: "Acute severe asthma criteria (any one): PEFR 33-50% predicted, RR ≥25, HR ≥110, inability to complete sentences. Life-threatening: PEFR <33%, SpO2 <92%, silent chest, bradycardia, confusion, PaCO2 normal/raised. Management: (1) High-flow O2 target SpO2 94-98%, (2) Nebulised salbutamol 5mg + ipratropium 500mcg every 20 min, (3) IV/oral corticosteroids (hydrocortisone 200mg IV or prednisolone 40-50mg oral), (4) IV magnesium sulphate 1.2-2g over 20 min for severe/life-threatening cases (bronchodilation via calcium channel blockade). Aminophylline has poor benefit-to-risk ratio; no longer routinely recommended."
  },
  {
    id: 7233,
    subject: "Medicine",
    stem: "Which of the following is the MOST common cause of community-acquired pneumonia requiring hospitalisation in adults?",
    options: [
      "Haemophilus influenzae",
      "Streptococcus pneumoniae",
      "Legionella pneumophila",
      "Staphylococcus aureus"
    ],
    answer: 1,
    explanation: "Streptococcus pneumoniae (pneumococcus) is the most common cause of community-acquired pneumonia (CAP) in all age groups requiring hospitalisation, accounting for 30-35% of hospitalised CAP. Classical features: abrupt onset, fever, pleuritic chest pain, rusty sputum, lobar consolidation, Gram-positive diplococci on sputum Gram stain. Urinary pneumococcal antigen test (UAT) is rapid and specific. Penicillin remains first-line in non-resistant strains. Other causes: H. influenzae (COPD patients), atypicals (Mycoplasma, Legionella, Chlamydophila), viruses (influenza, COVID-19)."
  },
  {
    id: 7234,
    subject: "Medicine",
    stem: "A 55-year-old woman with GOLD Grade 2 COPD (FEV1 52%) is experiencing frequent exacerbations despite dual bronchodilator therapy (LAMA+LABA). Her blood eosinophil count is 350 cells/µL. What is the most appropriate step-up therapy?",
    options: [
      "Add roflumilast (PDE-4 inhibitor) — effective regardless of eosinophil count",
      "Add inhaled corticosteroid (ICS) to create triple therapy (LAMA+LABA+ICS) — high eosinophil count predicts ICS response",
      "Switch LAMA to SABA for better symptom relief",
      "Add oral prednisolone long-term"
    ],
    answer: 1,
    explanation: "In COPD with frequent exacerbations despite LAMA+LABA, escalation to triple therapy (LAMA+LABA+ICS) is recommended. Blood eosinophil count is a BIOMARKER for ICS response: >300/µL = strong benefit from ICS (high exacerbation reduction); 100-300/µL = some benefit; <100/µL = minimal benefit, ICS NOT recommended (increased pneumonia risk). The ETHOS and IMPACT trials demonstrated that triple therapy significantly reduces exacerbation rates compared to dual therapy in patients with elevated eosinophils. Roflumilast (PDE-4 inhibitor) is an add-on for chronic bronchitis phenotype with FEV1 <50%."
  },
  {
    id: 7235,
    subject: "Medicine",
    stem: "A 45-year-old woman presents with gradually worsening exertional dyspnoea over 3 years, no smoking history. Echocardiography reveals a mean pulmonary artery pressure of 38 mmHg at rest. Right heart catheterisation confirms mPAP 40 mmHg with normal pulmonary artery wedge pressure. Which diagnosis best fits?",
    options: [
      "Group 2 pulmonary hypertension — due to left heart disease",
      "Group 1 pulmonary arterial hypertension (PAH) — pre-capillary, requires vasoreactivity testing and targeted therapy",
      "Group 3 PH — due to lung disease and/or hypoxaemia",
      "Pulmonary embolism — anticoagulate with DOAC"
    ],
    answer: 1,
    explanation: "Pulmonary arterial hypertension (PAH, Group 1) is defined by: mPAP >20 mmHg at rest + pulmonary artery wedge pressure (PAWP) ≤15 mmHg (pre-capillary, rules out left heart disease) + pulmonary vascular resistance >2 Wood units. Updated WHO/ESC 2022 definition lowered threshold from 25 to 20 mmHg. Management: vasoreactivity testing (acute vasodilator test with iNO/adenosine) — if positive (10% of idiopathic PAH), calcium channel blockers may be curative. Non-responders: endothelin receptor antagonists (bosentan, macitentan), PDE-5 inhibitors (sildenafil), prostacyclins (epoprostenol, iloprost)."
  },

  // NEUROLOGY (IDs 7236-7250)
  {
    id: 7236,
    subject: "Medicine",
    stem: "A 68-year-old man presents 2.5 hours after sudden onset of left hemiparesis and dysphasia. NIHSS score is 14. Non-contrast CT brain is negative for haemorrhage. What is the most appropriate treatment?",
    options: [
      "IV alteplase (0.9 mg/kg, max 90mg) — thrombolysis within 4.5h of onset",
      "Aspirin 300mg stat only — no thrombolysis indicated",
      "IV heparin infusion — to prevent propagation of thrombus",
      "Observe for 24 hours and reassess before any treatment"
    ],
    answer: 0,
    explanation: "IV alteplase (tPA) is indicated for acute ischaemic stroke within 4.5 hours of symptom onset (or last-known-well), if CT excludes haemorrhage and no contraindications exist. Dose: 0.9 mg/kg (max 90mg), 10% as IV bolus, remainder over 60 min. Door-to-needle target <60 min. Contraindications include: haemorrhage on CT, BP >185/110 (treat first), INR >1.7, recent major surgery, platelet <100,000, glucose <2.7 or >22.2 mmol/L, large established infarct. Mechanical thrombectomy (MT) is added if large vessel occlusion (LVO) is present — MT now extends to 24h with perfusion mismatch imaging."
  },
  {
    id: 7237,
    subject: "Medicine",
    stem: "A 72-year-old man is brought to hospital 6 hours after onset of acute left middle cerebral artery territory stroke. CT perfusion imaging shows a 20 mL core infarct and 120 mL penumbra. What is the most appropriate intervention?",
    options: [
      "IV alteplase only — thrombectomy window has passed",
      "Mechanical thrombectomy — can be performed up to 24 hours in selected patients with significant penumbra (target mismatch)",
      "Aspirin alone and supportive care",
      "Decompressive craniectomy immediately"
    ],
    answer: 1,
    explanation: "Mechanical thrombectomy (MT) can be performed up to 24 hours from symptom onset in selected patients with LVO and target mismatch on CT/MR perfusion: core <70 mL, penumbra-to-core ratio >1.8, absolute penumbra >15 mL (DAWN and DEFUSE-3 trials, extended to 24h). The penumbra (ischaemic but salvageable tissue) to core (irreversibly infarcted) mismatch identifies patients likely to benefit. MT achieves recanalisation in 80-90% with stent retrievers/aspiration. IV alteplase is still given if within 4.5h, followed by MT (bridging thrombolysis)."
  },
  {
    id: 7238,
    subject: "Medicine",
    stem: "A 65-year-old man presents with resting pill-rolling tremor (4 Hz), cogwheel rigidity, shuffling gait with festination, and reduced arm swing. He has hypomimia and micrographia. His symptoms improve significantly with levodopa. The most likely diagnosis is:",
    options: [
      "Essential tremor — postural/action tremor, no rigidity, family history",
      "Parkinson's disease — dopaminergic degeneration of substantia nigra pars compacta",
      "Drug-induced parkinsonism — due to antipsychotic or metoclopramide use",
      "Progressive supranuclear palsy (PSP) — early falls and vertical gaze palsy"
    ],
    answer: 1,
    explanation: "Parkinson's disease (PD) has cardinal features: TRAP — Tremor (resting, pill-rolling, 4-6 Hz, asymmetric, suppressed by movement), Rigidity (cogwheel = rigidity + tremor; leadpipe = rigidity alone), Akinesia/bradykinesia (slow initiation and execution of movement), Postural instability (late feature). Plus: hypomimia (masked face), micrographia, festinating gait, hypophonia, constipation, REM sleep behaviour disorder, anosmia, depression. Levodopa responsiveness strongly supports PD over atypical parkinsonism. Pathology: Lewy bodies (aggregated alpha-synuclein) in SNc dopaminergic neurons."
  },
  {
    id: 7239,
    subject: "Medicine",
    stem: "A 58-year-old woman with Parkinson's disease has been on levodopa for 8 years. She now develops unpredictable motor fluctuations ('wearing-off' phenomenon) and dyskinesias. Which of the following strategies is most appropriate to manage wearing-off?",
    options: [
      "Add anticholinergic (trihexyphenidyl) — treats all motor complications equally",
      "Add COMT inhibitor (entacapone) or MAO-B inhibitor (rasagiline) to prolong levodopa effect; consider dopamine agonist or controlled-release formulations",
      "Reduce levodopa dose to minimise dyskinesias",
      "Stop levodopa and switch to dopamine agonist monotherapy"
    ],
    answer: 1,
    explanation: "Wearing-off (end-of-dose deterioration) occurs as levodopa half-life shortens with disease progression. Management: (1) COMT inhibitors (entacapone, opicapone) — block peripheral levodopa metabolism, prolonging effect; (2) MAO-B inhibitors (selegiline, rasagiline, safinamide) — prevent central dopamine breakdown; (3) More frequent levodopa dosing; (4) Dopamine agonists (pramipexole, ropinirole, rotigotine patch) as adjunct; (5) Controlled-release levodopa; (6) Apomorphine SC pump or duodenal levodopa gel (Duodopa) for advanced refractory cases. Dyskinesias are treated by reducing total levodopa dose."
  },
  {
    id: 7240,
    subject: "Medicine",
    stem: "Which of the following drugs is most likely to cause drug-induced parkinsonism, and by what mechanism?",
    options: [
      "Levodopa — depletes dopamine stores",
      "Metoclopramide — blocks dopamine D2 receptors in the striatum",
      "Amantadine — blocks NMDA glutamate receptors",
      "Bromocriptine — activates D2 receptors, causing rebound parkinsonism"
    ],
    answer: 1,
    explanation: "Drug-induced parkinsonism (DIP) is caused by dopamine receptor-blocking or dopamine-depleting drugs. Common culprits: (1) Dopamine antagonists — metoclopramide, domperidone (antiemetics), haloperidol, chlorpromazine (typical antipsychotics), risperidone, olanzapine (atypical antipsychotics), prochlorperazine; (2) Dopamine-depleting agents — tetrabenazine, reserpine; (3) Calcium channel blockers — flunarizine, cinnarizine. DIP is usually bilateral and symmetric (unlike PD which is asymmetric), reversible on drug withdrawal (weeks-months). Amantadine is actually USED to treat drug-induced dyskinesias in PD."
  },
  {
    id: 7241,
    subject: "Medicine",
    stem: "A 22-year-old woman presents to A&E in status epilepticus. She has been convulsing for 20 minutes. IV access is established. What is the correct sequence of drug treatment?",
    options: [
      "Phenytoin first → lorazepam second → general anaesthesia",
      "IV lorazepam → IV fosphenytoin or valproate (if lorazepam fails) → IV propofol or thiopentone (if second-line fails)",
      "Oral diazepam → IV phenobarbitone → neurosurgical evaluation",
      "IV magnesium sulphate → IV levetiracetam → oral carbamazepine"
    ],
    answer: 1,
    explanation: "Status epilepticus management (NICE/AES guidelines): First-line (0-10 min): IV lorazepam 0.1 mg/kg (max 4mg) — if no IV access: buccal midazolam, rectal diazepam, or intranasal midazolam. Repeat lorazepam once at 5-10 min if seizing continues. Second-line (if seizures persist at 10-30 min): IV levetiracetam 60 mg/kg (max 4.5g) OR IV valproate 40 mg/kg (max 3g) OR IV fosphenytoin 20 mg PE/kg. Third-line/refractory SE (>30-60 min): IV general anaesthetic — propofol, thiopentone, or midazolam infusion with continuous EEG monitoring in ICU."
  },
  {
    id: 7242,
    subject: "Medicine",
    stem: "According to the 2017 ILAE seizure classification, which of the following correctly classifies a seizure that begins in one hemisphere with preserved awareness, then spreads to cause bilateral convulsions?",
    options: [
      "Generalised tonic-clonic seizure (primary generalised)",
      "Focal onset aware → focal to bilateral tonic-clonic seizure",
      "Focal onset impaired awareness seizure only",
      "Unknown onset tonic-clonic seizure"
    ],
    answer: 1,
    explanation: "2017 ILAE classification replaced 'partial seizures' with 'focal onset seizures': (1) Focal aware (previously simple partial) — no loss of awareness; (2) Focal impaired awareness (previously complex partial) — impaired consciousness; (3) Focal to bilateral tonic-clonic (previously secondarily generalised) — starts focal, spreads bilaterally. Generalised onset seizures start diffusely: tonic-clonic, absence, myoclonic, atonic, clonic, tonic. Unknown onset when onset not determined. 'Secondarily generalised' is now replaced by 'focal to bilateral tonic-clonic'."
  },
  {
    id: 7243,
    subject: "Medicine",
    stem: "A 35-year-old woman presents with bilateral ptosis, diplopia worse in the evening, and proximal muscle weakness that improves after rest. Anti-acetylcholine receptor antibodies are positive. What is the most specific confirmatory test and what does it demonstrate?",
    options: [
      "Electromyography (EMG) — shows spontaneous fibrillation potentials at rest",
      "Repetitive nerve stimulation (RNS) — shows decremental response (>10% decline in CMAP amplitude at 3 Hz stimulation) in myasthenia gravis",
      "MRI brain — shows demyelinating plaques in white matter",
      "Nerve conduction studies — shows reduced conduction velocity in peripheral nerves"
    ],
    answer: 1,
    explanation: "Myasthenia gravis (MG) involves autoantibodies (anti-AChR in 85%, anti-MuSK in 10%) blocking the neuromuscular junction. Hallmarks: fatigable weakness worse with activity/evening, ocular muscles most commonly affected (ptosis, diplopia), descending weakness. Tests: (1) Anti-AChR antibodies — most specific; (2) Repetitive nerve stimulation (3 Hz) — decremental CMAP response >10% is characteristic; (3) Single-fibre EMG — most sensitive (jitter increased); (4) Edrophonium (Tensilon) test — transient improvement with short-acting AChE inhibitor; (5) Ice pack test — cooling improves AChR function transiently. CT chest to exclude thymoma."
  },
  {
    id: 7244,
    subject: "Medicine",
    stem: "A patient with known myasthenia gravis on pyridostigmine develops acute respiratory distress, increased secretions, small pupils, bradycardia, and muscle fasciculations. What is the most likely diagnosis and treatment?",
    options: [
      "Myasthenic crisis — increase pyridostigmine dose, start IVIG or plasmapheresis",
      "Cholinergic crisis — excess acetylcholinesterase inhibitor, causing SLUDGE effects; stop pyridostigmine, give atropine, ventilatory support",
      "Sepsis-induced neuromuscular weakness — broad-spectrum antibiotics",
      "Guillain-Barré syndrome — IV immunoglobulin"
    ],
    answer: 1,
    explanation: "Cholinergic crisis results from excessive pyridostigmine (AChE inhibitor): too much ACh at NMJ (depolarising block) and muscarinic receptors. Features: SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis) + DUMBELS + bradycardia, miosis, muscle weakness, fasciculations — paradoxically worsening weakness despite high AChE inhibitor levels. Management: STOP pyridostigmine, IV atropine (blocks muscarinic effects), pralidoxime (if organophosphate), mechanical ventilation. Myasthenic crisis shows worsening weakness WITHOUT cholinergic features — treatment is IVIG or plasma exchange."
  },
  {
    id: 7245,
    subject: "Medicine",
    stem: "A 25-year-old man presents with progressive ascending weakness over 3 days, starting in both feet. He had gastroenteritis 2 weeks ago. Examination shows areflexia in all four limbs. CSF shows protein 1.8 g/L with 2 cells/mm³. Nerve conduction studies show prolonged distal latencies and reduced conduction velocities. What is the most likely diagnosis and treatment?",
    options: [
      "Botulism — descending paralysis, anti-toxin treatment",
      "Acute inflammatory demyelinating polyneuropathy (GBS/AIDP) — IVIG or plasma exchange",
      "Myasthenia gravis — pyridostigmine and thymectomy",
      "Transverse myelitis — high-dose IV methylprednisolone"
    ],
    answer: 1,
    explanation: "Guillain-Barré Syndrome (GBS/AIDP): Post-infectious ascending flaccid paralysis (Campylobacter jejuni most common trigger — also CMV, EBV, influenza, COVID-19, rarely influenza vaccine). Hallmarks: (1) ascending weakness starting distally, (2) AREFLEXIA, (3) albuminocytological dissociation in CSF (high protein 1-10 g/L with <10 white cells — cytoalbuminous dissociation), (4) NCS showing demyelinating pattern (slowed conduction velocity, prolonged latencies, conduction block). Treatment: IVIG (0.4 g/kg/day × 5 days) OR plasma exchange (5-7 sessions) — equally effective. Steroids are NOT beneficial and may worsen outcome. 85% recover with slow improvement over months."
  },
  {
    id: 7246,
    subject: "Medicine",
    stem: "Which of the following investigations provides the MOST useful information in distinguishing Parkinson's disease from atypical parkinsonian syndromes (Multiple System Atrophy, Progressive Supranuclear Palsy)?",
    options: [
      "CT brain — detects midbrain atrophy in all parkinsonism types",
      "DaTscan (SPECT with FP-CIT) — confirms presynaptic dopaminergic deficit in PD; MRI brain with specific patterns for MSA/PSP",
      "PET-FDG scan — definitively diagnoses PD",
      "EEG — differentiates PD from atypical syndromes"
    ],
    answer: 1,
    explanation: "DaTscan (dopamine transporter SPECT) shows reduced FP-CIT uptake in the striatum in PD and all other syndromes with presynaptic dopaminergic neurodegeneration (PD, MSA, PSP, DLB). It CANNOT distinguish between these, but distinguishes them from essential tremor and drug-induced parkinsonism (normal DaTscan). MRI brain features: MSA-P — putaminal 'hot cross bun' sign in pons, MSA-C — cerebellar atrophy; PSP — midbrain atrophy ('hummingbird' or 'penguin silhouette' sign on sagittal MRI, superior cerebellar peduncle atrophy); DLB — minimal atrophy, positive DaTscan."
  },
  {
    id: 7247,
    subject: "Medicine",
    stem: "A 55-year-old man presents with sudden severe headache ('thunderclap headache'), described as 'worst headache of my life'. CT brain is normal. What is the next most critical investigation?",
    options: [
      "MRI brain — superior to CT for detecting subarachnoid haemorrhage (SAH)",
      "Lumbar puncture — looking for xanthochromia (spectrophotometry) if CT is negative ≥12h after headache onset",
      "EEG — to rule out seizure activity causing headache",
      "Carotid Doppler — to exclude carotid artery dissection"
    ],
    answer: 1,
    explanation: "Thunderclap headache requires exclusion of subarachnoid haemorrhage (SAH) — a neurological emergency. Non-contrast CT detects SAH in 98% within 6h but sensitivity falls to 85-90% at 24h and lower beyond that. If CT is negative, LUMBAR PUNCTURE is mandatory ≥12 hours after headache onset (time needed for haemoglobin to breakdown to xanthochromia/oxyhaemoglobin/bilirubin). Xanthochromia detected by spectrophotometry (not visual inspection alone) confirms SAH with >95% sensitivity at 12h. Cause: ruptured berry aneurysm (80%), AVM. Management: immediate neurosurgical referral, nimodipine (prevents vasospasm)."
  },
  {
    id: 7248,
    subject: "Medicine",
    stem: "A 40-year-old woman with type 1 diabetes presents with ascending weakness. CSF shows protein 1.5 g/L with normal cell count. NCS shows evidence of demyelination. Her blood glucose is well-controlled. The most important treatment for GBS is:",
    options: [
      "Corticosteroids — high-dose IV methylprednisolone",
      "IV immunoglobulin (IVIG) or plasma exchange — equally effective, NOT steroids",
      "Pyridostigmine — to improve neuromuscular transmission",
      "Interferon-beta — to reduce demyelination"
    ],
    answer: 1,
    explanation: "GBS treatment: IVIG (0.4 g/kg/day × 5 days) and plasma exchange (plasmapheresis, 5 exchanges over 2 weeks) are equally effective in severe GBS and are the treatments of choice. Key point: STEROIDS (corticosteroids) are NOT beneficial in GBS and may prolong recovery — this is a frequently tested distinction. IVIG is preferred over PE due to ease of administration and safety profile. Supportive care includes: respiratory monitoring (serial FVC — intubate if FVC <15-20 mL/kg, declining, or <1L), DVT prophylaxis, pain management (pregabalin), autonomic monitoring. 85% make good recovery; 3-5% die from complications."
  },
  {
    id: 7249,
    subject: "Medicine",
    stem: "Which of the following is the MOST common preceding infection in Guillain-Barré syndrome, and what specific antibody is associated with the axonal variant (AMAN)?",
    options: [
      "Influenza virus — associated with anti-GQ1b antibodies (Miller Fisher variant)",
      "Campylobacter jejuni — associated with anti-GM1 antibodies (AMAN — acute motor axonal neuropathy)",
      "EBV — associated with anti-GD1b antibodies",
      "CMV — associated with anti-MAG antibodies"
    ],
    answer: 1,
    explanation: "Campylobacter jejuni is the most common identifiable preceding infection in GBS (20-30% of cases). Molecular mimicry between C. jejuni lipooligosaccharides and gangliosides on peripheral nerve axons drives the immune response. Anti-GM1 antibodies are associated with AMAN (acute motor axonal neuropathy — pure motor, common in Asia/children). Anti-GQ1b antibodies are associated with Miller Fisher syndrome variant (ophthalmoplegia, ataxia, areflexia — OAA triad). Other triggers: CMV (sensory predominant, anti-GM2), EBV, influenza virus, COVID-19, Zika virus. Anti-GD3 associated with acute motor and sensory axonal neuropathy (AMSAN)."
  },
  {
    id: 7250,
    subject: "Medicine",
    stem: "A 68-year-old man with hypertension and type 2 diabetes is seen 4 weeks after a TIA (right-sided arm weakness, 20-minute duration, full recovery). Carotid Doppler shows 75% stenosis of the ipsilateral left internal carotid artery. What is the most appropriate management to prevent future stroke?",
    options: [
      "Dual antiplatelet therapy alone — aspirin + clopidogrel for 90 days then aspirin alone",
      "Carotid endarterectomy (CEA) within 2 weeks PLUS antiplatelet therapy, statin, blood pressure control",
      "Anticoagulation with warfarin — preferred over antiplatelet for TIA prevention",
      "Conservative management with lifestyle changes only"
    ],
    answer: 1,
    explanation: "After TIA or non-disabling ischaemic stroke with ipsilateral carotid stenosis ≥70% (NASCET criteria), carotid endarterectomy (CEA) reduces the 5-year stroke risk by >50% (NNT ≈15). Benefit is time-sensitive: CEA should be performed within 2 weeks of index event for maximum benefit. Medical treatment in ALL TIA/stroke patients: (1) Antiplatelet (aspirin 300mg loading → 75mg maintenance, or dual antiplatelet with clopidogrel for 21-90 days for non-cardioembolic high-risk TIA/minor stroke), (2) High-intensity statin (atorvastatin 40-80mg), (3) BP control <130/80 mmHg, (4) Glucose control, (5) Lifestyle modification."
  },

  // ENDOCRINOLOGY + NEPHROLOGY (IDs 7251-7280)
  {
    id: 7251,
    subject: "Medicine",
    stem: "A 52-year-old woman with type 2 diabetes (HbA1c 7.8%), established cardiovascular disease (previous MI), and stage 3 CKD (eGFR 42 mL/min) is on metformin. According to ADA 2024 guidelines, what is the most appropriate additional agent?",
    options: [
      "Add sulfonylurea (glibenclamide) — cheap and effective HbA1c reduction",
      "Add GLP-1 receptor agonist (semaglutide or liraglutide) for ASCVD benefit AND/OR SGLT-2 inhibitor for CKD/HF protection — independent of HbA1c",
      "Add insulin — most effective at lowering HbA1c in established CVD",
      "Add pioglitazone — preferred in all patients with CKD"
    ],
    answer: 1,
    explanation: "ADA 2024 guidelines: In T2DM with established ASCVD, HF, or CKD, specific agents are recommended regardless of HbA1c or metformin use: (1) ASCVD: GLP-1 RA with proven CV benefit (liraglutide-LEADER, semaglutide-SUSTAIN-6, dulaglutide-REWIND) OR SGLT-2i (empagliflozin-EMPA-REG OUTCOME, canagliflozin-CANVAS); (2) HFrEF or HFpEF: SGLT-2i (dapagliflozin, empagliflozin); (3) CKD: SGLT-2i (dapagliflozin-DAPA-CKD, canagliflozin-CREDENCE) or GLP-1 RA (semaglutide-FLOW trial). Glibenclamide is avoided in CKD (hypoglycaemia risk due to active metabolite accumulation)."
  },
  {
    id: 7252,
    subject: "Medicine",
    stem: "A 38-year-old man presents with vomiting, abdominal pain, polyuria, and Kussmaul breathing. Investigations: glucose 28 mmol/L, pH 7.15, bicarbonate 10 mEq/L, anion gap 26 mEq/L, urine ketones 3+, potassium 3.2 mEq/L. What is the correct sequence of initial management for DKA?",
    options: [
      "Start insulin infusion immediately as the first priority, then give fluids",
      "IV 0.9% saline resuscitation → potassium replacement (if K<3.5 mEq/L BEFORE starting insulin) → insulin infusion 0.1 U/kg/h → monitor anion gap for resolution",
      "Give sodium bicarbonate to correct acidosis → start insulin → fluid resuscitation",
      "Oral rehydration → subcutaneous insulin → dietary modification"
    ],
    answer: 1,
    explanation: "DKA diagnosis: glucose >250 mg/dL (>13.9 mmol/L), pH <7.3, bicarbonate <18 mEq/L, positive ketones. Management sequence: (1) IV 0.9% NaCl (1L in first hour, then according to deficit); (2) Potassium — CRITICAL: replace K if <3.5 mEq/L BEFORE starting insulin (insulin drives K intracellularly, worsening hypokalaemia → arrhythmias); target K 4-5 mEq/L; (3) Insulin infusion 0.1 U/kg/h (NOT bolus in DKA); (4) Add dextrose when glucose <14 mmol/L to prevent hypoglycaemia but continue insulin; (5) Transition to SC insulin only when: pH >7.3, bicarbonate >15, anion gap normalised, patient eating."
  },
  {
    id: 7253,
    subject: "Medicine",
    stem: "A 50-year-old woman presents with sudden onset of thyroid storm after thyroid surgery. She has fever 40°C, heart rate 160/min, atrial fibrillation, agitation, and jaundice. Burch-Wartofsky score is 65. What is the correct treatment sequence?",
    options: [
      "Methimazole (MMI) first → Lugol's iodine after 1 hour → propranolol → steroids",
      "PTU (propylthiouracil) first → Lugol's iodine at least 1 hour after PTU → propranolol → hydrocortisone → cooling",
      "Radioactive iodine (RAI) → beta-blocker → PTU",
      "Total thyroidectomy immediately → supportive care"
    ],
    answer: 1,
    explanation: "Thyroid storm management (Burch-Wartofsky ≥45 = storm): (1) PTU — blocks new hormone synthesis AND blocks T4→T3 peripheral conversion (unlike MMI); large loading dose 500-1000 mg then 250 mg TDS; (2) Lugol's iodine (saturated KI or sodium iodide) — given ≥1 hour AFTER PTU (Wolff-Chaikoff effect: excess iodine temporarily inhibits thyroid hormone synthesis; if given before PTU, provides substrate for MORE hormone synthesis); (3) Propranolol (or IV esmolol) — blocks sympathetic effects and T4→T3 conversion; (4) Hydrocortisone — blocks T4→T3 conversion, prevents relative adrenal insufficiency; (5) Cooling, supportive care, treat precipitant."
  },
  {
    id: 7254,
    subject: "Medicine",
    stem: "A 45-year-old woman presents with hypothermia (34°C), hypotension, bradycardia, hyponatraemia (Na 122 mEq/L), and drowsiness. TSH >100 mIU/L with very low free T4. She has dry skin and delayed ankle reflex relaxation. What is the most appropriate treatment for this myxoedema coma?",
    options: [
      "Oral levothyroxine alone — most safe in elderly patients",
      "IV levothyroxine (T4) 200-400 mcg loading dose + IV liothyronine (T3) if available + IV hydrocortisone before thyroid hormone",
      "IV liothyronine (T3) alone — fastest to act",
      "Radioactive iodine to ablate the gland causing this severe hypothyroidism"
    ],
    answer: 1,
    explanation: "Myxoedema coma is a life-threatening emergency of severe hypothyroidism with mortality 20-25%. Management: (1) IV hydrocortisone 100mg 8-hourly BEFORE thyroid hormone — prevents adrenal crisis (coexisting central hypocortisolism or reduced cortisol metabolism); (2) IV levothyroxine 200-500 mcg loading dose then 50-100 mcg/day (bypasses gut absorption in comatose patient); (3) IV liothyronine (T3) 10-25 mcg every 8h (faster onset, better tissue conversion) — used if available or IV T4 not rapidly effective; (4) Passive rewarming (NOT active — risks cardiovascular collapse); (5) Correct hyponatraemia cautiously; (6) Treat precipitant (infection, MI, drugs)."
  },
  {
    id: 7255,
    subject: "Medicine",
    stem: "A 35-year-old man presents with fatigue, hyperpigmentation of buccal mucosa and skin creases, hyponatraemia (Na 128 mEq/L), hyperkalaemia (K 6.1 mEq/L), hypoglycaemia, and hypotension. Short Synacthen test shows cortisol rise from 120 to 140 nmol/L (inadequate response). What is the diagnosis and treatment?",
    options: [
      "Secondary adrenal insufficiency — IV hydrocortisone only (no fludrocortisone needed)",
      "Primary adrenal insufficiency (Addison's disease) — IV hydrocortisone 100mg stat + fluid resuscitation + fludrocortisone once eating",
      "Cushing's syndrome — bilateral adrenalectomy",
      "Phaeochromocytoma — alpha-blockade (phenoxybenzamine)"
    ],
    answer: 1,
    explanation: "Primary adrenal insufficiency (Addison's disease) features: hyperpigmentation (ACTH/MSH elevation stimulates melanocytes — pathognomonic of primary), hyponatraemia + hyperkalaemia (mineralocorticoid deficiency — aldosterone loss), hypoglycaemia (glucocorticoid deficiency), hypotension, weight loss, fatigue, nausea. Basal cortisol <80 or <100 nmol/L or failed Synacthen test confirms PAI. Treatment: (1) Adrenal crisis = IV hydrocortisone 100mg bolus stat, repeat 8-hourly, + IV 0.9% saline, treat precipitant; (2) Maintenance = hydrocortisone 15-25 mg/day (divided) + fludrocortisone 50-200 mcg/day. Secondary AI lacks hyperkalaemia and hyperpigmentation."
  },
  {
    id: 7256,
    subject: "Medicine",
    stem: "A patient in adrenal crisis is found unresponsive at home by a family member who knows the patient has Addison's disease. There is an emergency hydrocortisone kit available. What is the most appropriate immediate action?",
    options: [
      "Wait for ambulance and withhold hydrocortisone until hospital assessment",
      "Administer IM hydrocortisone 100mg immediately (emergency injection) and call emergency services",
      "Give oral fludrocortisone and drive to nearest hospital",
      "Give oral prednisolone 5mg and monitor at home"
    ],
    answer: 1,
    explanation: "Adrenal crisis (acute adrenal insufficiency) is a life-threatening emergency with mortality >5% even with treatment. Delays are fatal. In suspected adrenal crisis: (1) Give IM/IV hydrocortisone 100mg immediately — do NOT wait for investigations; (2) Call emergency services; (3) IV 0.9% NaCl for hypotension and hypoglycaemia (add glucose if needed); (4) Treat precipitating illness (infection most common). All patients with known AI should carry emergency hydrocortisone for self-injection and a steroid alert card. Sick-day rules: double hydrocortisone dose for intercurrent illness, triple for more severe illness/surgery."
  },
  {
    id: 7257,
    subject: "Medicine",
    stem: "KDIGO 2024 guidelines updated CKD staging and cardiorenal protection. Which SGLT-2 inhibitor trial specifically demonstrated reduction in CKD progression (primary kidney endpoint) in patients WITH AND WITHOUT diabetes?",
    options: [
      "EMPA-REG OUTCOME — empagliflozin in T2DM with CV disease",
      "DAPA-CKD — dapagliflozin in CKD with and without T2DM (reduced composite of sustained ≥50% eGFR decline, ESRD, CV death, renal death)",
      "CREDENCE — canagliflozin in T2DM with CKD (diabetic nephropathy only)",
      "EMPEROR-Reduced — empagliflozin in HFrEF"
    ],
    answer: 1,
    explanation: "DAPA-CKD trial (Heerspink 2020, NEJM): Dapagliflozin significantly reduced the composite primary endpoint (≥50% sustained eGFR decline OR ESRD OR CV/renal death) by 39% in patients with CKD (eGFR 25-75 mL/min, UACR 200-5000 mg/g) — crucially in both diabetic (67%) and NON-diabetic (33%) patients with similar benefit. This established SGLT-2i as a kidney-protective drug independent of glucose lowering. Mechanisms: reduced glomerular hyperfiltration (tubuloglomerular feedback via SGLT-2 inhibition at proximal tubule), anti-inflammatory, anti-fibrotic, reduced proximal tubular O2 consumption, haemodynamic effects."
  },
  {
    id: 7258,
    subject: "Medicine",
    stem: "According to KDIGO AKI guidelines, which of the following meets the definition of acute kidney injury (AKI)?",
    options: [
      "Creatinine rise from 90 to 140 µmol/L over 7 days (1.5x baseline) — does NOT meet AKI criteria",
      "Creatinine rise from 90 to 120 µmol/L over 48 hours (0.3 mg/dL absolute rise) — meets AKI Stage 1 criteria",
      "Urine output 0.6 mL/kg/h for 5 hours — does not meet AKI criteria",
      "Creatinine doubling in 14 days — meets AKI Stage 3"
    ],
    answer: 1,
    explanation: "KDIGO AKI definition (any one of): (1) Absolute serum creatinine rise ≥0.3 mg/dL (≥26.5 µmol/L) within 48 hours; (2) ≥1.5× baseline creatinine rise within 7 days; (3) Urine output <0.5 mL/kg/hour for ≥6 hours. AKI Staging: Stage 1: Cr ×1.5-1.9 OR +0.3 mg/dL, UO <0.5 mL/kg/h for 6-12h; Stage 2: Cr ×2-2.9, UO <0.5 mL/kg/h for ≥12h; Stage 3: Cr ×3 OR ≥4 mg/dL OR RRT, UO <0.3 mL/kg/h for ≥24h or anuria ≥12h. The creatinine rise of 30 µmol/L in 48h (≈0.34 mg/dL) meets Stage 1."
  },
  {
    id: 7259,
    subject: "Medicine",
    stem: "A 28-year-old child presents with generalised oedema, frothy urine, serum albumin 18 g/L, urine protein-to-creatinine ratio 600 mg/mmol, and normal blood pressure. Renal biopsy shows effacement of podocyte foot processes on electron microscopy with no deposits on immunofluorescence. What is the diagnosis and first-line treatment?",
    options: [
      "Focal segmental glomerulosclerosis (FSGS) — treat with cyclosporin",
      "Minimal change disease (MCD) — treat with high-dose prednisolone (1 mg/kg/day)",
      "Membranous nephropathy — treat with rituximab or cyclophosphamide",
      "IgA nephropathy — treat with ACE inhibitor and steroids"
    ],
    answer: 1,
    explanation: "Minimal change disease (MCD): Most common cause of nephrotic syndrome in children (80%), accounts for 10-15% in adults. Biopsy: light microscopy NORMAL (hence 'minimal change'), immunofluorescence NEGATIVE (no deposits), electron microscopy shows PODOCYTE FOOT PROCESS EFFACEMENT (effacement of secondary processes — 100% of glomeruli). Associated with Hodgkin's lymphoma in adults, NSAIDs, and atopy. Treatment: high-dose prednisolone (1 mg/kg/day for 4-8 weeks) — 90% of children and 75-80% of adults achieve complete remission. FSGS shows segmental sclerosis of glomeruli on LM with foot process effacement — treated with steroids, less responsive."
  },
  {
    id: 7260,
    subject: "Medicine",
    stem: "A 55-year-old man presents with nephrotic syndrome. Renal biopsy shows diffuse thickening of the glomerular basement membrane with sub-epithelial deposits on electron microscopy ('spike and dome' pattern) and granular IgG + C3 deposits on immunofluorescence. Anti-PLA2R antibodies are positive. What is the diagnosis and most likely cause?",
    options: [
      "Focal segmental glomerulosclerosis (FSGS) — secondary to hypertension",
      "Primary membranous nephropathy — anti-PLA2R antibody mediated, treat with rituximab",
      "Post-infectious glomerulonephritis — complement pathway activation",
      "Lupus nephritis class V — SLE-related membranous"
    ],
    answer: 1,
    explanation: "Primary membranous nephropathy (MN): Second most common cause of nephrotic syndrome in adults (after FSGS in adults in some series, most common in Caucasians). Anti-phospholipase A2 receptor (anti-PLA2R) antibodies positive in 70-80% of primary MN — diagnostic and can monitor response to treatment. Biopsy: sub-epithelial deposits on EM ('spike and dome'), granular IgG and C3 on IF. 30% remit spontaneously. Treatment for progressive/not remitting: rituximab (anti-CD20) is now preferred over cyclophosphamide-based regimens. Secondary MN: hepatitis B, malignancy, SLE, drugs (NSAIDs, penicillamine) — anti-PLA2R negative."
  },
  {
    id: 7261,
    subject: "Medicine",
    stem: "A 45-year-old African-American man with nephrotic syndrome has focal areas of sclerosis affecting some glomerular segments on renal biopsy, podocyte foot process effacement, and negative immunofluorescence. What is the most likely diagnosis in an adult and what is the treatment?",
    options: [
      "Minimal change disease — high-dose prednisolone first-line",
      "Focal segmental glomerulosclerosis (FSGS) — steroids first-line (prednisolone 1 mg/kg/day), consider cyclosporin or tacrolimus if steroid resistant",
      "Membranous nephropathy — rituximab or cyclophosphamide",
      "Amyloidosis — treat underlying cause"
    ],
    answer: 1,
    explanation: "Focal segmental glomerulosclerosis (FSGS) is the most common primary cause of nephrotic syndrome in ADULTS (especially African Americans) in North America. Biopsy: focal (some glomeruli affected) and segmental (part of glomerular tuft) sclerosis on LM, foot process effacement on EM, negative or non-specific IF. Primary FSGS (idiopathic, podocin/nephrin mutations) vs secondary (HIV nephropathy — collapsing FSGS; morbid obesity; reflux nephropathy; heroin). Treatment: prednisolone 1 mg/kg/day for 4-16 weeks — only 30-40% complete remission. Steroid-resistant: cyclosporin, tacrolimus, or mycophenolate. Poor prognosis, 50% reach ESRD by 10 years."
  },
  {
    id: 7262,
    subject: "Medicine",
    stem: "A 60-year-old man with nephrotic syndrome develops sudden onset leg swelling, erythema, and pain. D-dimer is elevated, and ultrasound confirms DVT. Which pathophysiological mechanism specifically explains the hypercoagulable state in nephrotic syndrome?",
    options: [
      "Elevated platelet count due to splenomegaly causing thrombocytosis",
      "Urinary loss of antithrombin III (major endogenous anticoagulant) along with proteins S and C, combined with elevated procoagulant factors (fibrinogen, factors V, VIII)",
      "Vitamin K deficiency due to malabsorption causing paradoxical coagulopathy",
      "Polycythaemia vera secondary to erythropoietin excess in nephrotic syndrome"
    ],
    answer: 1,
    explanation: "Hypercoagulability in nephrotic syndrome results from complex procoagulant-anticoagulant imbalance: Urinary loss (low molecular weight proteins) — antithrombin III, protein C, protein S (anticoagulants lost). Hepatic overproduction — fibrinogen, factors V, VII, VIII, X elevated (liver compensates for albumin loss by overproducing all proteins). Platelet hyperactivation (hypoalbuminaemia alters platelet arachidonic acid metabolism). Complications: DVT, PE, renal vein thrombosis (especially membranous nephropathy — 25-30%), arterial thrombosis. Prophylactic anticoagulation is considered when albumin <20-25 g/L in membranous nephropathy."
  },
  {
    id: 7263,
    subject: "Medicine",
    stem: "A 35-year-old woman with systemic lupus erythematosus (SLE) presents with haematuria, proteinuria 3.5 g/day, hypertension, and rising creatinine. Renal biopsy shows diffuse proliferative glomerulonephritis with 'wire loop' lesions and sub-endothelial deposits. Immunofluorescence: full-house nephropathy (IgG, IgM, IgA, C3, C1q). What is the classification and treatment?",
    options: [
      "Lupus nephritis Class II (mesangial proliferative) — treat with hydroxychloroquine only",
      "Lupus nephritis Class III (focal proliferative) — treat with low-dose steroids",
      "Lupus nephritis Class IV (diffuse proliferative) — treat with high-dose steroids + cyclophosphamide or mycophenolate mofetil (MMF)",
      "Lupus nephritis Class V (membranous) — treat with rituximab monotherapy"
    ],
    answer: 2,
    explanation: "Lupus nephritis classification (ISN/RPS 2003): Class I (minimal mesangial), II (mesangial proliferative), III (focal: <50% glomeruli), IV (diffuse: ≥50% glomeruli — most severe, proliferative, 'wire loops'/sub-endothelial deposits, full-house IF), V (membranous), VI (advanced sclerosing). Class IV = worst prognosis, requires aggressive immunosuppression: (1) Induction: high-dose steroids (methylprednisolone IV pulses then prednisolone 1 mg/kg/day) + MMF 2-3g/day OR cyclophosphamide (low-dose Euro-Lupus or high-dose NIH); (2) Maintenance: MMF or azathioprine + hydroxychloroquine; (3) Consider rituximab or belimumab for refractory cases."
  },
  {
    id: 7264,
    subject: "Medicine",
    stem: "KDIGO 2024 updated the CKD-EPI equation for estimating GFR. What was the main change from the 2009 equation to the 2021 CKD-EPI equation?",
    options: [
      "2021 equation added body weight as a variable for more accurate estimation",
      "2021 equation REMOVED the race coefficient (Black race variable) to eliminate health disparities and ensure equal care regardless of race",
      "2021 equation now uses cystatin C only instead of creatinine",
      "2021 equation lowered the definition of CKD from eGFR <60 to eGFR <75 mL/min/1.73m²"
    ],
    answer: 1,
    explanation: "The 2021 CKD-EPI creatinine equation (endorsed by KDIGO 2024) removed the race variable that was present in the 2009 equation. The old equation assigned higher eGFR estimates to Black patients (based on historical cohort data assuming higher muscle mass), which could delay recognition of CKD, delay referral for transplantation, and perpetuate health disparities. The 2021 equation uses only serum creatinine, age, and sex. A combined creatinine+cystatin C 2021 equation is more accurate and is preferred when cystatin C is available. KDIGO also updated CKD staging and emphasised cardiorenal protection with SGLT-2i."
  },
  {
    id: 7265,
    subject: "Medicine",
    stem: "A 65-year-old diabetic man with CKD stage G3b-A3 (eGFR 38 mL/min, albumin:creatinine ratio 450 mg/g) develops elevated PTH (320 pg/mL), phosphate 1.9 mmol/L, low calcium, and elevated FGF-23. This is consistent with CKD-mineral bone disorder (CKD-MBD). What is the appropriate management?",
    options: [
      "Calcium carbonate only — corrects hypocalcaemia and binds phosphate",
      "Dietary phosphate restriction + phosphate binders (calcium-based or non-calcium e.g., sevelamer) + active vitamin D (calcitriol/alfacalcidol) + calcimimetics (cinacalcet) if PTH remains elevated on dialysis",
      "Native vitamin D (cholecalciferol) supplementation alone — sufficient to correct all abnormalities",
      "Immediate parathyroidectomy for elevated PTH in CKD"
    ],
    answer: 1,
    explanation: "CKD-MBD pathophysiology: Reduced renal phosphate excretion → hyperphosphataemia → reduced Ca → stimulates PTH. Reduced 1-alpha-hydroxylase → less active vitamin D (calcitriol) → less Ca absorption. FGF-23 rises early (before phosphate rises) — inhibits 1-alpha-hydroxylase. Secondary hyperparathyroidism results. Management: (1) Dietary phosphate restriction; (2) Phosphate binders — calcium-based (calcium carbonate, calcium acetate, simpler and cheap) or non-calcium-based (sevelamer, lanthanum carbonate — preferred when hypercalcaemia or vascular calcification risk); (3) Active vitamin D analogues (calcitriol, alfacalcidol — suppresses PTH); (4) Calcimimetics (cinacalcet — primarily for dialysis patients)."
  },
  {
    id: 7266,
    subject: "Medicine",
    stem: "A 40-year-old woman with type 2 diabetes on metformin has HbA1c of 9.5% (80 mmol/mol) with symptomatic hyperglycaemia (polyuria, polydipsia, weight loss 4 kg over 2 months). What is the most appropriate addition to her treatment?",
    options: [
      "Add GLP-1 receptor agonist — most appropriate for all cases of poor control",
      "Add insulin — provides most rapid glucose control; basal insulin (insulin glargine/detemir) as starting option if symptomatic hyperglycaemia",
      "Add sulfonylurea — most effective first addition to metformin",
      "Add DPP-4 inhibitor — most potent glucose-lowering agent available"
    ],
    answer: 1,
    explanation: "In T2DM with symptomatic hyperglycaemia (osmotic symptoms + weight loss) and/or very high HbA1c (>10%), early insulin initiation is recommended for rapid glycaemic control. Basal insulin (glargine, detemir, degludec) once daily is the starting regimen — easier initiation than complex regimens. Once symptoms resolve and lifestyle/other agents take effect, insulin may sometimes be de-escalated. GLP-1 RAs, SGLT-2i, and DPP-4i are preferred add-ons when HbA1c is not critically elevated and no urgent symptoms, guided by comorbidities (CVD, HF, CKD) as per ADA 2024."
  },
  {
    id: 7267,
    subject: "Medicine",
    stem: "Semaglutide (GLP-1 RA) demonstrated cardiovascular and renal benefits in large outcomes trials. Which of the following correctly summarises the mechanism of action of GLP-1 receptor agonists?",
    options: [
      "GLP-1 RAs block GLP-1 degradation by inhibiting DPP-4, thereby extending endogenous GLP-1 action",
      "GLP-1 RAs activate GLP-1 receptors — stimulate glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying, reduce appetite (central), promote weight loss",
      "GLP-1 RAs inhibit SGLT-2 in the proximal tubule, reducing glucose reabsorption",
      "GLP-1 RAs stimulate insulin secretion by closing ATP-sensitive K+ channels in beta cells (same as sulfonylureas)"
    ],
    answer: 1,
    explanation: "GLP-1 receptor agonists (liraglutide, semaglutide, dulaglutide, exenatide, tirzepatide [dual GIP+GLP-1]) mimic endogenous GLP-1 but have much longer half-lives (engineered to resist DPP-4 degradation). Mechanisms: (1) Stimulate insulin secretion ONLY when glucose is elevated (glucose-dependent — no hypoglycaemia monotherapy risk); (2) Suppress glucagon (also glucose-dependent); (3) Slow gastric emptying (→ reduces post-meal glucose, causes satiety); (4) Central appetite suppression (→ weight loss 3-15 kg); (5) CV direct benefits (reduce MACE — LEADER, SUSTAIN-6, REWIND, AMPLITUDE-O); (6) Renal protection (FLOW trial-semaglutide). DPP-4 inhibitors are distinct — they prevent GLP-1 degradation."
  },
  {
    id: 7268,
    subject: "Medicine",
    stem: "A 55-year-old woman with type 2 diabetes is started on an SGLT-2 inhibitor. She develops severe perineal pain, swelling, necrosis involving the scrotum and perineum bilaterally. What complication has occurred?",
    options: [
      "Genitourinary candidiasis — treat with topical antifungal",
      "Fournier's gangrene (necrotising fasciitis of genitalia/perineum) — rare but serious SGLT-2i side effect, requires urgent surgical debridement and broad-spectrum antibiotics",
      "Drug hypersensitivity reaction — stop SGLT-2i and give antihistamines",
      "Diabetic ketoacidosis — check ketones and start insulin"
    ],
    answer: 1,
    explanation: "SGLT-2 inhibitor side effects: (1) Genitourinary infections — most common: vulvovaginal candidiasis (females) and male genital mycotic infections (glycosuria promotes yeast growth); (2) Fournier's gangrene — rare but life-threatening necrotising fasciitis of perineum (FDA black box warning); (3) Euglycaemic DKA — DKA with normal/mildly elevated glucose (especially during fasting, surgery, or reduced carbohydrate intake — test ketones not just glucose); (4) Polyuria/urinary frequency; (5) Volume depletion/hypotension; (6) Amputations — mostly canagliflozin (CANVAS trial, possible PAD-related). Fournier's requires emergency surgical debridement + antibiotics + ICU."
  },
  {
    id: 7269,
    subject: "Medicine",
    stem: "A 62-year-old type 2 diabetic with CKD stage 3 (eGFR 42 mL/min) and HbA1c 8.1% is on metformin 1g BD. His clinician wants to add an agent. Which agent should be AVOIDED due to significant risk in this level of renal impairment?",
    options: [
      "Sitagliptin (DPP-4 inhibitor) — dose adjustment needed but safe with eGFR adjustment",
      "Empagliflozin (SGLT-2 inhibitor) — still has cardiorenal benefit at eGFR ≥20",
      "Glibenclamide (second-generation sulfonylurea) — active metabolites accumulate, causing prolonged hypoglycaemia in CKD",
      "Insulin glargine — no renal dose adjustment needed"
    ],
    answer: 2,
    explanation: "Glibenclamide (glyburide) is contraindicated in CKD (eGFR <60) because its active metabolites (M1, M2) accumulate renally, causing prolonged and severe hypoglycaemia. Safe SU alternatives: gliclazide (shorter-acting, no active renal metabolites — safer in CKD), or glipizide. Metformin: can be used up to eGFR ≥30 (with reduced dose and monitoring at eGFR 30-45); AVOID if eGFR <30 (lactic acidosis risk). SGLT-2i: approved for cardiorenal protection down to eGFR ≥20-25 (glycaemic efficacy reduced below eGFR 45). DPP-4i: dose-adjust sitagliptin (50mg at eGFR 30-50, 25mg if <30); linagliptin safe at all eGFR levels (hepatic elimination)."
  },
  {
    id: 7270,
    subject: "Medicine",
    stem: "A 30-year-old woman with type 1 diabetes presents with nausea, vomiting, and confusion. Blood glucose is 180 mg/dL (10 mmol/L), pH 7.20, bicarbonate 11 mEq/L, anion gap 24 mEq/L, urine ketones 3+. She had recently started an SGLT-2 inhibitor off-label. What is the diagnosis?",
    options: [
      "Diabetic ketoacidosis (DKA) with typical hyperglycaemia",
      "Euglycaemic DKA — caused by SGLT-2 inhibitor; ketoacidosis with normal/near-normal glucose",
      "Hyperosmolar hyperglycaemic state (HHS) — treat with aggressive IV fluids",
      "Lactic acidosis due to metformin — stop metformin and give bicarbonate"
    ],
    answer: 1,
    explanation: "Euglycaemic DKA (euDKA) is a serious and potentially missed complication of SGLT-2 inhibitors (especially in type 1 diabetes or metabolic stress situations). SGLT-2i causes: (1) Glucosuria — lowers blood glucose to near-normal despite DKA; (2) Promotes glucagon secretion (reduces insulin:glucagon ratio); (3) Reduces glucose availability — shifts metabolism toward fat oxidation and ketogenesis. euDKA presents with ketoacidosis (high anion gap, low pH, low HCO3, ketonuria/ketonaemia) but glucose 100-200 mg/dL — clinicians may miss DKA because glucose is 'normal'. Management: standard DKA protocol — hold SGLT-2i, IV insulin, IV fluids (with dextrose to maintain normal glucose), K+ replacement."
  },
  {
    id: 7271,
    subject: "Medicine",
    stem: "A 66-year-old man with T2DM and BMI 42 kg/m² has been on metformin and semaglutide 1mg weekly. He lost 8 kg but HbA1c remains at 8.5%. His doctor considers tirzepatide. What is the mechanism of tirzepatide that makes it more effective for weight loss than semaglutide?",
    options: [
      "Tirzepatide inhibits both SGLT-2 and DPP-4, providing dual glucose-lowering effects",
      "Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) + GLP-1 receptor agonist, producing greater weight loss (up to 20-22%) than GLP-1 RA alone",
      "Tirzepatide blocks adipocyte GLP-1 receptors, directly lipolysing visceral fat",
      "Tirzepatide activates peroxisome proliferator-activated receptor-gamma (PPARγ), similar to thiazolidinediones"
    ],
    answer: 1,
    explanation: "Tirzepatide (Mounjaro) is a dual GIP receptor + GLP-1 receptor agonist ('twincretin'). GIP (glucose-dependent insulinotropic polypeptide) normally stimulates insulin in the fed state, promotes adipogenesis in adipocytes, and has central effects on appetite. Tirzepatide's dual action produces: greater insulin secretion, enhanced appetite suppression, greater weight loss (SURMOUNT-1 trial: up to 20-22% body weight reduction — superior to all approved GLP-1 RAs), superior HbA1c lowering vs semaglutide (SURPASS program). Semaglutide (SUSTAIN, STEP trials) achieves 10-15% weight loss. Retatrutide (triple GIP+GLP-1+glucagon RA) is in trials targeting even greater weight loss."
  },
  {
    id: 7272,
    subject: "Medicine",
    stem: "A 45-year-old woman is incidentally found to have a 2.5 cm right adrenal mass on CT done for abdominal pain. She has hypertension and hypokalaemia. 24-hour urinary catecholamines and metanephrines are elevated. What is the diagnosis and the MOST critical first step in management?",
    options: [
      "Adrenocortical carcinoma — immediate surgical resection without medical preparation",
      "Phaeochromocytoma — MUST give alpha-blockade (phenoxybenzamine) for at least 10-14 days BEFORE beta-blockade or surgery",
      "Cushing's syndrome — overnight dexamethasone suppression test to confirm",
      "Adrenal incidentaloma with primary hyperaldosteronism — laparoscopic adrenalectomy immediately"
    ],
    answer: 1,
    explanation: "Phaeochromocytoma (rule of 10s: 10% bilateral, 10% extra-adrenal, 10% malignant, 10% in children, 10% non-functional, 10% familial): Diagnosis: elevated 24h urinary catecholamines/metanephrines OR plasma free metanephrines (most sensitive/specific). Pre-operative preparation is CRITICAL: (1) Alpha-blockade FIRST with phenoxybenzamine (non-selective, irreversible) or doxazosin for ≥10-14 days to prevent hypertensive crisis during surgery; (2) HIGH salt and fluid intake to expand contracted plasma volume; (3) Beta-blockade ONLY AFTER alpha-blockade is established (giving beta-blockers first → unopposed alpha stimulation → hypertensive crisis). Surgery (laparoscopic adrenalectomy) is definitive."
  },
  {
    id: 7273,
    subject: "Medicine",
    stem: "A 35-year-old woman with Graves' disease (diffuse goitre, exophthalmos, pretibial myxoedema) has TSH <0.01 mIU/L and free T4 of 48 pmol/L. Anti-TSH receptor antibodies (TRAb) are positive. What is the mechanism of Graves' disease and first-line treatment options?",
    options: [
      "TSH receptor blocking antibodies cause hypothyroidism — treat with levothyroxine",
      "TRAb (IgG) stimulate the TSH receptor on thyroid follicular cells, mimicking TSH — causing hyperthyroidism; treat with antithyroid drugs (carbimazole/PTU), radioactive iodine (RAI), or thyroidectomy",
      "Thyroid peroxidase antibodies (anti-TPO) block thyroid hormone synthesis — treat with RAI alone",
      "Thyroglobulin antibodies cause autoimmune destruction of thyroid — similar to Hashimoto's"
    ],
    answer: 1,
    explanation: "Graves' disease (most common cause of hyperthyroidism worldwide): IgG autoantibodies bind and stimulate TSH receptors (TRAb/TSHR-stimulating Ab) → continuous thyroid stimulation independent of pituitary TSH → hyperthyroidism + diffuse goitre. Unique extra-thyroidal features: (1) Graves' ophthalmopathy (proptosis, periorbital oedema, diplopia — due to TSH receptor expression in orbital fibroblasts); (2) Pretibial myxoedema (thyroid dermopathy); (3) Thyroid acropachy (clubbing). Treatment options: (1) Antithyroid drugs — carbimazole (preferred) or PTU (in pregnancy first trimester, thyroid storm); (2) Radioactive iodine (RAI, 131I); (3) Total thyroidectomy. Beta-blockers control symptoms."
  },
  {
    id: 7274,
    subject: "Medicine",
    stem: "A 72-year-old man with CKD Stage 5 (eGFR 9 mL/min) not yet on dialysis presents with hyperkalaemia of 6.8 mEq/L and ECG changes (peaked T waves, widened QRS). What is the CORRECT order of immediate management?",
    options: [
      "Sodium bicarbonate infusion → insulin-dextrose → calcium gluconate",
      "IV calcium gluconate (membrane stabilisation) → insulin-dextrose (shift K into cells) → sodium bicarbonate → Resonium (kayexalate) or consider urgent dialysis",
      "Urgent dialysis only — no medical management needed",
      "Oral potassium-binding resins (patiromer) alone — sufficient for all hyperkalaemia"
    ],
    answer: 1,
    explanation: "Hyperkalaemia with ECG changes is life-threatening. Management sequence: (1) IV calcium gluconate 10% 10-30 mL (membrane stabilisation — cardiac protection, works in minutes, does NOT lower K); (2) Insulin (10 units actrapid) + 50 mL 50% dextrose IV (shifts K into cells, onset 15-30 min, duration 2-6h); (3) Sodium bicarbonate (if metabolic acidosis, shifts K into cells, onset 30-60 min); (4) Salbutamol nebuliser 10-20 mg (shifts K into cells, additive to insulin); (5) Kayexalate/resonium (calcium resonium) rectal or oral — removes K from body; patiromer/zirconium cyclosilicate (newer K binders, better tolerated); (6) Urgent dialysis for refractory hyperkalaemia in CKD."
  },
  {
    id: 7275,
    subject: "Medicine",
    stem: "A 55-year-old man with longstanding CKD is found to have normochromic normocytic anaemia (Hb 8.5 g/dL) with normal iron studies, normal B12/folate, and low reticulocyte count. What is the most likely cause and treatment?",
    options: [
      "Iron deficiency anaemia — oral ferrous sulphate supplementation",
      "Anaemia of CKD due to reduced erythropoietin production — treat with erythropoiesis-stimulating agents (ESAs: epoetin alfa, darbepoetin alfa) and iron supplementation (IV preferred)",
      "Haemolytic anaemia due to uraemic toxins — plasmapheresis",
      "Anaemia of inflammation — treat underlying inflammation"
    ],
    answer: 1,
    explanation: "Anaemia of CKD: Normochromic normocytic anaemia, develops from CKD Stage G3b onwards, worsens with progression. Primary mechanism: reduced EPO production by peritubular interstitial cells in the kidney (insufficient response to anaemia). Contributing factors: iron deficiency (reduced intake, blood loss from dialysis), reduced RBC lifespan, uraemic inhibition of erythropoiesis, hyperparathyroidism. Treatment (KDIGO): (1) Correct iron deficiency first — IV iron preferred in dialysis patients (oral less effective, causes GI side effects); (2) ESAs (epoetin, darbepoetin) if Hb <10 g/dL after iron replenishment — target Hb 10-12 g/dL; (3) HIF-PHD inhibitors (roxadustat, daprodustat) — new oral alternative to ESAs."
  },
  {
    id: 7276,
    subject: "Medicine",
    stem: "A 28-year-old man is found to have blood pressure 160/100 mmHg. Investigations reveal: serum potassium 2.8 mEq/L, metabolic alkalosis, aldosterone 800 pmol/L, and suppressed renin (<0.5 ng/mL/h). Aldosterone-to-renin ratio is 55. The diagnosis is primary hyperaldosteronism. Which investigation definitively lateralises disease before surgery?",
    options: [
      "CT adrenal — most sensitive and can definitively lateralise",
      "Adrenal venous sampling (AVS) — gold standard for lateralisation; essential before adrenalectomy as CT may be misleading",
      "MRI adrenal — preferred over CT for localisation",
      "Fludrocortisone suppression test — confirms diagnosis and lateralises"
    ],
    answer: 1,
    explanation: "In primary hyperaldosteronism (Conn syndrome), adrenal venous sampling (AVS) is the gold standard for lateralisation of aldosterone excess before adrenalectomy. CT adrenal can miss: microadenomas (<1 cm), bilateral macroadenomas mistaken for unilateral, incidentaloma on contralateral side causing false lateralisation. AVS involves sampling adrenal veins bilaterally and peripheral vein for aldosterone and cortisol (cortisol confirms catheter position). Lateralisation index ≥4:1 on aldosterone:cortisol ratio suggests unilateral disease → surgery. <3:1 → bilateral hyperplasia → medical treatment with spironolactone/eplerenone. The fludrocortisone suppression test CONFIRMS primary hyperaldosteronism (failure to suppress aldosterone) but doesn't lateralise."
  },
  {
    id: 7277,
    subject: "Medicine",
    stem: "A 48-year-old woman presents with weight gain of 12 kg over 2 years (predominantly central/truncal), purple striae, hypertension, diabetes, proximal myopathy, and osteoporosis. She has a moon face and buffalo hump. Serum cortisol is 850 nmol/L at 9am after 1 mg dexamethasone the night before (overnight DST). What is the next investigation to determine the cause?",
    options: [
      "Repeat the overnight DST with higher dexamethasone dose to confirm Cushing's",
      "Plasma ACTH level to distinguish ACTH-dependent (high ACTH: pituitary Cushing's/ectopic) from ACTH-independent (suppressed ACTH: adrenal tumour) Cushing's syndrome",
      "CT adrenal immediately — to look for adrenal adenoma",
      "Bilateral inferior petrosal sinus sampling (IPSS) — first step in all Cushing's"
    ],
    answer: 1,
    explanation: "After biochemical confirmation of Cushing's syndrome (failed DST suppression, elevated 24h UFC or midnight salivary cortisol), the next step is PLASMA ACTH: (1) Suppressed ACTH (<2 pmol/L) → ACTH-independent Cushing's → adrenal cause (adenoma, carcinoma, PPNAD) → CT/MRI adrenal; (2) Normal or elevated ACTH → ACTH-dependent Cushing's → pituitary (Cushing's disease, 80%) or ectopic ACTH secretion (lung SCLC, carcinoid, phaeochromocytoma, 20%) → MRI pituitary → if equivocal, bilateral inferior petrosal sinus sampling (IPSS) with CRH stimulation to confirm pituitary source (central:peripheral ACTH ratio ≥3 post-CRH confirms pituitary)."
  },
  {
    id: 7278,
    subject: "Medicine",
    stem: "A 62-year-old man on maintenance haemodialysis (HD) three times weekly experiences headache, visual disturbance, and disorientation near the end of a dialysis session. Blood pressure is 170/100 mmHg. EEG later shows slow waves. What is the most likely complication?",
    options: [
      "Dialysis disequilibrium syndrome — rapid urea clearance causes cerebral oedema due to osmotic shift (urea acts as idiogenic osmole in brain)",
      "Air embolism from dialysis circuit — presents with respiratory distress and cardiac arrest",
      "Hypoglycaemia due to glucose-free dialysate — check blood glucose immediately",
      "Wernicke's encephalopathy due to thiamine deficiency in dialysis patients"
    ],
    answer: 0,
    explanation: "Dialysis disequilibrium syndrome (DDS): occurs during or shortly after haemodialysis, especially in first sessions or with very high urea (new patients/severely uraemic). Mechanism: rapid clearance of urea from blood → osmotic gradient (blood becomes hypotonic relative to brain cells) → brain cells retain urea as idiogenic osmoles → osmotic shift of water into brain → cerebral oedema. Features: headache, nausea, restlessness, confusion, seizures, coma (in severe cases). Management: slow/gentle dialysis for new patients ('nursed-in' protocol), reduce dialysis efficiency initially, use high-sodium dialysate or IV mannitol, treat symptoms supportively. Prevention is key — first HD sessions should be short with low efficiency."
  },
  {
    id: 7279,
    subject: "Medicine",
    stem: "A 50-year-old type 2 diabetic patient has a diabetic foot ulcer (Wagner grade 2) with no signs of systemic infection but surrounding cellulitis. X-ray shows no bone changes but MRI reveals marrow oedema in the underlying metatarsal. Which condition does MRI suggest and what is the treatment?",
    options: [
      "Charcot arthropathy — total contact casting, no antibiotics needed",
      "Osteomyelitis — prolonged antibiotic therapy (6 weeks IV/oral) guided by bone biopsy culture; surgical debridement if needed",
      "Peripheral arterial disease — urgent revascularisation",
      "Diabetic neuropathy only — offloading and wound care"
    ],
    answer: 1,
    explanation: "MRI bone marrow oedema (T1 hypointense, T2/STIR hyperintense) with adjacent soft tissue infection in a diabetic foot ulcer is highly sensitive (90%) and specific (80%) for osteomyelitis — the 'probe-to-bone' test (positive if probe reaches bone through ulcer) is also predictive. Osteomyelitis management: (1) Bone biopsy for culture (guides targeted antibiotics) before or after empirical treatment; (2) Antibiotics 6 weeks IV or oral (oral highly bioavailable antibiotics — co-amoxiclav, clindamycin, rifampicin for staphylococci, fluoroquinolones for Gram-negatives); (3) Surgical debridement/partial foot amputation if non-responsive. Charcot arthropathy: neuropathic joint destruction (hot, swollen foot, normal or negative MRI for infection, total contact casting)."
  },
  {
    id: 7280,
    subject: "Medicine",
    stem: "A 55-year-old woman with end-stage renal disease (ESRD) on peritoneal dialysis (PD) presents with cloudy peritoneal dialysis effluent, fever, and abdominal pain. Effluent white cell count is 450 cells/µL with >50% neutrophils. What is the most likely diagnosis and treatment?",
    options: [
      "Peritoneal dialysis effluent contamination — no treatment needed, change PD bag",
      "PD-associated peritonitis — intraperitoneal antibiotics (vancomycin or first-generation cephalosporin for Gram-positive coverage + gentamicin or ceftazidime for Gram-negative coverage)",
      "Spontaneous bacterial peritonitis (SBP) — IV albumin + IV cefotaxime",
      "Hemoperitoneum — check coagulation and transfuse if needed"
    ],
    answer: 1,
    explanation: "PD-associated peritonitis: Defined by at least 2 of: (1) Symptoms (abdominal pain/cloudy effluent); (2) Effluent WBC ≥100 cells/µL with >50% PMNs; (3) Positive effluent culture. Most common organisms: Gram-positive (Staphylococcus epidermidis/aureus, Streptococcus — via touch contamination or catheter exit-site). Treatment: intraperitoneal antibiotics (better PD penetration than IV): first-generation cephalosporin (cefazolin/cephalothin) for Gram-positive + ceftazidime or aminoglycoside for Gram-negative coverage until culture sensitivity available. PD catheter removal if: fungal peritonitis, failure to respond within 5 days, tunnel infection/exit-site infection. Different from SBP (cirrhosis + ascites, IV antibiotics)."
  },
];
