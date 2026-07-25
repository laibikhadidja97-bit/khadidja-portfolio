"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, socials, stats } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute top-40 -left-10 -z-10 h-72 w-72 rounded-full bg-accent-indigo/20 blur-[120px]" />

      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="chip gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance &amp; full-time
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-slate-400"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-2 font-display text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-7xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="gradient-text">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl font-display text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              className="btn-ghost"
              download
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin size={16} className="text-accent-soft" />
              {profile.location}
            </span>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="card text-center"
            >
              <dt className="font-display text-3xl font-bold gradient-text">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
