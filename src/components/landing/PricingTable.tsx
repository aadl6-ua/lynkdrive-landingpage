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
      </div>
    </section>
  );
}
