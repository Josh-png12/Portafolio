"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { experience, type Lang } from "@/data/portfolio";

const typeColors = {
  freelance: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  contract: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  personal: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

export default function Experience() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-32">
      <div className="section-divider mb-32 -mt-16" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="tag-pill mb-6">{t("experience.tag")}</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t("experience.title")}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-white/[0.07] to-transparent hidden md:block" />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-[30px] h-[30px] rounded-full glass-card border border-white/[0.1] items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>

                <div className="glass-card rounded-2xl p-6 shine">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white mb-1">
                        {item.role[lang as Lang]}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm">
                        {item.company[lang as Lang]}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${typeColors[item.type]}`}
                      >
                        {t(`experience.${item.type}`)}
                      </span>
                      <span className="text-slate-600 text-xs font-mono">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.description[lang as Lang]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 text-xs font-medium text-slate-400 border border-white/[0.07] rounded-lg bg-white/[0.025]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
