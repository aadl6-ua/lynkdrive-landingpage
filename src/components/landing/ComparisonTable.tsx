import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { BadgePercent, Check, X } from "lucide-react";

export default function ComparisonTable() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const rows = [
    { label: t("comp.price"), vals: ["€100", "€70", "€60"] },
    { label: t("comp.under25"), vals: ["+€20", false, true] },
    { label: t("comp.coop"), vals: [false, false, true] },
    { label: t("comp.youth"), vals: [false, false, true] },
  ];

  const renderCell = (val: string | boolean) => {
    if (val === true) return <Check className="mx-auto h-5 w-5 text-accent" />;
    if (val === false) return <X className="mx-auto h-5 w-5 text-destructive/50" />;
    return <span>{val}</span>;
  };

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("comp.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl overflow-hidden rounded-2xl border shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left font-medium text-muted-foreground"></th>
                  <th className="p-4 text-center font-medium text-muted-foreground">Rent-a-car</th>
                  <th className="p-4 text-center font-medium text-muted-foreground">Amovens</th>
                  <th className="p-4 text-center font-semibold text-primary bg-primary/5">LYNKDRIVE</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="p-4 font-medium">{row.label}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className={`p-4 text-center ${j === 2 ? "bg-primary/5 font-semibold" : ""}`}>
                        {renderCell(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t bg-muted/30 px-4 py-2">
            <p className="text-xs text-muted-foreground text-center italic">{t("comp.note")}</p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl rounded-xl bg-lynk-orange-light border border-primary/10 p-4"
        >
          <div className="flex items-start gap-2 text-muted-foreground">
            <BadgePercent className="h-4 w-4 mt-0.5 text-primary" />
            <p className="text-xs leading-relaxed">{t("comp.disclaimer")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
