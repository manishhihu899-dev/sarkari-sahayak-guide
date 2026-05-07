import { StaticPage } from "@/components/StaticPage";

const TermsPage = () => (
  <StaticPage
    title="Terms & Conditions"
    intro="Sarkari Sahayak app use karne se pehle in terms ko padhein."
    sections={[
      {
        heading: "1. Guidance Only",
        body: (
          <p>
            Ye app sirf guidance aur educational purpose ke liye hai. Hum koi government service directly provide nahi karte. Sabhi official applications aapko respective government portals (jaise uidai.gov.in, pmkisan.gov.in) par hi karne hain.
          </p>
        ),
      },
      {
        heading: "2. Not a Government App",
        body: (
          <p>
            Ye app kisi bhi government department, ministry, ya organization se affiliated nahi hai. App ka naam, content aur design publicly available information par based hai.
          </p>
        ),
      },
      {
        heading: "3. Information Accuracy",
        body: (
          <p>
            Schemes, eligibility aur application steps time ke saath badal sakte hain. Hum best effort se information update karte hain, lekin final aur authentic jaankari ke liye hamesha official government website check karein.
          </p>
        ),
      },
      {
        heading: "4. No Liability",
        body: (
          <p>
            Galat application, document loss, ya kisi bhi nuksaan ke liye Sarkari Sahayak app responsible nahi hoga. Aap apne risk par information use karein.
          </p>
        ),
      },
      {
        heading: "5. Fraud Warning",
        body: (
          <p>
            Hum kabhi bhi paisa, OTP, Aadhaar number, ya koi document nahi maangte. Agar koi vyakti app ke naam par aapse aisa kuch maange, to wo fraud hai.
          </p>
        ),
      },
      {
        heading: "6. Changes",
        body: (
          <p>Ye terms time ke saath update ho sakte hain. Latest version hamesha app mein available hoga.</p>
        ),
      },
    ]}
  />
);

export default TermsPage;
