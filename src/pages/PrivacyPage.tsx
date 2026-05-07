import { StaticPage } from "@/components/StaticPage";

const PrivacyPage = () => (
  <StaticPage
    title="Privacy Policy"
    intro="Aapki privacy hamare liye important hai. Ye policy batati hai ki Sarkari Sahayak app aapka data kaise handle karta hai."
    sections={[
      {
        heading: "1. Data Collection",
        body: (
          <p>
            Sarkari Sahayak app aapse koi personal information collect nahi karta. Hum naam, email, mobile number, Aadhaar, ya koi government ID store nahi karte. Saari guidance app ke andar offline available hai.
          </p>
        ),
      },
      {
        heading: "2. Local Storage",
        body: (
          <p>
            App aapki preferences (theme, language, bookmarked services) sirf aapke device ke local storage mein save karta hai. Ye data kabhi bhi kisi server par send nahi hota.
          </p>
        ),
      },
      {
        heading: "3. No Tracking, No Ads",
        body: (
          <p>
            Hum koi analytics, tracking pixel, ya advertisement network use nahi karte. Aapki activity track nahi hoti.
          </p>
        ),
      },
      {
        heading: "4. Third-Party Links",
        body: (
          <p>
            App mein diye gaye official government website links (jaise uidai.gov.in, pmkisan.gov.in) third-party hain. Un websites par aapka data unki apni privacy policy ke under handle hota hai.
          </p>
        ),
      },
      {
        heading: "5. Children's Privacy",
        body: (
          <p>
            App sabhi age groups ke liye safe hai kyunki koi data collect nahi hota.
          </p>
        ),
      },
      {
        heading: "6. Contact",
        body: (
          <p>Privacy se related koi sawaal ho to Contact Us page se humein message bhejein.</p>
        ),
      },
    ]}
  />
);

export default PrivacyPage;
