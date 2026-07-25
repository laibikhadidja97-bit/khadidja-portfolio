"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Loader2, Mail, Send, AlertCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { profile, socials } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const configured =
    profile.formspreeId && profile.formspreeId !== "YOUR_FORM_ID";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!configured) {
      // No endpoint set yet — fall back to opening the user's mail client.
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${name}`,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind or a role to fill? I usually reply within a day."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-5">
          {/* Direct contact */}
          <div className="md:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <Mail size={22} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-white">
                Email me directly
              </h3>
              <p className="mt-1 break-all text-sm text-slate-400">
                {profile.email}
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="btn-ghost mt-4 w-full !py-2.5 text-sm"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white">
                Find me online
              </h3>
              <div className="mt-4 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
                  >
                    <s.icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass space-y-4 rounded-2xl p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                >
                  <Check size={16} />
                  Thanks! Your message has been sent.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </motion.p>
              )}
              {!configured && (
                <p className="text-center text-xs text-slate-500">
                  Tip: set your Formspree ID in <code>lib/data.ts</code> to
                  enable live sending (falls back to your mail app for now).
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
