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
