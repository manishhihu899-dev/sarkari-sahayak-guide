import { StaticPage } from "@/components/StaticPage";

const PrivacyPage = () => (
  <StaticPage
    title="Privacy Policy"
    intro="Aapki privacy hamare liye sabse important hai. Ye Privacy Policy detail mein batati hai ki Sarkari Sahayak app aapka data kaise handle karta hai, kya store karta hai, aur kya nahi. Last updated: June 2026."
    sections={[
      {
        heading: "1. Introduction",
        body: (
          <p>
            Sarkari Sahayak ("hum", "humara", "app") ek free guidance app hai jo Indian users ko sarkari sevaon, yojnaon aur naukriyon ke baare mein simple Hindi/Hinglish mein jaankari deta hai. Ye Privacy Policy aap par tab apply hoti hai jab aap is app ya humari website (sarkarisahayak.lovable.app) ka istemal karte hain.
          </p>
        ),
      },
      {
        heading: "2. Data We Do NOT Collect",
        body: (
          <>
            <p>Hum aapse niche di gayi koi bhi personal information collect, store ya share nahi karte:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naam, email address, mobile number</li>
              <li>Aadhaar number, PAN, Voter ID ya koi bhi government ID</li>
              <li>Bank account, UPI ya payment details</li>
              <li>Location, contacts, photos ya files</li>
              <li>Biometric ya health information</li>
            </ul>
            <p>App ko use karne ke liye koi login, sign-up ya OTP verification ki zaroorat nahi hai.</p>
          </>
        ),
      },
      {
        heading: "3. Local Device Storage",
        body: (
          <>
            <p>App sirf niche di gayi preferences aapke phone ke local storage (browser localStorage) mein save karta hai, taaki next time app khulne par aapka experience smooth ho:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Selected language (Hindi / English)</li>
              <li>Theme preference (Light / Dark)</li>
              <li>Bookmark ki gayi services aur schemes</li>
              <li>Application tracker entries (jo aap khud add karte hain)</li>
              <li>Recent searches aur intro-seen flag</li>
            </ul>
            <p>Ye saara data sirf aapke device par rehta hai. Kabhi bhi humare server ya kisi third party ko send nahi hota. App uninstall ya browser data clear karne par ye apne aap delete ho jata hai.</p>
          </>
        ),
      },
      {
        heading: "4. No Tracking, No Ads, No Analytics",
        body: (
          <p>
            Hum koi third-party analytics (Google Analytics, Facebook Pixel, Firebase, etc.), tracking cookies ya advertisement network use nahi karte. Aapki activity, clicks ya behaviour kahin track nahi hote. App mein koi ad banner ya sponsored content nahi dikhaya jata.
          </p>
        ),
      },
      {
        heading: "5. Permissions",
        body: (
          <p>
            App ko sirf basic internet permission chahiye taaki official government website links khul saken aur PWA updates download ho saken. Camera, microphone, contacts, SMS, location ya storage ki koi permission nahi maangi jati.
          </p>
        ),
      },
      {
        heading: "6. Third-Party Links",
        body: (
          <p>
            App mein diye gaye official government website links (jaise uidai.gov.in, pmkisan.gov.in, india.gov.in, ssc.nic.in) third-party websites hain. Un par click karne ke baad aap unki apni website par chale jate hain, jahan aapka data unki privacy policy ke under handle hota hai. Humara unki content ya privacy practices par koi control nahi hai.
          </p>
        ),
      },
      {
        heading: "7. Children's Privacy",
        body: (
          <p>
            App sabhi age groups ke liye safe hai kyunki hum koi bhi personal data collect nahi karte. 13 saal se kam umar ke users bhi bina kisi risk ke guidance content padh sakte hain.
          </p>
        ),
      },
      {
        heading: "8. Data Security",
        body: (
          <p>
            Kyunki hum aapka data store hi nahi karte, isliye data breach ka koi risk nahi hai. Aapke device par save preferences industry-standard browser security ke under rehti hain.
          </p>
        ),
      },
      {
        heading: "9. Fraud Warning",
        body: (
          <p>
            Sarkari Sahayak kabhi bhi paisa, OTP, Aadhaar number, bank details ya koi document nahi maangta. Agar koi vyakti, call, SMS ya WhatsApp message app ke naam par aapse aisa kuch maange, to wo 100% fraud hai. Turant report karein cybercrime.gov.in par.
          </p>
        ),
      },
      {
        heading: "10. Changes to This Policy",
        body: (
          <p>
            Hum is Privacy Policy ko time-time par update kar sakte hain. Koi bhi major change app ke "Updates" section mein notify kiya jayega. Latest version hamesha is page par available rahega.
          </p>
        ),
      },
      {
        heading: "11. Contact Us",
        body: (
          <p>
            Privacy se related koi sawaal, suggestion ya complaint ho to humein Contact Us page ke through ya email par <strong>support@sarkarisahayak.app</strong> par sampark karein. Hum 48 ghante ke andar reply karne ki koshish karte hain.
          </p>
        ),
      },
    ]}
  />
);

export default PrivacyPage;
