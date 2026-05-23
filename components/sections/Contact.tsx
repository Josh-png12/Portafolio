"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState("sending");

    const data = new FormData(formRef.current);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    // TODO: Replace with your EmailJS credentials or backend endpoint
    // Example with EmailJS:
    // import emailjs from '@emailjs/browser'
    // await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')

    // Simulated success for now — wire up EmailJS or your API here
    await new Promise((r) => setTimeout(r, 1200));

    try {
      // Uncomment and fill in your EmailJS credentials:
      // const emailjs = (await import('@emailjs/browser')).default
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // )
      setFormState("success");
      formRef.current.reset();
    } catch {
      setFormState("error");
    }
  };

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/Josh-png12",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-navarro-rad-06ab18258",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "joshuanavarro933@gmail.com",
      href: "mailto:joshuanavarro933@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32">
      <div className="section-divider mb-32 -mt-16" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* ── Left: Text + Links ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="tag-pill mb-6">{t("contact.tag")}</div>

            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              {t("contact.title")}
            </h2>
            <p className="text-slate-400 text-[17px] leading-relaxed mb-10 max-w-md">
              {t("contact.subtitle")}
            </p>

            {/* Contact links */}
            <div className="space-y-3">
              {links.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-white/[0.14] border border-white/[0.07] transition-all group shine"
                >
                  <div className="text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">
                    {label}
                  </span>
                  <svg
                    className="ml-auto text-slate-700 group-hover:text-slate-400 transition-colors"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-7 space-y-5"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 tracking-wide">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.form.name.placeholder")}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 tracking-wide">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("contact.form.email.placeholder")}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 tracking-wide">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("contact.form.message.placeholder")}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              {/* Status messages */}
              {formState === "success" && (
                <p className="text-emerald-400 text-sm font-medium flex items-center gap-2">
                  <span>✓</span> {t("contact.form.success")}
                </p>
              )}
              {formState === "error" && (
                <p className="text-rose-400 text-sm font-medium">
                  {t("contact.form.error")}
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "sending" || formState === "success"}
                className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
              >
                {formState === "sending"
                  ? t("contact.form.sending")
                  : t("contact.form.submit")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
