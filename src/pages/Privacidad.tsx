import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";
import { useLang } from "@/contexts/LanguageContext";

const Privacidad = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("privacy.label")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold">{t("privacy.title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("privacy.subtitle")}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t("privacy.updated")}</p>
          </div>

          <div className="mt-10 grid gap-8">
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section1.title")}</h2>
              <ul className="mt-3 text-sm text-muted-foreground space-y-2">
                <li>{t("privacy.section1.item1")}</li>
                <li>{t("privacy.section1.item2")}</li>
                <li>{t("privacy.section1.item3")}</li>
              </ul>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section2.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section2.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section3.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section3.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section4.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section4.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section5.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section5.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section6.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section6.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section7.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section7.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("privacy.section8.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("privacy.section8.desc")}</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Privacidad;
