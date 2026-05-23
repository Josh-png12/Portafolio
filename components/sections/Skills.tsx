"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { skillCategories, type Lang } from "@/data/portfolio";

const accentMap: Record<string, { text: string; border: string; bg: string; dot: string }> = {
  blue: {
    text: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/[0.06]",
    dot: "bg-blue-400",
  },
  violet: {
    text: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/[0.06]",
    dot: "bg-violet-400",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/[0.06]",
    dot: "bg-cyan-400",
  },
  emerald: {
    text: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/[0.06]",
    dot: "bg-emerald-400",
  },
  amber: {
    text: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/[0.06]",
    dot: "bg-amber-400",
  },
  rose: {
    text: "text-rose-400",
    border: "border-rose-400/20",
    bg: "bg-rose-400/[0.06]",
    dot: "bg-rose-400",
  },
};

export default function Skills() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-32">
      <div className="section-divider mb-32 -mt-16" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="tag-pill mb-6">{t("skills.tag")}</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t("skills.title")}
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => {
            const accent = accentMap[cat.accent] ?? accentMap.blue;

            return (
              <motion.div
                key={cat.accent}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card rounded-2xl p-6 shine"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  <h3 className={`text-sm font-bold tracking-wide ${accent.text}`}>
                    {cat.label[lang as Lang]}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors ${accent.text} ${accent.border} ${accent.bg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
