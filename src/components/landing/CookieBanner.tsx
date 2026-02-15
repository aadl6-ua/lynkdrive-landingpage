import { useLang } from "@/contexts/LanguageContext";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pref = localStorage.getItem("lynk_cookies");
    if (!pref) setVisible(true);
  }, []);

  const handle = (choice: string) => {
    localStorage.setItem("lynk_cookies", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card/95 backdrop-blur-md p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
            {t("cookie.text")}
          </p>
          <button onClick={() => handle("reject")} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={() => handle("accept")} className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            {t("cookie.accept")}
          </button>
          <button onClick={() => handle("configure")} className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors">
            {t("cookie.configure")}
          </button>
          <button onClick={() => handle("reject")} className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors">
            {t("cookie.reject")}
          </button>
        </div>
      </div>
    </div>
  );
}
