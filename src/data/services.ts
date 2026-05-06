import { 
  Fingerprint, 
  CreditCard, 
  Landmark, 
  Vote, 
  Plane, 
  FileText, 
  Gift, 
  Shield, 
  Smartphone,
  HelpCircle,
  Car,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  Baby,
  Skull,
  Building2,
  LucideIcon,
  Train,
  Zap,
  Droplets,
  Flame,
  ShieldCheck,
  Wallet,
  Scale,
  Siren,
  FileSearch,
  Receipt,
  PiggyBank,
  Stethoscope,
  HardHat,
  ScrollText,
  Home,
  MapPin,
  Accessibility,
  UserCircle,
  Tractor,
  Truck,
  CreditCard as CreditCardIcon,
  Mail,
  Building,
  HeartPulse,
  Pickaxe,
  Wifi,
  Globe,
  Briefcase,
  Package,
  Bus,
  Clock,
  Users,
  Wrench,
  BookOpen,
  Gavel,
  Eye,
  AlertTriangle,
  PhoneCall,
  Megaphone,
  HandHeart,
  TreePine,
  Factory,
  Store,
  Utensils,
  BadgeCheck,
  CircleDollarSign,
  Newspaper
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  icon: LucideIcon;
  category: string;
  themeColor: string; // HSL color for service theme
  subServices: SubService[];
}

export interface SubService {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  steps: Step[];
  documents: string[];
  eligibility?: string[];
  officialWebsite: string;
  officeName: string;
  warnings: string[];
  commonMistakes?: string[];
  problemReasons?: string[];
}

export interface Step {
  step: number;
  title: string;
  description: string;
}

export const categories = [
  { id: "aadhaar", name: "Aadhaar Services", nameHi: "आधार सेवाएं", icon: Fingerprint },
  { id: "pan", name: "PAN & Tax", nameHi: "पैन और टैक्स", icon: CreditCard },
  { id: "bank", name: "Bank Services", nameHi: "बैंक सेवाएं", icon: Landmark },
  { id: "voter", name: "Voter ID", nameHi: "वोटर आईडी", icon: Vote },
  { id: "passport", name: "Passport & Visa", nameHi: "पासपोर्ट और वीज़ा", icon: Plane },
  { id: "certificates", name: "Certificates", nameHi: "प्रमाणपत्र", icon: FileText },
  { id: "education", name: "Education & Scholarship", nameHi: "शिक्षा और छात्रवृत्ति", icon: GraduationCap },
  { id: "schemes", name: "Govt Schemes", nameHi: "सरकारी योजनाएं", icon: Gift },
  { id: "security", name: "Digital Security", nameHi: "डिजिटल सुरक्षा", icon: Shield },
  { id: "mobile", name: "SIM & Mobile", nameHi: "सिम और मोबाइल", icon: Smartphone },
  { id: "transport", name: "Transport & Travel", nameHi: "परिवहन और यात्रा", icon: Train },
  { id: "bills", name: "Bills & Payments", nameHi: "बिल और भुगतान", icon: Receipt },
  { id: "legal", name: "Legal & Courts", nameHi: "कानूनी और कोर्ट", icon: Gavel },
  { id: "health", name: "Health & Medical", nameHi: "स्वास्थ्य और चिकित्सा", icon: HeartPulse },
  { id: "agriculture", name: "Agriculture", nameHi: "कृषि", icon: Tractor },
  { id: "housing", name: "Housing & Property", nameHi: "आवास और संपत्ति", icon: Home },
  { id: "employment", name: "Employment & Labour", nameHi: "रोजगार और श्रम", icon: Briefcase },
  { id: "welfare", name: "Social Welfare", nameHi: "सामाजिक कल्याण", icon: HandHeart },
  { id: "energy", name: "Energy & Gas", nameHi: "ऊर्जा और गैस", icon: Flame },
  { id: "insurance", name: "Insurance & Pension", nameHi: "बीमा और पेंशन", icon: ShieldCheck },
  { id: "digital", name: "Digital Services", nameHi: "डिजिटल सेवाएं", icon: Globe },
  { id: "municipal", name: "Municipal Services", nameHi: "नगर निगम सेवाएं", icon: Building },
  { id: "senior", name: "Senior Citizens", nameHi: "वरिष्ठ नागरिक", icon: UserCircle },
  { id: "disability", name: "Disability Services", nameHi: "दिव्यांग सेवाएं", icon: Accessibility },
  { id: "business", name: "Business & GST", nameHi: "व्यापार और जीएसटी", icon: Store },
  { id: "postoffice", name: "Post Office", nameHi: "डाकघर", icon: Mail },
  { id: "police", name: "Police & Safety", nameHi: "पुलिस और सुरक्षा", icon: Siren },
  { id: "rti", name: "RTI & Grievance", nameHi: "आरटीआई और शिकायत", icon: FileSearch },
  { id: "food", name: "Food & Ration", nameHi: "खाद्य और राशन", icon: Utensils },
  { id: "environment", name: "Environment", nameHi: "पर्यावरण", icon: TreePine },
  { id: "help", name: "Help & FAQs", nameHi: "मदद और प्रश्न", icon: HelpCircle },
];

