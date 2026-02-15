import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";
import PersonasJourney from "@/components/landing/PersonasJourney";
import { useLang } from "@/contexts/LanguageContext";

const Perfiles = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("support.label")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold">{t("personas.page_title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("personas.page_subtitle")}</p>
          </div>
        </div>
      </section>
      <PersonasJourney />
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Perfiles;
