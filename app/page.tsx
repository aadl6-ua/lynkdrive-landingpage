"use client";

import { useEffect, useMemo, useState } from "react";
import { animate, motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

type StatProps = {
  value: number;
  suffix?: string;
  label: string;
};

function CountUpStat({ value, suffix = "", label }: StatProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.4,
      onUpdate(latest) {
        setCurrent(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-display font-bold text-[var(--primary)]">
        {current}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-[var(--text-muted)]">{label}</p>
    </div>
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "¿Es legal alquilar mi coche a otras personas?",
    answer:
      "Sí, 100% legal en toda Europa bajo el modelo peer-to-peer. Operamos dentro del marco regulatorio de economía colaborativa vigente.",
  },
  {
    question: "¿Qué pasa si hay un accidente?",
    answer:
      "El seguro cubre todos los daños hasta €1M en responsabilidad civil. El inquilino paga la franquicia (€500), el resto lo cubre el seguro.",
  },
  {
    question: "¿Cómo verificáis a los usuarios?",
    answer:
      "Sistema eIDAS europeo + DNI electrónico + carnet de conducir. Revisión manual adicional y tolerancia cero al fraude.",
  },
  {
    question: "¿Puedo cancelar una reserva?",
    answer:
      "Hasta 48h antes: reembolso 100%. Entre 48h-24h: 50%. Menos de 24h: no reembolsable.",
  },
  {
    question: "¿Y si devuelven el coche sucio o dañado?",
    answer:
      "Check-in fotográfico obligatorio. Si hay daños nuevos, el inquilino paga. Resolución de disputas con mediación de LYNKDRIVE.",
  },
  {
    question: "¿Cuánto cuesta listar mi coche?",
    answer:
      "€0. Solo cobramos comisión cuando alquilas (30% del precio). Sin costes fijos, sin riesgo.",
  },
  {
    question: "¿Funciona en toda Europa?",
    answer:
      "Actualmente: España (Valencia, Alicante, Barcelona). Expansión a Portugal y Francia en 2026.",
  },
  {
    question: "¿El seguro cubre a conductores menores de 25?",
    answer:
      "Sí. A diferencia de empresas tradicionales, no hay discriminación por edad.",
  },
];

const testimonials = [
  {
    quote:
      "Gracias a LYNKDRIVE pude moverme por Portugal durante mi Erasmus sin arruinarme. Las empresas tradicionales me pedían €800 por 10 días. Aquí pagué €320.",
    name: "María",
    meta: "22 años · Erasmus en Lisboa",
  },
  {
    quote:
      "Mi coche estaba parado 25 días al mes. Ahora gano €600/mes extra y ayudo a estudiantes que no pueden permitirse precios abusivos. Win-win.",
    name: "Carlos",
    meta: "34 años · Propietario en Valencia",
  },
  {
    quote:
      "La verificación digital fue súper fácil, y el check-in con fotos me dio tranquilidad total. Repetí 3 veces ya.",
    name: "Laura",
    meta: "27 años · Nómada digital",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trustBadges = useMemo(
    () => ["Verificación eIDAS", "Seguro AXA incluido", "+200 usuarios", "Soporte 24/7"],
    []
  );

  return (
    <main className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="relative overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_55%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 lg:flex-row lg:items-center lg:pt-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex-1"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Europa merece una alternativa humana
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              Alquila coches entre personas.
              <br />
              Sin recargos por edad.
              <br />
              Sin políticas absurdas.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg text-white/90"
            >
              La primera plataforma P2P europea que te ahorra hasta un 50% en alquiler de vehículos.
              Estudiantes, viajeros y propietarios conectados sin intermediarios abusivos.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl">
                Buscar un coche →
              </button>
              <button className="rounded-xl border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Gana con tu coche →
              </button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4 text-sm text-white/90">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">✓</span>
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <div className="relative mx-auto max-w-md rounded-3xl bg-white/10 p-4 backdrop-blur">
              <div className="rounded-2xl bg-white/10 p-6">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span>Comparativa en tiempo real</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Valencia · 1 semana</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">Tradicional</p>
                    <p className="mt-3 text-3xl font-bold text-white">€700</p>
                    <p className="mt-2 text-xs text-white/70">Con recargos por edad</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 text-[var(--primary)] shadow-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary-dark)]">LYNKDRIVE</p>
                    <p className="mt-3 text-3xl font-bold">€280</p>
                    <p className="mt-2 text-xs text-[var(--primary-dark)]">Ahorro 60%</p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-white/30 p-4 text-xs text-white/70">
                  Foto lifestyle placeholder · reemplazar por imagen real de usuario
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10"
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold">
              Movilidad europea, reinventada
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)]">
              <span className="rounded-full border border-dashed px-4 py-2">El Economista</span>
              <span className="rounded-full border border-dashed px-4 py-2">Valencia Plaza</span>
              <span className="rounded-full border border-dashed px-4 py-2">El País</span>
              <span className="rounded-full border border-dashed px-4 py-2">Premios Impulso UA</span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 gap-6 rounded-3xl bg-[var(--bg-secondary)] p-8 sm:grid-cols-3"
            >
              <CountUpStat value={500} suffix="+" label="Alquileres completados" />
              <CountUpStat value={12} label="Ciudades disponibles" />
              <CountUpStat value={450} suffix="€" label="Ahorro medio por semana" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--feature-bg)] py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold">
              Tres pasos. Cero complicaciones.
            </motion.h2>
            <motion.div
              variants={stagger}
              className="mt-10 grid gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: "Busca y reserva",
                  text:
                    "Filtra por ubicación, fechas y tipo de vehículo. Compara precios reales sin sorpresas. Reserva en 2 minutos.",
                },
                {
                  title: "Verificación segura",
                  text:
                    "Valida tu identidad con DNI electrónico (eIDAS). Pago protegido. Seguro incluido. Todo digital, todo transparente.",
                },
                {
                  title: "Conduce y disfruta",
                  text:
                    "Recoge el coche, conduce libremente. Asistencia 24/7 si la necesitas. Devuelve y valora la experiencia.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-light)] text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--text-muted)]">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid overflow-hidden rounded-3xl border border-[var(--bg-tertiary)] md:grid-cols-2">
            <div className="bg-[var(--primary-light)]/10 p-10">
              <div className="text-2xl">🚗</div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Para viajeros y estudiantes</h3>
              <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
                <li>✓ Ahorra hasta 50% vs. empresas tradicionales</li>
                <li>✓ Sin recargos por edad (&lt;25 años)</li>
                <li>✓ Vehículos verificados con historial</li>
                <li>✓ Seguro completo incluido</li>
                <li>✓ Flexibilidad total de horarios</li>
              </ul>
              <button className="mt-8 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                Encuentra tu coche →
              </button>
            </div>
            <div className="bg-[var(--accent-warm)]/10 p-10">
              <div className="text-2xl">💰</div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Para propietarios</h3>
              <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
                <li>✓ Gana €400-700/mes con tu coche parado</li>
                <li>✓ Tú decides cuándo y a quién alquilas</li>
                <li>✓ Seguro cubre todos los alquileres</li>
                <li>✓ Check-in digital, sin complicaciones</li>
                <li>✓ Cobro automático, sin gestiones</li>
              </ul>
              <button className="mt-8 rounded-xl bg-[var(--accent-warm)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                Lista tu coche →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--testimonial-bg)] py-20 text-[var(--testimonial-text)]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold">
              Tu seguridad, nuestra prioridad
            </motion.h2>
            <motion.div
              variants={stagger}
              className="mt-10 grid gap-6 md:grid-cols-2"
            >
              {[
                {
                  title: "Seguro completo",
                  text: "Cobertura hasta €1M en responsabilidad civil. Daños al vehículo incluidos. Partner: AXA Insurance.",
                },
                {
                  title: "Verificación real",
                  text: "Sistema eIDAS europeo. DNI electrónico + carnet de conducir. Tolerancia cero al fraude.",
                },
                {
                  title: "Check-in digital",
                  text: "Inspección fotográfica obligatoria antes y después de cada alquiler. Resolución de disputas justa.",
                },
                {
                  title: "Soporte 24/7",
                  text: "Chat en vivo en la app. Asistencia en carretera incluida. Equipo humano real, no bots.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold">
              Precios claros. Sin letra pequeña.
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[var(--bg-tertiary)] p-8">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold">Empresa tradicional</p>
                    <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
                      <li>€60 base por día</li>
                      <li>+€20 recargo &lt;25 años</li>
                      <li>+€20 seguro completo</li>
                      <li className="mt-4 font-semibold text-[var(--text-primary)]">= €100 total</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--primary)]">LYNKDRIVE</p>
                    <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
                      <li>€40 base por día</li>
                      <li className="text-[var(--success)]">+€0 sin recargos</li>
                      <li className="text-[var(--success)]">+€0 seguro incluido</li>
                      <li className="mt-4 font-semibold text-[var(--primary)]">= €40 total</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-[var(--primary)]/10 p-8">
                <p className="text-sm font-semibold text-[var(--primary)]">💡 Ejemplo real</p>
                <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                  Valencia, 1 semana, coche económico
                </p>
                <p className="mt-6 text-2xl font-display font-bold">
                  Hertz: €700 · LYNKDRIVE: €280
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">Ahorro: €420 (60%)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold">
              Historias reales de nuestra comunidad
            </motion.h2>
            <motion.div
              variants={stagger}
              className="mt-10 grid gap-6 md:grid-cols-3"
            >
              {testimonials.map((item) => (
                <motion.div
                  key={item.name}
                  variants={fadeUp}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-1 text-[var(--accent-warm)]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[var(--text-muted)]">“{item.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-semibold text-[var(--primary)]">
                      {item.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{item.meta}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold">
              ¿Dudas? Las resolvemos
            </motion.h2>
            <motion.div variants={stagger} className="mt-10 space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={item.question}
                    variants={fadeUp}
                    className="rounded-2xl border border-[var(--bg-tertiary)]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="font-semibold">{item.question}</span>
                      <span className="text-xl text-[var(--primary)]">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-[var(--text-muted)]">{item.answer}</div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--cta-bg)] py-20 text-[var(--cta-text)]">
        <div className="mx-auto w-full max-w-6xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold">
              Únete al movimiento P2P europeo
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              +500 personas ya están ahorrando y ganando con LYNKDRIVE. ¿Empezamos?
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[var(--accent-warm)] shadow-xl transition hover:-translate-y-0.5">
                Buscar coche →
              </button>
              <button className="rounded-xl border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Listar mi coche →
              </button>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-xs text-white/80">
              Sin tarjetas de crédito para registrarte. Cancela cuando quieras. Empezar es gratis.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
