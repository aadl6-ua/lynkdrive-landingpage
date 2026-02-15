import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingTable() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      name: t("pricing.basic"),
      label: t("pricing.basic_label"),
      franchise: t("pricing.basic_franchise"),
      coverage: t("pricing.basic_coverage"),
      highlight: false,
    },
    {
      name: t("pricing.standard"),
      label: t("pricing.standard_label"),
      franchise: t("pricing.standard_franchise"),
      coverage: t("pricing.standard_coverage"),
      highlight: true,
    },
    {
      name: t("pricing.premium"),
      label: t("pricing.premium_label"),
      franchise: t("pricing.premium_franchise"),
      coverage: t("pricing.premium_coverage"),
      highlight: false,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("pricing.title")}
        </motion.h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
          {t("pricing.subtitle")}
        </p>

        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl border p-6 text-center transition-shadow hover:shadow-lg ${plan.highlight ? "border-primary/50 bg-primary/5 shadow-md ring-2 ring-primary/20" : "bg-card"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 inset-x-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold mt-2">{plan.name}</h3>
              <p className="text-primary font-semibold mt-1">{plan.label}</p>

              <div className="mt-6 space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm"><strong>{t("pricing.franchise")}:</strong> {plan.franchise}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm"><strong>{t("pricing.coverage")}:</strong> {plan.coverage}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-card p-6">
          <h3 className="font-display text-lg font-bold mb-4">{t("pricing.age_title")}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-2">{t("pricing.age_head_age")}</th>
                  <th className="py-2">{t("pricing.age_head_franchise")}</th>
                  <th className="py-2">{t("pricing.age_head_deposit")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">{t("pricing.age_row_18_20")}</td>
                  <td className="py-2">{t("pricing.age_row_18_20_franchise")}</td>
                  <td className="py-2">{t("pricing.age_row_18_20_deposit")}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">{t("pricing.age_row_21_24")}</td>
                  <td className="py-2">{t("pricing.age_row_21_24_franchise")}</td>
                  <td className="py-2">{t("pricing.age_row_21_24_deposit")}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">{t("pricing.age_row_25_plus")}</td>
                  <td className="py-2">{t("pricing.age_row_25_plus_franchise")}</td>
                  <td className="py-2">{t("pricing.age_row_25_plus_deposit")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t("pricing.plus_title")}</span>
            <span className="ml-2">{t("pricing.plus_desc")}</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{t("pricing.base_note")}</p>
          <a href="/sin-recargos" className="mt-3 inline-flex text-xs font-semibold text-secondary hover:text-secondary/80">
            {t("pricing.surcharge_link")}
          </a>
        </div>
      </div>
    </section>
  );
}
