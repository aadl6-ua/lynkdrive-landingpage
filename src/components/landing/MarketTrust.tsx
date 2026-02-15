import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Banknote, Zap, Globe, ShieldCheck } from "lucide-react";

export default function MarketTrust() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Banknote, val: t("market.stat1"), label: t("market.stat1_label"), color: "text-primary" },
    { icon: Zap, val: t("market.stat2"), label: t("market.stat2_label"), color: "text-accent" },
    { icon: Globe, val: t("market.stat3"), label: t("market.stat3_label"), color: "text-secondary" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("market.title")}
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15 }}
              className="text-center rounded-2xl border bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <s.icon className={`mx-auto mb-3 h-8 w-8 ${s.color}`} />
              <div className="font-display text-4xl font-bold">{s.val}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-6 py-3">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <p className="text-sm font-medium text-foreground">{t("market.proof")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
