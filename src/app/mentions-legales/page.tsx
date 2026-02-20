import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site MDNT Construction, charpente et menuiserie artisanales.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="font-heading text-2xl font-bold mb-4">Éditeur du site</h2>
          <p className="text-text-muted mb-6">
            <strong>MDNT Construction</strong><br />
            Maxence Donate — Charpentier-Menuisier Artisan<br />
            France<br />
            Téléphone : 06 21 14 45 49<br />
            Email : mdntconstruction@gmail.com
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4">Hébergement</h2>
          <p className="text-text-muted mb-6">
            Ce site est hébergé par <strong>Vercel Inc.</strong><br />
            440 N Baxter St, Covina, CA 91723, États-Unis<br />
            Site : vercel.com
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4">Conception</h2>
          <p className="text-text-muted mb-6">
            Site conçu et développé par <strong>Agence Celexia</strong><br />
            Thomas Rousseau — agence.celexia@gmail.com
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4">Propriété intellectuelle</h2>
          <p className="text-text-muted mb-6">
            L&apos;ensemble du contenu de ce site (textes, images, vidéos, etc.) est la
            propriété exclusive d&apos;MDNT Construction, sauf mention contraire. Toute
            reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4">Responsabilité</h2>
          <p className="text-text-muted">
            Les informations fournies sur ce site le sont à titre indicatif. MDNT Construction
            ne saurait être tenu responsable des erreurs, d&apos;une absence de
            disponibilité des informations ou de la présence de virus sur son site.
          </p>
        </div>
      </section>
    </>
  );
}
