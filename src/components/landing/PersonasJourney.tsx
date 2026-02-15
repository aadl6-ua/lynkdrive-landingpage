import { useLang } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users } from "lucide-react";

type Persona = {
  id: string;
  name: string;
  role: string;
  summary: string;
  goals: string[];
  fears: string[];
  values: string[];
  journey: string[];
};

type PersonasJourneyProps = {
  variant?: "page" | "footer";
};

export default function PersonasJourney({ variant = "page" }: PersonasJourneyProps) {
  const { t } = useLang();
  const isFooter = variant === "footer";

  const renters: Persona[] = [
    {
      id: "laura",
      name: t("personas.renters.laura.name"),
      role: t("personas.renters.laura.role"),
      summary: t("personas.renters.laura.summary"),
      goals: [
        t("personas.renters.laura.goals.1"),
        t("personas.renters.laura.goals.2"),
      ],
      fears: [
        t("personas.renters.laura.fears.1"),
        t("personas.renters.laura.fears.2"),
      ],
      values: [
        t("personas.renters.laura.values.1"),
        t("personas.renters.laura.values.2"),
      ],
      journey: [
        t("personas.renters.laura.journey.1"),
        t("personas.renters.laura.journey.2"),
        t("personas.renters.laura.journey.3"),
      ],
    },
    {
      id: "javier",
      name: t("personas.renters.javier.name"),
      role: t("personas.renters.javier.role"),
      summary: t("personas.renters.javier.summary"),
      goals: [
        t("personas.renters.javier.goals.1"),
        t("personas.renters.javier.goals.2"),
      ],
      fears: [
        t("personas.renters.javier.fears.1"),
        t("personas.renters.javier.fears.2"),
      ],
      values: [
        t("personas.renters.javier.values.1"),
        t("personas.renters.javier.values.2"),
      ],
      journey: [
        t("personas.renters.javier.journey.1"),
        t("personas.renters.javier.journey.2"),
        t("personas.renters.javier.journey.3"),
      ],
    },
    {
      id: "marcos",
      name: t("personas.renters.marcos.name"),
      role: t("personas.renters.marcos.role"),
      summary: t("personas.renters.marcos.summary"),
      goals: [
        t("personas.renters.marcos.goals.1"),
        t("personas.renters.marcos.goals.2"),
      ],
      fears: [
        t("personas.renters.marcos.fears.1"),
        t("personas.renters.marcos.fears.2"),
      ],
      values: [
        t("personas.renters.marcos.values.1"),
        t("personas.renters.marcos.values.2"),
      ],
      journey: [
        t("personas.renters.marcos.journey.1"),
        t("personas.renters.marcos.journey.2"),
        t("personas.renters.marcos.journey.3"),
      ],
    },
    {
      id: "andrea",
      name: t("personas.renters.andrea.name"),
      role: t("personas.renters.andrea.role"),
      summary: t("personas.renters.andrea.summary"),
      goals: [
        t("personas.renters.andrea.goals.1"),
        t("personas.renters.andrea.goals.2"),
      ],
      fears: [
        t("personas.renters.andrea.fears.1"),
        t("personas.renters.andrea.fears.2"),
      ],
      values: [
        t("personas.renters.andrea.values.1"),
        t("personas.renters.andrea.values.2"),
      ],
      journey: [
        t("personas.renters.andrea.journey.1"),
        t("personas.renters.andrea.journey.2"),
        t("personas.renters.andrea.journey.3"),
      ],
    },
    {
      id: "karim",
      name: t("personas.renters.karim.name"),
      role: t("personas.renters.karim.role"),
      summary: t("personas.renters.karim.summary"),
      goals: [
        t("personas.renters.karim.goals.1"),
        t("personas.renters.karim.goals.2"),
      ],
      fears: [
        t("personas.renters.karim.fears.1"),
        t("personas.renters.karim.fears.2"),
      ],
      values: [
        t("personas.renters.karim.values.1"),
        t("personas.renters.karim.values.2"),
      ],
      journey: [
        t("personas.renters.karim.journey.1"),
        t("personas.renters.karim.journey.2"),
        t("personas.renters.karim.journey.3"),
      ],
    },
  ];

  const owners: Persona[] = [
    {
      id: "sara",
      name: t("personas.owners.sara.name"),
      role: t("personas.owners.sara.role"),
      summary: t("personas.owners.sara.summary"),
      goals: [
        t("personas.owners.sara.goals.1"),
        t("personas.owners.sara.goals.2"),
      ],
      fears: [
        t("personas.owners.sara.fears.1"),
        t("personas.owners.sara.fears.2"),
      ],
      values: [
        t("personas.owners.sara.values.1"),
        t("personas.owners.sara.values.2"),
      ],
      journey: [
        t("personas.owners.sara.journey.1"),
        t("personas.owners.sara.journey.2"),
        t("personas.owners.sara.journey.3"),
      ],
    },
    {
      id: "luis",
      name: t("personas.owners.luis.name"),
      role: t("personas.owners.luis.role"),
      summary: t("personas.owners.luis.summary"),
      goals: [
        t("personas.owners.luis.goals.1"),
        t("personas.owners.luis.goals.2"),
      ],
      fears: [
        t("personas.owners.luis.fears.1"),
        t("personas.owners.luis.fears.2"),
      ],
      values: [
        t("personas.owners.luis.values.1"),
        t("personas.owners.luis.values.2"),
      ],
      journey: [
        t("personas.owners.luis.journey.1"),
        t("personas.owners.luis.journey.2"),
        t("personas.owners.luis.journey.3"),
      ],
    },
    {
      id: "ana",
      name: t("personas.owners.ana.name"),
      role: t("personas.owners.ana.role"),
      summary: t("personas.owners.ana.summary"),
      goals: [
        t("personas.owners.ana.goals.1"),
        t("personas.owners.ana.goals.2"),
      ],
      fears: [
        t("personas.owners.ana.fears.1"),
        t("personas.owners.ana.fears.2"),
      ],
      values: [
        t("personas.owners.ana.values.1"),
        t("personas.owners.ana.values.2"),
      ],
      journey: [
        t("personas.owners.ana.journey.1"),
        t("personas.owners.ana.journey.2"),
        t("personas.owners.ana.journey.3"),
      ],
    },
    {
      id: "oscar",
      name: t("personas.owners.oscar.name"),
      role: t("personas.owners.oscar.role"),
      summary: t("personas.owners.oscar.summary"),
      goals: [
        t("personas.owners.oscar.goals.1"),
        t("personas.owners.oscar.goals.2"),
      ],
      fears: [
        t("personas.owners.oscar.fears.1"),
        t("personas.owners.oscar.fears.2"),
      ],
      values: [
        t("personas.owners.oscar.values.1"),
        t("personas.owners.oscar.values.2"),
      ],
      journey: [
        t("personas.owners.oscar.journey.1"),
        t("personas.owners.oscar.journey.2"),
        t("personas.owners.oscar.journey.3"),
      ],
    },
    {
      id: "clara",
      name: t("personas.owners.clara.name"),
      role: t("personas.owners.clara.role"),
      summary: t("personas.owners.clara.summary"),
      goals: [
        t("personas.owners.clara.goals.1"),
        t("personas.owners.clara.goals.2"),
      ],
      fears: [
        t("personas.owners.clara.fears.1"),
        t("personas.owners.clara.fears.2"),
      ],
      values: [
        t("personas.owners.clara.values.1"),
        t("personas.owners.clara.values.2"),
      ],
      journey: [
        t("personas.owners.clara.journey.1"),
        t("personas.owners.clara.journey.2"),
        t("personas.owners.clara.journey.3"),
      ],
    },
  ];

  const renderPersonaGroup = (title: string, subtitle: string, items: Persona[]) => (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
      <Accordion type="multiple" className="w-full">
        {items.map((persona) => (
          <AccordionItem key={persona.id} value={persona.id}>
            <AccordionTrigger className="text-left">
              <div>
                <div className="font-semibold">{persona.name}</div>
                <div className="text-xs text-muted-foreground">{persona.role}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-4">{persona.summary}</p>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    {t("personas.labels.goals")}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {persona.goals.map((goal, index) => (
                      <li key={index}>• {goal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    {t("personas.labels.fears")}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {persona.fears.map((fear, index) => (
                      <li key={index}>• {fear}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    {t("personas.labels.values")}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {persona.values.map((value, index) => (
                      <li key={index}>• {value}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  {t("personas.labels.journey")}
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {persona.journey.map((step, index) => (
                    <li key={index}>• {step}</li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <section className={isFooter ? "" : "py-20 md:py-28"}>
      <div className={isFooter ? "mx-auto max-w-6xl" : "container mx-auto px-4"}>
        <div className="text-center mb-12">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t("personas.title")}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t("personas.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {renderPersonaGroup(t("personas.renters.title"), t("personas.renters.subtitle"), renters)}
          {renderPersonaGroup(t("personas.owners.title"), t("personas.owners.subtitle"), owners)}
        </div>
      </div>
    </section>
  );
}
