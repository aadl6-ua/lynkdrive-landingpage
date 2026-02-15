import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";
import { useLang } from "@/contexts/LanguageContext";

const Mercado = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("support.label")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold">{t("market.page_title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("market.page_subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-8">
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("market.section1.title")}</h2>
              <div className="mt-4 grid gap-4 text-sm text-muted-foreground">
                <div className="rounded-xl border bg-background/60 p-4">
                  <p className="font-semibold text-foreground">{t("market.section1.amovens.title")}</p>
                  <p className="mt-1">{t("market.section1.amovens.desc")}</p>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <p className="font-semibold text-foreground">{t("market.section1.getaround.title")}</p>
                  <p className="mt-1">{t("market.section1.getaround.desc")}</p>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <p className="font-semibold text-foreground">{t("market.section1.socialcar.title")}</p>
                  <p className="mt-1">{t("market.section1.socialcar.desc")}</p>
                </div>
                <div className="rounded-xl border bg-background/60 p-4">
                  <p className="font-semibold text-foreground">{t("market.section1.rentp2p.title")}</p>
                  <p className="mt-1">{t("market.section1.rentp2p.desc")}</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("market.section2.title")}</h2>
              <div className="mt-4 grid gap-4 text-sm text-muted-foreground">
                <div className="flex flex-wrap gap-4">
                  <div className="min-w-[200px] rounded-xl border bg-background/60 p-4">
                    <p className="text-2xl font-semibold text-foreground">{t("market.section2.stat1.value")}</p>
                    <p className="mt-1">{t("market.section2.stat1.label")}</p>
                  </div>
                  <div className="min-w-[200px] rounded-xl border bg-background/60 p-4">
                    <p className="text-2xl font-semibold text-foreground">{t("market.section2.stat2.value")}</p>
                    <p className="mt-1">{t("market.section2.stat2.label")}</p>
                  </div>
                  <div className="min-w-[200px] rounded-xl border bg-background/60 p-4">
                    <p className="text-2xl font-semibold text-foreground">{t("market.section2.stat3.value")}</p>
                    <p className="mt-1">{t("market.section2.stat3.label")}</p>
                  </div>
                  <div className="min-w-[200px] rounded-xl border bg-background/60 p-4">
                    <p className="text-2xl font-semibold text-foreground">{t("market.section2.stat4.value")}</p>
                    <p className="mt-1">{t("market.section2.stat4.label")}</p>
                  </div>
                </div>
                <p>{t("market.section2.note")}</p>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("market.section3.title")}</h2>
              <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <p>{t("market.section3.item1")}</p>
                <p>{t("market.section3.item2")}</p>
                <p>{t("market.section3.item3")}</p>
                <p>{t("market.section3.item4")}</p>
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

export default Mercado;
