import { useLang } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Rocket, Info, Flame, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function CtaSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"rent" | "list">("rent");
  const [gdpr, setGdpr] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdpr) return;
    // TODO: Connect to backend (Mailchimp/Supabase)
    // Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify({ email, name, role }) })
    setShowLegal(true);
  };

  const confirmSubmit = () => {
    console.log("Lead captured:", { email, name, role });
    alert("¡Plaza reservada! / Spot reserved!");
    setEmail("");
    setName("");
    setGdpr(false);
    setShowLegal(false);
  };

  return (
    <>
      <section ref={ref} id="cta-final" className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="mx-auto max-w-xl text-center"
          >
            <Rocket className="mx-auto mb-4 h-10 w-10 text-primary-foreground/80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("cta2.title")}
            </h2>
            <p className="text-primary-foreground/70 text-sm font-medium mb-8 flex items-center justify-center gap-2">
              <Flame className="h-4 w-4" />
              {t("cta2.urgency")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("cta2.name_placeholder")}
                className="w-full rounded-xl border-0 bg-white/15 backdrop-blur-sm px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("hero.email_placeholder")}
                className="w-full rounded-xl border-0 bg-white/15 backdrop-blur-sm px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <div className="flex rounded-xl border border-white/20 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setRole("rent")}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${role === "rent" ? "bg-white/20 text-primary-foreground" : "text-primary-foreground/60"}`}
                >
                  {t("hero.role_rent")}
                </button>
                <button
                  type="button"
                  onClick={() => setRole("list")}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${role === "list" ? "bg-white/20 text-primary-foreground" : "text-primary-foreground/60"}`}
                >
                  {t("hero.role_list")}
                </button>
              </div>

              {/* GDPR checkbox */}
              <label className="flex items-start gap-2 text-left cursor-pointer">
                <input
                  type="checkbox"
                  checked={gdpr}
                  onChange={(e) => setGdpr(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-white"
                />
                <span className="text-xs text-primary-foreground/70 leading-relaxed">
                  {t("cta2.gdpr_label")}{" "}
                   <a href="/privacidad" className="underline">lynkdrive.es/privacidad</a>
                </span>
              </label>

              <button
                type="submit"
                disabled={!gdpr}
                className="w-full rounded-xl bg-foreground py-4 text-sm font-bold text-background hover:bg-foreground/90 transition-colors disabled:opacity-50 shadow-2xl"
              >
                {t("cta2.button")}
              </button>
            </form>

            {/* Beta disclaimer */}
            <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="flex items-start gap-2 text-primary-foreground/50">
                <AlertTriangle className="h-4 w-4 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  {t("disclaimer.beta")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal popup on submit */}
      <Dialog open={showLegal} onOpenChange={setShowLegal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-secondary" />
              {t("hero.cta")}
            </DialogTitle>
            <DialogDescription className="whitespace-pre-line text-left text-sm leading-relaxed pt-2">
              {t("cta2.legal_popup")}
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 justify-end mt-4">
            <button onClick={() => setShowLegal(false)} className="rounded-lg border px-4 py-2 text-sm hover:bg-muted transition-colors">
              Cancel
            </button>
            <button onClick={confirmSubmit} className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              OK
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
