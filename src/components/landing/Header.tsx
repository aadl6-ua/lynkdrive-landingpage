import { useLang } from "@/contexts/LanguageContext";
import { Car } from "lucide-react";

export default function Header() {
  const { lang, setLang, t } = useLang();

  const scrollToForm = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <Car className="h-6 w-6 text-primary" />
          <span>LYNK<span className="text-primary">DRIVE</span></span>
        </a>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1 transition-colors ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
          <button onClick={scrollToForm} className="hidden sm:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            {t("header.cta")}
          </button>
        </div>
      </div>
    </header>
  );
}
