import {
  Train, Plane, Building2, Landmark, GraduationCap, Heart, Shield, Smartphone,
  FileText, CreditCard, Vote, Car, UtensilsCrossed, Baby, Users, Globe, Briefcase,
  Home, Leaf, Droplets, Zap, Radio, Truck, Scale, MapPin, BookOpen, Banknote,
  Receipt, BadgeCheck, Lock, Wifi, Phone, Mail, Newspaper, Calculator, Warehouse,
  Factory, Tractor, Ship, Stethoscope, Pill, Siren, HandCoins, PiggyBank, Coins,
  type LucideIcon
} from "lucide-react";

export interface GovtPortal {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  url: string;
  category: string;
  icon: LucideIcon;
  tags: string[];
}

export interface GovtCategory {
  id: string;
  name: string;
  nameHi: string;
  icon: LucideIcon;
  color: string;
}

export const govtCategories: GovtCategory[] = [
  { id: "travel", name: "Travel & Transport", nameHi: "यात्रा और परिवहन", icon: Train, color: "210 80% 45%" },
  { id: "identity", name: "Identity & Documents", nameHi: "पहचान और दस्तावेज़", icon: BadgeCheck, color: "24 95% 50%" },
  { id: "finance", name: "Banking & Finance", nameHi: "बैंकिंग और वित्त", icon: Landmark, color: "217 70% 35%" },
  { id: "tax", name: "Tax & Revenue", nameHi: "कर और राजस्व", icon: Receipt, color: "142 60% 35%" },
  { id: "education", name: "Education", nameHi: "शिक्षा", icon: GraduationCap, color: "270 60% 50%" },
  { id: "health", name: "Health & Welfare", nameHi: "स्वास्थ्य और कल्याण", icon: Heart, color: "0 70% 50%" },
  { id: "agriculture", name: "Agriculture", nameHi: "कृषि", icon: Tractor, color: "142 70% 38%" },
  { id: "employment", name: "Employment & Skills", nameHi: "रोज़गार और कौशल", icon: Briefcase, color: "200 70% 45%" },
  { id: "housing", name: "Housing & Urban", nameHi: "आवास और शहरी", icon: Home, color: "30 70% 45%" },
  { id: "legal", name: "Legal & Justice", nameHi: "कानूनी और न्याय", icon: Scale, color: "220 65% 28%" },
  { id: "utility", name: "Utilities & Services", nameHi: "उपयोगिता सेवाएं", icon: Zap, color: "45 90% 50%" },
  { id: "digital", name: "Digital India", nameHi: "डिजिटल इंडिया", icon: Smartphone, color: "210 90% 55%" },
  { id: "schemes", name: "Govt Schemes", nameHi: "सरकारी योजनाएं", icon: HandCoins, color: "280 60% 50%" },
  { id: "defence", name: "Defence & Security", nameHi: "रक्षा और सुरक्षा", icon: Shield, color: "150 50% 35%" },
  { id: "business", name: "Business & Commerce", nameHi: "व्यापार और वाणिज्य", icon: Factory, color: "190 60% 40%" },
];

