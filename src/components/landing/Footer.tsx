import { useLang } from "@/contexts/LanguageContext";
import { Car, Shield, Lock, CreditCard } from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  const links = [
    { label: t("footer.home"), href: "/" },
    { label: t("footer.surcharge"), href: "/sin-recargos" },
    { label: t("footer.market"), href: "/mercado" },
    { label: t("footer.viability"), href: "/viabilidad" },
    { label: t("footer.legal"), href: "/legal" },
    { label: t("footer.privacy"), href: "/privacidad" },
    { label: t("footer.contact"), href: "mailto:alvaroandresdelamo@gmail.com" },
  ];

  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Trust logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {["eIDAS", "GDPR", "Stripe", "UA"].map((logo) => (
            <div key={logo} className="flex items-center gap-1.5 rounded-full border border-background/20 px-4 py-2 text-xs font-medium text-background/70">
              {logo === "eIDAS" && <Shield className="h-3.5 w-3.5" />}
              {logo === "GDPR" && <Lock className="h-3.5 w-3.5" />}
              {logo === "Stripe" && <CreditCard className="h-3.5 w-3.5" />}
              {logo === "UA" && <span className="font-bold">🎓</span>}
              {logo}
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="mx-auto max-w-3xl space-y-4 mb-10">
          <div className="rounded-xl bg-background/5 border border-background/10 p-4">
            <p className="text-xs text-background/50 leading-relaxed">{t("footer.responsibility")}</p>
          </div>
          <div className="rounded-xl bg-background/5 border border-background/10 p-4">
            <p className="text-xs text-background/50 leading-relaxed">
              {t("footer.gdpr")}
              <br />
              <a href="/privacidad" className="underline text-background/60 mt-1 inline-block">{t("footer.privacy_link")}</a>
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-3 border-t border-background/10 pt-8">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
            <Car className="h-5 w-5 text-primary" />
            <span>LYNK<span className="text-primary">DRIVE</span></span>
          </a>
          <p className="text-xs text-background/40">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
