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
  LucideIcon
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  icon: LucideIcon;
  category: string;
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
        description: "NSP aur state scholarship kaise apply karein",
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
  const lowerQuery = query.toLowerCase();
  const results: SubService[] = [];
  
  services.forEach(service => {
    service.subServices.forEach(sub => {
      if (
        sub.title.toLowerCase().includes(lowerQuery) ||
        sub.titleHi.includes(query) ||
        sub.description.toLowerCase().includes(lowerQuery) ||
        service.title.toLowerCase().includes(lowerQuery)
      ) {
        results.push(sub);
      }
    });
  });
  
  return results;
};
