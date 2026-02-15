import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Camera, Search, Handshake } from "lucide-react";

const stepIcons = [Camera, Search, Handshake];
const stepColors = ["bg-primary text-primary-foreground", "bg-secondary text-secondary-foreground", "bg-accent text-accent-foreground"];

export default function HowItWorks() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    { title: t("how.step1_title"), desc: t("how.step1_desc") },
    { title: t("how.step2_title"), desc: t("how.step2_desc") },
    { title: t("how.step3_title"), desc: t("how.step3_desc") },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("how.title")}
        </motion.h2>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-6"
                  >
                    <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${stepColors[i]} shadow-lg`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                        <h3 className="font-display text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Disclaimer MVP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-10 max-w-3xl rounded-xl bg-lynk-blue-light border border-secondary/10 p-4"
        >
          <p className="text-xs text-muted-foreground leading-relaxed">{t("how.disclaimer")}</p>
          <a href="/sin-recargos" className="mt-3 inline-flex text-xs font-semibold text-secondary hover:text-secondary/80">
            {t("how.surcharge_link")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
