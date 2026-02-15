import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Shield, Users, Fingerprint, Leaf } from "lucide-react";

const icons = [Shield, Users, Fingerprint, Leaf];
const colors = ["text-primary", "text-secondary", "text-secondary", "text-accent"];
const bgColors = ["bg-lynk-orange-light", "bg-lynk-blue-light", "bg-lynk-blue-light", "bg-lynk-green-light"];

export default function WhyDifferent() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    { title: t("why.card1_title"), desc: t("why.card1_desc") },
    { title: t("why.card2_title"), desc: t("why.card2_desc") },
    { title: t("why.card3_title"), desc: t("why.card3_desc") },
    { title: t("why.card4_title"), desc: t("why.card4_desc") },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("why.title")}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border bg-card p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex rounded-xl ${bgColors[i]} p-3 mb-4`}>
                  <Icon className={`h-6 w-6 ${colors[i]}`} />
                </div>
                <h3 className="font-display text-sm font-bold tracking-wider mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
