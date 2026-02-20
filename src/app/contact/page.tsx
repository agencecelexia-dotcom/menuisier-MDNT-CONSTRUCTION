import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MDNT Construction pour votre projet de charpente ou menuiserie. Devis gratuit, conseils personnalisés. Maxence Donate — 06 21 14 45 49.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-200 text-sm font-medium tracking-widest uppercase mb-4">
            Parlons de Votre Projet
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-Nous
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Chaque projet commence par une conversation. N&apos;hésitez pas à nous
            contacter pour discuter de vos envies.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Informations
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a
                      href="tel:0621144549"
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      06 21 14 45 49
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:mdntconstruction@gmail.com"
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      mdntconstruction@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-text-muted">
                      France
                      <br />
                      Intervention régionale
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-text-muted">
                      Lundi – Vendredi : 8h – 18h
                      <br />
                      Samedi : Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent-50 rounded-xl">
                <h3 className="font-heading font-semibold mb-2">Devis Gratuit</h3>
                <p className="text-text-muted text-sm">
                  Tous nos devis sont gratuits et sans engagement.
                  Maxence se déplace sur votre chantier pour étudier votre projet.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-premium">
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Envoyez-nous un Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Google Maps */}
      <section className="bg-surface pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Nous Trouver
            </h2>
            <p className="text-text-muted">
              MDNT Construction — Charpente &amp; Menuiserie, France
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-premium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10881661.47804305!2d-4.387048!3d46.227638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x27c4e09dc3e87b6c!2sFrance!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MDNT Construction - France"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/search/MDNT+Construction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-700 font-medium transition-colors"
            >
              <MapPin size={18} />
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
