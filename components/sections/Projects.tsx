"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { projects, type Project, type Lang } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  automation: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  backend: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  systems: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  client: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  fullstack: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

const categoryLabels: Record<string, Record<Lang, string>> = {
  automation: { en: "Automation", es: "Automatización" },
  backend: { en: "Backend", es: "Backend" },
  systems: { en: "Systems", es: "Sistemas" },
  client: { en: "Client Work", es: "Cliente" },
  fullstack: { en: "Full Stack", es: "Full Stack" },
};

// Abstract visual placeholder per category
function ProjectVisual({ category }: { category: Project["category"] }) {
  const colors = {
    automation: { from: "#0a1f14", via: "#0d2a1c", accent: "#34d399" },
    backend: { from: "#120a1f", via: "#1a0d2a", accent: "#a78bfa" },
    systems: { from: "#0a0f1f", via: "#0d1429", accent: "#60a5fa" },
    client: { from: "#1f150a", via: "#2a1d0d", accent: "#fbbf24" },
    fullstack: { from: "#0a1a1f", via: "#0d2229", accent: "#67e8f9" },
  };
  const c = colors[category];

  return (
    <div
      className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.07]"
      style={{ background: `linear-gradient(145deg, ${c.from}, ${c.via})` }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${c.accent}33, transparent 70%)`,
        }}
      />

      {/* Category icon cluster */}
      <div className="absolute inset-0 flex items-center justify-center">
        {category === "automation" && <AutomationIcon accent={c.accent} />}
        {category === "backend" && <BackendIcon accent={c.accent} />}
        {category === "systems" && <SystemsIcon accent={c.accent} />}
        {(category === "client" || category === "fullstack") && (
          <ClientIcon accent={c.accent} />
        )}
      </div>
    </div>
  );
}

function AutomationIcon({ accent }: { accent: string }) {
  return (
    <div className="font-mono text-xs space-y-1.5 opacity-60">
      {["$ python scraper.py --target site", "> Scanning 127 URLs...", "> Export: data.csv ✓"].map(
        (line, i) => (
          <div
            key={i}
            className="flex items-center gap-2"
            style={{ color: i === 2 ? accent : "#94a3b8" }}
          >
            <span>{line}</span>
          </div>
        )
      )}
    </div>
  );
}

function BackendIcon({ accent }: { accent: string }) {
  return (
    <div className="font-mono text-xs space-y-1.5 opacity-60">
      {[
        { method: "POST", route: "/auth/login", status: "200" },
        { method: "GET", route: "/users/:id", status: "200" },
        { method: "PUT", route: "/users/:id", status: "204" },
      ].map(({ method, route, status }) => (
        <div key={route} className="flex items-center gap-3">
          <span className="w-10 text-right" style={{ color: accent }}>
            {method}
          </span>
          <span className="text-slate-400">{route}</span>
          <span className="text-emerald-400 ml-auto">{status}</span>
        </div>
      ))}
    </div>
  );
}

function SystemsIcon({ accent }: { accent: string }) {
  return (
    <div className="flex gap-4 opacity-70">
      {["Admin", "Teacher", "Student"].map((role) => (
        <div
          key={role}
          className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-lg border border-white/10"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <div
            className="w-6 h-6 rounded-full"
            style={{ background: `${accent}33`, border: `1px solid ${accent}44` }}
          />
          <span className="text-[10px] text-slate-400 font-mono">{role}</span>
        </div>
      ))}
    </div>
  );
}

function ClientIcon({ accent }: { accent: string }) {
  return (
    <div
      className="w-48 h-28 rounded-lg overflow-hidden opacity-60"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="h-7 flex items-center px-3 gap-1.5 border-b border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="p-3 space-y-2">
        <div
          className="h-2 rounded-full w-3/4"
          style={{ background: `${accent}44` }}
        />
        <div className="h-1.5 rounded-full w-full bg-white/10" />
        <div className="h-1.5 rounded-full w-2/3 bg-white/10" />
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Visual — left on even, right on odd */}
        <div className={`p-6 lg:p-8 flex items-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <ProjectVisual category={project.category} />
        </div>

        {/* Content */}
        <div className={`p-6 lg:p-8 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${categoryColors[project.category] || "text-slate-400 bg-white/5 border-white/10"}`}>
              {categoryLabels[project.category]?.[lang] ?? project.category}
            </span>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full border border-blue-400/20 text-blue-400 bg-blue-400/10">
              {t("projects.featured")}
            </span>
            <span className="text-xs text-slate-600 ml-auto">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.tagline[lang]}
          </p>

          {/* Problem / Solution / Impact */}
          <div className="space-y-4 mb-6">
            {([
              ["projects.problem", project.problem[lang]],
              ["projects.solution", project.solution[lang]],
              ["projects.impact", project.impact[lang]],
            ] as [string, string][]).map(([labelKey, text]) => (
              <div key={labelKey}>
                <p className="text-[11px] font-bold tracking-widest uppercase text-slate-600 mb-1">
                  {t(labelKey)}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-6">
            <p className="text-[11px] font-bold tracking-widest uppercase text-slate-600 mb-2">
              {t("projects.features")}
            </p>
            <ul className="space-y-1">
              {project.features[lang].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-[11px] font-bold tracking-widest uppercase text-slate-600 mb-2">
              {t("projects.tech")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-slate-300 border border-white/[0.08] rounded-lg bg-white/[0.03]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white border border-white/[0.1] rounded-xl hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {t("projects.code")}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-400 border border-blue-400/20 rounded-xl hover:bg-blue-400/10 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M10 2h4m0 0v4m0-4L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t("projects.demo")}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6 flex flex-col shine"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${categoryColors[project.category] || "text-slate-400 bg-white/5 border-white/10"}`}>
          {categoryLabels[project.category]?.[lang] ?? project.category}
        </span>
        <span className="text-xs text-slate-600">{project.year}</span>
      </div>

      <h3 className="font-heading text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        {project.tagline[lang]}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2 py-0.5 text-xs font-mono text-slate-500 border border-white/[0.06] rounded-md bg-white/[0.02]">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-2 py-0.5 text-xs text-slate-600">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {t("projects.code")}
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-32">
      <div className="section-divider mb-32 -mt-16" />

      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="tag-pill mb-6">{t("projects.tag")}</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4 max-w-2xl">
            {t("projects.title")}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">{t("projects.subtitle")}</p>
        </motion.div>

        {/* Featured case studies */}
        <div className="space-y-6 mb-20">
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div>
            <h3 className="font-heading text-xl font-bold text-slate-400 mb-6 tracking-tight">
              {t("projects.more")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
