import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";
import { useLang } from "@/contexts/LanguageContext";

const SinRecargos = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("support.label")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold">{t("surcharge.title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("surcharge.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-8">
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.section1.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("surcharge.section1.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.section2.title")}</h2>
              <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <p>{t("surcharge.section2.item1")}</p>
                <p>{t("surcharge.section2.item2")}</p>
                <p>{t("surcharge.section2.item3")}</p>
                <p>{t("surcharge.section2.item4")}</p>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.section3.title")}</h2>
              <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <p>{t("surcharge.section3.item1")}</p>
                <p>{t("surcharge.section3.item2")}</p>
                <p>{t("surcharge.section3.item3")}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default SinRecargos;
