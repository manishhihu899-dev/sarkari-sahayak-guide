// Central data for the No-Ads Monetization System
// All links are configurable from one place.

export const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with real number

export interface ServiceItem {
  title: string;
  titleHi: string;
  desc: string;
  descHi: string;
  whatsappMsg: string;
}

export const helpServices: ServiceItem[] = [
  {
    title: "Government Form Filling",
    titleHi: "सरकारी फॉर्म भरने में मदद",
    desc: "Aadhaar, PAN, Passport aur sabhi sarkari forms bharne mein guidance.",
    descHi: "आधार, पैन, पासपोर्ट और सभी सरकारी फॉर्म भरने में सहायता।",
    whatsappMsg: "Hi, mujhe government form filling mein help chahiye.",
  },
  {
    title: "Resume / CV Creation",
    titleHi: "रिज्यूम / सीवी बनवाएं",
    desc: "Professional resume aur CV banane ki sahayata.",
    descHi: "नौकरी के लिए प्रोफेशनल रिज्यूम और सीवी बनाने में मदद।",
    whatsappMsg: "Hi, mujhe resume/CV banwana hai.",
  },
  {
    title: "Scholarship Application",
    titleHi: "स्कॉलरशिप आवेदन सहायता",
    desc: "Scholarship application aur supporting documents ki guidance.",
    descHi: "छात्रवृत्ति आवेदन और जरूरी दस्तावेज तैयार करने में मदद।",
    whatsappMsg: "Hi, mujhe scholarship application mein help chahiye.",
  },
  {
    title: "Document Process Help",
    titleHi: "दस्तावेज प्रक्रिया सहायता",
    desc: "Certificate, affidavit aur application process ki step-by-step madad.",
    descHi: "प्रमाणपत्र, शपथपत्र और आवेदन प्रक्रिया में सहायता।",
    whatsappMsg: "Hi, mujhe document process mein help chahiye.",
  },
];

export interface AffiliateItem {
  name: string;
  desc: string;
  descHi: string;
  url: string;
}

export const affiliateLinks: AffiliateItem[] = [
  {
    name: "Hostinger",
    desc: "Affordable web hosting for students & creators",
    descHi: "छात्रों के लिए किफायती वेब होस्टिंग",
    url: "https://www.hostinger.com/",
  },
  {
    name: "Namecheap",
    desc: "Domain names at low prices",
    descHi: "कम कीमत पर डोमेन नाम",
    url: "https://www.namecheap.com/",
  },
  {
    name: "Notion",
    desc: "Notes & productivity for job seekers",
    descHi: "नोट्स और प्रोडक्टिविटी टूल",
    url: "https://www.notion.so/",
  },
  {
    name: "Canva",
    desc: "Free resume & poster design tool",
    descHi: "फ्री रिज्यूम और पोस्टर डिज़ाइन टूल",
    url: "https://www.canva.com/",
  },
];

export interface DigitalProduct {
  title: string;
  titleHi: string;
  desc: string;
  descHi: string;
  price: string;
  link: string;
  emoji: string;
}

export const digitalProducts: DigitalProduct[] = [
  {
    title: "Govt Scheme Master Guide (PDF)",
    titleHi: "सरकारी योजना मास्टर गाइड (PDF)",
    desc: "70+ central & state schemes ki complete eligibility & process guide.",
    descHi: "70+ केंद्र व राज्य योजनाओं की पूरी गाइड।",
    price: "₹49",
    link: "https://gumroad.com/",
    emoji: "📘",
  },
  {
    title: "SSC / Bank Exam Notes",
    titleHi: "SSC / बैंक एग्जाम नोट्स",
    desc: "Quick revision notes for competitive exams.",
    descHi: "प्रतियोगी परीक्षाओं के लिए शॉर्ट नोट्स।",
    price: "₹99",
    link: "https://payhip.com/",
    emoji: "📚",
  },
  {
    title: "Resume Template Pack",
    titleHi: "रिज्यूम टेम्पलेट पैक",
    desc: "10+ ATS-friendly resume templates (Word + PDF).",
    descHi: "10+ प्रोफेशनल रिज्यूम टेम्पलेट।",
    price: "₹99",
    link: "https://gumroad.com/",
    emoji: "📝",
  },
  {
    title: "Application Checklist Bundle",
    titleHi: "एप्लीकेशन चेकलिस्ट बंडल",
    desc: "Passport, PAN, Aadhaar, Driving License - sab ke document checklists.",
    descHi: "सभी सरकारी आवेदन की डॉक्यूमेंट चेकलिस्ट।",
    price: "Free",
    link: "https://payhip.com/",
    emoji: "✅",
  },
];

export interface MembershipPlan {
  id: string;
  name: string;
  nameHi: string;
  price: string;
  period: string;
  periodHi: string;
  link: string;
  highlight?: boolean;
  badge?: string;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    nameHi: "मासिक",
    price: "₹49",
    period: "/month",
    periodHi: "/माह",
    link: "https://rzp.io/l/sarkari-monthly",
  },
  {
    id: "yearly",
    name: "Yearly",
    nameHi: "वार्षिक",
    price: "₹399",
    period: "/year",
    periodHi: "/साल",
    link: "https://rzp.io/l/sarkari-yearly",
    highlight: true,
    badge: "Save 32%",
  },
];

export const premiumBenefits: { hi: string; en: string }[] = [
  { hi: "एक्सक्लूसिव गाइड्स और अपडेट्स", en: "Exclusive guides and updates" },
  { hi: "प्रायोरिटी सपोर्ट (WhatsApp)", en: "Priority WhatsApp support" },
  { hi: "एडवांस्ड एप्लीकेशन टिप्स", en: "Advanced application tips" },
  { hi: "नई योजनाओं तक जल्द पहुंच", en: "Early access to new schemes" },
  { hi: "विज्ञापन मुक्त अनुभव", en: "Completely ad-free experience" },
  { hi: "डाउनलोड करने योग्य PDF गाइड्स", en: "Downloadable PDF guides" },
];

// Outbound click tracker — works with localStorage analytics, no external deps.
export function trackOutboundClick(url: string, label?: string) {
  try {
    const key = "outbound_clicks_v1";
    const log = JSON.parse(localStorage.getItem(key) || "[]");
    log.push({ url, label: label || "", t: Date.now() });
    // Keep last 100 entries only
    localStorage.setItem(key, JSON.stringify(log.slice(-100)));
  } catch {
    /* ignore */
  }
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
