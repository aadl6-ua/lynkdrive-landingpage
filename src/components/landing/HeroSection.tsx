import { useLang } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingDown, Wallet, Users, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-lynkdrive.jpg";

export default function HeroSection() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"rent" | "list">("rent");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend (Mailchimp/Supabase)
    // Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify({ email, role }) })
    console.log("Lead captured:", { email, role });
    alert("¡Te has unido! / You're in!");
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Young people sharing a car in a sunny Mediterranean city" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-lynk-dark/90 via-lynk-dark/70 to-lynk-dark/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Map pins */}
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              <span>Alicante & Valencia</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* Lead form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end"
          >
            <div className="flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("hero.email_placeholder")}
                className="w-full rounded-xl border-0 bg-white/10 backdrop-blur-sm px-4 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex rounded-xl border border-white/20 overflow-hidden">
              <button
                type="button"
                onClick={() => setRole("rent")}
                className={`px-4 py-3 text-sm font-medium transition-colors ${role === "rent" ? "bg-primary text-primary-foreground" : "text-white/70 hover:text-white"}`}
              >
                {t("hero.role_rent")}
              </button>
              <button
                type="button"
                onClick={() => setRole("list")}
                className={`px-4 py-3 text-sm font-medium transition-colors ${role === "list" ? "bg-accent text-accent-foreground" : "text-white/70 hover:text-white"}`}
              >
                {t("hero.role_list")}
              </button>
            </div>
            <button type="submit" className="rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              {t("hero.cta")}
            </button>
          </motion.form>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-6"
          >
            {[
              { icon: TrendingDown, val: t("hero.stat1"), sub: t("hero.stat1_sub") },
              { icon: Wallet, val: t("hero.stat2"), sub: t("hero.stat2_sub") },
              { icon: Users, val: t("hero.stat3"), sub: t("hero.stat3_sub") },
            ].map((s, i) => (
              <div key={i} className="text-center sm:text-left">
                <s.icon className="mx-auto sm:mx-0 mb-1 h-5 w-5 text-primary" />
                <div className="font-display text-2xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-white/60">{s.sub}</div>
              </div>
            ))}
          </motion.div>

          {/* Beta disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4"
          >
            <div className="flex items-start gap-2 text-white/50">
              <AlertTriangle className="h-4 w-4 mt-0.5" />
              <p className="text-xs leading-relaxed">
                {t("disclaimer.beta")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
