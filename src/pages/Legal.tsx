import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";
import { useLang } from "@/contexts/LanguageContext";

const Legal = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("legal.label")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold">{t("legal.title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("legal.subtitle")}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t("legal.updated")}</p>
          </div>

          <div className="mt-10 grid gap-8">
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("legal.section1.title")}</h2>
              <div className="mt-3 text-sm text-muted-foreground space-y-2">
                <p>{t("legal.section1.item1")}</p>
                <p>{t("legal.section1.item2")}</p>
                <p>{t("legal.section1.item3")}</p>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("legal.section2.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("legal.section2.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("legal.section3.title")}</h2>
              <ul className="mt-3 text-sm text-muted-foreground space-y-2">
                <li>{t("legal.section3.item1")}</li>
                <li>{t("legal.section3.item2")}</li>
                <li>{t("legal.section3.item3")}</li>
              </ul>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("legal.section4.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("legal.section4.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("legal.section5.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("legal.section5.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("legal.section6.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("legal.section6.desc")}</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Legal;
