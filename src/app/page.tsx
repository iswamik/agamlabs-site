// Copyright 2026 Agam Labs. All rights reserved.
import Link from "next/link";
import { CloudOff, ShieldCheck, Smartphone } from "lucide-react";
import { AgamLogomark } from "@/components/logos/agam-logo";
import { PhotoFreshLogomark } from "@/components/logos/photofresh-logo";
import { NotiFreshLogomark } from "@/components/logos/notifresh-logo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agam Labs",
  url: "https://agamlabs.dev",
  logo: "https://agamlabs.dev/brand/favicon.svg",
  description:
    "Agam Labs builds privacy-first Android apps for Indian users. No data collected. No cloud. Everything stays on your device.",
  email: "hello@agamlabs.dev",
};

export default function HomePage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* ─── Hero ─── */}
      <section className="gradient-mesh relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-label animate-on-scroll">
          Privacy-first Android Apps
        </p>
        <AgamLogomark size={56} className="mt-6 text-emerald-400 animate-on-scroll" />
        <h1 className="text-display gradient-text mt-4 animate-on-scroll">
          Agam Labs
        </h1>
        <p className="mt-4 text-xl text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 animate-on-scroll">
          Built inside. For what&apos;s inside.
        </p>
        <p className="mt-8 flex items-center gap-2 text-sm font-medium tracking-wide text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40 animate-on-scroll">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Zero data collected. Ever.
        </p>
      </section>

      {/* ─── Products (Bento Grid) ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-label animate-on-scroll">Our Products</p>
        <h2 className="text-headline mt-3 animate-on-scroll">
          Apps that work for you,
          <br />
          <span className="gradient-text">not on you.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* PhotoFresh — featured, larger */}
          <Link
            href="/photofresh"
            className="glass-card group md:col-span-7 flex flex-col justify-between p-8 transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-3">
                <PhotoFreshLogomark size={24} className="text-emerald-400" />
                <h3 className="text-2xl font-bold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                  PhotoFresh
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40 dark:border-white/10 dark:text-white/40 [html:not(.dark)_&]:border-black/10 [html:not(.dark)_&]:text-black/40">
                  Coming Soon
                </span>
              </div>
              <p className="mt-2 text-emerald-400 font-medium">
                Clean gallery. Clear mind.
              </p>
              <p className="mt-4 text-base text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed">
                Find duplicates, blurry shots, and old screenshots — clean up in
                minutes. 100% on-device. No uploads. No cloud.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Learn more
              <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>

          {/* NotiFresh — coming soon */}
          <Link
            href="/notifresh"
            className="glass-card group md:col-span-5 flex flex-col justify-between p-8 transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-3">
                <NotiFreshLogomark size={24} className="text-emerald-400" />
                <h3 className="text-2xl font-bold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                  NotiFresh
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40 dark:border-white/10 dark:text-white/40 [html:not(.dark)_&]:border-black/10 [html:not(.dark)_&]:text-black/40">
                  Coming Soon
                </span>
              </div>
              <p className="mt-2 text-emerald-400 font-medium">
                Tame your notifications.
              </p>
              <p className="mt-4 text-base text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed">
                Smart categorization, quiet hours, and batch management — all
                on-device, all private.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Learn more
              <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Trust Section ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-label text-center animate-on-scroll">
          Why Agam Labs
        </p>
        <h2 className="text-headline mt-3 text-center animate-on-scroll">
          Privacy isn&apos;t a feature.
          <br />
          <span className="gradient-text">It&apos;s the architecture.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: CloudOff,
              title: "No Cloud",
              description:
                "Our apps don't have the INTERNET permission. They literally cannot send your data anywhere.",
            },
            {
              icon: ShieldCheck,
              title: "No Analytics",
              description:
                "No Firebase. No Mixpanel. No Crashlytics. Not even crash reports. Zero telemetry.",
            },
            {
              icon: Smartphone,
              title: "Your Device Only",
              description:
                "All processing happens on your phone. Uninstall and everything is gone — there's nothing on our side.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 text-center animate-on-scroll"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
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
    </div>
  );
}
