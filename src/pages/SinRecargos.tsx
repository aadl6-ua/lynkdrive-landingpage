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
              <h2 className="text-xl font-semibold">{t("surcharge.principles.title")}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>{t("surcharge.principles.item1")}</li>
                <li>{t("surcharge.principles.item2")}</li>
                <li>{t("surcharge.principles.item3")}</li>
                <li>{t("surcharge.principles.item4")}</li>
                <li>{t("surcharge.principles.item5")}</li>
              </ul>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.section1.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("surcharge.section1.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.categories.title")}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("surcharge.categories.head.category")}</th>
                      <th className="py-2">{t("surcharge.categories.head.criteria")}</th>
                      <th className="py-2">{t("surcharge.categories.head.examples")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.categories.row.a.category")}</td>
                      <td className="py-2">{t("surcharge.categories.row.a.criteria")}</td>
                      <td className="py-2">{t("surcharge.categories.row.a.examples")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.categories.row.b.category")}</td>
                      <td className="py-2">{t("surcharge.categories.row.b.criteria")}</td>
                      <td className="py-2">{t("surcharge.categories.row.b.examples")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.categories.row.c.category")}</td>
                      <td className="py-2">{t("surcharge.categories.row.c.criteria")}</td>
                      <td className="py-2">{t("surcharge.categories.row.c.examples")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.access.title")}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("surcharge.access.head.age")}</th>
                      <th className="py-2">{t("surcharge.access.head.access")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.access.row.18_20.age")}</td>
                      <td className="py-2">{t("surcharge.access.row.18_20.access")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.access.row.21_24.age")}</td>
                      <td className="py-2">{t("surcharge.access.row.21_24.access")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.access.row.25_plus.age")}</td>
                      <td className="py-2">{t("surcharge.access.row.25_plus.access")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.deductible.title")}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("surcharge.deductible.head.age")}</th>
                      <th className="py-2">{t("surcharge.deductible.head.franchise")}</th>
                      <th className="py-2">{t("surcharge.deductible.head.deposit")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.deductible.row.18_20")}</td>
                      <td className="py-2">{t("surcharge.deductible.row.18_20.franchise")}</td>
                      <td className="py-2">{t("surcharge.deductible.row.18_20.deposit")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.deductible.row.21_24")}</td>
                      <td className="py-2">{t("surcharge.deductible.row.21_24.franchise")}</td>
                      <td className="py-2">{t("surcharge.deductible.row.21_24.deposit")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{t("surcharge.deductible.row.25_plus")}</td>
                      <td className="py-2">{t("surcharge.deductible.row.25_plus.franchise")}</td>
                      <td className="py-2">{t("surcharge.deductible.row.25_plus.deposit")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{t("surcharge.plus.title")}</p>
                <p>{t("surcharge.plus.item1")}</p>
                <p>{t("surcharge.plus.item2")}</p>
                <p>{t("surcharge.plus.item3")}</p>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.cross.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("surcharge.cross.desc")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("surcharge.short.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("surcharge.short.desc")}</p>
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
