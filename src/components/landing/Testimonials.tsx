import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  const testimonials = [
    { quote: t("test.q1"), author: t("test.a1") },
    { quote: t("test.q2"), author: t("test.a2") },
    { quote: t("test.q3"), author: t("test.a3") },
  ];

  const next = () => setActive((a) => (a + 1) % 3);
  const prev = () => setActive((a) => (a - 1 + 3) % 3);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("test.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <div className="relative rounded-2xl border bg-card p-8 md:p-12 text-center">
            <Quote className="mx-auto mb-6 h-8 w-8 text-primary/30" />
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
              {testimonials[active].quote}
            </p>
            <p className="text-sm font-semibold text-muted-foreground">
              — {testimonials[active].author}
            </p>

            {/* Nav dots */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button onClick={prev} className="rounded-full border p-2 hover:bg-muted transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="rounded-full border p-2 hover:bg-muted transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