export const govtPortals: GovtPortal[] = [
  // ===== TRAVEL & TRANSPORT =====
  { id: "irctc", name: "IRCTC", nameHi: "IRCTC", description: "Indian Railway ticket booking, train schedule, PNR status", descriptionHi: "रेलवे टिकट बुकिंग, ट्रेन शेड्यूल, PNR स्टेटस", url: "https://www.irctc.co.in", category: "travel", icon: Train, tags: ["railway", "train", "ticket", "pnr"] },
  { id: "rail-connect", name: "Rail Connect (UTS)", nameHi: "रेल कनेक्ट (UTS)", description: "Unreserved train tickets, monthly pass, platform ticket", descriptionHi: "अनारक्षित ट्रेन टिकट, मासिक पास, प्लेटफॉर्म टिकट", url: "https://utsonmobile.indianrail.gov.in", category: "travel", icon: Train, tags: ["railway", "uts", "unreserved"] },
  { id: "ntes", name: "NTES - Train Running Status", nameHi: "NTES - ट्रेन चल रही स्थिति", description: "Live train running status, arrival/departure info", descriptionHi: "लाइव ट्रेन की स्थिति, आगमन/प्रस्थान की जानकारी", url: "https://enquiry.indianrail.gov.in/ntes", category: "travel", icon: Train, tags: ["train", "status", "live"] },
  { id: "passport-seva", name: "Passport Seva", nameHi: "पासपोर्ट सेवा", description: "Passport application, renewal, appointment booking", descriptionHi: "पासपोर्ट आवेदन, नवीनीकरण, अपॉइंटमेंट बुकिंग", url: "https://www.passportindia.gov.in", category: "travel", icon: Plane, tags: ["passport", "visa", "travel"] },
  { id: "sarathi", name: "Sarathi - Driving License", nameHi: "सारथी - ड्राइविंग लाइसेंस", description: "Driving license application, renewal, learner license", descriptionHi: "ड्राइविंग लाइसेंस आवेदन, नवीनीकरण, लर्नर लाइसेंस", url: "https://sarathi.parivahan.gov.in", category: "travel", icon: Car, tags: ["driving", "license", "dl"] },
  { id: "vahan", name: "Vahan - Vehicle Registration", nameHi: "वाहन - वाहन पंजीकरण", description: "Vehicle registration, RC details, fancy number", descriptionHi: "वाहन पंजीकरण, RC विवरण, फैंसी नंबर", url: "https://vahan.parivahan.gov.in", category: "travel", icon: Car, tags: ["vehicle", "rc", "registration"] },
  { id: "mparivahan", name: "mParivahan", nameHi: "mParivahan", description: "Digital DL, RC, vehicle info, challan details", descriptionHi: "डिजिटल DL, RC, वाहन जानकारी, चालान विवरण", url: "https://parivahan.gov.in/parivahan", category: "travel", icon: Car, tags: ["digital", "dl", "rc", "challan"] },
  { id: "fastag", name: "FASTag", nameHi: "FASTag", description: "Electronic toll collection, FASTag recharge", descriptionHi: "इलेक्ट्रॉनिक टोल कलेक्शन, FASTag रिचार्ज", url: "https://www.ihmcl.co.in/fastag", category: "travel", icon: Car, tags: ["toll", "fastag", "highway"] },
  { id: "air-sewa", name: "AirSewa", nameHi: "एयरसेवा", description: "Flight info, airport services, grievance redressal", descriptionHi: "फ्लाइट जानकारी, एयरपोर्ट सेवाएं, शिकायत निवारण", url: "https://airsewa.gov.in", category: "travel", icon: Plane, tags: ["flight", "airport", "airline"] },
  { id: "shipping-portal", name: "Indian Shipping Portal", nameHi: "भारतीय शिपिंग पोर्टल", description: "Port services, shipping info, vessel tracking", descriptionHi: "पोर्ट सेवाएं, शिपिंग जानकारी, जहाज ट्रैकिंग", url: "https://shipmin.gov.in", category: "travel", icon: Ship, tags: ["shipping", "port", "vessel"] },

  // ===== IDENTITY & DOCUMENTS =====
  { id: "uidai", name: "UIDAI - Aadhaar", nameHi: "UIDAI - आधार", description: "Aadhaar enrolment, update, download, authentication", descriptionHi: "आधार नामांकन, अपडेट, डाउनलोड, प्रमाणीकरण", url: "https://uidai.gov.in", category: "identity", icon: BadgeCheck, tags: ["aadhaar", "uid", "identity"] },
  { id: "myaadhaar", name: "myAadhaar Portal", nameHi: "myAadhaar पोर्टल", description: "Online Aadhaar update, address change, mobile update", descriptionHi: "ऑनलाइन आधार अपडेट, पता बदलें, मोबाइल अपडेट", url: "https://myaadhaar.uidai.gov.in", category: "identity", icon: BadgeCheck, tags: ["aadhaar", "update", "address"] },
  { id: "nvsp", name: "NVSP - Voter ID", nameHi: "NVSP - वोटर ID", description: "Voter ID registration, correction, electoral roll search", descriptionHi: "वोटर ID पंजीकरण, सुधार, मतदाता सूची खोज", url: "https://www.nvsp.in", category: "identity", icon: Vote, tags: ["voter", "election", "epic"] },
  { id: "digilocker", name: "DigiLocker", nameHi: "डिजीलॉकर", description: "Digital document storage - Aadhaar, PAN, DL, marksheets", descriptionHi: "डिजिटल दस्तावेज़ भंडारण - आधार, पैन, DL, मार्कशीट", url: "https://www.digilocker.gov.in", category: "identity", icon: Lock, tags: ["digital", "document", "storage", "certificate"] },
  { id: "e-district", name: "e-District Portal", nameHi: "ई-डिस्ट्रिक्ट पोर्टल", description: "Income, caste, domicile, birth/death certificates", descriptionHi: "आय, जाति, अधिवास, जन्म/मृत्यु प्रमाणपत्र", url: "https://edistrict.up.gov.in", category: "identity", icon: FileText, tags: ["certificate", "caste", "income", "domicile"] },
  { id: "crsorgi", name: "CRS - Birth/Death Certificate", nameHi: "CRS - जन्म/मृत्यु प्रमाणपत्र", description: "Birth & death certificate registration and download", descriptionHi: "जन्म और मृत्यु प्रमाणपत्र पंजीकरण और डाउनलोड", url: "https://crsorgi.gov.in", category: "identity", icon: Baby, tags: ["birth", "death", "certificate"] },

  // ===== BANKING & FINANCE =====
  { id: "sbi", name: "SBI Online", nameHi: "SBI ऑनलाइन", description: "SBI net banking, account, FD, loan, credit card", descriptionHi: "SBI नेट बैंकिंग, खाता, FD, लोन, क्रेडिट कार्ड", url: "https://www.onlinesbi.sbi", category: "finance", icon: Landmark, tags: ["sbi", "bank", "account", "loan"] },
  { id: "pnb", name: "PNB Online", nameHi: "PNB ऑनलाइन", description: "PNB net banking, account services", descriptionHi: "PNB नेट बैंकिंग, खाता सेवाएं", url: "https://www.pnbindia.in", category: "finance", icon: Landmark, tags: ["pnb", "bank", "account"] },
  { id: "bob", name: "Bank of Baroda", nameHi: "बैंक ऑफ बड़ौदा", description: "BOB net banking, savings, loans", descriptionHi: "BOB नेट बैंकिंग, बचत, ऋण", url: "https://www.bankofbaroda.in", category: "finance", icon: Landmark, tags: ["bob", "bank", "baroda"] },
  { id: "pmjdy", name: "PM Jan Dhan Yojana", nameHi: "PM जन धन योजना", description: "Zero balance account, RuPay card, insurance cover", descriptionHi: "शून्य शेष खाता, RuPay कार्ड, बीमा कवर", url: "https://pmjdy.gov.in", category: "finance", icon: PiggyBank, tags: ["jan dhan", "zero balance", "account"] },
  { id: "npci", name: "NPCI - UPI / BHIM", nameHi: "NPCI - UPI / BHIM", description: "UPI payments, BHIM app, RuPay, NACH, IMPS", descriptionHi: "UPI भुगतान, BHIM ऐप, RuPay, NACH, IMPS", url: "https://www.npci.org.in", category: "finance", icon: Banknote, tags: ["upi", "bhim", "payment", "rupay"] },
  { id: "post-office", name: "India Post - Savings", nameHi: "इंडिया पोस्ट - बचत", description: "Post office savings, RD, FD, NSC, KVP, PPF", descriptionHi: "डाकघर बचत, RD, FD, NSC, KVP, PPF", url: "https://www.indiapost.gov.in", category: "finance", icon: Mail, tags: ["post office", "savings", "ppf", "nsc"] },
  { id: "epfo", name: "EPFO - PF Portal", nameHi: "EPFO - PF पोर्टल", description: "EPF balance, PF withdrawal, UAN activation, passbook", descriptionHi: "EPF बैलेंस, PF निकासी, UAN एक्टिवेशन, पासबुक", url: "https://www.epfindia.gov.in", category: "finance", icon: Coins, tags: ["pf", "epf", "provident fund", "uan"] },
  { id: "nps", name: "NPS - National Pension", nameHi: "NPS - राष्ट्रीय पेंशन", description: "National Pension System registration, contribution", descriptionHi: "राष्ट्रीय पेंशन प्रणाली पंजीकरण, योगदान", url: "https://www.npscra.nsdl.co.in", category: "finance", icon: PiggyBank, tags: ["pension", "nps", "retirement"] },
  { id: "mudra", name: "MUDRA Loan (PMMY)", nameHi: "मुद्रा लोन (PMMY)", description: "Micro business loans up to ₹10 lakh - Shishu, Kishore, Tarun", descriptionHi: "₹10 लाख तक सूक्ष्म व्यापार ऋण - शिशु, किशोर, तरुण", url: "https://www.mudra.org.in", category: "finance", icon: HandCoins, tags: ["mudra", "loan", "business", "msme"] },

  // ===== TAX & REVENUE =====
  { id: "incometax", name: "Income Tax e-Filing", nameHi: "आयकर ई-फाइलिंग", description: "ITR filing, TDS, Form 16, refund status, PAN services", descriptionHi: "ITR फाइलिंग, TDS, फॉर्म 16, रिफंड स्टेटस, पैन सेवाएं", url: "https://www.incometax.gov.in", category: "tax", icon: Receipt, tags: ["itr", "tax", "pan", "tds", "refund"] },
  { id: "gst", name: "GST Portal", nameHi: "GST पोर्टल", description: "GST registration, return filing, e-way bill", descriptionHi: "GST पंजीकरण, रिटर्न फाइलिंग, ई-वे बिल", url: "https://www.gst.gov.in", category: "tax", icon: Receipt, tags: ["gst", "tax", "invoice", "return"] },
  { id: "pan-nsdl", name: "PAN Card - NSDL", nameHi: "पैन कार्ड - NSDL", description: "New PAN card application, correction, reprint", descriptionHi: "नया पैन कार्ड आवेदन, सुधार, रीप्रिंट", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html", category: "tax", icon: CreditCard, tags: ["pan", "card", "nsdl"] },
  { id: "tan", name: "TAN Registration", nameHi: "TAN पंजीकरण", description: "Tax deduction account number registration", descriptionHi: "कर कटौती खाता संख्या पंजीकरण", url: "https://www.tin-nsdl.com", category: "tax", icon: Calculator, tags: ["tan", "tds", "tax deduction"] },
  { id: "stamp-duty", name: "Stamp Duty & Registration", nameHi: "स्टैंप ड्यूटी और पंजीकरण", description: "Property registration, stamp duty payment", descriptionHi: "संपत्ति पंजीकरण, स्टैंप ड्यूटी भुगतान", url: "https://igrsup.gov.in", category: "tax", icon: Building2, tags: ["property", "stamp", "registration"] },

  // ===== EDUCATION =====
  { id: "nsp", name: "National Scholarship Portal", nameHi: "राष्ट्रीय छात्रवृत्ति पोर्टल", description: "Central & state scholarships for students", descriptionHi: "छात्रों के लिए केंद्र और राज्य छात्रवृत्तियां", url: "https://scholarships.gov.in", category: "education", icon: GraduationCap, tags: ["scholarship", "student", "education"] },
  { id: "cbse", name: "CBSE", nameHi: "CBSE", description: "Board results, admit card, syllabus, sample papers", descriptionHi: "बोर्ड परिणाम, प्रवेश पत्र, पाठ्यक्रम, सैंपल पेपर", url: "https://www.cbse.gov.in", category: "education", icon: BookOpen, tags: ["cbse", "board", "result", "exam"] },
  { id: "ugc", name: "UGC", nameHi: "UGC", description: "University Grants Commission, NET, PhD fellowships", descriptionHi: "विश्वविद्यालय अनुदान आयोग, NET, PhD फ़ेलोशिप", url: "https://www.ugc.gov.in", category: "education", icon: GraduationCap, tags: ["ugc", "university", "net", "fellowship"] },
  { id: "nta", name: "NTA - Exam Portal", nameHi: "NTA - परीक्षा पोर्टल", description: "NEET, JEE, CUET, UGC NET exam registration", descriptionHi: "NEET, JEE, CUET, UGC NET परीक्षा पंजीकरण", url: "https://nta.ac.in", category: "education", icon: BookOpen, tags: ["neet", "jee", "cuet", "exam"] },
  { id: "swayam", name: "SWAYAM - Online Courses", nameHi: "स्वयं - ऑनलाइन कोर्स", description: "Free online courses from IITs, IIMs, and top universities", descriptionHi: "IIT, IIM और शीर्ष विश्वविद्यालयों से मुफ्त ऑनलाइन कोर्स", url: "https://swayam.gov.in", category: "education", icon: BookOpen, tags: ["course", "online", "free", "mooc"] },
  { id: "diksha", name: "DIKSHA", nameHi: "दीक्षा", description: "School education content, textbooks, teacher training", descriptionHi: "स्कूल शिक्षा सामग्री, पाठ्यपुस्तकें, शिक्षक प्रशिक्षण", url: "https://diksha.gov.in", category: "education", icon: BookOpen, tags: ["school", "textbook", "teacher"] },
  { id: "abc", name: "Academic Bank of Credits", nameHi: "एकेडमिक बैंक ऑफ क्रेडिट्स", description: "Academic credits storage and transfer between institutions", descriptionHi: "शैक्षणिक क्रेडिट भंडारण और संस्थानों के बीच स्थानांतरण", url: "https://www.abc.gov.in", category: "education", icon: GraduationCap, tags: ["abc", "credits", "academic"] },
  { id: "skill-india", name: "Skill India Portal", nameHi: "स्किल इंडिया पोर्टल", description: "Skill development courses, PMKVY, apprenticeship", descriptionHi: "कौशल विकास पाठ्यक्रम, PMKVY, अप्रेंटिसशिप", url: "https://www.skillindia.gov.in", category: "education", icon: Briefcase, tags: ["skill", "pmkvy", "training"] },

  // ===== HEALTH & WELFARE =====
  { id: "ayushman", name: "Ayushman Bharat (PMJAY)", nameHi: "आयुष्मान भारत (PMJAY)", description: "₹5 lakh health insurance, hospital list, card", descriptionHi: "₹5 लाख स्वास्थ्य बीमा, अस्पताल सूची, कार्ड", url: "https://pmjay.gov.in", category: "health", icon: Heart, tags: ["ayushman", "health", "insurance", "hospital"] },
  { id: "cowin", name: "CoWIN - Vaccination", nameHi: "CoWIN - टीकाकरण", description: "COVID vaccination certificate, dose details", descriptionHi: "COVID टीकाकरण प्रमाणपत्र, डोज़ विवरण", url: "https://www.cowin.gov.in", category: "health", icon: Stethoscope, tags: ["covid", "vaccine", "certificate"] },
  { id: "esic", name: "ESIC", nameHi: "ESIC", description: "Employee State Insurance - medical, cash benefits", descriptionHi: "कर्मचारी राज्य बीमा - चिकित्सा, नकद लाभ", url: "https://www.esic.gov.in", category: "health", icon: Heart, tags: ["esic", "insurance", "employee"] },
  { id: "nfsa", name: "NFSA - Ration Card Portal", nameHi: "NFSA - राशन कार्ड पोर्टल", description: "Ration card application, beneficiary list, ONORC", descriptionHi: "राशन कार्ड आवेदन, लाभार्थी सूची, ONORC", url: "https://nfsa.gov.in", category: "health", icon: UtensilsCrossed, tags: ["ration", "food", "pds", "nfsa"] },
  { id: "janaushadhi", name: "Jan Aushadhi", nameHi: "जन औषधि", description: "Affordable generic medicines, store locator", descriptionHi: "सस्ती जेनेरिक दवाइयां, स्टोर लोकेटर", url: "https://janaushadhi.gov.in", category: "health", icon: Pill, tags: ["medicine", "generic", "pharmacy"] },
  { id: "nha", name: "National Health Authority", nameHi: "राष्ट्रीय स्वास्थ्य प्राधिकरण", description: "ABHA card, health records, Ayushman Bharat Digital Mission", descriptionHi: "ABHA कार्ड, स्वास्थ्य रिकॉर्ड, आयुष्मान भारत डिजिटल मिशन", url: "https://nha.gov.in", category: "health", icon: Stethoscope, tags: ["abha", "health id", "digital health"] },
  { id: "pmsby", name: "PM Suraksha Bima Yojana", nameHi: "PM सुरक्षा बीमा योजना", description: "₹12/year accident insurance cover of ₹2 lakh", descriptionHi: "₹12/वर्ष दुर्घटना बीमा कवर ₹2 लाख", url: "https://www.jansuraksha.gov.in", category: "health", icon: Shield, tags: ["insurance", "accident", "pmsby"] },
  { id: "pmjjby", name: "PM Jeevan Jyoti Bima", nameHi: "PM जीवन ज्योति बीमा", description: "₹436/year life insurance cover of ₹2 lakh", descriptionHi: "₹436/वर्ष जीवन बीमा कवर ₹2 लाख", url: "https://www.jansuraksha.gov.in", category: "health", icon: Shield, tags: ["life insurance", "pmjjby"] },

  // ===== AGRICULTURE =====
  { id: "pmkisan", name: "PM Kisan Samman Nidhi", nameHi: "PM किसान सम्मान निधि", description: "₹6000/year for farmers, beneficiary status, eKYC", descriptionHi: "किसानों को ₹6000/वर्ष, लाभार्थी स्थिति, eKYC", url: "https://pmkisan.gov.in", category: "agriculture", icon: Tractor, tags: ["kisan", "farmer", "subsidy", "6000"] },
  { id: "soil-health", name: "Soil Health Card", nameHi: "मृदा स्वास्थ्य कार्ड", description: "Soil testing, fertility report, crop recommendations", descriptionHi: "मिट्टी परीक्षण, उर्वरता रिपोर्ट, फसल सिफारिशें", url: "https://soilhealth.dac.gov.in", category: "agriculture", icon: Leaf, tags: ["soil", "health", "farming"] },
  { id: "pmfby", name: "PM Fasal Bima Yojana", nameHi: "PM फसल बीमा योजना", description: "Crop insurance for farmers, claim process", descriptionHi: "किसानों के लिए फसल बीमा, दावा प्रक्रिया", url: "https://pmfby.gov.in", category: "agriculture", icon: Leaf, tags: ["crop", "insurance", "farmer"] },
  { id: "enam", name: "eNAM - Agri Market", nameHi: "eNAM - कृषि मंडी", description: "Online agriculture market, mandi prices, trade", descriptionHi: "ऑनलाइन कृषि बाज़ार, मंडी भाव, व्यापार", url: "https://enam.gov.in", category: "agriculture", icon: Tractor, tags: ["mandi", "market", "price", "trade"] },
  { id: "kcc", name: "Kisan Credit Card", nameHi: "किसान क्रेडिट कार्ड", description: "Farm credit, crop loan at subsidized rates", descriptionHi: "कृषि ऋण, सब्सिडी दर पर फसल ऋण", url: "https://pmkisan.gov.in/kcc", category: "agriculture", icon: CreditCard, tags: ["kcc", "loan", "credit", "farmer"] },

  // ===== EMPLOYMENT & SKILLS =====
  { id: "ncs", name: "National Career Service", nameHi: "राष्ट्रीय करियर सेवा", description: "Job search, career counselling, employment exchange", descriptionHi: "नौकरी खोज, करियर काउंसलिंग, रोज़गार कार्यालय", url: "https://www.ncs.gov.in", category: "employment", icon: Briefcase, tags: ["job", "career", "employment"] },
  { id: "eshram", name: "e-Shram Portal", nameHi: "ई-श्रम पोर्टल", description: "Unorganized worker registration, social security", descriptionHi: "असंगठित श्रमिक पंजीकरण, सामाजिक सुरक्षा", url: "https://eshram.gov.in", category: "employment", icon: Users, tags: ["labour", "worker", "eshram", "unorganized"] },
  { id: "pmegp", name: "PMEGP - Self Employment", nameHi: "PMEGP - स्वरोज़गार", description: "PM Employment Generation Programme, micro enterprise loans", descriptionHi: "PM रोज़गार सृजन कार्यक्रम, सूक्ष्म उद्यम ऋण", url: "https://www.kviconline.gov.in/pmegp", category: "employment", icon: Briefcase, tags: ["self employment", "msme", "loan"] },
  { id: "apprenticeship", name: "Apprenticeship India", nameHi: "अप्रेंटिसशिप इंडिया", description: "Apprenticeship registration, training, stipend", descriptionHi: "अप्रेंटिसशिप पंजीकरण, प्रशिक्षण, वजीफा", url: "https://www.apprenticeshipindia.gov.in", category: "employment", icon: Briefcase, tags: ["apprentice", "training", "stipend"] },

  // ===== HOUSING & URBAN =====
  { id: "pmay", name: "PM Awas Yojana", nameHi: "PM आवास योजना", description: "Affordable housing, subsidy, beneficiary list", descriptionHi: "सस्ता आवास, सब्सिडी, लाभार्थी सूची", url: "https://pmaymis.gov.in", category: "housing", icon: Home, tags: ["housing", "home", "subsidy", "awas"] },
  { id: "swachh-bharat", name: "Swachh Bharat Mission", nameHi: "स्वच्छ भारत मिशन", description: "Toilet construction, ODF status, gramin/urban", descriptionHi: "शौचालय निर्माण, ODF स्थिति, ग्रामीण/शहरी", url: "https://swachhbharatmission.gov.in", category: "housing", icon: Droplets, tags: ["swachh", "toilet", "sanitation"] },
  { id: "ujjwala", name: "PM Ujjwala Yojana", nameHi: "PM उज्ज्वला योजना", description: "Free LPG connection for BPL families", descriptionHi: "BPL परिवारों के लिए मुफ्त LPG कनेक्शन", url: "https://www.pmuy.gov.in", category: "housing", icon: Zap, tags: ["lpg", "gas", "ujjwala", "bpl"] },
  { id: "jal-jeevan", name: "Jal Jeevan Mission", nameHi: "जल जीवन मिशन", description: "Tap water connection to every household", descriptionHi: "हर घर नल से जल कनेक्शन", url: "https://jaljeevanmission.gov.in", category: "housing", icon: Droplets, tags: ["water", "tap", "jal", "connection"] },
  { id: "amrut", name: "AMRUT - Smart City", nameHi: "AMRUT - स्मार्ट सिटी", description: "Urban development, water supply, sewerage", descriptionHi: "शहरी विकास, जल आपूर्ति, सीवरेज", url: "https://amrut.gov.in", category: "housing", icon: Building2, tags: ["smart city", "urban", "amrut"] },

  // ===== LEGAL & JUSTICE =====
  { id: "ecourts", name: "eCourts Services", nameHi: "eCourts सेवाएं", description: "Case status, cause list, court orders, hearing dates", descriptionHi: "केस स्थिति, कारण सूची, न्यायालय आदेश, सुनवाई तिथियां", url: "https://ecourts.gov.in", category: "legal", icon: Scale, tags: ["court", "case", "hearing", "judge"] },
  { id: "tele-law", name: "Tele-Law", nameHi: "टेली-लॉ", description: "Free legal advice via video call for rural citizens", descriptionHi: "ग्रामीण नागरिकों के लिए वीडियो कॉल द्वारा मुफ्त कानूनी सलाह", url: "https://www.tele-law.in", category: "legal", icon: Phone, tags: ["legal", "lawyer", "advice", "free"] },
  { id: "nalsa", name: "NALSA - Free Legal Aid", nameHi: "NALSA - मुफ्त कानूनी सहायता", description: "Free legal services for underprivileged", descriptionHi: "वंचितों के लिए मुफ्त कानूनी सेवाएं", url: "https://nalsa.gov.in", category: "legal", icon: Scale, tags: ["legal aid", "free", "court"] },
  { id: "fir-online", name: "Online FIR Filing", nameHi: "ऑनलाइन FIR दर्ज करें", description: "File FIR online, police complaint portal", descriptionHi: "ऑनलाइन FIR दर्ज करें, पुलिस शिकायत पोर्टल", url: "https://digitalpolice.gov.in", category: "legal", icon: Siren, tags: ["fir", "police", "complaint", "crime"] },
  { id: "cyber-crime", name: "Cyber Crime Portal", nameHi: "साइबर अपराध पोर्टल", description: "Report cyber crime, online fraud, women safety", descriptionHi: "साइबर अपराध रिपोर्ट, ऑनलाइन धोखाधड़ी, महिला सुरक्षा", url: "https://cybercrime.gov.in", category: "legal", icon: Shield, tags: ["cyber", "fraud", "online crime", "report"] },
  { id: "consumer-forum", name: "Consumer Helpline", nameHi: "उपभोक्ता हेल्पलाइन", description: "Consumer complaints, product grievance, NCH 1800-11-4000", descriptionHi: "उपभोक्ता शिकायतें, उत्पाद शिकायत, NCH 1800-11-4000", url: "https://consumerhelpline.gov.in", category: "legal", icon: Phone, tags: ["consumer", "complaint", "helpline"] },

  // ===== UTILITIES & SERVICES =====
  { id: "electricity", name: "Bijli Bill Payment", nameHi: "बिजली बिल भुगतान", description: "State-wise electricity bill payment portals", descriptionHi: "राज्यवार बिजली बिल भुगतान पोर्टल", url: "https://www.bbps.org.in", category: "utility", icon: Zap, tags: ["electricity", "bill", "payment", "bijli"] },
  { id: "lpg-booking", name: "LPG Gas Booking", nameHi: "LPG गैस बुकिंग", description: "Indane, HP Gas, Bharat Gas cylinder booking", descriptionHi: "इंडेन, HP गैस, भारत गैस सिलेंडर बुकिंग", url: "https://www.mylpg.in", category: "utility", icon: Zap, tags: ["lpg", "gas", "cylinder", "booking"] },
  { id: "water-bill", name: "Water Bill Payment", nameHi: "पानी बिल भुगतान", description: "Municipal water bill payment, new connection", descriptionHi: "नगरपालिका पानी बिल भुगतान, नया कनेक्शन", url: "https://www.bbps.org.in", category: "utility", icon: Droplets, tags: ["water", "bill", "municipal"] },
  { id: "speed-post", name: "India Post - Speed Post", nameHi: "इंडिया पोस्ट - स्पीड पोस्ट", description: "Speed post tracking, pincode search, postal services", descriptionHi: "स्पीड पोस्ट ट्रैकिंग, पिनकोड खोज, डाक सेवाएं", url: "https://www.indiapost.gov.in", category: "utility", icon: Mail, tags: ["post", "speed post", "tracking", "courier"] },
  { id: "bsnl", name: "BSNL Services", nameHi: "BSNL सेवाएं", description: "BSNL broadband, mobile recharge, bill payment", descriptionHi: "BSNL ब्रॉडबैंड, मोबाइल रिचार्ज, बिल भुगतान", url: "https://www.bsnl.co.in", category: "utility", icon: Wifi, tags: ["bsnl", "broadband", "mobile", "telecom"] },

  // ===== DIGITAL INDIA =====
  { id: "umang", name: "UMANG App", nameHi: "UMANG ऐप", description: "500+ govt services in one app - PF, Aadhaar, DigiLocker", descriptionHi: "एक ऐप में 500+ सरकारी सेवाएं - PF, आधार, डिजीलॉकर", url: "https://web.umang.gov.in", category: "digital", icon: Smartphone, tags: ["umang", "app", "all-in-one"] },
  { id: "mygov", name: "MyGov", nameHi: "MyGov", description: "Citizen engagement, discussions, tasks, polls", descriptionHi: "नागरिक जुड़ाव, चर्चा, कार्य, पोल", url: "https://www.mygov.in", category: "digital", icon: Users, tags: ["mygov", "citizen", "engagement"] },
  { id: "gem", name: "GeM - Govt e-Marketplace", nameHi: "GeM - सरकारी ई-मार्केटप्लेस", description: "Government procurement portal for vendors & buyers", descriptionHi: "विक्रेताओं और खरीदारों के लिए सरकारी खरीद पोर्टल", url: "https://gem.gov.in", category: "digital", icon: Globe, tags: ["gem", "procurement", "vendor", "tender"] },
  { id: "pgportal", name: "PG Portal - Grievance", nameHi: "PG पोर्टल - शिकायत", description: "File grievance against any govt department", descriptionHi: "किसी भी सरकारी विभाग के खिलाफ शिकायत दर्ज करें", url: "https://pgportal.gov.in", category: "digital", icon: FileText, tags: ["grievance", "complaint", "government"] },
  { id: "rti", name: "RTI Online", nameHi: "RTI ऑनलाइन", description: "Right to Information application filing", descriptionHi: "सूचना का अधिकार आवेदन दाखिल करना", url: "https://rtionline.gov.in", category: "digital", icon: FileText, tags: ["rti", "information", "transparency"] },
  { id: "data-gov", name: "data.gov.in - Open Data", nameHi: "data.gov.in - ओपन डेटा", description: "Indian government open data platform", descriptionHi: "भारत सरकार ओपन डेटा प्लेटफॉर्म", url: "https://data.gov.in", category: "digital", icon: Globe, tags: ["data", "open", "statistics"] },
  { id: "india-gov", name: "india.gov.in", nameHi: "india.gov.in", description: "National Portal of India - all govt info", descriptionHi: "भारत का राष्ट्रीय पोर्टल - सभी सरकारी जानकारी", url: "https://www.india.gov.in", category: "digital", icon: Globe, tags: ["india", "portal", "government"] },

  // ===== GOVT SCHEMES =====
  { id: "pm-awas", name: "PM Awas Yojana", nameHi: "PM आवास योजना", description: "Housing for all - urban and rural subsidy", descriptionHi: "सबके लिए आवास - शहरी और ग्रामीण सब्सिडी", url: "https://pmaymis.gov.in", category: "schemes", icon: Home, tags: ["awas", "housing", "subsidy"] },
  { id: "sukanya", name: "Sukanya Samriddhi Yojana", nameHi: "सुकन्या समृद्धि योजना", description: "Girl child savings scheme, high interest rate", descriptionHi: "बालिका बचत योजना, उच्च ब्याज दर", url: "https://www.nsiindia.gov.in", category: "schemes", icon: PiggyBank, tags: ["sukanya", "girl", "savings"] },
  { id: "atal-pension", name: "Atal Pension Yojana", nameHi: "अटल पेंशन योजना", description: "Pension scheme for unorganized sector workers", descriptionHi: "असंगठित क्षेत्र के कर्मचारियों के लिए पेंशन योजना", url: "https://www.npscra.nsdl.co.in/scheme-details.php", category: "schemes", icon: PiggyBank, tags: ["pension", "atal", "apy"] },
  { id: "pm-vishwakarma", name: "PM Vishwakarma", nameHi: "PM विश्वकर्मा", description: "Support for traditional artisans and craftsmen", descriptionHi: "पारंपरिक कारीगरों और शिल्पकारों के लिए सहायता", url: "https://pmvishwakarma.gov.in", category: "schemes", icon: Briefcase, tags: ["vishwakarma", "artisan", "craftsman"] },
  { id: "stand-up", name: "Stand Up India", nameHi: "स्टैंड अप इंडिया", description: "Loans for SC/ST and women entrepreneurs", descriptionHi: "SC/ST और महिला उद्यमियों के लिए ऋण", url: "https://www.standupmitra.in", category: "schemes", icon: HandCoins, tags: ["startup", "loan", "sc", "st", "women"] },
  { id: "lakhpati-didi", name: "Lakhpati Didi", nameHi: "लखपति दीदी", description: "Income enhancement for SHG women members", descriptionHi: "SHG महिला सदस्यों की आय बढ़ाना", url: "https://nrlm.gov.in", category: "schemes", icon: Users, tags: ["women", "shg", "income", "lakhpati"] },
  { id: "pm-svanidhi", name: "PM SVANidhi", nameHi: "PM स्वनिधि", description: "₹10,000 loan for street vendors", descriptionHi: "रेहड़ी-पटरी वालों के लिए ₹10,000 ऋण", url: "https://pmsvanidhi.mohua.gov.in", category: "schemes", icon: HandCoins, tags: ["street vendor", "loan", "svanidhi"] },
  { id: "free-ration", name: "PM Garib Kalyan Anna", nameHi: "PM गरीब कल्याण अन्न", description: "Free ration to 80 crore people - rice, wheat, dal", descriptionHi: "80 करोड़ लोगों को मुफ्त राशन - चावल, गेहूं, दाल", url: "https://nfsa.gov.in", category: "schemes", icon: UtensilsCrossed, tags: ["free ration", "food", "anna", "garib kalyan"] },

  // ===== DEFENCE & SECURITY =====
  { id: "agniveer", name: "Agniveer - Indian Army", nameHi: "अग्निवीर - भारतीय सेना", description: "Agnipath scheme recruitment for Army, Navy, Air Force", descriptionHi: "सेना, नौसेना, वायुसेना के लिए अग्निपथ योजना भर्ती", url: "https://www.joinindianarmy.nic.in", category: "defence", icon: Shield, tags: ["army", "agniveer", "agnipath", "recruitment"] },
  { id: "indian-navy", name: "Indian Navy Recruitment", nameHi: "भारतीय नौसेना भर्ती", description: "Navy recruitment, sailor, officer entries", descriptionHi: "नौसेना भर्ती, नाविक, अधिकारी प्रवेश", url: "https://www.joinindiannavy.gov.in", category: "defence", icon: Shield, tags: ["navy", "recruitment", "sailor"] },
  { id: "police-recruitment", name: "Police Recruitment", nameHi: "पुलिस भर्ती", description: "State police, CRPF, BSF, CISF recruitment", descriptionHi: "राज्य पुलिस, CRPF, BSF, CISF भर्ती", url: "https://www.crpf.gov.in", category: "defence", icon: Shield, tags: ["police", "crpf", "bsf", "recruitment"] },
  { id: "sainik-welfare", name: "Ex-Servicemen Welfare", nameHi: "पूर्व सैनिक कल्याण", description: "ECHS, CSD, pension, welfare schemes for veterans", descriptionHi: "ECHS, CSD, पेंशन, दिग्गजों के लिए कल्याण योजनाएं", url: "https://desw.gov.in", category: "defence", icon: Shield, tags: ["veteran", "echs", "pension", "welfare"] },

  // ===== BUSINESS & COMMERCE =====
  { id: "msme-registration", name: "Udyam Registration", nameHi: "उद्यम पंजीकरण", description: "MSME/Udyam registration for small businesses", descriptionHi: "छोटे व्यापारों के लिए MSME/उद्यम पंजीकरण", url: "https://udyamregistration.gov.in", category: "business", icon: Factory, tags: ["msme", "udyam", "business", "registration"] },
  { id: "startup-india", name: "Startup India", nameHi: "स्टार्टअप इंडिया", description: "Startup registration, tax benefits, funding", descriptionHi: "स्टार्टअप पंजीकरण, कर लाभ, फंडिंग", url: "https://www.startupindia.gov.in", category: "business", icon: Briefcase, tags: ["startup", "funding", "dpiit"] },
  { id: "mca", name: "MCA - Company Registration", nameHi: "MCA - कंपनी पंजीकरण", description: "Company incorporation, LLP, annual filing", descriptionHi: "कंपनी निगमन, LLP, वार्षिक फाइलिंग", url: "https://www.mca.gov.in", category: "business", icon: Building2, tags: ["company", "llp", "incorporation"] },
  { id: "fssai", name: "FSSAI - Food License", nameHi: "FSSAI - खाद्य लाइसेंस", description: "Food business license, registration, safety standards", descriptionHi: "खाद्य व्यवसाय लाइसेंस, पंजीकरण, सुरक्षा मानक", url: "https://foscos.fssai.gov.in", category: "business", icon: UtensilsCrossed, tags: ["fssai", "food", "license", "safety"] },
  { id: "trademark", name: "Trademark Registration", nameHi: "ट्रेडमार्क पंजीकरण", description: "Brand name, logo, trademark filing", descriptionHi: "ब्रांड नाम, लोगो, ट्रेडमार्क दाखिल करना", url: "https://ipindia.gov.in", category: "business", icon: BadgeCheck, tags: ["trademark", "brand", "patent", "ip"] },
  { id: "dgft", name: "DGFT - Import/Export", nameHi: "DGFT - आयात/निर्यात", description: "IEC code, import/export license, foreign trade", descriptionHi: "IEC कोड, आयात/निर्यात लाइसेंस, विदेशी व्यापार", url: "https://www.dgft.gov.in", category: "business", icon: Globe, tags: ["import", "export", "iec", "trade"] },
];

export function searchGovtPortals(query: string): GovtPortal[] {
  const q = query.toLowerCase();
  return govtPortals.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.nameHi.includes(query) ||
    p.description.toLowerCase().includes(q) ||
    p.descriptionHi.includes(query) ||
    p.tags.some(t => t.includes(q))
  );
}
