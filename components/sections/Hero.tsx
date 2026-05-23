"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const badges = [
  "hero.badge.systems",
  "hero.badge.apis",
  "hero.badge.automation",
  "hero.badge.clients",
] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-violet-600/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* ── Left: Content ── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                {t("hero.available")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.04] tracking-tight mb-3">
                {t("hero.title")}
              </h1>
              <h2 className="font-heading text-2xl lg:text-3xl xl:text-4xl font-semibold gradient-text leading-tight mb-6">
                {t("hero.subtitle")}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-3">
                {t("hero.description")}
              </p>
              <p className="text-slate-300 text-base pl-4 border-l-2 border-blue-500/50 leading-relaxed max-w-xl mb-10">
                {t("hero.tagline")}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.55)] text-sm"
              >
                {t("hero.cta.projects")}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://github.com/Josh-png12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/[0.08] hover:border-white/[0.14] text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {t("hero.cta.github")}
              </a>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((key) => (
                <span
                  key={key}
                  className="px-3 py-1 text-xs font-medium text-slate-500 border border-white/[0.07] rounded-full bg-white/[0.025] tracking-wide"
                >
                  {t(key)}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind terminal */}
              <div className="absolute -inset-6 bg-blue-500/[0.07] rounded-3xl blur-2xl" />

              {/* Terminal window */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_32px_64px_rgba(0,0,0,0.6)]">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3 bg-[#0c0f1e] border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="ml-3 text-xs text-slate-500 font-mono">
                    engineer.ts
                  </span>
                </div>

                {/* Code body */}
                <div className="bg-[#090c1b] px-6 py-6 font-mono text-[13px] leading-relaxed">
                  <div className="text-slate-300 space-y-0.5">
                    <div>
                      <span className="text-blue-400">const</span>
                      <span className="text-white"> engineer </span>
                      <span className="text-blue-400">=</span>
                      <span className="text-slate-400"> &#123;</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-cyan-400">name</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">"Joshua Navarro"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-cyan-400">role</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">"Full Stack Engineer"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-cyan-400">focus</span>
                      <span className="text-slate-400">: [</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-emerald-400">"Systems Architecture"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-emerald-400">"Backend APIs"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-emerald-400">"Automation Tools"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-slate-400">],</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-cyan-400">stack</span>
                      <span className="text-slate-400">: &#123;</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-cyan-400">frontend</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-emerald-400">"React"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-emerald-400">"Next.js"</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-cyan-400">backend</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-emerald-400">"Node.js"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-emerald-400">"Python"</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-cyan-400">db</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-emerald-400">"PostgreSQL"</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-emerald-400">"MySQL"</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-slate-400">&#125;,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-cyan-400">status</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">"available"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-slate-400">&#125;</span>
                    </div>
                  </div>

                  {/* Terminal prompt */}
                  <div className="mt-4 flex items-center gap-2 border-t border-white/[0.05] pt-3">
                    <span className="text-blue-400 font-mono text-sm">$</span>
                    <span className="text-slate-500 text-xs">node engineer.ts</span>
                    <div className="w-1.5 h-4 bg-blue-400/80 rounded-sm animate-pulse ml-1" />
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 px-4 py-2.5 glass-card rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              >
                <p className="text-white font-bold font-heading text-lg leading-none">10+</p>
                <p className="text-slate-500 text-xs mt-0.5">Systems Built</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute -top-4 -right-6 px-4 py-2.5 glass-card rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-emerald-400 font-semibold text-sm">Open to work</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[11px] text-slate-600 tracking-widest uppercase">
          {t("hero.scroll")}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
