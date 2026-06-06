import { StaticPage } from "@/components/StaticPage";

const TermsPage = () => (
  <StaticPage
    title="Terms & Conditions"
    intro="Sarkari Sahayak app ya website use karne se pehle in Terms & Conditions ko dhyan se padhein. App use karke aap in terms se sehmati dete hain. Last updated: June 2026."
    sections={[
      {
        heading: "1. Guidance Only — Not an Official Service",
        body: (
          <p>
            Sarkari Sahayak ek free educational guidance app hai. Hum sarkari sevaen ya yojnaen directly provide nahi karte, na hi koi form submit karte hain. Aapko har official application respective government portal (jaise uidai.gov.in, pmkisan.gov.in, india.gov.in) par jaake khud karni hogi. App sirf step-by-step guide aur official links provide karta hai.
          </p>
        ),
      },
      {
        heading: "2. Not a Government App",
        body: (
          <p>
            Ye app kisi bhi government department, ministry, PSU ya organization se affiliated, endorsed ya authorized nahi hai. App ka naam, logo aur content publicly available information par based hain. Kahin bhi humne yeh dawa nahi kiya ki hum koi sarkari authority hain.
          </p>
        ),
      },
      {
        heading: "3. Eligibility to Use",
        body: (
          <p>
            App use karne ke liye koi minimum age limit nahi hai, lekin kisi bhi scheme ya service ke liye actual application karne se pehle aap official eligibility criteria check karein. Minor users apne parents/guardian ki dekh-rekh mein app use karein.
          </p>
        ),
      },
      {
        heading: "4. Information Accuracy",
        body: (
          <p>
            Schemes, eligibility, documents aur application process time ke saath badalte rehte hain. Hum best effort se information update karte hain, lekin koi guarantee nahi dete ki saari jaankari hamesha 100% accurate, complete ya current hi ho. Final aur authentic information ke liye hamesha official government website check karein.
          </p>
        ),
      },
      {
        heading: "5. No Liability",
        body: (
          <>
            <p>App ke through di gayi guidance use karne se hone wale kisi bhi nuksaan ke liye Sarkari Sahayak, uske developers ya owners zimmedar nahi honge, jaise:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Galat ya adhuri application</li>
              <li>Document loss, rejection ya delay</li>
              <li>Scheme/job opportunity miss ho jaana</li>
              <li>Third-party website ya office ka behaviour</li>
              <li>Internet, server ya app downtime</li>
            </ul>
            <p>Aap apne risk par information use karte hain.</p>
          </>
        ),
      },
      {
        heading: "6. User Conduct",
        body: (
          <>
            <p>App use karte waqt aap commit karte hain ki aap:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>App ya iski content ko misuse, reverse-engineer ya hack nahi karenge</li>
              <li>App ka naam istemal karke kisi se paisa ya documents nahi maangenge</li>
              <li>Galat ya misleading information dusro ko spread nahi karenge</li>
              <li>App ko illegal kaamon ke liye use nahi karenge</li>
            </ul>
          </>
        ),
      },
      {
        heading: "7. Intellectual Property",
        body: (
          <p>
            App ka logo, design, layout aur original written content Sarkari Sahayak ki property hai. Government scheme names, official logos aur official content respective government bodies ke hain aur sirf reference ke liye dikhaye gaye hain.
          </p>
        ),
      },
      {
        heading: "8. Third-Party Links",
        body: (
          <p>
            App mein diye gaye external links sirf aapki convenience ke liye hain. Un websites ki content, privacy practices ya availability ke liye hum responsible nahi hain.
          </p>
        ),
      },
      {
        heading: "9. Fraud Warning",
        body: (
          <p>
            Hum kabhi bhi paisa, OTP, Aadhaar, bank details ya koi document nahi maangte. Agar koi vyakti app ke naam par aapse aisa kuch maange, to wo fraud hai — turant cybercrime.gov.in par report karein aur 1930 par call karein.
          </p>
        ),
      },
      {
        heading: "10. Service Availability",
        body: (
          <p>
            App "as is" basis par provide kiya jaata hai. Hum kabhi bhi bina notice ke app ki kisi bhi feature ko change, suspend ya discontinue kar sakte hain.
          </p>
        ),
      },
      {
        heading: "11. Changes to Terms",
        body: (
          <p>
            Ye Terms time ke saath update ho sakte hain. Latest version hamesha is page par available rahega. App ko continue use karna matlab aap updated terms se sehmat hain.
          </p>
        ),
      },
      {
        heading: "12. Governing Law",
        body: (
          <p>
            Ye Terms Indian law ke under govern hote hain. Koi bhi dispute India ke courts ke jurisdiction mein resolve hoga.
          </p>
        ),
      },
      {
        heading: "13. Contact",
        body: (
          <p>
            In Terms se related koi sawaal ho to <strong>support@sarkarisahayak.app</strong> par email karein ya app ke Contact Us page ka use karein.
          </p>
        ),
      },
    ]}
  />
);

export default TermsPage;
