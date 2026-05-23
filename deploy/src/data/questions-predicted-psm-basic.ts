import type { Question } from "./questions";
export const PREDICTED_PSM_BASIC_QUESTIONS: Question[] = [
  {
    id: 7501,
    subject: "PSM/Community Medicine",
    stem: "The National Tuberculosis Elimination Programme (NTEP) was renamed from RNTCP in which year, and what is its revised target year for TB elimination in India?",
    options: [
      "Renamed 2020, target 2025",
      "Renamed 2020, target 2030",
      "Renamed 2019, target 2025",
      "Renamed 2019, target 2030",
    ],
    answer: 1,
    explanation:
      "RNTCP was renamed to NTEP (National Tuberculosis Elimination Programme) in 2020. The original target was TB elimination by 2025 (ahead of the global target of 2030), but this was revised to 2030 given the challenges posed by the COVID-19 pandemic and programmatic ground realities.",
  },
  {
    id: 7502,
    subject: "PSM/Community Medicine",
    stem: "Nikshay Poshan Yojana under NTEP provides nutritional support of ₹500 per month through Direct Benefit Transfer (DBT) to TB patients. Under which principle of public health does this intervention primarily fall?",
    options: [
      "Secondary prevention",
      "Primordial prevention",
      "Tertiary prevention",
      "Primary prevention",
    ],
    answer: 2,
    explanation:
      "Nikshay Poshan Yojana targets TB patients already diagnosed and on treatment. Providing nutritional support to improve treatment adherence and outcomes, and prevent complications and relapse, falls under tertiary prevention — limiting disability and complications from an established disease.",
  },
  {
    id: 7503,
    subject: "PSM/Community Medicine",
    stem: "The BPaLM regimen introduced in 2023 for pre-XDR/XDR-TB replaces a regimen lasting 18–24 months with a regimen of how many months?",
    options: ["9 months", "12 months", "6 months", "4 months"],
    answer: 2,
    explanation:
      "The BPaLM regimen (Bedaquiline + Pretomanid + Linezolid + Moxifloxacin) introduced in 2023 for pre-XDR and XDR-TB reduces the treatment duration to 6 months, compared to the older regimens lasting 18–24 months, significantly improving treatment completion rates and patient outcomes.",
  },
  {
    id: 7504,
    subject: "PSM/Community Medicine",
    stem: "TrueNAT and CBNAAT (cartridge-based nucleic acid amplification test) used in NTEP primarily detect which targets for rapid diagnosis of tuberculosis?",
    options: [
      "AFB on Ziehl-Neelsen staining",
      "MTB DNA and rifampicin resistance (rpoB gene)",
      "Tuberculin sensitivity via purified protein derivative",
      "Anti-TB IgM and IgG antibodies",
    ],
    answer: 1,
    explanation:
      "TrueNAT and CBNAAT (GeneXpert MTB/RIF) are molecular diagnostic tools that detect Mycobacterium tuberculosis DNA and simultaneously identify rifampicin resistance by detecting mutations in the rpoB gene. They provide results within 2 hours and are WHO-endorsed front-line tests replacing sputum smear microscopy as the initial test.",
  },
  {
    id: 7505,
    subject: "PSM/Community Medicine",
    stem: "The standard drug-sensitive TB regimen under NTEP is 2RHZE/4RHE. What does the notation '2RHZE' signify?",
    options: [
      "2 months of Rifampicin, Isoniazid, Pyrazinamide, Ethambutol (intensive phase)",
      "2 weeks of Rifampicin, Isoniazid, Pyrazinamide, Ethambutol",
      "2 months of Rifampicin, Isoniazid, Pyrazinamide, Ethambutol (continuation phase)",
      "2 drugs — Rifampicin and Isoniazid — for 2 months",
    ],
    answer: 0,
    explanation:
      "In TB regimen notation, the number before the drug abbreviations indicates the duration in months. '2RHZE' means 2 months of Rifampicin (R), Isoniazid (H), Pyrazinamide (Z), and Ethambutol (E) — this is the intensive phase. '4RHE' means 4 months of Rifampicin, Isoniazid, and Ethambutol — the continuation phase. Total duration = 6 months.",
  },
  {
    id: 7506,
    subject: "PSM/Community Medicine",
    stem: "Under the National Health Mission (NHM), ASHA workers are deployed at the village level. What is the recommended population coverage per ASHA in tribal and rural areas?",
    options: [
      "One per 500 population",
      "One per 1000 population",
      "One per 2000 population",
      "One per 5000 population",
    ],
    answer: 1,
    explanation:
      "ASHA (Accredited Social Health Activist) workers are deployed at one per 1000 population in tribal and rural areas under NHM. They are the first point of contact between the community and the health system, trained for 9 months, and are incentive-based community volunteers (not regular salaried employees).",
  },
  {
    id: 7507,
    subject: "PSM/Community Medicine",
    stem: "A Primary Health Centre (PHC) in a plains area serves a population of approximately 30,000. How many beds does a standard PHC have, and who is the in-charge medical officer?",
    options: [
      "6 beds, 1 Medical Officer",
      "14 beds, 1 Medical Officer",
      "30 beds, 4 specialists",
      "100 beds, full specialist care",
    ],
    answer: 1,
    explanation:
      "A PHC in plains areas serves 30,000 population (20,000 in tribal/hilly areas). It has 14 beds and is headed by 1 Medical Officer (MO). It provides primary curative, preventive and promotive health care. A CHC (Community Health Centre) serves 80,000–1,20,000 population with 30 beds and 4 specialists (surgeon, physician, gynaecologist, paediatrician).",
  },
  {
    id: 7508,
    subject: "PSM/Community Medicine",
    stem: "A Community Health Centre (CHC) serves a population of 80,000–1,20,000 and is required to have 4 specialists. Which of the following is NOT one of the mandatory 4 specialists at a CHC?",
    options: [
      "General surgeon",
      "Physician",
      "Gynaecologist and obstetrician",
      "Psychiatrist",
    ],
    answer: 3,
    explanation:
      "The 4 mandatory specialists at a CHC are: (1) General Surgeon, (2) Physician, (3) Gynaecologist and Obstetrician, and (4) Paediatrician. A psychiatrist is not a mandatory specialist at CHC level. CHC has 30 beds and also has a blood bank. It serves as the first referral unit (FRU) in rural areas.",
  },
  {
    id: 7509,
    subject: "PSM/Community Medicine",
    stem: "As per the 2024 Universal Immunisation Programme (UIP) schedule, which vaccines are given at birth to a newborn in India?",
    options: [
      "BCG + OPV0 + Hepatitis B birth dose",
      "BCG + DPT1 + Hepatitis B birth dose",
      "BCG + OPV0 + IPV1",
      "BCG + OPV0 + Rotavirus dose 1",
    ],
    answer: 0,
    explanation:
      "At birth, three vaccines are given under India's UIP: (1) BCG (intradermal, left shoulder, 0.05 mL for <1 month), (2) OPV-0 (zero dose, oral), and (3) Hepatitis B birth dose (intramuscular, within 24 hours of birth — crucial for MTCT prevention). DPT, IPV, Hib, Rotavirus and PCV begin at 6 weeks of age.",
  },
  {
    id: 7510,
    subject: "PSM/Community Medicine",
    stem: "The HPV vaccine was added to India's national immunisation programme in 2023. For which age group and how many doses are recommended as part of this programme?",
    options: [
      "Girls 9–14 years, 2 doses",
      "Girls 9–26 years, 3 doses",
      "Girls and boys 11–12 years, 2 doses",
      "Girls 15–26 years, 3 doses",
    ],
    answer: 0,
    explanation:
      "India added HPV vaccine to its national immunisation programme in 2023, targeting girls aged 9–14 years with a 2-dose schedule (0 and 6 months). Evidence shows that 2 doses given before sexual debut provide equivalent protection to 3 doses. Cervarix (bivalent, types 16 and 18) and Gardasil (quadrivalent, 6, 11, 16, 18) are available; India's indigenous Cervavac is also approved.",
  },
  {
    id: 7511,
    subject: "PSM/Community Medicine",
    stem: "Under the UIP, Measles-Rubella (MR) vaccine is given at 9 months as the first dose. When is the second dose (MR2) scheduled along with which other vaccines?",
    options: [
      "12 months with PCV booster",
      "16–24 months with DPT B1, OPV B1, and Vitamin A (2nd dose)",
      "5–6 years with DPT B2",
      "18 months with IPV booster",
    ],
    answer: 1,
    explanation:
      "The second dose of MR vaccine (MR2) is given at 16–24 months, along with DPT Booster 1 (B1), OPV Booster 1 (B1), and the second dose of Vitamin A (2 lakh IU). PCV booster is also given at 16–24 months. This visit at 16–24 months is one of the most heavily loaded visits in the UIP schedule.",
  },
  {
    id: 7512,
    subject: "PSM/Community Medicine",
    stem: "Which of the following statements about Vitamin A supplementation under India's national programme is CORRECT?",
    options: [
      "First dose (1 lakh IU) given at 6 months, then 2 lakh IU every 6 months up to 5 years",
      "First dose (1 lakh IU) given at 9–12 months, then 2 lakh IU every 6 months up to 5 years",
      "All doses are 2 lakh IU given every 6 months from 9 months to 5 years",
      "First dose given at birth, 5 doses total",
    ],
    answer: 1,
    explanation:
      "Vitamin A supplementation programme: first dose of 1,00,000 IU (1 lakh IU) is given at 9–12 months with the first dose of MR vaccine. Subsequent doses are 2,00,000 IU (2 lakh IU) given every 6 months from 16 months up to 5 years (9 doses total). The reduced first dose minimises toxicity risk in younger infants.",
  },
  {
    id: 7513,
    subject: "PSM/Community Medicine",
    stem: "Under NVBDCP, what is the Slide Positivity Rate (SPR) and what threshold triggers intensified malaria control measures?",
    options: [
      "Proportion of slides positive for malaria; threshold >1%",
      "Proportion of suspected malaria cases tested; threshold >10%",
      "Number of new cases per 1000 population; threshold >5",
      "Proportion of P. falciparum among all malaria positives; threshold >50%",
    ],
    answer: 0,
    explanation:
      "Slide Positivity Rate (SPR) = (Number of slides found positive / Number of slides examined) × 100. An SPR >1% indicates intense transmission and triggers intensified malaria control measures. SPR is distinct from Annual Parasite Incidence (API = confirmed malaria cases per 1000 population per year, high-risk if API >2).",
  },
  {
    id: 7514,
    subject: "PSM/Community Medicine",
    stem: "For treatment of uncomplicated Plasmodium falciparum malaria under NVBDCP, what is the first-line treatment regimen in India?",
    options: [
      "Chloroquine for 3 days",
      "Artesunate + Sulphadoxine-Pyrimethamine (AS+SP)",
      "Artemether-Lumefantrine (AL) — Artemisinin Combination Therapy",
      "Mefloquine monotherapy",
    ],
    answer: 2,
    explanation:
      "The first-line treatment for uncomplicated P. falciparum malaria in India under NVBDCP is Artemisinin Combination Therapy (ACT) with Artemether-Lumefantrine (AL), given twice daily for 3 days. Chloroquine is no longer used for P. falciparum due to widespread resistance. Primaquine (single dose 0.75 mg/kg) is added on day 2 as a gametocidal drug.",
  },
  {
    id: 7515,
    subject: "PSM/Community Medicine",
    stem: "Dengue NS1 antigen is the best diagnostic test in which phase of illness, and IgM ELISA becomes positive after what duration of fever?",
    options: [
      "NS1 best in first 5 days; IgM becomes positive after day 5",
      "NS1 best after day 7; IgM best in first 3 days",
      "Both NS1 and IgM are equally useful throughout the illness",
      "NS1 is useful in secondary infection; IgM in primary infection",
    ],
    answer: 0,
    explanation:
      "NS1 (Non-structural protein 1) antigen is secreted by dengue virus-infected cells and is detectable from day 1 to day 5 of fever — best for early/acute diagnosis. After day 5, IgM antibodies appear (detectable by ELISA), making IgM ELISA the preferred test for late presentation. NS1 sensitivity drops significantly after day 5 as viral load decreases.",
  },
  {
    id: 7516,
    subject: "PSM/Community Medicine",
    stem: "According to WHO 2009 classification, which of the following is a 'warning sign' in dengue that indicates the patient needs close monitoring and possible hospitalisation?",
    options: [
      "Fever for 3 days",
      "Positive tourniquet test",
      "Abdominal pain or tenderness",
      "Leukopenia (WBC <5000/mm³)",
    ],
    answer: 2,
    explanation:
      "WHO 2009 dengue warning signs include: abdominal pain or tenderness, persistent vomiting, clinical fluid accumulation (ascites, pleural effusion), mucosal bleed, lethargy/restlessness, liver enlargement >2 cm, and rapid decrease in platelets with concurrent rise in haematocrit. These indicate 'dengue with warning signs' requiring hospitalisation. Positive tourniquet test and leukopenia are features of dengue without warning signs.",
  },
  {
    id: 7517,
    subject: "PSM/Community Medicine",
    stem: "Kala-azar (Visceral Leishmaniasis) is targeted for elimination in India. What is the elimination threshold, which vector transmits it, and what is the recommended first-line treatment?",
    options: [
      "< 1 case per 10,000 population; Anopheles mosquito; Chloroquine",
      "< 1 case per 10,000 population; Phlebotomus argentipes (sandfly); Liposomal Amphotericin B (AmBisome)",
      "Zero cases; Culex mosquito; Miltefosine",
      "< 1 case per 1,00,000 population; Phlebotomus argentipes; Pentamidine",
    ],
    answer: 1,
    explanation:
      "The elimination target for kala-azar (Visceral Leishmaniasis caused by Leishmania donovani) is <1 case per 10,000 population at sub-district (block) level. The vector is Phlebotomus argentipes (female sandfly). First-line treatment in India is single-dose Liposomal Amphotericin B (AmBisome) — 10 mg/kg IV. Miltefosine (oral) is used as second-line. rK39 rapid diagnostic test is used for field diagnosis.",
  },
  {
    id: 7518,
    subject: "PSM/Community Medicine",
    stem: "Under NPCDCS, which screening method is recommended for cervical cancer at the primary health care level due to its simplicity and low cost?",
    options: [
      "Pap smear (conventional cytology)",
      "Liquid-based cytology",
      "Visual Inspection with Acetic Acid (VIA) and/or Lugol's Iodine (VILI)",
      "HPV DNA testing",
    ],
    answer: 2,
    explanation:
      "Under NPCDCS, the 'screen-and-treat' approach uses Visual Inspection with Acetic Acid (VIA) and Lugol's Iodine (VILI) at the primary health care level. These are simple, low-cost, point-of-care tests requiring no laboratory infrastructure. VIA identifies acetowhite areas (precancerous lesions appear white after 3–5% acetic acid application). VILI uses Lugol's iodine (normal cervical cells stain dark brown; abnormal cells appear mustard yellow).",
  },
  {
    id: 7519,
    subject: "PSM/Community Medicine",
    stem: "Janani Suraksha Yojana (JSY) is a conditional cash transfer programme. What is its primary objective and who is eligible for cash benefits?",
    options: [
      "Free antenatal care for all pregnant women; all pregnant women eligible",
      "Cash incentive to promote institutional delivery; all BPL pregnant women and women from low-performing states",
      "Free medicines during pregnancy; only tribal pregnant women",
      "Emergency transport to hospital; only rural pregnant women",
    ],
    answer: 1,
    explanation:
      "JSY (Janani Suraksha Yojana) under NHM is a conditional cash transfer programme aimed at promoting institutional deliveries to reduce maternal and neonatal mortality. Cash benefits: in low-performing states (LPS) — rural ₹1400, urban ₹1000; in high-performing states (HPS) — rural ₹700, urban ₹600. Eligibility: all BPL pregnant women in HPS; in LPS, all pregnant women up to 2 live births are eligible regardless of BPL status.",
  },
  {
    id: 7520,
    subject: "PSM/Community Medicine",
    stem: "Pradhan Mantri Suraksha Matritva Abhiyan (PMSMA) provides free and assured antenatal care on which fixed day of every month?",
    options: ["1st of every month", "9th of every month", "15th of every month", "Last day of every month"],
    answer: 1,
    explanation:
      "PMSMA (Pradhan Mantri Suraksha Matritva Abhiyan) was launched in 2016 to ensure quality antenatal care to all pregnant women on the 9th of every month at government health facilities. It provides free ANC services including obstetric and other specialist consultations, laboratory investigations, and ultrasound. The 'fixed day, fixed site' approach ensures predictability.",
  },
  {
    id: 7521,
    subject: "PSM/Community Medicine",
    stem: "JSSK (Janani Shishu Suraksha Karyakram) entitles pregnant women to free services at government facilities. Which of the following is NOT covered under JSSK?",
    options: [
      "Free normal and caesarean delivery",
      "Free drugs and consumables",
      "Free blood transfusion",
      "Cash incentive after delivery",
    ],
    answer: 3,
    explanation:
      "JSSK (launched 2011) entitles pregnant women in government facilities to: (1) free and cashless delivery (normal and caesarean), (2) free drugs and consumables, (3) free diagnostics, (4) free blood transfusion, (5) free diet during stay, (6) free transport from home to facility, between facilities, and drop-back after delivery, (7) exemption from user charges. JSSK does not provide a cash incentive — that is JSY. The combination of JSY (cash) + JSSK (free services) aims to eliminate all out-of-pocket expenses.",
  },
  {
    id: 7522,
    subject: "PSM/Community Medicine",
    stem: "Under ANC protocol, IFA (Iron and Folic Acid) supplementation should be given for a minimum of how many days during pregnancy?",
    options: ["90 days", "120 days", "150 days", "180 days"],
    answer: 3,
    explanation:
      "Under India's ANC guidelines, IFA supplementation (containing 60 mg elemental iron + 500 mcg folic acid per tablet) should be given for a minimum of 180 days during pregnancy. This is to ensure adequate iron stores for the growing fetus and prevent iron-deficiency anaemia in the mother. The supplementation should ideally start from the first trimester.",
  },
  {
    id: 7523,
    subject: "PSM/Community Medicine",
    stem: "POSHAN 2.0 (PM's Overarching Scheme for Holistic Nutrition) is an umbrella scheme. Which of the following programmes was MERGED under POSHAN 2.0?",
    options: [
      "Mid-Day Meal and National Iron Plus Initiative",
      "ICDS (Integrated Child Development Services) and PMMVY",
      "NTEP and NPCDCS",
      "JSY and PMSMA",
    ],
    answer: 1,
    explanation:
      "POSHAN 2.0 (launched 2021) merged and subsumed: (1) ICDS (Integrated Child Development Services), (2) PMMVY (Pradhan Mantri Matru Vandana Yojana — cash transfer for first live birth), (3) National Creche Scheme, and related nutrition schemes. It aims to address malnutrition with a life-cycle approach focusing on children 0–6 years, adolescent girls, pregnant women, and lactating mothers.",
  },
  {
    id: 7524,
    subject: "PSM/Community Medicine",
    stem: "ICDS (Integrated Child Development Services) provides six services. Which of the following is NOT one of the services provided by ICDS?",
    options: [
      "Supplementary nutrition",
      "Pre-school non-formal education",
      "Primary school education (6–14 years)",
      "Nutrition and health education",
    ],
    answer: 2,
    explanation:
      "ICDS provides six services to children 0–6 years and pregnant/lactating mothers: (1) Supplementary nutrition, (2) Immunisation, (3) Health check-up, (4) Referral services, (5) Pre-school non-formal education (3–6 years), and (6) Nutrition and health education. Primary school education (6–14 years) is NOT an ICDS service — it falls under the Right to Education Act and the Mid-Day Meal scheme.",
  },
  {
    id: 7525,
    subject: "PSM/Community Medicine",
    stem: "A child is admitted with Severe Acute Malnutrition (SAM). What is the correct therapeutic feeding sequence using the WHO F-75 and F-100 protocol?",
    options: [
      "F-100 first to rapidly rebuild nutrition, then F-75 for maintenance",
      "F-75 first (stabilisation phase) to prevent refeeding syndrome, then F-100 (rehabilitation phase)",
      "RUTF from day 1 without initial stabilisation milk",
      "Solid food immediately if the child is not vomiting",
    ],
    answer: 1,
    explanation:
      "SAM management follows a 10-step protocol with two phases: (1) Stabilisation phase (days 1–7): F-75 therapeutic milk (75 kcal/100 mL, low protein, low sodium) is given to prevent hypoglycaemia and refeeding syndrome; (2) Rehabilitation phase (weeks 2–6): F-100 therapeutic milk (100 kcal/100 mL, high protein) is introduced to achieve rapid catch-up growth. RUTF (Ready-to-Use Therapeutic Food) is used in the rehabilitation phase for uncomplicated SAM at community level.",
  },
  {
    id: 7526,
    subject: "PSM/Community Medicine",
    stem: "Incidence rate measures new cases of disease occurring in a population over a specified time period. Which formula correctly represents the incidence rate?",
    options: [
      "Existing cases / Total population × 1000",
      "New cases / Population at risk × Time period",
      "Deaths from disease / Cases of disease × 100",
      "New cases / (New cases + Old cases) × 100",
    ],
    answer: 1,
    explanation:
      "Incidence rate = (Number of new cases occurring in a population during a specified time period) / (Population at risk during that time period) × multiplier (usually 1000 or 100,000). The denominator must be the 'population at risk' (those who could develop the disease — existing cases are excluded). This differs from prevalence, which includes existing (old) cases in the numerator and total population in the denominator.",
  },
  {
    id: 7527,
    subject: "PSM/Community Medicine",
    stem: "Secondary Attack Rate (SAR) is an important epidemiological measure in outbreak investigations. What is the correct formula for SAR?",
    options: [
      "All new cases / Total population × 100",
      "Secondary cases / Total susceptible contacts exposed × 100",
      "Deaths / Total cases × 100",
      "New cases in second wave / New cases in first wave × 100",
    ],
    answer: 1,
    explanation:
      "Secondary Attack Rate (SAR) = (Number of secondary cases among susceptible contacts) / (Total number of susceptible contacts exposed) × 100. SAR measures the contagiousness or transmissibility of a disease within households or close contacts. It differs from the basic reproduction number (R0) which measures transmission in a fully susceptible population without interventions.",
  },
  {
    id: 7528,
    subject: "PSM/Community Medicine",
    stem: "Case Fatality Rate (CFR) is distinct from Proportional Mortality Ratio (PMR). Which of the following correctly differentiates these two measures?",
    options: [
      "CFR = Deaths from disease / All deaths × 100; PMR = Deaths from disease / Cases of disease × 100",
      "CFR = Deaths from disease / Cases of disease × 100; PMR = Deaths from specific cause / All deaths × 100",
      "CFR and PMR are the same measure expressed differently",
      "CFR uses population at risk; PMR uses total population",
    ],
    answer: 1,
    explanation:
      "Case Fatality Rate (CFR) = (Deaths from a specific disease / Number of cases of that disease) × 100. It measures the severity (lethality) of a disease. Proportional Mortality Ratio (PMR) = (Deaths from a specific cause / All deaths from all causes) × 100. PMR reflects the relative importance of a cause of death in the total mortality. High CFR indicates a lethal disease; high PMR indicates a common cause of death.",
  },
  {
    id: 7529,
    subject: "PSM/Community Medicine",
    stem: "A Kaplan-Meier survival curve is constructed for cancer patients. A censored observation in this curve represents:",
    options: [
      "A patient who died during follow-up",
      "A patient who had disease recurrence",
      "A patient lost to follow-up, withdrawn, or study ended before the event occurred",
      "A patient who was excluded due to protocol violation",
    ],
    answer: 2,
    explanation:
      "In Kaplan-Meier survival analysis, a censored observation is one where the patient's exact event time is unknown — the patient was lost to follow-up, withdrew consent, died from an unrelated cause, or the study ended before they experienced the event of interest. Censored observations contribute partial information (they were event-free up to their last contact) and are represented as tick marks on the Kaplan-Meier curve.",
  },
  {
    id: 7530,
    subject: "PSM/Community Medicine",
    stem: "In a randomised controlled trial, a Hazard Ratio (HR) of 0.65 (95% CI: 0.45–0.90) for the treatment group compared to placebo means:",
    options: [
      "The treatment group has 65% higher risk of the outcome",
      "The treatment reduces the instantaneous risk of the event by 35% at any given time point",
      "The treatment has no significant effect since HR is not 1.0",
      "The treatment group survived 35% longer on average",
    ],
    answer: 1,
    explanation:
      "A Hazard Ratio (HR) of 0.65 means the instantaneous risk (hazard) of the event occurring in the treatment group at any given time is 65% of that in the control group — a 35% reduction in risk. Since the 95% CI (0.45–0.90) does not include 1.0, the result is statistically significant. HR is used in survival analysis (Cox proportional hazards model) and represents the ratio of hazard rates at any point in time.",
  },
  {
    id: 7531,
    subject: "PSM/Community Medicine",
    stem: "In a clinical trial, Intention-to-Treat (ITT) analysis is used. Which of the following best describes the advantage of ITT analysis?",
    options: [
      "It includes only compliant patients, giving a more accurate estimate of biological efficacy",
      "It analyses all randomised patients in the groups they were randomised to, preserving the benefits of randomisation and preventing attrition bias",
      "It is the same as per-protocol analysis",
      "It excludes patients who withdrew consent, reducing sample size bias",
    ],
    answer: 1,
    explanation:
      "ITT (Intention-to-Treat) analysis includes ALL randomised participants in the groups to which they were randomised, regardless of protocol adherence, dropout, or crossover. This preserves the benefits of randomisation (baseline comparability), prevents attrition bias, and provides a conservative estimate of effectiveness in real-world conditions. Per-protocol analysis excludes non-compliant patients and estimates efficacy under ideal conditions but is susceptible to selection bias.",
  },
  {
    id: 7532,
    subject: "PSM/Community Medicine",
    stem: "The Number Needed to Treat (NNT) is calculated as 1/ARR, where ARR is the Absolute Risk Reduction. If the event rate is 20% in the control group and 12% in the treatment group, what is the NNT?",
    options: ["5", "12.5", "8.33", "1.67"],
    answer: 1,
    explanation:
      "ARR (Absolute Risk Reduction) = Control Event Rate − Experimental Event Rate = 20% − 12% = 8% = 0.08. NNT = 1/ARR = 1/0.08 = 12.5. This means 12.5 patients need to be treated to prevent one additional event. NNT < 10 is generally considered clinically significant. RRR (Relative Risk Reduction) = ARR/Control rate = 0.08/0.20 = 40%.",
  },
  {
    id: 7533,
    subject: "PSM/Community Medicine",
    stem: "An epidemic curve shows a single narrow peak with rapid rise and rapid fall over 2–3 days. All cases cluster within one incubation period. This pattern is characteristic of:",
    options: [
      "Propagated/person-to-person epidemic",
      "Common source point epidemic",
      "Continuous common source epidemic",
      "Mixed epidemic",
    ],
    answer: 1,
    explanation:
      "A common source point epidemic occurs when all cases are exposed simultaneously to the same source (e.g., contaminated food at a party). The epidemic curve shows a single, sharp, narrow peak with all cases occurring within one maximum incubation period of each other. Propagated epidemics show multiple waves at intervals of approximately one incubation period. Continuous common source epidemics show a plateau as exposure continues over time.",
  },
  {
    id: 7534,
    subject: "PSM/Community Medicine",
    stem: "During an outbreak investigation, which of the following is the CORRECT sequence of steps?",
    options: [
      "Control measures → Case finding → Verify diagnosis → Epidemiological analysis",
      "Verify diagnosis → Confirm outbreak → Case definition → Case finding → Epidemiological analysis → Hypothesis → Test hypothesis → Control measures → Report",
      "Form hypothesis → Case definition → Verify diagnosis → Control measures",
      "Notify authorities → Treat cases → Investigate source → Report",
    ],
    answer: 1,
    explanation:
      "The standard steps of outbreak investigation are: (1) Verify the diagnosis, (2) Confirm the outbreak (compare with expected baseline), (3) Establish a case definition, (4) Case finding (active surveillance), (5) Descriptive epidemiology (time, place, person), (6) Formulate hypothesis, (7) Test hypothesis (analytical study — case-control or cohort), (8) Implement control measures, (9) Communicate findings (report). Control measures may be implemented early even before hypothesis testing if the source is obvious.",
  },
  {
    id: 7535,
    subject: "PSM/Community Medicine",
    stem: "CONSORT (Consolidated Standards of Reporting Trials) checklist is used for:",
    options: [
      "Reporting systematic reviews and meta-analyses",
      "Assessing risk of bias in observational studies",
      "Reporting randomised controlled trials",
      "Grading the quality of evidence in clinical guidelines",
    ],
    answer: 2,
    explanation:
      "CONSORT is a reporting guideline for Randomised Controlled Trials (RCTs). It includes a 25-item checklist and a flow diagram covering: title, abstract, introduction, methods (randomisation, allocation concealment, blinding, outcomes), results (participant flow, baseline data, outcomes, harms), and discussion. For systematic reviews: PRISMA. For observational studies: STROBE. For evidence grading: GRADE.",
  },
  {
    id: 7536,
    subject: "PSM/Community Medicine",
    stem: "Allocation concealment in a randomised controlled trial is used to prevent:",
    options: [
      "Performance bias after randomisation",
      "Selection bias during the randomisation process by preventing investigators from predicting upcoming assignments",
      "Attrition bias due to dropouts",
      "Detection bias during outcome assessment",
    ],
    answer: 1,
    explanation:
      "Allocation concealment ensures that the persons responsible for enrolling participants cannot foresee the upcoming treatment assignment, preventing them from selectively enrolling participants (selection bias). Methods include central randomisation, sealed opaque envelopes, or computerised randomisation systems. This is distinct from blinding, which prevents participants and/or investigators from knowing the assigned treatment AFTER randomisation (prevents performance and detection bias).",
  },
  {
    id: 7537,
    subject: "PSM/Community Medicine",
    stem: "Under the PPTCT programme (Prevention of Parent-to-Child Transmission of HIV), Option B+ refers to:",
    options: [
      "ART only during labour and delivery",
      "Lifelong ART for all HIV-positive pregnant women regardless of CD4 count, continued after delivery",
      "ART from 14 weeks gestation until 1 week postpartum",
      "Prophylactic Nevirapine only to the infant",
    ],
    answer: 1,
    explanation:
      "Option B+ means ALL HIV-positive pregnant and breastfeeding women start lifelong ART (regardless of CD4 count or clinical stage) and continue for life, even after delivery and after cessation of breastfeeding. This is the standard adopted globally and in India. It simplifies the programme, prevents MTCT during breastfeeding, and benefits the mother's own health. The infant also receives prophylactic Nevirapine for 6 weeks.",
  },
  {
    id: 7538,
    subject: "PSM/Community Medicine",
    stem: "NHM (National Health Mission) was formed by merging NRHM and NUHM. In which year did this merger take place?",
    options: ["2005", "2010", "2013", "2018"],
    answer: 2,
    explanation:
      "NRHM (National Rural Health Mission) was launched in 2005. NHM was established in 2013 by subsuming NRHM and creating NUHM (National Urban Health Mission) as its urban component, under the broader NHM umbrella. NHM focuses on strengthening rural and urban healthcare infrastructure, human resources, and outreach to achieve health equity.",
  },
  {
    id: 7539,
    subject: "PSM/Community Medicine",
    stem: "Active case detection for malaria involves which strategy compared to passive case detection?",
    options: [
      "Patients self-presenting to health facilities for fever — treated passively",
      "Health workers visiting households in high-risk areas to screen febrile individuals — proactive approach",
      "Testing all migrants at border points",
      "Blood smear examination of all hospitalised patients",
    ],
    answer: 1,
    explanation:
      "Active case detection (ACD) involves health workers proactively visiting homes in high-risk or epidemic areas to screen febrile individuals or all members of at-risk households. Passive case detection (PCD) relies on febrile patients self-presenting to health facilities. ACD is more sensitive in finding cases in areas with poor health-seeking behaviour but is resource-intensive. Both methods are used under NVBDCP depending on transmission intensity.",
  },
  {
    id: 7540,
    subject: "PSM/Community Medicine",
    stem: "What is the key difference between point prevalence and period prevalence?",
    options: [
      "Point prevalence uses new cases; period prevalence uses existing cases",
      "Point prevalence measures disease at a single point in time; period prevalence covers all cases existing during a specified time interval",
      "Point prevalence is always higher than period prevalence",
      "Period prevalence excludes deaths and recoveries during the period",
    ],
    answer: 1,
    explanation:
      "Point prevalence = (Number of cases at a specific point in time / Total population at that point) × 100. Period prevalence = (Number of cases existing at any time during a specified period / Average population during the period) × 100. Period prevalence is always ≥ point prevalence as it includes all cases present at the start of the period PLUS new cases developing during the period. Period prevalence is useful for diseases with longer durations.",
  },
  {
    id: 7541,
    subject: "PSM/Community Medicine",
    stem: "The Pradhan Mantri TB Mukt Bharat Abhiyan (PMTBMBA) involves the concept of 'Ni-kshay Mitras'. What is the role of Ni-kshay Mitras?",
    options: [
      "Government health workers who conduct contact tracing for TB",
      "Donors (individuals, corporates, institutions) who adopt TB patients and provide nutritional support beyond DBT",
      "Community volunteers who accompany TB patients to DOTS centres",
      "Laboratory technicians performing GeneXpert testing",
    ],
    answer: 1,
    explanation:
      "Pradhan Mantri TB Mukt Bharat Abhiyan (PMTBMBA, launched 2022) introduced the concept of Ni-kshay Mitras — voluntary donors (individuals, elected representatives, corporates, NGOs, institutions) who 'adopt' notified TB patients and provide additional support beyond the Nikshay Poshan Yojana DBT. Support includes nutritional kits, vocational support, and emotional support. The portal (Nikshay) facilitates matching of donors with patients.",
  },
  {
    id: 7542,
    subject: "PSM/Community Medicine",
    stem: "A study uses Cox proportional hazards model for multivariate survival analysis. The key assumption of this model is:",
    options: [
      "All participants experience the event of interest",
      "The hazard ratio between any two groups remains constant over time (proportional hazards assumption)",
      "Survival follows a normal distribution",
      "All censored observations are lost to follow-up",
    ],
    answer: 1,
    explanation:
      "The Cox proportional hazards model assumes that the ratio of hazards between any two groups (e.g., treatment vs control) remains constant over time — the 'proportional hazards assumption.' This means the hazard function for any subject is a fixed proportion of the baseline hazard. This can be tested by examining log-log survival plots or Schoenfeld residuals. The log-rank test compares two survival curves without this assumption.",
  },
  {
    id: 7543,
    subject: "PSM/Community Medicine",
    stem: "In the context of antenatal care, WHO now recommends a minimum of how many ANC contacts (revised from 4), and what is India's enhanced ANC+ package approach?",
    options: [
      "6 contacts; India follows exactly 6 contacts",
      "8 contacts; India's ANC+ package emphasises quality with 4 visits minimum but targets 8 contacts",
      "4 contacts; India reduced to 4 from 8",
      "12 contacts; monthly visits throughout pregnancy",
    ],
    answer: 1,
    explanation:
      "WHO 2016 guidelines recommend 8 ANC contacts (replacing the previous 4-visit focused ANC model), with additional contacts at 20, 26, 30, 34, 36, 38, and 40 weeks gestation. India's ANC+ package targets these 8 contacts while setting a minimum of 4 ANC visits, with specific services at each visit. The 8-contact model is associated with better perinatal outcomes including reduced perinatal deaths.",
  },
  {
    id: 7544,
    subject: "PSM/Community Medicine",
    stem: "MUAC (Mid-Upper Arm Circumference) tape is used to assess nutritional status in children. What MUAC measurement (in cm) indicates Severe Acute Malnutrition (SAM) in children aged 6–59 months?",
    options: [
      "< 12.5 cm",
      "< 11.5 cm",
      "< 13.5 cm",
      "< 10.0 cm",
    ],
    answer: 1,
    explanation:
      "MUAC criteria for children 6–59 months: SAM = MUAC <11.5 cm (red on MUAC tape), MAM (Moderate Acute Malnutrition) = MUAC 11.5–12.5 cm (yellow), Normal = MUAC ≥12.5 cm (green). MUAC is particularly useful for community-level screening as it requires minimal training, has high sensitivity for identifying children at risk of death, and does not require knowledge of the child's age.",
  },
  {
    id: 7545,
    subject: "PSM/Community Medicine",
    stem: "The Sub-Centre is the most peripheral contact point between the primary health care system and the community. Which health workers are posted at the sub-centre level?",
    options: [
      "One MBBS Doctor and one ANM",
      "One ANM (Female Health Worker) and one Male Health Worker (MPW-M); one additional ANM for large sub-centres",
      "Two ANMs and one ASHA",
      "One LHV (Lady Health Visitor) and one MPW-M",
    ],
    answer: 1,
    explanation:
      "The Sub-Centre serves a population of 5,000 in plains (3,000 in hilly/tribal areas) and has: one ANM (Auxiliary Nurse Midwife, Female Health Worker) and one Male Health Worker (MPW-M). An additional ANM is posted at Sub-Centres with high workload. The ANM provides maternal and child health services, family planning, and immunisation. ASHA workers are community-based volunteers, not posted at sub-centres.",
  },
  {
    id: 7546,
    subject: "PSM/Community Medicine",
    stem: "Long-Lasting Insecticidal Nets (LLINs) used for malaria prevention are impregnated with which class of insecticides and are effective for how long?",
    options: [
      "Organophosphates; 1 year",
      "Pyrethroids; 3 years or 20 washes",
      "DDT; 5 years",
      "Carbamates; 2 years",
    ],
    answer: 1,
    explanation:
      "LLINs (Long-Lasting Insecticidal Nets) are factory-treated with pyrethroids (e.g., permethrin, deltamethrin, lambda-cyhalothrin) incorporated into or coated on the net fibres. They retain insecticidal efficacy for ≥3 years under field conditions or ≥20 standard washes. Unlike conventional ITNs (insecticide-treated nets) which require re-treatment every 6–12 months, LLINs are cost-effective and operationally simpler.",
  },
  {
    id: 7547,
    subject: "PSM/Community Medicine",
    stem: "In dengue prevention, Aedes aegypti breeding sites are best controlled by eliminating:",
    options: [
      "Stagnant water bodies like ponds and marshes",
      "Small collections of clean, stagnant water in man-made containers (tyres, flower pots, water coolers, overhead tanks)",
      "Slow-flowing streams and rivers",
      "Underground sewers and drainage systems",
    ],
    answer: 1,
    explanation:
      "Aedes aegypti is a domestic mosquito that breeds in small collections of clean, stagnant water in artificial containers — tyres, flower pots, water storage drums, cooler trays, discarded cups, and tanks. It does NOT breed in large water bodies. Control measures include: source reduction (eliminating containers), Abatisation (using Temephos larvicide in water tanks), biological control (Bti, copepods, Gambusia fish), and community education. Aedes albopictus also transmits dengue and breeds in a wider range of habitats.",
  },
  {
    id: 7548,
    subject: "PSM/Community Medicine",
    stem: "The rK39 rapid diagnostic test for kala-azar detects:",
    options: [
      "Leishmania DNA by PCR",
      "Anti-rK39 IgG antibodies against Leishmania donovani recombinant antigen",
      "Leishmania amastigotes in blood smear",
      "Complement fixation against leishmanial antigen (Aldehyde test)",
    ],
    answer: 1,
    explanation:
      "The rK39 rapid diagnostic test (immunochromatographic strip test) detects IgG antibodies against the rK39 recombinant antigen of Leishmania donovani. It has high sensitivity (93–100%) and specificity (95–98%) in the Indian subcontinent. It is used as the primary diagnostic tool for kala-azar in the field setting. The Aldehyde (formol-gel) test is a non-specific test for elevated gamma-globulin but has been replaced. Tissue diagnosis by splenic aspirate is gold standard.",
  },
  {
    id: 7549,
    subject: "PSM/Community Medicine",
    stem: "Under India's UIP, which vaccines are administered at the 6-week visit (first contact after birth)?",
    options: [
      "OPV1 + DPT1 + Hep B2 only",
      "OPV1 + IPV1 + DPT1 + Hep B2 + Hib1 + Rotavirus 1 + PCV1",
      "OPV1 + DPT1 + Hib1 + Rotavirus 1 only",
      "OPV1 + IPV1 + DPT1 + Hep B2 + MR1",
    ],
    answer: 1,
    explanation:
      "At 6 weeks, the UIP schedule includes 7 vaccines/antigens: OPV dose 1, IPV dose 1 (injectable polio vaccine), DPT dose 1 (diphtheria-pertussis-tetanus), Hepatitis B dose 2, Hib dose 1 (Haemophilus influenzae type b), Rotavirus dose 1, and PCV dose 1 (pneumococcal conjugate vaccine). The same set is repeated at 10 weeks (doses 2) and 14 weeks (doses 3). MR1 is given at 9 months.",
  },
  {
    id: 7550,
    subject: "PSM/Community Medicine",
    stem: "NHM's ASHA (Accredited Social Health Activist) is described as 'incentive-based' rather than salaried. What is the duration of her training under NHM guidelines?",
    options: [
      "3 months residential training",
      "9 months induction training (spread over time) with ongoing refresher modules",
      "6 weeks intensive training",
      "2 years diploma in community health",
    ],
    answer: 1,
    explanation:
      "ASHA undergoes 23 days of induction training spread over 12 months (totalling approximately 9 months of training spread over time in a phased manner with 5 training modules). She is selected by the Gram Sabha, should be a resident of the village, preferably married/widowed/divorced, aged 25–45 years, with at least 8th standard education. She is not a government employee and receives performance-based incentives for specific tasks.",
  },
  {
    id: 7551,
    subject: "Anatomy",
    stem: "During a hepatobiliary surgical procedure, the surgeon identifies Couinaud segment I of the liver. Segment I (caudate lobe) has a unique anatomical characteristic regarding its venous drainage. Which of the following is correct?",
    options: [
      "It drains exclusively into the right hepatic vein",
      "It drains directly into the inferior vena cava (IVC) independently, not via the main hepatic veins",
      "It drains into the portal vein",
      "It drains via the middle hepatic vein only",
    ],
    answer: 1,
    explanation:
      "Couinaud segment I (caudate lobe) has unique anatomy: it drains directly into the IVC via multiple small hepatic veins, independent of the three main hepatic veins (right, middle, left). This is why segment I can survive portal hypertension causing Budd-Chiari syndrome — it maintains venous drainage even when the main hepatic veins are occluded. This also makes segment I resection technically challenging. The caudate lobe also receives portal blood from both right and left portal pedicles.",
  },
  {
    id: 7552,
    subject: "Anatomy",
    stem: "In Couinaud's segmental anatomy of the liver, the left lateral section (segments II and III) is separated from the left medial section (segment IV) by which landmark?",
    options: [
      "The middle hepatic vein",
      "The falciform ligament and the left hepatic vein",
      "The ligamentum teres and the left hepatic vein (umbilical fissure)",
      "The right hepatic vein",
    ],
    answer: 2,
    explanation:
      "In Couinaud's system: Segments II and III (left lateral section) are separated from Segment IV (left medial section) by the umbilical fissure, which contains the ligamentum teres (obliterated umbilical vein) and the left hepatic vein. Segment IV (quadrate lobe) lies between the falciform ligament/umbilical fissure and the gallbladder fossa. The middle hepatic vein separates the left and right liver lobes (between segments IV and V/VIII).",
  },
  {
    id: 7553,
    subject: "Anatomy",
    stem: "A patient develops portal hypertension due to liver cirrhosis. Which portosystemic anastomosis is responsible for oesophageal varices, and what vessels are involved?",
    options: [
      "Superior rectal vein (portal) anastomoses with inferior rectal vein (systemic)",
      "Left gastric (coronary) vein (portal) anastomoses with oesophageal tributaries of azygous vein (systemic)",
      "Paraumbilical veins (portal) anastomose with epigastric veins (systemic)",
      "Splenic vein (portal) anastomoses with left renal vein (systemic)",
    ],
    answer: 1,
    explanation:
      "Oesophageal varices form at the porto-systemic anastomosis in the lower oesophagus: left gastric vein (also called coronary vein, portal system) ↔ oesophageal tributaries of the azygous/hemiazygous venous system (systemic). This is the most clinically dangerous anastomosis as varices here can rupture causing life-threatening haematemesis. Other anastomoses: haemorrhoids (superior rectal [portal] ↔ inferior rectal [systemic]); caput medusae (paraumbilical ↔ epigastric); splenorenal (retroperitoneal).",
  },
  {
    id: 7554,
    subject: "Anatomy",
    stem: "A replaced right hepatic artery is a common hepatic artery variant. From which vessel does it most commonly arise, and what is its surgical significance?",
    options: [
      "Arises from the left gastric artery; at risk in gastrectomy",
      "Arises from the superior mesenteric artery (SMA); at risk in pancreaticoduodenectomy and liver transplant",
      "Arises from the right gastric artery; at risk in cholecystectomy",
      "Arises from the gastroduodenal artery; at risk in duodenal surgery",
    ],
    answer: 1,
    explanation:
      "A replaced right hepatic artery (present in ~15% of people) arises from the Superior Mesenteric Artery (SMA) instead of the proper hepatic artery. It runs posterior to the portal vein and behind/through the head of the pancreas. It is at significant risk during: (1) Pancreaticoduodenectomy (Whipple procedure) — the artery passes through the dissection field; (2) Liver transplantation — must be identified and preserved/reconstructed. A replaced left hepatic artery arises from the left gastric artery (~15%), at risk during gastrectomy.",
  },
  {
    id: 7555,
    subject: "Anatomy",
    stem: "During a hysterectomy, the ureter is most commonly injured at which anatomical point, and what is the surgical mnemonic to remember this relationship?",
    options: [
      "Where it crosses the bifurcation of the aorta — 'water over the bridge'",
      "Where it passes under the uterine artery ('water under the bridge') — approximately 1.5 cm lateral to the cervix",
      "Where it enters the bladder trigone",
      "Where it crosses the pelvic brim over the common iliac artery",
    ],
    answer: 1,
    explanation:
      "The ureter is most commonly injured during hysterectomy where it passes under the uterine artery approximately 1.5 cm lateral to the cervix — 'water under the bridge' (ureter = water, uterine artery = bridge). The ureter runs in the broad ligament, crosses the pelvic brim at the bifurcation of the common iliac artery, then turns anteromedially to enter the bladder. It passes medial to the ovarian fossa and lateral to the rectum in the pelvis. Careful identification before clamping the uterine artery is essential.",
  },
  {
    id: 7556,
    subject: "Anatomy",
    stem: "The pudendal nerve provides sensory and motor supply to the perineum. Its course through which anatomical canal makes pudendal nerve block effective, and which spinal levels contribute to it?",
    options: [
      "Passes through the obturator canal (L2-L4); block performed at obturator foramen",
      "Passes through Alcock's canal (pudendal canal) in the lateral wall of the ischiorectal fossa (S2-S4); block at ischial spine",
      "Passes through the greater sciatic foramen only (S1-S3); block at piriformis",
      "Passes through the lesser sciatic foramen (L4-S1); block at sacrospinous ligament",
    ],
    answer: 1,
    explanation:
      "The pudendal nerve (S2, S3, S4 — 'S2, 3, 4 keep the pelvic floor off the floor') exits through the greater sciatic foramen (below piriformis), loops around the ischial spine and sacrospinous ligament, and re-enters through the lesser sciatic foramen to run in Alcock's canal (pudendal canal — a fascial sheath in the lateral wall of the ischiorectal fossa). Pudendal nerve block is performed by injecting local anaesthetic near the ischial spine (transvaginal or transperineal approach), used for episiotomy repair and perineal surgery.",
  },
  {
    id: 7557,
    subject: "Anatomy",
    stem: "The levator ani muscle forms the pelvic diaphragm. Which of the following correctly lists the THREE components of levator ani?",
    options: [
      "Obturator internus, piriformis, coccygeus",
      "Pubococcygeus, iliococcygeus, puborectalis",
      "Pubococcygeus, puborectalis, sphincter urethrae",
      "Iliococcygeus, coccygeus, ischiocavernosus",
    ],
    answer: 1,
    explanation:
      "Levator ani has three parts: (1) Pubococcygeus — from pubis to coccyx, forms the majority of the pelvic floor, contains the pubovaginalis (in females) and puboprostaticus fibres; (2) Iliococcygeus — from arcus tendineus to coccyx; (3) Puborectalis — forms the anorectal sling, pulls the anorectal junction anteriorly maintaining the anorectal angle (~90°), crucial for faecal continence. Coccygeus is a separate posterior pelvic floor muscle. Levator ani is supplied by S3-S4 via the nerve to levator ani and the perineal branch of S4.",
  },
  {
    id: 7558,
    subject: "Anatomy",
    stem: "The accessory nerve (CN XI) is at risk in which surgical procedure when it traverses the posterior triangle of the neck?",
    options: [
      "Anterior cervical discectomy",
      "Posterior triangle lymph node biopsy or radical neck dissection",
      "Thyroidectomy",
      "Submandibular gland excision",
    ],
    answer: 1,
    explanation:
      "The accessory nerve (CN XI) crosses the posterior triangle of the neck relatively superficially, running from the posterior border of sternocleidomastoid (SCM) to the anterior border of trapezius. It supplies both SCM and trapezius (motor — shoulder elevation and head turning). It is at risk during: lymph node biopsy in the posterior triangle, modified radical neck dissection (Level V clearance), and iatrogenic injury. Damage causes 'shoulder drop' — inability to shrug the shoulder (trapezius paralysis) and weakness turning the head to the contralateral side.",
  },
  {
    id: 7559,
    subject: "Anatomy",
    stem: "During thyroidectomy, the recurrent laryngeal nerve (RLN) is identified in the tracheoesophageal groove. Which nerve is also at risk and runs with the superior thyroid artery?",
    options: [
      "Internal branch of the superior laryngeal nerve",
      "External branch of the superior laryngeal nerve (EBSLN)",
      "Ansa cervicalis",
      "Vagus nerve trunk",
    ],
    answer: 1,
    explanation:
      "The External Branch of the Superior Laryngeal Nerve (EBSLN) runs with the superior thyroid artery before branching near the superior pole of the thyroid. It supplies cricothyroid muscle (the only intrinsic laryngeal muscle NOT supplied by RLN), which is the tensor of the vocal cord. Injury to EBSLN causes loss of high-pitched voice (Amelita Galli-Curci syndrome — the opera singer). The internal branch of SLN is purely sensory (above the vocal cords) and does not run with the superior thyroid artery.",
  },
  {
    id: 7560,
    subject: "Anatomy",
    stem: "In thyroid surgery, which parathyroid glands are at GREATEST risk of inadvertent removal, and what is their embryological origin?",
    options: [
      "Superior parathyroids (from 3rd pharyngeal pouch) — more variable position",
      "Inferior parathyroids (from 3rd pharyngeal pouch) — more variable position due to longer migration during embryological development",
      "Both are equally at risk; both from 4th pharyngeal pouch",
      "Superior parathyroids (from 4th pouch) — situated deep to thyroid capsule",
    ],
    answer: 1,
    explanation:
      "The inferior parathyroid glands (from the 3rd pharyngeal pouch, same as thymus) migrate a longer distance during development, making their final position more variable. They can be found anywhere from the jaw to the mediastinum. This makes them more difficult to identify and more prone to inadvertent removal during thyroidectomy. Superior parathyroids (from 4th pharyngeal pouch) have a shorter migration and more consistent position (posterior to upper thyroid lobe). Inferior parathyroids are at greatest risk during inferior pole dissection.",
  },
  {
    id: 7561,
    subject: "Anatomy",
    stem: "The ansa cervicalis (ansa hypoglossi) is found in the anterior triangle of the neck. It supplies which muscles?",
    options: [
      "All strap muscles (omohyoid, sternohyoid, sternothyroid, thyrohyoid)",
      "Omohyoid, sternohyoid, and sternothyroid — but NOT thyrohyoid (supplied by hypoglossal nerve C1 fibres)",
      "Sternocleidomastoid and trapezius",
      "Geniohyoid and mylohyoid",
    ],
    answer: 1,
    explanation:
      "Ansa cervicalis (C1-C3) supplies the infrahyoid (strap) muscles: omohyoid, sternohyoid, and sternothyroid. Thyrohyoid is NOT supplied by ansa cervicalis — it is supplied by C1 nerve fibres that hitch a ride with the hypoglossal nerve (CN XII). Geniohyoid is supplied by C1 via the hypoglossal nerve. Mylohyoid is supplied by the nerve to mylohyoid (branch of inferior alveolar nerve from mandibular division of trigeminal). SCM and trapezius are supplied by CN XI (accessory nerve).",
  },
  {
    id: 7562,
    subject: "Anatomy",
    stem: "A patient presents with caput medusae (dilated periumbilical veins). This portosystemic anastomosis involves which vessels?",
    options: [
      "Superior epigastric (systemic) ↔ inferior epigastric (systemic) — no portal component",
      "Paraumbilical veins (portal system, running in the falciform ligament) ↔ superficial epigastric veins (systemic)",
      "Inferior mesenteric vein (portal) ↔ inferior epigastric (systemic)",
      "Splenic vein (portal) ↔ left renal vein (systemic)",
    ],
    answer: 1,
    explanation:
      "Caput medusae results from dilatation of the portal-systemic anastomosis around the umbilicus: paraumbilical veins (small veins running in the falciform ligament, tributaries of the left portal vein) ↔ superficial epigastric, thoracoepigastric, and inferior epigastric veins (systemic). Blood flows AWAY from the umbilicus (centrifugally) — this distinguishes caput medusae from IVC obstruction where flow is UPWARD. Spleno-renal shunt is a retroperitoneal anastomosis.",
  },
  {
    id: 7563,
    subject: "Anatomy",
    stem: "The external jugular vein (EJV) is formed by the union of which two veins and drains into which major vein?",
    options: [
      "Internal jugular and subclavian veins → brachiocephalic vein",
      "Posterior auricular vein and posterior division of retromandibular vein → subclavian vein",
      "Anterior facial vein and lingual vein → internal jugular vein",
      "Superficial temporal and maxillary veins → brachiocephalic vein",
    ],
    answer: 1,
    explanation:
      "The external jugular vein (EJV) is formed by the union of the: (1) Posterior auricular vein and (2) Posterior division of the retromandibular vein (the anterior division joins the facial vein to form the common facial vein, a tributary of the IJV). The EJV descends superficially across sternocleidomastoid, passes through the investing fascia, and drains into the subclavian vein. EJV is visible at the surface during raised JVP and is used for central venous access when other routes fail.",
  },
  {
    id: 7564,
    subject: "Anatomy",
    stem: "During a right hemicolectomy, the ureter must be identified. At what anatomical landmark does the right ureter cross the pelvic brim?",
    options: [
      "At the bifurcation of the right common iliac artery into external and internal iliac arteries",
      "At the origin of the right internal iliac artery from the aorta",
      "Where the right gonadal vessels cross anterior to it",
      "At the right sacroiliac joint",
    ],
    answer: 0,
    explanation:
      "The ureter crosses the pelvic brim at the bifurcation of the common iliac artery into the external and internal iliac arteries (L5/S1 level). This is a key landmark for identifying the ureter during pelvic surgery. The right ureter also crosses anterior to the right iliac vessels. Both ureters are crossed anteriorly by the gonadal vessels higher up (at the level of L2-L3), and this is where they can be confused with the gonadal vessels ('water pipes are deeper than blood pipes').",
  },
  {
    id: 7565,
    subject: "Anatomy",
    stem: "The brachial plexus roots (C5-T1) are accessible in the posterior triangle of the neck. Between which two muscles do the roots emerge before forming trunks?",
    options: [
      "Between sternocleidomastoid and omohyoid",
      "Between scalenus anterior and scalenus medius",
      "Between scalenus medius and scalenus posterior",
      "Between trapezius and levator scapulae",
    ],
    answer: 1,
    explanation:
      "The roots of the brachial plexus (C5-T1) emerge between the scalenus anterior and scalenus medius muscles to appear in the posterior triangle of the neck. The subclavian artery also passes between these two muscles (along with the lower trunk of brachial plexus). Cervical sympathetic chain, phrenic nerve (C3-C5), and subclavian vein are anterior to scalenus anterior. Thoracic outlet syndrome can occur due to compression here.",
  },
  {
    id: 7566,
    subject: "Physiology",
    stem: "A patient presents with vomiting and has the following ABG: pH 7.52, HCO3 32 mEq/L, pCO2 48 mmHg. Using Winter's formula equivalent for metabolic alkalosis, is the respiratory compensation appropriate?",
    options: [
      "Hypoventilation is appropriate — expected pCO2 = HCO3 × 0.9 + 9 = ~38 mmHg; actual is higher (48), suggesting respiratory acidosis on top",
      "Hypoventilation is appropriate — expected pCO2 for metabolic alkalosis = 0.7 × HCO3 + 21 ± 2 = ~43.4; pCO2 of 48 is slightly above the expected range, suggesting mild concurrent respiratory acidosis",
      "The pCO2 of 48 is normal, no compensation needed",
      "Expected pCO2 = 1.5 × HCO3 + 8 ± 2 = 56 mmHg, so 48 is undercompensation",
    ],
    answer: 1,
    explanation:
      "In metabolic alkalosis, the expected respiratory compensation (hypoventilation, CO2 retention) is: Expected pCO2 = 0.7 × HCO3 + 21 (± 2 mmHg). With HCO3 = 32: Expected pCO2 = 0.7 × 32 + 21 = 22.4 + 21 = 43.4 ± 2 (range 41.4–45.4). Actual pCO2 = 48, which is above the expected range, suggesting a concurrent respiratory acidosis. Winter's formula (1.5 × HCO3 + 8 ± 2) applies to METABOLIC ACIDOSIS compensation, not alkalosis.",
  },
  {
    id: 7567,
    subject: "Physiology",
    stem: "A patient has high anion gap metabolic acidosis. Using the MUDPILES mnemonic, which of the following causes should be considered when a patient presents with renal failure and an elevated creatinine?",
    options: [
      "Methanol toxicity",
      "Uraemia — accumulation of organic acids in renal failure",
      "Diabetic ketoacidosis",
      "Lactic acidosis",
    ],
    answer: 1,
    explanation:
      "MUDPILES: M-Methanol, U-Uraemia, D-DKA (Diabetic ketoacidosis), P-Propylene glycol/Paracetamol poisoning, I-Isoniazid/Iron, L-Lactic acidosis, E-Ethylene glycol, S-Salicylates. In renal failure, the kidney cannot excrete organic acids, sulphates, and phosphates, leading to high anion gap metabolic acidosis (uraemic acidosis). The anion gap = Na − (Cl + HCO3), normal = 8–12 mEq/L (unmeasured anions); >12 = high AG.",
  },
  {
    id: 7568,
    subject: "Physiology",
    stem: "A patient has normal anion gap metabolic acidosis. Using the HARDUP mnemonic, which cause is characterised by loss of bicarbonate through the GI tract?",
    options: [
      "Renal tubular acidosis",
      "Diarrhoea",
      "Addison's disease",
      "Hyperalimentation",
    ],
    answer: 1,
    explanation:
      "HARDUP (Normal AG/Hyperchloraemic Metabolic Acidosis): H-Hyperalimentation (TPN), A-Addison's disease (aldosterone deficiency), R-Renal tubular acidosis (types I, II, IV), D-Diarrhoea (loss of HCO3-rich pancreatic/intestinal secretions), U-Ureteroenteric fistula/diversion, P-Pancreatic fistula. In diarrhoea, stool is rich in bicarbonate (unlike gastric secretions), so HCO3 loss leads to normal AG acidosis with compensatory hyperchloraemia. Urine anion gap helps differentiate renal from GI causes.",
  },
  {
    id: 7569,
    subject: "Physiology",
    stem: "Winter's formula predicts the expected partial pressure of CO2 in metabolic acidosis. If a patient's HCO3 is 14 mEq/L, what is the expected pCO2?",
    options: [
      "26 mmHg",
      "29 mmHg",
      "33 mmHg",
      "21 mmHg",
    ],
    answer: 1,
    explanation:
      "Winter's formula: Expected pCO2 = (1.5 × HCO3) + 8 ± 2. With HCO3 = 14: Expected pCO2 = (1.5 × 14) + 8 = 21 + 8 = 29 ± 2 mmHg (range 27–31). If the actual pCO2 is higher than expected → concurrent respiratory acidosis. If actual pCO2 is lower than expected → concurrent respiratory alkalosis. If within the predicted range → simple metabolic acidosis with appropriate compensation.",
  },
  {
    id: 7570,
    subject: "Physiology",
    stem: "Haemoglobin A2 (HbA2) constitutes approximately 3.5% of adult haemoglobin. What is the subunit composition of HbA2?",
    options: [
      "α2β2",
      "α2γ2",
      "α2δ2",
      "βs2γ2",
    ],
    answer: 2,
    explanation:
      "Haemoglobin subunit compositions: HbA1 (major adult Hb) = α2β2 (~97%); HbA2 = α2δ2 (~3.5%, elevated in beta-thalassaemia trait — diagnostic if >3.5%); HbF (fetal Hb) = α2γ2 (high O2 affinity due to poor binding with 2,3-DPG; gamma chains don't bind 2,3-DPG well); HbS (sickle cell) = α2βS2 (β6 Glu→Val mutation); HbC = α2βC2 (β6 Glu→Lys); Hb Barts = γ4 (hydrops fetalis). HbA2 is elevated in beta-thalassaemia trait (values 3.5–7%).",
  },
  {
    id: 7571,
    subject: "Physiology",
    stem: "Foetal haemoglobin (HbF) has higher oxygen affinity than adult haemoglobin (HbA). What is the primary reason for this increased O2 affinity?",
    options: [
      "HbF has more alpha subunits that bind oxygen more tightly",
      "Gamma chains of HbF interact poorly with 2,3-DPG compared to beta chains, so 2,3-DPG binding is reduced, keeping HbF in the high-affinity R (relaxed) state",
      "HbF operates at lower pH in the placenta, shifting the curve left",
      "HbF has a higher molecular weight allowing more O2 binding",
    ],
    answer: 1,
    explanation:
      "HbF (α2γ2) has higher O2 affinity because gamma (γ) chains interact poorly with 2,3-bisphosphoglycerate (2,3-DPG) compared to beta (β) chains. 2,3-DPG stabilises the low-affinity T (tense) state of Hb by binding to β-chains. Since γ-chains bind less 2,3-DPG, HbF remains predominantly in the R (relaxed/high-affinity) state, shifting the O2-Hb dissociation curve to the LEFT (lower P50 ~19 mmHg vs 26.5 mmHg for HbA). This allows HbF to extract O2 from maternal HbA across the placenta.",
  },
  {
    id: 7572,
    subject: "Physiology",
    stem: "The oxygen content of arterial blood (CaO2) is calculated using the equation: CaO2 = [Hb × 1.34 × SaO2] + [0.003 × PaO2]. If Hb = 15 g/dL, SaO2 = 98%, and PaO2 = 95 mmHg, what is the approximate CaO2?",
    options: [
      "15.2 mL O2/dL",
      "19.4 mL O2/dL",
      "21.0 mL O2/dL",
      "17.8 mL O2/dL",
    ],
    answer: 1,
    explanation:
      "CaO2 = [Hb × 1.34 × SaO2] + [0.003 × PaO2]. Dissolved O2 = 0.003 × 95 = 0.285 mL/dL. Bound O2 = 15 × 1.34 × 0.98 = 15 × 1.3132 = 19.698 mL/dL. CaO2 ≈ 19.698 + 0.285 ≈ 19.98 ≈ ~19.4–20 mL O2/dL. The normal CaO2 is approximately 18–20 mL O2/dL. The 1.34 constant (Hüfner's constant) represents the mL of O2 bound per gram of fully saturated Hb (theoretical maximum 1.39; physiological average 1.34–1.36).",
  },
  {
    id: 7573,
    subject: "Physiology",
    stem: "Oxygen delivery (DO2) is the product of cardiac output and oxygen content. What is the normal value of DO2 at rest, and what happens to DO2 during moderate-intensity exercise?",
    options: [
      "Normal DO2 ~200 mL/min; increases 2-fold during exercise",
      "Normal DO2 ~1000 mL/min; increases 4–5 fold during exercise due to increased CO and maintained CaO2",
      "Normal DO2 ~500 mL/min; decreases during exercise due to lower PaO2",
      "Normal DO2 ~2000 mL/min; stays constant during exercise",
    ],
    answer: 1,
    explanation:
      "DO2 = CO × CaO2. Normal: CO = 5 L/min = 50 dL/min; CaO2 ≈ 20 mL/dL; DO2 = 50 × 20 = 1000 mL/min. During maximal exercise: CO can increase to 20–25 L/min in trained athletes; CaO2 is maintained (SaO2 remains ~97–98%); DO2 can reach 4000–5000 mL/min (4–5 fold increase). VO2 (oxygen consumption) at rest ≈ 250 mL/min; VO2max in trained athletes can reach 3500–4500 mL/min. Normal O2 extraction ratio (O2ER) at rest ≈ 25%.",
  },
  {
    id: 7574,
    subject: "Physiology",
    stem: "FSH acts on Sertoli cells to produce inhibin B, which provides negative feedback to suppress FSH. LH acts on Leydig cells to produce testosterone. Which enzyme converts testosterone to dihydrotestosterone (DHT) in the prostate, and what drug inhibits this enzyme?",
    options: [
      "Aromatase; inhibited by anastrozole",
      "5-alpha-reductase; inhibited by finasteride (type II 5-AR) or dutasteride (types I and II)",
      "17-beta-hydroxysteroid dehydrogenase; inhibited by abiraterone",
      "3-beta-hydroxysteroid dehydrogenase; inhibited by ketoconazole",
    ],
    answer: 1,
    explanation:
      "5-alpha-reductase (5-AR) converts testosterone to dihydrotestosterone (DHT) in androgen-sensitive tissues: prostate, skin, hair follicles, liver. DHT is more potent than testosterone (higher affinity for androgen receptor). Type II 5-AR predominates in prostate and genital skin. Finasteride inhibits type II 5-AR (used for BPH and male-pattern baldness); Dutasteride inhibits both type I and II (used for BPH). Aromatase converts testosterone to oestradiol (inhibited by anastrozole, letrozole, exemestane — used in breast cancer).",
  },
  {
    id: 7575,
    subject: "Physiology",
    stem: "During the follicular phase of the female menstrual cycle, FSH stimulates follicle development. Oestradiol from the dominant follicle eventually causes a surge in which hormone that triggers ovulation?",
    options: [
      "FSH surge alone",
      "LH surge (and smaller FSH surge) — triggered by high, sustained oestradiol causing positive feedback on the pituitary",
      "Progesterone surge",
      "Prolactin surge",
    ],
    answer: 1,
    explanation:
      "During the follicular phase, rising oestradiol initially suppresses LH and FSH (negative feedback). When oestradiol reaches a critical threshold (>200 pg/mL for >36–48 hours), it SWITCHES to POSITIVE feedback, triggering the midcycle LH surge (and smaller FSH surge). This LH surge causes ovulation approximately 36–40 hours later (day 14 of a 28-day cycle). After ovulation, the corpus luteum forms and secretes progesterone (luteal phase, fixed 14 days). If no fertilisation, corpus luteum regresses → fall in progesterone → menstruation.",
  },
  {
    id: 7576,
    subject: "Physiology",
    stem: "The luteal phase of the menstrual cycle is characterised by secretion of progesterone from the corpus luteum. Why is the luteal phase always a fixed 14 days?",
    options: [
      "Because FSH concentration is constant throughout the luteal phase",
      "Because the lifespan of the corpus luteum is genetically programmed at 14 days (unless rescued by hCG from pregnancy)",
      "Because progesterone causes endometrial shedding exactly 14 days after ovulation",
      "Because LH levels drop to zero after ovulation, limiting corpus luteum function",
    ],
    answer: 1,
    explanation:
      "The corpus luteum has a fixed programmed lifespan of 14 days unless rescued by human chorionic gonadotropin (hCG) from a developing embryo. hCG (structurally similar to LH, shares the same receptor) maintains corpus luteum function and progesterone production in early pregnancy. Without hCG, the corpus luteum regresses (luteolysis) after 14 days, progesterone falls, and menstruation occurs. The follicular phase is variable (7–21 days) depending on time taken for a dominant follicle to develop. Total cycle length = follicular phase + 14 days.",
  },
  {
    id: 7577,
    subject: "Physiology",
    stem: "During moderate-intensity aerobic exercise, which of the following haemodynamic changes is CORRECTLY described?",
    options: [
      "Both systolic and diastolic blood pressure increase significantly",
      "Systolic BP increases, diastolic BP remains similar or slightly decreases (pulse pressure widens), and peripheral vascular resistance decreases due to vasodilation in active muscles",
      "Heart rate decreases due to increased vagal tone",
      "Cardiac output remains constant but heart rate increases while stroke volume decreases",
    ],
    answer: 1,
    explanation:
      "During moderate exercise: (1) HR increases (sympathetic stimulation + reduced vagal tone); (2) Stroke volume increases (Frank-Starling mechanism + increased contractility + reduced afterload); (3) CO increases (HR × SV); (4) SBP increases (increased CO); (5) DBP remains similar or slightly decreases (peripheral vasodilation in exercising muscle overrides sympathetic vasoconstriction); (6) Pulse pressure widens (SBP up, DBP slightly down); (7) Total peripheral resistance (TPR) decreases. VO2 increases linearly with workload up to VO2max.",
  },
  {
    id: 7578,
    subject: "Physiology",
    stem: "The anaerobic threshold (lactate threshold) during exercise is typically reached at what percentage of VO2max in an untrained individual, and what is its physiological significance?",
    options: [
      "30–40% of VO2max; point at which oxygen consumption peaks",
      "50–60% of VO2max; point at which lactate production exceeds clearance, causing metabolic acidosis and hyperventilation",
      "75–85% of VO2max; point at which glycogen stores are depleted",
      "90% of VO2max; point at which cardiac output cannot increase further",
    ],
    answer: 1,
    explanation:
      "The anaerobic threshold (lactate threshold, ventilatory threshold) occurs at ~50–60% of VO2max in untrained individuals (~70–80% in trained athletes). Above this intensity, anaerobic glycolysis produces lactate faster than it can be cleared, causing lactic acidosis. The resulting metabolic acidosis stimulates increased ventilation (VE) disproportionately (ventilatory equivalent for CO2 increases). Training raises the anaerobic threshold, allowing higher intensity exercise without lactate accumulation — a key marker of endurance fitness.",
  },
  {
    id: 7579,
    subject: "Physiology",
    stem: "Endurance training produces several cardiovascular adaptations. Which of the following is a well-established adaptation to long-term aerobic training?",
    options: [
      "Higher resting heart rate and increased peripheral vascular resistance",
      "Lower resting heart rate (bradycardia), increased stroke volume, higher VO2max, and increased mitochondrial density in skeletal muscle",
      "Decreased cardiac output at rest",
      "Increased blood viscosity and higher resting blood pressure",
    ],
    answer: 1,
    explanation:
      "Long-term endurance training adaptations: (1) Lower resting HR (training bradycardia — increased vagal tone, sometimes 40–50 bpm in athletes); (2) Increased stroke volume (eccentric cardiac hypertrophy — larger LV cavity, increased preload, better filling); (3) Increased VO2max (best single measure of cardiorespiratory fitness); (4) Increased mitochondrial density and oxidative enzyme activity in skeletal muscle; (5) Lower resting blood pressure; (6) Higher capillary density in muscle; (7) Improved O2 extraction (lower mixed venous O2 saturation). Cardiac output at rest stays approximately the same (lower HR × higher SV).",
  },
  {
    id: 7580,
    subject: "Physiology",
    stem: "Testosterone provides negative feedback on gonadotropin secretion. At what levels does this feedback primarily occur, and what is the role of aromatase in this feedback?",
    options: [
      "Negative feedback only at pituitary level by testosterone directly; aromatase has no role",
      "Negative feedback at both hypothalamus (↓GnRH pulse frequency) and pituitary (↓sensitivity to GnRH), with oestradiol (from testosterone via aromatase in adipose/testis/brain) providing significant negative feedback on LH, particularly at the hypothalamus",
      "Negative feedback only at testicular level through Leydig cell autoregulation",
      "Testosterone only inhibits FSH; LH is not regulated by testosterone",
    ],
    answer: 1,
    explanation:
      "Testosterone provides negative feedback at: (1) Hypothalamus — reduces GnRH pulse frequency and amplitude; (2) Pituitary — reduces sensitivity to GnRH (decreases GnRH receptors). Importantly, testosterone is converted to oestradiol by aromatase in the brain (hypothalamus), adipose tissue, and testis. Oestradiol is actually MORE potent than testosterone at providing negative feedback on LH/GnRH secretion at the hypothalamic level. DHT primarily mediates feedback at the pituitary. FSH is mainly regulated by inhibin B (from Sertoli cells), though testosterone/oestradiol also suppress it. This is why aromatase inhibitors can paradoxically increase LH and testosterone in men.",
  },
];
