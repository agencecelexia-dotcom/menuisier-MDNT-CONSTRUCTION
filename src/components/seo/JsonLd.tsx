export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MDNT Construction",
    description:
      "Charpente et menuiserie artisanales. Charpente traditionnelle et moderne, extensions bois, menuiseries sur mesure, agencements.",
    url: "https://mdntconstruction.fr",
    telephone: "+33621144549",
    email: "mdntconstruction@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "€€€",
    image: "https://mdntconstruction.fr/images/services/cuisine-moderne.jpg",
    founder: {
      "@type": "Person",
      name: "Maxence Donate",
      jobTitle: "Charpentier-Menuisier Artisan",
    },
    knowsAbout: [
      "Charpente traditionnelle",
      "Charpente moderne",
      "Extensions ossature bois",
      "Menuiserie sur mesure",
      "Menuiseries extérieures",
      "Agencements intérieurs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
