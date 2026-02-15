import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { X, Check, ArrowDown } from "lucide-react";

export default function ProblemSolution() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const problems = [t("ps.p1"), t("ps.p2"), t("ps.p3")];
  const solutions = [t("ps.s1"), t("ps.s2"), t("ps.s3")];

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 md:gap-12"
        >
          {/* Problem */}
          <div className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-8">
            <h2 className="font-display text-2xl font-bold text-destructive mb-6">{t("ps.title_problem")}</h2>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border-2 border-accent/30 bg-lynk-green-light p-8">
            <h2 className="font-display text-2xl font-bold text-accent mb-6">{t("ps.title_solution")}</h2>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
          >
            {t("ps.cta")}
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
