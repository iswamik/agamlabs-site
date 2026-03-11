// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Lock, Globe, Heart, Cpu } from "lucide-react";
import { AgamLogomark } from "@/components/logos/agam-logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Agam Labs — privacy-first, offline-first Android apps built in India. Your data, your rules.",
};

const philosophy = [
  {
    icon: Lock,
    title: "Privacy by Design",
    description:
      "Not as a feature, but as an architecture. Our core apps don't even have the INTERNET permission. When an app does connect, it tells you exactly what, why, and where.",
  },
  {
    icon: Globe,
    title: "Built for India",
    description:
      "Designed for the way Indians use their phones — WhatsApp forwards, group photos, screenshots, limited storage. Practical tools for real problems.",
  },
  {
    icon: Heart,
    title: "Simple & Honest",
    description:
      "No dark patterns. No upsell pressure. Free tier that's genuinely useful. Premium that's worth it.",
  },
  {
    icon: Cpu,
    title: "Offline-First Always",
    description:
      "All processing happens on your phone by default. Some apps may offer optional cloud features — but they always work fully offline. Your data stays local unless you say otherwise.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* ─── Hero ─── */}
      <section className="gradient-mesh flex flex-col items-center justify-center px-6 py-20 text-center md:py-28">
        <AgamLogomark size={48} className="text-emerald-400 animate-on-scroll" />
        <p className="text-label mt-6 animate-on-scroll">About</p>
        <h1 className="text-display gradient-text mt-4 animate-on-scroll">
          Agam Labs
        </h1>
        <p className="mt-4 text-xl text-emerald-400 font-medium animate-on-scroll">
          &ldquo;Agam&rdquo; means inside — in Tamil.
        </p>
      </section>

      {/* ─── Mission ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-label animate-on-scroll">Our Mission</p>
        <h2 className="text-headline mt-3 animate-on-scroll">
          Your data belongs
          <br />
          <span className="gradient-text">inside your device.</span>
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 animate-on-scroll">
          <p className="text-lg text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 leading-relaxed">
            We build Android apps that respect your privacy by default. No analytics. No tracking. Everything
            runs on your device first — and your data never leaves without your explicit permission.
          </p>
          <p className="text-lg text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 leading-relaxed">
            Some of our apps never touch the internet. Others connect only when you choose. All of them
            put your data in your hands. We believe the best apps are the ones that work for you — not
            the ones that work on you.
          </p>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-label text-center animate-on-scroll">
          Our Philosophy
        </p>
        <h2 className="text-headline mt-3 text-center animate-on-scroll">
          How we build.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {philosophy.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 animate-on-scroll"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                <item.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── The Name ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="glass-card mx-auto max-w-3xl p-12 text-center animate-on-scroll">
          <p className="text-label">The Name</p>
          <p className="mt-6 text-lg text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 leading-relaxed">
            &ldquo;Agam&rdquo;{" "}
            <span className="rounded-lg bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-400">
              அகம்
            </span>{" "}
            is a Tamil word meaning &ldquo;inside&rdquo; or &ldquo;within.&rdquo;
            It represents our design philosophy: build from the inside out.
            Privacy by default. Offline-first. Your photos, your notifications, your digital life — it&apos;s all
            yours. We just build the tools to help you manage it better.
          </p>
          <Badge
            variant="outline"
            className="mt-8 border-emerald-500/30 text-emerald-400"
          >
            Built inside. For what&apos;s inside.
          </Badge>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <p className="text-label animate-on-scroll">Contact</p>
        <h2 className="text-headline mt-3 animate-on-scroll">Get in touch.</h2>
        <p className="mt-4 text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 animate-on-scroll">
          Questions, feedback, or just want to say hi?
        </p>
        <a
          href="mailto:hello@agamlabs.dev"
          className="mt-4 inline-block text-lg font-medium text-emerald-400 transition-colors hover:text-emerald-300 animate-on-scroll"
        >
          hello@agamlabs.dev
        </a>
      </section>
    </div>
  );
}
