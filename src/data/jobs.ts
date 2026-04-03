export interface JobListing {
  id: string;
  title: string;
  titleHi: string;
  category: "latest" | "result" | "admit-card";
  department: string;
  departmentHi: string;
  lastDate?: string;
  resultDate?: string;
  examDate?: string;
  vacancies?: number;
  url: string;
  description: string;
  descriptionHi: string;
  postedDate: string;
  isNew?: boolean;
}

export const jobListings: JobListing[] = [
  // Latest Jobs
  {
    id: "ssc-cgl-2026",
    title: "SSC CGL 2026 Recruitment",
    titleHi: "SSC CGL 2026 भर्ती",
    category: "latest",
    department: "Staff Selection Commission",
    departmentHi: "कर्मचारी चयन आयोग",
    lastDate: "2026-05-15",
    vacancies: 14582,
    url: "https://ssc.nic.in",
    description: "Combined Graduate Level Examination 2026 for various Group B and C posts",
    descriptionHi: "विभिन्न ग्रुप B और C पदों के लिए संयुक्त स्नातक स्तरीय परीक्षा 2026",
    postedDate: "2026-03-28",
    isNew: true,
  },
  {
    id: "ibps-po-2026",
    title: "IBPS PO 2026 Notification",
    titleHi: "IBPS PO 2026 अधिसूचना",
    category: "latest",
    department: "Institute of Banking Personnel Selection",
    departmentHi: "बैंकिंग कार्मिक चयन संस्थान",
    lastDate: "2026-04-30",
    vacancies: 4500,
    url: "https://ibps.in",
    description: "Probationary Officer recruitment in public sector banks",
    descriptionHi: "सार्वजनिक क्षेत्र के बैंकों में परिवीक्षाधीन अधिकारी भर्ती",
    postedDate: "2026-03-25",
    isNew: true,
  },
  {
    id: "upsc-nda-2026",
    title: "UPSC NDA I 2026",
    titleHi: "UPSC NDA I 2026",
    category: "latest",
    department: "Union Public Service Commission",
    departmentHi: "संघ लोक सेवा आयोग",
    lastDate: "2026-04-20",
    vacancies: 400,
    url: "https://upsc.gov.in",
    description: "National Defence Academy & Naval Academy Examination (I) 2026",
    descriptionHi: "राष्ट्रीय रक्षा अकादमी और नौसेना अकादमी परीक्षा (I) 2026",
    postedDate: "2026-03-20",
    isNew: true,
  },
  {
    id: "railway-ntpc-2026",
    title: "RRB NTPC 2026 Recruitment",
    titleHi: "RRB NTPC 2026 भर्ती",
    category: "latest",
    department: "Railway Recruitment Board",
    departmentHi: "रेलवे भर्ती बोर्ड",
    lastDate: "2026-05-10",
    vacancies: 35000,
    url: "https://rrbcdg.gov.in",
    description: "Non-Technical Popular Categories recruitment for Indian Railways",
    descriptionHi: "भारतीय रेलवे के लिए गैर-तकनीकी लोकप्रिय श्रेणी भर्ती",
    postedDate: "2026-03-15",
    isNew: true,
  },
  {
    id: "upsc-civil-2026",
    title: "UPSC Civil Services 2026",
    titleHi: "UPSC सिविल सेवा 2026",
    category: "latest",
    department: "Union Public Service Commission",
    departmentHi: "संघ लोक सेवा आयोग",
    lastDate: "2026-04-25",
    vacancies: 1000,
    url: "https://upsc.gov.in",
    description: "Civil Services (Preliminary) Examination 2026 - IAS/IPS/IFS",
    descriptionHi: "सिविल सेवा (प्रारंभिक) परीक्षा 2026 - IAS/IPS/IFS",
    postedDate: "2026-03-10",
  },
  {
    id: "delhi-police-2026",
    title: "Delhi Police Constable 2026",
    titleHi: "दिल्ली पुलिस कांस्टेबल 2026",
    category: "latest",
    department: "Staff Selection Commission",
    departmentHi: "कर्मचारी चयन आयोग",
    lastDate: "2026-05-05",
    vacancies: 6000,
    url: "https://ssc.nic.in",
    description: "Delhi Police Constable Executive recruitment 2026",
    descriptionHi: "दिल्ली पुलिस कांस्टेबल कार्यकारी भर्ती 2026",
    postedDate: "2026-03-22",
    isNew: true,
  },
  {
    id: "sbi-clerk-2026",
    title: "SBI Clerk 2026",
    titleHi: "SBI क्लर्क 2026",
    category: "latest",
    department: "State Bank of India",
    departmentHi: "भारतीय स्टेट बैंक",
    lastDate: "2026-04-15",
    vacancies: 8000,
    url: "https://sbi.co.in",
    description: "Junior Associate (Customer Support & Sales) recruitment",
    descriptionHi: "जूनियर एसोसिएट (ग्राहक सहायता और बिक्री) भर्ती",
    postedDate: "2026-03-18",
  },

  // Results
  {
    id: "ssc-chsl-result-2025",
    title: "SSC CHSL 2025 Final Result",
    titleHi: "SSC CHSL 2025 अंतिम परिणाम",
    category: "result",
    department: "Staff Selection Commission",
    departmentHi: "कर्मचारी चयन आयोग",
    resultDate: "2026-03-30",
    url: "https://ssc.nic.in",
    description: "Combined Higher Secondary Level Examination 2025 Final Result declared",
    descriptionHi: "संयुक्त उच्चतर माध्यमिक स्तरीय परीक्षा 2025 अंतिम परिणाम घोषित",
    postedDate: "2026-03-30",
    isNew: true,
  },
  {
    id: "upsc-cse-result-2025",
    title: "UPSC CSE 2025 Mains Result",
    titleHi: "UPSC CSE 2025 मुख्य परिणाम",
    category: "result",
    department: "Union Public Service Commission",
    departmentHi: "संघ लोक सेवा आयोग",
    resultDate: "2026-03-25",
    url: "https://upsc.gov.in",
    description: "Civil Services (Main) Examination 2025 result with marks",
    descriptionHi: "सिविल सेवा (मुख्य) परीक्षा 2025 परिणाम अंकों के साथ",
    postedDate: "2026-03-25",
  },
  {
    id: "ibps-clerk-result-2025",
    title: "IBPS Clerk 2025 Final Result",
    titleHi: "IBPS क्लर्क 2025 अंतिम परिणाम",
    category: "result",
    department: "IBPS",
    departmentHi: "IBPS",
    resultDate: "2026-03-20",
    url: "https://ibps.in",
    description: "IBPS Clerk XIII Final Result and provisional allotment",
    descriptionHi: "IBPS क्लर्क XIII अंतिम परिणाम और अनंतिम आवंटन",
    postedDate: "2026-03-20",
  },
  {
    id: "rrb-group-d-result",
    title: "RRB Group D Result 2025",
    titleHi: "RRB ग्रुप D परिणाम 2025",
    category: "result",
    department: "Railway Recruitment Board",
    departmentHi: "रेलवे भर्ती बोर्ड",
    resultDate: "2026-03-15",
    url: "https://rrbcdg.gov.in",
    description: "Railway Group D CBT result and cut-off marks",
    descriptionHi: "रेलवे ग्रुप D CBT परिणाम और कट-ऑफ अंक",
    postedDate: "2026-03-15",
  },
  {
    id: "ctet-result-2026",
    title: "CTET January 2026 Result",
    titleHi: "CTET जनवरी 2026 परिणाम",
    category: "result",
    department: "CBSE",
    departmentHi: "CBSE",
    resultDate: "2026-03-28",
    url: "https://ctet.nic.in",
    description: "Central Teacher Eligibility Test January 2026 result declared",
    descriptionHi: "केंद्रीय शिक्षक पात्रता परीक्षा जनवरी 2026 परिणाम घोषित",
    postedDate: "2026-03-28",
    isNew: true,
  },

  // Admit Cards
  {
    id: "ssc-cgl-admit-2026",
    title: "SSC CGL Tier-I Admit Card 2026",
    titleHi: "SSC CGL टियर-I एडमिट कार्ड 2026",
    category: "admit-card",
    department: "Staff Selection Commission",
    departmentHi: "कर्मचारी चयन आयोग",
    examDate: "2026-06-15",
    url: "https://ssc.nic.in",
    description: "Download SSC CGL 2026 Tier-I examination admit card",
    descriptionHi: "SSC CGL 2026 टियर-I परीक्षा का एडमिट कार्ड डाउनलोड करें",
    postedDate: "2026-04-01",
    isNew: true,
  },
  {
    id: "upsc-nda-admit-2026",
    title: "UPSC NDA I Admit Card 2026",
    titleHi: "UPSC NDA I एडमिट कार्ड 2026",
    category: "admit-card",
    department: "Union Public Service Commission",
    departmentHi: "संघ लोक सेवा आयोग",
    examDate: "2026-04-20",
    url: "https://upsc.gov.in",
    description: "Download NDA & NA (I) 2026 examination admit card",
    descriptionHi: "NDA और NA (I) 2026 परीक्षा का एडमिट कार्ड डाउनलोड करें",
    postedDate: "2026-03-30",
    isNew: true,
  },
  {
    id: "ibps-po-admit-2026",
    title: "IBPS PO Prelims Admit Card",
    titleHi: "IBPS PO प्रीलिम्स एडमिट कार्ड",
    category: "admit-card",
    department: "IBPS",
    departmentHi: "IBPS",
    examDate: "2026-05-20",
    url: "https://ibps.in",
    description: "Download IBPS PO 2026 Preliminary examination admit card",
    descriptionHi: "IBPS PO 2026 प्रारंभिक परीक्षा का एडमिट कार्ड डाउनलोड करें",
    postedDate: "2026-04-02",
    isNew: true,
  },
  {
    id: "railway-ntpc-admit",
    title: "RRB NTPC CBT-I Admit Card",
    titleHi: "RRB NTPC CBT-I एडमिट कार्ड",
    category: "admit-card",
    department: "Railway Recruitment Board",
    departmentHi: "रेलवे भर्ती बोर्ड",
    examDate: "2026-06-01",
    url: "https://rrbcdg.gov.in",
    description: "Download RRB NTPC 2026 CBT-I admit card from regional RRB websites",
    descriptionHi: "क्षेत्रीय RRB वेबसाइटों से RRB NTPC 2026 CBT-I एडमिट कार्ड डाउनलोड करें",
    postedDate: "2026-03-29",
  },
  {
    id: "sbi-po-admit-2026",
    title: "SBI PO Prelims Admit Card 2026",
    titleHi: "SBI PO प्रीलिम्स एडमिट कार्ड 2026",
    category: "admit-card",
    department: "State Bank of India",
    departmentHi: "भारतीय स्टेट बैंक",
    examDate: "2026-05-10",
    url: "https://sbi.co.in",
    description: "Download SBI PO 2026 Preliminary examination call letter",
    descriptionHi: "SBI PO 2026 प्रारंभिक परीक्षा कॉल लेटर डाउनलोड करें",
    postedDate: "2026-04-01",
    isNew: true,
  },
];

export const getJobsByCategory = (category: JobListing["category"]) => 
  jobListings.filter(j => j.category === category);

export const searchJobs = (query: string) => {
  const q = query.toLowerCase();
  return jobListings.filter(j => 
    j.title.toLowerCase().includes(q) || 
    j.titleHi.includes(q) ||
    j.department.toLowerCase().includes(q) ||
    j.departmentHi.includes(q) ||
    j.description.toLowerCase().includes(q)
  );
};
