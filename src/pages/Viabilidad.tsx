import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";
import { useLang } from "@/contexts/LanguageContext";

const Viabilidad = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("support.label")}</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold">{t("viability.title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("viability.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-8">
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section1.title")}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t("viability.section1.desc")}</p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("viability.table1.head.concept")}</th>
                      <th className="py-2">{t("viability.table1.head.rent")}</th>
                      <th className="py-2">{t("viability.table1.head.lynk")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">{t("viability.table1.row.base.label")}</td>
                      <td className="py-2">{t("viability.table1.row.base.rent")}</td>
                      <td className="py-2">{t("viability.table1.row.base.lynk")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table1.row.under25.label")}</td>
                      <td className="py-2">{t("viability.table1.row.under25.rent")}</td>
                      <td className="py-2">{t("viability.table1.row.under25.lynk")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table1.row.insurance.label")}</td>
                      <td className="py-2">{t("viability.table1.row.insurance.rent")}</td>
                      <td className="py-2">{t("viability.table1.row.insurance.lynk")}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">{t("viability.table1.row.total.label")}</td>
                      <td className="py-2 font-semibold">{t("viability.table1.row.total.rent")}</td>
                      <td className="py-2 font-semibold">{t("viability.table1.row.total.lynk")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{t("viability.table1.note")}</p>
              <div className="mt-2 text-xs text-muted-foreground">
                {t("viability.table1.base_note")}{" "}
                <a href="/sin-recargos" className="font-semibold text-secondary hover:text-secondary/80">
                  {t("viability.table1.link")}
                </a>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section_costs.title")}</h2>
              <div className="mt-4 grid gap-6 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">{t("viability.section_costs.eliminated_title")}</p>
                  <ul className="mt-2 space-y-1">
                    <li>{t("viability.section_costs.eliminated_item1")}</li>
                    <li>{t("viability.section_costs.eliminated_item2")}</li>
                    <li>{t("viability.section_costs.eliminated_item3")}</li>
                    <li>{t("viability.section_costs.eliminated_item4")}</li>
                    <li>{t("viability.section_costs.eliminated_item5")}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("viability.section_costs.reduced_title")}</p>
                  <ul className="mt-2 space-y-1">
                    <li>{t("viability.section_costs.reduced_item1")}</li>
                    <li>{t("viability.section_costs.reduced_item2")}</li>
                    <li>{t("viability.section_costs.reduced_item3")}</li>
                    <li>{t("viability.section_costs.reduced_item4")}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section2.title")}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t("viability.section2.desc")}</p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("viability.table2.head.plan")}</th>
                      <th className="py-2">{t("viability.table2.head.franchise")}</th>
                      <th className="py-2">{t("viability.table2.head.coverage")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">{t("viability.table2.row.basic.label")}</td>
                      <td className="py-2">{t("viability.table2.row.basic.franchise")}</td>
                      <td className="py-2">{t("viability.table2.row.basic.coverage")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table2.row.standard.label")}</td>
                      <td className="py-2">{t("viability.table2.row.standard.franchise")}</td>
                      <td className="py-2">{t("viability.table2.row.standard.coverage")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table2.row.premium.label")}</td>
                      <td className="py-2">{t("viability.table2.row.premium.franchise")}</td>
                      <td className="py-2">{t("viability.table2.row.premium.coverage")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{t("viability.table2.note")}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t("viability.section2.benchmark")}</p>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section3.title")}</h2>
              <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <p>{t("viability.section3.item1")}</p>
                <p>{t("viability.section3.item2")}</p>
                <p>{t("viability.section3.item3")}</p>
                <p>{t("viability.section3.item4")}</p>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section4.title")}</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("viability.table3.head.risk")}</th>
                      <th className="py-2">{t("viability.table3.head.impact")}</th>
                      <th className="py-2">{t("viability.table3.head.mitigation")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">{t("viability.table3.row.insurance.label")}</td>
                      <td className="py-2">{t("viability.table3.row.insurance.impact")}</td>
                      <td className="py-2">{t("viability.table3.row.insurance.mitigation")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table3.row.fraud.label")}</td>
                      <td className="py-2">{t("viability.table3.row.fraud.impact")}</td>
                      <td className="py-2">{t("viability.table3.row.fraud.mitigation")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table3.row.damage.label")}</td>
                      <td className="py-2">{t("viability.table3.row.damage.impact")}</td>
                      <td className="py-2">{t("viability.table3.row.damage.mitigation")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.table3.row.adoption.label")}</td>
                      <td className="py-2">{t("viability.table3.row.adoption.impact")}</td>
                      <td className="py-2">{t("viability.table3.row.adoption.mitigation")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section_validation.title")}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>{t("viability.section_validation.item1")}</li>
                <li>{t("viability.section_validation.item2")}</li>
                <li>{t("viability.section_validation.item3")}</li>
                <li>{t("viability.section_validation.item4")}</li>
                <li>{t("viability.section_validation.item5")}</li>
                <li>{t("viability.section_validation.item6")}</li>
                <li>{t("viability.section_validation.item7")}</li>
              </ul>
            </section>

            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{t("viability.section_projection.title")}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr>
                      <th className="py-2">{t("viability.section_projection.head.phase")}</th>
                      <th className="py-2">{t("viability.section_projection.head.cost")}</th>
                      <th className="py-2">{t("viability.section_projection.head.result")}</th>
                      <th className="py-2">{t("viability.section_projection.head.revenue")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">{t("viability.section_projection.row1.phase")}</td>
                      <td className="py-2">{t("viability.section_projection.row1.cost")}</td>
                      <td className="py-2">{t("viability.section_projection.row1.result")}</td>
                      <td className="py-2">{t("viability.section_projection.row1.revenue")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.section_projection.row2.phase")}</td>
                      <td className="py-2">{t("viability.section_projection.row2.cost")}</td>
                      <td className="py-2">{t("viability.section_projection.row2.result")}</td>
                      <td className="py-2">{t("viability.section_projection.row2.revenue")}</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t("viability.section_projection.row3.phase")}</td>
                      <td className="py-2">{t("viability.section_projection.row3.cost")}</td>
                      <td className="py-2">{t("viability.section_projection.row3.result")}</td>
                      <td className="py-2">{t("viability.section_projection.row3.revenue")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{t("viability.section_projection.note")}</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Viabilidad;