export const services: Service[] = [
  {
    id: "aadhaar",
    title: "Aadhaar Services",
    titleHi: "आधार सेवाएं",
    description: "Aadhaar card banwana, update karna, link karna",
    icon: Fingerprint,
    category: "aadhaar",
    themeColor: "24 95% 50%", // UIDAI Orange
    subServices: [
      {
        id: "new-aadhaar",
        title: "New Aadhaar Card",
        titleHi: "नया आधार कार्ड",
        description: "Naya Aadhaar card kaise banwayein",
        eligibility: [
          "Koi bhi Indian resident",
          "Bacche (0 se 5 saal) - parents ke documents se",
          "NRI jo 182 din se zyada India mein rahe hain"
        ],
        documents: [
          "Proof of Identity (POI) - Passport, Voter ID, Driving License",
          "Proof of Address (POA) - Ration Card, Bank Statement, Electricity Bill",
          "Proof of Date of Birth (DOB) - Birth Certificate, Passport",
          "Bacchon ke liye: Parents ka Aadhaar + Birth Certificate"
        ],
        steps: [
          { step: 1, title: "Appointment Book Karein", description: "uidai.gov.in par jaayein aur 'Book an Appointment' par click karein" },
          { step: 2, title: "Aadhaar Center Jaayein", description: "Appointment ke time par nearest Aadhaar Enrollment Center jaayein" },
          { step: 3, title: "Documents Dikhaayein", description: "Original documents dikhayein, xerox dena hoga" },
          { step: 4, title: "Biometric Dein", description: "Photo, fingerprint aur iris scan hoga" },
          { step: 5, title: "EID Slip Lein", description: "Enrollment ID slip sambhal kar rakhein - 90 din mein Aadhaar aa jayega" }
        ],
        officialWebsite: "https://uidai.gov.in",
        officeName: "UIDAI / Aadhaar Enrollment Center",
        warnings: [
          "Aadhaar enrollment bilkul FREE hai - kisi ko paisa mat dein",
          "EID slip zaroor lein, isse Aadhaar status check kar sakte hain",
          "Kabhi bhi Aadhaar OTP kisi ko share mat karein"
        ],
        commonMistakes: [
          "Agent ko paisa dena - enrollment free hai",
          "EID slip nahi lena ya kho dena",
          "Original documents nahi le jaana",
          "Galat mobile number dena"
        ],
        problemReasons: [
          "Aadhaar reject - photo blur hai ya biometric match nahi hua",
          "Delay - center par rush ya technical issue",
          "Status nahi dikh raha - 48 ghante baad check karein"
        ]
      },
      {
        id: "update-aadhaar",
        title: "Update Aadhaar Details",
        titleHi: "आधार अपडेट",
        description: "Address, mobile, name update karna",
        documents: [
          "Address update ke liye: Naya address proof (Electricity bill, Ration card)",
          "Name update ke liye: Gazette notification ya court order",
          "DOB update ke liye: Birth certificate, Passport, SSLC certificate"
        ],
        steps: [
          { step: 1, title: "myAadhaar Portal Kholein", description: "myaadhaar.uidai.gov.in par jaayein" },
          { step: 2, title: "Login Karein", description: "Aadhaar number aur OTP se login karein" },
          { step: 3, title: "Update Option Chunein", description: "Jo update karna hai wo select karein" },
          { step: 4, title: "Document Upload Karein", description: "Supporting document ki photo upload karein" },
          { step: 5, title: "Fees Pay Karein", description: "Rs. 50 online pay karein (address/name/DOB update ke liye)" },
          { step: 6, title: "URN Note Karein", description: "Update Request Number save karein status track karne ke liye" }
        ],
        officialWebsite: "https://myaadhaar.uidai.gov.in",
        officeName: "myAadhaar Portal",
        warnings: [
          "Biometric update sirf Aadhaar Center par hota hai, online nahi",
          "Mobile number update bhi center par hi hota hai",
          "Update ke baad 90 din wait karein"
        ],
        commonMistakes: [
          "Wrong document upload karna",
          "Photo quality kharab hona",
          "URN number save nahi karna"
        ],
        problemReasons: [
          "Update reject - document mismatch ya low quality image",
          "Status pending - verification mein time lagta hai",
          "OTP nahi aaya - registered mobile check karein"
        ]
      },
      {
        id: "link-aadhaar",
        title: "Link Aadhaar",
        titleHi: "आधार लिंक करें",
        description: "PAN, Bank, Mobile se Aadhaar link karna",
        documents: [
          "Aadhaar Card",
          "PAN Card (PAN linking ke liye)",
          "Bank Passbook (Bank linking ke liye)",
          "Registered Mobile Number"
        ],
        steps: [
          { step: 1, title: "Service Chunein", description: "Kya link karna hai: PAN, Bank, ya Mobile" },
          { step: 2, title: "Official Portal Jaayein", description: "PAN: incometax.gov.in | Bank: Apni bank website | Mobile: Carrier website" },
          { step: 3, title: "Details Bharein", description: "Aadhaar number aur linking details daalein" },
          { step: 4, title: "OTP Verify Karein", description: "Aadhaar registered mobile par aaya OTP daalein" },
          { step: 5, title: "Confirmation Lein", description: "Success message aur reference number note karein" }
        ],
        officialWebsite: "https://uidai.gov.in",
        officeName: "Various - PAN/Bank/Telecom",
        warnings: [
          "PAN-Aadhaar link compulsory hai, warna PAN inactive ho jayega",
          "Har linking ke liye Aadhaar registered mobile number chahiye",
          "Bank linking ke liye bank jaana pad sakta hai agar online fail ho"
        ],
        commonMistakes: [
          "Mobile number mismatch - Aadhaar aur bank mein alag mobile",
          "Name spelling different in Aadhaar and PAN",
          "OTP expire hone dena"
        ],
        problemReasons: [
          "Linking fail - naam mismatch hai dono documents mein",
          "OTP nahi aa raha - Aadhaar registered mobile check karein",
          "Already linked error - duplicate linking attempt"
        ]
      }
    ]
  },
  {
    id: "pan",
    title: "PAN & Tax Services",
    titleHi: "पैन और टैक्स सेवाएं",
    description: "PAN card, ITR filing, TDS related services",
    icon: CreditCard,
    category: "pan",
    themeColor: "210 80% 45%", // Income Tax Blue
    subServices: [
      {
        id: "new-pan",
        title: "New PAN Card",
        titleHi: "नया पैन कार्ड",
        description: "Naya PAN card kaise apply karein",
        eligibility: [
          "Koi bhi Indian citizen",
          "Companies, Firms, Trusts",
          "NRI with Indian income source"
        ],
        documents: [
          "Identity Proof - Aadhaar, Passport, Voter ID",
          "Address Proof - Aadhaar, Passport, Utility Bill",
          "Date of Birth Proof - Birth Certificate, Aadhaar, Passport",
          "Passport size photo"
        ],
        steps: [
          { step: 1, title: "NSDL/UTIITSL Site Kholein", description: "onlineservices.nsdl.com ya utiitsl.com par jaayein" },
          { step: 2, title: "Form 49A Bharein", description: "Indian citizens ke liye Form 49A select karein" },
          { step: 3, title: "Details Submit Karein", description: "Personal details, address, contact info bharein" },
          { step: 4, title: "Documents Upload Karein", description: "Photo aur signature scan karke upload karein" },
          { step: 5, title: "Fees Pay Karein", description: "Rs. 107 (Indian address) ya Rs. 1,017 (Foreign address) online pay karein" },
          { step: 6, title: "Acknowledgment Lein", description: "15-digit acknowledgment number save karein" }
        ],
        officialWebsite: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
        officeName: "NSDL / UTIITSL",
        warnings: [
          "Ek insaan ko sirf EK PAN allowed hai - duplicate PAN penalty attract karta hai",
          "PAN application ke 15-20 din mein aa jata hai",
          "Kabhi bhi agent ko documents mat dein, khud apply karein"
        ],
        commonMistakes: [
          "Duplicate PAN apply karna - heavy penalty lagti hai",
          "Aadhaar se naam match nahi karna",
          "Wrong category choose karna (Individual/Company)",
          "Photo blurry upload karna"
        ],
        problemReasons: [
          "Application reject - naam ya DOB mismatch",
          "Delay - verification pending ya documents unclear",
          "Wrong PAN aaya - application mein typo tha"
        ]
      },
      {
        id: "pan-correction",
        title: "PAN Correction",
        titleHi: "पैन करेक्शन",
        description: "PAN card mein naam, DOB, photo correct karna",
        documents: [
          "Current PAN Card copy",
          "Corrected name ke liye: Gazette, Marriage Certificate, Passport",
          "DOB correction ke liye: Birth Certificate, Passport",
          "Address correction ke liye: Aadhaar, Utility Bill"
        ],
        steps: [
          { step: 1, title: "NSDL Portal Jaayein", description: "onlineservices.nsdl.com par jaayein" },
          { step: 2, title: "Changes/Correction Select Karein", description: "'Changes or Correction in PAN data' option chunein" },
          { step: 3, title: "PAN Number Daalein", description: "Apna existing PAN number enter karein" },
          { step: 4, title: "Jo Change Karna Hai Select Karein", description: "Name, DOB, Address, Photo jo bhi change karna hai tick karein" },
          { step: 5, title: "Documents Upload Karein", description: "Supporting documents upload karein" },
          { step: 6, title: "Fees Pay Karein", description: "Rs. 107 pay karein aur submit karein" }
        ],
        officialWebsite: "https://www.onlineservices.nsdl.com",
        officeName: "NSDL",
        warnings: [
          "Minor correction 15-20 din mein ho jata hai",
          "Major changes mein thoda time lag sakta hai",
          "Old PAN card return karna padega new card aane par"
        ],
        commonMistakes: [
          "Supporting document nahi dena",
          "Multiple corrections ek saath nahi karna",
          "Wrong fees pay karna"
        ],
        problemReasons: [
          "Correction reject - document proof insufficient",
          "Card nahi mila - address wrong ya courier issue",
          "Old data still showing - system update mein delay"
        ]
      }
    ]
  },
  {
    id: "bank",
    title: "Bank & Financial Services",
    titleHi: "बैंक और वित्तीय सेवाएं",
    description: "Bank account, KYC, loan related help",
    icon: Landmark,
    category: "bank",
    themeColor: "217 70% 35%", // SBI Blue
    subServices: [
      {
        id: "open-account",
        title: "Open Bank Account",
        titleHi: "बैंक खाता खोलें",
        description: "Savings account kaise kholein",
        eligibility: [
          "Koi bhi Indian citizen 18 saal se upar",
          "Minors ke liye: Guardian ke saath joint account",
          "Valid ID aur address proof chahiye"
        ],
        documents: [
          "Identity Proof - Aadhaar Card, PAN Card, Voter ID",
          "Address Proof - Aadhaar, Utility Bill, Rent Agreement",
          "Passport size photos (2-3)",
          "PAN Card (Rs. 50,000+ transactions ke liye mandatory)"
        ],
        steps: [
          { step: 1, title: "Bank Chunein", description: "SBI, PNB, HDFC, ICICI - jo bhi pasand ho ya ghar ke paas ho" },
          { step: 2, title: "Branch Visit Karein", description: "Nearest branch jaayein ya online apply karein (major banks)" },
          { step: 3, title: "Form Bharein", description: "Account opening form mein details bharein" },
          { step: 4, title: "Documents Submit Karein", description: "Original dikhayein, xerox dein" },
          { step: 5, title: "Initial Deposit Karein", description: "Minimum balance jama karein (Zero balance accounts bhi available)" },
          { step: 6, title: "Kit Collect Karein", description: "7-10 din mein passbook, debit card, cheque book milega" }
        ],
        officialWebsite: "https://www.sbi.co.in",
        officeName: "Bank Branch",
        warnings: [
          "Jan Dhan accounts mein zero balance allowed hai",
          "Minimum balance maintain na karne par penalty lagti hai regular accounts mein",
          "ATM PIN kabhi share mat karein"
        ],
        commonMistakes: [
          "Minimum balance maintain nahi karna",
          "ATM PIN share karna ya likhna",
          "Account dormant hone dena (2 saal no transaction)",
          "KYC update nahi karna"
        ],
        problemReasons: [
          "Account freeze - KYC incomplete ya expired",
          "Transaction fail - insufficient balance ya limit exceed",
          "Debit card nahi mila - address wrong hai"
        ]
      },
      {
        id: "kyc-update",
        title: "KYC Update",
        titleHi: "KYC अपडेट",
        description: "Bank KYC aur re-KYC process",
        documents: [
          "Aadhaar Card (sabse easy for e-KYC)",
          "PAN Card",
          "Passport size photo",
          "Current address proof agar address change hua hai"
        ],
        steps: [
          { step: 1, title: "Bank App/Net Banking Kholein", description: "Ya branch mein jaayein" },
          { step: 2, title: "KYC Update Option Dhundhein", description: "Settings ya Profile section mein hoga" },
          { step: 3, title: "e-KYC Chunein", description: "Aadhaar based e-KYC sabse fast hai" },
          { step: 4, title: "OTP Verify Karein", description: "Aadhaar registered mobile par OTP aayega" },
          { step: 5, title: "Confirm Karein", description: "Details verify karke submit karein" }
        ],
        officialWebsite: "https://www.rbi.org.in",
        officeName: "Bank Branch / Net Banking",
        warnings: [
          "KYC expire hone par account freeze ho sakta hai",
          "Re-KYC reminder aaye to turant karein",
          "Video KYC bhi available hai kuch banks mein"
        ]
      }
    ]
  },
  {
    id: "passport",
    title: "Passport & Visa Services",
    titleHi: "पासपोर्ट और वीज़ा सेवाएं",
    description: "Passport apply, renewal, visa process",
    icon: Plane,
    category: "passport",
    themeColor: "0 70% 45%", // Passport Seva Red
    subServices: [
      {
        id: "new-passport",
        title: "New Passport",
        titleHi: "नया पासपोर्ट",
        description: "Fresh passport application process",
        eligibility: [
          "Indian citizen by birth ya naturalization",
          "Valid address proof India mein",
          "No pending criminal cases (generally)"
        ],
        documents: [
          "Aadhaar Card",
          "PAN Card (optional but recommended)",
          "Address Proof - Aadhaar, Voter ID, Utility Bill",
          "Birth Certificate ya 10th Marksheet (DOB proof)",
          "Passport size photos (white background)"
        ],
        steps: [
          { step: 1, title: "passportindia.gov.in Jaayein", description: "Official passport seva portal kholein" },
          { step: 2, title: "Register Karein", description: "New account banayein ya existing se login karein" },
          { step: 3, title: "Form Bharein", description: "Apply Online > Fresh Passport > Form bharein" },
          { step: 4, title: "Fees Pay Karein", description: "Normal: Rs. 1,500 | Tatkal: Rs. 3,500 (36 pages)" },
          { step: 5, title: "Appointment Book Karein", description: "Nearest PSK/POPSK chunein aur date book karein" },
          { step: 6, title: "PSK Visit Karein", description: "Appointment par jaayein - documents, photo, biometric hoga" },
          { step: 7, title: "Police Verification", description: "Post-verification ya pre-verification hogi (area wise)" }
        ],
        officialWebsite: "https://www.passportindia.gov.in",
        officeName: "Passport Seva Kendra (PSK)",
        warnings: [
          "Tatkal mein bhi 1-3 hafte lag sakte hain",
          "Police verification mein issues hone par delay hota hai",
          "Original documents PSK le jaana mandatory hai"
        ],
        commonMistakes: [
          "Wrong appointment slot book karna",
          "Original documents bhoolna",
          "Photo specifications follow nahi karna",
          "Annexures nahi le jaana"
        ],
        problemReasons: [
          "Application reject - document mismatch ya police verification fail",
          "Delay - address verification pending",
          "Passport hold - court case ya other legal issue"
        ]
      },
      {
        id: "passport-renewal",
        title: "Passport Renewal",
        titleHi: "पासपोर्ट रिन्यूअल",
        description: "Expired passport renew karna",
        documents: [
          "Old Passport (original)",
          "Aadhaar Card",
          "Address Proof (agar address change hua hai)",
          "Passport size photos"
        ],
        steps: [
          { step: 1, title: "Portal Par Jaayein", description: "passportindia.gov.in par login karein" },
          { step: 2, title: "Re-issue Option Chunein", description: "Apply Online > Re-issue of Passport" },
          { step: 3, title: "Form Bharein", description: "Old passport details aur new details bharein" },
          { step: 4, title: "Fees Pay Karein", description: "Rs. 1,500 (Normal) + appointment book karein" },
          { step: 5, title: "PSK Jaayein", description: "Documents verify honge, biometric hoga" },
          { step: 6, title: "Naya Passport Aayega", description: "Speed Post se ghar aa jayega" }
        ],
        officialWebsite: "https://www.passportindia.gov.in",
        officeName: "Passport Seva Kendra (PSK)",
        warnings: [
          "Expire hone se pehle renewal kar lein - last moment rush avoid karein",
          "Address change hua to police verification dobara hogi",
          "ECR/ECNR status check kar lein renewal mein"
        ]
      }
    ]
  },
  {
    id: "schemes",
    title: "Government Schemes",
    titleHi: "सरकारी योजनाएं",
    description: "PM schemes, subsidies, scholarships",
    icon: Gift,
    category: "schemes",
    themeColor: "142 60% 40%", // India.gov.in Green
    subServices: [
      {
        id: "pm-kisan",
        title: "PM Kisan Samman Nidhi",
        titleHi: "पीएम किसान सम्मान निधि",
        description: "Kisano ko Rs. 6,000 yearly",
        eligibility: [
          "Small aur marginal farmer families",
          "Cultivable land honi chahiye naam par",
          "Institutional landholders eligible nahi",
          "Tax payers eligible nahi"
        ],
        documents: [
          "Aadhaar Card",
          "Land Records / Khatauni",
          "Bank Account Details",
          "Mobile Number"
        ],
        steps: [
          { step: 1, title: "pmkisan.gov.in Jaayein", description: "Official PM-KISAN portal kholein" },
          { step: 2, title: "Farmer Corner Mein Jaayein", description: "New Farmer Registration click karein" },
          { step: 3, title: "State/District Chunein", description: "Apna state, district, sub-district, block bharein" },
          { step: 4, title: "Aadhaar Details Daalein", description: "Aadhaar number aur naam enter karein" },
          { step: 5, title: "Land Details Bharein", description: "Khata number, khasra number, area bharein" },
          { step: 6, title: "Bank Details Daalein", description: "Account number aur IFSC code daalein" },
          { step: 7, title: "Submit Karein", description: "OTP verify karke submit karein" }
        ],
        officialWebsite: "https://pmkisan.gov.in",
        officeName: "PM-KISAN Portal / CSC Center",
        warnings: [
          "Rs. 2,000 har 4 mahine aata hai (3 installments)",
          "Aadhaar-bank linking mandatory hai",
          "Galat details dene par recovery hoti hai"
        ],
        commonMistakes: [
          "Galat land records dena",
          "Aadhaar-bank mein naam match nahi",
          "Double registration attempt",
          "Income tax file karna (ineligible ho jaoge)"
        ],
        problemReasons: [
          "Payment nahi aaya - Aadhaar seeding incomplete",
          "Application reject - land records verify nahi hue",
          "Status pending - state approval awaited"
        ]
      },
      {
        id: "ayushman-bharat",
        title: "Ayushman Bharat",
        titleHi: "आयुष्मान भारत",
        description: "Rs. 5 lakh health insurance free",
        eligibility: [
          "SECC 2011 database mein listed families",
          "BPL category families",
          "Ration card holders (most states)"
        ],
        documents: [
          "Aadhaar Card",
          "Ration Card (helpful)",
          "Any government ID",
          "Mobile Number"
        ],
        steps: [
          { step: 1, title: "Eligibility Check Karein", description: "mera.pmjay.gov.in par jaayein aur mobile/Aadhaar se check karein" },
          { step: 2, title: "CSC Center Jaayein", description: "Agar eligible hain to nearest CSC/Ayushman Mitra ke paas jaayein" },
          { step: 3, title: "e-Card Banwayein", description: "Aadhaar aur photo se Ayushman card banega" },
          { step: 4, title: "Card Collect Karein", description: "Turant ya kuch din mein card mil jayega" },
          { step: 5, title: "Hospital Mein Use Karein", description: "Empanelled hospital mein card dikha kar free treatment lein" }
        ],
        officialWebsite: "https://pmjay.gov.in",
        officeName: "Ayushman Bharat / PMJAY",
        warnings: [
          "Sirf empanelled hospitals mein valid hai",
          "Card banwana bilkul FREE hai",
          "Rs. 5 lakh per family per year coverage hai"
        ],
        commonMistakes: [
          "Non-empanelled hospital mein jaana",
          "Card expire hone dena",
          "Fake agent ko fees dena",
          "Family members ka naam add nahi karna"
        ],
        problemReasons: [
          "Claim reject - treatment not covered under scheme",
          "Card nahi ban raha - SECC list mein naam nahi",
          "Hospital deny kar raha - hospital empanelled nahi hai"
        ]
      },
      {
        id: "pm-awas-yojana",
        title: "PM Awas Yojana (PMAY)",
        titleHi: "पीएम आवास योजना",
        description: "Gareeb parivaron ke liye pucca ghar",
        eligibility: [
          "EWS (Economically Weaker Section) - Annual income Rs. 3 lakh tak",
          "LIG (Low Income Group) - Annual income Rs. 3-6 lakh",
          "MIG-I - Annual income Rs. 6-12 lakh",
          "MIG-II - Annual income Rs. 12-18 lakh",
          "Applicant ya family member ke naam par India mein pucca ghar nahi hona chahiye",
          "Married couples mein sirf ek application valid hai"
        ],
        documents: [
          "Aadhaar Card (mandatory)",
          "Income Certificate / Salary Slip",
          "Bank Account Details",
          "Land Documents (agar naya ghar banana hai)",
          "Caste Certificate (SC/ST/OBC ke liye)",
          "Photograph",
          "Mobile Number"
        ],
        steps: [
          { step: 1, title: "Official Portal Jaayein", description: "pmaymis.gov.in par jaayein (Urban) ya pmayg.nic.in (Rural/Gramin)" },
          { step: 2, title: "Citizen Assessment Chunein", description: "Urban ke liye 'Citizen Assessment' par click karein" },
          { step: 3, title: "Category Select Karein", description: "Slum Dweller / Beneficiary-led Construction / Affordable Housing chunein" },
          { step: 4, title: "Aadhaar Verify Karein", description: "Aadhaar number daalein aur OTP se verify karein" },
          { step: 5, title: "Form Bharein", description: "Personal, family, income, aur land details bharein" },
          { step: 6, title: "Documents Upload Karein", description: "Required documents scan karke upload karein" },
          { step: 7, title: "Submit Karein", description: "Form submit karein aur Application ID note karein" },
          { step: 8, title: "Verification Hogi", description: "Local authority verify karegi, phir subsidy approve hogi" }
        ],
        officialWebsite: "https://pmaymis.gov.in",
        officeName: "PMAY Urban/Gramin Portal / Municipal Office",
        warnings: [
          "Subsidy amount: EWS/LIG - Rs. 1.5-2.67 lakh, MIG - Rs. 2.35-2.67 lakh",
          "Pehle se pucca ghar hai to eligible nahi",
          "Application FREE hai - kisi ko fees mat dein",
          "Verification mein 2-6 months lag sakte hain",
          "Fake agents se bachein - sirf official portal use karein"
        ]
      },
      {
        id: "sukanya-samriddhi",
        title: "Sukanya Samriddhi Yojana",
        titleHi: "सुकन्या समृद्धि योजना",
        description: "Beti ke bhavishya ke liye savings scheme",
        eligibility: [
          "Girl child 10 saal se kam umar ki",
          "Per family maximum 2 accounts (2 betiyon ke liye)",
          "Parents ya legal guardian apply kar sakte hain",
          "Indian resident hona chahiye"
        ],
        documents: [
          "Beti ka Birth Certificate",
          "Parent/Guardian ka Aadhaar Card",
          "Parent/Guardian ka Address Proof",
          "Passport size photos (beti aur guardian ke)",
          "Medical Certificate (twin/triplet case mein)"
        ],
        steps: [
          { step: 1, title: "Bank/Post Office Jaayein", description: "Nearest SBI, PNB, Post Office ya authorized bank jaayein" },
          { step: 2, title: "Form Lein", description: "Sukanya Samriddhi Account opening form maangein" },
          { step: 3, title: "Form Bharein", description: "Beti aur guardian ki details bharein" },
          { step: 4, title: "Documents Submit Karein", description: "Birth certificate aur ID proofs dein" },
          { step: 5, title: "Initial Deposit Karein", description: "Minimum Rs. 250 se account khulega (Max Rs. 1.5 lakh per year)" },
          { step: 6, title: "Passbook Lein", description: "Account passbook mil jayegi turant ya kuch din mein" }
        ],
        officialWebsite: "https://www.nsiindia.gov.in",
        officeName: "Post Office / Authorized Banks",
        warnings: [
          "Interest rate: ~8% per annum (government decide karta hai quarterly)",
          "Account 21 saal ya beti ki shaadi (18+ ke baad) tak chalta hai",
          "Har saal minimum Rs. 250 deposit mandatory hai",
          "50% withdrawal allowed at 18 years for education",
          "Tax benefit Section 80C ke under milta hai",
          "Account ek bank se doosre mein transfer ho sakta hai"
        ]
      },
      {
        id: "pm-ujjwala",
        title: "PM Ujjwala Yojana",
        titleHi: "पीएम उज्ज्वला योजना",
        description: "Gareeb mahilaon ke liye free LPG connection",
        eligibility: [
          "BPL (Below Poverty Line) parivaar ki mahila",
          "SECC-2011 database mein naam hona chahiye",
          "18 saal se upar ki mahila",
          "Ghar mein pehle se LPG connection nahi hona chahiye"
        ],
        documents: [
          "Aadhaar Card (mahila ka)",
          "BPL Ration Card / SECC list mein naam",
          "Bank Account (mahila ke naam ka)",
          "Passport size photo",
          "Mobile Number"
        ],
        steps: [
          { step: 1, title: "Eligibility Check Karein", description: "pmuy.gov.in par jaayein aur eligibility check karein" },
          { step: 2, title: "Gas Distributor Jaayein", description: "Nearest HP, Indane, ya Bharat Gas distributor ke paas jaayein" },
          { step: 3, title: "Form Bharein", description: "Ujjwala application form bharein" },
          { step: 4, title: "Documents Dein", description: "Aadhaar, ration card, bank details dein" },
          { step: 5, title: "Verification Hogi", description: "Distributor documents verify karega" },
          { step: 6, title: "Connection Milega", description: "FREE connection milega, cylinder ke liye subsidy bank mein aayegi" }
        ],
        officialWebsite: "https://pmuy.gov.in",
        officeName: "LPG Distributor / Oil Company",
        warnings: [
          "Connection bilkul FREE hai - kisi ko paisa mat dein",
          "Stove bhi free milta hai scheme mein",
          "Subsidy seedha bank account mein aati hai",
          "Fake agents se savdhaan rahein"
        ]
      },
      {
        id: "pm-kaushal-vikas",
        title: "PM Kaushal Vikas Yojana",
        titleHi: "पीएम कौशल विकास योजना",
        description: "Free skill training aur certificate",
        eligibility: [
          "Indian citizen",
          "15-45 saal umar (course ke hisab se vary karta hai)",
          "10th/12th pass (course ke hisab se)",
          "Employed/Unemployed dono eligible"
        ],
        documents: [
          "Aadhaar Card",
          "Educational Certificates (10th/12th marksheet)",
          "Bank Account Details",
          "Passport size photo",
          "Mobile Number"
        ],
        steps: [
          { step: 1, title: "Skill India Portal Jaayein", description: "skillindia.gov.in par jaayein" },
          { step: 2, title: "Register Karein", description: "Candidate ke taur par register karein" },
          { step: 3, title: "Course Chunein", description: "IT, Healthcare, Retail, Beauty, Automotive jaise sectors mein course chunein" },
          { step: 4, title: "Training Center Dhundhein", description: "Nearest certified training center select karein" },
          { step: 5, title: "Enrollment Karein", description: "Center par jaayein aur admission lein" },
          { step: 6, title: "Training Complete Karein", description: "2-6 months ki training attend karein" },
          { step: 7, title: "Certificate Paayein", description: "Exam pass karne par government certified certificate milega" }
        ],
        officialWebsite: "https://www.skillindia.gov.in",
        officeName: "Skill India / PMKVY Training Centers",
        warnings: [
          "Training bilkul FREE hai",
          "Certificate nationally recognized hai",
          "Placement assistance bhi milti hai",
          "Sirf authorized training partners se training lein"
        ]
      },
      {
        id: "atal-pension",
        title: "Atal Pension Yojana (APY)",
        titleHi: "अटल पेंशन योजना",
        description: "Budhape mein guaranteed pension scheme",
        eligibility: [
          "18-40 saal umar ke Indian citizens",
          "Bank/Post Office savings account hona chahiye",
          "Aadhaar aur mobile number linked hona chahiye",
          "Government employees eligible nahi hain",
          "Income tax payers eligible nahi hain (2016 se)"
        ],
        documents: [
          "Aadhaar Card",
          "Bank Account Passbook",
          "Mobile Number (bank se linked)",
          "Nominee details (Aadhaar preferred)"
        ],
        steps: [
          { step: 1, title: "Bank Branch Jaayein", description: "Apne savings account wali bank branch jaayein" },
          { step: 2, title: "APY Form Maangein", description: "Atal Pension Yojana application form lein" },
          { step: 3, title: "Pension Amount Chunein", description: "Rs. 1000, 2000, 3000, 4000 ya 5000 monthly pension chunein" },
          { step: 4, title: "Form Bharein", description: "Personal details, nominee details bharein" },
          { step: 5, title: "Auto-Debit Consent Dein", description: "Monthly contribution auto-debit ke liye consent form sign karein" },
          { step: 6, title: "PRAN Receive Karein", description: "Permanent Retirement Account Number (PRAN) mil jayega" }
        ],
        officialWebsite: "https://www.npscra.nsdl.co.in/scheme-details.php",
        officeName: "Bank Branch / Post Office",
        warnings: [
          "Monthly contribution Rs. 42 se Rs. 1,454 tak hota hai (age aur pension amount ke hisab se)",
          "60 saal ki umar ke baad pension shuru hoti hai",
          "Jaldi join karein = kam contribution dena padega",
          "Government bhi 50% contribution deti hai (5 saal tak, kuch conditions par)",
          "Beech mein band karne par penalty lagti hai"
        ]
      },
      {
        id: "jan-dhan",
        title: "Jan Dhan Yojana",
        titleHi: "जन धन योजना",
        description: "Zero balance bank account with insurance",
        eligibility: [
          "Koi bhi Indian citizen",
          "10 saal se upar ka baccha bhi eligible (guardian ke saath)",
          "Valid ID proof chahiye",
          "Pehle se bank account ho to bhi Jan Dhan mein convert ho sakta hai"
        ],
        documents: [
          "Aadhaar Card (sabse easy - sirf ye bhi chalega)",
          "Ya koi 2 documents: Voter ID, Driving License, NREGA Card, PAN",
          "Passport size photo",
          "Address proof (agar Aadhaar mein nahi hai)"
        ],
        steps: [
          { step: 1, title: "Nearest Bank Jaayein", description: "Koi bhi nationalized bank - SBI, PNB, BOB, etc." },
          { step: 2, title: "Jan Dhan Form Maangein", description: "PMJDY account opening form lein" },
          { step: 3, title: "Form Bharein", description: "Simple details bharein - naam, address, nominee" },
          { step: 4, title: "Documents Dein", description: "Aadhaar ya other ID proof ki copy dein" },
          { step: 5, title: "Photo Dein", description: "Passport size photo chipkayein" },
          { step: 6, title: "Account Khul Jayega", description: "Turant account number milega, RuPay card baad mein aayega" }
        ],
        officialWebsite: "https://pmjdy.gov.in",
        officeName: "Any Nationalized Bank Branch",
        warnings: [
          "Zero balance account hai - minimum balance ki zaroorat nahi",
          "FREE RuPay debit card milta hai",
          "Rs. 2 lakh accident insurance FREE milta hai",
          "Rs. 30,000 life insurance bhi milta hai (conditions apply)",
          "Overdraft facility Rs. 10,000 tak mil sakti hai",
          "Mobile banking bhi activate karwa sakte hain"
        ]
      },
      {
        id: "mudra-loan",
        title: "PM Mudra Yojana",
        titleHi: "पीएम मुद्रा योजना",
        description: "Chhote business ke liye bina guarantee loan",
        eligibility: [
          "Koi bhi Indian citizen jo business karna chahta hai",
          "Manufacturing, trading, service sector eligible",
          "Existing small business owners bhi eligible",
          "Non-corporate, non-farm small/micro enterprises"
        ],
        documents: [
          "Aadhaar Card",
          "PAN Card (Rs. 2 lakh se upar loan ke liye)",
          "Business plan / proposal",
          "Address proof (business aur personal)",
          "Identity proof",
          "Passport size photos",
          "Category certificate (SC/ST/OBC agar applicable)",
          "Existing business ke liye: Registration, ITR, Bank statements"
        ],
        steps: [
          { step: 1, title: "Loan Type Samjhein", description: "Shishu: Rs. 50,000 tak | Kishore: Rs. 50,000-5 lakh | Tarun: Rs. 5-10 lakh" },
          { step: 2, title: "Bank/NBFC Jaayein", description: "SBI, PNB ya koi bhi Mudra partner bank/NBFC jaayein" },
          { step: 3, title: "Application Form Bharein", description: "Mudra loan application form complete karein" },
          { step: 4, title: "Business Plan Dein", description: "Kya business hai, kitna paisa chahiye, kaise use karenge - detail mein likhein" },
          { step: 5, title: "Documents Submit Karein", description: "Saare required documents ki copies dein" },
          { step: 6, title: "Interview/Verification", description: "Bank officer questions poochhega, site visit ho sakti hai" },
          { step: 7, title: "Loan Sanction", description: "Approval ke baad loan amount account mein aayega" }
        ],
        officialWebsite: "https://www.mudra.org.in",
        officeName: "Banks / NBFCs / MFIs",
        warnings: [
          "Collateral/Guarantee ki zaroorat NAHI hai",
          "Interest rate bank ke hisab se vary karta hai (8-12% approx)",
          "Shishu loan sabse easily milta hai",
          "Business plan achha ho to approval chances badhte hain",
          "Loan repay karna compulsory hai - ye grant nahi hai",
          "Online bhi apply kar sakte hain udyamimitra.in par"
        ]
      },
      {
        id: "stand-up-india",
        title: "Stand Up India",
        titleHi: "स्टैंड अप इंडिया",
        description: "SC/ST aur mahilaon ke liye business loan",
        eligibility: [
          "SC/ST category ke log",
          "Ya koi bhi mahila entrepreneur",
          "18 saal se upar",
          "First-time entrepreneur ko preference",
          "Manufacturing, service, trading sector eligible"
        ],
        documents: [
          "Aadhaar Card",
          "PAN Card",
          "Caste Certificate (SC/ST ke liye)",
          "Business plan",
          "Address proof",
          "Educational certificates",
          "Bank statements (existing business ke liye)"
        ],
        steps: [
          { step: 1, title: "Portal Par Jaayein", description: "standupmitra.in par register karein" },
          { step: 2, title: "Profile Banayein", description: "Personal aur business details bharein" },
          { step: 3, title: "Loan Apply Karein", description: "Rs. 10 lakh se Rs. 1 crore tak loan ke liye apply karein" },
          { step: 4, title: "Bank Select Karein", description: "Nearest bank branch select karein" },
          { step: 5, title: "Documents Submit Karein", description: "Bank mein jaake documents verify karwayein" },
          { step: 6, title: "Training (Optional)", description: "Entrepreneurship training bhi le sakte hain" },
          { step: 7, title: "Loan Disbursement", description: "Approval ke baad amount credit hoga" }
        ],
        officialWebsite: "https://www.standupmitra.in",
        officeName: "Scheduled Commercial Banks",
        warnings: [
          "Loan Rs. 10 lakh se Rs. 1 crore tak milta hai",
          "51% ownership entrepreneur ki honi chahiye",
          "Repayment period 7 saal tak",
          "Moratorium period bhi milta hai",
          "Margin money 15-25% khud lagana padta hai"
        ]
      },
      {
        id: "epf-services",
        title: "EPF/PF Services",
        titleHi: "ईपीएफ/पीएफ सेवाएं",
        description: "Employee Provident Fund - withdrawal, transfer, claim",
        eligibility: [
          "Salaried employees jinka EPF account hai",
          "20+ employees wali companies mein mandatory",
          "Retired/resigned employees",
          "UAN registered hona chahiye"
        ],
        documents: [
          "UAN (Universal Account Number)",
          "Aadhaar Card (UAN se linked)",
          "PAN Card",
          "Bank Account Details",
          "Previous employer details (transfer ke liye)"
        ],
        steps: [
          { step: 1, title: "EPFO Portal Jaayein", description: "unifiedportal-mem.epfindia.gov.in par jaayein" },
          { step: 2, title: "UAN Se Login Karein", description: "UAN aur password se login karein" },
          { step: 3, title: "Service Select Karein", description: "Claim, Transfer, ya Update service chunein" },
          { step: 4, title: "Aadhaar OTP Verify Karein", description: "Aadhaar registered mobile par OTP aayega" },
          { step: 5, title: "Bank Details Confirm Karein", description: "Withdrawal ke liye bank account verify karein" },
          { step: 6, title: "Submit Karein", description: "Claim submit karein - 10-15 din mein process hoga" }
        ],
        officialWebsite: "https://www.epfindia.gov.in",
        officeName: "EPFO / Employees' Provident Fund Organisation",
        warnings: [
          "UAN active aur Aadhaar linked hona compulsory hai",
          "5 saal se pehle withdrawal par TDS lagta hai",
          "Online claim sirf Aadhaar seeded accounts ke liye",
          "Umang app se bhi services access kar sakte hain"
        ]
      },
      {
        id: "e-shram",
        title: "E-Shram Card",
        titleHi: "ई-श्रम कार्ड",
        description: "Unorganized workers ke liye registration aur benefits",
        eligibility: [
          "16-59 saal ke unorganized sector workers",
          "Construction workers, street vendors, domestic workers",
          "Agricultural labourers, gig workers",
          "EPFO/ESIC member nahi hone chahiye",
          "Income tax payer nahi hona chahiye"
        ],
        documents: [
          "Aadhaar Card (mandatory)",
          "Mobile Number (Aadhaar se linked)",
          "Bank Account Details",
          "IFSC Code"
        ],
        steps: [
          { step: 1, title: "eshram.gov.in Jaayein", description: "Official E-Shram portal kholein" },
          { step: 2, title: "Self Registration Chunein", description: "Mobile number aur captcha daalein" },
          { step: 3, title: "Aadhaar Verify Karein", description: "Aadhaar number daalein, OTP se verify karein" },
          { step: 4, title: "Details Bharein", description: "Personal, address, occupation details bharein" },
          { step: 5, title: "Bank Details Daalein", description: "Bank account aur IFSC code daalein" },
          { step: 6, title: "Card Download Karein", description: "12-digit UAN milega, E-Shram card download karein" }
        ],
        officialWebsite: "https://eshram.gov.in",
        officeName: "Ministry of Labour / E-Shram Portal",
        warnings: [
          "Registration bilkul FREE hai",
          "Rs. 2 lakh accidental insurance coverage milti hai",
          "Future government schemes ka benefit seedha milega",
          "CSC center par bhi registration karwa sakte hain"
        ]
      },
      {
        id: "lpg-gas-subsidy",
        title: "LPG Gas Subsidy",
        titleHi: "एलपीजी गैस सब्सिडी",
        description: "Gas cylinder par subsidy kaise lein",
        eligibility: [
          "LPG connection holder",
          "Bank account Aadhaar se linked hona chahiye",
          "Subsidy scheme mein enrolled hona chahiye",
          "High income group give up kar sakta hai (PAHAL scheme)"
        ],
        documents: [
          "Aadhaar Card",
          "LPG Consumer Number / ID",
          "Bank Account (Aadhaar linked)",
          "Mobile Number"
        ],
        steps: [
          { step: 1, title: "Aadhaar Link Karein", description: "Bank account mein Aadhaar link hona chahiye" },
          { step: 2, title: "LPG ID Link Karein", description: "Gas distributor ya mylpg.in par Aadhaar ko LPG ID se link karein" },
          { step: 3, title: "PAHAL Mein Enroll Karein", description: "mylpg.in par PAHAL scheme check karein" },
          { step: 4, title: "Cylinder Book Karein", description: "Market price par cylinder lein" },
          { step: 5, title: "Subsidy Paayein", description: "Subsidy seedha bank account mein aa jayegi DBT se" }
        ],
        officialWebsite: "https://mylpg.in",
        officeName: "Oil Marketing Companies / Gas Distributor",
        warnings: [
          "Subsidy amount government decide karta hai (vary karta hai)",
          "Aadhaar-bank seeding mandatory hai subsidy ke liye",
          "12 cylinders per year subsidized rate par milte hain",
          "High income holders can 'Give It Up' campaign join karein"
        ]
      },
      {
        id: "income-tax-filing",
        title: "Income Tax Filing (ITR)",
        titleHi: "इनकम टैक्स फाइलिंग",
        description: "ITR kaise file karein online",
        eligibility: [
          "Taxable income ho ya TDS kata ho",
          "Salary/Business income wale",
          "Capital gains, rental income wale",
          "NRIs with Indian income",
          "Voluntary filing bhi kar sakte hain"
        ],
        documents: [
          "PAN Card",
          "Aadhaar Card",
          "Form 16 (salaried employees ke liye)",
          "Bank Statements / Interest Certificates",
          "Investment proofs (80C, 80D deductions ke liye)",
          "Capital gains documents (agar applicable)"
        ],
        steps: [
          { step: 1, title: "incometax.gov.in Jaayein", description: "Income Tax e-filing portal kholein" },
          { step: 2, title: "Register/Login Karein", description: "PAN se register karein ya existing account se login" },
          { step: 3, title: "ITR Form Select Karein", description: "ITR-1 (salaried), ITR-2, ITR-3, etc. apne case ke hisab se" },
          { step: 4, title: "Income Details Bharein", description: "Salary, other income, deductions, TDS details daalein" },
          { step: 5, title: "Verify Karein", description: "Pre-filled data check karein, corrections karein" },
          { step: 6, title: "Tax Pay Karein", description: "Agar tax due hai to online pay karein" },
          { step: 7, title: "E-Verify Karein", description: "Aadhaar OTP ya net banking se ITR verify karein" }
        ],
        officialWebsite: "https://www.incometax.gov.in",
        officeName: "Income Tax Department",
        warnings: [
          "Due date usually 31st July hoti hai (extensions check karein)",
          "Late filing par penalty lagti hai",
          "ITR verify karna mandatory hai - 30 din mein karna hota hai",
          "AIS (Annual Information Statement) zaroor check karein filing se pehle",
          "Form 26AS mein TDS details verify karein"
        ]
      },
      {
        id: "pm-jeevan-jyoti-bima",
        title: "PM Jeevan Jyoti Bima Yojana",
        titleHi: "पीएम जीवन ज्योति बीमा योजना",
        description: "Rs. 2 lakh life insurance sirf Rs. 436/year mein",
        eligibility: [
          "18-55 saal umar ke Indian citizens",
          "Bank savings account hona chahiye",
          "Aadhaar bank se linked hona chahiye"
        ],
        documents: ["Aadhaar Card", "Bank Account Passbook", "Nominee details", "Mobile Number"],
        steps: [
          { step: 1, title: "Bank Branch Jaayein", description: "Apne savings account wali bank branch jaayein" },
          { step: 2, title: "PMJJBY Form Bharein", description: "Pradhan Mantri Jeevan Jyoti Bima Yojana form lein aur bharein" },
          { step: 3, title: "Auto-Debit Consent", description: "Rs. 436 yearly auto-debit ke liye consent dein" },
          { step: 4, title: "Nominee Details Dein", description: "Nominee ka naam aur relation bharein" },
          { step: 5, title: "Confirmation Lein", description: "Enrollment confirmation aur policy details lein" }
        ],
        officialWebsite: "https://www.jansuraksha.gov.in",
        officeName: "Bank Branch / Jan Suraksha Portal",
        warnings: [
          "Premium sirf Rs. 436/year hai - har saal auto-debit hota hai",
          "Rs. 2 lakh death benefit nominee ko milta hai",
          "55 saal ke baad policy renew nahi hoti",
          "Har saal 1st June ko auto-renew hota hai"
        ]
      },
      {
        id: "pm-suraksha-bima",
        title: "PM Suraksha Bima Yojana",
        titleHi: "पीएम सुरक्षा बीमा योजना",
        description: "Rs. 2 lakh accident insurance sirf Rs. 20/year",
        eligibility: [
          "18-70 saal umar ke Indian citizens",
          "Bank savings account hona chahiye",
          "Aadhaar bank se linked hona chahiye"
        ],
        documents: ["Aadhaar Card", "Bank Account Passbook", "Nominee details", "Mobile Number"],
        steps: [
          { step: 1, title: "Bank Branch Jaayein", description: "Apne savings account wali bank branch jaayein" },
          { step: 2, title: "PMSBY Form Bharein", description: "Suraksha Bima form lein aur bharein" },
          { step: 3, title: "Auto-Debit Consent", description: "Rs. 20 yearly auto-debit ke liye consent dein" },
          { step: 4, title: "Nominee Details", description: "Nominee ka naam aur relation bharein" },
          { step: 5, title: "Enrollment Done", description: "Confirmation lein - coverage shuru" }
        ],
        officialWebsite: "https://www.jansuraksha.gov.in",
        officeName: "Bank Branch / Jan Suraksha Portal",
        warnings: [
          "Sirf Rs. 20/year premium - sabse sasta insurance",
          "Accidental death: Rs. 2 lakh | Partial disability: Rs. 1 lakh",
          "Har saal 1st June ko renew hota hai",
          "Natural death cover nahi hai - sirf accident"
        ]
      },
      {
        id: "sovereign-gold-bond",
        title: "Sovereign Gold Bond Scheme",
        titleHi: "सॉवरेन गोल्ड बॉन्ड योजना",
        description: "Sarkari guarantee ke saath gold mein investment",
        eligibility: [
          "Indian resident individuals, HUFs, Trusts, Universities",
          "Minimum 1 gram gold se investment",
          "Maximum 4 kg per individual per year"
        ],
        documents: ["PAN Card (mandatory)", "Aadhaar Card", "Bank Account", "Passport size photo"],
        steps: [
          { step: 1, title: "Issue Period Check Karein", description: "RBI website par SGB issue dates check karein" },
          { step: 2, title: "Bank/Post Office Jaayein", description: "Authorized bank, post office ya stock exchange par apply karein" },
          { step: 3, title: "Application Form Bharein", description: "SGB application form mein investment amount bharein" },
          { step: 4, title: "Payment Karein", description: "Online payment par Rs. 50/gram discount milta hai" },
          { step: 5, title: "Bond Certificate Paayein", description: "Demat ya physical certificate milega" }
        ],
        officialWebsite: "https://www.rbi.org.in",
        officeName: "RBI / Authorized Banks / Post Office",
        warnings: [
          "2.5% yearly interest milta hai gold price ke upar",
          "8 saal ki maturity par tax-free capital gains",
          "Physical gold rakhne ki zaroorat nahi",
          "5 saal baad premature exit allowed hai"
        ]
      },
      {
        id: "gold-monetization",
        title: "Gold Monetization Scheme",
        titleHi: "गोल्ड मोनेटाइजेशन स्कीम",
        description: "Ghar ka sona bank mein rakhein aur interest kamayein",
        eligibility: [
          "Koi bhi Indian resident",
          "Minimum 30 gram raw gold (jewellery/coins)",
          "Trusts, HUFs bhi eligible"
        ],
        documents: ["Aadhaar Card", "PAN Card", "Bank Account", "KYC documents"],
        steps: [
          { step: 1, title: "Authorized Bank Jaayein", description: "SBI, PNB ya authorized bank branch jaayein" },
          { step: 2, title: "Gold Jama Karein", description: "Minimum 30 gram gold deposit karein" },
          { step: 3, title: "Purity Test Hoga", description: "BIS certified hallmarking center par gold test hoga" },
          { step: 4, title: "Certificate Paayein", description: "Gold quantity aur purity certificate milega" },
          { step: 5, title: "Interest Kamayein", description: "Gold deposit par interest earned hoga" }
        ],
        officialWebsite: "https://www.rbi.org.in",
        officeName: "Authorized Bank Branches",
        warnings: [
          "Interest rate 2.25-2.50% per annum hai",
          "Short-term: 1-3 years, Medium: 5-7 years, Long: 12-15 years",
          "Maturity par gold ya equivalent rupees milenge",
          "Tax benefit available hai"
        ]
      },
      {
        id: "pm-fasal-bima",
        title: "PM Fasal Bima Yojana",
        titleHi: "पीएम फसल बीमा योजना",
        description: "Fasal ka insurance - natural disaster se protection",
        eligibility: [
          "Sabhi kisaan jo notified crops ugate hain",
          "Loanee farmers ke liye mandatory tha (ab voluntary)",
          "Non-loanee farmers bhi eligible",
          "Share-croppers aur tenant farmers bhi eligible"
        ],
        documents: ["Aadhaar Card", "Land Records / Khatauni", "Bank Account", "Sowing Certificate", "Previous season crop details"],
        steps: [
          { step: 1, title: "pmfby.gov.in Jaayein", description: "Official PM Fasal Bima portal kholein" },
          { step: 2, title: "Farmer Registration", description: "Mobile number se register karein" },
          { step: 3, title: "Crop Details Bharein", description: "Fasal ka naam, area, season select karein" },
          { step: 4, title: "Premium Pay Karein", description: "Kharif: 2%, Rabi: 1.5%, Commercial: 5% premium" },
          { step: 5, title: "Policy Lein", description: "Insurance policy certificate download karein" },
          { step: 6, title: "Claim Karein (zaroort padne par)", description: "Crop loss hone par 72 ghante mein report karein" }
        ],
        officialWebsite: "https://pmfby.gov.in",
        officeName: "Agriculture Department / Insurance Company",
        warnings: [
          "Premium bahut kam hai - govt baaki pay karti hai",
          "Claim ke liye 72 ghante mein report karna zaroori",
          "CSC center par bhi enrollment ho sakta hai",
          "Technology based crop assessment hota hai"
        ]
      },
      {
        id: "pm-krishi-sinchai",
        title: "PM Krishi Sinchai Yojana",
        titleHi: "पीएम कृषि सिंचाई योजना",
        description: "Har khet ko paani - irrigation scheme",
        eligibility: [
          "Sabhi farmer categories eligible",
          "Individual farmers aur farmer groups",
          "Water User Associations",
          "State ke irrigation plan mein included areas"
        ],
        documents: ["Aadhaar Card", "Land Records", "Bank Account", "Farm area details"],
        steps: [
          { step: 1, title: "Agriculture Office Jaayein", description: "District Agriculture Officer se milein" },
          { step: 2, title: "Application Form Bharein", description: "PMKSY subsidy ke liye form bharein" },
          { step: 3, title: "Land Details Submit", description: "Land records aur irrigation plan submit karein" },
          { step: 4, title: "Approval Wait", description: "Department approval aur site inspection" },
          { step: 5, title: "Equipment Install", description: "Drip/sprinkler irrigation par subsidy milegi" }
        ],
        officialWebsite: "https://pmksy.gov.in",
        officeName: "Agriculture Department / Water Resources",
        warnings: [
          "Micro irrigation (drip/sprinkler) par 55-75% subsidy",
          "Per Drop More Crop component popular hai",
          "State agriculture department se apply karein",
          "Community projects ko priority milti hai"
        ]
      },
      {
        id: "soil-health-card",
        title: "Soil Health Card Scheme",
        titleHi: "मृदा स्वास्थ्य कार्ड योजना",
        description: "Mitti ki jaanch aur fertilizer recommendation",
        eligibility: ["Sabhi kisaan eligible hain", "Agricultural land owner ya tenant farmer"],
        documents: ["Aadhaar Card", "Land Records", "Mobile Number"],
        steps: [
          { step: 1, title: "soilhealth.dac.gov.in Jaayein", description: "Official Soil Health portal kholein" },
          { step: 2, title: "Register Karein", description: "Farmer registration karein" },
          { step: 3, title: "Sample Collection", description: "Agriculture department soil sample lega" },
          { step: 4, title: "Lab Testing", description: "Soil lab mein 12 parameters test honge" },
          { step: 5, title: "Card Download", description: "Soil Health Card download karein with recommendations" }
        ],
        officialWebsite: "https://soilhealth.dac.gov.in",
        officeName: "Agriculture Department / Krishi Vigyan Kendra",
        warnings: ["Bilkul FREE service hai", "Har 3 saal mein naya card milta hai", "Fertilizer recommendation follow karein - fasal badhegi", "Nearest KVK se bhi karwa sakte hain"]
      },
      {
        id: "paramparagat-krishi",
        title: "Paramparagat Krishi Vikas Yojana",
        titleHi: "परम्परागत कृषि विकास योजना",
        description: "Organic farming ke liye sarkari madad",
        eligibility: ["Koi bhi kisaan jo organic farming karna chahta hai", "Cluster based approach - group mein 50+ farmers", "20 hectare minimum cluster size"],
        documents: ["Aadhaar Card", "Land Records", "Bank Account", "Group formation documents"],
        steps: [
          { step: 1, title: "Agriculture Office Jaayein", description: "District Agriculture Officer se organic farming ke baare mein poochhein" },
          { step: 2, title: "Farmer Group Banayein", description: "50 farmers ka group banayein 20 hectare area mein" },
          { step: 3, title: "Application Submit", description: "Group application state agriculture dept ko dein" },
          { step: 4, title: "Training Lein", description: "Organic farming techniques ki training milegi" },
          { step: 5, title: "Certification", description: "PGS organic certification milega" }
        ],
        officialWebsite: "https://pgsindia-ncof.gov.in",
        officeName: "Agriculture Department / NCOF",
        warnings: ["Rs. 50,000/hectare 3 saal mein milta hai", "Organic certification se premium price milta hai", "Cluster approach mandatory hai", "Chemical free farming karna padega"]
      },
      {
        id: "e-nam",
        title: "National Agriculture Market (e-NAM)",
        titleHi: "राष्ट्रीय कृषि बाजार (e-NAM)",
        description: "Online mandi - fasal online bechein best price mein",
        eligibility: ["Sabhi kisaan", "Traders aur commission agents", "FPOs (Farmer Producer Organizations)"],
        documents: ["Aadhaar Card", "Bank Account", "Land Records", "Mobile Number"],
        steps: [
          { step: 1, title: "enam.gov.in Jaayein", description: "e-NAM portal par register karein" },
          { step: 2, title: "Farmer Registration", description: "State, district, mandi select karke register karein" },
          { step: 3, title: "Produce List Karein", description: "Apni fasal ki details aur quantity daalein" },
          { step: 4, title: "Quality Testing", description: "Mandi par quality assaying hogi" },
          { step: 5, title: "Online Bidding", description: "Traders online bid karenge - best price milega" },
          { step: 6, title: "Payment", description: "Seedha bank account mein payment aayega" }
        ],
        officialWebsite: "https://enam.gov.in",
        officeName: "e-NAM Portal / APMC Mandi",
        warnings: ["1000+ mandis connected hain", "Better price discovery hoti hai", "Payment seedha bank mein aata hai", "Mobile app bhi available hai"]
      },
      {
        id: "rashtriya-krishi-vikas",
        title: "Rashtriya Krishi Vikas Yojana",
        titleHi: "राष्ट्रीय कृषि विकास योजना",
        description: "Agriculture sector ke overall development ke liye scheme",
        eligibility: ["State governments through agriculture department", "Individual farmers via state schemes", "Agri-entrepreneurs"],
        documents: ["Aadhaar Card", "Land Records", "Bank Account", "Project proposal"],
        steps: [
          { step: 1, title: "Agriculture Dept Jaayein", description: "District agriculture office se information lein" },
          { step: 2, title: "Scheme Identify Karein", description: "RKVY ke under available sub-schemes check karein" },
          { step: 3, title: "Application Submit", description: "Required form bharke submit karein" },
          { step: 4, title: "Approval Process", description: "State level approval hoga" },
          { step: 5, title: "Benefit Paayein", description: "Equipment, training ya subsidy milegi" }
        ],
        officialWebsite: "https://rkvy.nic.in",
        officeName: "State Agriculture Department",
        warnings: ["State ke through implement hota hai", "Agri-startup component bhi hai", "Innovation projects ko funding milti hai", "Agriculture infrastructure development"]
      },
      {
        id: "food-security-mission",
        title: "National Food Security Mission",
        titleHi: "राष्ट्रीय खाद्य सुरक्षा मिशन",
        description: "Rice, wheat, pulses ki productivity badhane ki scheme",
        eligibility: ["Farmers growing rice, wheat, pulses, coarse cereals", "Selected districts mein", "Small aur marginal farmers ko priority"],
        documents: ["Aadhaar Card", "Land Records", "Bank Account"],
        steps: [
          { step: 1, title: "Agriculture Office Jaayein", description: "Block Agriculture Officer se milein" },
          { step: 2, title: "Eligible Crop Check", description: "Apne district mein konsi crop covered hai check karein" },
          { step: 3, title: "Registration", description: "Farmer registration karein" },
          { step: 4, title: "Inputs Paayein", description: "Seeds, fertilizers, equipment subsidized milenge" },
          { step: 5, title: "Training", description: "Improved farming techniques ki training" }
        ],
        officialWebsite: "https://nfsm.gov.in",
        officeName: "Agriculture Department",
        warnings: ["Subsidized seeds aur bio-fertilizers milte hain", "Demonstrations aur training free hai", "Cluster based approach", "Productivity improvement focus"]
      },
      {
        id: "sustainable-agriculture",
        title: "National Mission on Sustainable Agriculture",
        titleHi: "राष्ट्रीय सतत कृषि मिशन",
        description: "Climate change se agriculture ki suraksha",
        eligibility: ["Sabhi kisaan", "Rainfed area farmers ko priority", "Drought/flood prone areas"],
        documents: ["Aadhaar Card", "Land Records", "Bank Account"],
        steps: [
          { step: 1, title: "Agriculture Office Jaayein", description: "District agriculture office se jaankari lein" },
          { step: 2, title: "Program Select Karein", description: "Rainfed Area Development, Soil Health Management etc." },
          { step: 3, title: "Application", description: "Form bharke apply karein" },
          { step: 4, title: "Training", description: "Climate resilient farming techniques seekhein" },
          { step: 5, title: "Support Paayein", description: "Seeds, equipment, water harvesting support" }
        ],
        officialWebsite: "https://nmsa.dac.gov.in",
        officeName: "Agriculture Department / KVK",
        warnings: ["Water harvesting structures par subsidy", "Climate resilient crops ki seeds milti hain", "Soil health management included", "Organic farming promote hoti hai"]
      },
      {
        id: "blue-revolution",
        title: "Blue Revolution Scheme",
        titleHi: "नीली क्रांति योजना",
        description: "Matsya palan (fisheries) ke liye sarkari scheme",
        eligibility: ["Fish farmers aur aquaculture practitioners", "Fisherman cooperatives", "Entrepreneurs in fisheries sector", "SC/ST/Women ko extra subsidy"],
        documents: ["Aadhaar Card", "Land/Water body documents", "Bank Account", "Project report"],
        steps: [
          { step: 1, title: "Fisheries Dept Jaayein", description: "District Fisheries Officer se milein" },
          { step: 2, title: "Scheme Select", description: "Pond construction, cage culture, etc. chunein" },
          { step: 3, title: "Application Submit", description: "Project proposal ke saath apply karein" },
          { step: 4, title: "Approval", description: "Department site inspection aur approval" },
          { step: 5, title: "Subsidy", description: "40-60% subsidy milegi (SC/ST/Women ko extra)" }
        ],
        officialWebsite: "https://pmmsy.dof.gov.in",
        officeName: "Department of Fisheries",
        warnings: ["PM Matsya Sampada Yojana ke saath merged", "40-60% subsidy milti hai", "Fish farming, processing, marketing sab covered", "Training bhi milti hai"]
      },
      {
        id: "national-health-mission",
        title: "National Health Mission",
        titleHi: "राष्ट्रीय स्वास्थ्य मिशन",
        description: "Free healthcare services rural aur urban areas mein",
        eligibility: ["Sabhi Indian citizens", "Rural aur urban poor ko priority", "Pregnant women aur bacche"],
        documents: ["Aadhaar Card", "Any government ID"],
        steps: [
          { step: 1, title: "Nearest PHC/CHC Jaayein", description: "Primary Health Centre ya Community Health Centre jaayein" },
          { step: 2, title: "Free Treatment Lein", description: "Basic healthcare services free milti hain" },
          { step: 3, title: "Medicines Paayein", description: "Essential medicines free milti hain" },
          { step: 4, title: "Referral", description: "Zaroorat padne par district hospital referral milta hai" }
        ],
        officialWebsite: "https://nhm.gov.in",
        officeName: "PHC / CHC / District Hospital",
        warnings: ["Free medicines aur diagnostics milte hain", "ASHA workers ghar par visit karti hain", "Ambulance service 108/102 available", "Maternal aur child health priority hai"]
      },
      {
        id: "janaushadhi",
        title: "PM Bharatiya Janaushadhi Pariyojana",
        titleHi: "पीएम भारतीय जनऔषधि परियोजना",
        description: "Sasti generic medicines sarkari stores se",
        eligibility: ["Koi bhi - sabke liye available hai", "No prescription needed for OTC medicines"],
        documents: ["Doctor's prescription (prescription medicines ke liye)"],
        steps: [
          { step: 1, title: "Janaushadhi Store Dhundhein", description: "janaushadhi.gov.in par nearest store dhundhein" },
          { step: 2, title: "Store Jaayein", description: "Janaushadhi Kendra par jaayein" },
          { step: 3, title: "Prescription Dikhayein", description: "Doctor ka prescription dikhayein" },
          { step: 4, title: "Sasti Medicine Lein", description: "50-90% tak sasti medicines milti hain" }
        ],
        officialWebsite: "https://janaushadhi.gov.in",
        officeName: "Janaushadhi Kendra",
        warnings: ["Medicines 50-90% sasti milti hain", "Quality same hai - WHO GMP certified", "9000+ stores across India", "Generic medicines same formula hain branded se"]
      },
      {
        id: "poshan-abhiyaan",
        title: "POSHAN Abhiyaan",
        titleHi: "पोषण अभियान",
        description: "Kuposhan se mukt Bharat - nutrition mission",
        eligibility: ["Pregnant women", "Lactating mothers", "Children 0-6 years", "Adolescent girls"],
        documents: ["Aadhaar Card", "MCH Card", "Anganwadi registration"],
        steps: [
          { step: 1, title: "Anganwadi Jaayein", description: "Nearest Anganwadi centre jaayein" },
          { step: 2, title: "Registration", description: "Pregnant women/children ka registration karein" },
          { step: 3, title: "Nutrition Support", description: "Supplementary nutrition milega" },
          { step: 4, title: "Health Checkup", description: "Regular health checkups honge" },
          { step: 5, title: "Growth Monitoring", description: "Bacchon ki growth monitor hogi" }
        ],
        officialWebsite: "https://poshanabhiyaan.gov.in",
        officeName: "Anganwadi Centre / ICDS",
        warnings: ["Anganwadi se free nutrition milta hai", "Monthly health checkup hota hai", "Growth monitoring regular hona chahiye", "Malnourishment ka early detection important"]
      },
      {
        id: "mission-indradhanush",
        title: "Mission Indradhanush",
        titleHi: "मिशन इंद्रधनुष",
        description: "Bacchon aur pregnant women ka free vaccination",
        eligibility: ["All children under 2 years", "Pregnant women", "Focus on unvaccinated/partially vaccinated"],
        documents: ["MCH Card (Mother & Child Health Card)", "Aadhaar Card (optional)"],
        steps: [
          { step: 1, title: "Nearest Health Center Jaayein", description: "PHC/CHC/Anganwadi jaayein" },
          { step: 2, title: "Vaccination Schedule Check", description: "Age ke hisab se vaccine schedule dekhein" },
          { step: 3, title: "Free Vaccination Lein", description: "All vaccines free mein milte hain" },
          { step: 4, title: "MCH Card Update", description: "Vaccination record MCH card mein update karwayein" }
        ],
        officialWebsite: "https://nhm.gov.in",
        officeName: "PHC / CHC / Anganwadi Centre",
        warnings: ["Sabhi vaccines bilkul FREE hain", "BCG, OPV, Hepatitis B, DPT, Measles etc. covered", "Schedule follow karna zaroori hai", "ASHA worker ghar par bhi aa sakti hai"]
      },
      {
        id: "tb-free-india",
        title: "TB Free India Campaign",
        titleHi: "टीबी मुक्त भारत अभियान",
        description: "TB ka free treatment aur Nikshay Poshan Yojana",
        eligibility: ["All TB patients", "Free treatment for everyone", "Nutritional support for TB patients"],
        documents: ["Aadhaar Card", "Bank Account (nutrition support ke liye)", "Hospital/Doctor referral"],
        steps: [
          { step: 1, title: "Hospital Jaayein", description: "Government hospital ya DOTS center jaayein" },
          { step: 2, title: "TB Test Karwayein", description: "Free TB testing available hai" },
          { step: 3, title: "Treatment Shuru", description: "6-9 months ka free treatment milega" },
          { step: 4, title: "Nikshay Registration", description: "nikshay.in par patient registration hoga" },
          { step: 5, title: "Nutrition Support", description: "Rs. 500/month DBT milta hai (Nikshay Poshan)" }
        ],
        officialWebsite: "https://nikshay.in",
        officeName: "DOTS Centre / Government Hospital",
        warnings: ["TB treatment bilkul FREE hai", "Rs. 500/month nutrition support milta hai", "Treatment beech mein mat chhodein - drug resistant TB ho sakti hai", "Family members ki bhi screening zaroori"]
      },
      {
        id: "digital-health-mission",
        title: "National Digital Health Mission",
        titleHi: "राष्ट्रीय डिजिटल स्वास्थ्य मिशन",
        description: "ABHA Card - Ek digital health ID",
        eligibility: ["Sabhi Indian citizens", "Aadhaar ya mobile number se ban sakta hai"],
        documents: ["Aadhaar Card ya Mobile Number"],
        steps: [
          { step: 1, title: "abha.abdm.gov.in Jaayein", description: "ABHA portal ya app download karein" },
          { step: 2, title: "ABHA Number Create", description: "Aadhaar ya mobile se ABHA number banayein" },
          { step: 3, title: "ABHA Address Choose", description: "username@abdm format mein address chunein" },
          { step: 4, title: "Health Records Link", description: "Hospital visits ki records digitally link karein" },
          { step: 5, title: "Card Download", description: "ABHA Health Card download karein" }
        ],
        officialWebsite: "https://abha.abdm.gov.in",
        officeName: "ABDM / National Health Authority",
        warnings: ["ABHA card bilkul FREE hai", "Digital health records ek jagah milenge", "Hospital mein dikhayein - paperless treatment", "Privacy protected hai - aapki consent se hi share hoga"]
      },
      {
        id: "smart-cities",
        title: "Smart Cities Mission",
        titleHi: "स्मार्ट सिटीज़ मिशन",
        description: "100 cities ka smart development",
        eligibility: ["100 selected cities ke residents", "Urban infrastructure improvement"],
        documents: [],
        steps: [
          { step: 1, title: "Check Karein", description: "smartcities.gov.in par apna city check karein" },
          { step: 2, title: "Projects Dekhein", description: "Apne city mein chal rahe projects dekhein" },
          { step: 3, title: "Citizen Engagement", description: "Smart city portal par feedback aur suggestions dein" },
          { step: 4, title: "Services Use Karein", description: "Smart parking, WiFi, surveillance jaise services use karein" }
        ],
        officialWebsite: "https://smartcities.gov.in",
        officeName: "Smart City SPV / Municipal Corporation",
        warnings: ["100 cities selected hain", "Infrastructure, technology, sustainability focus", "Citizen participation important hai", "Mobile apps available hain city services ke liye"]
      },
      {
        id: "amrut-scheme",
        title: "AMRUT Scheme",
        titleHi: "अमृत योजना",
        description: "Urban water supply aur sewerage infrastructure",
        eligibility: ["500+ cities/towns covered", "All urban residents benefit"],
        documents: [],
        steps: [
          { step: 1, title: "amrut.gov.in Jaayein", description: "AMRUT portal par city projects check karein" },
          { step: 2, title: "Services Check", description: "Water supply aur sewerage improvements dekhein" },
          { step: 3, title: "Grievance File", description: "Water/sewerage issues report karein" }
        ],
        officialWebsite: "https://amrut.gov.in",
        officeName: "Municipal Corporation / Urban Local Body",
        warnings: ["Water supply improvement focus hai", "Sewerage infrastructure banegi", "Green spaces aur parks bhi included", "AMRUT 2.0 mein sab households ko water connection goal hai"]
      },
      {
        id: "pm-svanidhi",
        title: "PM SVANidhi",
        titleHi: "पीएम स्वनिधि",
        description: "Street vendors ke liye Rs. 10,000-50,000 loan",
        eligibility: ["Street vendors jo 24 March 2020 se pehle se vending kar rahe hain", "Certificate of Vending ya Letter of Recommendation chahiye", "Urban areas ke vendors"],
        documents: ["Aadhaar Card", "Vending Certificate/Letter of Recommendation", "Bank Account", "Photo", "Mobile Number"],
        steps: [
          { step: 1, title: "pmsvanidhi.mohua.gov.in Jaayein", description: "Official SVANidhi portal kholein" },
          { step: 2, title: "Apply Online/Offline", description: "Online ya bank branch mein apply karein" },
          { step: 3, title: "Document Submit", description: "Vending certificate aur ID proof dein" },
          { step: 4, title: "Loan Milega", description: "1st loan: Rs. 10,000 | 2nd: Rs. 20,000 | 3rd: Rs. 50,000" },
          { step: 5, title: "Digital Payment", description: "Digital transactions karne par cashback milta hai" }
        ],
        officialWebsite: "https://pmsvanidhi.mohua.gov.in",
        officeName: "Banks / Municipal Corporation",
        warnings: ["Working capital loan hai - 1 saal mein repay", "Time se repay karein - next level loan milega", "7% interest subsidy milti hai", "Digital payment par cashback bhi milta hai"]
      },
      {
        id: "day-nulm",
        title: "DAY-NULM",
        titleHi: "दीनदयाल अंत्योदय योजना - शहरी",
        description: "Urban poor ke liye skill training aur self-employment",
        eligibility: ["Urban homeless aur poor", "Street vendors", "Self-help groups", "Urban poor women"],
        documents: ["Aadhaar Card", "Address Proof", "Income Certificate", "Bank Account"],
        steps: [
          { step: 1, title: "ULB/Municipal Office Jaayein", description: "Urban Local Body office jaayein" },
          { step: 2, title: "Registration", description: "Beneficiary registration karein" },
          { step: 3, title: "Skill Training", description: "Free skill training programs mein enroll karein" },
          { step: 4, title: "SHG Formation", description: "Self Help Group banayein (women ke liye)" },
          { step: 5, title: "Loan/Support", description: "SHG bank linkage aur micro-enterprise support" }
        ],
        officialWebsite: "https://nulm.gov.in",
        officeName: "Municipal Corporation / SULM",
        warnings: ["Free skill training milti hai", "Shelters for urban homeless", "SHG ko Rs. 10 lakh tak loan", "Placement assistance bhi milti hai"]
      },
      {
        id: "jal-jeevan-mission",
        title: "Jal Jeevan Mission",
        titleHi: "जल जीवन मिशन",
        description: "Har ghar nal se jal - piped water connection",
        eligibility: ["Rural households jo bina tap water ke hain", "Priority: SC/ST villages, water quality affected areas"],
        documents: ["Aadhaar Card", "Address Proof"],
        steps: [
          { step: 1, title: "Gram Panchayat Jaayein", description: "Apni gram panchayat mein apply karein" },
          { step: 2, title: "Application Dein", description: "Water connection ke liye form bharein" },
          { step: 3, title: "Survey", description: "Department survey karega" },
          { step: 4, title: "Pipeline Work", description: "Pipeline aur tank construction hoga" },
          { step: 5, title: "Connection", description: "Ghar mein nal connection milega" }
        ],
        officialWebsite: "https://jaljeevanmission.gov.in",
        officeName: "Gram Panchayat / PHE Department",
        warnings: ["Free ya nominal charge mein connection", "55 lpcd (litres per capita daily) supply goal", "Water quality testing hoti hai", "Gram Panchayat level par implementation"]
      },
      {
        id: "swachh-bharat-urban",
        title: "Swachh Bharat Mission (Urban)",
        titleHi: "स्वच्छ भारत मिशन (शहरी)",
        description: "Urban sanitation aur cleanliness mission",
        eligibility: ["Urban households without toilet", "Municipal areas"],
        documents: ["Aadhaar Card", "Address Proof", "BPL Card (for subsidy)"],
        steps: [
          { step: 1, title: "Municipal Office Jaayein", description: "Nagar Palika ya Nagar Nigam jaayein" },
          { step: 2, title: "Application Dein", description: "Toilet construction subsidy ke liye apply karein" },
          { step: 3, title: "Subsidy", description: "Rs. 12,000-15,000 toilet construction subsidy" },
          { step: 4, title: "Construction", description: "Toilet banwayein" },
          { step: 5, title: "Verification", description: "Municipal officer verify karega" }
        ],
        officialWebsite: "https://swachhbharatmission.gov.in",
        officeName: "Municipal Corporation / Nagar Palika",
        warnings: ["Individual toilet construction subsidy available", "ODF (Open Defecation Free) goal", "Waste management bhi covered", "Swachh Survekshan ranking hota hai"]
      },
      {
        id: "swachh-bharat-gramin",
        title: "Swachh Bharat Mission (Gramin)",
        titleHi: "स्वच्छ भारत मिशन (ग्रामीण)",
        description: "Rural sanitation - ghar mein toilet banwayein",
        eligibility: ["Rural households without toilet", "BPL/APL families", "SC/ST households ko priority"],
        documents: ["Aadhaar Card", "BPL Card/Ration Card", "Bank Account", "Photo"],
        steps: [
          { step: 1, title: "Gram Panchayat Jaayein", description: "Sarpanch ya Gram Rozgar Sahayak se milein" },
          { step: 2, title: "Application Dein", description: "IHHL (Individual Household Latrine) ke liye apply karein" },
          { step: 3, title: "Approval", description: "Block office se approval milega" },
          { step: 4, title: "Rs. 12,000 Subsidy", description: "Construction ke liye incentive milega" },
          { step: 5, title: "Toilet Banwayein", description: "Twin-pit ya septic tank toilet banwayein" },
          { step: 6, title: "Photo Upload", description: "Geo-tagged photo upload hogi verification ke liye" }
        ],
        officialWebsite: "https://swachhbharatmission.gov.in/sbmcms/index.htm",
        officeName: "Gram Panchayat / Block Office",
        warnings: ["Rs. 12,000 incentive per household", "MGNREGA se extra labour cost mil sakti hai", "Twin-pit model recommended hai", "ODF Plus phase mein solid/liquid waste management bhi"]
      },
      {
        id: "namami-gange",
        title: "Namami Gange Programme",
        titleHi: "नमामि गंगे कार्यक्रम",
        description: "Ganga river cleaning aur conservation mission",
        eligibility: ["Ganga basin ke 5 states (Uttarakhand, UP, Bihar, Jharkhand, WB)", "Industrial units near Ganga", "Communities along riverbank"],
        documents: [],
        steps: [
          { step: 1, title: "nmcg.nic.in Jaayein", description: "Namami Gange portal par jaankari lein" },
          { step: 2, title: "Volunteer Karein", description: "Ganga Vichar Manch ya Ganga Prahari mein join karein" },
          { step: 3, title: "Pollution Report", description: "Industrial pollution report karein portal par" },
          { step: 4, title: "Community Participation", description: "Ghat cleaning drives mein participate karein" }
        ],
        officialWebsite: "https://nmcg.nic.in",
        officeName: "National Mission for Clean Ganga",
        warnings: ["Rs. 20,000 crore+ budget allocated", "Sewage treatment plants ban rahe hain", "Industrial pollution monitoring", "Biodiversity conservation bhi included"]
      },
      {
        id: "rural-drinking-water",
        title: "National Rural Drinking Water Programme",
        titleHi: "राष्ट्रीय ग्रामीण पेयजल कार्यक्रम",
        description: "Rural areas mein safe drinking water",
        eligibility: ["Rural habitations", "Water quality affected areas", "Water scarcity areas"],
        documents: ["Community level - no individual documents needed"],
        steps: [
          { step: 1, title: "Gram Panchayat Jaayein", description: "Water supply issue report karein" },
          { step: 2, title: "Demand Register", description: "Panchayat mein demand register karein" },
          { step: 3, title: "Survey", description: "PHE department survey karega" },
          { step: 4, title: "Scheme Implementation", description: "Handpump, bore well ya piped supply scheme aayegi" }
        ],
        officialWebsite: "https://jalshakti-ddws.gov.in",
        officeName: "PHE Department / Gram Panchayat",
        warnings: ["Jal Jeevan Mission mein merged ho raha hai", "Water quality testing free hai", "Fluoride/Arsenic affected areas ko priority", "Community participation zaroori hai"]
      },
      {
        id: "mgnrega",
        title: "MGNREGA",
        titleHi: "मनरेगा",
        description: "100 din ka guaranteed rojgar - rural employment",
        eligibility: [
          "Rural area ke adult members jo manual labour kar sakte hain",
          "Job card holder hona chahiye",
          "Per household minimum 100 din guaranteed"
        ],
        documents: ["Aadhaar Card", "Job Card (ya naya banwayein)", "Bank Account", "Passport size photo"],
        steps: [
          { step: 1, title: "Gram Panchayat Jaayein", description: "Job Card ke liye Gram Panchayat mein apply karein" },
          { step: 2, title: "Job Card Banwayein", description: "15 din mein Job Card milna chahiye" },
          { step: 3, title: "Kaam Maangein", description: "Written ya oral application dein kaam ke liye" },
          { step: 4, title: "15 Din Mein Kaam Milega", description: "Application ke 15 din mein kaam milna chahiye" },
          { step: 5, title: "Wages", description: "State wise wages - Rs. 200-350/day bank mein aayegi" }
        ],
        officialWebsite: "https://nrega.nic.in",
        officeName: "Gram Panchayat / Block Office",
        warnings: ["100 din nahi mile toh unemployment allowance milna chahiye", "Wages 15 din mein milni chahiye", "Women ko 1/3 priority", "nrega.nic.in par payment status check karein"]
      },
      {
        id: "skill-india-mission",
        title: "Skill India Mission",
        titleHi: "स्किल इंडिया मिशन",
        description: "Yuvaon ke liye free skill development training",
        eligibility: ["Indian youth 15-45 years", "School dropouts bhi eligible", "Unemployed aur underemployed"],
        documents: ["Aadhaar Card", "Educational certificates", "Bank Account", "Photo"],
        steps: [
          { step: 1, title: "skillindia.gov.in Jaayein", description: "Skill India portal par register karein" },
          { step: 2, title: "Sector Chunein", description: "IT, Healthcare, Automotive, Beauty etc. chunein" },
          { step: 3, title: "Training Center Dhundhein", description: "Nearest PMKVY training center find karein" },
          { step: 4, title: "Enrollment", description: "Center par jaake admission lein" },
          { step: 5, title: "Training Complete", description: "2-6 months training attend karein" },
          { step: 6, title: "Certification", description: "NSDC certified certificate milega" },
          { step: 7, title: "Placement", description: "Placement assistance milegi" }
        ],
        officialWebsite: "https://www.skillindia.gov.in",
        officeName: "NSDC / Skill India",
        warnings: ["Training bilkul FREE hai", "Certificate nationally/internationally recognized", "300+ job roles available", "Placement support milta hai"]
      },
      {
        id: "ddu-gky",
        title: "DDU-GKY",
        titleHi: "दीनदयाल उपाध्याय ग्रामीण कौशल्य योजना",
        description: "Rural youth ke liye skill training aur placement",
        eligibility: ["15-35 years rural youth", "BPL families", "SC/ST/Women/PwD/Minorities ko priority", "MGNREGA card holders"],
        documents: ["Aadhaar Card", "BPL/Ration Card", "Educational certificates", "Bank Account", "Caste Certificate (if applicable)"],
        steps: [
          { step: 1, title: "ddugky.gov.in Jaayein", description: "DDU-GKY portal par register karein" },
          { step: 2, title: "PIA Center Dhundhein", description: "Project Implementing Agency center find karein" },
          { step: 3, title: "Enrollment", description: "Free training ke liye enroll karein" },
          { step: 4, title: "Training", description: "3-12 months residential training" },
          { step: 5, title: "Placement", description: "Minimum Rs. 6,000/month job placement guarantee" }
        ],
        officialWebsite: "https://ddugky.gov.in",
        officeName: "DDU-GKY / Rural Development",
        warnings: ["Training, food, accommodation sab FREE", "Minimum 70% placement mandatory hai PIA ke liye", "Post-placement tracking hota hai", "Migration support bhi milta hai"]
      },
      {
        id: "national-career-service",
        title: "National Career Service",
        titleHi: "राष्ट्रीय करियर सेवा",
        description: "Free job portal - sarkari aur private jobs",
        eligibility: ["Sabhi job seekers", "Students", "Employers bhi register kar sakte hain"],
        documents: ["Aadhaar Card (optional)", "Educational certificates", "Resume"],
        steps: [
          { step: 1, title: "ncs.gov.in Jaayein", description: "National Career Service portal kholein" },
          { step: 2, title: "Register Karein", description: "Job seeker ke roop mein register karein" },
          { step: 3, title: "Profile Banayein", description: "Education, skills, experience bharein" },
          { step: 4, title: "Jobs Search", description: "Apne skills ke hisaab se jobs search karein" },
          { step: 5, title: "Apply Karein", description: "Directly portal se apply karein" }
        ],
        officialWebsite: "https://www.ncs.gov.in",
        officeName: "Ministry of Labour / NCS",
        warnings: ["Bilkul FREE portal hai", "Government aur private dono jobs", "Career counselling bhi available", "Model Career Centre visit karein for guidance"]
      },
      {
        id: "beti-bachao",
        title: "Beti Bachao Beti Padhao",
        titleHi: "बेटी बचाओ बेटी पढ़ाओ",
        description: "Beti ki suraksha aur shiksha ke liye abhiyaan",
        eligibility: ["Girl children", "Families with daughters", "All districts covered"],
        documents: ["Birth Certificate", "Aadhaar Card", "School admission proof"],
        steps: [
          { step: 1, title: "Awareness", description: "BBBP campaign ke baare mein jaanein" },
          { step: 2, title: "Sukanya Samriddhi", description: "Beti ke naam Sukanya Samriddhi account kholein" },
          { step: 3, title: "School Admission", description: "Beti ko school mein admit karwayein" },
          { step: 4, title: "District Office", description: "BBBP district coordinator se milein for additional schemes" }
        ],
        officialWebsite: "https://wcd.nic.in/bbbp-schemes",
        officeName: "WCD Ministry / District Administration",
        warnings: ["Sex determination test illegal hai", "Girl child education mandatory hai", "Sukanya Samriddhi best savings option hai", "Multiple state-level schemes bhi hain"]
      },
      {
        id: "pm-matru-vandana",
        title: "PM Matru Vandana Yojana",
        titleHi: "पीएम मातृ वंदना योजना",
        description: "Pregnant women ko Rs. 5,000-11,000 cash benefit",
        eligibility: ["Pregnant women aur lactating mothers", "First living child ke liye Rs. 5,000", "Second child girl ho toh Rs. 6,000 extra", "19 years+ age"],
        documents: ["Aadhaar Card", "Bank Account (Aadhaar linked)", "MCH Card", "Last Menstrual Period (LMP) date"],
        steps: [
          { step: 1, title: "Anganwadi Jaayein", description: "Nearest Anganwadi centre par registration karein" },
          { step: 2, title: "Form Bharein", description: "PMMVY form bharein Anganwadi worker ki help se" },
          { step: 3, title: "Documents Submit", description: "Aadhaar, bank details, MCH card dein" },
          { step: 4, title: "Installments", description: "3 installments mein Rs. 5,000 bank mein aayenge" },
          { step: 5, title: "Hospital Delivery", description: "Hospital mein delivery karwayein - Rs. 6,000 extra Janani Suraksha Yojana se" }
        ],
        officialWebsite: "https://pmmvy.wcd.gov.in",
        officeName: "Anganwadi Centre / Health Centre",
        warnings: ["First child: Rs. 5,000 | Second girl child: Rs. 6,000", "Institutional delivery par extra benefit", "Registration jaldi karwayein - pregnancy ke 150 din ke andar", "DBT se bank mein aata hai"]
      },
      {
        id: "one-stop-centre",
        title: "One Stop Centre Scheme",
        titleHi: "वन स्टॉप सेंटर योजना",
        description: "Violence affected women ke liye ek jagah sab help",
        eligibility: ["Women affected by violence", "Any age, caste, religion", "Including girls below 18 years"],
        documents: ["Any ID proof (optional - help bina documents ke bhi milti hai)"],
        steps: [
          { step: 1, title: "181 Helpline Call Karein", description: "Women Helpline 181 par call karein" },
          { step: 2, title: "OSC Jaayein", description: "Nearest One Stop Centre par jaayein" },
          { step: 3, title: "Counselling", description: "Professional counselling milegi" },
          { step: 4, title: "Legal Aid", description: "Free legal help milegi" },
          { step: 5, title: "Shelter", description: "Temporary shelter bhi available hai" },
          { step: 6, title: "Medical Help", description: "Medical examination aur treatment" }
        ],
        officialWebsite: "https://wcd.nic.in",
        officeName: "One Stop Centre / Women Helpline 181",
        warnings: ["24x7 service hai", "Bilkul FREE hai", "Police, legal, medical sab ek jagah", "Confidentiality maintain hoti hai"]
      },
      {
        id: "working-women-hostel",
        title: "Working Women Hostel Scheme",
        titleHi: "कामकाजी महिला छात्रावास योजना",
        description: "Working women ke liye safe aur affordable hostel",
        eligibility: ["Working women income Rs. 50,000/month tak", "Women in training", "Single, widowed, divorced women", "Children up to 18 years allowed"],
        documents: ["Aadhaar Card", "Employment proof", "Income Certificate", "Photo"],
        steps: [
          { step: 1, title: "Hostel Dhundhein", description: "Nearest Working Women Hostel find karein" },
          { step: 2, title: "Application", description: "Hostel management se form lein" },
          { step: 3, title: "Documents Submit", description: "Employment aur income proof dein" },
          { step: 4, title: "Allotment", description: "Vacancy ke hisaab se room allot hoga" }
        ],
        officialWebsite: "https://wcd.nic.in",
        officeName: "WCD Ministry / District Office",
        warnings: ["Subsidized rent hota hai", "Safe aur secure environment", "Day care facility bhi available kuch mein", "State wise application process alag"]
      },
      {
        id: "mission-shakti",
        title: "Mission Shakti",
        titleHi: "मिशन शक्ति",
        description: "Women safety, empowerment aur protection mission",
        eligibility: ["All women and girls", "Two sub-schemes: Sambal (safety) & Samarthya (empowerment)"],
        documents: ["Aadhaar Card", "Any ID proof"],
        steps: [
          { step: 1, title: "District Office Jaayein", description: "WCD district office se jaankari lein" },
          { step: 2, title: "Scheme Identify", description: "Safety ya empowerment - konsi scheme chahiye" },
          { step: 3, title: "Registration", description: "Beneficiary registration karein" },
          { step: 4, title: "Benefits", description: "Training, support, shelter jaise benefits paayein" }
        ],
        officialWebsite: "https://wcd.nic.in",
        officeName: "WCD Ministry / District Administration",
        warnings: ["One Stop Centre, Women Helpline sab isme covered", "Beti Bachao Beti Padhao bhi iska part", "Skill development for women", "Legal awareness programs"]
      },
      {
        id: "pm-garib-kalyan-anna",
        title: "PM Garib Kalyan Anna Yojana",
        titleHi: "पीएम गरीब कल्याण अन्न योजना",
        description: "Gareeb parivaron ko free ration (wheat/rice)",
        eligibility: ["National Food Security Act beneficiaries", "Antyodaya Anna Yojana (AAY) card holders", "Priority Household (PHH) card holders"],
        documents: ["Ration Card", "Aadhaar Card"],
        steps: [
          { step: 1, title: "Ration Card Check Karein", description: "Apna ration card type check karein (AAY/PHH)" },
          { step: 2, title: "Fair Price Shop Jaayein", description: "Apni designated ration dukaan par jaayein" },
          { step: 3, title: "Aadhaar Verify", description: "Biometric ya Aadhaar OTP se verify karein" },
          { step: 4, title: "Ration Lein", description: "5 kg/person/month free ration lein" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "Fair Price Shop / Food Department",
        warnings: ["5 kg/person/month free milta hai", "January 2024 se 5 saal ke liye extend hua", "One Nation One Ration Card se kahi bhi le sakte", "Biometric verification mandatory hai"]
      },
      {
        id: "antyodaya-anna",
        title: "Antyodaya Anna Yojana",
        titleHi: "अंत्योदय अन्न योजना",
        description: "Sabse gareeb parivaron ke liye subsidized ration",
        eligibility: ["Sabse gareeb BPL families", "Widow headed households", "Disabled persons", "60+ age single persons", "Primitive tribal groups"],
        documents: ["AAY Ration Card", "Aadhaar Card"],
        steps: [
          { step: 1, title: "BDO/Tehsil Office Jaayein", description: "AAY card ke liye apply karein agar nahi hai" },
          { step: 2, title: "Fair Price Shop Jaayein", description: "Monthly ration collect karein" },
          { step: 3, title: "35 Kg Ration", description: "35 kg ration per family per month" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "Food & Civil Supplies Department",
        warnings: ["35 kg/family/month fixed hai", "Wheat Rs. 2/kg, Rice Rs. 3/kg", "Sabse gareeb families ke liye reserved", "PDS reforms se delivery better hui hai"]
      },
      {
        id: "pds-system",
        title: "Public Distribution System",
        titleHi: "सार्वजनिक वितरण प्रणाली",
        description: "Ration card se subsidized food grains",
        eligibility: ["All ration card holders", "APL, BPL, AAY categories"],
        documents: ["Ration Card", "Aadhaar Card"],
        steps: [
          { step: 1, title: "Ration Card Banwayein", description: "Agar nahi hai toh state portal se apply karein" },
          { step: 2, title: "Fair Price Shop Dhundhein", description: "Designated FPS find karein" },
          { step: 3, title: "Monthly Collection", description: "Har mahine designated dates par jaayein" },
          { step: 4, title: "ePoS Verification", description: "Biometric/Aadhaar se verify karein" },
          { step: 5, title: "Ration Collect", description: "Entitled quantity collect karein" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "Food & Civil Supplies / Fair Price Shop",
        warnings: ["One Nation One Ration Card (ONORC) se portability hai", "ePoS machine se transparency", "Shikayat ke liye helpline available", "Ration dealer zyada nahi le sakta"]
      },
      {
        id: "mid-day-meal",
        title: "Mid-Day Meal Scheme (PM POSHAN)",
        titleHi: "मिड-डे मील योजना (पीएम पोषण)",
        description: "School mein free hot cooked meal for students",
        eligibility: ["Class 1-8 ke students", "Government aur government-aided schools", "EGS aur AIE centres"],
        documents: ["School admission proof"],
        steps: [
          { step: 1, title: "School Mein Admission", description: "Government school mein admission lein" },
          { step: 2, title: "Automatic Enrollment", description: "MDM automatic milta hai - alag se apply nahi karna" },
          { step: 3, title: "Daily Meal", description: "School mein hot cooked meal milega" }
        ],
        officialWebsite: "https://pmposhan.education.gov.in",
        officeName: "School / Education Department",
        warnings: ["Free hot cooked meal milta hai", "450-700 calories per meal", "12-20 gm protein per meal", "School attendance improve hota hai"]
      },
      {
        id: "nsap",
        title: "National Social Assistance Programme",
        titleHi: "राष्ट्रीय सामाजिक सहायता कार्यक्रम",
        description: "Old age pension, widow pension, disability pension",
        eligibility: ["Old Age (60+): BPL families", "Widow: BPL widow women 40+", "Disability: 80%+ disability, BPL"],
        documents: ["Aadhaar Card", "Age proof", "BPL Card/Certificate", "Death Certificate of husband (widow pension)", "Disability Certificate (disability pension)", "Bank Account"],
        steps: [
          { step: 1, title: "Gram Panchayat/ULB Jaayein", description: "Application form lein aur bharein" },
          { step: 2, title: "Documents Submit", description: "Required proofs attach karein" },
          { step: 3, title: "Verification", description: "Block/District level verification" },
          { step: 4, title: "Pension Start", description: "Approval ke baad monthly pension bank mein" }
        ],
        officialWebsite: "https://nsap.nic.in",
        officeName: "District Social Welfare Office",
        warnings: [
          "Indira Gandhi National Old Age Pension: Rs. 200-500/month (central) + state share",
          "Indira Gandhi National Widow Pension: Rs. 300/month",
          "Indira Gandhi National Disability Pension: Rs. 300/month",
          "State governments extra amount add karti hain"
        ]
      },
      {
        id: "samagra-shiksha",
        title: "Samagra Shiksha Abhiyan",
        titleHi: "समग्र शिक्षा अभियान",
        description: "School education quality improvement - Pre-school to Class 12",
        eligibility: ["All government school students", "Pre-school to Class 12", "Teachers aur schools bhi benefit karte hain"],
        documents: ["School admission - no separate application needed"],
        steps: [
          { step: 1, title: "Government School Join", description: "Government/aided school mein admission lein" },
          { step: 2, title: "Benefits Automatically", description: "Free textbooks, uniforms, transport milta hai" },
          { step: 3, title: "Special Training", description: "Out-of-school children ke liye special training" }
        ],
        officialWebsite: "https://samagra.education.gov.in",
        officeName: "School Education Department",
        warnings: ["Free textbooks milte hain", "Free uniforms milti hain", "Transport allowance remote areas mein", "Digital education push ho raha hai"]
      },
      {
        id: "pm-shri-schools",
        title: "PM SHRI Schools",
        titleHi: "पीएम श्री स्कूल",
        description: "14,500 upgraded model schools across India",
        eligibility: ["Students in PM SHRI designated schools", "Schools selected for upgrade"],
        documents: ["School admission proof"],
        steps: [
          { step: 1, title: "PM SHRI School Check", description: "Check karein kya aapke area mein PM SHRI school hai" },
          { step: 2, title: "Admission Lein", description: "PM SHRI school mein admission lein" },
          { step: 3, title: "Modern Education", description: "NEP 2020 based modern education milegi" }
        ],
        officialWebsite: "https://pmshrischools.education.gov.in",
        officeName: "School Education Department",
        warnings: ["NEP 2020 ke hisab se education", "Smart classrooms honge", "Labs aur library upgrade hogi", "Sports infrastructure improve hoga"]
      },
      {
        id: "nmcm-scholarship",
        title: "National Means Cum Merit Scholarship",
        titleHi: "राष्ट्रीय आय सह मेरिट छात्रवृत्ति",
        description: "Class 9-12 ke meritorious students ke liye scholarship",
        eligibility: ["Class 8 pass students", "Parents income Rs. 3.5 lakh/year se kam", "55%+ marks in Class 7", "Government school students"],
        documents: ["Aadhaar Card", "Class 7/8 marksheet", "Income Certificate", "Caste Certificate (if applicable)", "Bank Account"],
        steps: [
          { step: 1, title: "NMMS Exam", description: "State level NMMS exam dein (Class 8 mein)" },
          { step: 2, title: "Qualify Karein", description: "MAT aur SAT dono mein qualify karein" },
          { step: 3, title: "NSP Registration", description: "scholarships.gov.in par register karein" },
          { step: 4, title: "Application Submit", description: "Exam result ke baad scholarship form bharein" },
          { step: 5, title: "Rs. 12,000/year", description: "Class 9-12 tak Rs. 12,000/year milega" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "State Education Department / NSP",
        warnings: ["Rs. 12,000/year (Rs. 1,000/month)", "Class 9 se 12 tak milta hai", "Har saal renewal karna padta hai", "55%+ marks maintain karna zaroori"]
      },
      {
        id: "nsp-schemes",
        title: "National Scholarship Portal Schemes",
        titleHi: "राष्ट्रीय छात्रवृत्ति पोर्टल योजनाएं",
        description: "Ek portal par sabhi central government scholarships",
        eligibility: ["Students of all levels", "Various categories - SC/ST/OBC/Minority/EWS", "Different income criteria per scheme"],
        documents: ["Aadhaar Card", "Marksheets", "Income Certificate", "Caste/Community Certificate", "Bank Account", "Admission proof"],
        steps: [
          { step: 1, title: "scholarships.gov.in Jaayein", description: "NSP portal kholein" },
          { step: 2, title: "Schemes Browse Karein", description: "Available scholarships dekhein" },
          { step: 3, title: "Eligibility Check", description: "Apni eligibility match karein" },
          { step: 4, title: "Register & Apply", description: "One-time registration karke apply karein" },
          { step: 5, title: "Institute Verification", description: "School/College verify karega" },
          { step: 6, title: "Scholarship Credit", description: "Bank mein directly credit hoga" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "National Scholarship Portal",
        warnings: ["100+ scholarships ek portal par", "July-November application period usually", "Institute verification mandatory", "Fresh aur renewal dono available"]
      },
      {
        id: "vidya-lakshmi",
        title: "Vidya Lakshmi Education Loan",
        titleHi: "विद्या लक्ष्मी एजुकेशन लोन",
        description: "Education loan ke liye ek common portal",
        eligibility: ["Indian students", "Admission in recognized institution", "Domestic aur abroad courses"],
        documents: ["Aadhaar Card", "PAN Card", "Admission letter", "Fee structure", "Marksheets", "Co-applicant income proof"],
        steps: [
          { step: 1, title: "vidyalakshmi.co.in Jaayein", description: "Vidya Lakshmi portal par register karein" },
          { step: 2, title: "CELAF Bharein", description: "Common Education Loan Application Form bharein" },
          { step: 3, title: "Banks Select", description: "Max 3 banks choose karein" },
          { step: 4, title: "Application Submit", description: "Online submit karein" },
          { step: 5, title: "Bank Processing", description: "Bank contact karegi processing ke liye" }
        ],
        officialWebsite: "https://www.vidyalakshmi.co.in",
        officeName: "Vidya Lakshmi Portal / Banks",
        warnings: ["Ek form se multiple banks mein apply", "Rs. 7.5 lakh tak collateral free", "Interest subsidy available for EWS", "Education loan pe tax benefit 80E"]
      },
      {
        id: "ujala-led",
        title: "UJALA LED Scheme",
        titleHi: "उजाला एलईडी योजना",
        description: "Sasti LED bulbs aur energy efficient appliances",
        eligibility: ["All Indian households", "Domestic electricity consumers"],
        documents: ["Electricity bill", "ID proof"],
        steps: [
          { step: 1, title: "Distribution Center Jaayein", description: "EESL distribution center ya designated outlets jaayein" },
          { step: 2, title: "Electricity Bill Dikhayein", description: "Latest electricity bill dikhayein" },
          { step: 3, title: "LED Bulbs Kharidein", description: "Subsidized rate par LED bulbs lein" },
          { step: 4, title: "Old Bulb Exchange", description: "Old CFL/incandescent bulbs exchange kar sakte hain" }
        ],
        officialWebsite: "https://www.eeslindia.org",
        officeName: "EESL / Distribution Centers",
        warnings: ["LED bulbs bahut saste milte hain (Rs. 70-80)", "Electricity bill 50% tak kam hota hai", "3 saal warranty milti hai", "Energy efficient fans bhi available"]
      },
      {
        id: "national-solar-mission",
        title: "National Solar Mission",
        titleHi: "राष्ट्रीय सौर मिशन",
        description: "Rooftop solar panel par subsidy",
        eligibility: ["Residential households", "Housing societies", "Rooftop suitable for solar panels"],
        documents: ["Aadhaar Card", "Electricity bill", "Property ownership proof", "Bank Account", "Roof photo"],
        steps: [
          { step: 1, title: "solarrooftop.gov.in Jaayein", description: "PM Surya Ghar portal par register karein" },
          { step: 2, title: "Apply Online", description: "Rooftop solar ke liye apply karein" },
          { step: 3, title: "DISCOM Approval", description: "Electricity company feasibility check karegi" },
          { step: 4, title: "Vendor Select", description: "Empanelled vendor se solar panel lagwayein" },
          { step: 5, title: "Installation", description: "Solar panel installation hoga" },
          { step: 6, title: "Net Metering", description: "Extra electricity grid ko bech sakte hain" },
          { step: 7, title: "Subsidy Credit", description: "Subsidy bank account mein aayegi" }
        ],
        officialWebsite: "https://solarrooftop.gov.in",
        officeName: "MNRE / DISCOM",
        warnings: ["1-3 kW: Rs. 30,000-78,000 subsidy", "Electricity bill almost zero ho sakta hai", "25 saal tak chalte hain panels", "Extra power bechne se income bhi"]
      },
      {
        id: "pm-kusum",
        title: "PM KUSUM Scheme",
        titleHi: "पीएम कुसुम योजना",
        description: "Kisano ke liye solar pump aur solar power plant",
        eligibility: ["Farmers", "Farmer groups", "Panchayats", "Water user associations"],
        documents: ["Aadhaar Card", "Land Records", "Bank Account", "Existing pump details"],
        steps: [
          { step: 1, title: "State Nodal Agency Jaayein", description: "Apne state ki renewable energy agency se contact karein" },
          { step: 2, title: "Component Choose", description: "Solar pump ya solar power plant option chunein" },
          { step: 3, title: "Application Submit", description: "Online ya offline apply karein" },
          { step: 4, title: "Subsidy Approval", description: "60% subsidy (30% central + 30% state)" },
          { step: 5, title: "Installation", description: "Solar pump/plant install hoga" }
        ],
        officialWebsite: "https://mnre.gov.in/solar/schemes",
        officeName: "State Renewable Energy Agency / MNRE",
        warnings: ["60% subsidy milti hai solar pumps par", "Diesel pump replace karne ka option", "Extra electricity grid ko bech sakte", "Irrigation cost bahut kam ho jata hai"]
      },
      {
        id: "green-india-mission",
        title: "Green India Mission",
        titleHi: "हरित भारत मिशन",
        description: "Van (forest) area badhane ka national mission",
        eligibility: ["Forest communities", "Gram Sabhas", "Joint Forest Management Committees", "NGOs working in forestry"],
        documents: ["Community/Organization registration", "Project proposal"],
        steps: [
          { step: 1, title: "Forest Department", description: "State Forest Department se contact karein" },
          { step: 2, title: "JFMC Join", description: "Joint Forest Management Committee mein join karein" },
          { step: 3, title: "Plantation Drive", description: "Tree plantation activities mein participate karein" },
          { step: 4, title: "Livelihood", description: "Forest-based livelihood programs mein enroll karein" }
        ],
        officialWebsite: "https://moef.gov.in",
        officeName: "Forest Department / MoEFCC",
        warnings: ["10 million hectares green cover goal", "Livelihood generation bhi hota hai", "Biodiversity conservation", "Carbon sink increase"]
      },
      {
        id: "digital-india",
        title: "Digital India",
        titleHi: "डिजिटल इंडिया",
        description: "India ko digitally empowered society banana",
        eligibility: ["Sabhi Indian citizens", "Government departments", "Entrepreneurs"],
        documents: [],
        steps: [
          { step: 1, title: "Digital Services Use Karein", description: "DigiLocker, UMANG, e-Sign jaise services use karein" },
          { step: 2, title: "Digital Literacy", description: "PMGDISHA se digital skills seekhein" },
          { step: 3, title: "Digital Payment", description: "UPI, BHIM se cashless transactions" },
          { step: 4, title: "e-Governance", description: "Government services online access karein" }
        ],
        officialWebsite: "https://digitalindia.gov.in",
        officeName: "MeitY / Digital India",
        warnings: ["DigiLocker mein documents store karein", "UMANG app se 1000+ services access", "Digital payment sabse safe hai", "Free WiFi hotspots available hain"]
      },
      {
        id: "bharatnet",
        title: "BharatNet",
        titleHi: "भारतनेट",
        description: "Village level internet connectivity - broadband to every panchayat",
        eligibility: ["Gram Panchayats", "Rural areas", "CSC operators"],
        documents: [],
        steps: [
          { step: 1, title: "Check Connectivity", description: "bharatnet.gov.in par apni panchayat check karein" },
          { step: 2, title: "CSC Center", description: "Common Service Centre par broadband access karein" },
          { step: 3, title: "WiFi Hotspot", description: "BharatNet WiFi hotspot use karein" }
        ],
        officialWebsite: "https://bbnl.nic.in",
        officeName: "BBNL / BSNL / CSC",
        warnings: ["2.5 lakh+ Gram Panchayats connected", "Affordable broadband available", "CSCs internet services provide karte hain", "Optical fiber network hai"]
      },
      {
        id: "digilocker-service",
        title: "DigiLocker",
        titleHi: "डिजिलॉकर",
        description: "Digital documents storage - Aadhaar, PAN, Marksheets sab ek jagah",
        eligibility: ["Sabhi Indian citizens with Aadhaar", "Free service hai"],
        documents: ["Aadhaar Card", "Mobile Number"],
        steps: [
          { step: 1, title: "digilocker.gov.in Jaayein", description: "Ya DigiLocker app download karein" },
          { step: 2, title: "Sign Up", description: "Aadhaar aur mobile number se register karein" },
          { step: 3, title: "Documents Fetch", description: "Aadhaar, PAN, Driving License auto-fetch karein" },
          { step: 4, title: "Upload Documents", description: "Other documents bhi upload kar sakte hain" },
          { step: 5, title: "Share Documents", description: "Digitally signed documents share karein" }
        ],
        officialWebsite: "https://digilocker.gov.in",
        officeName: "DigiLocker / MeitY",
        warnings: ["Legally valid hai - original ke barabar", "Free 1 GB storage", "150+ organizations ke documents available", "Mobile app bhi available hai"]
      },
      {
        id: "umang-app",
        title: "UMANG App",
        titleHi: "उमंग ऐप",
        description: "1200+ government services ek app mein",
        eligibility: ["Sabhi Indian citizens", "Android aur iOS dono par available"],
        documents: ["Mobile Number", "Aadhaar (optional)"],
        steps: [
          { step: 1, title: "UMANG App Download", description: "Play Store/App Store se UMANG download karein" },
          { step: 2, title: "Register", description: "Mobile number se register karein" },
          { step: 3, title: "Services Browse", description: "EPF, Passport, Scholarship jaise services access karein" },
          { step: 4, title: "Use Services", description: "PF balance check, Aadhaar update, tax filing sab ek jagah" }
        ],
        officialWebsite: "https://web.umang.gov.in",
        officeName: "MeitY / NeGD",
        warnings: ["1200+ services available", "Multiple languages mein available", "Aadhaar, PAN, Passport sab accessible", "Bill payments bhi kar sakte hain"]
      },
      {
        id: "csc-centres",
        title: "Common Service Centres",
        titleHi: "जन सेवा केंद्र (CSC)",
        description: "Village level digital service delivery - sab government kaam ek jagah",
        eligibility: ["Sabhi nagarik", "Entrepreneurs jo CSC kholna chahein"],
        documents: ["Aadhaar Card", "Service specific documents"],
        steps: [
          { step: 1, title: "Nearest CSC Dhundhein", description: "locator.csccloud.in par nearest CSC find karein" },
          { step: 2, title: "CSC Jaayein", description: "Jan Seva Kendra par jaayein" },
          { step: 3, title: "Service Select", description: "Aadhaar, PAN, Banking, Insurance - jo chahiye" },
          { step: 4, title: "Nominal Fee", description: "Bahut kam fees mein kaam ho jayega" }
        ],
        officialWebsite: "https://csc.gov.in",
        officeName: "CSC Academy / CSC SPV",
        warnings: ["4 lakh+ CSCs across India", "300+ services available", "Digital literacy training bhi milti hai", "Banking correspondent services bhi", "Agar CSC kholna chahein toh csc.gov.in par apply karein"]
      },
      {
        id: "aadhaar-services",
        title: "Aadhaar Services",
        titleHi: "आधार सेवाएं",
        description: "Aadhaar enrollment, update, download - complete guide",
        eligibility: ["Sabhi Indian residents", "NRIs with 182+ days stay"],
        documents: ["Identity Proof", "Address Proof", "Date of Birth Proof"],
        steps: [
          { step: 1, title: "myaadhaar.uidai.gov.in Jaayein", description: "Official Aadhaar portal kholein" },
          { step: 2, title: "Service Chunein", description: "New enrollment, update, download, verify - jo chahiye" },
          { step: 3, title: "OTP Verify", description: "Registered mobile par OTP aayega" },
          { step: 4, title: "Service Complete", description: "Selected service complete karein" }
        ],
        officialWebsite: "https://uidai.gov.in",
        officeName: "UIDAI / Aadhaar Centres",
        warnings: ["Aadhaar enrollment FREE hai", "Update Rs. 50 lagta hai", "OTP kabhi kisi ko share mat karein", "Aadhaar number confidential rakhein"]
      },
      {
        id: "pan-card-services",
        title: "PAN Card Services",
        titleHi: "पैन कार्ड सेवाएं",
        description: "PAN card apply, correction, download - complete guide",
        eligibility: ["Sabhi Indian citizens", "Companies, firms, trusts"],
        documents: ["Aadhaar Card", "Address Proof", "Photo", "Signature"],
        steps: [
          { step: 1, title: "onlineservices.nsdl.com Jaayein", description: "NSDL PAN portal kholein" },
          { step: 2, title: "Service Chunein", description: "New PAN, correction, reprint option chunein" },
          { step: 3, title: "Form Bharein", description: "Form 49A bharein" },
          { step: 4, title: "Payment", description: "Rs. 107 fees pay karein" },
          { step: 5, title: "E-PAN Download", description: "Email par e-PAN aayega" }
        ],
        officialWebsite: "https://www.onlineservices.nsdl.com",
        officeName: "NSDL / UTIITSL",
        warnings: ["Ek person ko sirf EK PAN allowed", "PAN-Aadhaar link mandatory hai", "e-PAN legal valid hai", "Duplicate PAN par penalty lagti hai"]
      },
      {
        id: "passport-seva",
        title: "Passport Seva",
        titleHi: "पासपोर्ट सेवा",
        description: "Passport apply, renewal, tatkal - complete guide",
        eligibility: ["Indian citizens", "Valid address proof mandatory"],
        documents: ["Aadhaar Card", "Birth proof", "Address Proof", "Old Passport (renewal)"],
        steps: [
          { step: 1, title: "passportindia.gov.in Jaayein", description: "Passport Seva portal kholein" },
          { step: 2, title: "Register/Login", description: "Account banayein ya login karein" },
          { step: 3, title: "Form Bharein", description: "Online form bharein" },
          { step: 4, title: "Fee Pay Karein", description: "Normal: Rs. 1,500 | Tatkal: Rs. 3,500" },
          { step: 5, title: "Appointment Book", description: "PSK appointment book karein" },
          { step: 6, title: "PSK Visit", description: "Documents le kar PSK jaayein" }
        ],
        officialWebsite: "https://www.passportindia.gov.in",
        officeName: "Passport Seva Kendra",
        warnings: ["Normal: 30-45 din | Tatkal: 1-3 din", "Appointment miss mat karein", "Original documents le jaayein", "Police verification hogi"]
      },
      {
        id: "gst-portal",
        title: "GST Portal",
        titleHi: "जीएसटी पोर्टल",
        description: "GST registration, return filing, e-way bill",
        eligibility: ["Business with turnover Rs. 20 lakh+ (services) / Rs. 40 lakh+ (goods)", "Inter-state suppliers", "E-commerce operators"],
        documents: ["PAN Card", "Aadhaar Card", "Business registration proof", "Bank Account", "Address Proof of business"],
        steps: [
          { step: 1, title: "gst.gov.in Jaayein", description: "GST portal par register karein" },
          { step: 2, title: "Registration Apply", description: "New registration ke liye Part A + Part B form bharein" },
          { step: 3, title: "Documents Upload", description: "Business documents upload karein" },
          { step: 4, title: "GSTIN Milega", description: "Verification ke baad GST number milega" },
          { step: 5, title: "Returns File", description: "Monthly/Quarterly returns file karein" }
        ],
        officialWebsite: "https://www.gst.gov.in",
        officeName: "GST Portal / Tax Department",
        warnings: ["GST return late file karne par penalty", "E-way bill Rs. 50,000+ goods transport ke liye", "Input tax credit claim karein", "Composition scheme small business ke liye"]
      },
      {
        id: "myscheme-portal",
        title: "MyScheme Portal",
        titleHi: "मेरी योजना पोर्टल",
        description: "Sabhi government schemes ek jagah - eligibility check karein",
        eligibility: ["Sabhi Indian citizens", "Free service"],
        documents: ["Basic personal details for eligibility check"],
        steps: [
          { step: 1, title: "myscheme.gov.in Jaayein", description: "MyScheme portal kholein" },
          { step: 2, title: "Profile Banayein", description: "Age, income, category, state details bharein" },
          { step: 3, title: "Eligible Schemes Dekhein", description: "Automatic matching se eligible schemes dikhenge" },
          { step: 4, title: "Apply Karein", description: "Direct scheme portal par redirect ho jayenge" }
        ],
        officialWebsite: "https://www.myscheme.gov.in",
        officeName: "MyScheme / Government of India",
        warnings: ["200+ central schemes listed hain", "Auto-matching se eligible schemes milti hain", "State schemes bhi add ho rahi hain", "Mobile friendly hai"]
      }
    ]
  },
  {
    id: "security",
    title: "Digital Security",
    titleHi: "डिजिटल सुरक्षा",
    description: "Password recovery, fraud protection",
    icon: Shield,
    category: "security",
    themeColor: "262 60% 45%", // Cyber Security Purple
    subServices: [
      {
        id: "gmail-recovery",
        title: "Gmail Password Recovery",
        titleHi: "जीमेल पासवर्ड रिकवरी",
        description: "Gmail password bhool gaye to kaise recover karein",
        documents: [
          "Recovery phone number (agar set kiya tha)",
          "Recovery email (agar set kiya tha)",
          "Pehle use kiye hue passwords yaad ho to helpful"
        ],
        steps: [
          { step: 1, title: "accounts.google.com Jaayein", description: "Google account recovery page kholein" },
          { step: 2, title: "Email Daalein", description: "Apna Gmail address enter karein" },
          { step: 3, title: "Forgot Password Click Karein", description: "Password field ke neeche 'Forgot password' dabayein" },
          { step: 4, title: "Recovery Option Chunein", description: "Phone number ya email par code mangein" },
          { step: 5, title: "Code Enter Karein", description: "6-digit verification code daalein" },
          { step: 6, title: "New Password Set Karein", description: "Strong password banayein (8+ characters, numbers, symbols)" }
        ],
        officialWebsite: "https://accounts.google.com/signin/recovery",
        officeName: "Google Account Recovery",
        warnings: [
          "Recovery options pehle se set karke rakhein",
          "2-Step Verification enable karein extra security ke liye",
          "Password kisi ko share mat karein"
        ]
      },
      {
        id: "upi-fraud",
        title: "UPI Fraud Report",
        titleHi: "UPI फ्रॉड रिपोर्ट",
        description: "UPI fraud hua to kya karein",
        documents: [
          "Transaction ID",
          "UPI app screenshot",
          "Date aur time of fraud",
          "Fraudster ka UPI ID agar pata ho"
        ],
        steps: [
          { step: 1, title: "Turant Bank Ko Call Karein", description: "Apne bank ke customer care par call karein" },
          { step: 2, title: "UPI App Mein Report Karein", description: "GPay/PhonePe/Paytm mein transaction select karke 'Report' karein" },
          { step: 3, title: "NPCI Portal Par Complaint", description: "npci.org.in par dispute raise karein" },
          { step: 4, title: "Cyber Crime Portal", description: "cybercrime.gov.in par complaint file karein" },
          { step: 5, title: "Police FIR", description: "Agar badi amount hai to local police mein FIR karein" }
        ],
        officialWebsite: "https://www.cybercrime.gov.in",
        officeName: "Cyber Crime Portal / Bank",
        warnings: [
          "Kabhi OTP ya PIN share mat karein - bank kabhi nahi mangta",
          "Jaldi action lein - 24-48 ghante mein zyada chance hota hai",
          "Screenshot aur proof save karke rakhein"
        ]
      }
    ]
  },
  {
    id: "mobile",
    title: "SIM & Mobile Services",
    titleHi: "सिम और मोबाइल सेवाएं",
    description: "New SIM, port, lost SIM replacement",
    icon: Smartphone,
    category: "mobile",
    themeColor: "200 80% 40%", // Telecom Blue
    subServices: [
      {
        id: "new-sim",
        title: "New SIM Card",
        titleHi: "नया सिम कार्ड",
        description: "Naya SIM kaise lein",
        eligibility: [
          "Indian citizen 18 saal se upar",
          "Minors: Parents ke documents se",
          "Maximum 9 SIMs ek naam par (per operator)"
        ],
        documents: [
          "Aadhaar Card (mandatory for e-KYC)",
          "Passport size photo",
          "Address proof (agar Aadhaar address different hai)"
        ],
        steps: [
          { step: 1, title: "Store Jaayein", description: "Jio, Airtel, Vi, BSNL ka authorized store jaayein" },
          { step: 2, title: "Plan Chunein", description: "Prepaid ya Postpaid - apni need ke hisaab se" },
          { step: 3, title: "Form Bharein", description: "CAF form bharein ya digital form" },
          { step: 4, title: "e-KYC Karein", description: "Aadhaar fingerprint ya OTP based verification" },
          { step: 5, title: "Photo Dein", description: "Photo liya jayega ya submit karein" },
          { step: 6, title: "SIM Lein", description: "2-4 ghante mein activate ho jayega" }
        ],
        officialWebsite: "https://www.jio.com",
        officeName: "Authorized Telecom Store",
        warnings: [
          "Sirf authorized stores se SIM lein",
          "Fake documents use karna criminal offence hai",
          "TRAI rules ke hisaab se 9 SIM limit hai"
        ]
      },
      {
        id: "port-number",
        title: "Port Mobile Number (MNP)",
        titleHi: "नंबर पोर्ट करें",
        description: "Same number different operator mein lein",
        documents: [
          "Current SIM (active honi chahiye)",
          "Aadhaar Card",
          "Passport photo"
        ],
        steps: [
          { step: 1, title: "PORT SMS Bhejein", description: "PORT <space> Mobile Number likho aur 1900 par bhejo" },
          { step: 2, title: "UPC Code Aayega", description: "Unique Porting Code SMS mein milega (4 din valid)" },
          { step: 3, title: "New Operator Store Jaayein", description: "Jis operator mein jaana hai uske store jaayein" },
          { step: 4, title: "UPC Code Dein", description: "Form bharein aur UPC code submit karein" },
          { step: 5, title: "KYC Karein", description: "Aadhaar based verification hoga" },
          { step: 6, title: "Wait Karein", description: "4-7 din mein port ho jayega" }
        ],
        officialWebsite: "https://www.trai.gov.in",
        officeName: "New Operator Store",
        warnings: [
          "Outstanding bills clear karein port se pehle",
          "Postpaid mein NOC lag sakta hai",
          "Port ke time 2-4 ghante network nahi aata"
        ]
      }
    ]
  },
  {
    id: "voter",
    title: "Voter ID Services",
    titleHi: "वोटर आईडी सेवाएं",
    description: "Voter ID banwana, correction, transfer",
    icon: Vote,
    category: "voter",
    themeColor: "340 75% 45%", // ECI Pink/Magenta
    subServices: [
      {
        id: "new-voter-id",
        title: "New Voter ID Card",
        titleHi: "नया वोटर आईडी कार्ड",
        description: "Naya Voter ID kaise banwayein",
        eligibility: [
          "Indian citizen jo 18 saal ka ho gaya ho",
          "1st January ko 18 saal hone chahiye us saal ke",
          "Ordinarily resident of the constituency"
        ],
        documents: [
          "Age Proof - Birth Certificate, 10th Marksheet, Aadhaar",
          "Address Proof - Aadhaar, Ration Card, Utility Bill, Rent Agreement",
          "Passport size photo (recent, white background)",
          "Aadhaar Card (linking ke liye)"
        ],
        steps: [
          { step: 1, title: "voters.eci.gov.in Jaayein", description: "National Voter Service Portal kholein" },
          { step: 2, title: "Register Karein", description: "Mobile number se new account banayein" },
          { step: 3, title: "Form 6 Bharein", description: "New voter registration ke liye Form 6 select karein" },
          { step: 4, title: "Personal Details Daalein", description: "Naam, DOB, gender, address sab bharein" },
          { step: 5, title: "Documents Upload Karein", description: "Photo, age proof, address proof upload karein" },
          { step: 6, title: "Declaration Submit Karein", description: "Self-declaration sign karke submit karein" },
          { step: 7, title: "BLO Verification", description: "Booth Level Officer ghar aayenge verify karne" },
          { step: 8, title: "Voter ID Collect Karein", description: "Approval ke baad EPIC card mil jayega" }
        ],
        officialWebsite: "https://voters.eci.gov.in",
        officeName: "Election Commission of India / BLO",
        warnings: [
          "Voter ID application bilkul FREE hai",
          "BLO verification mein ghar par rehna zaroori hai",
          "Fake details dena criminal offence hai",
          "Ye sirf guidance ke liye hai, form official website ya office par hi bharein"
        ]
      },
      {
        id: "voter-id-correction",
        title: "Voter ID Correction",
        titleHi: "वोटर आईडी करेक्शन",
        description: "Naam, photo, address, DOB correction",
        documents: [
          "Current Voter ID Card",
          "Proof of correct information (Birth Certificate, Aadhaar, Passport)",
          "Recent passport size photo (agar photo change karna hai)"
        ],
        steps: [
          { step: 1, title: "NVSP Portal Jaayein", description: "voters.eci.gov.in par login karein" },
          { step: 2, title: "Form 8 Select Karein", description: "Correction of entries ke liye Form 8" },
          { step: 3, title: "EPIC Number Daalein", description: "Apna Voter ID number enter karein" },
          { step: 4, title: "Jo Correct Karna Hai Select Karein", description: "Name, Photo, DOB, Address - jo bhi galat hai" },
          { step: 5, title: "Correct Details Bharein", description: "Sahi information daalein" },
          { step: 6, title: "Document Upload Karein", description: "Supporting proof upload karein" },
          { step: 7, title: "Submit Karein", description: "Application submit karke reference number note karein" }
        ],
        officialWebsite: "https://voters.eci.gov.in",
        officeName: "National Voter Service Portal",
        warnings: [
          "Minor corrections 15-30 din mein ho jaati hain",
          "Address change mein BLO verification hogi",
          "Application status online track kar sakte hain"
        ]
      },
      {
        id: "voter-id-transfer",
        title: "Voter ID Transfer (Shifting)",
        titleHi: "वोटर आईडी ट्रांसफर",
        description: "Naye address par voter registration transfer karein",
        documents: [
          "Current Voter ID Card",
          "New Address Proof - Aadhaar, Rent Agreement, Utility Bill",
          "Passport size photo"
        ],
        steps: [
          { step: 1, title: "NVSP Portal Jaayein", description: "voters.eci.gov.in par login karein" },
          { step: 2, title: "Form 6 Select Karein", description: "Shifting within constituency ya outside ke liye" },
          { step: 3, title: "Old Details Confirm Karein", description: "Purani constituency details verify karein" },
          { step: 4, title: "New Address Daalein", description: "Naya permanent address bharein" },
          { step: 5, title: "Document Upload Karein", description: "New address proof upload karein" },
          { step: 6, title: "Submit Karein", description: "Application submit karein" },
          { step: 7, title: "BLO Verification", description: "Naye address par BLO verification hogi" }
        ],
        officialWebsite: "https://voters.eci.gov.in",
        officeName: "National Voter Service Portal",
        warnings: [
          "Same constituency mein shift hone par Form 8A use karein",
          "Different constituency mein Form 6 use karein",
          "Purana registration automatically delete ho jayega"
        ]
      }
    ]
  },
  {
    id: "driving",
    title: "Driving License Services",
    titleHi: "ड्राइविंग लाइसेंस सेवाएं",
    description: "DL apply, renewal, learner's license",
    icon: Car,
    category: "certificates",
    themeColor: "35 85% 50%", // Parivahan Orange
    subServices: [
      {
        id: "learner-license",
        title: "Learner's License",
        titleHi: "लर्नर लाइसेंस",
        description: "Driving sikhne ke liye pehla step",
        eligibility: [
          "16 saal - gearless scooter (50cc tak)",
          "18 saal - motorcycle aur car",
          "18 saal - transport vehicle (badge ke saath)"
        ],
        documents: [
          "Age Proof - Birth Certificate, Aadhaar, 10th Marksheet",
          "Address Proof - Aadhaar, Passport, Utility Bill",
          "Passport size photos (4-6)",
          "Medical Certificate (Form 1A) - 40+ saal ke liye",
          "Aadhaar Card"
        ],
        steps: [
          { step: 1, title: "parivahan.gov.in Jaayein", description: "Sarathi portal kholein" },
          { step: 2, title: "State Chunein", description: "Apna state aur RTO select karein" },
          { step: 3, title: "Apply Online Click Karein", description: "New Learner's License option chunein" },
          { step: 4, title: "Form Bharein", description: "Personal details, vehicle class bharein" },
          { step: 5, title: "Documents Upload Karein", description: "Photo, signature, documents upload karein" },
          { step: 6, title: "Slot Book Karein", description: "RTO visit ke liye appointment lein" },
          { step: 7, title: "Fees Pay Karein", description: "Rs. 200-500 (state wise different)" },
          { step: 8, title: "RTO Jaayein", description: "Documents verify honge aur computer test hoga" },
          { step: 9, title: "LL Milega", description: "Test pass karne par LL issue hoga (6 mahine valid)" }
        ],
        officialWebsite: "https://parivahan.gov.in/parivahan/",
        officeName: "Regional Transport Office (RTO)",
        warnings: [
          "LL ke bina driving karna illegal hai",
          "LL 6 mahine ke liye valid hota hai",
          "LL ke 30 din baad permanent DL ke liye apply kar sakte hain",
          "Test mein traffic rules aur road signs poochhe jaate hain"
        ]
      },
      {
        id: "permanent-dl",
        title: "Permanent Driving License",
        titleHi: "परमानेंट ड्राइविंग लाइसेंस",
        description: "LL ke baad permanent DL banwayein",
        eligibility: [
          "Valid Learner's License hona chahiye",
          "LL issue hone ke 30 din baad apply kar sakte hain",
          "LL expire hone se pehle apply karna zaroori"
        ],
        documents: [
          "Learner's License (original)",
          "Age Proof - Aadhaar, Birth Certificate",
          "Address Proof - Aadhaar, Passport, Utility Bill",
          "Passport size photos",
          "Medical Certificate (Form 1A) - transport vehicle ke liye"
        ],
        steps: [
          { step: 1, title: "parivahan.gov.in Jaayein", description: "Sarathi portal par jaayein" },
          { step: 2, title: "DL Application Select Karein", description: "Apply for Driving License after LL" },
          { step: 3, title: "LL Number Daalein", description: "Learner's License details bharein" },
          { step: 4, title: "Form Bharein", description: "Vehicle class aur details confirm karein" },
          { step: 5, title: "Slot Book Karein", description: "Driving test ke liye RTO appointment" },
          { step: 6, title: "Fees Pay Karein", description: "Rs. 400-1000 (state aur vehicle class wise)" },
          { step: 7, title: "Driving Test Dein", description: "RTO mein practical driving test hoga" },
          { step: 8, title: "DL Download Karein", description: "Pass hone par DigiLocker mein DL aa jayega" }
        ],
        officialWebsite: "https://parivahan.gov.in/parivahan/",
        officeName: "Regional Transport Office (RTO)",
        warnings: [
          "Driving test mein fail hone par 7 din baad re-test de sakte hain",
          "DL 20 saal ke liye valid hota hai (50 saal umar tak)",
          "50 saal ke baad 5 saal ke liye issue hota hai",
          "DigiLocker DL physical card jaisa valid hai"
        ]
      },
      {
        id: "dl-renewal",
        title: "DL Renewal",
        titleHi: "डीएल रिन्यूअल",
        description: "Expired DL renew karein",
        documents: [
          "Current Driving License (original)",
          "Address Proof (agar address change hua)",
          "Medical Certificate (Form 1A) - 40+ saal ke liye",
          "Passport size photos"
        ],
        steps: [
          { step: 1, title: "parivahan.gov.in Jaayein", description: "Sarathi portal kholein" },
          { step: 2, title: "DL Renewal Select Karein", description: "Renewal of Driving License option" },
          { step: 3, title: "DL Number Daalein", description: "Current DL details enter karein" },
          { step: 4, title: "Details Verify Karein", description: "Personal aur vehicle details check karein" },
          { step: 5, title: "Medical Certificate Upload Karein", description: "40+ ke liye medical form upload" },
          { step: 6, title: "Fees Pay Karein", description: "Rs. 200-500 online pay karein" },
          { step: 7, title: "New DL Aayega", description: "DigiLocker mein updated DL aa jayega" }
        ],
        officialWebsite: "https://parivahan.gov.in/parivahan/",
        officeName: "Regional Transport Office (RTO)",
        warnings: [
          "Expire hone se 1 saal pehle se renewal kar sakte hain",
          "5 saal tak late renewal mein penalty lagti hai",
          "5 saal baad fresh DL apply karna padta hai",
          "Transport vehicle DL ke liye medical test mandatory"
        ]
      }
    ]
  },
  {
    id: "ration",
    title: "Ration Card Services",
    titleHi: "राशन कार्ड सेवाएं",
    description: "Ration card banwana, correction, member add",
    icon: UtensilsCrossed,
    category: "certificates",
    themeColor: "120 50% 35%", // Food Dept Green
    subServices: [
      {
        id: "new-ration-card",
        title: "New Ration Card",
        titleHi: "नया राशन कार्ड",
        description: "Naya ration card kaise apply karein",
        eligibility: [
          "Indian citizen jo state mein permanently rehta ho",
          "Family ka koi existing ration card nahi hona chahiye",
          "BPL ya APL category ke hisaab se card milega"
        ],
        documents: [
          "Aadhaar Card (sabhi family members ka)",
          "Address Proof - Electricity Bill, Rent Agreement, Gas Connection",
          "Income Certificate (BPL ke liye)",
          "Passport size photo (family head ki)",
          "Bank Account Details"
        ],
        steps: [
          { step: 1, title: "State Food Portal Jaayein", description: "Apne state ke food department portal par jaayein (nfsa.gov.in par links)" },
          { step: 2, title: "New Ration Card Apply Karein", description: "Apply for New Ration Card option chunein" },
          { step: 3, title: "Family Head Details Bharein", description: "Naam, Aadhaar, mobile number bharein" },
          { step: 4, title: "Family Members Add Karein", description: "Sabhi members ka Aadhaar aur details daalein" },
          { step: 5, title: "Documents Upload Karein", description: "Address proof, income proof upload karein" },
          { step: 6, title: "Submit Karein", description: "Application submit karke reference number lein" },
          { step: 7, title: "Verification", description: "Food department officer verification karega" },
          { step: 8, title: "Ration Card Collect Karein", description: "Approval ke baad e-Ration Card download ya physical card milega" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "State Food & Civil Supplies Department",
        warnings: [
          "Ration card banwana FREE hai, kisi ko paisa mat dein",
          "Duplicate ration card rakhna illegal hai",
          "Galat information dene par card cancel ho sakta hai",
          "Ye sirf guidance ke liye hai, form official website ya office par hi bharein"
        ]
      },
      {
        id: "ration-card-correction",
        title: "Ration Card Correction",
        titleHi: "राशन कार्ड करेक्शन",
        description: "Naam, address, member details correct karein",
        documents: [
          "Current Ration Card",
          "Aadhaar Card (corrected information ke saath)",
          "Supporting documents (birth certificate, marriage certificate)"
        ],
        steps: [
          { step: 1, title: "State Portal Login Karein", description: "Apne state ke food portal par jaayein" },
          { step: 2, title: "Correction Option Chunein", description: "Edit/Correction in Ration Card select karein" },
          { step: 3, title: "Ration Card Number Daalein", description: "Existing card details enter karein" },
          { step: 4, title: "Jo Correct Karna Hai Select Karein", description: "Name, DOB, Address, Photo - jo bhi galat hai" },
          { step: 5, title: "Correct Details Bharein", description: "Sahi information daalein" },
          { step: 6, title: "Document Upload Karein", description: "Proof upload karein" },
          { step: 7, title: "Submit Karein", description: "Application submit karein" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "State Food & Civil Supplies Department",
        warnings: [
          "Correction mein 15-30 din lag sakte hain",
          "Major changes mein physical verification ho sakti hai",
          "Ration distribution tab tak purane details se chalega"
        ]
      },
      {
        id: "add-member-ration",
        title: "Add/Remove Member",
        titleHi: "मेंबर जोड़ें/हटाएं",
        description: "Ration card mein naya member add ya remove karein",
        documents: [
          "Current Ration Card",
          "New member ka Aadhaar Card",
          "Relationship proof - Marriage Certificate, Birth Certificate",
          "Death Certificate (member remove ke liye)"
        ],
        steps: [
          { step: 1, title: "State Portal Jaayein", description: "Food department portal par login karein" },
          { step: 2, title: "Add/Delete Member Chunein", description: "Member modification option select karein" },
          { step: 3, title: "Ration Card Details Daalein", description: "Card number aur family head details" },
          { step: 4, title: "Member Details Bharein", description: "Naye member ka Aadhaar, naam, DOB, relation" },
          { step: 5, title: "Documents Upload Karein", description: "Birth certificate, marriage certificate upload" },
          { step: 6, title: "Submit Karein", description: "Application submit karein" },
          { step: 7, title: "Verification", description: "Department se approval aayega" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "State Food & Civil Supplies Department",
        warnings: [
          "Naye bacche ko birth certificate ke saath add karein",
          "Shaadi ke baad wife/husband add kar sakte hain",
          "Death ke baad member remove karna zaroori hai",
          "Ek member sirf ek ration card mein ho sakta hai"
        ]
      },
      {
        id: "ration-card-transfer",
        title: "Ration Card Transfer",
        titleHi: "राशन कार्ड ट्रांसफर",
        description: "Naye address par ration card transfer karein",
        documents: [
          "Current Ration Card",
          "New Address Proof - Rent Agreement, Utility Bill",
          "Aadhaar Card with updated address"
        ],
        steps: [
          { step: 1, title: "Old State Portal Jaayein", description: "Jahan se shift ho rahe, wahan ke portal par" },
          { step: 2, title: "Surrender/Transfer Request Karein", description: "Card surrender ya transfer option chunein" },
          { step: 3, title: "NOC Lein", description: "No Objection Certificate generate karein" },
          { step: 4, title: "New State Portal Jaayein", description: "Naye state/district ke portal par jaayein" },
          { step: 5, title: "New Card Apply Karein", description: "NOC ke saath new card apply karein" },
          { step: 6, title: "Documents Submit Karein", description: "New address proof aur old card details dein" },
          { step: 7, title: "Verification", description: "New area mein verification hogi" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "State Food & Civil Supplies Department",
        warnings: [
          "Same state mein transfer easy hai",
          "Different state mein One Nation One Ration Card scheme se portability hai",
          "Transfer mein 1-2 mahine lag sakte hain",
          "ONORC se temporarily kisi bhi state mein ration le sakte hain"
        ]
      }
    ]
  },
  {
    id: "education",
    title: "Education & Scholarship Services",
    titleHi: "शिक्षा और छात्रवृत्ति सेवाएं",
    description: "Scholarship, caste certificate, income certificate help",
    icon: GraduationCap,
    category: "education",
    themeColor: "220 70% 50%", // Education Blue
    subServices: [
      {
        id: "caste-certificate",
        title: "Caste Certificate",
        titleHi: "जाति प्रमाणपत्र",
        description: "SC/ST/OBC jaati praman patra kaise banwayein",
        eligibility: [
          "SC, ST, OBC category ke log",
          "State wise rules alag hain",
          "Father ya grandfather ka caste certificate helpful hai"
        ],
        documents: [
          "Aadhaar Card",
          "Ration Card",
          "Father/Grandfather ka Caste Certificate (agar available)",
          "Birth Certificate",
          "School Leaving Certificate (category mentioned)",
          "Affidavit (notarized)",
          "Passport size photos (2-3)",
          "Residence Proof"
        ],
        steps: [
          { step: 1, title: "State Portal Kholein", description: "Apne state ke e-District portal par jaayein (jaise UP: edistrict.up.gov.in)" },
          { step: 2, title: "Register/Login Karein", description: "New account banayein ya mobile OTP se login karein" },
          { step: 3, title: "Caste Certificate Option Chunein", description: "Apply for Services > Caste Certificate select karein" },
          { step: 4, title: "Form Bharein", description: "Personal details, father's name, caste, address bharein" },
          { step: 5, title: "Documents Upload Karein", description: "Scan karke sabhi documents upload karein" },
          { step: 6, title: "Fees Pay Karein", description: "Minimal fees online pay karein (Rs. 10-50 usually)" },
          { step: 7, title: "Application Track Karein", description: "Application ID se status check karte rahein" },
          { step: 8, title: "Field Verification", description: "Tehsildar office se verification hogi" },
          { step: 9, title: "Certificate Download", description: "Approve hone par DigiLocker ya portal se download karein" }
        ],
        officialWebsite: "https://serviceonline.gov.in",
        officeName: "Tehsil / SDM Office / e-District Portal",
        warnings: [
          "Fake caste certificate banwana criminal offense hai",
          "Verification mein 15-30 din lagte hain",
          "Father/grandfather ka certificate hona bahut helpful hai",
          "School records mein caste mentioned hona chahiye",
          "Har state mein online portal alag hai - apne state ka dhundhein"
        ]
      },
      {
        id: "income-certificate",
        title: "Income Certificate",
        titleHi: "आय प्रमाणपत्र",
        description: "Income certificate kaise banwayein scholarship ke liye",
        eligibility: [
          "Koi bhi Indian citizen",
          "EWS category ke liye Rs. 8 lakh se kam annual income",
          "Different schemes ke liye different income limits"
        ],
        documents: [
          "Aadhaar Card",
          "Ration Card",
          "Salary Slip (agar job hai)",
          "ITR Copy (agar file ki hai)",
          "Self-declaration Affidavit (agar income proof nahi)",
          "Bank Statement (last 6 months)",
          "Passport size photos",
          "Residence Proof"
        ],
        steps: [
          { step: 1, title: "e-District Portal Kholein", description: "Apne state ke e-District portal par jaayein" },
          { step: 2, title: "Login Karein", description: "Mobile number ya email se register/login karein" },
          { step: 3, title: "Income Certificate Select Karein", description: "Apply for Certificate > Income Certificate" },
          { step: 4, title: "Income Details Bharein", description: "Source of income, annual income, family members ki details" },
          { step: 5, title: "Documents Upload Karein", description: "Income proof documents upload karein" },
          { step: 6, title: "Fees Pay Karein", description: "Rs. 10-30 fees pay karein" },
          { step: 7, title: "Verification", description: "Patwari/Tehsil level verification hogi" },
          { step: 8, title: "Certificate Collect", description: "Online download ya CSC center se collect karein" }
        ],
        officialWebsite: "https://serviceonline.gov.in",
        officeName: "Tehsil Office / SDM Office / e-District",
        warnings: [
          "Galat income declare karna punishable offense hai",
          "Certificate ki validity 6 months to 1 year hoti hai",
          "Har purpose ke liye fresh certificate chahiye usually",
          "ITR file karna helpful hai income proof ke liye",
          "Rural aur urban areas mein income limits different hain"
        ]
      },
      {
        id: "scholarship-application",
        title: "Scholarship Applications",
        titleHi: "छात्रवृत्ति आवेदन",
        description: "NSP aur state scholarship kaise apply karein - student scholarship form fill process",
        eligibility: [
          "Students studying in recognized institutions",
          "SC/ST/OBC/Minority/EWS category students",
          "Income criteria as per scheme",
          "Minimum attendance & marks requirements"
        ],
        documents: [
          "Aadhaar Card",
          "Caste Certificate (SC/ST/OBC ke liye)",
          "Income Certificate (latest)",
          "Previous year marksheet",
          "Current year admission proof / Bonafide Certificate",
          "Bank Account Details (student ke naam par)",
          "Passport size photo",
          "Institution Verification Letter"
        ],
        steps: [
          { step: 1, title: "NSP Portal Jaayein", description: "scholarships.gov.in - National Scholarship Portal kholein" },
          { step: 2, title: "New Registration", description: "Student ke naam se new account banayein" },
          { step: 3, title: "Category Select Karein", description: "Pre-Matric, Post-Matric, ya Merit-cum-Means chunein" },
          { step: 4, title: "Personal Details Bharein", description: "Aadhaar verified details, bank account, institution details" },
          { step: 5, title: "Documents Upload", description: "Sabhi required documents scan karke upload karein" },
          { step: 6, title: "Institute Verification", description: "Application submit hone par institute verify karega" },
          { step: 7, title: "State Verification", description: "State nodal officer verify karega" },
          { step: 8, title: "Scholarship Credit", description: "Approve hone par bank account mein directly aayega" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "National Scholarship Portal (NSP)",
        warnings: [
          "Deadline miss mat karein - usually July-November mein hota hai",
          "Ek student sirf ek scholarship le sakta hai (except merit-based)",
          "Bank account student ke naam par hona chahiye",
          "Fake documents se permanent ban ho sakta hai",
          "Institute verification zaruri hai - college/school se confirm karein",
          "State wise additional scholarships bhi check karein"
        ]
      },
      {
        id: "10th-scholarship",
        title: "10th Class Scholarship",
        titleHi: "10वीं कक्षा छात्रवृत्ति",
        description: "Class 10 students ke liye Pre-Matric scholarship form fill kaise karein",
        eligibility: [
          "Class 9 ya 10 mein padh rahe students",
          "SC/ST/OBC/Minority category ke students",
          "Parents ki annual income Rs. 2.5 lakh se kam",
          "Regular mode mein padhai honi chahiye"
        ],
        documents: [
          "Aadhaar Card (student ka)",
          "Caste/Community Certificate",
          "Income Certificate (Rs. 2.5 lakh se kam)",
          "Previous class marksheet (Class 9 result)",
          "Admission slip ya Fee receipt",
          "Bank Passbook (student ke naam)",
          "Passport size photo",
          "School Bonafide Certificate"
        ],
        steps: [
          { step: 1, title: "NSP Portal Jaayein", description: "scholarships.gov.in par jaayein" },
          { step: 2, title: "New Registration Karein", description: "Student Registration par click karein, mobile aur email daalein" },
          { step: 3, title: "Pre-Matric Scholarship Chunein", description: "Category: SC/ST/OBC/Minority Pre-Matric Scholarship select karein" },
          { step: 4, title: "Academic Details Bharein", description: "School name, class 10, roll number, previous marks bharein" },
          { step: 5, title: "Documents Upload Karein", description: "Aadhaar, caste certificate, income proof, marksheet upload karein" },
          { step: 6, title: "Bank Details Add Karein", description: "Student ke naam ka bank account details daalein" },
          { step: 7, title: "Form Submit Karein", description: "Review karke final submit karein" },
          { step: 8, title: "School Verification", description: "School verify karega - principal se confirm karein" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "National Scholarship Portal (NSP)",
        warnings: [
          "Pre-Matric scholarship Class 1-10 ke liye hoti hai",
          "Form July-October mein open hota hai - deadline miss mat karein",
          "Bank account student ke naam par HONA chahiye",
          "Income certificate recent hona chahiye (same year)",
          "School verification zaroori hai - without it reject ho jayega"
        ],
        commonMistakes: [
          "Parents ke bank account mein apply karna - sirf student ka account chalega",
          "Old income certificate dena - fresh banwayein",
          "School verification ke liye remind na karna",
          "Wrong category select karna (SC/ST/OBC/Minority)"
        ],
        problemReasons: [
          "Scholarship reject - income limit exceed ya wrong category",
          "Verification pending - school ne verify nahi kiya",
          "Bank account issue - IFSC ya account number galat"
        ]
      },
      {
        id: "12th-scholarship",
        title: "12th Class Scholarship",
        titleHi: "12वीं कक्षा छात्रवृत्ति",
        description: "Class 12 students ke liye Post-Matric scholarship form fill kaise karein",
        eligibility: [
          "Class 11 ya 12 mein padh rahe students",
          "SC/ST/OBC/Minority/EWS category ke students",
          "Parents ki annual income Rs. 2.5 lakh se kam (varies by category)",
          "Regular mode mein padhai honi chahiye",
          "10th pass hona chahiye"
        ],
        documents: [
          "Aadhaar Card (student ka)",
          "Caste/Community/EWS Certificate",
          "Income Certificate",
          "10th Marksheet",
          "11th Marksheet (agar 12th mein hai)",
          "Admission slip ya Fee receipt",
          "Bank Passbook (student ke naam)",
          "Passport size photo",
          "School/College Bonafide Certificate"
        ],
        steps: [
          { step: 1, title: "NSP Portal Jaayein", description: "scholarships.gov.in par jaayein aur login karein" },
          { step: 2, title: "New Registration Karein", description: "Agar pehle se hai toh login, nahi toh new registration" },
          { step: 3, title: "Post-Matric Scholarship Chunein", description: "Category wise Post-Matric Scholarship select karein" },
          { step: 4, title: "Academic Details Bharein", description: "School/College name, class 11/12, 10th marks bharein" },
          { step: 5, title: "Documents Upload Karein", description: "Sabhi documents scan karke upload karein" },
          { step: 6, title: "Bank Details Verify Karein", description: "Aadhaar linked bank account chahiye" },
          { step: 7, title: "Form Submit Karein", description: "Review karke final submit karein" },
          { step: 8, title: "Institute Verification", description: "School/College verify karega application" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "National Scholarship Portal (NSP)",
        warnings: [
          "Post-Matric scholarship Class 11 onwards ke liye hoti hai",
          "Har saal fresh application deni hoti hai",
          "Aadhaar seeding bank account mein honi chahiye",
          "Institute verification ke bina scholarship nahi aayegi",
          "Deadline usually October-November mein hoti hai"
        ],
        commonMistakes: [
          "Aadhaar bank se link nahi hona",
          "Previous year application ka renewal nahi karna",
          "Wrong course ya institution select karna",
          "Institute verification ke liye follow-up na karna"
        ],
        problemReasons: [
          "Payment fail - Aadhaar not linked to bank",
          "Application reject - income limit exceed",
          "Pending status - institute verification incomplete"
        ]
      },
      {
        id: "merit-scholarship",
        title: "Merit Based Scholarship",
        titleHi: "मेरिट छात्रवृत्ति",
        description: "Acche marks pe milne wali government scholarship - student form fill guide",
        eligibility: [
          "Previous exam mein 80% ya usse zyada marks",
          "Government ya government-aided school ke students",
          "Regular attendance (75%+)",
          "No income restriction for pure merit scholarships"
        ],
        documents: [
          "Aadhaar Card",
          "Previous class marksheet with 80%+ marks",
          "Bonafide Certificate",
          "Bank Account (student ke naam)",
          "Passport size photo",
          "Character Certificate"
        ],
        steps: [
          { step: 1, title: "State Scholarship Portal Check Karein", description: "Apne state ka merit scholarship portal dhundhein" },
          { step: 2, title: "Eligibility Confirm Karein", description: "Minimum marks requirement check karein (usually 80%+)" },
          { step: 3, title: "Online Registration", description: "Portal par student registration karein" },
          { step: 4, title: "Marks Details Bharein", description: "Previous exam marks, subjects, percentage bharein" },
          { step: 5, title: "Documents Upload", description: "Marksheet aur other documents upload karein" },
          { step: 6, title: "Submit Application", description: "Form submit karke acknowledgment lein" },
          { step: 7, title: "Merit List Wait Karein", description: "Merit list publish hone ka wait karein" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "State Education Department",
        warnings: [
          "Merit scholarship mein competition high hota hai",
          "Marks proof authentic hona chahiye",
          "State wise different merit scholarships hain",
          "NTSE, KVPY jaise exams bhi consider karein"
        ]
      },
      {
        id: "minority-scholarship",
        title: "Minority Scholarship",
        titleHi: "अल्पसंख्यक छात्रवृत्ति",
        description: "Muslim, Christian, Sikh, Buddhist, Jain, Parsi community students ke liye scholarship form fill",
        eligibility: [
          "Minority community se belong karna chahiye",
          "Muslims, Christians, Sikhs, Buddhists, Jains, Parsis",
          "Parents ki annual income Rs. 2 lakh se kam",
          "50% marks previous exam mein"
        ],
        documents: [
          "Aadhaar Card",
          "Minority Community Certificate ya Self-Declaration",
          "Income Certificate (Rs. 2 lakh se kam)",
          "Previous marksheet",
          "Admission proof",
          "Bank Account (student ke naam)",
          "Passport size photo"
        ],
        steps: [
          { step: 1, title: "NSP Portal Jaayein", description: "scholarships.gov.in par jaayein" },
          { step: 2, title: "Minority Scholarship Search Karein", description: "Pre-Matric/Post-Matric Scholarship for Minorities select karein" },
          { step: 3, title: "Registration Karein", description: "Student registration complete karein" },
          { step: 4, title: "Community Details Bharein", description: "Minority community select karein - Muslim/Christian/Sikh/Buddhist/Jain/Parsi" },
          { step: 5, title: "Documents Upload", description: "Community proof, income certificate upload karein" },
          { step: 6, title: "Institute Verification", description: "School/College verify karega" },
          { step: 7, title: "Scholarship Credit", description: "Approval ke baad bank mein paisa aayega" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "Ministry of Minority Affairs",
        warnings: [
          "Self-declaration bhi valid hai minority proof ke liye",
          "Income limit strictly followed hota hai",
          "Deadline miss karne par application reject",
          "Pre-Matric aur Post-Matric dono available"
        ]
      },
      {
        id: "girl-scholarship",
        title: "Girl Student Scholarship",
        titleHi: "लड़कियों के लिए छात्रवृत्ति",
        description: "Ladkiyon ke liye special government scholarships - form fill guide",
        eligibility: [
          "Girl students studying in recognized institutions",
          "Class 1 to Post-Graduation tak available",
          "Different schemes ke liye different criteria",
          "Some schemes only for single girl child"
        ],
        documents: [
          "Aadhaar Card",
          "Previous marksheet",
          "Admission proof / Bonafide",
          "Bank Account (student ke naam)",
          "Caste Certificate (agar applicable)",
          "Income Certificate",
          "Passport size photo"
        ],
        steps: [
          { step: 1, title: "Available Schemes Check Karein", description: "CBSE Scholarship, Pragati, Udaan, Beti Bachao Beti Padhao dekhen" },
          { step: 2, title: "Eligibility Match Karein", description: "Apni category ke hisaab se scheme choose karein" },
          { step: 3, title: "Respective Portal Par Jaayein", description: "NSP, AICTE, State portal jo applicable ho" },
          { step: 4, title: "Registration Karein", description: "Girl student ke naam se registration" },
          { step: 5, title: "Form Bharein", description: "Personal, academic, bank details bharein" },
          { step: 6, title: "Documents Upload", description: "Required documents upload karein" },
          { step: 7, title: "Verification Process", description: "Institute aur state verification hogi" }
        ],
        officialWebsite: "https://scholarships.gov.in",
        officeName: "Various - MHRD/AICTE/State",
        warnings: [
          "Pragati Scholarship AICTE dwara technical courses ke liye",
          "CBSE single girl child scholarship bhi available",
          "State wise additional girl scholarships check karein",
          "Higher education ke liye Indira Gandhi Scholarship"
        ]
      },
      {
        id: "domicile-certificate",
        title: "Domicile Certificate",
        titleHi: "मूल निवास प्रमाणपत्र",
        description: "Domicile/Residence certificate kaise banwayein",
        eligibility: [
          "State mein 3+ years se rehne wale",
          "State mein born hue log",
          "Parents ka domicile hona helpful hai"
        ],
        documents: [
          "Aadhaar Card",
          "Birth Certificate (state mein born ke liye)",
          "Ration Card",
          "Electricity Bill / Property Papers",
          "10th/12th Marksheet (state board preferred)",
          "Passport size photos",
          "Affidavit (agar documents weak hain)"
        ],
        steps: [
          { step: 1, title: "e-District Portal Kholein", description: "State ke e-District portal par jaayein" },
          { step: 2, title: "Register Karein", description: "Mobile aur email se account banayein" },
          { step: 3, title: "Domicile/Residence Certificate Chunein", description: "Apply for Certificate section mein jaayein" },
          { step: 4, title: "Form Bharein", description: "Residence details, years of stay, purpose bharein" },
          { step: 5, title: "Documents Upload", description: "Residence proof documents upload karein" },
          { step: 6, title: "Fees Pay Karein", description: "Nominal fees online pay karein" },
          { step: 7, title: "Verification", description: "Local authority verification karega" },
          { step: 8, title: "Certificate Download", description: "Approved certificate download karein" }
        ],
        officialWebsite: "https://serviceonline.gov.in",
        officeName: "Tehsil / SDM Office",
        warnings: [
          "Admission aur job ke liye bahut important hai",
          "State quota benefits ke liye mandatory",
          "Verification mein 15-30 din lag sakte hain",
          "Electricity bill 3+ years old helpful hai",
          "Permanent aur temporary domicile alag hote hain"
        ]
      },
      {
        id: "education-loan",
        title: "Education Loan",
        titleHi: "एजुकेशन लोन",
        description: "Higher education ke liye bank loan kaise lein",
        eligibility: [
          "Indian citizen",
          "Admission confirmed in recognized institution",
          "Age: Usually 16-35 years",
          "Co-applicant (parent/guardian) required"
        ],
        documents: [
          "Aadhaar Card (student + co-applicant)",
          "PAN Card",
          "10th, 12th Marksheets",
          "Admission Letter / Offer Letter",
          "Fee Structure from institution",
          "Co-applicant income proof",
          "Bank statements (6 months)",
          "Collateral documents (Rs. 7.5 lakh+ ke liye)",
          "Passport size photos"
        ],
        steps: [
          { step: 1, title: "Vidya Lakshmi Portal Jaayein", description: "vidyalakshmi.co.in - Common Education Loan Portal" },
          { step: 2, title: "Register Karein", description: "Student ke naam se account create karein" },
          { step: 3, title: "CELAF Form Bharein", description: "Common Education Loan Application Form online bharein" },
          { step: 4, title: "Banks Select Karein", description: "Max 3 banks select karein application ke liye" },
          { step: 5, title: "Documents Upload", description: "Required documents upload karein" },
          { step: 6, title: "Bank Interview", description: "Selected bank branch visit karein for processing" },
          { step: 7, title: "Loan Sanction", description: "Documents verify hone par loan sanction hoga" },
          { step: 8, title: "Disbursement", description: "Institution ko directly fees transfer hogi" }
        ],
        officialWebsite: "https://www.vidyalakshmi.co.in",
        officeName: "Vidya Lakshmi Portal / Banks",
        warnings: [
          "Interest subsidy available hai EWS students ke liye (PM Vidya Lakshmi Karyakram)",
          "Rs. 7.5 lakh tak collateral free loan milta hai",
          "Moratorium period hota hai - padhai ke dauran EMI nahi",
          "Interest rates 8-12% ke beech usually",
          "CIBIL score accha hona chahiye co-applicant ka",
          "Abroad ke liye alag documentation chahiye"
        ]
      }
    ]
  },
  {
    id: "marriage-certificate",
    title: "Marriage Certificate",
    titleHi: "विवाह प्रमाणपत्र",
    description: "Marriage registration aur certificate related services",
    icon: Heart,
    category: "certificates",
    themeColor: "350 70% 50%", // Marriage Red/Pink
    subServices: [
      {
        id: "new-marriage-certificate",
        title: "New Marriage Certificate",
        titleHi: "नया विवाह प्रमाणपत्र",
        description: "Shaadi ka registration aur certificate kaise banwayein",
        eligibility: [
          "Dulha ki umar 21 saal ya usse zyada honi chahiye",
          "Dulhan ki umar 18 saal ya usse zyada honi chahiye",
          "Dono mein se koi bhi pehle se shaadishuda nahi hona chahiye (ya divorce/death proof ho)",
          "Dono mentally fit hone chahiye",
          "Dono ka ek hi religion hona chahiye (Special Marriage Act ke under alag provision)"
        ],
        documents: [
          "Dono ka Aadhaar Card",
          "Dono ka Age Proof - Birth Certificate / School Certificate",
          "Dono ka Address Proof - Voter ID / Passport / Ration Card",
          "Passport size photos - Dulha, Dulhan aur witnesses (4-4)",
          "Shaadi ki photo (joint photo)",
          "2 Witnesses ke ID proof (Aadhaar/Voter ID)",
          "Shadi ka Invitation Card (optional but helpful)",
          "Affidavit - dono ki marital status ke baare mein",
          "Divorce Decree (agar pehle shaadi hui thi)",
          "Death Certificate of spouse (agar widow/widower)"
        ],
        steps: [
          { step: 1, title: "State Portal Visit Karein", description: "Apne state ke marriage registration portal par jaayein (e.g., igrsup.gov.in for UP, mahaeservices.gov.in for Maharashtra)" },
          { step: 2, title: "Online Registration Karein", description: "New user registration karein aur login credentials banayein" },
          { step: 3, title: "Application Form Bharein", description: "Marriage registration form mein dulha-dulhan aur witnesses ki details bharein" },
          { step: 4, title: "Documents Upload Karein", description: "Sabhi required documents scan karke upload karein" },
          { step: 5, title: "Fee Payment Karein", description: "Online fee payment karein (Rs. 100-500 state ke hisaab se)" },
          { step: 6, title: "Appointment Book Karein", description: "Sub-Registrar office mein verification ke liye appointment lein" },
          { step: 7, title: "Office Visit Karein", description: "Dulha, Dulhan aur dono witnesses Sub-Registrar office jaayein" },
          { step: 8, title: "Verification Process", description: "Documents verify honge, signature aur photo liye jaayenge" },
          { step: 9, title: "Certificate Download", description: "Verification ke baad 7-15 din mein certificate download kar sakte hain" }
        ],
        officialWebsite: "https://services.india.gov.in/service/detail/apply-for-marriage-registration",
        officeName: "Sub-Registrar Office / Marriage Registration Office",
        warnings: [
          "Shaadi ke 1 saal ke andar registration karwana best hai",
          "30 din ka notice period hota hai Special Marriage Act mein",
          "Fake witnesses ya documents use karna criminal offense hai",
          "Registration fee Rs. 100-500 ke beech hoti hai - zyada mat dein",
          "Dono parties ka personally present hona zaroori hai",
          "Court marriage aur religious marriage dono register ho sakti hain"
        ]
      },
      {
        id: "marriage-certificate-correction",
        title: "Marriage Certificate Correction",
        titleHi: "विवाह प्रमाणपत्र में सुधार",
        description: "Marriage certificate mein naam ya details correction kaise karein",
        documents: [
          "Original Marriage Certificate",
          "Correction ke liye application letter",
          "Supporting documents (jis detail mein correction chahiye)",
          "Affidavit notarized - correction ke baare mein",
          "Dono spouses ka ID proof",
          "Passport size photos",
          "Court fee stamp (as applicable)"
        ],
        steps: [
          { step: 1, title: "Application Likhein", description: "Sub-Registrar ko application likhein correction ke liye stating exact changes needed" },
          { step: 2, title: "Supporting Documents", description: "Jo bhi correction chahiye uske supporting documents attach karein" },
          { step: 3, title: "Affidavit Banwayein", description: "Notary se affidavit banwayein stating the correct details and reason for correction" },
          { step: 4, title: "Office Visit", description: "Sub-Registrar office jaayein with application, affidavit, original certificate aur documents" },
          { step: 5, title: "Fee Payment", description: "Correction fee pay karein (varies by state)" },
          { step: 6, title: "Verification", description: "Office verify karega documents aur correction approve karega" },
          { step: 7, title: "Corrected Certificate", description: "15-30 din mein corrected certificate mil jayega" }
        ],
        officialWebsite: "https://services.india.gov.in",
        officeName: "Sub-Registrar Office",
        warnings: [
          "Minor corrections jaise spelling mistakes easily ho jaate hain",
          "Major changes ke liye court order lag sakta hai",
          "Original certificate saath mein le jaana zaroori hai",
          "Dono spouses ki consent zaroori hai correction ke liye",
          "False affidavit dena punishable offense hai"
        ]
      },
      {
        id: "duplicate-marriage-certificate",
        title: "Duplicate Marriage Certificate",
        titleHi: "डुप्लीकेट विवाह प्रमाणपत्र",
        description: "Marriage certificate kho jaane par duplicate kaise lein",
        documents: [
          "FIR copy ya Police Complaint (agar certificate chori/kho gaya)",
          "Affidavit - certificate loss ke baare mein",
          "Dono spouses ka ID proof",
          "Original registration number (agar yaad ho)",
          "Date of marriage aur registration",
          "Application form for duplicate",
          "Passport size photos"
        ],
        steps: [
          { step: 1, title: "FIR/Complaint Karein", description: "Police station mein FIR ya online complaint register karein for lost certificate" },
          { step: 2, title: "Affidavit Banwayein", description: "Notary se affidavit banwayein stating certificate lost/damaged" },
          { step: 3, title: "Application Form", description: "Duplicate certificate ke liye application form bharein" },
          { step: 4, title: "Office Visit", description: "Sub-Registrar office jaayein jahan original registration hua tha" },
          { step: 5, title: "Fee Payment", description: "Duplicate certificate fee pay karein (Rs. 200-500)" },
          { step: 6, title: "Record Search", description: "Office records mein search hogi original registration ki" },
          { step: 7, title: "Duplicate Issue", description: "7-15 din mein duplicate certificate issue hoga" }
        ],
        officialWebsite: "https://services.india.gov.in",
        officeName: "Sub-Registrar Office",
        warnings: [
          "Original registration number se process fast hota hai",
          "Bina FIR ke bhi kuch states mein duplicate milta hai",
          "Purane records 100+ saal tak safe rehte hain usually",
          "Duplicate par 'Duplicate' likha hota hai",
          "Same legal validity hoti hai duplicate ki"
        ]
      }
    ]
  },
  {
    id: "birth-certificate",
    title: "Birth Certificate",
    titleHi: "जन्म प्रमाणपत्र",
    description: "Birth registration aur certificate related services",
    icon: Baby,
    category: "certificates",
    themeColor: "190 70% 45%", // CRS Blue
    subServices: [
      {
        id: "new-birth-certificate",
        title: "New Birth Certificate",
        titleHi: "नया जन्म प्रमाणपत्र",
        description: "Bacche ka birth certificate kaise banwayein",
        eligibility: [
          "Birth ke 21 din ke andar registration FREE hai",
          "21 din se 1 saal: Late fee lagti hai",
          "1 saal ke baad: Magistrate order zaroori",
          "Hospital mein paida hue bacche ka hospital dwara registration hota hai"
        ],
        documents: [
          "Hospital discharge slip / Birth report from hospital",
          "Parents ka Aadhaar Card",
          "Parents ka Marriage Certificate",
          "Proof of Address - Ration Card / Voter ID / Electricity Bill",
          "Mother ka vaccination record (MCH card)",
          "Affidavit (agar late registration ho)",
          "Home birth ke liye: Dai/ANM ka statement"
        ],
        steps: [
          { step: 1, title: "Hospital se Form Lein", description: "Agar hospital mein delivery hui hai toh hospital se birth registration form lein" },
          { step: 2, title: "State Portal Visit", description: "crsorgi.gov.in ya state portal par jaayein (e.g., edistrict.up.gov.in)" },
          { step: 3, title: "Online Registration", description: "New user registration karke login karein" },
          { step: 4, title: "Birth Details Bharein", description: "Bacche ki birth details, parents info, hospital info bharein" },
          { step: 5, title: "Documents Upload", description: "Required documents upload karein" },
          { step: 6, title: "Submit Application", description: "Application submit karein - ACK number note karein" },
          { step: 7, title: "Verification", description: "Municipal office / Gram Panchayat verify karega" },
          { step: 8, title: "Certificate Download", description: "Verification ke baad 7-15 din mein download kar sakte hain" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Gram Panchayat / Registrar of Births",
        warnings: [
          "21 din ke andar registration bilkul FREE hai - delay mat karein",
          "Hospital mein birth ho toh hospital khud register karta hai usually",
          "Late registration mein fine aur legal process lagta hai",
          "Birth certificate school admission ke liye mandatory hai",
          "Ghar mein delivery ho toh ANM/Dai ka statement zaroori hai"
        ]
      },
      {
        id: "birth-certificate-correction",
        title: "Birth Certificate Correction",
        titleHi: "जन्म प्रमाणपत्र में सुधार",
        description: "Birth certificate mein naam, date ya details correction",
        documents: [
          "Original Birth Certificate",
          "Correction ke liye application",
          "Supporting documents (School certificate, Aadhaar, etc.)",
          "Affidavit notarized - sahi details ke saath",
          "Parents ka ID proof",
          "Hospital records (agar available ho)"
        ],
        steps: [
          { step: 1, title: "Application Likhein", description: "Registrar ko application likhein stating exact correction needed" },
          { step: 2, title: "Supporting Documents", description: "Sahi details prove karne wale documents collect karein" },
          { step: 3, title: "Affidavit Banwayein", description: "Notary se Rs. 50-100 mein affidavit banwayein with correct details" },
          { step: 4, title: "Online/Offline Apply", description: "State portal ya office mein correction application submit karein" },
          { step: 5, title: "Fee Payment", description: "Correction fee pay karein (Rs. 50-200)" },
          { step: 6, title: "Document Verification", description: "Office documents verify karega" },
          { step: 7, title: "Corrected Certificate", description: "15-30 din mein corrected certificate milega" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Registrar of Births",
        warnings: [
          "Minor corrections (spelling) easily ho jaate hain",
          "Date of birth change ke liye zyada documentation chahiye",
          "School records sabse strong proof mane jaate hain",
          "Parents alive ho toh unki consent zaroori hai",
          "1 saal ke baad ke changes ke liye court order lag sakta hai"
        ]
      },
      {
        id: "duplicate-birth-certificate",
        title: "Duplicate Birth Certificate",
        titleHi: "डुप्लीकेट जन्म प्रमाणपत्र",
        description: "Birth certificate kho jaane par duplicate kaise lein",
        documents: [
          "Application form for duplicate",
          "Affidavit - certificate loss ke baare mein",
          "ID proof of applicant (parent ya person)",
          "Address proof",
          "Original registration details (agar ho)",
          "Any old photocopy of original (helpful)"
        ],
        steps: [
          { step: 1, title: "Affidavit Banwayein", description: "Notary se affidavit banwayein stating certificate lost/damaged" },
          { step: 2, title: "State Portal Visit", description: "crsorgi.gov.in ya state portal par jaayein" },
          { step: 3, title: "Duplicate Option Select", description: "Duplicate/Re-issue birth certificate option select karein" },
          { step: 4, title: "Details Bharein", description: "Birth details, registration number (agar yaad ho) bharein" },
          { step: 5, title: "Documents Upload", description: "Affidavit aur ID proof upload karein" },
          { step: 6, title: "Fee Payment", description: "Duplicate fee online pay karein (Rs. 50-200)" },
          { step: 7, title: "Download Certificate", description: "Verification ke baad download option aa jayega" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Registrar of Births",
        warnings: [
          "Registration number se process bahut fast hota hai",
          "Purane records digitize ho chuke hain mostly",
          "1970 se pehle ke records manual search lag sakti hai",
          "Duplicate certificate fully valid hota hai",
          "Online apply karna office jaane se fast hai"
        ]
      },
      {
        id: "delayed-birth-registration",
        title: "Delayed Birth Registration",
        titleHi: "विलंबित जन्म पंजीकरण",
        description: "21 din ke baad birth registration kaise karein",
        eligibility: [
          "21 din - 1 saal: Late fee ke saath Registrar kar sakta hai",
          "1 saal - 5 saal: Additional documents aur higher fee",
          "5 saal ke baad: Court/Magistrate order mandatory"
        ],
        documents: [
          "Affidavit - delayed registration ke reason ke saath",
          "Parents ka ID aur Address proof",
          "School admission register (agar school gaya ho)",
          "Vaccination records",
          "Hospital records (agar ho)",
          "Ration card showing child's name",
          "2 witnesses ka statement aur ID",
          "Court order (5 saal ke baad ke cases mein)"
        ],
        steps: [
          { step: 1, title: "Documents Collect Karein", description: "Birth prove karne wale saare documents collect karein" },
          { step: 2, title: "Affidavit Banwayein", description: "Delay ka reason likhte hue notarized affidavit banwayein" },
          { step: 3, title: "Witnesses Arrange Karein", description: "2 witnesses jo birth ke time present the unka statement lein" },
          { step: 4, title: "Application Submit", description: "Registrar office mein delayed registration application dein" },
          { step: 5, title: "Fee Payment", description: "Late fee pay karein (Rs. 50-500 depending on delay)" },
          { step: 6, title: "Verification", description: "Field verification ho sakti hai" },
          { step: 7, title: "Certificate Issue", description: "Verification ke baad 15-30 din mein certificate" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / SDM Office",
        warnings: [
          "Jitni jaldi apply karein utna aasaan hoga process",
          "5 saal ke baad court case file karna padta hai",
          "School records bahut helpful hote hain proof ke liye",
          "False information dena punishable offense hai",
          "Court order ke liye lawyer ki zaroorat pad sakti hai",
          "Gram Panchayat certificate bhi helpful ho sakta hai"
        ]
      }
    ]
  },
  {
    id: "death-certificate",
    title: "Death Certificate",
    titleHi: "मृत्यु प्रमाणपत्र",
    description: "Death registration aur certificate related services",
    icon: Skull,
    category: "certificates",
    themeColor: "220 15% 40%", // Neutral Gray
    subServices: [
      {
        id: "new-death-certificate",
        title: "New Death Certificate",
        titleHi: "नया मृत्यु प्रमाणपत्र",
        description: "Mrityu praman patra kaise banwayein",
        eligibility: [
          "Death ke 21 din ke andar registration FREE hai",
          "21 din se 1 saal: Late fee ke saath registration",
          "1 saal ke baad: Magistrate/SDM order zaroori",
          "Hospital mein death ho toh hospital registration karta hai"
        ],
        documents: [
          "Hospital death certificate / Medical certificate of cause of death",
          "Deceased ka Aadhaar Card",
          "Deceased ka Address Proof",
          "Informant (khabar dene wale) ka ID proof",
          "Proof of relationship with deceased",
          "Cremation/Burial receipt (shamshan ghat ki raseed)",
          "Affidavit (late registration ke case mein)",
          "FIR copy (agar accidental/unnatural death ho)"
        ],
        steps: [
          { step: 1, title: "Hospital se Form Lein", description: "Agar hospital mein death hui hai toh hospital se death registration form lein" },
          { step: 2, title: "State Portal Visit", description: "crsorgi.gov.in ya state portal par jaayein" },
          { step: 3, title: "Online Registration", description: "New user registration karke login karein" },
          { step: 4, title: "Death Details Bharein", description: "Deceased ki details, death date/time/place, cause of death bharein" },
          { step: 5, title: "Informant Details", description: "Khabar dene wale ki details aur relationship bharein" },
          { step: 6, title: "Documents Upload", description: "Required documents upload karein" },
          { step: 7, title: "Submit Application", description: "Application submit karein - ACK number note karein" },
          { step: 8, title: "Verification", description: "Municipal office verify karega" },
          { step: 9, title: "Certificate Download", description: "Verification ke baad 7-15 din mein download kar sakte hain" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Gram Panchayat / Registrar of Deaths",
        warnings: [
          "21 din ke andar registration bilkul FREE hai - delay mat karein",
          "Hospital mein death ho toh hospital khud register karta hai usually",
          "Unnatural death (accident, suicide, murder) mein police formalities pehle hongi",
          "Death certificate insurance claim, property transfer ke liye zaroori hai",
          "Shamshan ghat ki raseed zaroor lein - important document hai"
        ]
      },
      {
        id: "death-certificate-correction",
        title: "Death Certificate Correction",
        titleHi: "मृत्यु प्रमाणपत्र में सुधार",
        description: "Death certificate mein naam, date ya details correction",
        documents: [
          "Original Death Certificate",
          "Correction ke liye application",
          "Supporting documents (Aadhaar, Voter ID, etc. of deceased)",
          "Affidavit notarized - sahi details ke saath",
          "Applicant ka ID proof aur relationship proof",
          "Hospital records (agar available ho)"
        ],
        steps: [
          { step: 1, title: "Application Likhein", description: "Registrar ko application likhein stating exact correction needed" },
          { step: 2, title: "Supporting Documents", description: "Sahi details prove karne wale documents collect karein" },
          { step: 3, title: "Affidavit Banwayein", description: "Notary se Rs. 50-100 mein affidavit banwayein with correct details" },
          { step: 4, title: "Online/Offline Apply", description: "State portal ya office mein correction application submit karein" },
          { step: 5, title: "Fee Payment", description: "Correction fee pay karein (Rs. 50-200)" },
          { step: 6, title: "Document Verification", description: "Office documents verify karega" },
          { step: 7, title: "Corrected Certificate", description: "15-30 din mein corrected certificate milega" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Registrar of Deaths",
        warnings: [
          "Minor corrections (spelling) easily ho jaate hain",
          "Date of death change ke liye hospital records zaroori",
          "Cause of death change medical board review maang sakta hai",
          "Family members ki NOC zaroori ho sakti hai",
          "Property disputes mein death certificate correction complicated ho sakti hai"
        ]
      },
      {
        id: "duplicate-death-certificate",
        title: "Duplicate Death Certificate",
        titleHi: "डुप्लीकेट मृत्यु प्रमाणपत्र",
        description: "Death certificate kho jaane par duplicate kaise lein",
        documents: [
          "Application form for duplicate",
          "Affidavit - certificate loss ke baare mein",
          "Applicant ka ID proof",
          "Relationship proof with deceased",
          "Original registration details (agar ho)",
          "Any old photocopy of original (helpful)"
        ],
        steps: [
          { step: 1, title: "Affidavit Banwayein", description: "Notary se affidavit banwayein stating certificate lost/damaged" },
          { step: 2, title: "State Portal Visit", description: "crsorgi.gov.in ya state portal par jaayein" },
          { step: 3, title: "Duplicate Option Select", description: "Duplicate/Re-issue death certificate option select karein" },
          { step: 4, title: "Details Bharein", description: "Death details, registration number (agar yaad ho) bharein" },
          { step: 5, title: "Documents Upload", description: "Affidavit aur ID proof upload karein" },
          { step: 6, title: "Fee Payment", description: "Duplicate fee online pay karein (Rs. 50-200)" },
          { step: 7, title: "Download Certificate", description: "Verification ke baad download option aa jayega" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Registrar of Deaths",
        warnings: [
          "Registration number se process bahut fast hota hai",
          "Family ke kisi bhi member ko duplicate mil sakta hai",
          "Property cases mein multiple copies ki zaroorat pad sakti hai",
          "Duplicate certificate fully valid hota hai",
          "Legal heir certificate saath mein banwana helpful hota hai"
        ]
      },
      {
        id: "delayed-death-registration",
        title: "Delayed Death Registration",
        titleHi: "विलंबित मृत्यु पंजीकरण",
        description: "21 din ke baad death registration kaise karein",
        eligibility: [
          "21 din - 1 saal: Late fee ke saath Registrar kar sakta hai",
          "1 saal ke baad: SDM/Magistrate order mandatory",
          "Unnatural death: Police clearance zaroori"
        ],
        documents: [
          "Affidavit - delayed registration ke reason ke saath",
          "Deceased ka ID proof (Aadhaar, Voter ID, etc.)",
          "Medical certificate of death (agar hospital mein hui thi)",
          "Cremation/Burial certificate",
          "2 witnesses ka statement aur ID",
          "Applicant ka ID aur relationship proof",
          "FIR/Police report (unnatural death mein)",
          "Court order (1 saal ke baad ke cases mein)"
        ],
        steps: [
          { step: 1, title: "Documents Collect Karein", description: "Death prove karne wale saare documents collect karein" },
          { step: 2, title: "Affidavit Banwayein", description: "Delay ka reason likhte hue notarized affidavit banwayein" },
          { step: 3, title: "Witnesses Arrange Karein", description: "2 witnesses jo death ke time present the unka statement lein" },
          { step: 4, title: "Application Submit", description: "Registrar/SDM office mein delayed registration application dein" },
          { step: 5, title: "Fee Payment", description: "Late fee pay karein (Rs. 50-500 depending on delay)" },
          { step: 6, title: "Verification/Inquiry", description: "Field verification ya inquiry ho sakti hai" },
          { step: 7, title: "Certificate Issue", description: "Verification ke baad 15-30 din mein certificate" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / SDM Office",
        warnings: [
          "Jitni jaldi apply karein utna aasaan hoga process",
          "1 saal ke baad SDM/court order zaroori hai",
          "Shamshan ghat ki raseed bahut important proof hai",
          "False information dena punishable offense hai",
          "Property transfer ke liye death certificate mandatory hai",
          "Pension/insurance claim mein death certificate zaroor chahiye"
        ]
      }
    ]
  },
  {
    id: "property",
    title: "Property & Land Records",
    titleHi: "संपत्ति और भूमि रिकॉर्ड",
    description: "Property transfer, mutation, encumbrance certificate",
    icon: Building2,
    category: "certificates",
    themeColor: "28 70% 45%", // Land Revenue Brown
    subServices: [
      {
        id: "property-transfer",
        title: "Property Transfer / Sale Deed",
        titleHi: "संपत्ति हस्तांतरण / बिक्री पत्र",
        description: "Property kharidne ya bechne ka kanooni process",
        eligibility: [
          "Property ka maalik ya uska legal heir",
          "Valid ID proof holder",
          "Property par koi dispute na ho",
          "All dues (tax, loan) clear hon"
        ],
        documents: [
          "Seller ki original sale deed / property documents",
          "Buyer aur Seller ka Aadhaar Card + PAN Card",
          "Property ka latest Encumbrance Certificate (EC)",
          "Property tax payment receipt (latest)",
          "NOC from housing society (agar applicable ho)",
          "2 passport size photos (buyer aur seller dono ki)",
          "2 Witnesses ke Aadhaar Card",
          "Property ka valuation certificate",
          "Power of Attorney (agar koi represent kar raha ho)"
        ],
        steps: [
          { step: 1, title: "Document Verification", description: "Pehle seller ke saare property documents verify karein - sale deed, tax receipts, EC" },
          { step: 2, title: "Property Valuation", description: "Circle rate ya market value check karein - isse stamp duty calculate hogi" },
          { step: 3, title: "Stamp Duty Payment", description: "State ke hisaab se 5-7% stamp duty + 1% registration fee pay karein" },
          { step: 4, title: "Sale Deed Drafting", description: "Lawyer se sale deed draft karwayein - saari terms clearly mention hon" },
          { step: 5, title: "Sub-Registrar Appointment", description: "Local Sub-Registrar office mein online appointment book karein" },
          { step: 6, title: "Registration", description: "Buyer, seller aur 2 witnesses Sub-Registrar office jaayein - biometric verification hogi" },
          { step: 7, title: "Registered Deed Collection", description: "15-30 din mein registered sale deed collect karein" },
          { step: 8, title: "Mutation Apply Karein", description: "Property apne naam karwane ke liye tehsil mein mutation apply karein" }
        ],
        officialWebsite: "https://igrsup.gov.in (UP) / https://igrs.karnataka.gov.in (Karnataka) / State ke hisaab se alag",
        officeName: "Sub-Registrar Office / Tehsil Office",
        warnings: [
          "Property ke documents ka verification lawyer se zaroor karwayein",
          "Encumbrance Certificate zaroor check karein - isse pata chalega property par koi loan ya case hai ya nahi",
          "Stamp duty kam dikhana illegal hai - pakde gaye toh penalty + fine lagega",
          "Cash mein zyada transaction avoid karein - banking channel use karein",
          "Property par pending tax ya dispute check karein",
          "Registered deed ke bina property legally aapki nahi manegi"
        ]
      },
      {
        id: "encumbrance-certificate",
        title: "Encumbrance Certificate (EC)",
        titleHi: "भारमुक्त प्रमाणपत्र (EC)",
        description: "Property par koi loan ya legal dispute hai ya nahi - EC se pata chalta hai",
        eligibility: [
          "Property owner ya legal heir",
          "Property buyer (verification ke liye)",
          "Bank/financial institution (loan ke liye)",
          "Legal representative with valid authorization"
        ],
        documents: [
          "Property ke sale deed ki copy",
          "Property owner ka Aadhaar Card",
          "Property ka survey number / plot number",
          "Application form (Sub-Registrar office se milega)",
          "Fee payment receipt"
        ],
        steps: [
          { step: 1, title: "Online Portal Jaayein", description: "State ke land records portal par jaayein (IGRS/Bhoomi/Bhulekh)" },
          { step: 2, title: "EC Option Select Karein", description: "Encumbrance Certificate ya 'Search' option choose karein" },
          { step: 3, title: "Property Details Bharein", description: "Survey number, village, taluk/tehsil ki details bharein" },
          { step: 4, title: "Period Select Karein", description: "Kitne saal ka EC chahiye - usually 13 ya 30 saal ka lein" },
          { step: 5, title: "Fee Payment", description: "Rs. 50-200 online pay karein (state ke hisaab se alag)" },
          { step: 6, title: "EC Download/Collect", description: "Online EC turant milega ya office se 3-7 din mein" }
        ],
        officialWebsite: "https://igrsup.gov.in / https://bhoomi.karnataka.gov.in / State ke hisaab se alag",
        officeName: "Sub-Registrar Office",
        warnings: [
          "EC mein 'NIL' aana chahiye - matlab koi encumbrance nahi hai",
          "Agar EC mein koi transaction dikhti hai toh uski details verify karein",
          "Property kharidne se pehle 13+ saal ka EC zaroor lein",
          "Bank loan ke liye EC mandatory hai",
          "EC har 6 mahine mein update hota hai - latest lein",
          "Fake EC se bachein - sirf official portal se lein"
        ]
      },
      {
        id: "mutation",
        title: "Property Mutation / Dakhil Kharij",
        titleHi: "दाखिल खारिज / म्यूटेशन",
        description: "Property apne naam karwana - revenue records mein naam change",
        eligibility: [
          "New property owner (buyer)",
          "Legal heir (inheritance mein)",
          "Gift deed holder",
          "Court order se property mile ho"
        ],
        documents: [
          "Registered Sale Deed ki copy",
          "Seller aur Buyer ka Aadhaar Card",
          "Previous owner ke naam ka Khatauni/Khasra",
          "Property tax receipts",
          "Death certificate (agar inheritance ho)",
          "Legal heir certificate (agar applicable)",
          "Succession certificate (court se - inheritance mein)",
          "Passport size photos",
          "Affidavit (notarized)"
        ],
        steps: [
          { step: 1, title: "Tehsil/Circle Office Jaayein", description: "Apne area ke Tehsil ya Revenue office jaayein" },
          { step: 2, title: "Application Form Bharein", description: "Mutation form bharein - online bhi available hai kai states mein" },
          { step: 3, title: "Documents Submit Karein", description: "Saare documents ki attested copies submit karein" },
          { step: 4, title: "Fee Payment", description: "Rs. 100-500 mutation fee pay karein" },
          { step: 5, title: "Site Inspection", description: "Patwari ya Lekhpal site inspection karega" },
          { step: 6, title: "Public Notice", description: "15-30 din ka public notice lagega - objection ke liye" },
          { step: 7, title: "Hearing", description: "Tehsildar ya SDM ke saamne hearing hogi (agar objection ho)" },
          { step: 8, title: "Mutation Order", description: "Approve hone par new Khatauni/7/12 extract milega" }
        ],
        officialWebsite: "https://upbhulekh.gov.in (UP) / https://bhulekh.mahabhumi.gov.in (MH) / State ke hisaab se",
        officeName: "Tehsil Office / Circle Office / Revenue Office",
        warnings: [
          "Mutation ke bina property legally aapke naam nahi manegi",
          "Property tax bhi new owner ke naam shift karna zaroori hai",
          "Mutation mein 1-6 mahine lag sakte hain - patience rakhein",
          "Patwari ko extra paisa dena illegal hai - receipt lein",
          "Inheritance mein legal heir certificate zaroor banwayein",
          "Multiple heirs mein sabki consent zaroori hai"
        ]
      },
      {
        id: "khata-transfer",
        title: "Khata Transfer",
        titleHi: "खाता ट्रांसफर",
        description: "Municipal records mein property ownership change",
        eligibility: [
          "New property owner",
          "Property situated in urban/municipal area",
          "Registered sale deed holder"
        ],
        documents: [
          "Registered Sale Deed copy",
          "Previous Khata extract",
          "Latest property tax receipt",
          "Encumbrance Certificate",
          "Buyer ka Aadhaar + PAN Card",
          "Building plan approval (agar new construction ho)",
          "Occupancy Certificate (agar applicable)",
          "NOC from society/association"
        ],
        steps: [
          { step: 1, title: "Municipal Office Jaayein", description: "Local Municipal Corporation/Nagar Palika office jaayein" },
          { step: 2, title: "Form Bharein", description: "Khata transfer application form bharein" },
          { step: 3, title: "Documents Attach Karein", description: "Required documents ki copies attach karein" },
          { step: 4, title: "Fee Payment", description: "Transfer fee + pending tax (agar ho) pay karein" },
          { step: 5, title: "Verification", description: "Municipal officer documents verify karega" },
          { step: 6, title: "New Khata Issue", description: "15-30 din mein new Khata certificate milega" }
        ],
        officialWebsite: "State/City Municipal Corporation website",
        officeName: "Municipal Corporation / Nagar Palika / Town Planning Office",
        warnings: [
          "Khata transfer ke bina property tax aapke naam nahi aayega",
          "Bank loan mein Khata document zaroor mangta hai",
          "Previous owner ke pending tax aap pay karna padega",
          "A-Khata better hai B-Khata se - loan easily milta hai",
          "Khata number property tax receipt par hota hai"
        ]
      },
      {
        id: "land-records",
        title: "Land Records / Bhulekh",
        titleHi: "भूमि रिकॉर्ड / भूलेख",
        description: "Khasra, Khatauni, 7/12 extract online dekhein",
        eligibility: [
          "Koi bhi person land records dekh sakta hai",
          "Property owner certified copy le sakta hai"
        ],
        documents: [
          "Survey Number / Khasra Number (records dekhne ke liye)",
          "Owner's Aadhaar (certified copy ke liye)",
          "Application form (certified copy ke liye)"
        ],
        steps: [
          { step: 1, title: "State Portal Jaayein", description: "Apne state ka Bhulekh portal kholen (UP-upbhulekh.gov.in, MH-bhulekh.mahabhumi.gov.in)" },
          { step: 2, title: "District/Tehsil Select Karein", description: "Apna district, tehsil aur village select karein" },
          { step: 3, title: "Search Option Chunein", description: "Khasra number, Khata number ya owner name se search karein" },
          { step: 4, title: "Records Dekhein", description: "Land details, ownership, area sab dikhega" },
          { step: 5, title: "Download/Print", description: "Online copy download karein ya Tehsil se certified copy lein" }
        ],
        officialWebsite: "https://upbhulekh.gov.in / https://bhulekh.mahabhumi.gov.in / https://bhoomi.karnataka.gov.in",
        officeName: "Tehsil Office / Taluk Office",
        warnings: [
          "Online copy sirf reference ke liye hai - legal work mein certified copy chahiye",
          "Certified copy Tehsil office se hi milegi",
          "Land records mein naam hona ownership ka proof nahi hai - sale deed primary document hai",
          "Records mismatch ho toh revenue office mein complaint karein",
          "Free mein records dekh sakte ho - kisi ko paisa mat do"
        ]
      }
    ]
  },
  {
    id: "certificates",
    title: "Certificates",
    titleHi: "प्रमाणपत्र",
    description: "Birth, Death, Marriage, Income, Caste, Domicile certificates",
    icon: FileText,
    category: "certificates",
    themeColor: "45 80% 45%", // DigiLocker Amber
    subServices: [
      {
        id: "birth-certificate",
        title: "Birth Certificate",
        titleHi: "जन्म प्रमाणपत्र",
        description: "Bacche ka birth certificate kaise banwayein",
        eligibility: [
          "Parents of the child",
          "Legal guardian",
          "Adult individual for own birth certificate"
        ],
        documents: [
          "Hospital discharge slip / Birth report",
          "Parents ka Aadhaar Card",
          "Parents ka Marriage Certificate",
          "Address Proof (Ration Card, Electricity Bill)",
          "Affidavit (agar late registration ho - 1 saal baad)"
        ],
        steps: [
          { step: 1, title: "Hospital Se Form Lein", description: "Agar hospital mein delivery hui toh wahan se birth registration form lein" },
          { step: 2, title: "Online Portal Jaayein", description: "State ke birth registration portal par jaayein (crsorgi.gov.in)" },
          { step: 3, title: "Form Bharein", description: "Birth details - date, time, place, parents info bharein" },
          { step: 4, title: "Documents Upload Karein", description: "Hospital slip aur parents ke documents upload karein" },
          { step: 5, title: "Submit Karein", description: "21 din ke andar free registration hai, baad mein fee lagti hai" },
          { step: 6, title: "Certificate Download", description: "Verification ke baad online download ya office se collect karein" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Gram Panchayat / Registrar of Births & Deaths",
        warnings: [
          "21 din ke andar registration FREE hai",
          "1 saal baad registration mein court affidavit chahiye",
          "Birth certificate bahut important hai - school admission, passport sab mein lagta hai",
          "Hospital birth report 21 din ke andar le lein"
        ]
      },
      {
        id: "death-certificate",
        title: "Death Certificate",
        titleHi: "मृत्यु प्रमाणपत्र",
        description: "Kisi ki death ke baad death certificate kaise banwayein",
        eligibility: [
          "Family member of deceased",
          "Legal heir",
          "Hospital/Police (in certain cases)"
        ],
        documents: [
          "Hospital death report / Doctor certificate",
          "Deceased ka Aadhaar Card",
          "Applicant ka Aadhaar Card",
          "Proof of relationship (Ration card, etc.)",
          "Police report (agar unnatural death ho)"
        ],
        steps: [
          { step: 1, title: "Death Report Lein", description: "Hospital se death summary ya doctor se certificate lein" },
          { step: 2, title: "Portal Par Jaayein", description: "crsorgi.gov.in par registration karein" },
          { step: 3, title: "Form Bharein", description: "Deceased ki details, death ka reason, date, place bharein" },
          { step: 4, title: "Documents Submit Karein", description: "Required documents upload ya office mein submit karein" },
          { step: 5, title: "Verification", description: "Local authority verify karegi" },
          { step: 6, title: "Certificate Collect", description: "7-15 din mein certificate mil jayega" }
        ],
        officialWebsite: "https://crsorgi.gov.in",
        officeName: "Municipal Corporation / Gram Panchayat / Registrar of Births & Deaths",
        warnings: [
          "21 din ke andar registration zaroori hai",
          "Death certificate bank accounts, property transfer ke liye mandatory hai",
          "Unnatural death mein police report zaroori hai",
          "Late registration mein penalty lagti hai"
        ]
      },
      {
        id: "marriage-certificate",
        title: "Marriage Certificate",
        titleHi: "विवाह प्रमाणपत्र",
        description: "Shaadi ka official certificate kaise banwayein",
        eligibility: [
          "Legally married couples",
          "Husband minimum 21 years, Wife minimum 18 years",
          "Both should be mentally sound",
          "Not already married to someone else"
        ],
        documents: [
          "Both spouses ka Aadhaar Card",
          "Age proof (Birth certificate / 10th marksheet)",
          "Address proof dono ka",
          "Passport size photos (joint + individual)",
          "Marriage invitation card / Marriage photos",
          "Affidavit of marriage (notarized)",
          "2 witnesses ka Aadhaar + photos"
        ],
        steps: [
          { step: 1, title: "Marriage Registrar Office Jaayein", description: "Sub-Registrar ya Marriage Registrar office jaayein" },
          { step: 2, title: "Form Bharein", description: "Marriage registration form bharein - online bhi available" },
          { step: 3, title: "Documents Submit Karein", description: "Saare documents ki copies submit karein" },
          { step: 4, title: "Fee Pay Karein", description: "Rs. 100-500 registration fee pay karein" },
          { step: 5, title: "Notice Period", description: "30 din ka public notice lagega (Hindu Marriage Act mein nahi)" },
          { step: 6, title: "Personal Appearance", description: "Dono spouses + 2 witnesses ko office aana hoga" },
          { step: 7, title: "Certificate Issue", description: "Same day ya 7 din mein certificate mil jayega" }
        ],
        officialWebsite: "https://igrsup.gov.in / State marriage registration portal",
        officeName: "Sub-Registrar Office / Marriage Registrar Office",
        warnings: [
          "Hindu Marriage Act mein same-day registration possible hai",
          "Special Marriage Act mein 30 din notice period hai",
          "Marriage certificate passport, visa, joint accounts ke liye zaroori hai",
          "Both spouses ka personal appearance mandatory hai"
        ]
      },
      {
        id: "income-certificate",
        title: "Income Certificate",
        titleHi: "आय प्रमाणपत्र",
        description: "Govt schemes, scholarship, fee waiver ke liye income certificate",
        eligibility: [
          "Any Indian citizen",
          "Students for scholarship",
          "Families for government schemes"
        ],
        documents: [
          "Aadhaar Card",
          "Ration Card",
          "Salary slip / Income proof",
          "Self-declaration affidavit",
          "Bank statement (optional)",
          "Passport size photo"
        ],
        steps: [
          { step: 1, title: "CSC/e-District Portal Jaayein", description: "State ke e-district portal ya Jan Seva Kendra jaayein" },
          { step: 2, title: "Application Form Bharein", description: "Income certificate ke liye form bharein" },
          { step: 3, title: "Income Details Dein", description: "Annual income sources ki details bharein" },
          { step: 4, title: "Documents Attach Karein", description: "Required documents upload/attach karein" },
          { step: 5, title: "Fee Payment", description: "Rs. 20-50 fee pay karein" },
          { step: 6, title: "Verification", description: "Patwari/Tehsildar verification karega" },
          { step: 7, title: "Certificate Download", description: "3-7 din mein online download kar sakte ho" }
        ],
        officialWebsite: "https://edistrict.up.gov.in / State e-District portal",
        officeName: "Tehsil Office / e-District / Jan Seva Kendra",
        warnings: [
          "Income certificate usually 1 saal ke liye valid hota hai",
          "Galat income declare karna punishable offense hai",
          "Government jobs mein income certificate for reservation use hota hai",
          "Self-employed ke liye CA certificate bhi chalega"
        ]
      },
      {
        id: "caste-certificate",
        title: "Caste Certificate",
        titleHi: "जाति प्रमाणपत्र",
        description: "SC/ST/OBC caste certificate kaise banwayein",
        eligibility: [
          "Belongs to SC/ST/OBC category",
          "Indian citizen",
          "Resident of the state"
        ],
        documents: [
          "Aadhaar Card",
          "Father's caste certificate (agar available)",
          "Ration Card",
          "School leaving certificate mentioning caste",
          "Self-declaration affidavit",
          "Passport size photos"
        ],
        steps: [
          { step: 1, title: "e-District Portal Jaayein", description: "State ke e-district portal ya CSC jaayein" },
          { step: 2, title: "Form Bharein", description: "Caste certificate application form bharein" },
          { step: 3, title: "Caste Details Dein", description: "Father's caste certificate number (agar ho) dein" },
          { step: 4, title: "Documents Upload Karein", description: "Saare supporting documents attach karein" },
          { step: 5, title: "Fee Pay Karein", description: "Rs. 20-50 fee pay karein" },
          { step: 6, title: "Field Verification", description: "Patwari field verification karega" },
          { step: 7, title: "Certificate Issue", description: "7-15 din mein certificate milega" }
        ],
        officialWebsite: "https://edistrict.up.gov.in / State e-District portal",
        officeName: "Tehsil Office / SDM Office / e-District",
        warnings: [
          "Caste certificate reservation, scholarship ke liye zaroori hai",
          "Fake caste certificate serious crime hai - jail ho sakti hai",
          "Father ki lineage se caste determine hoti hai",
          "State change hone par new state se fresh certificate lena padega"
        ]
      },
      {
        id: "domicile-certificate",
        title: "Domicile Certificate",
        titleHi: "मूल निवास प्रमाणपत्र",
        description: "State mein permanent residence ka proof",
        eligibility: [
          "Resident of the state for minimum period (usually 3-15 years)",
          "Born in the state",
          "Government job holders posted in state"
        ],
        documents: [
          "Aadhaar Card",
          "Birth Certificate (agar state mein born)",
          "10th/12th marksheet (school in same state)",
          "Ration Card",
          "Property documents / Rent agreement",
          "Self-declaration affidavit",
          "Passport size photos"
        ],
        steps: [
          { step: 1, title: "e-District Portal Jaayein", description: "State ke e-district ya CSC center jaayein" },
          { step: 2, title: "Application Form Bharein", description: "Domicile certificate form bharein" },
          { step: 3, title: "Residence Details Dein", description: "Kitne saal se state mein reh rahe ho - details bharein" },
          { step: 4, title: "Documents Attach Karein", description: "Residence proof documents upload karein" },
          { step: 5, title: "Fee Pay Karein", description: "Rs. 20-50 fee pay karein" },
          { step: 6, title: "Verification", description: "Local authority verification karegi" },
          { step: 7, title: "Certificate Download", description: "7-15 din mein certificate milega" }
        ],
        officialWebsite: "https://edistrict.up.gov.in / State e-District portal",
        officeName: "Tehsil Office / SDM Office / e-District",
        warnings: [
          "Domicile state quota admission ke liye zaroori hai",
          "Government job mein state quota ke liye chahiye",
          "Usually lifetime valid hota hai",
          "State change karne par new domicile lena padta hai"
        ]
      }
    ]
  },
  {
    id: "help",
    title: "Help & FAQs",
    titleHi: "मदद और प्रश्न",
    description: "Common questions, scam alerts, important helplines",
    icon: HelpCircle,
    category: "help",
    themeColor: "200 60% 45%", // Help Blue
    subServices: [
      {
        id: "scam-alerts",
        title: "Scam Alerts & Safety",
        titleHi: "धोखाधड़ी से बचाव",
        description: "Online scams aur fraud se kaise bachein",
        eligibility: [
          "Everyone should know this"
        ],
        documents: [],
        steps: [
          { step: 1, title: "OTP Kabhi Share Mat Karein", description: "Bank, Aadhaar, ya kisi bhi OTP ko phone par kisi ko mat batayein - koi bhi govt officer OTP nahi mangta" },
          { step: 2, title: "Official Website Use Karein", description: "Sirf .gov.in websites use karein - fake websites se bachein" },
          { step: 3, title: "Phone Par Personal Info Na Dein", description: "Aadhaar, PAN, bank details phone par kabhi na dein" },
          { step: 4, title: "Free Money Scams", description: "Lottery, prize, ya free money ke messages fraud hain - ignore karein" },
          { step: 5, title: "Link Click Mat Karein", description: "WhatsApp/SMS par aaye suspicious links click mat karein" },
          { step: 6, title: "Verify Caller Identity", description: "Bank ya govt se call aaye toh khud official number par call karke verify karein" }
        ],
        officialWebsite: "https://cybercrime.gov.in",
        officeName: "Cyber Crime Portal",
        warnings: [
          "Aadhaar OTP share karna = aapke naam par SIM/Bank account khul sakta hai",
          "KYC update ke naam par fraud calls aate hain - bank khud kabhi nahi mangta",
          "Screen sharing apps (AnyDesk, TeamViewer) download mat karein agar koi kahe",
          "Cyber fraud ho jaye toh turant 1930 par call karein"
        ]
      },
      {
        id: "helplines",
        title: "Important Helplines",
        titleHi: "महत्वपूर्ण हेल्पलाइन नंबर",
        description: "Emergency aur govt helpline numbers",
        eligibility: [
          "Everyone"
        ],
        documents: [],
        steps: [
          { step: 1, title: "Emergency - 112", description: "Police, Fire, Ambulance - All in one emergency number" },
          { step: 2, title: "Women Helpline - 181", description: "Women safety aur domestic violence ke liye" },
          { step: 3, title: "Cyber Crime - 1930", description: "Online fraud, scam, cyber crime report karne ke liye" },
          { step: 4, title: "Child Helpline - 1098", description: "Children in distress ke liye 24x7 helpline" },
          { step: 5, title: "Senior Citizen - 14567", description: "Elderly citizens ke liye help aur support" },
          { step: 6, title: "Consumer Helpline - 1800-11-4000", description: "Consumer complaints aur grievances ke liye" },
          { step: 7, title: "Railway Enquiry - 139", description: "Train timing, PNR status, complaints" },
          { step: 8, title: "UIDAI Helpline - 1947", description: "Aadhaar related queries aur complaints" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Government of India",
        warnings: [
          "Ye sab helplines FREE hain - koi charge nahi lagta",
          "Fake helpline numbers se bachein - Google par official number verify karein",
          "Emergency mein 112 sabse pehle dial karein"
        ]
      },
      {
        id: "common-mistakes",
        title: "Common Mistakes to Avoid",
        titleHi: "आम गलतियाँ जिनसे बचें",
        description: "Sarkari kaam mein log ye galtiyan karte hain",
        eligibility: [
          "Everyone applying for government services"
        ],
        documents: [],
        steps: [
          { step: 1, title: "Naam Spelling Match Karein", description: "Aadhaar, PAN, Bank, Passport - sab mein naam EXACTLY same hona chahiye" },
          { step: 2, title: "Documents Ki Copy Rakhein", description: "Important documents ki xerox aur digital copy dono rakhein" },
          { step: 3, title: "Deadline Yaad Rakhein", description: "ITR, renewal, registration - deadline miss mat karein" },
          { step: 4, title: "Acknowledgment Lein", description: "Koi bhi form submit karein toh receipt/acknowledgment zaroor lein" },
          { step: 5, title: "Agent Pe Depend Na Hon", description: "Khud online karein - agents zyada charge karte hain aur galti bhi karte hain" },
          { step: 6, title: "Mobile Number Updated Rakhein", description: "Aadhaar, Bank, PAN mein mobile number updated rakhein - OTP aata hai" },
          { step: 7, title: "Official Websites Use Karein", description: "Sirf .gov.in websites use karein - private websites avoid karein" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Government Services",
        warnings: [
          "Naam mismatch se bahut problems aati hain - pehle sab jagah correct karein",
          "Original documents kisi ko mat dein - sirf xerox dein",
          "Online portal par hi apply karein - agents ke paas mat jaayein"
        ]
      },
      {
        id: "document-checklist",
        title: "Must-Have Documents",
        titleHi: "ज़रूरी दस्तावेज़",
        description: "Har Indian ke paas ye documents hone chahiye",
        eligibility: [
          "Every Indian citizen"
        ],
        documents: [
          "Aadhaar Card - Identity + Address proof",
          "PAN Card - Tax aur financial transactions ke liye",
          "Voter ID - Voting + ID proof",
          "Passport - International travel ke liye",
          "Driving License - Driving + ID proof",
          "Birth Certificate - Age proof",
          "Bank Account - Financial transactions",
          "Ration Card - Subsidized food + family proof"
        ],
        steps: [
          { step: 1, title: "Aadhaar Card (Priority 1)", description: "Sabse pehle banwayein - almost har jagah lagta hai" },
          { step: 2, title: "PAN Card (Priority 2)", description: "Bank account, income tax, 50000+ transactions ke liye" },
          { step: 3, title: "Bank Account (Priority 3)", description: "Govt subsidies direct bank mein aati hain" },
          { step: 4, title: "Voter ID (Priority 4)", description: "18 saal ke baad zaroor banwayein - voting + ID proof" },
          { step: 5, title: "Birth Certificate (Priority 5)", description: "Agar nahi hai toh banwa lein - age proof ke liye best" },
          { step: 6, title: "Passport (Need Based)", description: "International travel plan ho toh banwayein" },
          { step: 7, title: "Driving License (Need Based)", description: "Vehicle chalane ke liye mandatory hai" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Various Government Offices",
        warnings: [
          "Saare documents mein naam, DOB, address SAME hona chahiye",
          "Digital copies (DigiLocker) mein bhi rakhein",
          "Laminate karke safe jagah rakhein",
          "Khoye documents ki FIR zaroor file karein"
        ]
      }
    ]
  },
  {
    id: "railway",
    title: "Railway & IRCTC Services",
    titleHi: "रेलवे और आईआरसीटीसी सेवाएं",
    description: "Train ticket booking, PNR status, refund",
    icon: Train,
    category: "transport",
    themeColor: "0 70% 45%",
    subServices: [
      {
        id: "irctc-booking",
        title: "IRCTC Ticket Booking",
        titleHi: "आईआरसीटीसी टिकट बुकिंग",
        description: "Online train ticket kaise book karein",
        eligibility: ["Koi bhi Indian citizen", "IRCTC account hona chahiye"],
        documents: ["Aadhaar Card", "Mobile Number", "Email ID", "Debit/Credit Card ya UPI"],
        steps: [
          { step: 1, title: "IRCTC Account Banayein", description: "irctc.co.in par register karein email aur mobile se" },
          { step: 2, title: "Login Karein", description: "Username aur password se login karein" },
          { step: 3, title: "Train Search", description: "From, To station, date dalein aur trains search karein" },
          { step: 4, title: "Seat Select Karein", description: "Class (Sleeper/AC) aur seat choose karein" },
          { step: 5, title: "Payment Karein", description: "UPI, card ya net banking se payment karein" }
        ],
        officialWebsite: "https://www.irctc.co.in",
        officeName: "Indian Railway Catering and Tourism Corporation",
        warnings: ["Tatkal booking subah 10 baje (AC) aur 11 baje (Sleeper) shuru hoti hai", "Fake IRCTC apps se bachein"]
      },
      {
        id: "pnr-status",
        title: "PNR Status Check",
        titleHi: "पीएनआर स्टेटस चेक",
        description: "Train ticket ka PNR status kaise check karein",
        documents: ["PNR Number (10 digit)"],
        steps: [
          { step: 1, title: "IRCTC Website/App Kholein", description: "irctc.co.in ya IRCTC Rail Connect app kholein" },
          { step: 2, title: "PNR Number Dalein", description: "10 digit PNR number enter karein" },
          { step: 3, title: "Status Dekhein", description: "Confirmed, RAC ya Waitlist status dikhega" }
        ],
        officialWebsite: "https://www.indianrail.gov.in",
        officeName: "Indian Railways",
        warnings: ["PNR status chart banne ke baad final hota hai", "Sirf official website use karein"]
      },
      {
        id: "train-refund",
        title: "Train Ticket Refund",
        titleHi: "ट्रेन टिकट रिफंड",
        description: "Cancel ticket ka refund kaise milega",
        documents: ["PNR Number", "IRCTC Login", "Bank Account Details"],
        steps: [
          { step: 1, title: "IRCTC Login Karein", description: "apni IRCTC account mein login karein" },
          { step: 2, title: "Booked Tickets Jaayein", description: "My Transactions > Booked Ticket History" },
          { step: 3, title: "Cancel Karein", description: "Jo ticket cancel karni hai usse select karein" },
          { step: 4, title: "Refund Wait", description: "Refund 5-7 working days mein bank account mein aayega" }
        ],
        officialWebsite: "https://www.irctc.co.in",
        officeName: "IRCTC",
        warnings: ["Tatkal tickets par refund nahi milta", "Chart banne ke baad cancellation charges zyada lagte hain"]
      }
    ]
  },
  {
    id: "electricity",
    title: "Electricity Services",
    titleHi: "बिजली सेवाएं",
    description: "Bijli bill, new connection, complaint",
    icon: Zap,
    category: "bills",
    themeColor: "45 85% 48%",
    subServices: [
      {
        id: "electricity-bill",
        title: "Electricity Bill Payment",
        titleHi: "बिजली बिल भुगतान",
        description: "Online bijli bill kaise bhare",
        documents: ["Consumer Number", "Bill Number", "Mobile Number"],
        steps: [
          { step: 1, title: "State Electricity Board Website", description: "Apne state ki electricity board website kholein" },
          { step: 2, title: "Consumer Number Dalein", description: "Bill par likha consumer number enter karein" },
          { step: 3, title: "Amount Check Karein", description: "Outstanding amount verify karein" },
          { step: 4, title: "Payment Karein", description: "UPI, card ya net banking se pay karein" }
        ],
        officialWebsite: "https://www.bijlibill.com",
        officeName: "State Electricity Board",
        warnings: ["Due date ke baad late fee lagti hai", "Meter reading verify karein bill par"]
      },
      {
        id: "new-electricity-connection",
        title: "New Electricity Connection",
        titleHi: "नया बिजली कनेक्शन",
        description: "Naya bijli connection kaise lein",
        documents: ["Aadhaar Card", "Address Proof", "Property Documents", "Passport Size Photo", "Application Form"],
        steps: [
          { step: 1, title: "Application Form Bharein", description: "Local electricity office se form lein ya online download karein" },
          { step: 2, title: "Documents Attach Karein", description: "Saare required documents ke copies lagayein" },
          { step: 3, title: "Fees Jama Karein", description: "Connection charges aur security deposit jama karein" },
          { step: 4, title: "Inspection", description: "Lineman aayega inspection ke liye" },
          { step: 5, title: "Meter Lagega", description: "Approval ke baad meter install hoga" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "State Electricity Board",
        warnings: ["Unauthorized connection par heavy fine lagta hai", "Load requirement sahi batayein"]
      }
    ]
  },
  {
    id: "water-services",
    title: "Water Bill Services",
    titleHi: "पानी बिल सेवाएं",
    description: "Pani bill, new connection, complaint",
    icon: Droplets,
    category: "bills",
    themeColor: "200 75% 48%",
    subServices: [
      {
        id: "water-bill-payment",
        title: "Water Bill Payment",
        titleHi: "पानी बिल भुगतान",
        description: "Online pani bill kaise bhare",
        documents: ["Consumer Number", "Connection ID"],
        steps: [
          { step: 1, title: "Jal Board Website Kholein", description: "Apne city/state ke jal board ki website par jaayein" },
          { step: 2, title: "Connection ID Dalein", description: "Apna consumer/connection number enter karein" },
          { step: 3, title: "Bill Dekhein", description: "Current bill amount check karein" },
          { step: 4, title: "Pay Karein", description: "Online payment karein UPI/card se" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Jal Board / Water Authority",
        warnings: ["Pani ki barbadi par fine lag sakta hai", "Meter tamper karna illegal hai"]
      },
      {
        id: "new-water-connection",
        title: "New Water Connection",
        titleHi: "नया पानी कनेक्शन",
        description: "Naya pani connection kaise lein",
        documents: ["Property Papers", "Aadhaar Card", "Application Form", "NOC from Society", "Photo"],
        steps: [
          { step: 1, title: "Application Dein", description: "Local Jal Board office mein application submit karein" },
          { step: 2, title: "Documents Jama Karein", description: "Property proof aur ID proof dein" },
          { step: 3, title: "Fees Bharein", description: "Connection charges pay karein" },
          { step: 4, title: "Inspection & Installation", description: "Team aayegi aur pipeline lagayegi" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Municipal Water Department",
        warnings: ["Illegal boring par penalty lagti hai", "Pipeline damage karna offense hai"]
      }
    ]
  },
  {
    id: "gas-services",
    title: "Gas Connection Services",
    titleHi: "गैस कनेक्शन सेवाएं",
    description: "LPG gas connection, refill, transfer",
    icon: Flame,
    category: "energy",
    themeColor: "15 85% 52%",
    subServices: [
      {
        id: "new-gas-connection",
        title: "New LPG Gas Connection",
        titleHi: "नया एलपीजी गैस कनेक्शन",
        description: "Naya gas connection kaise lein",
        eligibility: ["Koi bhi Indian citizen", "18 saal se zyada umar", "Pehle se connection nahi hona chahiye"],
        documents: ["Aadhaar Card", "Address Proof", "Passport Photo", "Ration Card (optional)", "Bank Account Details"],
        steps: [
          { step: 1, title: "Distributor Choose Karein", description: "HP, Bharat Gas ya Indane mein se choose karein" },
          { step: 2, title: "Online Apply Karein", description: "Company ki website par apply karein" },
          { step: 3, title: "KYC Complete Karein", description: "Documents submit karein distributor ke paas" },
          { step: 4, title: "Payment Karein", description: "Security deposit aur cylinder charge pay karein" },
          { step: 5, title: "Delivery", description: "Cylinder ghar par deliver hoga" }
        ],
        officialWebsite: "https://www.pmuy.gov.in",
        officeName: "HP Gas / Bharat Gas / Indane",
        warnings: ["Duplicate connection lena illegal hai", "Cylinder ka commercial use mat karein"]
      },
      {
        id: "gas-refill-booking",
        title: "Gas Cylinder Refill Booking",
        titleHi: "गैस सिलेंडर रिफिल बुकिंग",
        description: "Online gas cylinder kaise book karein",
        documents: ["Consumer Number", "Registered Mobile Number"],
        steps: [
          { step: 1, title: "Missed Call/SMS Dein", description: "HP: 9555060460, Bharat: 7718955555, Indane: 7718955555 par missed call dein" },
          { step: 2, title: "App Se Book Karein", description: "Company ki app se bhi book kar sakte hain" },
          { step: 3, title: "Delivery Wait Karein", description: "2-5 din mein cylinder deliver hoga" }
        ],
        officialWebsite: "https://www.bharatpetroleum.in",
        officeName: "Gas Distribution Company",
        warnings: ["Subsidy bank account mein aati hai (PAHAL scheme)", "Cylinder ka weight check karein delivery par"]
      }
    ]
  },
  {
    id: "insurance-services",
    title: "Insurance Services",
    titleHi: "बीमा सेवाएं",
    description: "Life, health, vehicle insurance",
    icon: ShieldCheck,
    category: "insurance",
    themeColor: "160 65% 42%",
    subServices: [
      {
        id: "life-insurance",
        title: "Life Insurance (LIC)",
        titleHi: "जीवन बीमा (एलआईसी)",
        description: "LIC policy kaise lein",
        eligibility: ["18-65 saal umar", "Indian citizen"],
        documents: ["Aadhaar Card", "PAN Card", "Age Proof", "Income Proof", "Medical Reports", "Photos"],
        steps: [
          { step: 1, title: "LIC Agent Se Milein", description: "Nearest LIC office ya authorized agent se milein" },
          { step: 2, title: "Plan Choose Karein", description: "Jeevan Labh, Jeevan Umang etc. mein se choose karein" },
          { step: 3, title: "Proposal Form Bharein", description: "Personal aur medical details dein" },
          { step: 4, title: "Medical Test", description: "Agar required hai toh medical test hoga" },
          { step: 5, title: "Premium Pay Karein", description: "First premium pay karein aur policy bond lein" }
        ],
        officialWebsite: "https://www.licindia.in",
        officeName: "Life Insurance Corporation of India",
        warnings: ["Premium time par bharein warna policy lapse ho jayegi", "Fake agents se savdhan rahein"]
      },
      {
        id: "vehicle-insurance",
        title: "Vehicle Insurance",
        titleHi: "वाहन बीमा",
        description: "Car/bike insurance kaise karein",
        documents: ["RC Book", "Previous Insurance Policy", "Driving License", "PAN/Aadhaar"],
        steps: [
          { step: 1, title: "Company Choose Karein", description: "Online comparison websites par best rate dekhein" },
          { step: 2, title: "Vehicle Details Dalein", description: "Registration number, model, year etc. dalein" },
          { step: 3, title: "Coverage Choose Karein", description: "Third party ya comprehensive plan select karein" },
          { step: 4, title: "Payment Karein", description: "Premium pay karein aur policy download karein" }
        ],
        officialWebsite: "https://www.irdai.gov.in",
        officeName: "Insurance Regulatory Authority",
        warnings: ["Bina insurance vehicle chalana illegal hai - ₹2000 fine", "Third party insurance mandatory hai"]
      }
    ]
  },
  {
    id: "pension-services",
    title: "Pension Services",
    titleHi: "पेंशन सेवाएं",
    description: "Old age, widow, disability pension",
    icon: Wallet,
    category: "welfare",
    themeColor: "280 55% 50%",
    subServices: [
      {
        id: "old-age-pension",
        title: "Old Age Pension",
        titleHi: "वृद्धा पेंशन",
        description: "Budhape ki pension kaise milegi",
        eligibility: ["60 saal se zyada umar", "BPL family", "Income limit as per state"],
        documents: ["Aadhaar Card", "Age Proof", "BPL Card", "Bank Passbook", "Income Certificate", "Photo"],
        steps: [
          { step: 1, title: "Online/Offline Apply", description: "State pension portal ya tehsil office mein apply karein" },
          { step: 2, title: "Documents Submit", description: "Saare documents jama karein" },
          { step: 3, title: "Verification", description: "Block/Tehsil level par verification hoga" },
          { step: 4, title: "Approval", description: "Approve hone par pension bank account mein aayegi" }
        ],
        officialWebsite: "https://nsap.nic.in",
        officeName: "National Social Assistance Programme",
        warnings: ["Har saal life certificate (Jeevan Pramaan) dena zaroori hai", "Bank account Aadhaar se link hona chahiye"]
      },
      {
        id: "widow-pension",
        title: "Widow Pension",
        titleHi: "विधवा पेंशन",
        description: "Vidhwa pension ke liye apply karein",
        eligibility: ["Vidhwa mahila", "18-65 saal umar", "BPL ya low income family"],
        documents: ["Aadhaar Card", "Husband ka Death Certificate", "Income Certificate", "Bank Passbook", "Photo"],
        steps: [
          { step: 1, title: "SDM/Tehsil Office Jaayein", description: "Application form lein aur bharein" },
          { step: 2, title: "Documents Lagayein", description: "Death certificate aur ID proof attach karein" },
          { step: 3, title: "Verification", description: "Field verification hoga" },
          { step: 4, title: "Pension Shuru", description: "Approve hone par monthly pension milegi" }
        ],
        officialWebsite: "https://nsap.nic.in",
        officeName: "District Social Welfare Office",
        warnings: ["Dobara shaadi karne par pension band ho jayegi", "Sahi information dein - galat info par penalty"]
      }
    ]
  },
  {
    id: "court-legal",
    title: "Court & Legal Services",
    titleHi: "कोर्ट और कानूनी सेवाएं",
    description: "e-Court, case status, legal aid",
    icon: Gavel,
    category: "legal",
    themeColor: "220 60% 40%",
    subServices: [
      {
        id: "ecourt-case-status",
        title: "e-Court Case Status",
        titleHi: "ई-कोर्ट केस स्टेटस",
        description: "Court case ka status online check karein",
        documents: ["Case Number / CNR Number", "Party Name"],
        steps: [
          { step: 1, title: "eCourts Website Kholein", description: "ecourts.gov.in par jaayein" },
          { step: 2, title: "Court Select Karein", description: "District Court ya High Court select karein" },
          { step: 3, title: "Case Details Dalein", description: "CNR number ya party name se search karein" },
          { step: 4, title: "Status Dekhein", description: "Next date, order, judgment sab dikhega" }
        ],
        officialWebsite: "https://ecourts.gov.in",
        officeName: "e-Courts Services",
        warnings: ["CNR number 16 digit ka hota hai", "Har court ka alag jurisdiction hai"]
      },
      {
        id: "free-legal-aid",
        title: "Free Legal Aid (NALSA)",
        titleHi: "मुफ्त कानूनी सहायता",
        description: "Gareeb logon ke liye free vakeel",
        eligibility: ["SC/ST community", "Women & Children", "Disabled persons", "Annual income ₹3 lakh se kam", "Industrial workers"],
        documents: ["Aadhaar Card", "Income Certificate", "BPL Card", "Case details"],
        steps: [
          { step: 1, title: "DLSA Office Jaayein", description: "District Legal Services Authority office jaayein" },
          { step: 2, title: "Application Dein", description: "Free legal aid ke liye application form bharein" },
          { step: 3, title: "Documents Submit", description: "Income proof aur ID proof dein" },
          { step: 4, title: "Vakeel Milega", description: "Free advocate assign kiya jayega" }
        ],
        officialWebsite: "https://nalsa.gov.in",
        officeName: "National Legal Services Authority",
        warnings: ["Ye bilkul free service hai - koi fees nahi lagti", "Toll-free number: 15100"]
      }
    ]
  },
  {
    id: "police-services",
    title: "Police & FIR Services",
    titleHi: "पुलिस और एफआईआर सेवाएं",
    description: "FIR, complaint, verification",
    icon: Siren,
    category: "police",
    themeColor: "210 70% 35%",
    subServices: [
      {
        id: "online-fir",
        title: "Online FIR / e-FIR",
        titleHi: "ऑनलाइन एफआईआर",
        description: "Online FIR kaise darj karein",
        documents: ["Aadhaar Card", "Mobile Number", "Incident Details", "Evidence (if any)"],
        steps: [
          { step: 1, title: "State Police Website", description: "Apne state ki police website par jaayein" },
          { step: 2, title: "e-FIR Section", description: "Online FIR/Complaint section mein jaayein" },
          { step: 3, title: "Details Bharein", description: "Ghatna ka poora vivran, date, time, jagah likhein" },
          { step: 4, title: "Submit Karein", description: "Form submit karein - complaint number milega" },
          { step: 5, title: "Police Station Visit", description: "Serious cases mein police station jaana padega" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "State Police Department",
        warnings: ["Emergency ke liye 112 dial karein", "Jhoothi FIR dalna punishable offense hai", "Zero FIR kisi bhi thane mein ho sakti hai"]
      },
      {
        id: "police-verification",
        title: "Police Verification Certificate",
        titleHi: "पुलिस वेरिफिकेशन सर्टिफिकेट",
        description: "Police character certificate kaise banwayein",
        documents: ["Aadhaar Card", "Address Proof", "Passport Size Photos", "Application Form"],
        steps: [
          { step: 1, title: "Online/Offline Apply", description: "State police portal ya local thane mein apply karein" },
          { step: 2, title: "Documents Dein", description: "ID proof aur address proof submit karein" },
          { step: 3, title: "Verification", description: "Police aapke ghar/area mein verification karegi" },
          { step: 4, title: "Certificate Milega", description: "15-30 din mein certificate ready hoga" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Local Police Station",
        warnings: ["Passport ke liye police verification zaroori hai", "Criminal record check hota hai"]
      }
    ]
  },
  {
    id: "rti-services",
    title: "RTI Services",
    titleHi: "आरटीआई सेवाएं",
    description: "Right to Information application",
    icon: FileSearch,
    category: "rti",
    themeColor: "142 60% 38%",
    subServices: [
      {
        id: "rti-online",
        title: "RTI Application Online",
        titleHi: "आरटीआई ऑनलाइन आवेदन",
        description: "Online RTI kaise file karein",
        eligibility: ["Koi bhi Indian citizen"],
        documents: ["Mobile Number", "Email ID", "₹10 fee (BPL free)"],
        steps: [
          { step: 1, title: "RTI Portal Kholein", description: "rtionline.gov.in par jaayein" },
          { step: 2, title: "Register/Login", description: "Account banayein ya login karein" },
          { step: 3, title: "Department Select", description: "Jis ministry/dept se info chahiye wo choose karein" },
          { step: 4, title: "Application Likhein", description: "Apna sawal clearly likhein - specific rahein" },
          { step: 5, title: "₹10 Fee Pay Karein", description: "Online payment karein (BPL holders free)" },
          { step: 6, title: "30 Din Wait", description: "30 din mein jawab aana chahiye by law" }
        ],
        officialWebsite: "https://rtionline.gov.in",
        officeName: "RTI Online Portal",
        warnings: ["30 din mein jawab nahi aaye toh First Appeal karein", "RTI mein sirf factual information maang sakte hain, opinion nahi"]
      }
    ]
  },
  {
    id: "gst-services",
    title: "GST & Business Registration",
    titleHi: "जीएसटी और व्यापार पंजीकरण",
    description: "GST registration, returns, MSME",
    icon: Store,
    category: "business",
    themeColor: "170 60% 42%",
    subServices: [
      {
        id: "gst-registration",
        title: "GST Registration",
        titleHi: "जीएसटी रजिस्ट्रेशन",
        description: "GST number kaise lein",
        eligibility: ["Turnover ₹40 lakh+ (goods)", "₹20 lakh+ (services)", "Inter-state business"],
        documents: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Bank Statement", "Photos", "Business Registration"],
        steps: [
          { step: 1, title: "GST Portal Jaayein", description: "gst.gov.in par jaayein aur 'Register Now' click karein" },
          { step: 2, title: "Part A - TRN Generate", description: "PAN, mobile, email dalein - TRN milega" },
          { step: 3, title: "Part B - Full Application", description: "Business details, bank details, documents upload karein" },
          { step: 4, title: "Verification", description: "Aadhaar OTP ya DSC se verify karein" },
          { step: 5, title: "GSTIN Milega", description: "3-7 working days mein GSTIN number milega" }
        ],
        officialWebsite: "https://www.gst.gov.in",
        officeName: "GST Portal",
        warnings: ["GST return time par file karein - late fee lagti hai", "Fake GST practitioners se bachein"]
      },
      {
        id: "msme-udyam",
        title: "MSME/Udyam Registration",
        titleHi: "एमएसएमई/उद्यम रजिस्ट्रेशन",
        description: "Udyam registration kaise karein - free hai",
        eligibility: ["Micro: ₹1 Cr investment", "Small: ₹10 Cr investment", "Medium: ₹50 Cr investment"],
        documents: ["Aadhaar Card", "PAN Card", "Business Details", "Bank Account"],
        steps: [
          { step: 1, title: "Udyam Portal Kholein", description: "udyamregistration.gov.in par jaayein" },
          { step: 2, title: "Aadhaar Dalein", description: "Proprietor/Partner ka Aadhaar number dalein" },
          { step: 3, title: "OTP Verify", description: "Aadhaar linked mobile par OTP aayega" },
          { step: 4, title: "Business Details Bharein", description: "Business type, activity, investment details dalein" },
          { step: 5, title: "Certificate Download", description: "Turant Udyam Registration Certificate milega" }
        ],
        officialWebsite: "https://udyamregistration.gov.in",
        officeName: "Ministry of MSME",
        warnings: ["Ye bilkul FREE hai - kisi ko fees mat dein", "Ek business ka ek hi Udyam number hota hai"]
      }
    ]
  },
  {
    id: "epf-services",
    title: "EPF/PF Services",
    titleHi: "ईपीएफ/पीएफ सेवाएं",
    description: "PF balance, withdrawal, transfer, UAN",
    icon: PiggyBank,
    category: "employment",
    themeColor: "210 70% 48%",
    subServices: [
      {
        id: "pf-balance-check",
        title: "PF Balance Check",
        titleHi: "पीएफ बैलेंस चेक",
        description: "Apna PF balance kaise check karein",
        documents: ["UAN Number", "Aadhaar linked mobile"],
        steps: [
          { step: 1, title: "UMANG App/EPFO Portal", description: "UMANG app ya epfindia.gov.in par jaayein" },
          { step: 2, title: "UAN Number Dalein", description: "Apna Universal Account Number enter karein" },
          { step: 3, title: "Balance Dekhein", description: "Employee share, employer share, interest sab dikhega" }
        ],
        officialWebsite: "https://www.epfindia.gov.in",
        officeName: "Employees' Provident Fund Organisation",
        warnings: ["Missed call se bhi check kar sakte hain: 011-22901406", "UAN Aadhaar se link karna zaroori hai"]
      },
      {
        id: "pf-withdrawal",
        title: "PF Withdrawal Online",
        titleHi: "पीएफ निकासी ऑनलाइन",
        description: "PF ka paisa online kaise nikalein",
        eligibility: ["Naukri chhodni ke 2 months baad", "Retirement par", "Emergency mein partial withdrawal"],
        documents: ["UAN Number", "Aadhaar Card", "Bank Account (Aadhaar linked)", "PAN Card"],
        steps: [
          { step: 1, title: "EPFO Portal Login", description: "unifiedportal-mem.epfindia.gov.in par login karein" },
          { step: 2, title: "Online Services", description: "Claim (Form-31, 19, 10C) select karein" },
          { step: 3, title: "Bank Account Verify", description: "Bank account number verify karein" },
          { step: 4, title: "Claim Submit", description: "Full/Partial withdrawal claim submit karein" },
          { step: 5, title: "Amount Credit", description: "15-20 din mein bank account mein paisa aayega" }
        ],
        officialWebsite: "https://www.epfindia.gov.in",
        officeName: "EPFO",
        warnings: ["5 saal se pehle nikalne par tax lagta hai", "KYC complete hona zaroori hai online claim ke liye"]
      }
    ]
  },
  {
    id: "esi-services",
    title: "ESI Services",
    titleHi: "ईएसआई सेवाएं",
    description: "ESI card, hospital, claim",
    icon: HeartPulse,
    category: "health",
    themeColor: "340 70% 48%",
    subServices: [
      {
        id: "esi-card",
        title: "ESI Card / Pehchan Card",
        titleHi: "ईएसआई कार्ड",
        description: "ESI card kaise banwayein",
        eligibility: ["₹21,000/month se kam salary wale workers", "10+ employees wali company mein kaam karna"],
        documents: ["Aadhaar Card", "Employer's Details", "Family Details", "Bank Account", "Photos"],
        steps: [
          { step: 1, title: "Employer Se Baat Karein", description: "Company HR se ESI registration karwayein" },
          { step: 2, title: "IP Number Milega", description: "Insured Person (IP) number milega" },
          { step: 3, title: "Online Registration", description: "esic.in par family details dalein" },
          { step: 4, title: "Pehchan Card Download", description: "ESI Pehchan Card online download karein" }
        ],
        officialWebsite: "https://www.esic.in",
        officeName: "Employees' State Insurance Corporation",
        warnings: ["ESI hospital mein free ilaaj milta hai", "Family members bhi covered hain"]
      }
    ]
  },
  {
    id: "labour-card",
    title: "Labour Card Services",
    titleHi: "लेबर कार्ड सेवाएं",
    description: "Shramik card, construction worker card",
    icon: HardHat,
    category: "employment",
    themeColor: "35 80% 48%",
    subServices: [
      {
        id: "labour-card-registration",
        title: "Labour/Shramik Card Registration",
        titleHi: "श्रमिक कार्ड रजिस्ट्रेशन",
        description: "Majdoor/shramik card kaise banwayein",
        eligibility: ["Construction worker ya unorganized sector worker", "18-60 saal umar", "90 din kaam ka proof"],
        documents: ["Aadhaar Card", "Bank Passbook", "Passport Photos", "Age Proof", "90 din kaam ka certificate (employer/contractor se)"],
        steps: [
          { step: 1, title: "Labour Office Jaayein", description: "District Labour Office ya online portal par jaayein" },
          { step: 2, title: "Form Bharein", description: "Registration form bharein - Hindi/English mein available" },
          { step: 3, title: "Documents Submit", description: "Saare documents ki copies jama karein" },
          { step: 4, title: "Card Milega", description: "Verification ke baad Shramik Card issue hoga" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Labour Department",
        warnings: ["Har saal renewal karwana zaroori hai", "Shramik card se kai schemes ka laabh milta hai"]
      }
    ]
  },
  {
    id: "caste-certificate",
    title: "Caste Certificate",
    titleHi: "जाति प्रमाणपत्र",
    description: "SC/ST/OBC caste certificate",
    icon: ScrollText,
    category: "certificates",
    themeColor: "270 55% 50%",
    subServices: [
      {
        id: "caste-cert-apply",
        title: "Caste Certificate Apply",
        titleHi: "जाति प्रमाणपत्र आवेदन",
        description: "SC/ST/OBC certificate kaise banwayein",
        eligibility: ["SC/ST/OBC category ke log", "State ke permanent resident"],
        documents: ["Aadhaar Card", "Ration Card", "Pita/Dada ka Caste Certificate", "School Certificate", "Affidavit", "Photos"],
        steps: [
          { step: 1, title: "Online/Tehsil Apply", description: "State e-District portal ya Tehsil office mein apply karein" },
          { step: 2, title: "Documents Lagayein", description: "Family ka purana caste certificate + ID proof attach karein" },
          { step: 3, title: "Field Verification", description: "Patwari/Lekhpal verification karega" },
          { step: 4, title: "SDM Approval", description: "SDM approve karega aur certificate issue hoga" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Revenue Department / SDM Office",
        warnings: ["Fake caste certificate banwana serious crime hai", "School admission aur govt job ke liye zaroori hai"]
      }
    ]
  },
  {
    id: "domicile-certificate",
    title: "Domicile Certificate",
    titleHi: "मूल निवास प्रमाणपत्र",
    description: "Mool niwas praman patra",
    icon: MapPin,
    category: "certificates",
    themeColor: "145 55% 42%",
    subServices: [
      {
        id: "domicile-apply",
        title: "Domicile Certificate Apply",
        titleHi: "मूल निवास प्रमाणपत्र आवेदन",
        description: "Domicile/bonafide certificate kaise banwayein",
        eligibility: ["State ka permanent resident", "Kam se kam 3 saal se ek state mein rahna"],
        documents: ["Aadhaar Card", "Ration Card", "Voter ID", "Electricity/Water Bill", "Rent Agreement", "School Certificate", "Affidavit"],
        steps: [
          { step: 1, title: "e-District Portal", description: "Apne state ke e-District portal par apply karein" },
          { step: 2, title: "Form Bharein", description: "Personal details aur address proof dalein" },
          { step: 3, title: "Documents Upload", description: "Scanned documents upload karein" },
          { step: 4, title: "Fees Pay Karein", description: "Nominal processing fee pay karein" },
          { step: 5, title: "Certificate Download", description: "Verification ke baad download kar sakte hain" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Tehsil / SDM Office",
        warnings: ["Govt job aur college admission ke liye zaroori hai", "Har state ka apna format hota hai"]
      }
    ]
  },
  {
    id: "income-certificate",
    title: "Income Certificate",
    titleHi: "आय प्रमाणपत्र",
    description: "Income certificate for schemes & admissions",
    icon: CircleDollarSign,
    category: "certificates",
    themeColor: "50 75% 45%",
    subServices: [
      {
        id: "income-cert-apply",
        title: "Income Certificate Apply",
        titleHi: "आय प्रमाणपत्र आवेदन",
        description: "Aay praman patra kaise banwayein",
        eligibility: ["Koi bhi Indian citizen", "Income proof ke liye"],
        documents: ["Aadhaar Card", "Ration Card", "Salary Slip / Self Declaration", "Bank Statement", "Affidavit on stamp paper"],
        steps: [
          { step: 1, title: "e-District Portal", description: "State ke e-District website par jaayein" },
          { step: 2, title: "Application Bharein", description: "Income details aur family details dalein" },
          { step: 3, title: "Documents Upload", description: "Salary slip ya self-declaration affidavit upload karein" },
          { step: 4, title: "Patwari Verification", description: "Patwari/Lekhpal ghar aakar verify karega" },
          { step: 5, title: "Certificate Issue", description: "SDM approve karega - usually 15-30 din" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Revenue Department",
        warnings: ["Galat income batana legal offense hai", "Scholarship aur schemes ke liye zaroori hai"]
      }
    ]
  },
  {
    id: "disability-certificate",
    title: "Disability Certificate",
    titleHi: "दिव्यांग प्रमाणपत्र",
    description: "UDID card, disability certificate",
    icon: Accessibility,
    category: "disability",
    themeColor: "200 65% 45%",
    subServices: [
      {
        id: "udid-card",
        title: "UDID Card (Disability ID)",
        titleHi: "यूडीआईडी कार्ड",
        description: "Unique Disability ID card kaise banwayein",
        eligibility: ["40% ya usse zyada disability wale", "Indian citizen"],
        documents: ["Aadhaar Card", "Medical Reports", "Passport Photos", "Address Proof", "Disability Assessment Report"],
        steps: [
          { step: 1, title: "Online Registration", description: "swavlambancard.gov.in par register karein" },
          { step: 2, title: "Form Bharein", description: "Personal details aur disability details dalein" },
          { step: 3, title: "Medical Board Visit", description: "District hospital mein medical board se assessment karwayein" },
          { step: 4, title: "Certificate & UDID", description: "Assessment ke baad disability certificate aur UDID card milega" }
        ],
        officialWebsite: "https://www.swavlambancard.gov.in",
        officeName: "Department of Empowerment of PwD",
        warnings: ["UDID card puri India mein valid hai", "Ye card train concession, schemes ke liye zaroori hai"]
      }
    ]
  },
  {
    id: "senior-citizen",
    title: "Senior Citizen Services",
    titleHi: "वरिष्ठ नागरिक सेवाएं",
    description: "Senior citizen card, benefits",
    icon: UserCircle,
    category: "senior",
    themeColor: "25 70% 48%",
    subServices: [
      {
        id: "senior-citizen-card",
        title: "Senior Citizen Card",
        titleHi: "वरिष्ठ नागरिक कार्ड",
        description: "Senior citizen ID card kaise banwayein",
        eligibility: ["60 saal se zyada umar", "Indian citizen"],
        documents: ["Aadhaar Card", "Age Proof", "Address Proof", "Photos", "Medical Certificate (if needed)"],
        steps: [
          { step: 1, title: "Municipal Office Jaayein", description: "Local municipal corporation ya nagar palika office jaayein" },
          { step: 2, title: "Form Bharein", description: "Senior Citizen ID application form bharein" },
          { step: 3, title: "Documents Submit", description: "Age proof aur photos submit karein" },
          { step: 4, title: "Card Milega", description: "15-30 din mein card ban jayega" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Municipal Corporation",
        warnings: ["Train mein 40% concession milta hai senior citizens ko", "Bank mein zyada interest rate milta hai FD par"]
      }
    ]
  },
  {
    id: "farmer-services",
    title: "Farmer Registration",
    titleHi: "किसान पंजीकरण सेवाएं",
    description: "Kisan registration, KCC, mandi prices",
    icon: Tractor,
    category: "agriculture",
    themeColor: "120 65% 38%",
    subServices: [
      {
        id: "kisan-registration",
        title: "Farmer/Kisan Registration",
        titleHi: "किसान रजिस्ट्रेशन",
        description: "Sarkari schemes ke liye kisan registration",
        documents: ["Aadhaar Card", "Land Documents (Khatauni/Fard)", "Bank Passbook", "Mobile Number", "Photo"],
        steps: [
          { step: 1, title: "Agriculture Dept Portal", description: "State agriculture department ki website par jaayein" },
          { step: 2, title: "Registration Form", description: "Kisan registration form bharein" },
          { step: 3, title: "Land Details Dalein", description: "Khata number, khasra, rajaswa gaon details dalein" },
          { step: 4, title: "Bank Details", description: "Bank account details dalein (DBT ke liye)" },
          { step: 5, title: "Kisan ID", description: "Registration complete hone par Kisan ID milega" }
        ],
        officialWebsite: "https://pmkisan.gov.in",
        officeName: "Agriculture Department",
        warnings: ["PM-KISAN, fasal bima sabke liye registration zaroori hai", "Land records updated hone chahiye"]
      },
      {
        id: "kcc-loan",
        title: "Kisan Credit Card (KCC)",
        titleHi: "किसान क्रेडिट कार्ड",
        description: "KCC loan kaise lein - 4% interest",
        eligibility: ["Koi bhi kisan", "Land documents hone chahiye", "Share croppers bhi eligible"],
        documents: ["Aadhaar Card", "Land Papers", "Passport Photos", "Bank Account", "Crop Details"],
        steps: [
          { step: 1, title: "Bank Branch Jaayein", description: "Nearest bank branch jaayein (cooperative ya commercial)" },
          { step: 2, title: "KCC Application", description: "KCC application form bharein" },
          { step: 3, title: "Land Documents Dein", description: "Zameen ke kagzaat submit karein" },
          { step: 4, title: "Credit Limit Decide", description: "Bank crop aur land ke hisab se limit decide karega" },
          { step: 5, title: "KCC Issue", description: "Approve hone par KCC card milega - ATM ki tarah use karein" }
        ],
        officialWebsite: "https://www.pmkisan.gov.in",
        officeName: "Bank / Agriculture Dept",
        warnings: ["₹3 lakh tak 4% interest (with subsidy)", "Time par loan repay karein - warna interest badhega"]
      }
    ]
  },
  {
    id: "vehicle-registration",
    title: "Vehicle Registration",
    titleHi: "वाहन पंजीकरण सेवाएं",
    description: "RC, fitness, transfer, NOC",
    icon: Truck,
    category: "transport",
    themeColor: "225 65% 48%",
    subServices: [
      {
        id: "rc-transfer",
        title: "Vehicle RC Transfer",
        titleHi: "वाहन आरसी ट्रांसफर",
        description: "Purane vehicle ki RC apne naam kaise karein",
        documents: ["Form 29 & 30", "Insurance", "PUC Certificate", "Seller's RC", "Aadhaar Card", "Address Proof"],
        steps: [
          { step: 1, title: "Parivahan Portal", description: "parivahan.gov.in par jaayein" },
          { step: 2, title: "Application Bharein", description: "Transfer ke liye Form 29 aur 30 bharein" },
          { step: 3, title: "Fee Pay Karein", description: "State ke hisab se transfer fee pay karein" },
          { step: 4, title: "RTO Visit", description: "Buyer aur seller dono ko RTO jaana hoga" },
          { step: 5, title: "New RC", description: "30-60 din mein naye naam ki RC milegi" }
        ],
        officialWebsite: "https://parivahan.gov.in",
        officeName: "Regional Transport Office",
        warnings: ["Transfer 15 din ke andar karna zaroori hai by law", "Challan pending nahi hona chahiye"]
      },
      {
        id: "vehicle-fitness",
        title: "Vehicle Fitness Certificate",
        titleHi: "वाहन फिटनेस प्रमाणपत्र",
        description: "Commercial vehicle fitness renewal",
        documents: ["RC Book", "Insurance", "PUC Certificate", "Road Tax Receipt"],
        steps: [
          { step: 1, title: "Online Appointment", description: "Parivahan portal par fitness test ka appointment lein" },
          { step: 2, title: "Vehicle Le Jaayein", description: "RTO testing centre par vehicle le jaayein" },
          { step: 3, title: "Inspection", description: "Vehicle ka physical inspection hoga" },
          { step: 4, title: "Certificate", description: "Pass hone par fitness certificate issue hoga" }
        ],
        officialWebsite: "https://parivahan.gov.in",
        officeName: "RTO",
        warnings: ["15 saal purane vehicles ki re-registration zaroori hai", "Fitness expire par ₹10,000 fine lag sakta hai"]
      }
    ]
  },
  {
    id: "fastag",
    title: "FASTag Services",
    titleHi: "फास्टैग सेवाएं",
    description: "FASTag buy, recharge, link",
    icon: Car,
    category: "transport",
    themeColor: "240 60% 50%",
    subServices: [
      {
        id: "fastag-buy",
        title: "Buy & Activate FASTag",
        titleHi: "फास्टैग खरीदें और एक्टिवेट करें",
        description: "Naya FASTag kaise lein",
        documents: ["Vehicle RC", "Owner's Aadhaar/PAN", "Vehicle Photo", "KYC Documents"],
        steps: [
          { step: 1, title: "Bank/Online Purchase", description: "Bank, Paytm, Amazon se FASTag khareedein" },
          { step: 2, title: "KYC Complete", description: "RC copy aur ID proof submit karein" },
          { step: 3, title: "Vehicle Link", description: "Vehicle registration number link karein" },
          { step: 4, title: "Recharge", description: "Minimum ₹200 recharge karein" },
          { step: 5, title: "Windshield Par Lagayein", description: "FASTag sticker gaadi ke windshield par lagayein" }
        ],
        officialWebsite: "https://www.npci.org.in/what-we-do/netc-fastag/product-overview",
        officeName: "NPCI / Bank",
        warnings: ["FASTag ke bina toll double lagega", "Har vehicle ke liye alag FASTag chahiye"]
      },
      {
        id: "fastag-recharge",
        title: "FASTag Recharge",
        titleHi: "फास्टैग रिचार्ज",
        description: "FASTag balance kaise add karein",
        documents: ["FASTag Number / Vehicle Number", "UPI/Card"],
        steps: [
          { step: 1, title: "Paytm/PhonePe/Bank App", description: "Kisi bhi payment app mein FASTag section jaayein" },
          { step: 2, title: "Vehicle Number Dalein", description: "Apni gaadi ka registration number dalein" },
          { step: 3, title: "Amount Dalein", description: "Recharge amount enter karein" },
          { step: 4, title: "Pay Karein", description: "UPI ya card se payment karein" }
        ],
        officialWebsite: "https://www.npci.org.in",
        officeName: "Bank / Payment Apps",
        warnings: ["Low balance hone par toll plaza par issue hoga", "Auto-recharge enable kar sakte hain"]
      }
    ]
  },
  {
    id: "post-office",
    title: "Post Office Services",
    titleHi: "डाकघर सेवाएं",
    description: "Savings, speed post, money order",
    icon: Mail,
    category: "postoffice",
    themeColor: "0 75% 48%",
    subServices: [
      {
        id: "post-office-savings",
        title: "Post Office Savings Account",
        titleHi: "डाकघर बचत खाता",
        description: "Post office mein savings account kaise kholein",
        eligibility: ["Koi bhi Indian citizen", "10 saal se zyada umar"],
        documents: ["Aadhaar Card", "PAN Card", "Address Proof", "Photos", "₹500 minimum deposit"],
        steps: [
          { step: 1, title: "Nearest Post Office", description: "Apne area ke post office jaayein" },
          { step: 2, title: "Form Bharein", description: "Account opening form bharein" },
          { step: 3, title: "KYC Documents Dein", description: "Aadhaar, PAN aur photo submit karein" },
          { step: 4, title: "Initial Deposit", description: "Minimum ₹500 deposit karein" },
          { step: 5, title: "Passbook Milegi", description: "Turant passbook mil jayegi" }
        ],
        officialWebsite: "https://www.indiapost.gov.in",
        officeName: "India Post",
        warnings: ["Post office mein 4% interest milta hai savings par", "PPF, NSC, KVP bhi available hain"]
      },
      {
        id: "speed-post-tracking",
        title: "Speed Post Tracking",
        titleHi: "स्पीड पोस्ट ट्रैकिंग",
        description: "Speed post ka status track karein",
        documents: ["Tracking Number / Consignment Number"],
        steps: [
          { step: 1, title: "India Post Website", description: "indiapost.gov.in par jaayein" },
          { step: 2, title: "Track Consignment", description: "Track & Trace section mein jaayein" },
          { step: 3, title: "Number Dalein", description: "13 digit consignment number dalein" },
          { step: 4, title: "Status Dekhein", description: "Current location aur delivery status dikhega" }
        ],
        officialWebsite: "https://www.indiapost.gov.in",
        officeName: "India Post",
        warnings: ["Tracking number receipt par hota hai", "International parcels ka alag tracking hai"]
      }
    ]
  },
  {
    id: "municipal-services",
    title: "Municipal/Nagar Nigam Services",
    titleHi: "नगर निगम सेवाएं",
    description: "Property tax, birth/death, trade license",
    icon: Building,
    category: "municipal",
    themeColor: "190 60% 42%",
    subServices: [
      {
        id: "property-tax-payment",
        title: "Property Tax Payment",
        titleHi: "संपत्ति कर भुगतान",
        description: "Online property tax kaise bharein",
        documents: ["Property ID / House Number", "Owner Details", "Previous Tax Receipt"],
        steps: [
          { step: 1, title: "Municipal Website", description: "Apne city ki municipal corporation website kholein" },
          { step: 2, title: "Property ID Dalein", description: "Property ID ya address se search karein" },
          { step: 3, title: "Tax Amount Dekhein", description: "Current year ka tax amount check karein" },
          { step: 4, title: "Online Pay", description: "UPI, card ya net banking se pay karein" },
          { step: 5, title: "Receipt Download", description: "Payment receipt download karein" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Municipal Corporation",
        warnings: ["Early payment par 5-10% discount milta hai", "Late payment par penalty lagti hai"]
      },
      {
        id: "trade-license",
        title: "Trade License",
        titleHi: "व्यापार लाइसेंस",
        description: "Dukaan/business ka trade license kaise lein",
        documents: ["Aadhaar Card", "PAN Card", "Property Proof (Ownership/Rent)", "NOC from fire dept", "Photos", "Business Details"],
        steps: [
          { step: 1, title: "Municipal Portal", description: "City municipal corporation ki website par jaayein" },
          { step: 2, title: "Application Bharein", description: "Trade license application form online bharein" },
          { step: 3, title: "Documents Upload", description: "Property papers aur ID proof upload karein" },
          { step: 4, title: "Fees Pay", description: "Trade license fees pay karein (business type ke hisab se)" },
          { step: 5, title: "Inspection", description: "Inspector visit karega - phir license milega" }
        ],
        officialWebsite: "https://www.india.gov.in",
        officeName: "Municipal Corporation",
        warnings: ["Bina trade license dukaan chalana illegal hai", "Har saal renewal zaroori hai"]
      }
    ]
  },
  {
    id: "health-services",
    title: "Health Card & Medical",
    titleHi: "हेल्थ कार्ड और चिकित्सा",
    description: "ABHA card, health ID, hospitals",
    icon: Stethoscope,
    category: "health",
    themeColor: "350 75% 50%",
    subServices: [
      {
        id: "abha-card",
        title: "ABHA Health ID Card",
        titleHi: "आभा हेल्थ आईडी कार्ड",
        description: "ABHA (Ayushman Bharat Health Account) card kaise banwayein",
        eligibility: ["Koi bhi Indian citizen"],
        documents: ["Aadhaar Card", "Mobile Number"],
        steps: [
          { step: 1, title: "ABHA Website", description: "abha.abdm.gov.in par jaayein" },
          { step: 2, title: "Aadhaar se Register", description: "Aadhaar number dalein aur OTP verify karein" },
          { step: 3, title: "ABHA Number Milega", description: "14 digit ABHA number generate hoga" },
          { step: 4, title: "ABHA Address Choose", description: "username@abdm format mein address choose karein" },
          { step: 5, title: "Card Download", description: "ABHA card download aur print karein" }
        ],
        officialWebsite: "https://abha.abdm.gov.in",
        officeName: "National Health Authority",
        warnings: ["Ye card free hai - kisi ko paisa mat dein", "Medical records digitally store honge"]
      }
    ]
  },
  {
    id: "nrega-services",
    title: "NREGA/MGNREGA Job Card",
    titleHi: "नरेगा/मनरेगा जॉब कार्ड",
    description: "NREGA job card, payment, complaint",
    icon: Pickaxe,
    category: "employment",
    themeColor: "28 75% 45%",
    subServices: [
      {
        id: "nrega-job-card",
        title: "NREGA Job Card Apply",
        titleHi: "नरेगा जॉब कार्ड आवेदन",
        description: "NREGA job card kaise banwayein - 100 din kaam guarantee",
        eligibility: ["Rural area ke 18+ umar ke adult", "Unskilled manual work karne ko taiyar"],
        documents: ["Aadhaar Card", "Address Proof", "Passport Photos", "Bank Account Details"],
        steps: [
          { step: 1, title: "Gram Panchayat Jaayein", description: "Apni gram panchayat office mein jaayein" },
          { step: 2, title: "Application Dein", description: "Job card ke liye application form bharein" },
          { step: 3, title: "Family Details", description: "Ghar ke sabhi adults ke naam dalein" },
          { step: 4, title: "Photo Lagayein", description: "Family photo lagega job card par" },
          { step: 5, title: "15 Din Mein Card", description: "15 din mein job card issue hoga" }
        ],
        officialWebsite: "https://nrega.nic.in",
        officeName: "Ministry of Rural Development",
        warnings: ["100 din kaam nahi milne par unemployment allowance milta hai", "Payment bank account mein honi chahiye - cash nahi"]
      },
      {
        id: "nrega-payment-check",
        title: "NREGA Payment Status",
        titleHi: "नरेगा पेमेंट स्टेटस",
        description: "NREGA ka paisa aaya ya nahi check karein",
        documents: ["Job Card Number", "Aadhaar Number"],
        steps: [
          { step: 1, title: "NREGA Website", description: "nrega.nic.in par jaayein" },
          { step: 2, title: "State Select Karein", description: "Apna state, district, block, panchayat select karein" },
          { step: 3, title: "Job Card Search", description: "Naam ya job card number se search karein" },
          { step: 4, title: "Payment Details", description: "Kitne din kaam kiya aur kitna paisa mila - sab dikhega" }
        ],
        officialWebsite: "https://nrega.nic.in",
        officeName: "MGNREGA",
        warnings: ["Minimum wages se kam payment ho toh complaint karein", "Helpline: 1800-345-22-44"]
      }
    ]
  },
  {
    id: "telecom-services",
    title: "Telecom & DTH Services",
    titleHi: "टेलीकॉम और डीटीएच सेवाएं",
    description: "Mobile recharge, port, DTH plans",
    icon: Wifi,
    category: "digital",
    themeColor: "260 65% 52%",
    subServices: [
      {
        id: "mobile-number-port",
        title: "Mobile Number Portability (MNP)",
        titleHi: "मोबाइल नंबर पोर्टेबिलिटी",
        description: "Apna number rakhte hue company badle",
        documents: ["Current SIM", "Aadhaar Card", "New SIM of desired operator"],
        steps: [
          { step: 1, title: "SMS Bhejein", description: "PORT <10 digit number> type karke 1900 par SMS karein" },
          { step: 2, title: "UPC Code Milega", description: "Unique Porting Code (UPC) SMS se milega - 4 din valid" },
          { step: 3, title: "New Operator Store", description: "Jis company mein jaana hai uske store jaayein" },
          { step: 4, title: "Port Form Bharein", description: "UPC code aur ID proof dein" },
          { step: 5, title: "7 Din Wait", description: "7 working days mein number port ho jayega" }
        ],
        officialWebsite: "https://www.trai.gov.in",
        officeName: "TRAI",
        warnings: ["Outstanding bill clear karna zaroori hai", "Corporate numbers port nahi ho sakte easily"]
      },
      {
        id: "trai-dnd",
        title: "DND (Do Not Disturb) Activate",
        titleHi: "डीएनडी (डू नॉट डिस्टर्ब)",
        description: "Spam calls aur SMS band karein",
        documents: ["Registered Mobile Number"],
        steps: [
          { step: 1, title: "SMS Method", description: "START 0 type karke 1909 par SMS karein" },
          { step: 2, title: "Call Method", description: "1909 par call karke DND activate karein" },
          { step: 3, title: "TRAI App", description: "TRAI DND app download karein spam report ke liye" },
          { step: 4, title: "7 Din Wait", description: "7 din mein DND activate ho jayega" }
        ],
        officialWebsite: "https://www.trai.gov.in",
        officeName: "TRAI",
        warnings: ["DND ke baad bhi call aaye toh TRAI app se report karein", "Service messages (bank OTP etc.) band nahi honge"]
      }
    ]
  },
  {
    id: "digilocker-services",
    title: "DigiLocker Services",
    titleHi: "डिजीलॉकर सेवाएं",
    description: "Digital documents, certificates store",
    icon: Globe,
    category: "digital",
    themeColor: "215 75% 50%",
    subServices: [
      {
        id: "digilocker-register",
        title: "DigiLocker Registration",
        titleHi: "डिजीलॉकर रजिस्ट्रेशन",
        description: "DigiLocker account kaise banayein",
        eligibility: ["Aadhaar card holder"],
        documents: ["Aadhaar Card", "Mobile Number (Aadhaar linked)"],
        steps: [
          { step: 1, title: "DigiLocker App/Website", description: "digilocker.gov.in ya app download karein" },
          { step: 2, title: "Sign Up", description: "Aadhaar number dalein" },
          { step: 3, title: "OTP Verify", description: "Aadhaar linked mobile par OTP verify karein" },
          { step: 4, title: "Username Set", description: "Username aur password set karein" },
          { step: 5, title: "Documents Fetch", description: "Driving License, Vehicle RC, Marksheets auto fetch hongi" }
        ],
        officialWebsite: "https://www.digilocker.gov.in",
        officeName: "Ministry of Electronics & IT",
        warnings: ["DigiLocker documents legally valid hain", "1GB free cloud storage milta hai"]
      }
    ]
  },
  {
    id: "grievance-services",
    title: "Grievance & Complaint Portal",
    titleHi: "शिकायत पोर्टल सेवाएं",
    description: "CPGRAMS, consumer complaint, helpline",
    icon: Megaphone,
    category: "rti",
    themeColor: "0 65% 48%",
    subServices: [
      {
        id: "cpgrams-complaint",
        title: "CPGRAMS Complaint",
        titleHi: "सीपीजीआरएएमएस शिकायत",
        description: "Sarkari department ke khilaf online complaint karein",
        eligibility: ["Koi bhi Indian citizen"],
        documents: ["Mobile Number", "Email ID", "Complaint Details"],
        steps: [
          { step: 1, title: "CPGRAMS Portal", description: "pgportal.gov.in par jaayein" },
          { step: 2, title: "Register/Login", description: "Account banayein ya login karein" },
          { step: 3, title: "Ministry/Dept Select", description: "Jis department ki complaint hai wo select karein" },
          { step: 4, title: "Complaint Likhein", description: "Apni shikayat detail mein likhein" },
          { step: 5, title: "Track Karein", description: "Grievance ID se status track karein - 30 din mein jawab aana chahiye" }
        ],
        officialWebsite: "https://pgportal.gov.in",
        officeName: "Directorate of Public Grievances",
        warnings: ["30 din mein action lena zaroori hai by rule", "PM ko bhi direct complaint kar sakte hain"]
      },
      {
        id: "consumer-complaint",
        title: "Consumer Complaint Online",
        titleHi: "उपभोक्ता शिकायत ऑनलाइन",
        description: "Cheating, defective product ki online complaint",
        documents: ["Bill/Receipt", "Product Details", "Communication proof", "Aadhaar Card"],
        steps: [
          { step: 1, title: "Consumer Helpline", description: "consumerhelpline.gov.in par jaayein ya 1800-11-4000 call karein" },
          { step: 2, title: "Complaint Register", description: "Online complaint form bharein" },
          { step: 3, title: "Documents Upload", description: "Bill, warranty card, communication proof upload karein" },
          { step: 4, title: "Mediation", description: "Consumer forum mediation karega" },
          { step: 5, title: "Consumer Court", description: "Resolve nahi hua toh consumer court mein case file karein" }
        ],
        officialWebsite: "https://consumerhelpline.gov.in",
        officeName: "National Consumer Helpline",
        warnings: ["₹5 crore tak ke cases District Forum mein", "E-filing bhi available hai consumer courts mein"]
      }
    ]
  },
  {
    id: "food-ration",
    title: "Food & Ration Services",
    titleHi: "खाद्य और राशन सेवाएं",
    description: "Ration card, PDS, food security",
    icon: Utensils,
    category: "food",
    themeColor: "22 80% 48%",
    subServices: [
      {
        id: "ration-card-online",
        title: "Ration Card Status Check",
        titleHi: "राशन कार्ड स्टेटस चेक",
        description: "Ration card status online kaise check karein",
        documents: ["Application Number", "Aadhaar Number"],
        steps: [
          { step: 1, title: "NFSA Portal", description: "nfsa.gov.in par jaayein" },
          { step: 2, title: "State Select", description: "Apna state select karein" },
          { step: 3, title: "Search Karein", description: "Ration card number ya Aadhaar se search karein" },
          { step: 4, title: "Details Dekhein", description: "Card type, family members, entitlement dekhein" }
        ],
        officialWebsite: "https://nfsa.gov.in",
        officeName: "Department of Food & Public Distribution",
        warnings: ["One Nation One Ration Card se kahi bhi ration le sakte hain", "Ration dealer ne maal nahi diya toh helpline par complaint karein"]
      }
    ]
  },
  {
    id: "environment-services",
    title: "Pollution & Environment",
    titleHi: "प्रदूषण और पर्यावरण",
    description: "PUC certificate, pollution complaint",
    icon: TreePine,
    category: "environment",
    themeColor: "155 55% 38%",
    subServices: [
      {
        id: "puc-certificate",
        title: "PUC Certificate",
        titleHi: "पीयूसी प्रमाणपत्र",
        description: "Vehicle ka pollution certificate kaise banwayein",
        documents: ["Vehicle RC", "Previous PUC (if any)"],
        steps: [
          { step: 1, title: "PUC Center Jaayein", description: "Authorized PUC testing center par vehicle le jaayein" },
          { step: 2, title: "Emission Test", description: "Vehicle ka emission test hoga" },
          { step: 3, title: "Certificate Milega", description: "Pass hone par PUC certificate milega" },
          { step: 4, title: "Online Verify", description: "parivahan.gov.in par PUC verify kar sakte hain" }
        ],
        officialWebsite: "https://parivahan.gov.in",
        officeName: "Transport Department",
        warnings: ["PUC ke bina chalana ₹10,000 fine", "6 months validity hoti hai PUC ki"]
      }
    ]
  },
  {
    id: "missing-central-schemes",
    title: "More Central Schemes",
    titleHi: "अन्य केंद्रीय योजनाएं",
    description: "PM Vishwakarma, Surya Ghar, Khelo India aur badi yojanaayein",
    icon: Gift,
    category: "schemes",
    themeColor: "30 80% 45%",
    subServices: [
      {
        id: "saubhagya-yojana",
        title: "Saubhagya Yojana",
        titleHi: "सौभाग्य योजना",
        description: "Har ghar bijli connection FREE (PM Sahaj Bijli Har Ghar Yojana)",
        eligibility: ["BPL/SECC 2011 list mein naam", "APL families ko Rs.500 (10 EMI mein) dena hota hai", "Jin gharon mein bijli connection nahi hai"],
        documents: ["Aadhaar Card", "Ration Card", "BPL Certificate (agar hai)", "Address Proof", "Mobile Number"],
        steps: [
          { step: 1, title: "Local Bijli Office Jaayein", description: "Apne area ke DISCOM/electricity board office mein jaayein" },
          { step: 2, title: "Saubhagya Camp Dhundhein", description: "Gaon mein lagne wale Saubhagya camp mein bhi apply ho jata hai" },
          { step: 3, title: "Saubhagya Portal", description: "saubhagya.gov.in par mobile number se register karein" },
          { step: 4, title: "Form Bharein", description: "Family details, ghar ka address, Aadhaar diye gaye form mein bharein" },
          { step: 5, title: "Survey Hoga", description: "Bijli vibhag survey karke ghar ki taar fitting karega" },
          { step: 6, title: "Meter Lagega", description: "Free meter, wiring, bulb, switch lagega BPL families ko" }
        ],
        officialWebsite: "https://saubhagya.gov.in",
        officeName: "Ministry of Power / Local DISCOM",
        warnings: ["Asli Saubhagya connection FREE hai - kisi ko paisa mat dein", "BPL ko 100% free, APL ko Rs.500 only (kist mein)", "Helpline: 1912"],
        commonMistakes: ["Bichauliyon ko fees dena", "Galat BPL certificate lagana"],
        problemReasons: ["Connection late - DISCOM workload zyada", "Reject - SECC list mein naam nahi"]
      },
      {
        id: "krishonnati-yojana",
        title: "Krishonnati Yojana (Green Revolution)",
        titleHi: "कृषोन्नति योजना",
        description: "Kisano ki income double karne ka umbrella scheme",
        eligibility: ["Sabhi farmer (small, marginal, large)", "Land records hone chahiye"],
        documents: ["Aadhaar Card", "Land Records", "Bank Account", "Kisan Credit Card (helpful)"],
        steps: [
          { step: 1, title: "Krishi Vibhag Jaayein", description: "Block level Agriculture office mein jaayein" },
          { step: 2, title: "Sub-scheme Chunein", description: "MIDH (Horticulture), NFSM (Food security), NMSA (Sustainable agri), NMOOP (Oilseeds), Sub-Mission Seeds, Mechanization mein se chunein" },
          { step: 3, title: "Form Bharein", description: "Crop type, land area, expected output bharein" },
          { step: 4, title: "Documents Submit", description: "Land record + Aadhaar + bank details dein" },
          { step: 5, title: "Subsidy Approve", description: "Approval ke baad direct bank mein subsidy aayegi" }
        ],
        officialWebsite: "https://www.agricoop.gov.in",
        officeName: "Ministry of Agriculture & Farmers Welfare",
        warnings: ["11 sub-schemes ka umbrella hai", "State agriculture department implement karta hai"],
        commonMistakes: ["Sahi sub-scheme select nahi karna"],
        problemReasons: ["Subsidy late - state budget release pending"]
      },
      {
        id: "khelo-india",
        title: "Khelo India Scheme",
        titleHi: "खेलो इंडिया योजना",
        description: "Khiladiyon ko training, scholarship aur national platform",
        eligibility: ["Under-17 aur Under-21 talented athletes", "School/college level performance hona chahiye", "State level competition mein hissa lena"],
        documents: ["Aadhaar Card", "School/College ID", "Sports performance certificates", "Birth certificate", "Bank account"],
        steps: [
          { step: 1, title: "kheloindia.gov.in Jaayein", description: "Khelo India official portal kholein" },
          { step: 2, title: "Athlete Registration", description: "Apna profile banayein - sport, age category, achievements" },
          { step: 3, title: "Trials Mein Aayein", description: "Khelo India Youth Games / University Games trials mein hissa lein" },
          { step: 4, title: "Selection", description: "Selected athletes ko Rs.5 lakh/year scholarship aur SAI training milti hai" },
          { step: 5, title: "Training Centre Join", description: "Identified Khelo India centres mein training shuru hoti hai" }
        ],
        officialWebsite: "https://kheloindia.gov.in",
        officeName: "Ministry of Youth Affairs & Sports / SAI",
        warnings: ["Talented athletes ko 8 saal tak Rs.5 lakh/year scholarship", "Sports injury insurance bhi cover hota hai"],
        commonMistakes: ["Fake certificates lagana", "Age fraud (Aadhaar se cross-check hota hai)"],
        problemReasons: ["Selection nahi - state level performance kam"]
      },
      {
        id: "make-in-india",
        title: "Make in India",
        titleHi: "मेक इन इंडिया",
        description: "Manufacturing, investment aur job creation initiative",
        eligibility: ["Indian aur foreign companies", "MSME, startup, large industry sab eligible", "25 priority sectors mein focus"],
        documents: ["Company registration", "PAN Card", "GST Certificate", "Project report", "Bank statements"],
        steps: [
          { step: 1, title: "makeinindia.gov.in Jaayein", description: "Official Make in India portal kholein" },
          { step: 2, title: "Sector Chunein", description: "Apna manufacturing sector identify karein (auto, electronics, pharma, textile, etc.)" },
          { step: 3, title: "Invest India Se Help", description: "investindia.gov.in par advisory aur hand-holding ke liye register karein" },
          { step: 4, title: "Approvals Lein", description: "Single window clearance system se license, environment clearance lein" },
          { step: 5, title: "PLI Scheme Apply", description: "Production Linked Incentive (PLI) scheme ke liye apply karein - 4-6% incentive" }
        ],
        officialWebsite: "https://www.makeinindia.com",
        officeName: "DPIIT, Ministry of Commerce & Industry",
        warnings: ["PLI schemes ka deadline check karein", "FDI 100% allowed in most sectors"]
      },
      {
        id: "startup-india",
        title: "Startup India Scheme",
        titleHi: "स्टार्टअप इंडिया योजना",
        description: "Startup ko tax benefits, funding aur recognition",
        eligibility: ["Company 10 saal se chhoti", "Annual turnover Rs.100 crore se kam", "Innovation/improvement ka business model", "Private Limited / LLP / Partnership ho"],
        documents: ["Company Incorporation Certificate", "PAN Card", "Director details", "Business plan/Pitch deck", "Patent (agar hai)", "Awards (agar hai)"],
        steps: [
          { step: 1, title: "Company Register Karein", description: "MCA portal par Pvt Ltd / LLP banayein" },
          { step: 2, title: "startupindia.gov.in Jaayein", description: "Startup India portal par account banayein" },
          { step: 3, title: "DPIIT Recognition Apply", description: "Startup Recognition form bharein - business idea, innovation explain karein" },
          { step: 4, title: "Documents Upload", description: "Incorporation certificate, brief about business upload karein" },
          { step: 5, title: "Recognition Certificate", description: "2-3 weeks mein DPIIT certificate milega" },
          { step: 6, title: "Tax Exemption Apply", description: "Section 80-IAC ke under 3 saal tak tax exemption ke liye alag se apply karein" },
          { step: 7, title: "Funding Apply", description: "Fund of Funds (FFS) aur SISFS (Seed Fund) ke liye apply karein" }
        ],
        officialWebsite: "https://www.startupindia.gov.in",
        officeName: "DPIIT, Ministry of Commerce & Industry",
        warnings: ["DPIIT recognition free hai - kisi ko fees mat dein", "Tax benefits sirf eligible startups ko milte hain"],
        commonMistakes: ["Galat business description dena", "Patent ke bina innovation claim karna"],
        problemReasons: ["Recognition reject - innovation/scalability clear nahi", "Tax exemption deny - turnover limit cross"]
      },
      {
        id: "bharatmala-project",
        title: "Bharatmala Pariyojana",
        titleHi: "भारतमाला परियोजना",
        description: "National highways, expressways aur road connectivity",
        eligibility: ["Construction companies (contractor)", "Land owners jinki zameen acquire ho rahi hai (compensation)", "Local residents (employment opportunity)"],
        documents: ["Land records (agar zameen hai)", "Aadhaar Card", "Bank Account", "Affected person ka proof"],
        steps: [
          { step: 1, title: "Affected Hain To NHAI Office", description: "NHAI regional office se contact karein agar zameen acquire ho rahi hai" },
          { step: 2, title: "Compensation Claim", description: "Land Acquisition Act 2013 ke under proper compensation file karein" },
          { step: 3, title: "Contractor Hain To Tender", description: "morth.nic.in aur nhai.gov.in par tenders dekhein aur bid karein" },
          { step: 4, title: "Job Aspirant", description: "Local employment ke liye contractor companies se contact karein" }
        ],
        officialWebsite: "https://morth.nic.in",
        officeName: "Ministry of Road Transport & Highways / NHAI",
        warnings: ["Land compensation 4x rural / 2x urban market rate hai", "Toll plaza local residents ko discount milta hai"]
      },
      {
        id: "sagarmala-project",
        title: "Sagarmala Project",
        titleHi: "सागरमाला परियोजना",
        description: "Port-led development, coastal community ka vikas",
        eligibility: ["Coastal area residents (12 coastal states)", "Fishermen community", "Port-based industries", "Logistics companies"],
        documents: ["Aadhaar Card", "Fisherman ID (if applicable)", "Coastal residence proof", "Bank account"],
        steps: [
          { step: 1, title: "sagarmala.gov.in Jaayein", description: "Sagarmala official portal kholein" },
          { step: 2, title: "Component Chunein", description: "Port modernization, coastal community development, port-led industrialization mein se relevant scheme chunein" },
          { step: 3, title: "Fishermen Programme", description: "Fishermen ke liye boat subsidy, training, cold storage facilities ke liye state fisheries department mein apply karein" },
          { step: 4, title: "Skill Training", description: "Sagarmala skill development programmes mein register karein - free maritime training" }
        ],
        officialWebsite: "https://sagarmala.gov.in",
        officeName: "Ministry of Ports, Shipping & Waterways",
        warnings: ["Coastal community development ka focus", "Fishermen ko free training aur boat subsidy"]
      },
      {
        id: "pm-shram-yogi-maandhan",
        title: "PM Shram Yogi Maandhan (PM-SYM)",
        titleHi: "पीएम श्रम योगी मानधन",
        description: "Unorganised workers ko Rs.3,000/month pension 60 saal ke baad",
        eligibility: ["Unorganised workers (rickshaw, daily wage, street vendor, domestic worker, etc.)", "Age 18-40 saal", "Monthly income Rs.15,000 se kam", "EPF/ESIC/NPS member nahi hona chahiye", "Income tax payer nahi"],
        documents: ["Aadhaar Card", "Savings Bank / Jan Dhan account", "Mobile Number"],
        steps: [
          { step: 1, title: "CSC Centre Jaayein", description: "Apne nearest Common Service Centre mein jaayein" },
          { step: 2, title: "Aadhaar Self-Declaration", description: "Aadhaar number aur income self-declare karein" },
          { step: 3, title: "Bank Details Dein", description: "Savings/Jan Dhan account number aur IFSC dein" },
          { step: 4, title: "Pehli Kist Cash Mein", description: "Age ke hisaab se Rs.55-200/month pehli installment cash mein" },
          { step: 5, title: "Auto-debit Enable", description: "Aage se bank account se auto-debit hoga" },
          { step: 6, title: "Pension Card Milega", description: "Shram Yogi Pension Card print hoga - sambhal ke rakhein" }
        ],
        officialWebsite: "https://maandhan.in",
        officeName: "Ministry of Labour & Employment / LIC",
        warnings: ["Government bhi utni hi contribution match karti hai", "60 saal ke baad Rs.3,000/month guaranteed pension", "Death ke baad spouse ko 50% family pension"],
        commonMistakes: ["EPF/ESIC member hote hue apply karna", "Income Rs.15,000 se zyada chhupana"],
        problemReasons: ["Pension nahi - contribution miss ho gayi", "Reject - eligibility criteria match nahi"]
      },
      {
        id: "atmanirbhar-bharat-rojgar",
        title: "Atmanirbhar Bharat Rojgar Yojana (ABRY)",
        titleHi: "आत्मनिर्भर भारत रोजगार योजना",
        description: "Naye employees ka EPF subsidy 2 saal tak (yojana band ho chuki, claims pending)",
        eligibility: ["Wo employees jo 1 Oct 2020 - 31 Mar 2022 ke beech naye join hue", "Monthly wage Rs.15,000 se kam", "EPF registered establishments"],
        documents: ["UAN (Universal Account Number)", "Aadhaar Card", "PAN Card", "Bank Account"],
        steps: [
          { step: 1, title: "Employer EPFO Portal", description: "Employer ko unifiedportal-emp.epfindia.gov.in par login karna hoga" },
          { step: 2, title: "Eligible Employees List", description: "ABRY ke under eligible naye employees ki list submit karein" },
          { step: 3, title: "Aadhaar Seeding Verify", description: "UAN-Aadhaar linked hona zaroori hai" },
          { step: 4, title: "Subsidy Credit", description: "Government ne 24% (12% employee + 12% employer) EPF contribution credit kiya tha" },
          { step: 5, title: "Pending Claims", description: "Yojana 31 March 2022 mein band ho gayi - sirf pending claims process ho rahe hain" }
        ],
        officialWebsite: "https://www.epfindia.gov.in",
        officeName: "EPFO, Ministry of Labour",
        warnings: ["Yojana band ho chuki hai - sirf historical claims pending", "Naye applications accept nahi ho rahe"],
        problemReasons: ["Subsidy nahi mili - UAN-Aadhaar linking pending thi", "Claim reject - wage limit cross"]
      },
      {
        id: "pm-vishwakarma-yojana",
        title: "PM Vishwakarma Yojana",
        titleHi: "पीएम विश्वकर्मा योजना",
        description: "18 traditional artisans ko training, toolkit, loan aur certificate",
        eligibility: ["18 specified trades: Carpenter, Boat-maker, Blacksmith, Goldsmith, Potter, Sculptor, Cobbler, Mason, Tailor, Barber, Garland-maker, Washerman, Toy-maker, Fisherman, Locksmith, Hammer/tool-kit maker, Stone-breaker, Doll-maker", "Self-employed artisan", "Age 18+", "Family member government job mein nahi"],
        documents: ["Aadhaar Card", "Mobile Number", "Bank Account", "Ration Card", "Caste Certificate (if SC/ST/OBC)"],
        steps: [
          { step: 1, title: "CSC Centre Jaayein", description: "Apne nearest Common Service Centre par jaayein - online apply nahi hota" },
          { step: 2, title: "Biometric Aadhaar Verify", description: "CSC operator Aadhaar biometric se verify karega" },
          { step: 3, title: "Trade Select", description: "18 mein se apna trade select karein" },
          { step: 4, title: "3 Stage Verification", description: "Gram Panchayat / ULB → District committee → Screening committee se approval hogi" },
          { step: 5, title: "Vishwakarma Certificate Milega", description: "PM Vishwakarma digital ID aur certificate generate hoga" },
          { step: 6, title: "Skill Training", description: "5-7 din basic + 15 din advanced training milegi - Rs.500/day stipend ke saath" },
          { step: 7, title: "Toolkit Voucher", description: "Rs.15,000 ka toolkit incentive (e-RUPI voucher) milega" },
          { step: 8, title: "Loan Apply", description: "Pehle Rs.1 lakh (18 mahine), phir Rs.2 lakh (30 mahine) ka loan @5% interest" }
        ],
        officialWebsite: "https://pmvishwakarma.gov.in",
        officeName: "Ministry of MSME",
        warnings: ["Application sirf CSC se hoti hai - online direct nahi", "Family mein sirf 1 member apply kar sakta hai", "Government job wale family members eligible nahi"],
        commonMistakes: ["Trade galat select karna (proof maangenge)", "Online apply karne ki koshish - sirf CSC hi authorized"],
        problemReasons: ["Application reject - 3-stage verification mein fail", "Loan nahi mila - basic training complete nahi"]
      },
      {
        id: "pm-surya-ghar-yojana",
        title: "PM Surya Ghar Muft Bijli Yojana",
        titleHi: "पीएम सूर्य घर मुफ्त बिजली योजना",
        description: "Rooftop solar par 300 unit/month FREE bijli + Rs.78,000 tak subsidy",
        eligibility: ["Indian citizen with own ghar (rented nahi)", "Valid bijli connection ho", "Roof solar lagne layak ho", "Pehle se solar subsidy nahi li ho"],
        documents: ["Aadhaar Card", "Electricity Bill (recent)", "Bank Passbook", "Roof photo / property proof", "Mobile Number"],
        steps: [
          { step: 1, title: "pmsuryaghar.gov.in Jaayein", description: "Official portal kholein - mobile/email se register karein" },
          { step: 2, title: "Consumer Number Dein", description: "State, electricity distribution company, consumer number daalein" },
          { step: 3, title: "Login Karein", description: "Consumer number aur mobile se login karein" },
          { step: 4, title: "Rooftop Solar Form", description: "Solar capacity (1kW, 2kW, 3kW) select karein - 3kW tak max subsidy" },
          { step: 5, title: "Feasibility Approval Wait", description: "DISCOM 15-30 din mein technical feasibility approve karega" },
          { step: 6, title: "Vendor Select", description: "Portal ke registered vendors mein se chunein - quotation lein" },
          { step: 7, title: "Installation", description: "Vendor solar panel install karega - net meter bhi lagega" },
          { step: 8, title: "Inspection & Commissioning", description: "DISCOM inspection karke Commissioning Certificate dega" },
          { step: 9, title: "Bank Details Submit", description: "Portal par bank account details aur cancelled cheque upload karein" },
          { step: 10, title: "Subsidy DBT", description: "30 din mein Rs.30,000 (1kW), Rs.60,000 (2kW), Rs.78,000 (3kW+) subsidy bank mein aayegi" }
        ],
        officialWebsite: "https://pmsuryaghar.gov.in",
        officeName: "Ministry of New & Renewable Energy",
        warnings: ["Sirf portal-registered vendors se kaam karein - subsidy warna nahi milegi", "300 unit FREE - extra unit ka paisa lagega", "25 saal warranty solar panels par", "Loan @7% interest tak available hai"],
        commonMistakes: ["Non-registered vendor se installation karwana", "Bank details mein galti", "Net meter installation skip karna"],
        problemReasons: ["Subsidy nahi mili - vendor portal registered nahi", "Application reject - roof unfit / consumer number mismatch", "DBT fail - bank account Aadhaar linked nahi"]
      }
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(s => s.id === id);
};

export const getSubServiceById = (serviceId: string, subServiceId: string): SubService | undefined => {
  const service = getServiceById(serviceId);
  return service?.subServices.find(ss => ss.id === subServiceId);
};

export const searchServices = (query: string): SubService[] => {
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 0);
  const results: SubService[] = [];
  
  services.forEach(service => {
    service.subServices.forEach(sub => {
      // Check if any query word matches
      const searchText = `${sub.title} ${sub.titleHi} ${sub.description} ${service.title} ${service.titleHi}`.toLowerCase();
      
      const matches = queryWords.some(word => searchText.includes(word)) ||
        sub.title.toLowerCase().includes(lowerQuery) ||
        sub.titleHi.includes(query) ||
        sub.description.toLowerCase().includes(lowerQuery) ||
        service.title.toLowerCase().includes(lowerQuery);
      
      if (matches) {
        results.push(sub);
      }
    });
  });
  
  return results;
};
