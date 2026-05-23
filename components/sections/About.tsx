"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { stats } from "@/data/portfolio";

const statItems = [
  { key: "about.stat.projects", value: stats.projectsBuilt, suffix: "+" },
  { key: "about.stat.clients", value: stats.realClients, suffix: "+" },
  { key: "about.stat.years", value: stats.yearsExperience, suffix: "+" },
  { key: "about.stat.tech", value: stats.technologies, suffix: "+" },
] as const;

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Divider */}
      <div className="section-divider mb-32 -mt-16" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="tag-pill mb-6">{t("about.tag")}</div>

            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              {t("about.title")}
            </h2>

            <div className="space-y-5">
              <p className="text-slate-400 text-[17px] leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-slate-300 text-[17px] leading-relaxed pl-4 border-l-2 border-blue-500/40">
                {t("about.p2")}
              </p>
            </div>

            {/* Tech stack mini-list */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-white/[0.08] rounded-lg bg-white/[0.025]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {statItems.map(({ key, value, suffix }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass-card rounded-2xl p-6 shine"
              >
                <p className="font-heading text-4xl font-bold text-white mb-1 gradient-text-blue">
                  {value}
                  {suffix}
                </p>
                <p className="text-slate-500 text-sm font-medium">{t(key)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
